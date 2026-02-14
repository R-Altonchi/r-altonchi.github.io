export const PROMPT = "> ";
let termElement;

let cursorVisible = true;
let lastRenderedLine = "";

setInterval(() => {
    cursorVisible = !cursorVisible;
    renderLine();
}, 500);

export function initTerm(element) {
    termElement = element;
}

export function print(text = "") {
    termElement.textContent += text + "\n";
}

export function printinline(text = "") {
    termElement.textContent += text;
}

export function updateLine(lineText) {
    lastRenderedLine = lineText;
    renderLine();
}

export function renderLine() {
    const lines = termElement.textContent.split("\n");
    const cursorChar = cursorVisible ? "_" : " ";
    lines[lines.length - 1] = PROMPT + (lastRenderedLine ?? "") + cursorChar;
    termElement.textContent = lines.join("\n");
}

export function clearTerm() {
    termElement.textContent = "";
}
