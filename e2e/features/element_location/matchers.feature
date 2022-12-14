Feature: Element matchers

    Elements can be located using the varios matchers supported by Detox

    Background: I navigate to the Counters section
        Given I tap on the Counters section by text

    @matchers @text
    Scenario: I can locate elements by text
        Given I tap on the Counters sections by text
        When I tap on Water Counter
        And I tap on electricity Counter
        And I tap on gas Counter
        Then I tap on broadband Counter

    @matchers @id
    Scenario: I can locate elementes by ID
        When I tap on the water counter by ID
        And I tap on the electricity counter by ID
        And I tap on the gas counter by ID
        Then I tap on the broadband counter by ID

    @matchers @multiple
    Scenario: I can locate elements by multiple matchers
        When I tap on water counter title by type and text
        And I tap on the electricity counter by traits and text
        And I tap on the gas counter by ancestor ID and descendant text
        And I tap on the broadband counter by descendant text and ancestor type
        And I tap the back button