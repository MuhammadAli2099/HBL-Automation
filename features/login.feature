Feature: Login Validation

  @login
  Scenario: Valid maker login and logout
    Given the user opens the HBL application
    When the maker logs in with valid credentials
    Then the dashboard should be visible
    And the user logs out successfully

  @login
  Scenario: Invalid login should show error
    Given the user opens the HBL application
    When the user logs in with invalid credentials
    Then a login error should be displayed