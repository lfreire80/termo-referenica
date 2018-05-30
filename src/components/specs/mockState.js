const state = {
    usuario: {
        perfil: 1,
        processos: [{
            cod_processo: 1,
            titulo: 'titulo',
            financiador: 'financiador',
            sigla_secao: 'secao'
           },{
            cod_processo: 2,
            titulo: 'titulo',
            financiador: 'financiador',
            sigla_secao: 'secao'
        },{
            cod_processo: 3,
            titulo: 'titulo',
            financiador: 'financiador',
            sigla_secao: 'secao'
        }]
    },
    termo: {
        numero: 34,
        projeto: "CURSO DE EXTENSÃO EM ESTAMPARIA E DESIGN TÊXTIL",
        instituicaoFinanceira: "DIVERSOS",
        status: 2,
        processo: 203327,
        data: "2018-05-17T16:10:50.1",
        tipo: 1,
        usuarioInclusao: 182,
        usuarioAprovacao: 0,
        dataInclusao: "2018-05-17T16:10:40.357",
        documento: {
            objeto:
                "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).\n\n",
            justificativa:
                "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
            criterio:
                "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
            especificacao: null,
            produto: null,
            apresentacao:
                "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
            prazo:
                "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
            estimativaCusto: null,
            condicoes: null,
            obrigacoes:
                "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
            unidadeExecucao: {
                gerencia: "GCT",
                tel: "3034-5800",
                email: "GCT@fujb.ufrj.br",
                endereco:
                    "Av Pasteur, 280 <br/> Urca <br/> Rio de Janeiro, RJ, Brasil.",
                cep: "22290-240",
                tecUnidade: null,
                tecDepartamento: null,
                tecTelefone: null,
                tecEmail: null,
                tecEndereco: null
            },
            fonte:
                'Os recursos financeiros necessários aos pagamentos mencionados neste TR serão oriundos do Projeto "CURSO DE EXTENSÃO EM ESTAMPARIA E DESIGN TÊXTIL", processo FUJB: 203327, financiados pela DIVERSOS.',
            profissionais: [
                {
                    atividade:
                        "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                    produto:
                        "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                    prazo: "12 dias",
                    valor: "100,00",
                    inss: "20,00",
                    total: "80,00",
                    parcelas: [
                        {
                            periodo: "10",
                            produto: "55",
                            parcelaNumero: "",
                            valor: "88"
                        },
                        {
                            periodo: "30",
                            produto: "54",
                            parcelaNumero: "",
                            valor: "99"
                        }
                    ]
                },
                {
                    atividade:
                        "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                    produto:
                        "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                    prazo: "15 dias",
                    valor: "100,00",
                    inss: "20,00",
                    total: "80,00",
                    parcelas: [
                        {
                            periodo: "1",
                            produto: "1",
                            parcelaNumero: "1",
                            valor: "1"
                        }
                    ]
                },
                {
                    atividade:
                        "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                    produto:
                        "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                    prazo: "10 dias",
                    valor: "100,00",
                    inss: "20,00",
                    total: "80,00",
                    parcelas: [
                        {
                            periodo: "10",
                            produto: "55",
                            parcelaNumero: "",
                            valor: "88"
                        },
                        {
                            periodo: "30",
                            produto: "54",
                            parcelaNumero: "",
                            valor: "99"
                        }
                    ]
                }
            ]
        },
        revisoes: [{
            codigoRevisao:1,
            data: '2018-05-30',
            revisor: 198,
            documento:{
                objeto: "objeto revisao 1",
                justificativa: "justificativa revisao 2"
            }
        },
        {
            codigoRevisao:2,
            data: '2018-05-30',
            revisor: 198,
            documento:{
                objeto: "objeto revisao 2",
                especificacao: "especificacao revisao 2"
            }
        }],
        modelo: {
            objeto:
                "Contratação de Profissional com experiência na área  xxxxxxxxxxxxxx",
            justificativa:
                "Expor as razões pelas quais a contratação é necessária para desenvolvimento do projeto.",
            criterio:
                "Selecionado pelo critério de Currículo, onde se demonstre alta qualificação no tema do projeto/pesquisa.",
            especificacao:
                "Indicar a meta e etapa do projeto que está vinculado. <br/> Definir as atividades / serviços previstos no projeto.",
            produto:
                "Conjunto de resultados esperados do trabalho a ser contratado pode ser definido pelos produtos e documentos “físicos” que deverão ser entregues pelo contratado em determinadas etapas ou ao término do trabalho. Pode ser apresentado sob forma de documento, relatório, projeto, parecer, etc.",
            apresentacao:
                "Todos os produtos deverão ser entregues diretamente a Coordenação do Projeto.",
            prazo:
                "Prazo: O prazo de execução das atividades deste TR é de XX(XXX) meses, contados da data de assinatura da contratação. Local: O local de execução das atividades mencionadas neste TR é nas instalações XXXXXX, conforme previsto no projeto.",
            estimativaCusto: "",
            condicoes:
                "O valor total é de R$ XXXX e será pago em XX parcelas de R$ XXXX (xxxxxxxxxxxxxxxxx), cada, conforme abaixo:",
            obrigacoes:
                "Assegurar o cumprimento de todas as etapas e atividades constantes neste TR, bem como na sua respectiva proposta.",
            unidadeExecucao: {
                gerencia: "Gerencia responsável (FUJB)",
                tel: "(21) 3034-5800",
                email: "gerencia responsável @fujb.ufrj.br",
                endereco:
                    "Avenida Pasteur, 280, Urca, Rio de Janeiro, RJ, Brasil",
                cep: "22290-240",
                tecUnidade: "Unidade/UFRJ",
                tecDepartamento: "Departamento, laboratório, etc.",
                tecTelefone: null,
                tecEmail: "Email",
                tecEndereco: "Endereço completo"
            },
            fonte:
                "Os recursos financeiros necessários aos pagamentos mencionados neste TR serão oriundos do Projeto “XXXXXXXXXXXXXXXXXXXXXXXXXXXXX”, processo FUJB: XXXX, financiados pela XXXXX.",
            profissionais: [
                {
                    atividade: null,
                    produto: null,
                    prazo: null,
                    valor: null,
                    inss: null,
                    total: null,
                    parcelas: null
                }
            ]
        }
    },
    termos: [
        {
            numero: 1,
            projeto: "CURSO DE EXTENSÃO EM ESTAMPARIA E DESIGN TÊXTIL",
            instituicaoFinanceira: "DIVERSOS",
            status: 2,
            processo: 203327,
            data: "2018-05-17T16:10:50.1",
            tipo: 1,
            usuarioInclusao: 182,
            usuarioAprovacao: 0,
            dataInclusao: "2018-05-17T16:10:40.357",
            documento: {
                objeto:
                    "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).\n\n",
                justificativa:
                    "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                criterio:
                    "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                especificacao: null,
                produto: null,
                apresentacao:
                    "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                prazo:
                    "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                estimativaCusto: null,
                condicoes: null,
                obrigacoes:
                    "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                unidadeExecucao: {
                    gerencia: "GCT",
                    tel: "3034-5800",
                    email: "GCT@fujb.ufrj.br",
                    endereco:
                        "Av Pasteur, 280 <br/> Urca <br/> Rio de Janeiro, RJ, Brasil.",
                    cep: "22290-240",
                    tecUnidade: null,
                    tecDepartamento: null,
                    tecTelefone: null,
                    tecEmail: null,
                    tecEndereco: null
                },
                fonte:
                    'Os recursos financeiros necessários aos pagamentos mencionados neste TR serão oriundos do Projeto "CURSO DE EXTENSÃO EM ESTAMPARIA E DESIGN TÊXTIL", processo FUJB: 203327, financiados pela DIVERSOS.',
                profissionais: [
                    {
                        atividade:
                            "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                        produto:
                            "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                        prazo: "12 dias",
                        valor: "100,00",
                        inss: "20,00",
                        total: "80,00",
                        parcelas: [
                            {
                                periodo: "10",
                                produto: "55",
                                parcelaNumero: "",
                                valor: "88"
                            },
                            {
                                periodo: "30",
                                produto: "54",
                                parcelaNumero: "",
                                valor: "99"
                            }
                        ]
                    },
                    {
                        atividade:
                            "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                        produto:
                            "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                        prazo: "15 dias",
                        valor: "100,00",
                        inss: "20,00",
                        total: "80,00",
                        parcelas: [
                            {
                                periodo: "1",
                                produto: "1",
                                parcelaNumero: "1",
                                valor: "1"
                            }
                        ]
                    },
                    {
                        atividade:
                            "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                        produto:
                            "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                        prazo: "10 dias",
                        valor: "100,00",
                        inss: "20,00",
                        total: "80,00",
                        parcelas: [
                            {
                                periodo: "10",
                                produto: "55",
                                parcelaNumero: "",
                                valor: "88"
                            },
                            {
                                periodo: "30",
                                produto: "54",
                                parcelaNumero: "",
                                valor: "99"
                            }
                        ]
                    }
                ]
            },
            revisoes: [],
            modelo: {
                objeto:
                    "Contratação de Profissional com experiência na área  xxxxxxxxxxxxxx",
                justificativa:
                    "Expor as razões pelas quais a contratação é necessária para desenvolvimento do projeto.",
                criterio:
                    "Selecionado pelo critério de Currículo, onde se demonstre alta qualificação no tema do projeto/pesquisa.",
                especificacao:
                    "Indicar a meta e etapa do projeto que está vinculado. <br/> Definir as atividades / serviços previstos no projeto.",
                produto:
                    "Conjunto de resultados esperados do trabalho a ser contratado pode ser definido pelos produtos e documentos “físicos” que deverão ser entregues pelo contratado em determinadas etapas ou ao término do trabalho. Pode ser apresentado sob forma de documento, relatório, projeto, parecer, etc.",
                apresentacao:
                    "Todos os produtos deverão ser entregues diretamente a Coordenação do Projeto.",
                prazo:
                    "Prazo: O prazo de execução das atividades deste TR é de XX(XXX) meses, contados da data de assinatura da contratação. Local: O local de execução das atividades mencionadas neste TR é nas instalações XXXXXX, conforme previsto no projeto.",
                estimativaCusto: "",
                condicoes:
                    "O valor total é de R$ XXXX e será pago em XX parcelas de R$ XXXX (xxxxxxxxxxxxxxxxx), cada, conforme abaixo:",
                obrigacoes:
                    "Assegurar o cumprimento de todas as etapas e atividades constantes neste TR, bem como na sua respectiva proposta.",
                unidadeExecucao: {
                    gerencia: "Gerencia responsável (FUJB)",
                    tel: "(21) 3034-5800",
                    email: "gerencia responsável @fujb.ufrj.br",
                    endereco:
                        "Avenida Pasteur, 280, Urca, Rio de Janeiro, RJ, Brasil",
                    cep: "22290-240",
                    tecUnidade: "Unidade/UFRJ",
                    tecDepartamento: "Departamento, laboratório, etc.",
                    tecTelefone: null,
                    tecEmail: "Email",
                    tecEndereco: "Endereço completo"
                },
                fonte:
                    "Os recursos financeiros necessários aos pagamentos mencionados neste TR serão oriundos do Projeto “XXXXXXXXXXXXXXXXXXXXXXXXXXXXX”, processo FUJB: XXXX, financiados pela XXXXX.",
                profissionais: [
                    {
                        atividade: null,
                        produto: null,
                        prazo: null,
                        valor: null,
                        inss: null,
                        total: null,
                        parcelas: null
                    }
                ]
            }
        },
        {
            numero: 2,
            projeto: "CURSO DE EXTENSÃO EM ESTAMPARIA E DESIGN TÊXTIL",
            instituicaoFinanceira: "DIVERSOS",
            status: 2,
            processo: 203327,
            data: "2018-05-17T16:10:50.1",
            tipo: 1,
            usuarioInclusao: 182,
            usuarioAprovacao: 0,
            dataInclusao: "2018-05-17T16:10:40.357",
            documento: {
                objeto:
                    "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).\n\n",
                justificativa:
                    "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                criterio:
                    "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                especificacao: null,
                produto: null,
                apresentacao:
                    "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                prazo:
                    "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                estimativaCusto: null,
                condicoes: null,
                obrigacoes:
                    "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                unidadeExecucao: {
                    gerencia: "GCT",
                    tel: "3034-5800",
                    email: "GCT@fujb.ufrj.br",
                    endereco:
                        "Av Pasteur, 280 <br/> Urca <br/> Rio de Janeiro, RJ, Brasil.",
                    cep: "22290-240",
                    tecUnidade: null,
                    tecDepartamento: null,
                    tecTelefone: null,
                    tecEmail: null,
                    tecEndereco: null
                },
                fonte:
                    'Os recursos financeiros necessários aos pagamentos mencionados neste TR serão oriundos do Projeto "CURSO DE EXTENSÃO EM ESTAMPARIA E DESIGN TÊXTIL", processo FUJB: 203327, financiados pela DIVERSOS.',
                profissionais: [
                    {
                        atividade:
                            "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                        produto:
                            "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                        prazo: "12 dias",
                        valor: "100,00",
                        inss: "20,00",
                        total: "80,00",
                        parcelas: [
                            {
                                periodo: "10",
                                produto: "55",
                                parcelaNumero: "",
                                valor: "88"
                            },
                            {
                                periodo: "30",
                                produto: "54",
                                parcelaNumero: "",
                                valor: "99"
                            }
                        ]
                    },
                    {
                        atividade:
                            "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                        produto:
                            "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                        prazo: "15 dias",
                        valor: "100,00",
                        inss: "20,00",
                        total: "80,00",
                        parcelas: [
                            {
                                periodo: "1",
                                produto: "1",
                                parcelaNumero: "1",
                                valor: "1"
                            }
                        ]
                    },
                    {
                        atividade:
                            "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                        produto:
                            "This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).",
                        prazo: "10 dias",
                        valor: "100,00",
                        inss: "20,00",
                        total: "80,00",
                        parcelas: [
                            {
                                periodo: "10",
                                produto: "55",
                                parcelaNumero: "",
                                valor: "88"
                            },
                            {
                                periodo: "30",
                                produto: "54",
                                parcelaNumero: "",
                                valor: "99"
                            }
                        ]
                    }
                ]
            },
            revisoes: [],
            modelo: {
                objeto:
                    "Contratação de Profissional com experiência na área  xxxxxxxxxxxxxx",
                justificativa:
                    "Expor as razões pelas quais a contratação é necessária para desenvolvimento do projeto.",
                criterio:
                    "Selecionado pelo critério de Currículo, onde se demonstre alta qualificação no tema do projeto/pesquisa.",
                especificacao:
                    "Indicar a meta e etapa do projeto que está vinculado. <br/> Definir as atividades / serviços previstos no projeto.",
                produto:
                    "Conjunto de resultados esperados do trabalho a ser contratado pode ser definido pelos produtos e documentos “físicos” que deverão ser entregues pelo contratado em determinadas etapas ou ao término do trabalho. Pode ser apresentado sob forma de documento, relatório, projeto, parecer, etc.",
                apresentacao:
                    "Todos os produtos deverão ser entregues diretamente a Coordenação do Projeto.",
                prazo:
                    "Prazo: O prazo de execução das atividades deste TR é de XX(XXX) meses, contados da data de assinatura da contratação. Local: O local de execução das atividades mencionadas neste TR é nas instalações XXXXXX, conforme previsto no projeto.",
                estimativaCusto: "",
                condicoes:
                    "O valor total é de R$ XXXX e será pago em XX parcelas de R$ XXXX (xxxxxxxxxxxxxxxxx), cada, conforme abaixo:",
                obrigacoes:
                    "Assegurar o cumprimento de todas as etapas e atividades constantes neste TR, bem como na sua respectiva proposta.",
                unidadeExecucao: {
                    gerencia: "Gerencia responsável (FUJB)",
                    tel: "(21) 3034-5800",
                    email: "gerencia responsável @fujb.ufrj.br",
                    endereco:
                        "Avenida Pasteur, 280, Urca, Rio de Janeiro, RJ, Brasil",
                    cep: "22290-240",
                    tecUnidade: "Unidade/UFRJ",
                    tecDepartamento: "Departamento, laboratório, etc.",
                    tecTelefone: null,
                    tecEmail: "Email",
                    tecEndereco: "Endereço completo"
                },
                fonte:
                    "Os recursos financeiros necessários aos pagamentos mencionados neste TR serão oriundos do Projeto “XXXXXXXXXXXXXXXXXXXXXXXXXXXXX”, processo FUJB: XXXX, financiados pela XXXXX.",
                profissionais: [
                    {
                        atividade: null,
                        produto: null,
                        prazo: null,
                        valor: null,
                        inss: null,
                        total: null,
                        parcelas: null
                    }
                ]
            }
        }
    ]
};

export default state;
