Feature: Scrolling can be carried out

    As a user I can scroll vertically and horizontally

    @actions @scrolling @verticalscrolling
    Scenario: I can scroll vertically
        Given I tap on the 'Members' section
        When I tap on Add member Icon
        And I scroll 'formBackground' 350 pixels 'down'
        And I scroll 'formBackground' 350 pixels 'up'
        And I scroll 'formBackground' 350 pixels 'down' with X: 0.5 and Y: 0.85
        And I scroll 'formBackground' 350 pixels 'up' with X: 0.5 and Y: 0.15

    @actions @scrolling @verticalscrolling
    Scenario: I can scroll vertically to edges
        Given I tap on the 'Members' section
        And I tap on Add member Icon
        When I scroll 'formBackground' to the 'bottom'
        Then I scroll 'formBackground' to the 'top'


    @actions @scrolling @verticalscrolling @test
    Scenario: I can scroll vertically to element
        Given I tap on the 'Members' section
        And I tap on Add member Icon
        When I scroll 'formBackground' to 'formLabel-startDate' at 150 pixels 'down'
        Then I scroll 'formBackground' to 'formLabel-surname' at 50 pixels 'up'


    @actions @scrolling @horizontalscrolling
    Scenario: I can scroll horizontally on a FlatList
        Given I tap on the 'Cities' section
        When I scroll 'ìmageBackground-europe' to 'image-europe-3' at 50 pixels 'right'
        Then I scroll 'ìmageBackground-europe' to 'image-europe-0' at 50 pixels 'left'