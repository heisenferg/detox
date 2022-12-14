Feature: Dates can be set in calendar

    As a user I can set a date using a calendar

    @actions @calendar
    Scenario: I can select a date form the calendar
        Given I tap on the 'Members' section
        When I tap on Add member Icon
        Then I select 'Friday' '14' of 'April' '2023' date in the calendar