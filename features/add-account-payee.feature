@payee
Feature: Add Account Payee Validation

  Background:
    Given the maker is logged in to the HBL application

  Scenario: Create account payee successfully with valid data
    When the maker creates an account payee with valid data
    Then the payee request should be submitted successfully

  Scenario: Account payee creation should fail with invalid account number
    When the maker enters payee details with invalid account number
    Then the payee submission should be blocked

  Scenario: Account payee creation should fail with invalid email
    When the maker enters payee details with invalid email
    Then the payee submission should be blocked

  Scenario: Account payee creation should fail with blank nickname
    When the maker enters payee details with blank nickname
    Then the payee submission should be blocked

  Scenario: Account payee creation should fail with blank account number
    When the maker enters payee details with blank account number
    Then the payee submission should be blocked
