import type { IPersonRepository } from "./person.repository";

export class PersonController {
  private readonly personRepository: IPersonRepository;

  constructor(personRepository: IPersonRepository) {
    this.personRepository = personRepository;
  }

  async hello(lastName: string): Promise<string> {
    const foundPerson = await this.personRepository.findByLastName(lastName);

    if (foundPerson) {
      const currentHour = new Date().getHours();

      if (currentHour < 12) {
        return `Goedemorgen ${foundPerson.getFullName()}!`;
      } else {
        return `Goedemiddag ${foundPerson.getFullName()}!`;
      }
    }
    return `Wie is '${lastName}'?`;
  }
}
