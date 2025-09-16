import { Person } from "./person/person";
import { PersonController } from "./person/person.controller";
import { PersonRepository } from "./person/person.repository";
import { signal } from "./signal";

const personRepository = new PersonRepository([
  new Person("Pieter", "Moens"),
  new Person("Kees", "Bout"),
]);

export class App {
  private controller: PersonController;
  private currentUser = signal("", () => this.render());

  private readonly loginForm =
    document.querySelector<HTMLFormElement>("#login-form")!;
  private readonly logoutButton =
    document.querySelector<HTMLButtonElement>("#logout-button")!;
  private readonly welcomeText =
    document.querySelector<HTMLHeadingElement>("#welcome-text")!;

  constructor(controller = new PersonController(personRepository)) {
    this.controller = controller;

    this.loginForm.onsubmit = this.login;
    this.logoutButton.onclick = this.logout;
    this.render();
  }

  private login = (event: Event) => {
    event.preventDefault();
    const formData = new FormData(this.loginForm);

    this.currentUser.value = formData.get("username")?.toString() ?? "";
  };

  private logout = () => {
    this.currentUser.value = "";
  };

  async render() {
    if (this.currentUser.value) {
      const greeting = await this.controller.hello(this.currentUser.value);
      this.welcomeText.innerText = greeting;
      this.loginForm.hidden = true;
      this.logoutButton.hidden = false;
    } else {
      this.welcomeText.innerText = "";
      this.loginForm.hidden = false;
      this.logoutButton.hidden = true;
    }
  }
}
