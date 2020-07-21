Feature: The FACEBOOK BRANDING Website

  Scenario Outline: As a new user, I am able to verify the email
  
  Background:
    Given I login to my email using my email ID and password
    When I look out for the verification email I see one in my inbox
    Then I open it to click the verify email link
