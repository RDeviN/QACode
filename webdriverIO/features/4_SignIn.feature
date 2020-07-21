Feature: The FACEBOOK BRANDING Website

  Scenario Outline: After I verify email, I sign In
  
  Background:
    Given I login to Facebook Branding using my email ID and password
    When I click on sign In
    Then I am able to login and see no requests
