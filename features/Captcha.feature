Feature: The FACEBOOK BRANDING Website

  Scenario Outline: As a new user, I can do a fresh sign-up
  
  Background:
    Given I am on the home page
    When I click on My Requests and Sign Up with <First Name>, <Last Name>, <Email>, <Password>, <Confirm Password>
    Then I should see a 'I'm not a robot' message
