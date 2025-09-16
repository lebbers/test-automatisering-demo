Feature: Welcome

    Scenario: 
        Given   The application is started
        When    The user enters "moens" in field "User"
        And     The user clicks the "Login" button
        Then    The text "Hallo Pieter Moens!" is visible