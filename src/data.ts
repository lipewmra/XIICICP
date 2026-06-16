import { ColoquioDataState } from './types';
import { EXCLUSIVOS_SPEAKERS } from './speakersData';

export const INITIAL_COLOQUIO_DATA: ColoquioDataState = {
  marquee: {
    enabled: true,
    text: "⚠️ URGENTE: Submissão de resumos prorrogada até 15 de Julho! • Inscreva-se já no Portal do Participante • Divulgado o ensalamento das sessões de comunicação oral! • Confira os minicursos disponíveis.",
    badgeText: "AVISOS IMPORTANTES",
    items: [
      { id: "msg_1", text: "⚠️ URGENTE: Submissão de resumos prorrogada até 15 de Julho!" },
      { id: "msg_2", text: "Inscreva-se já no Portal do Participante" },
      { id: "msg_3", text: "Divulgado o ensalamento das sessões de comunicação oral!" },
      { id: "msg_4", text: "Confira os minicursos disponíveis." }
    ]
  },
  heroSlides: [
    {
      id: "slide_1",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
      title: "DISPUTAS EM TERRITÓRIOS CURRICULARES",
      subtitle: "XII Colóquio Internacional de Políticas Curriculares - 'Da luta eu não fujo!'",
      buttonText: "REALIZAR INSCRIÇÃO",
      buttonLink: "internal",
      detailsText: "O XII Colóquio Internacional de Políticas Curriculares se consolida como o principal centro de fomento à reflexão crítica sobre a gestão escolar na América Latina!\n\nNesta edição especial, traremos à tona discussões pertinentes a respeito da regulação do conhecimento pedagógico, das disputas institucionais e do fortalecimento de práticas emancipatórias nas salas de aula das escolas básicas.\n\nContamos com a sua colaboração ativa e sua inscrição diretamente nos canais institucionais credenciados. Participe e some esforços nessa luta continuada por uma pedagogia plural!"
    },
    {
      id: "slide_2",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200",
      title: "CHAMADA DE TRABALHOS CIENTÍFICOS",
      subtitle: "Submeta seu resumo expandido ou trabalho completo nas diretrizes dos Grupos de Trabalho (GTs).",
      buttonText: "EDITAL & REGRAS",
      buttonLink: "internal",
      detailsText: "A comunidade científica internacional está convidada a submeter suas pesquisas e relatos acadêmicos originais no âmbito dos nossos Grupos de Trabalho (GTs).\n\nDestaques das Normas de Submissão:\n- Prazo limite prorrogado de submissões: Até 15 de Julho de 2026.\n- Formatos: Resumo Expandido (de 3 a 5 páginas) ou Trabalho Completo (de 10 a 15 páginas) em PDF.\n- Idiomas aceitos: Português, Espanhol e Inglês.\n\nAproveite a oportunidade de qualificar suas produções curriculares sob o crivo do nosso respeitado Comitê de Pareceristas Científicos."
    },
    {
      id: "slide_3",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
      title: "CONHEÇA JOÃO PESSOA - PB",
      subtitle: "A capital mais oriental das Américas aguarda você com praias paradisíacas e rica relevância histórica.",
      buttonText: "GUIA COMPLETO",
      buttonLink: "internal",
      detailsText: "João Pessoa, capital paraibana conhecida carinhosamente como o local onde o sol nasce primeiro nas Américas, oferece um cenário inesquecível de boas-vindas aos congressistas do XII Colóquio!\n\nEncante-se com alguns dos principais pontos que você poderá visitar:\n- Ponta do Seixas: O marco geográfico extremo das Américas.\n- Centro Histórico Colonial: Arquitetura preservada dos séculos XVI e XVII de enorme apelo visual.\n- Pôr do Sol na Praia do Jacaré: Onde se escuta o tocante saxofone de Jurandy do Sax interpretando clássicos musicais.\n\nUma infraestrutura urbana plana e arborizada perfeita para desfrutar à beira-mar de excelente gastronomia local baseada em frutos do mar e carnes típicas sertanejas."
    }
  ],
  letter: {
    title: "CARTA DE APRESENTAÇÃO",
    subtitle: "Boas-vindas da Gestão Curricular - XII Colóquio Políticas Curriculares",
    paragraphs: [
      "O Colóquio Internacional de Políticas Curriculares constitui-se há mais de duas décadas como um espaço coletivo robusto e interdisciplinar para reflexão, interlocução acadêmica e ativismo político-pedagógico sobre os rumos, desafios e tensões nos currículos das escolas e universidades brasileiras e internacionais.",
      "Em sua décima segunda edição, sob o lema 'Da luta eu não fujo: Disputas em Territórios Curriculares', o evento assume o compromisso histórico de promover debates vigorosos frente às constantes tentativas de regulação e homogeneização das experiências escolares. O cenário atual exige que pesquisadores, professores da educação básica, estudantes de pós-graduação e graduação, além do amplo conjunto de movimentos sociais, se reúnam para tecer resistências, compartilhar utopias e valorizar as práticas curriculares que acontecem cotidianamente nas salas de aula.",
      "Convidamos calorosamente toda a comunidade a somar forças neste espaço de diálogo na Universidade Federal da Paraíba (UFPB). Que nossas vivências compartilhadas em João Pessoa possam consolidar as bases educacionais que defendem com altivez a pluralidade, a justiça cognitiva e o respeito à diversidade cultural."
    ]
  },
  quickActions: [
    {
      id: "action_1",
      title: "Portal de Inscrições",
      icon: "UserPlus",
      url: "#inscricao",
      color: "bg-red-700 hover:bg-red-800"
    },
    {
      id: "action_2",
      title: "Template de Resumos",
      icon: "FileText",
      url: "#template",
      color: "bg-neutral-900 hover:bg-neutral-800"
    },
    {
      id: "action_3",
      title: "Programação Completa",
      icon: "Calendar",
      url: "#agenda",
      color: "bg-neutral-900 hover:bg-neutral-800"
    },
    {
      id: "action_4",
      title: "Localização Geral",
      icon: "MapPin",
      url: "#local",
      color: "bg-neutral-900 hover:bg-neutral-800"
    }
  ],
  announcements: [
    {
      id: "ann_1",
      date: "14 Jun 2026",
      title: "Homologação das inscrições de Ouvintes",
      text: "A lista de inscritos homologados na categoria de ouvinte já está liberada no módulo do sistema de eventos UFPB. Acesse sua área restrita para baixar seu comprovante.",
      urgent: true
    },
    {
      id: "ann_2",
      date: "10 Jun 2026",
      title: "Chamada para Monitores Voluntários",
      text: "Estão abertas as inscrições de monitoria para graduandos de Pedagogia, Ciências Sociais e Letras. Carga horária complementar certificada de 40 horas letivas.",
      urgent: false
    },
    {
      id: "ann_3",
      date: "05 Jun 2026",
      title: "Instruções importantes para confecção de pôsteres",
      text: "Os pôsteres devem seguir as dimensões máximas de 90cm de largura por 120cm de altura, com corda superior para suspensão nos displays metálicos do pavilhão de vivências.",
      urgent: false
    }
  ],
  schedule: [
    {
      id: "evt_1",
      day: 1,
      time: "08:30 - 10:00",
      title: "Credenciamento & Entrega de Materiais",
      roomString: "Anfiteatro Central da Reitoria",
      type: "break",
      description: "Retirada do crachá de identificação, pasta do congresso, certificado de participação geral impresso e guia de João Pessoa."
    },
    {
      id: "evt_2",
      day: 1,
      time: "10:00 - 12:00",
      title: "Mesa de Abertura Oficial do XII Colóquio",
      speaker: "Reitoria da UFPB, Comissão Organizadora e Secretarias Estaduais",
      roomString: "Auditório Principal da Reitoria",
      type: "cultural",
      description: "Apresentação cultural da Orquestra Filarmônica da UFPB seguido pelas falas protocolares das autoridades institucionais e patrocinadores."
    },
    {
      id: "evt_3",
      day: 1,
      time: "14:00 - 16:30",
      title: "Conferência de Abertura: Da luta eu não fujo - Disputas Curriculares Contemporâneas",
      speaker: "Dra. Alice Casimiro Lopes (UERJ) & Dr. Michael Apple (UW-Madison - EUA)",
      roomString: "Auditório Principal da Reitoria",
      type: "lecture",
      description: "Análise conjuntural sobre a consolidação de matrizes de ensino homogeneizadas e a importância estratégica da autonomia docente nos territórios escolares."
    },
    {
      id: "evt_4",
      day: 1,
      time: "17:00 - 19:00",
      title: "Mesa-Redonda 1: BNCC e Novas Regulamentações do Ensino Médio",
      speaker: "Dr. Stephen Ball (UCL - Londres) & Dra. Elizabeth Macedo (UERJ)",
      roomString: "Auditório Central CE",
      type: "panel",
      description: "Discussão a respeito dos impactos mercadológicos no desenho curricular contemporâneo do Brasil e do Reino Unido."
    },
    {
      id: "evt_5",
      day: 2,
      time: "08:30 - 12:00",
      title: "Sessões Paralelas de Apresentação de Trabalhos (GTs 01 a 10)",
      speaker: "Pesquisadores Inscritos",
      roomString: "Pavilhão de Aulas do Centro de Educação (Bloco A)",
      type: "workshop",
      description: "Espaço de trocas de trabalhos científicos submetidos e aprovados por comitês de avaliação das linhas temáticas."
    },
    {
      id: "evt_6",
      day: 2,
      time: "14:00 - 16:30",
      title: "Mesa-Redonda 2: Tecendo redes curriculares na Educação Básica",
      speaker: "Dr. Antonio Flavio Moreira (UFRJ) & Dra. Sandra Rodrigues (UFPB)",
      roomString: "Auditório Central CE",
      type: "panel",
      description: "Foco no letramento e nas teorias do cotidiano escolar enquanto polos inventivos de emancipação pedagógica."
    },
    {
      id: "evt_7",
      day: 3,
      time: "09:00 - 12:00",
      title: "Sessão Especial: Lançamentos de Livros e Coquetel Pedagógico",
      speaker: "Autores Convidados",
      roomString: "Praça da Alegria - CE",
      type: "cultural",
      description: "Festa de integração cultural, autógrafo de novas obras e debates informais sobre currículo com música ao vivo regional paraibana."
    },
    {
      id: "evt_8",
      day: 3,
      time: "14:00 - 16:30",
      title: "Sessão Plenária de Encerramento e Carta de João Pessoa - PB",
      speaker: "Coletivos e Comissão Editorial",
      roomString: "Auditório Principal da Reitoria",
      type: "lecture",
      description: "Leitura, aprovação de emendas e publicação oficial das diretrizes curriculares e moções deliberadas no decurso da Assembleia Geral."
    }
  ],
  speakers: EXCLUSIVOS_SPEAKERS,
  spots: [
    {
      id: "spot_1",
      title: "Centro Histórico & Ladeira de São Francisco",
      category: "Histórico",
      description: "Casarões coloniais coloridos e monumentos do século XVI. Destaque para o Centro Cultural São Francisco, um dos maiores complexos barrocos e de azulejaria portuguesas do Nordeste.",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/7e/be/be/nosso-grande-adro-com.jpg?w=1000&h=-1&s=1",
      tips: "Visite no final da tarde e aproveite para tomar um café no Hotel Globo com vista para o pôr do sol do Rio Sanhauá."
    },
    {
      id: "spot_2",
      title: "Farol de Cabo Branco",
      category: "Histórico",
      description: "Símbolo icônico com design triangular modernista único inspirado em uma planta de sisal, localizado estrategicamente na falésia sobre a Ponta do Seixas.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Joao_Pessoa_Paraiba_Farol_do_Cabo_Branco2.jpg",
      tips: "Um local maravilhoso para contemplar as falésias avermelhadas e a imensidão do Oceano Atlântico."
    },
    {
      id: "spot_3",
      title: "Estação Cabo Branco",
      category: "Cultura",
      description: "Projetada pelo renomado arquiteto Oscar Niemeyer, é uma imponente estrutura espelhada que abriga exposições de ciências, cultura e artes com belas rampas helicoidais.",
      imageUrl: "https://paraibacriativa.com.br/wp-content/uploads/2016/01/Esta----o-Cabo-Branco-1.jpg",
      tips: "Caminhe pelas rampas icônicas de concreto branco e conheça as salas de exposições científicas e o planetário."
    },
    {
      id: "spot_4",
      title: "Cabo Branco & Ponta do Seixas",
      category: "Praia & Natureza",
      description: "O ponto continental mais oriental de todas as Américas, onde o Sol nasce primeiro nas terras sul-americanas. Repleta de águas cristalinas.",
      imageUrl: "https://viagemeturismo.abril.com.br/wp-content/uploads/2024/08/ponta-do-seixas-joao-pessoa.jpg?crop=1&resize=1212,909",
      tips: "Caminhe bem cedinho pela orla litorânea e não deixe de fazer o passeio de catamarã para as piscinas naturais na maré baixa."
    },
    {
      id: "spot_5",
      title: "Espaço Cultural José Lins do Rego",
      category: "Cultura",
      description: "Uma gigantesca joia arquitetônica que concentra a rica produção artística paraibana. Conta com planetário, bibliotecas, teatros de arena e exposições inspiradoras.",
      imageUrl: "https://paraibacriativa.com.br/wp-content/uploads/2015/08/Espa--o-CulturalJP-PB1.jpg",
      tips: "Visite o Memorial José Lins do Rego para mergulhar no acervo histórico do romancista do ciclo da cana-de-açúcar."
    }
  ],
  venues: [
    {
      id: "ven_1",
      title: "Auditório Principal da Reitoria",
      description: "Sede de grandes eventos institucionais da UFPB, com isolamento acústico especial, climatização centralizada de última geração e acomodações aveludadas para até 800 convidados simultâneos.",
      capacity: "800 lugares",
      photoUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500",
      locationInfo: "Térreo do Prédio da Reitoria, campus I, João Pessoa."
    },
    {
      id: "ven_2",
      title: "Auditório Central do Centro de Educação (CE)",
      description: "Espaço pedagógico icônico onde nascem debates formativos das licenciaturas da UFPB. Área climatizada com excelente acessibilidade.",
      capacity: "250 lugares",
      photoUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=500",
      locationInfo: "Bloco Administrativo Central do Centro de Educação."
    },
    {
      id: "ven_3",
      title: "Praça da Alegria (CE)",
      description: "Amplo pátio arborizado cercado por blocos térreos de salas de aula. Local emblemático para confraternizações, vendas de livros e exibições artísticas.",
      capacity: "Área aberta",
      photoUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=500",
      locationInfo: "Lateral interna do Centro de Educação."
    }
  ],
  services: [
    {
      id: "ser_1",
      title: "Restaurante Universitário (RU)",
      description: "Acesso a refeições subsidiadas para alunos. Participantes do Colóquio credenciados no pacote social poderão reverter passes específicos na portaria interna.",
      badge: "ALIMENTAÇÃO SÉRIA"
    },
    {
      id: "ser_2",
      title: "Rede Sem Fio 'Eduroam'",
      description: "Uso institucional unificado de internet de alta velocidade. Basta efetuar login com as credenciais acadêmicas de sua instituição de origem ou usar a rede visitante dedicada do evento.",
      badge: "CONECTIVIDADE INSTITUCIONAL"
    },
    {
      id: "ser_3",
      title: "Biblioteca Central Átila Almeida",
      description: "Acervo riquíssimo em folhetos raros de cordel, xilogravuras originais, obras de memória nordestina e salas reservadas para estudo individualizado silencioso.",
      badge: "PESQUISA DOCENTE"
    }
  ],
  committee: [
    // Coordenação Geral
    { id: "com_g1", name: "Ana Cláudia da Silva Rodrigues", institution: "PPGE/UFPB", role: "geral" },
    { id: "com_g2", name: "Rafael Ferreira de Souza Honorato", institution: "PROFEI/PPGFP/CCHE/UEPB", role: "geral" },
    { id: "com_g3", name: "Lucinalva Andrade Ataide de Almeida", institution: "PPGEdu/UFPE", role: "geral" },
    { id: "com_g4", name: "Rita de Cássia Frangella", institution: "PROPEd/UERJ", role: "geral" },

    // Comitê de Organização Local
    { id: "com_o1", name: "Ana Lúcia Vendel", institution: "PROFEI/CCBSA/UEPB", role: "organizador" },
    { id: "com_o2", name: "Ana Priscila de Lima Araújo Azevêdo", institution: "UFPE", role: "organizador" },
    { id: "com_o3", name: "Adriege Matias Rodrigues", institution: "UFPB", role: "organizador" },
    { id: "com_o4", name: "André dos Santos Bandeira", institution: "SEDUC/CE", role: "organizador" },
    { id: "com_o5", name: "Anne Karoline Cantalice Sena", institution: "Doutoranda PPGE/UFPB", role: "organizador" },
    { id: "com_o6", name: "Alisson Miguel Farias Tôrres", institution: "Graduando CCHE/UEPB", role: "organizador" },
    { id: "com_o7", name: "Caroline dos Santos Florentino de Barros", institution: "Doutoranda/ProPEd/UERJ", role: "organizador" },
    { id: "com_o8", name: "Diego Miranda da Silva", institution: "Doutoranda PPGE/UFPB", role: "organizador" },
    { id: "com_o9", name: "Eliane Fernandes Gadelha Alves", institution: "SEDUC/Campina Grande", role: "organizador" },
    { id: "com_o10", name: "Francisco Cartegiano de Araújo Nascimento", institution: "Doutoranda PPGE/UFPB", role: "organizador" },
    { id: "com_o11", name: "Francisco Geovanio da Silva Sousa", institution: "Mestrando PPGE/UFPB", role: "organizador" },
    { id: "com_o12", name: "Gabriel César de Araújo", institution: "Graduando CCHE/UEPB", role: "organizador" },
    { id: "com_o13", name: "Gessica Mayara de Oliveira Souza", institution: "Doutoranda PPGE/UFPB", role: "organizador" },
    { id: "com_o14", name: "Isabele Lacerda Queiroz", institution: "ProPEd/UERJ", role: "organizador" },
    { id: "com_o15", name: "Isaias da Silva", institution: "UFPB", role: "organizador" },
    { id: "com_o16", name: "Jorge Luis Umbelino de Sousa", institution: "Doutoranda PPGE/UFPB", role: "organizador" },
    { id: "com_o17", name: "José Rodolfo do Nascimento Pereira", institution: "UEPB", role: "organizador" },
    { id: "com_o18", name: "Juan Cleslay Pereira Ventura", institution: "Graduando CCHE/UEPB", role: "organizador" },
    { id: "com_o19", name: "Kadydja Menezes da Rocha Barreto", institution: "Doutoranda SEE-PB/PMJP", role: "organizador" },
    { id: "com_o20", name: "Kaique Gonçalves", institution: "Graduando CCHE/UEPB", role: "organizador" },
    { id: "com_o21", name: "Laryssa Karinne Brizo do Nascimento", institution: "Graduanda CCHE/UEPB", role: "organizador" },
    { id: "com_o22", name: "Lhays Marinho da Conceição Ferreira", institution: "Pós-doutoranda/ProPEd/UERJ", role: "organizador" },
    { id: "com_o23", name: "Liliane Alves Chagas", institution: "SEE/PB", role: "organizador" },
    { id: "com_o24", name: "Lídia Lídicy Soares de Sousa", institution: "Graduanda/UFPB", role: "organizador" },
    { id: "com_o25", name: "Maria Aparecida Fernandes Medeiros", institution: "Doutoranda PPGE/UFPB", role: "organizador" },
    { id: "com_o26", name: "Maria Clara de Lima Santiago Camões", institution: "Pós-doutoranda/ PROPED/UERJ", role: "organizador" },
    { id: "com_o27", name: "Maria Julia Carvalho de Melo", institution: "UEPB", role: "organizador" },
    { id: "com_o28", name: "Matheus Saldanha do Amaral Reis", institution: "DSCE/UERJ", role: "organizador" },
    { id: "com_o29", name: "Natalia da Silva Ferreira", institution: "Graduanda/UFPB", role: "organizador" },
    { id: "com_o30", name: "Nataly da Costa Afonso", institution: "UERJ", role: "organizador" },
    { id: "com_o31", name: "Paula Almeida de Castro", institution: "PPGFP/CEDUC/UEPB", role: "organizador" },
    { id: "com_o32", name: "Rallyne Ranielly Alves da Silva", institution: "Graduanda CCHE/UEPB", role: "organizador" },
    { id: "com_o33", name: "Rogério Rodrigues de Lima", institution: "Mestrando PROFEI/UEPB", role: "organizador" },
    { id: "com_o34", name: "Tatiana Cristina Vasconcelos", institution: "PROFEI/CEDUC/UEPB", role: "organizador" },
    { id: "com_o35", name: "Taynara Tomé Viana", institution: "Graduanda CCHE/UEPB", role: "organizador" },
    { id: "com_o36", name: "Tailson Hugo Felix de Oliveira", institution: "Mestrando PPGED/UFCG", role: "organizador" },
    { id: "com_o37", name: "Vanessa Azevedo Cabral da Silva", institution: "Doutoranda/UFPE", role: "organizador" },
    { id: "com_o38", name: "Veridiana Xavier Dantas", institution: "SEDUC/Santa Rita", role: "organizador" },
    { id: "com_o39", name: "Waleska Rodrigues Costa", institution: "Doutoranda/ProPEd/UERJ", role: "organizador" },
    { id: "com_o40", name: "Williane da Silva Macena", institution: "SEDUC/Santa Rita", role: "organizador" },

    // Comitê Científico
    { id: "com_c1", name: "Adelson Dias de Oliveira", institution: "UFPB", role: "cientifico" },
    { id: "com_c2", name: "Adria Simone Duarte de Souza", institution: "UEA", role: "cientifico" },
    { id: "com_c3", name: "Adriana Regina de Jesus", institution: "UEL", role: "cientifico" },
    { id: "com_c4", name: "Alexandra Garcia", institution: "UERJ", role: "cientifico" },
    { id: "com_c5", name: "Alice Casimiro Lopes", institution: "UERJ", role: "cientifico" },
    { id: "com_c6", name: "Allan Rodrigues", institution: "UFMA", role: "cientifico" },
    { id: "com_c7", name: "Álvaro Luiz Moreira Hypolito", institution: "UFPel", role: "cientifico" },
    { id: "com_c8", name: "Amarildo Inácio dos Santos", institution: "UNESPAR", role: "cientifico" },
    { id: "com_c9", name: "Ana Cláudia da Silva Rodrigues", institution: "UFPB", role: "cientifico" },
    { id: "com_c10", name: "André Freitas", institution: "UL/Portugal", role: "cientifico" },
    { id: "com_c11", name: "Angélica Monteiro", institution: "UP/Portugal", role: "cientifico" },
    { id: "com_c12", name: "Angélica Vier Munhoz", institution: "UNIVATES", role: "cientifico" },
    { id: "com_c13", name: "Anna Luiza Araujo Ramos Martins de Oliveira", institution: "UFPE", role: "cientifico" },
    { id: "com_c14", name: "Bartolomeu Lopes Varela", institution: "ULCV/Cabo Verde", role: "cientifico" },
    { id: "com_c15", name: "Camila Carlachiani", institution: "UR/Argentina", role: "cientifico" },
    { id: "com_c16", name: "Carla Figueiredo", institution: "UP/Portugal", role: "cientifico" },
    { id: "com_c17", name: "Carlinda Leite", institution: "UP/Portugal", role: "cientifico" },
    { id: "com_c18", name: "Carlos Eduardo Ferraço", institution: "UFES", role: "cientifico" },
    { id: "com_c19", name: "Carmen Burgos", institution: "UA/Chile", role: "cientifico" },
    { id: "com_c20", name: "Cássia Ferri", institution: "FURB", role: "cientifico" },
    { id: "com_c21", name: "Catalina Rivera-Gutiérrez", institution: "UF/Chile", role: "cientifico" },
    { id: "com_c22", name: "Clívio Pimentel Júnior", institution: "UFS", role: "cientifico" },
    { id: "com_c23", name: "Daniel Johnson Mardones", institution: "UC/Chile", role: "cientifico" },
    { id: "com_c24", name: "Danilo Araújo de Oliveira", institution: "UFMA", role: "cientifico" },
    { id: "com_c25", name: "Edisson Cuervo Montoya", institution: "UV/Colômbia", role: "cientifico" },
    { id: "com_c26", name: "Elenilton Vieira Godoy", institution: "UFPR", role: "cientifico" },
    { id: "com_c27", name: "Elida Giraldo", institution: "UA/Colômbia", role: "cientifico" },
    { id: "com_c28", name: "Elizabeth Macedo", institution: "UERJ", role: "cientifico" },
    { id: "com_c29", name: "Érika Virgílio Rodrigues da Cunha", institution: "UFR", role: "cientifico" },
    { id: "com_c30", name: "Fátima Pereira", institution: "IPVC/Portugal", role: "cientifico" },
    { id: "com_c31", name: "Francisco Thiago Silva", institution: "UnB", role: "cientifico" },
    { id: "com_c32", name: "Franklin Kaic Dutra-Pereira", institution: "UFPB", role: "cientifico" },
    { id: "com_c33", name: "Geniana dos Santos", institution: "UFMT", role: "cientifico" },
    { id: "com_c34", name: "Geovana Lunardi", institution: "UDESC", role: "cientifico" },
    { id: "com_c35", name: "Hugo Heleno Camilo Costa", institution: "UERJ", role: "cientifico" },
    { id: "com_c36", name: "Inês Barbosa de Oliveira", institution: "UNESA", role: "cientifico" },
    { id: "com_c37", name: "Iris Verena Oliveira", institution: "UNEB", role: "cientifico" },
    { id: "com_c38", name: "Janssen Felipe da Silva", institution: "UFPE", role: "cientifico" },
    { id: "com_c39", name: "João Baptista Machado Sousa", institution: "ISCE/Huambo", role: "cientifico" },
    { id: "com_c40", name: "Jose Damião Trindade Rocha", institution: "UFT", role: "cientifico" },
    { id: "com_c41", name: "José María García Garduño", institution: "UACM/México", role: "cientifico" },
    { id: "com_c42", name: "Juares da Silva Thiesen", institution: "UFSC", role: "cientifico" },
    { id: "com_c43", name: "Lélia Cristina Silveira de Moraes", institution: "UFMA", role: "cientifico" },
    { id: "com_c44", name: "Lucinalva Andrade Ataide de Almeida", institution: "UFPE", role: "cientifico" },
    { id: "com_c45", name: "Lucinete Gadelha da Costa", institution: "UEA", role: "cientifico" },
    { id: "com_c46", name: "Luís Paulo Cruz Borges", institution: "CAp/UERJ", role: "cientifico" },
    { id: "com_c47", name: "Luiz Carlos Carvalho Siqueira", institution: "URCA", role: "cientifico" },
    { id: "com_c48", name: "Marcio Caetano", institution: "UFPel", role: "cientifico" },
    { id: "com_c49", name: "Maria Aparecida Lima dos Santos", institution: "UFMS", role: "cientifico" },
    { id: "com_c50", name: "Maria Carolina Silva Caldeira", institution: "UFMG", role: "cientifico" },
    { id: "com_c51", name: "Maria Edeluza Moura", institution: "UEA", role: "cientifico" },
    { id: "com_c52", name: "Maria Eliete Santiago", institution: "UFPE", role: "cientifico" },
    { id: "com_c53", name: "Maria Inez Carvalho", institution: "UFBA", role: "cientifico" },
    { id: "com_c54", name: "Maria Luiza Süssekind", institution: "UNIRIO", role: "cientifico" },
    { id: "com_c55", name: "Maria Zuleide da Costa Pereira", institution: "UFPB", role: "cientifico" },
    { id: "com_c56", name: "Marlécio Maknamara da Silva Cunha", institution: "UFPB", role: "cientifico" },
    { id: "com_c57", name: "Marta Sampaio", institution: "UP/Portugal", role: "cientifico" },
    { id: "com_c58", name: "Meyre- Ester Oliveira", institution: "UERN", role: "cientifico" },
    { id: "com_c59", name: "Míriam Fábia Alves", institution: "UFG", role: "cientifico" },
    { id: "com_c60", name: "Noralí Boulan", institution: "UNP/Argentina", role: "cientifico" },
    { id: "com_c61", name: "Núbia Regina Moreira", institution: "UESB", role: "cientifico" },
    { id: "com_c62", name: "Ozerina Victor de Oliveira", institution: "UFMT", role: "cientifico" },
    { id: "com_c63", name: "Patrícia Baroni", institution: "UFRJ", role: "cientifico" },
    { id: "com_c64", name: "Paulo de Tassio Duarte de Souza", institution: "UFF", role: "cientifico" },
    { id: "com_c65", name: "Paulo Marinho", institution: "UP/Portugal", role: "cientifico" },
    { id: "com_c66", name: "Rafael Ferreira de Souza Honorato", institution: "UEPB", role: "cientifico" },
    { id: "com_c67", name: "Rafael Marques Gonçalves", institution: "UFAC", role: "cientifico" },
    { id: "com_c68", name: "Roberto Sidnei Macedo", institution: "UFBA", role: "cientifico" },
    { id: "com_c69", name: "Ronnielle de Azevedo-Lopes", institution: "IFPA", role: "cientifico" },
    { id: "com_c70", name: "Rosangela Fritsh", institution: "Unisinos", role: "cientifico" },
    { id: "com_c71", name: "Rosanne Evangelista Dias", institution: "UERJ", role: "cientifico" },
    { id: "com_c72", name: "Roseli de Sá", institution: "UFBA", role: "cientifico" },
    { id: "com_c73", name: "Samuel Helena Tumbula", institution: "UCA/Angola", role: "cientifico" },
    { id: "com_c74", name: "Santiago Zemaitis", institution: "NP/Argentina", role: "cientifico" },
    { id: "com_c75", name: "Silvia Morelli", institution: "UR/Argentina", role: "cientifico" },
    { id: "com_c76", name: "Talita Vidal Pereira", institution: "UERJ", role: "cientifico" },
    { id: "com_c77", name: "Thiago Ranniery", institution: "UFRJ", role: "cientifico" },
    { id: "com_c78", name: "Tiago Ribeiro da Silva", institution: "INES/UNR", role: "cientifico" },
    { id: "com_c79", name: "William de Goes Ribeiro", institution: "UFF", role: "cientifico" }
  ]
};
