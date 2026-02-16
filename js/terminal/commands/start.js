import { print, printinline } from '../term.js';

export default function whoami() {
  print(" ███████████                 ███████     █████████ ");
  print("░░███░░░░░███              ███░░░░░███  ███░░░░░███");
  print(" ░███    ░███             ███     ░░███░███    ░░░ ");
  print(" ░██████████   ██████████░███      ░███░░███████   ");
  print(" ░███░░░░░███ ░░░░░░░░░░ ░███      ░███ ░░░░░░░░███");
  print(" ░███    ░███            ░░███     ███  ███    ░███");
  print(" █████   █████            ░░░███████░  ░░█████████ ");
  print("░░░░░   ░░░░░               ░░░░░░░     ░░░░░░░░░  ");
  print("Welcome to my portfolio website. For the list of commands type \"help\" ")
  print("Or feel free to use the navbar to the side for easier navigation");
  printinline(">");
}
