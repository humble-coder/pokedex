import { State, initState } from './state.js';

export function cleanInput(input: string): string[] {
	return input.toLowerCase().trim().split(/\s+/);
}

export function startREPL(): void {
 const repl = initState();

 repl.line.prompt();

 repl.line.on('line', (line: string) => {
    const cleanLine = cleanInput(line);
    if (cleanLine.length === 0 || cleanLine[0] === "") {
      repl.line.prompt();
    }
	else {
		repl.commands[cleanLine[0]].callback(repl);
		repl.line.prompt();
	}
  });
};
