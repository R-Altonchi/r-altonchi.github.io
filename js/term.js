export const PROMPT = "> ";
let termElement;

export function initTerm(element) {
    termElement = element;
}

export function print(text = "") {
    termElement.textContent += text + "\n";
}

export function updateLine(lineText) {
    const lines = termElement.textContent.split("\n");
    lines[lines.length - 1] = PROMPT + lineText;
    termElement.textContent = lines.join("\n");
}

export function clearTerm() {
    termElement.textContent = "";
}

