/// <reference types="Cypress" />

const loc = require('../elements/CapturaPropostaElements').CapturaPropostaElements
import user from '../../fixtures/massadeteste.json'

class capturaPropostaDadosPage {
    validarDadosBancariosSemAgencia() {
        let agencia=' '
        let cvAgencia=' '
        let conta=user.DADOS_BANCARIOS.CONTA
        let tipoDeConta='Poupanca'

        cy.get(loc.DADOS_BANCARIOS.FORM).click()
        cy.get(loc.DADOS_BANCARIOS.BANCO).type('Banco{downarrow}{enter}', { delay: 100 })
        cy.get(loc.DADOS_BANCARIOS.AGENCIA).type(agencia)
        cy.get(loc.DADOS_BANCARIOS.CODIGO_AGENCIA).type(cvAgencia)
        cy.get(loc.DADOS_BANCARIOS.CONTA).type(conta)
        if (tipoDeConta == 'Poupanca') {
            cy.get(loc.DADOS_BANCARIOS.POUPANCA).click()
        } else {
            cy.get(loc.DADOS_BANCARIOS.CORRENTE).click()
        }

    }
    validarDadosBancariosAgenciaInvalida() {
        let agencia='123'
        let cvAgencia=user.DADOS_BANCARIOS.DV_AGENCIA
        let conta=user.DADOS_BANCARIOS.CONTA
        let tipoDeConta='Poupanca'

        cy.get(loc.DADOS_BANCARIOS.FORM).click()
        cy.get(loc.DADOS_BANCARIOS.BANCO).type('Banco{downarrow}{enter}', { delay: 100 })
        cy.get(loc.DADOS_BANCARIOS.AGENCIA).type(agencia)
        cy.get(loc.DADOS_BANCARIOS.CODIGO_AGENCIA).type(cvAgencia)
        cy.get(loc.DADOS_BANCARIOS.CONTA).type(conta)
        if (tipoDeConta == 'Poupanca') {
            cy.get(loc.DADOS_BANCARIOS.POUPANCA).click()
        } else {
            cy.get(loc.DADOS_BANCARIOS.CORRENTE).click()
        }

    }
    avisoCampoObrigatorio() {
        cy.xpath(loc.XP_MSG_ERRO).should('contain', 'Campo obrigatório')
    }
    validarCPFTela() {
        cy.xpath(loc.DADOS_BANCARIOS.XP_CPF).should('exist')
    }
    avisoOrgaoEmissor() {

        cy.xpath(loc.XP_MSG_ERRO).should('contain', ' Orgão emissor inválido ')

    }
    avisoAgenciaValida() {

        cy.xpath(loc.XP_MSG_ERRO).should('contain', ' Digite uma agência válida ')

    }
    validarDadosPessoaisOrgaoEmissor(emissor){
        let email = user.DADOS_PESSOAIS.EMAIL
        let mae = user.DADOS_PESSOAIS.NOME_MAE
        let rg = user.DADOS_PESSOAIS.RG
        let orgaoEmissor = emissor
        let nascimento = user.DADOS_PESSOAIS.NASCIMENTO

        cy.get(loc.DADOS_PESSOAIS.FORM).click()
        cy.get(loc.DADOS_PESSOAIS.EMAIL).type(email)
        cy.get(loc.DADOS_PESSOAIS.NACIONALIDADE).type('Br{downarrow}{enter}', { delay: 100 })
        cy.get(loc.DADOS_PESSOAIS.MAE).type(mae)
        cy.get(loc.DADOS_PESSOAIS.RG).type(rg)
        cy.get(loc.DADOS_PESSOAIS.ORGAOEMISSOR).type(orgaoEmissor)
        cy.get(loc.DADOS_PESSOAIS.UFDOCUMENTO).type('C{downarrow}{enter}', { delay: 100 })
        cy.get(loc.DADOS_PESSOAIS.NASCIMENTO).type(nascimento)
        cy.get(loc.DADOS_PESSOAIS.SEXO).type('M{downarrow}{enter}', { delay: 100 })
        cy.get(loc.DADOS_PESSOAIS.ESTADO_CIVIL).type('S{downarrow}{enter}', { delay: 100 })
    }
    validarDadosPessoaisSemNacionalidade(){
        let email = user.DADOS_PESSOAIS.EMAIL
        let mae = user.DADOS_PESSOAIS.NOME_MAE
        let rg = user.DADOS_PESSOAIS.RG
        let orgaoEmissor = user.DADOS_PESSOAIS.ORGAO_EMISSOR
        let nascimento = user.DADOS_PESSOAIS.NASCIMENTO

        cy.get(loc.DADOS_PESSOAIS.FORM).click()
        cy.get(loc.DADOS_PESSOAIS.EMAIL).type(email)
        cy.get(loc.DADOS_PESSOAIS.NACIONALIDADE).type('{enter}', { delay: 100 })
        cy.get(loc.DADOS_PESSOAIS.MAE).type(mae)
        cy.get(loc.DADOS_PESSOAIS.RG).type(rg)
        cy.get(loc.DADOS_PESSOAIS.ORGAOEMISSOR).type(orgaoEmissor)
        cy.get(loc.DADOS_PESSOAIS.UFDOCUMENTO).type('C{downarrow}{enter}', { delay: 100 })
        cy.get(loc.DADOS_PESSOAIS.NASCIMENTO).type(nascimento)
        cy.get(loc.DADOS_PESSOAIS.SEXO).type('M{downarrow}{enter}', { delay: 100 })
        cy.get(loc.DADOS_PESSOAIS.ESTADO_CIVIL).type('S{downarrow}{enter}', { delay: 100 })
    }
    validarDadosPessoaisSemEstadoCivil(){
        let email = user.DADOS_PESSOAIS.EMAIL
        let mae = user.DADOS_PESSOAIS.NOME_MAE
        let rg = user.DADOS_PESSOAIS.RG
        let orgaoEmissor = user.DADOS_PESSOAIS.ORGAO_EMISSOR
        let nascimento = user.DADOS_PESSOAIS.NASCIMENTO

        cy.get(loc.DADOS_PESSOAIS.FORM).click()
        cy.get(loc.DADOS_PESSOAIS.EMAIL).type(email)
        cy.get(loc.DADOS_PESSOAIS.NACIONALIDADE).type('Br{downarrow}{enter}', { delay: 100 })
        cy.get(loc.DADOS_PESSOAIS.MAE).type(mae)
        cy.get(loc.DADOS_PESSOAIS.RG).type(rg)
        cy.get(loc.DADOS_PESSOAIS.ORGAOEMISSOR).type(orgaoEmissor)
        cy.get(loc.DADOS_PESSOAIS.UFDOCUMENTO).type('C{downarrow}{enter}', { delay: 100 })
        cy.get(loc.DADOS_PESSOAIS.NASCIMENTO).type(nascimento)
        cy.get(loc.DADOS_PESSOAIS.SEXO).type('M{downarrow}{enter}', { delay: 100 })
        cy.get(loc.DADOS_PESSOAIS.ESTADO_CIVIL).type('{enter}', { delay: 100 })
    }
    validarDadosPessoaisSemRG(){
        let email = user.DADOS_PESSOAIS.EMAIL
        let mae = user.DADOS_PESSOAIS.NOME_MAE
        let rg = ' '
        let orgaoEmissor = user.DADOS_PESSOAIS.ORGAO_EMISSOR
        let nascimento = user.DADOS_PESSOAIS.NASCIMENTO

        cy.get(loc.DADOS_PESSOAIS.FORM).click()
        cy.get(loc.DADOS_PESSOAIS.EMAIL).type(email)
        cy.get(loc.DADOS_PESSOAIS.NACIONALIDADE).type('Br{downarrow}{enter}', { delay: 100 })
        cy.get(loc.DADOS_PESSOAIS.MAE).type(mae)
        cy.get(loc.DADOS_PESSOAIS.RG).type(rg)
        cy.get(loc.DADOS_PESSOAIS.ORGAOEMISSOR).type(orgaoEmissor)
        cy.get(loc.DADOS_PESSOAIS.UFDOCUMENTO).type('C{downarrow}{enter}', { delay: 100 })
        cy.get(loc.DADOS_PESSOAIS.NASCIMENTO).type(nascimento)
        cy.get(loc.DADOS_PESSOAIS.SEXO).type('M{downarrow}{enter}', { delay: 100 })
        cy.get(loc.DADOS_PESSOAIS.ESTADO_CIVIL).type('S{downarrow}{enter}', { delay: 100 })
    }
    validarDadosProfissionaisSemOcupacao() {
        let renda = user.DADOS_PROFISSIONAIS.RENDA
        
        cy.get(loc.DADOS_PROFISSIONAIS.PROFISSAO).type('A{downarrow}{enter}', { delay: 100 })
        cy.xpath(loc.DADOS_PROFISSIONAIS.XP_OCUPACAO).type(' {enter}', { delay: 100 })
        cy.get(loc.DADOS_PROFISSIONAIS.RENDA).type(renda)
    }
    validarEnderecoSemCEP() {
        let cep = ' '
        let numero = user.ENDERECO.NUMERO

        cy.get(loc.ENDERECO.FORM).click()
        cy.get(loc.ENDERECO.CEP).type(cep)
        cy.get(loc.ENDERECO.NUMERO).type(numero)
    }

}

export default new capturaPropostaDadosPage()