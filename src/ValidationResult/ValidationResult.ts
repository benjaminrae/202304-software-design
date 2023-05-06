export class ValidationResult {
  #result: boolean = true;
  #messages: string[];

  constructor(messages?: string[]) {
    this.#messages = messages ?? [];

    if (messages !== undefined) {
      this.#result = false;
    }
  }

  public addMessage(message: string) {
    this.#messages.push(message);

    if (this.#result) {
      this.#result = false;
    }
  }

  public buildValidationResult() {
    return {
      result: this.#result,
      messages: this.#messages.join('\n'),
    };
  }
}
