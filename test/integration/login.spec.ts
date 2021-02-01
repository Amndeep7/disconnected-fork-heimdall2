/// <reference types="cypress" />

import {
  BAD_LDAP_AUTHENTICATION,
  BAD_LOGIN_AUTHENTICATION,
  CREATE_USER_DTO_TEST_OBJ,
  LDAP_AUTHENTICATION,
  LOGIN_AUTHENTICATION
} from '../../apps/backend/test/constants/users-test.constant';
import LoginPage from '../support/pages/LoginPage';
import RegistrationPage from '../support/pages/RegistrationPage';
import LoginPageVerifier from '../support/verifiers/LoginPageVerifier';
import ToastVerifier from '../support/verifiers/ToastVerifier';

context('Login', () => {
  // Pages, verifiers, and modules
  const loginPage = new LoginPage();
  const loginPageVerifier = new LoginPageVerifier();
  const registrationPage = new RegistrationPage();
  const toastVerifier = new ToastVerifier();

  // Run before each test
  beforeEach(() => {
    registrationPage.register(CREATE_USER_DTO_TEST_OBJ);
    cy.visit('/login');
  });

  // The test
  describe('Login Form', () => {
    it('authenticates a user with valid credentials', () => {
      loginPageVerifier.loginFormPresent();
      loginPage.login(LOGIN_AUTHENTICATION);
      toastVerifier.toastTextContains('You have successfully signed in.');
    });
    it('authenticates an ldap user with valid credentials', () => {
      loginPage.switchToLDAPAuth();
      loginPageVerifier.ldapLoginFormPresent();
      loginPage.ldapLogin(LDAP_AUTHENTICATION);
      toastVerifier.toastTextContains('You have successfully signed in.');
    });
    it('fails to authenticate a user with invalid credentials', () => {
      loginPage.login(BAD_LOGIN_AUTHENTICATION);
      toastVerifier.toastTextContains('Incorrect Username or Password');
    });
    it('fails to authenticate an ldap user with invalid credentials', () => {
      loginPage.switchToLDAPAuth();
      loginPage.ldapLogin(BAD_LDAP_AUTHENTICATION);
      toastVerifier.toastTextContains('Unauthorized');
    });
  });
});
