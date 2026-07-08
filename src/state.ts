import { createInterface, type Interface } from 'readline';
import { commandExit } from './command_exit.js';
import { commandHelp } from './command_help.js';

export type CLICommand = {
	name: string;
	description: string;
	callback: (state: State) => void;
};

export type State = {
	line: Interface,
	commands: Record<string, CLICommand>
}

export function initState(): State {
	const registry = {
		exit: {
			name: "exit",
			description: "Exit the Pokedex",
			callback: commandExit
		},
		help: {
			name: "help",
			description: "Display help info",
			callback: commandHelp
		}
	};

	const rl = createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: "Pokedex > "
  	});

	const state: State = {
		line: rl,
		commands: registry
	}
	return state;

}