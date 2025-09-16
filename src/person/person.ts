export class Person {
  private readonly firstName: string;
  private readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getFullName(): string {
    return [this.firstName, this.lastName].join(" ");
  }
}
