Feature: Swiping can be carriead out

    As a user I can swipe vertically and horizontally
    @actions @swiping @verticalswiping
    Scenario: I can swipe vertically
        Given I tap on the 'Members' section
        When I tap on Add member Icon
        And I swipe 'formBackground' 'up'
        And I swipe 'formBackground' 'down'
        And I swipe 'formBackground' 'down' 'slow'
        Then I swipe 'formBackground' 'up' 'slow' for 0.1 of the screen

    @actions @swipin @horizontalswiping
    Scenario: I can swipe horizontally
        Given I tap on the 'Cities' section
        When I swipe 'ìmageBackground-usa/canada' 'left'
        And I swipe 'ìmageBackground-usa/canada' 'right' 'fast'
        Then I swipe 'ìmageBackground-usa/canada' 'left' 'slow' for 0.1 of the screen
