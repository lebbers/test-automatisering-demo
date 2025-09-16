import { describe, beforeEach, expect, vi, it } from "vitest";
import { Person } from "./person";
import { PersonController } from "./person.controller";
import type { IPersonRepository } from "./person.repository";

describe("PersonController", () => {
  let controller: PersonController;
  let mockPersonRepository: IPersonRepository;

  beforeEach(() => {
    mockPersonRepository = {
      findByLastName: vi.fn(),
    };
    controller = new PersonController(mockPersonRepository);
  });

  describe("given a person exists in the repository", () => {
    beforeEach(() => {
      vi.mocked(mockPersonRepository.findByLastName).mockResolvedValue(
        new Person("Pieter", "Moens")
      );
    });

    it("should personalize greeting with the person's full name", async () => {
      const greeting = await controller.hello("moens");

      expect(greeting).toContain("Pieter Moens!");
    });
  });

  describe("when a person does not exist", () => {
    it("should ask who the person is", async () => {
      vi.mocked(mockPersonRepository.findByLastName).mockResolvedValue(
        undefined
      );

      const greeting = await controller.hello("Moens");

      expect(greeting).toBe("Wie is 'Moens'?");
    });
  });
});
