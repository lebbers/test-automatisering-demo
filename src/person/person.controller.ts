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
      let greeting: string;

      if (currentHour >= 0 && currentHour < 6) {
        greeting = "Goedenacht";
      } else if (currentHour >= 6 && currentHour < 12) {
        greeting = "Goedemorgen";
      } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Goedemiddag";
      } else {
        greeting = "Goedenavond";
      }

      return `${greeting} ${foundPerson.getFullName()}!`;
    }
    return `Wie is '${lastName}'?`;
  }
}
