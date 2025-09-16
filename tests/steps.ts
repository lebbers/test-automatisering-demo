import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("The application is started", async ({ page }) => {
  await page.goto("/");
});

When(
  "The user enters {string} in field {string}",
  async ({ page }, text, field) => {
    await page.getByRole("textbox", { name: field }).fill(text);
  }
);

When("The user clicks the {string} button", async ({ page }, button) => {
  await page.getByRole("button", { name: button }).click();
});

Then("The text {string} is visible", async ({ page }, text) => {
  expect(await page.getByText(text)).toBeVisible();
});
