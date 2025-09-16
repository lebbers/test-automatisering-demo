// PersonGreetingController.test.ts - TDD Style
import { describe, test, expect } from "vitest";
import { PersonRepository } from "./person.repository";
import { Person } from "./person";

describe("PersonRepository", () => {
  const person1 = new Person("Pieter", "Moens");
  const person2 = new Person("Kees", "Bout");

  describe("findByLastName", () => {
    test("should return undefined if person does not exist", async () => {
      // Arrange
      const repository = new PersonRepository([person1, person2]);

      // Act
      const result = await repository.findByLastName("Broek");

      // Assert
      expect(result).toBeUndefined();
    });

    test("should return person if person exists", async () => {
      // Arrange
      const repository = new PersonRepository([person1, person2]);

      // Act
      const result = await repository.findByLastName("Bout");

      // Assert
      expect(result).toBe(person2);
    });
  });
});
