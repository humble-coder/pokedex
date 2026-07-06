import { createInterface, Interface } from 'readline';

export function cleanInput(input: string): string[] {
	return input.toLowerCase().trim().split(/\s+/);
}

export let rl: Interface | null = null;

export function startREPL(): void {
  rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > "
  });

  rl?.prompt();

  rl.on('line', (line: string) => {
    const cleanLine = cleanInput(line);
    if (cleanLine.length === 0 || cleanLine[0] === "") {
      rl?.prompt();
    }
    else {
      console.log(`Your command was: ${cleanLine[0]}`);
      rl?.prompt();
    }
  });
};
