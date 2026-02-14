import * as Term from './term.js';
import * as Shell from './shell.js';
import help from './commands/help.js';
import clear from './commands/clear.js';
import whoami from './commands/whoami.js';

const commands = { 
  help: () => help(commands),
  clear: clear,
  whoami: whoami,
};

const term = document.getElementById("term");
Term.initTerm(term);

Shell.initShell(commands);
document.addEventListener("keydown", Shell.handleKey);

