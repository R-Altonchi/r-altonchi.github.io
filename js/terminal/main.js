import * as Term from './term.js';
import * as Shell from './shell.js';
import * as commandModules from "./commands/index.js";
const commands = { ...commandModules };
commands.help = () => commandModules.help(commands);

export function init() {
  const term = document.getElementById("term");
  Term.initTerm(term);
  document.addEventListener("keydown", Shell.handleKey);
  Shell.initShell(commands, "start");
}

export function destroy() {
  document.removeEventListener("keydown", Shell.handleKey);
  Term.clearTerm();
}
