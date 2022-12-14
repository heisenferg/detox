Feature: Element expectations

    Expectations on elements can be conducted for differet properties

    @expectations @visibility
    Scenario: I can expect elements to be visible or to not be visible
        Given I tap on the 'Cities' section
        When I verify that the first image of the row is visible
        Then I verify that the last image of the row is not visible

    @expectations @existance
    Scenario: I can expect elements to be visible or to not be visible
        Given I tap on the 'Cities' section
        When I verify that the first image exists
        Then I verify that the Water counter do not exists

    @expectations @content
    Scenario: I can expect elements to hava a specific text, label or ID
        Given I tap on the 'Members' section
        When I expect the Member list header text to be 'Members'
        And I expect the add member button to have 'addMemberLabel' as label
        Then I expect the add member button to have 'addMemberIcon' as ID