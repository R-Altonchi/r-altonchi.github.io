import { print } from '../term.js';

export default function help(commands) {
    print("[Available commands]:");
    print(Object.keys(commands).join("\n"));
}

