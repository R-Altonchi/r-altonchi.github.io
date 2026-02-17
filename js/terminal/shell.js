import * as Term from './term.js';

let keys = [];
let commands = {};

export function initShell(commandMap, initcmd) {
  commands = commandMap;
  executeCommand(initcmd);
}

export function handleKey(event) {
  if (event.key === "Backspace") keys.pop();
  else if (event.key.length === 1) { keys.push(event.key); }
  else if (event.key === "Enter") {
    const cmdStr = keys.join("");
    keys = [];
    Term.print("");
    executeCommand(cmdStr);
  }

  Term.updateLine(keys.join(""));
  Term.scrollToBottom();
}

function executeCommand(cmdStr) {
  if (commands[cmdStr]) commands[cmdStr]();
  else if (cmdStr.length > 0) Term.print("Unknown command: " + cmdStr);
}

