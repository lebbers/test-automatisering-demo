import type { Person } from "./person";

export interface IPersonRepository {
  findByLastName(lastName: string): Promise<Person | undefined>;
}

export class PersonRepository implements IPersonRepository {
  readonly #db: Person[] = [];

  constructor(db: Person[] = []) {
    this.#db = db;
  }

  async findByLastName(lastName: string): Promise<Person | undefined> {
    return this.#db.find(
      (p) => p.getLastName().toLowerCase() === lastName.toLowerCase()
    );
  }

  async append(person: Person): Promise<void> {
    this.#db.push(person);
  }
}
