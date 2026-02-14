import * as Term from './term.js';
import * as Shell from './shell.js';
import help from './commands/help.js';
import clear from './commands/clear.js';
import whoami from './commands/whoami.js';
import start from './commands/start.js';

const commands = { 
  help: () => help(commands),
  clear: clear,
  whoami: whoami,
  start: start,
};

export function init() {
    const term = document.getElementById("term");
    Term.initTerm(term);
    Shell.initShell(commands, "start");
    document.addEventListener("keydown", Shell.handleKey);
}

export function destroy() {
    document.removeEventListener("keydown", Shell.handleKey);
    Term.clearTerm();
}
