export const CapturaPropostaElements = {
    DADOS_PESSOAIS: {
        FORM: '.stepper > :nth-child(1)',
        XP_CPF:`//div[@class = 'input-form-group disabled']/*[contains (., 'CPF')]`,
        EMAIL: '#email',
        NACIONALIDADE: '#nationality',
        MAE: '#mother',
        RG: '#rg ',
        ORGAOEMISSOR: '#issuingOrganizer',
        UFDOCUMENTO: '#ufDocument ',
        NASCIMENTO: "#birthDate",
        SEXO: "#gender",
        ESTADO_CIVIL: "#maritalStatus",
        BTN_SALVAR: 'app-button-group[_ngcontent-ang-ppar-fgts-cp-c33=""]',
        XP_BTN_SALVAR:"//app-about/form/app-button-group",
    },
    ENDERECO: {
        FORM: '.stepper > :nth-child(2)',
        CEP: '#cep',
        RUA: '#street',
        BAIRRO: '#neighborhood',
        NUMERO: '#number',
        ESTADO: '#state',
        CIDADE: '#city',
        XP_BTN_SALVAR:"//app-address/*/form/app-button-group"
    },
    DADOS_PROFISSIONAIS: {
        FORM: '.stepper > :nth-child(3)',
        XP_OCUPACAO: `//app-profession//div[@class='input-field-wrapper'][contains (.,'Natureza')]/*[1]`,
        PROFISSAO: '#profession',
        RENDA: '#income',
        XP_BTN_SALVAR:"//app-profession/*/form/app-button-group"            
    },
    DADOS_BANCARIOS: {
        XP_CPF:`//div[@class = 'input-form-group disabled']/*[contains (., 'CPF')]`,
        XP_FAVORECIDO:`//div[@class = 'input-form-group disabled']/*[contains (., 'Favorecido*')]`,
        XP_VALOR:`//div[@class = 'input-form-group disabled']/*[contains (., 'Valor do crédito*')]`,
        FORM: '.stepper > :nth-child(4)',
        FAVORECIDO: '#beneficiary',
        VALOR_CREDITO: '#value',
        BANCO: '#bank',
        AGENCIA: '#agency',
        CODIGO_AGENCIA: '#dvAgency',
        CONTA: '#account',
        POUPANCA: '[label="Poupança"]',
        CORRENTE: '[label="Conta corrente"]',
        XP_BTN_SALVAR: '//app-bank-details/*/form/app-button-group'
    },
    XP_BTN_ESCOLHERCREDITO: "//foundation-primary-button[contains(., 'Quer escolher esse crédito')]",
    XP_PROPOSTA_ENVIADA:"//foundation-hero-text",
    XP_MSG_ERRO: `//foundation-single-error-message`
}