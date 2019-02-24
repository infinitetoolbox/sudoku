export class NoSolutionError extends Error {
  constructor() {
    super('No solution found.');
  }
}
