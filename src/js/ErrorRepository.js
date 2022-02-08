import errorList from "./ErrorList";

export default class ErrorRepository {
  constructor() {
    this.errors = new Map(errorList);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return "Unknown error";
  }
}