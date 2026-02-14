const term = document.getElementById("term");
keys = [];
const PROMPT = "> ";

function print(text="") {
  term.textContent += text + "\n";
}


document.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {keys.pop();}
  else if (event.key === "Shift") {}
  else if (event.key === "Enter") {
    const reqcmd = keys.join("");
    keys = [];
    print("");
    executeCommand(reqcmd);
  }
  else {keys.push(event.key);}
 
  const lines = term.textContent.split("\n");
  lines[lines.length - 1] = PROMPT + keys.join("");
  term.textContent = lines.join("\n");
});

function executeCommand(cmd) {
  if (commands[cmd]) {
    commands[cmd]();
  } else if (cmd.length > 0) {
    print("Unknown command: " + cmd);
  }
}


const commands = { 
  whoami: whoami,
  clear: clear,
};

function whoami() {
  print("Hi! I am Rafik Altonchi"); 
}

function clear() {term.textContent = ""};
