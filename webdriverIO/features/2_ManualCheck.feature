Feature: The FACEBOOK BRANDING Website

  Scenario Outline: As a new user, I am able to complete sign-up
  
  Background:
    Given I am still on the home page
    When I manually select 'I'm not a robot' and click 'Sign Up'
    Then I should see email verification instruction
