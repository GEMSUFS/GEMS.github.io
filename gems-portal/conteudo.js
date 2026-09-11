/* ==========================================================================
   CONTEÚDO DO PORTAL GEMS
   ==========================================================================

   Este é o ÚNICO arquivo que precisa ser editado para publicar notícias,
   mudar a agenda ou trocar os contatos. O resto do site se monta sozinho.

   COMO PUBLICAR UMA NOTÍCIA
   1. Copie um bloco { ... } da lista "noticias" abaixo e cole no topo dela.
   2. Troque o "id" (sem espaço nem acento: vira o endereço da página).
   3. Edite título, linha fina, categoria, data e texto.
   4. Salve e envie para o GitHub. Em 1 ou 2 minutos está no ar.

   DICAS DE ESCRITA — cada item de "texto" é um parágrafo. Além disso:
     "## Intertítulo"            vira um subtítulo dentro da notícia
     "> Frase de destaque"       vira uma citação em destaque
     "- Item"                    vira um item de lista (itens seguidos juntam)
     "![Legenda](imagens/x.jpg)" insere uma foto no meio do texto
     **negrito**   *itálico*   [texto do link](https://endereco)

   CUIDADO COM A PONTUAÇÃO — o arquivo é JavaScript:
     • todo texto fica entre aspas "assim";
     • se o texto tiver aspas, use as curvas “assim” ou escreva \"assim\";
     • os itens são separados por vírgula.
   Se algo quebrar, o próprio site avisa no lugar das notícias (no site
   publicado, com o número da linha). É só abrir este arquivo e corrigir.
   ========================================================================== */

