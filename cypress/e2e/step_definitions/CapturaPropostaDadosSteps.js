/// <reference types="Cypress" />
/* global Given, Then, When */

import capturaProposta from '../pages/CapturaPropostaPages'
import capturaPropostaDados from '../pages/CapturaPropostaDadosPages'
import preAnalise from '../pages/PreAnalisePages'
import simulacao from '../pages/SimulacaoPages'

import util from '../utils'

Given("que tenho acesso ao finalizar proposta", () => {
    preAnalise.acessoPreAnalise()
    preAnalise.preencherPreAnalise()
    preAnalise.clicarContinuarPreAnalise()
    simulacao.clicarEscolherCredito()
  })
Then ('preencho todos os campos da sessão Dados bancarios deixando agencia em branco', () => {
    capturaPropostaDados.validarDadosBancariosSemAgencia()
})
Then ('preencho todos os campos da sessão Dados bancarios com agencia invalida', () => {
    capturaPropostaDados.validarDadosBancariosAgenciaInvalida()
})
Then ('preencho dados pessoais sem o RG', () => {
    capturaPropostaDados.validarDadosPessoaisSemRG()
})
Then ('preencho dados pessoais com 1 caractere no orgao emissor', () => {
    capturaPropostaDados.validarDadosPessoaisOrgaoEmissor('A')
})
Then ('preencho dados pessoais sem o estado civil', () => {
    capturaPropostaDados.validarDadosPessoaisSemEstadoCivil()
})
Then ('preencho dados pessoais sem a nacionalidade', () => {
    capturaPropostaDados.validarDadosPessoaisSemNacionalidade()
})
Then ('devo visualizar aviso de erro no campo', () => {
    capturaPropostaDados.avisoCampoObrigatorio()
    util.screenshot()
})
Then ('devo visualizar aviso de erro no campo agencia', () => {
    capturaPropostaDados.avisoAgenciaValida()
    util.screenshot()
})
Then ('devo visualizar aviso de erro no campo Orgao emissor', () => {
    capturaPropostaDados.avisoOrgaoEmissor()
    util.screenshot()
})
Then ('preencho dados profissionais sem a natureza da ocupacao', () => {
    capturaPropostaDados.validarDadosProfissionaisSemOcupacao()
})
Then ('preencho dados pessoais', () => {
    capturaProposta.preencherDadosPessoais()
})
Then ('preencho dados endereco', () => {
    capturaProposta.preencherEndereco()
})
Then ('preencho dados endereco sem CEP', () => {
    capturaPropostaDados.validarEnderecoSemCEP()
})
Then ('devo validar cpf na tela', () => {
    capturaPropostaDados.validarCPFTela()
})