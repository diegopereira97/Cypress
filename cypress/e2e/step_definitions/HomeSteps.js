/// <reference types="Cypress" />
/* global Given, Then, When */

import home from 'cypress\support\pages\HomePages.js'

Given("que tenho acesso no ConnectPeople", () => {
    cy.allure().tag('visit')
    cy.visit("https://verz.com.br/fgts/")
})


