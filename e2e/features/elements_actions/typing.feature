Feature: Typing into input elements

    As a user I can type
    @actions @Typing
    Scenario: I can type in an input field
        Given I tap on the 'Members' section
        When I tap on Add member Icon
        Then I type 'Fernando' as name and 'Test' as Surname
        And I replace 'Fernando' in name and 'Test' in Surname
        Then I enter 'Fernando' in name and 'Test' in surname