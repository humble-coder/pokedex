import { State } from './state.js';

export function commandHelp(state: State): void {
	console.log("Welcome to the Pokedex!");
	console.log("Usage:\n");
	for (const [name, command] of Object.entries(state.commands)) {
		console.log(`${name}: ${command.description}`);
	}
	console.log("\n");
}