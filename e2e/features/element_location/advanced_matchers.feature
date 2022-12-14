Feature: Advanced matchers

    Elements can be matched dynamicly

    @advacedmatchers @dynamicly
    Scenario: Home sections can match dynamicly
        Given I tap on the "<section>" section

        Examples:
            | section   |
            | counters  |
            | members   |
            | cities    |
            | animation |

    @advancedmatchers @list
    Scenario: List element can be matched dynamically
        Given I tap on the 'Cities' section
        Then I tap on the "<continent>" title and image

        Examples:
            | continent  |
            | europe     |
            | usa/canada |
    # | Asia       |

    @advancedmatchers @headers
    Scenario: I can math elements in navigation Headers
        Given I tap on the 'Members' section
        Then I tap on Add member Icon

    @advancedmatchers @navigationtab
    Scenario: I can locate elementes on the navigation tab
        Given I tap on the cities navigationtab
        Given I tap on the "<section>" navigationtab
        Then I tap on the "<section_2>" navigationtab

        Examples:
            | section | section_2 |
            | Cities  | Home      |
            | Members | Cities    |
            | Members | Home      |