window.GEMS = {

  /* ---------------------------------------------------------------------
     DADOS DO GRUPO
     --------------------------------------------------------------------- */
  site: {
    sigla: "GEMS",
    nome: "Grupo de Estudo em Melhoramento Vegetal do Semiárido",
    instituicao: "Universidade Federal de Sergipe",
    instituicaoSigla: "UFS",
    slogan: "Portal de notícias",
    chamada: "Melhoramento vegetal feito por estudantes, do campo ao código",   // título do bloco "O grupo"
    sobre: [
      "O GEMS — Grupo de Estudo em Melhoramento Vegetal do Semiárido — reúne estudantes da Universidade Federal de Sergipe em torno do melhoramento genético de plantas.",
      "O grupo conduz programas de seleção recorrente em milho, mantém um banco ativo de germoplasma e desenvolve as próprias ferramentas digitais, como o SEEDS, sistema que organiza todo o programa de melhoramento."
    ]
  },

  contato: {
    email: "gems@academico.ufs.br",
    instagram: "",   // ex.: "https://www.instagram.com/usuario_do_grupo"  (vazio = não aparece)
    youtube: "",     // ex.: "https://www.youtube.com/@canal"               (vazio = não aparece)
    github: "",      // ex.: "https://github.com/usuario"                   (vazio = não aparece)
    endereco: "Universidade Federal de Sergipe"
  },

  /* ---------------------------------------------------------------------
     SEÇÕES (categorias das notícias)
     Uma seção só aparece no menu quando tem pelo menos uma notícia.
     "cor" é a cor do rótulo e da capa gerada automaticamente.
     --------------------------------------------------------------------- */
  categorias: [
    { id: "pesquisa",    nome: "Pesquisa",    cor: "#2F7542", descricao: "Ensaios, análises e resultados do programa de melhoramento." },
    { id: "campo",       nome: "Campo",       cor: "#5A7A1E", descricao: "Semeadura, polinização, avaliações e colheita na área experimental." },
    { id: "germoplasma", nome: "Germoplasma", cor: "#9A6412", descricao: "Banco ativo de germoplasma, lotes de sementes e conservação." },
    { id: "tecnologia",  nome: "Tecnologia",  cor: "#235C94", descricao: "O SEEDS, automação e as ferramentas digitais do grupo." },
    { id: "eventos",     nome: "Eventos",     cor: "#B4472A", descricao: "Congressos, dias de campo, visitas e apresentações." },
    { id: "grupo",       nome: "Grupo",       cor: "#6B4C8A", descricao: "Organização, pessoas e a rotina do GEMS." }
  ],

  /* ---------------------------------------------------------------------
     NOTÍCIAS — a ordem aqui não importa: o site ordena pela data.
       destaque: true   -> pode ir para a manchete da página inicial
       imagem           -> foto de capa (opcional). Coloque o arquivo na
                           pasta "imagens" e escreva "imagens/nome.jpg".
                           Sem foto, o site desenha uma capa com a cor da seção.
       video            -> link do YouTube (opcional), aparece no topo da notícia
     --------------------------------------------------------------------- */
  noticias: [

    {
      id: "seeds-3-5",
      titulo: "SEEDS 3.5: o programa de melhoramento do GEMS inteiro em um só sistema",
      linhaFina: "Desenvolvida dentro do grupo, a plataforma reúne programas, ciclos de seleção, cruzamentos, progênies, ensaios e pedigree — e agora roda em qualquer computador do laboratório.",
      categoria: "tecnologia",
      data: "2026-09-08",
      autor: "Departamento de Tecnologia",
      destaque: true,
      imagem: "",
      legenda: "",
      tags: ["SEEDS", "software", "rastreabilidade"],
      texto: [
        "Todo programa de melhoramento produz uma quantidade enorme de informação: de onde veio cada material, quem foi cruzado com quem, qual progênie foi selecionada em qual ciclo, em que parcela ela estava no campo. No GEMS, essas informações agora moram em um só lugar: o **SEEDS**, sistema desenvolvido pelo próprio grupo, que chega à versão 3.5.",
        "Com ele é possível cadastrar programas, ciclos de seleção, entradas genéticas, cruzamentos, progênies e experimentos de campo, além de gerar etiquetas, croquis, cadernos de campo e a genealogia completa dos materiais.",
        "## Rastreabilidade de ponta a ponta",
        "O ponto central é o pedigree. Em um programa de seleção recorrente, as progênies selecionadas em um ciclo se tornam os genitores do ciclo seguinte. O SEEDS acompanha essa cadeia geração após geração, de modo que qualquer material pode ser rastreado até as populações de origem.",
        "> Qualquer material pode ser rastreado, geração após geração, até as populações de origem.",
        "## O que mudou na versão 3.5",
        "- **Login individual**, com senhas protegidas e bloqueio após tentativas erradas;",
        "- **Telas que se atualizam sozinhas** quando outra pessoa grava um dado na rede do laboratório;",
        "- **Interface em português e em inglês**;",
        "- **Banco de germoplasma** integrado, com o saldo de cada lote de sementes;",
        "- **Escalas de campo e pontuação** de contribuição dos membros;",
        "- **Instalador próprio**, que dispensa instalar o R ou ter acesso de administrador.",
        "Cada uma dessas novidades tem uma reportagem própria aqui no portal, na seção [Tecnologia](noticias.html?categoria=tecnologia)."
      ]
    },

    {
      id: "banco-de-germoplasma-digital",
      titulo: "Banco de germoplasma ganha controle digital dos lotes de sementes",
      linhaFina: "Nova aba do SEEDS registra o saldo de cada lote guardado na câmara fria e mostra em quais programas cada material está sendo usado.",
      categoria: "germoplasma",
      data: "2026-08-11",
      autor: "Departamento de Germoplasma",
      destaque: true,
      imagem: "",
      legenda: "",
      tags: ["BAG", "sementes", "SEEDS"],
      texto: [
        "As sementes guardadas na câmara fria são o patrimônio mais valioso de um programa de melhoramento: é delas que saem os cruzamentos das próximas safras. Para cuidar desse acervo, o SEEDS ganhou a aba **BAG**, sigla de Banco Ativo de Germoplasma.",
        "Cada lote de sementes passa a ter registro próprio, com o saldo disponível. Assim, o Departamento de Germoplasma sabe o que está guardado antes de planejar semeaduras e cruzamentos, e o painel inicial do sistema avisa quando um lote chega a um nível crítico.",
        "## De onde vem, para onde vai",
        "A aba também mostra em quais programas cada material está sendo usado. Essa informação não é digitada por ninguém: o sistema a deduz dos cruzamentos em que o material entrou como genitor, das progênies que ele originou e dos ensaios em que foi avaliado. Por isso, ela nunca fica desatualizada.",
        "> O uso de cada material não é digitado: o sistema o deduz dos cruzamentos, das progênies e dos ensaios.",
        "## Próximo passo: a balança",
        "A etapa seguinte é ligar a balança do laboratório direto ao sistema, para que o peso de cada lote seja lido sem digitação. A integração já foi construída e está em fase de testes."
      ]
    },

    {
      id: "ensaio-interprovi-2025",
      titulo: "Ensaio Interprovi 2025: dados de nove genótipos de milho entram em análise",
      linhaFina: "Experimento em blocos casualizados, com 27 parcelas, avaliou caracteres de planta, de espiga e a produção de grãos.",
      categoria: "pesquisa",
      data: "2026-08-18",
      autor: "Redação GEMS",
      destaque: true,
      imagem: "",
      legenda: "",
      tags: ["milho", "ensaio", "análise de trilha"],
      texto: [
        "Os dados do ensaio Interprovi 2025 estão na fase de análise. O experimento avaliou **nove genótipos de milho** em delineamento de blocos casualizados, com três repetições: 27 parcelas no total.",
        "Foram medidos caracteres de planta, como a altura da planta, a altura de inserção da espiga e as datas de florescimento, e caracteres ligados à produção, como diâmetro e comprimento da espiga, número de grãos por fileira e peso de grãos por parcela.",
        "## Antes da estatística, a conferência",
        "Antes de qualquer análise, a planilha passa por uma conferência cuidadosa. É nessa etapa que aparecem problemas comuns em dados de campo — valores digitados na coluna errada, colunas duplicadas, separadores de milhar confundidos com vírgula decimal — que, se passassem adiante, distorceriam os resultados.",
        "## Correlações e análise de trilha",
        "Com os dados conferidos, a equipe estima as correlações entre os caracteres e faz a **análise de trilha**, que desdobra essas correlações em efeitos diretos e indiretos sobre a produção de grãos.",
        "> A pergunta é quais características ajudam a encontrar, de forma indireta, os genótipos mais produtivos.",
        "Caracteres fáceis de medir e fortemente associados à produção podem apoiar a seleção nos próximos ciclos do programa."
      ]
    },

    {
      id: "sistema-de-escalas",
      titulo: "Novo sistema de escalas torna visível o trabalho de todos os departamentos",
      linhaFina: "Regulamento combina escala fixa de campo, eventos críticos e uma pontuação mensal de contribuição para os 11 membros do grupo.",
      categoria: "grupo",
      data: "2026-08-05",
      autor: "Coordenação do GEMS",
      destaque: false,
      imagem: "",
      legenda: "",
      tags: ["organização", "escalas", "departamentos"],
      texto: [
        "O trabalho de campo é visível por natureza: todo mundo está lá, vendo. Já o trabalho de germoplasma, de tecnologia e de mídia acontece longe dos olhos. Para corrigir essa assimetria, o GEMS adotou um **Sistema de Escalas e Pontuação de Contribuição**, que já funciona dentro do SEEDS.",
        "O sistema organiza a rotina dos 11 membros da graduação, distribuídos em quatro departamentos — Germoplasma, Campo, Mídia e Tecnologia — em três camadas.",
        "## Três camadas",
        "- **Eventos críticos**: polinização, semeadura, colheita, montagem de experimentos e avaliações em janela fenológica pedem a presença de todos. Não valem pontos, porque ali a presença é condição, não moeda.",
        "- **Escala fixa de campo**: cada membro cumpre dois dias de campo por semana, escolhidos com o coordenador e fixos durante o mês. Trocas entre colegas são livres, desde que registradas.",
        "- **Pontuação**: a meta é de 40 pontos por mês. Um dia de campo vale 4 pontos; atividades estruturantes, técnicas e de emergência completam a conta.",
        "## Visível para ser justo",
        "Atividades de germoplasma, mídia e tecnologia pontuam com um entregável anexado: uma planilha atualizada, uma foto do inventário da câmara fria, o link de um script. É esse registro que torna o trabalho visível. Atividades feitas em benefício de outro departamento recebem um bônus de 30%, para estimular a colaboração entre as equipes.",
        "Os parâmetros são definidos e revistos coletivamente. Como diz o próprio regulamento:",
        "> Um sistema imperfeito e aceito funciona melhor que um sistema ótimo e imposto."
      ]
    },

    {
      id: "seeds-bilingue",
      titulo: "SEEDS passa a funcionar em português e em inglês",
      linhaFina: "Um seletor na barra superior troca o idioma de toda a interface, inclusive o da tela de entrada.",
      categoria: "tecnologia",
      data: "2026-08-08",
      autor: "Departamento de Tecnologia",
      destaque: false,
      imagem: "",
      legenda: "",
      tags: ["SEEDS", "idiomas"],
      texto: [
        "O SEEDS agora pode ser usado em português ou em inglês. Um seletor na barra superior troca o idioma de toda a interface: menus, tabelas, formulários e mensagens do sistema.",
        "A tela de entrada também ganhou o seletor, para que ninguém precise passar pelo login em um idioma que não prefere.",
        "A versão em inglês facilita apresentar o sistema a pesquisadores de outros países."
      ]
    },

    {
      id: "instalador-seeds",
      titulo: "Instalador leva o SEEDS a qualquer computador do laboratório",
      linhaFina: "Pacote único traz o R e todas as bibliotecas necessárias, funciona sem internet e dispensa acesso de administrador.",
      categoria: "tecnologia",
      data: "2026-08-12",
      autor: "Departamento de Tecnologia",
      destaque: false,
      imagem: "",
      legenda: "",
      tags: ["SEEDS", "instalação"],
      texto: [
        "Instalar um aplicativo feito em R costumava exigir uma sequência de passos: instalar o R, instalar dezenas de pacotes, acertar as versões. O SEEDS agora tem um **instalador próprio**, que resolve tudo de uma vez.",
        "O arquivo leva dentro dele o R e as cerca de 110 bibliotecas de que o sistema depende. Quem instala não precisa de internet, nem de R instalado, nem de senha de administrador — um detalhe importante em computadores de laboratório, onde os estudantes normalmente não têm esse acesso.",
        "## Os dados ficam",
        "Atualizar o sistema não apaga nada. O instalador foi feito para nunca sobrescrever o banco de dados de quem já usa o SEEDS: uma versão nova entra por cima da antiga, e todos os registros continuam lá."
      ]
    },

    {
      id: "login-seeds",
      titulo: "Acesso ao SEEDS passa a exigir login individual",
      linhaFina: "Senhas guardadas com criptografia, bloqueio após tentativas erradas e registro de acessos reforçam a segurança dos dados do programa.",
      categoria: "tecnologia",
      data: "2026-08-27",
      autor: "Departamento de Tecnologia",
      destaque: false,
      imagem: "",
      legenda: "",
      tags: ["SEEDS", "segurança"],
      texto: [
        "Cada pessoa agora entra no SEEDS com usuário e senha próprios. A mudança acompanha o uso do sistema em rede: com mais gente acessando os mesmos dados, é preciso saber quem está trabalhando em cada conta.",
        "As senhas são guardadas de forma criptografada, nunca em texto. Depois de cinco tentativas erradas em 15 minutos, a conta é bloqueada temporariamente. Os acessos ficam registrados, e o nome de quem está conectado aparece no botão de saída, na barra superior.",
        "Contas criadas com a senha padrão precisam trocá-la logo no primeiro acesso."
      ]
    },

    {
      id: "telas-atualizam-sozinhas",
      titulo: "Trabalho em equipe: telas do SEEDS se atualizam sozinhas",
      linhaFina: "Quando alguém grava um dado, os outros computadores conectados veem a mudança em segundos, sem recarregar a página.",
      categoria: "tecnologia",
      data: "2026-08-29",
      autor: "Departamento de Tecnologia",
      destaque: false,
      imagem: "",
      legenda: "",
      tags: ["SEEDS", "rede"],
      texto: [
        "Com o SEEDS aberto em vários computadores ao mesmo tempo, era comum uma pessoa não ver o que outra acabara de cadastrar. Isso mudou: as telas passam a se atualizar sozinhas quando alguém grava algo no sistema.",
        "A verificação acontece a cada poucos segundos e é leve. O sistema observa o arquivo do banco de dados e só recarrega as tabelas quando algo realmente mudou.",
        "Há um cuidado para não atrapalhar quem está no meio de uma edição: se a pessoa selecionou um registro para editar, a tabela espera a seleção ser solta antes de se atualizar."
      ]
    },

    {
      id: "etiquetas-qr-code",
      titulo: "Etiquetas com QR code agilizam a identificação de parcelas e cruzamentos",
      linhaFina: "O SEEDS gera as etiquetas em PDF, prontas para imprimir, com o código de cada parcela ou cruzamento também gravado em QR code.",
      categoria: "campo",
      data: "2026-07-30",
      autor: "Departamento de Campo",
      destaque: false,
      imagem: "",
      legenda: "",
      tags: ["etiquetas", "QR code", "SEEDS"],
      texto: [
        "Identificar corretamente cada parcela e cada saco de sementes é o que separa um dado confiável de um dado perdido. Para isso, o SEEDS gera as etiquetas do grupo em PDF, prontas para imprimir.",
        "Nas etiquetas de parcela, o código do ensaio e o da parcela vêm escritos e também gravados em um **QR code**, que pode ser lido pelo celular no campo.",
        "## Um saco, uma etiqueta",
        "Nas etiquetas de cruzamento, cada saco recebe a sua, numerada — 1 de 3, 2 de 3, e assim por diante —, para que nenhum se perca entre o campo e a câmara fria.",
        "A lista pode vir de uma planilha: ler o arquivo não cadastra nada no sistema, apenas prepara a impressão."
      ]
    },

    {
      id: "janela-de-polinizacao",
      titulo: "Janela de polinização: por que o campo não espera",
      linhaFina: "Atividades que dependem do florescimento têm prazo biológico — e o grupo se organiza para estar pronto quando a planta estiver.",
      categoria: "campo",
      data: "2026-07-22",
      autor: "Departamento de Campo",
      destaque: false,
      imagem: "",
      legenda: "",
      tags: ["polinização", "milho", "campo"],
      texto: [
        "No melhoramento de milho, algumas tarefas não podem ser marcadas com semanas de antecedência. A polinização controlada precisa acontecer quando pendão e espiga estão prontos — e quem decide o dia é a planta, não a agenda.",
        "Para lidar com isso, o regulamento do GEMS prevê a **janela de prontidão**: o coordenador anuncia um período e, dentro dele, a convocação pode ocorrer com 24 a 48 horas de antecedência. Todos já contam com isso.",
        "## Eventos críticos",
        "A polinização faz parte dos chamados eventos críticos, ao lado da semeadura, da colheita e da montagem de experimentos. Nesses dias, a presença de todos os membros é esperada, qualquer que seja o departamento. Nos eventos que podem ser agendados, as faltas precisam ser avisadas com pelo menos sete dias de antecedência.",
        "## Na prática",
        "Na polinização controlada, a espiga é protegida antes de os estilos-estigmas aparecerem, e o pólen coletado de um pendão escolhido é levado até ela no momento certo. É assim que se garante quem é o pai de cada semente — informação que depois vai para o pedigree no SEEDS."
      ]
    },

    {
      id: "selecao-recorrente-explicada",
      titulo: "Entenda: como a seleção recorrente melhora uma população de milho a cada ciclo",
      linhaFina: "Avaliar, selecionar e recombinar: o método que acumula, geração após geração, os alelos favoráveis de uma população.",
      categoria: "pesquisa",
      data: "2026-07-15",
      autor: "Redação GEMS",
      destaque: false,
      imagem: "",
      legenda: "",
      tags: ["seleção recorrente", "milho", "melhoramento"],
      texto: [
        "A seleção recorrente é um dos métodos mais usados para melhorar populações de plantas alógamas, como o milho. A ideia é simples de enunciar: a cada ciclo, avaliam-se progênies da população, selecionam-se as melhores, e essas progênies são recombinadas entre si para formar a população do ciclo seguinte.",
        "Como a recombinação reúne alelos favoráveis que estavam espalhados em indivíduos diferentes, a frequência desses alelos aumenta de um ciclo para o outro — e, com ela, a média da população para os caracteres selecionados, sem esgotar a variabilidade genética de uma vez.",
        "## Um ciclo, passo a passo",
        "- **Obtenção das progênies** a partir da população do ciclo atual;",
        "- **Avaliação em ensaios de campo**, com repetições, para separar o efeito genético do efeito do ambiente;",
        "- **Seleção** das melhores progênies com base nos dados;",
        "- **Recombinação** das progênies selecionadas, que dá origem ao ciclo seguinte.",
        "## Onde entra o SEEDS",
        "Como as progênies selecionadas em um ciclo se tornam os genitores do próximo, o pedigree de cada material cresce a cada geração. O SEEDS registra essa cadeia, dos genitores originais às progênies mais recentes, e mantém a ordem dos ciclos de cada programa."
      ]
    }

  ],

  /* ---------------------------------------------------------------------
     LEITURAS ESSENCIAIS — lista da lateral. Use os "id" das notícias.
     --------------------------------------------------------------------- */
  essenciais: [
    "selecao-recorrente-explicada",
    "sistema-de-escalas",
    "janela-de-polinizacao",
    "banco-de-germoplasma-digital",
    "ensaio-interprovi-2025"
  ],

  /* ---------------------------------------------------------------------
     AGENDA — itens com data já passada somem sozinhos.
     Sem data definida? Deixe data: "" e escreva em "quando" (ex.: "A confirmar").
     ATENÇÃO: os itens abaixo são EXEMPLOS. Troque pelos compromissos reais.
     --------------------------------------------------------------------- */
  agenda: [
    { data: "2026-09-30", quando: "", titulo: "Fechamento da pontuação de setembro", local: "Validação pelos coordenadores de departamento" },
    { data: "2026-10-01", quando: "", titulo: "Publicação da escala de campo de outubro", local: "Mural do laboratório e planilha compartilhada" },
    { data: "", quando: "A confirmar", titulo: "Janela de polinização", local: "Área experimental · convocação com 24 a 48 h de antecedência" }
  ],

  /* ---------------------------------------------------------------------
     O GEMS EM NÚMEROS — faixa verde da página inicial
     --------------------------------------------------------------------- */
  numeros: [
    { valor: "11", rotulo: "estudantes de graduação" },
    { valor: "4",  rotulo: "departamentos" },
    { valor: "9",  rotulo: "genótipos no ensaio Interprovi 2025" },
    { valor: "14", rotulo: "módulos no SEEDS" }
  ],

  /* ---------------------------------------------------------------------
     DEPARTAMENTOS — icone: "semente", "broto", "codigo" ou "camera"
     "categoria" (opcional) liga o cartão às notícias daquela seção;
     "cor" (opcional) serve para departamento sem seção própria.
     --------------------------------------------------------------------- */
  departamentos: [
    { nome: "Germoplasma", icone: "semente", categoria: "germoplasma",
      texto: "Cuida do banco ativo de germoplasma: inventário da câmara fria, contagem de sementes, testes de germinação e organização dos lotes." },
    { nome: "Campo", icone: "broto", categoria: "campo",
      texto: "Conduz a área experimental: semeadura, polinizações, avaliações ao longo do ciclo e colheita." },
    { nome: "Tecnologia", icone: "codigo", categoria: "tecnologia",
      texto: "Desenvolve o SEEDS e as ferramentas digitais do grupo, de scripts de automação a fichas digitais de coleta." },
    { nome: "Mídia", icone: "camera", categoria: "", cor: "#B4472A",
      texto: "Registra e comunica o trabalho do grupo em fotos, vídeos e nos canais do GEMS." }
  ],

  /* ---------------------------------------------------------------------
     DESTAQUE DO SEEDS — bloco da página inicial
     --------------------------------------------------------------------- */
  seeds: {
    titulo: "O programa de melhoramento inteiro em um só lugar",
    texto: "Sistema integrado de gestão de melhoramento vegetal, experimentos e rastreabilidade de materiais, desenvolvido pelo Departamento de Tecnologia do GEMS.",
    recursos: [
      "Programas e ciclos de seleção",
      "Cruzamentos e progênies",
      "Ensaios, croquis e cadernos de campo",
      "Etiquetas com QR code",
      "Pedigree e rastreabilidade",
      "Banco de germoplasma"
    ],
    noticia: "seeds-3-5"   // "Leia a reportagem" abre esta notícia
  }
};
