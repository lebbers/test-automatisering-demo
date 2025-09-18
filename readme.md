# Test Automatisering Demo

Simpele applicatie met alleen een login flow

**Vereisten:**

- Toon een gepersonaliseerde welkomstekst nadat een gebruiker is ingelogd.
- In de welkomstekst wordt de volledige naam van de gebruiker weergegeven
- Als de gebruiker niet bestaat, wordt gemeld dat deze gebruiker niet bekend is.

## Opdracht 1

Breidt de applicatie uit met de volgende feature:

- Afhankelijk van het tijdstip wordt de gebruiker begroet met "Goedemorgen" of "Goedemiddag".

## Opdracht 2

- Breidt de begroeting uit met "Goedenavond" en "Goedenacht" afhankelijk van het tijdstip.
- Schrijf eerst de tests, implementeer de code zodat de test slaagt. Verbeter de code.
- Optioneel: Schrijf tests voor edge cases (bijv. wat gebeurt er om exact 12 uur)

## Usage

### Install

```sh
npm ci
```

### Development

```sh
npm run dev
```

### Build

```sh
npm run build
```

### Tests

**Unit tests**

```sh
npm run test
```

**End-to-end tests**

```sh
# First-time setup
npx playwright install --with-deps

# Run e2e tests
npm run test:e2e
```

## Links

- https://agilemanifesto.org/iso/nl/manifesto.html
- http://www.extremeprogramming.org/rules.html
- https://martinfowler.com/articles/practical-test-pyramid.html
- https://martinfowler.com/bliki/TestDrivenDevelopment.html
- https://martinfowler.com/bliki/GivenWhenThen.html
- https://wiki.c2.com/?MakeItWorkMakeItRightMakeItFast
