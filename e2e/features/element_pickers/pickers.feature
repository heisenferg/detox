Feature: The different Pickers can be interacted with on both operating systems

    DatePickers, Pickers and time pickers can be used in Detox

    Background: I navigate to the Add member screnn
        Given I tap on the 'Members' section
        And I tap on Add member Icon

    @pickers @DatePickers
    Scenario: I can interact with the Datepickers
        When I enter '09' '10' '1985' as Date of Birth
        And I select 'Thursday' as Start Day
