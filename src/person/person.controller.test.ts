import { describe, beforeEach, expect, vi, it, afterEach } from "vitest";
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

  describe("given the time of day", () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it("should return 'Goedenacht' between 00:00 and 06:00", async () => {
      // Arrange
      const date = new Date(2000, 1, 1, 0, 0, 0);
      vi.setSystemTime(date);
      vi.mocked(mockPersonRepository.findByLastName).mockResolvedValue(
        new Person("Pieter", "Moens")
      );

      // Act
      const greeting = await controller.hello("Moens");

      // Assert
      expect(greeting).toBe("Goedenacht Pieter Moens!");
    });

    it("should return 'Goedemorgen' between 06:00 and 12:00", async () => {
      // Arrange
      const date = new Date(2000, 1, 1, 6, 0, 0);
      vi.setSystemTime(date);
      vi.mocked(mockPersonRepository.findByLastName).mockResolvedValue(
        new Person("Pieter", "Moens")
      );

      // Act
      const greeting = await controller.hello("Moens");

      // Assert
      expect(greeting).toBe("Goedemorgen Pieter Moens!");
    });

    it("should return 'Goedemiddag' between 12:00 and 18:00", async () => {
      // Arrange
      const date = new Date(2000, 1, 1, 12, 0, 0);
      vi.setSystemTime(date);
      vi.mocked(mockPersonRepository.findByLastName).mockResolvedValue(
        new Person("Pieter", "Moens")
      );

      // Act
      const greeting = await controller.hello("Moens");

      // Assert
      expect(greeting).toBe("Goedemiddag Pieter Moens!");
    });

    it("should return 'Goedenavond' between 18:00 and 00:00", async () => {
      // Arrange
      const date = new Date(2000, 1, 1, 18, 0, 0);
      vi.setSystemTime(date);
      vi.mocked(mockPersonRepository.findByLastName).mockResolvedValue(
        new Person("Pieter", "Moens")
      );

      // Act
      const greeting = await controller.hello("Moens");

      // Assert
      expect(greeting).toBe("Goedenavond Pieter Moens!");
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
