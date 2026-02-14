import * as Term from './term.js';

let keys = [];
let commands = {};

export function initShell(commandMap) {
    commands = commandMap;
}

export function handleKey(event) {
    if (event.key === "Backspace") keys.pop();
    else if (event.key === "Shift") {}
    else if (event.key === "Enter") {
        const cmdStr = keys.join("");
        keys = [];
        Term.print("");
        executeCommand(cmdStr);
    } else keys.push(event.key);

    Term.updateLine(keys.join(""));
}

function executeCommand(cmdStr) {
    if (commands[cmdStr]) commands[cmdStr]();
    else if (cmdStr.length > 0) Term.print("Unknown command: " + cmdStr);
}

