import { beforeEach, describe, expect, test } from "vitest";
import { Person } from "./person";

describe("Person", () => {
  let person: Person;

  beforeEach(() => {
    // arrange
    person = new Person("Pieter", "Moens");
  });

  test("should return first name", () => {
    // act
    const firstName = person.getFirstName();

    // assert
    expect(firstName).toBe("Pieter");
  });

  test("should return last name", () => {
    // act
    const lastName = person.getLastName();

    // assert
    expect(lastName).toBe("Moens");
  });

  test("should return full name", () => {
    // act
    const fullName = person.getFullName();

    // assert
    expect(fullName).toBe("Pieter Moens");
  });
});
