import { GuestSpeaker } from './types';
// @ts-ignore
import anaClaudiaImg from './assets/images/regenerated_image_1781616393308.jpg';

// Helper to convert Google Drive public view pages into renderable direct thumbnail links
export function transformGoogleDriveUrl(url: string | undefined): string {
  if (!url) return 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300';
  const trimmed = url.trim();

  if (trimmed.includes('drive.google.com/drive/folders/')) {
    // If it's a folder, return a friendly generic avatar illustration
    return 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300';
  }

  if (trimmed.includes('drive.google.com')) {
    let id = '';
    if (trimmed.includes('id=')) {
      const match = trimmed.match(/[?&]id=([^&]+)/);
      if (match) id = match[1];
    } else if (trimmed.includes('/file/d/')) {
      const match = trimmed.match(/\/file\/d\/([^/]+)/);
      if (match) id = match[1];
    }
    
    if (id) {
      // The Drive Thumbnail API is the most robust and highly reliable way to render public images
      return `https://drive.google.com/thumbnail?id=${id}&sz=w500`;
    }
  }
  return trimmed;
}

const RAW_EXCLUSIVOS_SPEAKERS: GuestSpeaker[] = [
  {
    id: "sp_ex_1",
    name: "Luis Paulo Cruz Borges",
    type: "nacional",
    institution: "Uerj",
    topic: "Sociologia da Educação, Estudos Curriculares e Vozes Estudantis",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1KFN7O3Gc7P4FzRBy7TTBBY9XU6QXnmXw"),
    lattesUrl: "http://lattes.cnpq.br/0194486050835751",
    bio: "Professor do CAp-UERJ e do ProPEd/UERJ, doutor e mestre em Educação pela UERJ, o pesquisador desenvolve estudos nas áreas de sociologia e antropologia da educação, currículo, infâncias e juventudes, relações étnico-raciais, vozes estudantis e práticas pedagógicas insurgentes.",
    publications: ["Vozes Estudantis e Cotidiano", "Sociologia e Práticas Pedagógicas Insurgentes"]
  },
  {
    id: "sp_ex_2",
    name: "Francisco Thiago Silva",
    type: "nacional",
    institution: "UnB",
    topic: "Didática, Formação de Professores e Políticas Curriculares",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1IgO52IgA6ZArNK1G58-xW4rhIpza1k4H"),
    lattesUrl: "http://lattes.cnpq.br/1498719376426045",
    bio: "Professor da Faculdade de Educação da UnB e vice-coordenador dos programas de pós-graduação em Educação da instituição. Possui doutorado e mestrado em Educação e Currículo pela Universidade de Brasília, com pós-doutorado em Educação pela UFT. Suas pesquisas articulam didática, formação docente, relações étnico-raciais e direitos humanos.",
    publications: ["Didática e Formação Docente", "Políticas Curriculares na Contemporaneidade"]
  },
  {
    id: "sp_ex_3",
    name: "Thiago Rodrigo Fernandes da Silva Santos",
    type: "nacional",
    institution: "UFPE",
    topic: "Políticas Públicas, Planejamento e Avaliação da Educação",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1k-y1SzjYFCdVBwTU3-hQSVobx1ZRddBk"),
    lattesUrl: "http://lattes.cnpq.br/4753201283196524",
    bio: "Professor do Departamento de Políticas e Gestão da Educação da UFPE. Possui doutorado e mestrado em Educação pela UFPE, com pós-doutorado pela UEM. É líder do Laboratório de Pesquisa em Políticas Públicas, Educação e Sociedade (LAPPES), com destaque para fomento sobre a atuação de organismos internacionais nas políticas educacionais.",
    publications: ["O Banco Mundial e as Políticas Educacionais", "Planejamento e Gestão Escolar"]
  },
  {
    id: "sp_ex_4",
    name: "Patrícia Raquel Baroni",
    type: "nacional",
    institution: "UFRJ",
    topic: "Formação, Pesquisa e Ecologias do Narrar em Educação",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1zJlAOCI0-cXuLA2O_QSo74CI05s81Y_5"),
    lattesUrl: "http://lattes.cnpq.br/2974793513488242",
    bio: "Professora adjunta da UFRJ, atuando na Faculdade de Educação e no Programa de Pós-Graduação em Educação. Doutora em Educação pela UFES e mestra pela UERJ. Integra a diretoria da ANPED como vice-presidente Sudeste e coordena o grupo de pesquisa e extensão Ecologias do Narrar.",
    publications: ["Ecologias do Narrar", "Trajetórias Acadêmicas e Formação de Professores"]
  },
  {
    id: "sp_ex_5",
    name: "Edisson Cuervo",
    type: "internacional",
    institution: "Universidad del Valle (Colômbia)",
    topic: "Formación, Currículo y Políticas Educativas Latinoamericanas",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=17KGYWVyXPNZfLIF1WF7FTlnc_HJK3XQ6"),
    lattesUrl: "http://lattes.cnpq.br/8437655972144281",
    bio: "Profesor de la Facultad de Educación y Pedagogía de la Universidad del Valle, en Colombia. Licenciado en Filosofía por la Universidad de Antioquia, Magíster en Investigación Educativa por la Universidad de Alicante y Doctor en Ciencias de la Educación por la Universitat de València. Desarrolla investigaciones en formación y currículo.",
    publications: ["Investigación Educativa Latinoamericana", "Filosofía y Pedagogía del Currículo"]
  },
  {
    id: "sp_ex_6",
    name: "Deise Guilhermina da Conceição",
    type: "nacional",
    institution: "Prefeitura de Duque de Caxias / SME-RJ",
    topic: "Memória, Narrativas e Educação das Relações Étnico-Raciais",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1ykh2zmMzFM12R1E0fZ01AN2vVIXJurLQ"),
    lattesUrl: "https://lattes.cnpq.br/1272629997828002",
    bio: "Historiadora do Museu Vivo do São Bento, em Duque de Caxias, e professora da Rede Municipal de Educação do Rio de Janeiro. Doutora e mestre em Educação pela UFF na linha de pesquisa 'Negro e Educação'. Integra grupos voltados à discussão sobre narrativas e justiça social no campo curricular.",
    publications: ["Negritude, História e Educação", "Narrativas e Memória no São Bento"]
  },
  {
    id: "sp_ex_7",
    name: "Roberto Sidnei Macedo",
    type: "nacional",
    institution: "UFBA",
    topic: "Currículo, Formação Docente e Etnopesquisa-formação",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1pQZwbJXxcmxEBRlJId_OOg4PILFMAnhs"),
    lattesUrl: "https://lattes.cnpq.br/4548303459275924",
    bio: "Professor titular da UFBA, doutor em Ciências da Educação pela Universidade de Paris 8, com pós-doutorados em currículo e formação realizados na Suíça e em Portugal. Atuou como coordenador do GT Currículo da ANPED e é referência nacional em etnopesquisa.",
    publications: ["Etnopesquisa-formação: Conceito e Diálogos", "O Sentido do Currículo"]
  },
  {
    id: "sp_ex_8",
    name: "Liliane Alves Chagas",
    type: "nacional",
    institution: "GOV-PB",
    topic: "Currículo, Arte, Cultura Popular e Práticas Formativas",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1COHUjeYn-_Al_vsDErKDvFo3BcTaAJTA"),
    lattesUrl: "http://lattes.cnpq.br/2073391662020902",
    bio: "Professora de Arte e pedagoga, doutora em Educação, atuando nas ECIT Presidente João Goulart e Francisca Ascensão Cunha em João Pessoa. Integra o GEPPC/UFPB. Também atua como cantora popular e instrumentista do Grupo de Empoderamento Feminino Baque Mulher.",
    publications: ["Expressões Artísticas e Educação Popular", "Diálogos Sensíveis: Arte e Currículo"]
  },
  {
    id: "sp_ex_9",
    name: "Maria Luiza Sussekind",
    type: "nacional",
    institution: "UNIRIO",
    topic: "Estudos Curriculares, Formação Docente e Políticas Educacionais",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1_H8i2ifbKggK2clLi1wyF52eatdp_iQl"),
    lattesUrl: "http://lattes.cnpq.br/3054907039826552",
    bio: "Professora da UNIRIO e do Programa de Pós-Graduação em Educação. Possui doutorado em Educação pela UERJ e pós-doutorado pela University of British Columbia (Canadá). Integra importantes associações de pesquisa nacionais e internacionais em formulação curricular.",
    publications: ["Estudos Curriculares no Brasil", "A Escola Pública e Seus Cotidianos"]
  },
  {
    id: "sp_ex_10",
    name: "Robson Guedes da Silva",
    type: "nacional",
    institution: "UFPB",
    topic: "Didática, Corpo, Diferenças e Teoria Queer na Educação",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1MnaLjb2OFafFOQe-3au012c9VlMfpLda"),
    lattesUrl: "http://lattes.cnpq.br/6509470367386808",
    bio: "Professor da UFPB e docente permanente dos programas de pós-graduação em Educação da UFPB e da UFPE. Doutor e mestre em Educação pela UFPE. Coordena o Observatório LGBTQIAPN+ da UFPB e lidera o Laboratório ELÃ-UFPB/CNPq, investigando corpo, subjetivação e sexualidade.",
    publications: ["Teoria Queer e Educação", "Corpo, Performance e Didática"]
  },
  {
    id: "sp_ex_11",
    name: "Rita de Cassia Prazeres Frangella",
    type: "nacional",
    institution: "Uerj",
    topic: "Currículo, Cultura, Diferença e Formação de Professores",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1pnBoZ3eiED-4PUWkfRfiSA90rkhG9I1O"),
    lattesUrl: "https://lattes.cnpq.br/1090641466362716",
    bio: "Professora titular da UERJ e atual coordenadora do ProPEd/UERJ. Doutora e mestre em Educação pela UERJ. Ex-presidente da Associação Brasileira de Currículo (ABdC), coordena o grupo de pesquisa GECDH e desenvolve investigações na infância, diferença e políticas para anos iniciais.",
    publications: ["Formação Docente e Políticas de Currículo", "Cultura, Alfabetização e Diferença"]
  },
  {
    id: "sp_ex_12",
    name: "Nubia Regina Moreira",
    type: "nacional",
    institution: "UESB",
    topic: "Teoria Curricular, Relações Étnico-Raciais e Epistemologias Afro-diaspóricas",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1SzMFt73eKYDxOzgcHFa_8F-Hz2J4JbO5"),
    lattesUrl: "http://lattes.cnpq.br/2340040990632743",
    bio: "Professora da UERJ, doutora em Sociologia pela UnB com pós-doutorado no ProPEd/UERJ. Atuou como docente nos programas de pós-graduação da UESB e lidera o grupo Oju Obinrin - Feminismos, Etnicidades e Conhecimentos. Investiga subjetivação e epistemologias feministas afro-diaspóricas.",
    publications: ["Sociologia da Diferença no Currículo", "Feminismos Negros e Epistemologia"]
  },
  {
    id: "sp_ex_13",
    name: "Carmen Gloria Burgos Videla",
    type: "internacional",
    institution: "Universidad de Atacama (Chile)",
    topic: "Teoría Curricular, Creatividad y Educación para la Justicia Social",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=13sWlf6ZEx5Nmdvm6dBRYxX-Th81vNClN"),
    lattesUrl: "http://lattes.cnpq.br/9905231056187059",
    bio: "Doutora em Ciências da Educação pela Universidad de La Frontera e docente da Universidade de Atacama (Chile), onde atua no Departamento de Educação Básica e lidera o Instituto de Pesquisa em Ciências Sociais. Coordena a Rede de Estudos Curriculares do Chile e integra a Cátedra UNESCO de Educação para a Justiça Social.",
    publications: ["Teoría Pedagógica y Creatividad", "Justicia Social y Modelos Curriculares"]
  },
  {
    id: "sp_ex_14",
    name: "Ana Paula Romão de Souza Ferreira",
    type: "nacional",
    institution: "UFPB",
    topic: "Educação do Campo, Relações Étnico-Raciais e Memória",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1St4I_5riQ1PIW-qZ8nwwEzC5Yl44KUZ_"),
    lattesUrl: "http://lattes.cnpq.br/2018294420248088",
    bio: "Professora associada da UFPB, doutora em Educação pela UFPB. Atuou como consultora da UNESCO na avaliação de políticas do MEC para o ensino médio e educação antirracista. Integra a Comissão Nacional Camponesa da Verdade sobre história e memória.",
    publications: ["Educação do Campo e Resistência", "Memória Camponesa e Direitos Humanos"]
  },
  {
    id: "sp_ex_15",
    name: "Janssen Felipe da Silva",
    type: "nacional",
    institution: "UFPE",
    topic: "Epistemologias Decoloniais, Territórios Camponeses e Diferença",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=13rJi5yC9DgeHkMbpJLlrz1kPCiIcCFvo"),
    lattesUrl: "http://lattes.cnpq.br/7400508587983938",
    bio: "Professor associado da UFPE na Licenciatura Intercultural Indígena e no PPG em Educação Contemporânea (Agreste). Doutor e mestre em Educação pela UFPE, investiga processos educativos campesinos orientados por perspectivas pós-coloniais e decoloniais.",
    publications: ["Educação Contemporânea e Território", "Decolonialidade e Teoria da Complexidade"]
  },
  {
    id: "sp_ex_16",
    name: "Elenilton Vieira Godoy",
    type: "nacional",
    institution: "UFPR",
    topic: "Educação Matemática, Decolonialidade e Interseccionalidade",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=12cXwVlpHKxyMmusDsYvXq-490yU-h6N4"),
    lattesUrl: "http://lattes.cnpq.br/8519404619037270",
    bio: "Professor da UFPR e docente de pós-graduação em Educação em Ciências e Matemática. Doutor e pós-doutor em Educação pela USP. Coordena o Grupo de Estudos Curriculares, Decolonialidade, Diversidade e Subalternidade (GECUDEDIS) e milita no GT da SBEM.",
    publications: ["Cultura e Educação Matemática", "Socioeducação e Interseccionalidade"]
  },
  {
    id: "sp_ex_17",
    name: "Anna Luiza Martins de Oliveira",
    type: "nacional",
    institution: "UFPE",
    topic: "Discurso, Subjetividade, Gênero, Sexualidade e Educação Popular",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1U1NajRkJp44KT0_DggS7h5H7ligOM19r"),
    lattesUrl: "http://lattes.cnpq.br/6160820352802922",
    bio: "Professora Associada da UFPE e pesquisadora permanente de pós-graduação. Lidera o grupo 'Discurso, Subjetividade e Educação'. Possui intensa atuação nos estudos discursivos de gênero, diversidade e nas políticas populares na América Latina.",
    publications: ["Discurso, Gênero e Sexualidade no Currículo", "Subjetividades Coletivas e Educação Popular"]
  },
  {
    id: "sp_ex_18",
    name: "Hugo Heleno Camilo Costa",
    type: "nacional",
    institution: "UERJ",
    topic: "Políticas de Currículo, Teoria do Discurso e Subjetividades",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/file/d/16BQm2Sv8kCjb2KEhtEz9Len0aSfO1EHh/view?usp=sharing"),
    lattesUrl: "http://lattes.cnpq.br/0377631022122389",
    bio: "Professor da UERJ e docente permanente de pós-graduação na UERJ e UFR. Secretário-geral da Associação Brasileira de Currículo (ABdC) e líder do Núcleo de Estudos em Currículo, Culturas e Subjetividades (NECSUS). Investiga desconstrução e geografia.",
    publications: ["Espaço, Cultura e Teorias de Currículo", "Subjetivação e Desconstrução em Educação"]
  },
  {
    id: "sp_ex_19",
    name: "Alice Casimiro Lopes",
    type: "nacional",
    institution: "UERJ",
    topic: "Políticas de Currículo, Teoria Curricular e Significação",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1VktxSknsyXHbbQMcOhjXPISk6Zi6lP0Y"),
    lattesUrl: "http://lattes.cnpq.br/5262190522408958",
    bio: "Professora titular da Universidade do Estado do Rio de Janeiro (UERJ) e docente permanente do ProPEd/UERJ. Desenvolve pesquisas fundamentais sobre políticas do currículo, teoria curricular e política educacional sob a ótica pós-estruturalista e do discurso.",
    publications: ["Teoria de Currículo", "Políticas de Currículo em Discurso"]
  },
  {
    id: "sp_ex_20",
    name: "Paulo de Tássio Borges da Silva",
    type: "nacional",
    institution: "UFF",
    topic: "Educação Escolar Indígena, Interculturalidade e Currículo",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1VgnWAS0uFwnhcm9TD_wd0iWG0_4QQZ0Y"),
    lattesUrl: "http://lattes.cnpq.br/7692677995296875",
    bio: "Professor adjunto da Universidade Federal Fluminense (UFF) no curso de Magistério Guarani, e docente permanente do PPGER/UFSB. Desenvolve pesquisas em educação indígena, gênero, sexualidades e formação de professores em perspectiva intercultural.",
    publications: ["Revitalização Linguística e Magistério Guarani", "Infâncias Indígenas e Diferença"]
  },
  {
    id: "sp_ex_21",
    name: "Clívio Pimentel Júnior",
    type: "nacional",
    institution: "UFS",
    topic: "Educação em Ciências, Narrativas e Cotidiano Escolar",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1bX7jhbuTgI7Gt5Fld-IfrqZZCSdJvtSO"),
    lattesUrl: "http://lattes.cnpq.br/7868680338671520",
    bio: "Professor do Departamento de Biologia e do Programa de Pós-Graduação em Educação do colégio UFS. Desenvolve trabalhos em políticas de currículo, ensino de biologia e ensaios (auto)biográficos de professores em matrizes pós-estruturalistas.",
    publications: ["Educação em Ciências e Saberes Escolares", "Narrativas Biográficas no Cotidiano"]
  },
  {
    id: "sp_ex_22",
    name: "Tatiana Cristina Vasconcelos",
    type: "nacional",
    institution: "UEPB",
    topic: "Psicologia e Educação Inclusiva, Tecnologia e Aprendizagem",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1muyAWi7U9ahYYSorUKapVYSRzm2gX1HQ"),
    lattesUrl: "http://lattes.cnpq.br/2042671665043024",
    bio: "Professora titular da Universidade Estadual da Paraíba (UEPB) e docente de pós-graduação no PROFEI/UEPB. Lidera o Grupo de Pesquisa Linguagens, Inclusão e Tecnologias (GPLIT) focando em inclusão, espectro do autismo e mediação tecnológica.",
    publications: ["Linguagens e Autismo na Escola", "Mediação Digital e Inclusão Escolar"]
  },
  {
    id: "sp_ex_23",
    name: "Adelson Dias de Oliveira",
    type: "nacional",
    institution: "UFPB",
    topic: "Didática, Educação Popular, Campo e Narrativas (Auto)Biográficas",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1mmXpZVPq11oXy9XypyhqLycA8jSbfasR"),
    lattesUrl: "http://lattes.cnpq.br/8640495876980514",
    bio: "Professor da Universidade Federal da Paraíba (UFPB) e docente de pós-graduação do PPGENS/UNIVASF. Dedica-se às narrativas de formação e documentação de práticas pedagógicas na educação popular e do campo.",
    publications: ["Juventudes e Práticas do Campo", "Documentação Narrativa e Didática Popular"]
  },
  {
    id: "sp_ex_24",
    name: "Ana Lúcia Vendel",
    type: "nacional",
    institution: "UEPB",
    topic: "Educação Inclusiva, Sustentabilidade e Ecossistemas Aquáticos",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1at9hhk_uEp0YSuhQ2UkZtXU86fK01sC4"),
    lattesUrl: "http://lattes.cnpq.br/8037429773999159",
    bio: "Professora da Universidade Estadual da Paraíba (UEPB) e docente de mestrado no PROFEI. Articula projetos de inclusão educacional voltados a pessoas com trissomia do 21 e pesquisas ecológicas sobre o semiárido e litoral paraibano.",
    publications: ["Sustentabilidade Aquática no Semiárido", "Trissomia do 21 e Inclusão Escolar"]
  },
  {
    id: "sp_ex_25",
    name: "Maria Aparecida Lima dos Santos",
    type: "nacional",
    institution: "UFMS",
    topic: "Ensino Médio, Teoria do Discurso e Ensino de História",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1MFmMomKS9Ttka-1JJY76gi86wphZndo1"),
    lattesUrl: "https://lattes.cnpq.br/5816112602113342",
    bio: "Professora da Universidade Federal de Mato Grosso do Sul (UFMS) e docente do PPGEDU/UFMS. Realiza estudos discursivos aplicados sobre políticas de Ensino Médio, práticas de alfabetização e didáticas contemporâneas na escola básica.",
    publications: ["Leitura e Escrita no Ensino Médio", "Ensino de História e Teoria do Discurso"]
  },
  {
    id: "sp_ex_26",
    name: "André dos Santos Bandeira",
    type: "nacional",
    institution: "SEDUC/CE",
    topic: "Educação Profissional, Práticas Curriculares e Tecnologias",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1XPMl9aXLEUBFrOly0hxBX-hSDoF_guYT"),
    lattesUrl: "http://lattes.cnpq.br/4269973608050298",
    bio: "Doutor em Educação pela UFPB e docente da rede estadual do Ceará. Suas linhas de ação envolvem currículo, educação integral e formação profissional técnica. É membro ativo do GEPPC/UFPB e atua no comitê editorial da Revista Espaço do Currículo.",
    publications: ["Tecnologias Educacionais e Prática Docente", "Políticas Profissionalizantes no Ceará"]
  },
  {
    id: "sp_ex_27",
    name: "Thiago Luis Cavalcanti Calabria",
    type: "nacional",
    institution: "SEE/PB",
    topic: "Ensino Médio Integral, Juventudes e Ensino de História",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1ddwPe24vEG-kR3NQvXTEJA0r6IroCEja"),
    lattesUrl: "http://lattes.cnpq.br/8052349301328291",
    bio: "Doutor em Educação pela UFPB e professor secundarista da Paraíba. Foca seus estudos nas mutações pedagógicas advindas do Ensino Médio em tempo integral, história escolar de jovens e impactos institucionais locais.",
    publications: ["História e Práticas Pedagógicas", "Ensino Médio e Tempo Integral na Paraíba"]
  },
  {
    id: "sp_ex_28",
    name: "Alexandra Garcia",
    type: "nacional",
    institution: "UERJ",
    topic: "Currículo, Cotidiano, Cultura e Formação de Professores",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1yG12dkGUbpBXoTt35YRiuqBYKJHAPwcH"),
    lattesUrl: "http://lattes.cnpq.br/3937685552665813",
    bio: "Professora titular da Universidade do Estado do Rio de Janeiro (UERJ) e docente de PPGs da instituição. Coordena o ProPEd/UERJ e serve na vice-presidência nacional da ABdC. Desenvolve trabalhos focados nas relações cotidianas e metodologias identitárias.",
    publications: ["Conversas com o Cotidiano no Currículos", "Experiência e Formação de Professores"]
  },
  {
    id: "sp_ex_29",
    name: "Diego dos Santos Reis",
    type: "nacional",
    institution: "UFPB",
    topic: "Filosofia da Educação e Práxis Educativa Antirracista",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1S47vdybYetN4qqVe-lZ_TN-1FMzT0LIa"),
    lattesUrl: "http://lattes.cnpq.br/4681354757357359",
    bio: "Professor da Universidade Federal da Paraíba (UFPB). Doutor em Educação, foca em filosofia da educação, estudos contracoloniais e violências estruturais racistas. Lidera o grupo Travessias - Filosofia e Educação Antirracista.",
    publications: ["Travessias: Prática Antirracista", "Colonialidade e Contracolonialidade Escolar"]
  },
  {
    id: "sp_ex_30",
    name: "Jorge Luis Umbelino de Sousa",
    type: "nacional",
    institution: "UFPB",
    topic: "Ensino Médio, Diferença Cultural, Juventudes e Financiamento",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1DYHQns7vEDYjA1Liss2Lsh4f0rp9Im7x"),
    lattesUrl: "http://lattes.cnpq.br/0173807819308229",
    bio: "Doutorando em Educação pela UFPB e pesquisador integrante do GEPPC/UFPB. Foca mútua no financiamento da educação de base, desigualdades regionais e diretivas curriculares inovadoras para o ensino médio em favelas.",
    publications: ["Políticas de Alfabetização", "Financiamento da Educação Básica"]
  },
  {
    id: "sp_ex_31",
    name: "Francisco Cartegiano de Araújo Nascimento",
    type: "nacional",
    institution: "UFPB",
    topic: "Avaliação Educacional, Gestão e Redes Cognitivas",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1oc6AZ5nPWjxd3nUJoHMRp_46yqkljkJR"),
    lattesUrl: "http://lattes.cnpq.br/6838781672684152",
    bio: "Doutorando em Educação pela UFPB e pesquisador associado ao GEPPC/UFPB. Desenvolve de modo especial pesquisas sobre avaliação sistêmica, regulação de ensino e dinâmicas interativas locais de escolas.",
    publications: ["Gestão Curricular e Avaliação", "Tecendo Redes de Aprendizagem"]
  },
  {
    id: "sp_ex_32",
    name: "Diego Miranda da Silva",
    type: "nacional",
    institution: "UFPB",
    topic: "Políticas Curriculares, Difusão Científica e Ensino",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1DTQFe0jpQrUJWJBSIYXc3rFTCGbAeBbG"),
    lattesUrl: "http://lattes.cnpq.br/5135152821726123",
    bio: "Doutorando em Educação pela UFPB e analista intelectual vinculado ao GEPPC. Dedica esforços editoriais na Revista Espaço do Currículo, estudando difusão científica, teorias críticas e o letreiramento acadêmico contemporâneo.",
    publications: ["Difusão Científica e Currículo", "Estudos em Políticas Educativas"]
  },
  {
    id: "sp_ex_33",
    name: "Francisco Geovanio da Silva Sousa",
    type: "nacional",
    institution: "UFPB",
    topic: "Políticas Educacionais, Gestão Escolar e Educação Integral",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1mG5Ly2V82klDbBqgBSqwJddAsfY07URR"),
    lattesUrl: "http://lattes.cnpq.br/3767605410795486",
    bio: "Mestrando em Educação pela UFPB e assessor escolar administrativo na Gerência Executiva das Escolas Cidadãs Integrais da Paraíba (GEECI). Investiga gestão escolar, monitoramento e implantação prática do tempo integral de base no estado.",
    publications: ["Gestão Escolar na Paraíba", "Políticas e Escolas Cidadãs Integrais"]
  },
  {
    id: "sp_ex_34",
    name: "Adriege Matias Rodrigues",
    type: "nacional",
    institution: "UFPB",
    topic: "Práticas Educativas, Formação Docente e Políticas Curriculares",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1tadtWTo5tvwIFmWDiY_MYBDdH9ykELCV"),
    lattesUrl: "https://lattes.cnpq.br/8016583991263120",
    bio: "Doutora em Educação pela UFPB e professora do CCHSA/UFPB. Desenvolve investigações no campo do currículo, investigando principalmente formação continuada de saberes, táticas de escola e fomento ao debate crítico.",
    publications: ["Grupo de Estudos Curriculares (GEPPC)", "Currículo e Práticas Educativas"]
  },
  {
    id: "sp_ex_35",
    name: "Érika Virgílio Rodrigues da Cunha",
    type: "nacional",
    institution: "UFR",
    topic: "Abordagens Pós-Fundacionais, BNCC e Diferença Curricular",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1soB4-pxLnlOXa1uAhx2Sq6C1aOUtkdC8"),
    lattesUrl: "http://lattes.cnpq.br/1583175347126296",
    bio: "Professora associada da UFR (Universidade Federal de Rondonópolis) e docente de PPG. Estuda políticas de currículo orientadas por abordagens pós-fundacionais e pós-estruturais, focando sobre alteridade, BNCC e disputas de hegemonia.",
    publications: ["Tradução e Diferença Curricular", "Reformas Educacionais e Desconstrução"]
  },
  {
    id: "sp_ex_36",
    name: "Joana Karoline da Silva Elias",
    type: "nacional",
    institution: "UFPB",
    topic: "Educação de Jovens e Adultos, Relações Étnico-Raciais e Gênero",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1enCumG9EoxwmfscsCMYOCn85fIqFqV_1"),
    lattesUrl: "https://lattes.cnpq.br/8595367928986861",
    bio: "Doutoranda em Educação pela UFPB e pesquisadora sênior do grupo GEPPEEJA. Trajetória acadêmica voltada à Educação de Jovens e Adultos (EJA), narrativas antirracistas periféricas e compromisso ético e cidadão com a escola pública.",
    publications: ["Educação de Jovens e Adultos e Gênero", "Relações Étnico-Raciais na EJA"]
  },
  {
    id: "sp_ex_37",
    name: "Iris Verena Santos de Oliveira",
    type: "nacional",
    institution: "UNEB",
    topic: "Educação Escolar Quilombola, Escrevivências e Antirracismo",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1-gFXmUa0KNmwYAT6-c7PktkAatv6qHl2"),
    lattesUrl: "https://lattes.cnpq.br/4935185086128673",
    bio: "Professora Adjunta da UNEB e docente de PPGs. Investiga currículo, quilombos identitários e representatividades. Coordena o projeto 'Cativeiro Estatístico: Currículo e Genocídio da Juventude Negra' e trabalha sobre escrevivências.",
    publications: ["Currículo e Escrevivências", "Educação Escolar Quilombola"]
  },
  {
    id: "sp_ex_38",
    name: "Marcelo Medeiros da Silva",
    type: "nacional",
    institution: "UEPB",
    topic: "Literatura, Gênero, Sexualidades e Formação de Leitores",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1IeDGeJXcoUBwPAWkdJ6rdTO1LY3Td_Vt"),
    lattesUrl: "https://lattes.cnpq.br/8642945745816768",
    bio: "Professor da Universidade Estadual da Paraíba (UEPB) e docente de PPGs. Investiga literatura oitocentista feminina, escritoras silenciadas, ensino literário inovador na educação básica de nível médio e diversidade de gênero.",
    publications: ["Mulher e Escrita: Estudo Crítico", "Ensino de Literatura e Leituras Críticas"]
  },
  {
    id: "sp_ex_39",
    name: "Tiago Ribeiro da Silva",
    type: "nacional",
    institution: "UNR / INES",
    topic: "Educação Bilíngue de Surdos, Diferenças e Interseccionalidades",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1jGv7J7mGbeTEIoRmaKp8ypH4BFEfO96p"),
    lattesUrl: "http://lattes.cnpq.br/2315195956044963",
    bio: "Professor do Mestrado Profissional em Educação Bilíngue do INES (Instituto Nacional de Educação de Surdos). Investiga táticas inclusivas cotidianas para surdos, interseccionalidades, linguagens e identidades locais. Lidera o grupo ArteGestoAção.",
    publications: ["Educação Bilíngue de Surdos", "ArteGestoAção nas Relações Sócio-históricas"]
  },
  {
    id: "sp_ex_40",
    name: "Miriam Fábia Alves",
    type: "nacional",
    institution: "UFG",
    topic: "Ensino Médio, Juventudes e Militarização de Escolas Públicas",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=12j6V3-V-udcivCUa7GbDKAr-XQHhKqmt"),
    lattesUrl: "http://lattes.cnpq.br/4002600044640352",
    bio: "Professora titular da UFG (Goiás). É presidenta da Associação Nacional de Pós-Graduação e Pesquisa em Educação (ANPEd). Investiga políticas públicas juvenis, militarização escolar no Brasil e lutas curriculares secundaristas.",
    publications: ["Militarização da Educação Pública", "Políticas Educacionais e Juventude"]
  },
  {
    id: "sp_ex_41",
    name: "José Rodolfo do Nascimento Pereira",
    type: "nacional",
    institution: "UEPB",
    topic: "Estudos Culturais da Educação, Gênero, Sexualidades e Queer",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1RBPDg2k3Goo4xXGHx8oLDqvy3yjWT1c3"),
    lattesUrl: "http://lattes.cnpq.br/4762296278837054",
    bio: "Professor de UEPB e membro dos comitês científicos e organizadores locais. Seus campos de ação envolvem currículo crítico, teoria queer e as interseccionalidades do cotidiano na fomação básica e acadêmica.",
    publications: ["Gênero e Diferenças nas Escolas", "Estudos Culturais da Educação"]
  },
  {
    id: "sp_ex_42",
    name: "Paula Almeida de Castro",
    type: "nacional",
    institution: "UEPB",
    topic: "Formação Docente, Psicologia, Inclusão e Resiliência",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1WqBpqaaBciT5g8dLNSEZeCvq9eyFuCIR"),
    lattesUrl: "http://lattes.cnpq.br/7813446738576212",
    bio: "Professora associada da UEPB e docente permanente dos programas de pós-graduação em Formação de Professores (PPGFP) e Inclusão (PROFEI). Coordena as redes PIBID e lidera o Observatório OPEM.",
    publications: ["Resiliência na Formação Docente", "Observatório Multidisciplinar (OPEM)"]
  },
  {
    id: "sp_ex_43",
    name: "Eliane Fernandes Gadelha Alves",
    type: "nacional",
    institution: "SEDUC Campina Grande / PMCG",
    topic: "Diversidade, Formação Docente, Práticas Pedagógicas e Cotidianos",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1LBnTVrls0bVUp65OTrpSHw-TeC8rWUoo"),
    lattesUrl: "http://lattes.cnpq.br/7993699614559372",
    bio: "Doutora em Educação pela UFPB e pesquisadora sênior adjunta do GEPPC/UFPB. Exerce atividade ativa como supervisora escolar em Campina Grande, conciliando saberes teóricos aos desafios da sala de aula cotidiana.",
    publications: ["Cotidiano Escolar e Prática Docente", "Diversidade Escolar na Paraíba"]
  },
  {
    id: "sp_ex_44",
    name: "Maria Julia Carvalho de Melo",
    type: "nacional",
    institution: "UEPB",
    topic: "Formação de Professores, Avaliação e Práticas Curriculares",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=19oi-24F6x6FLurV6cQKFiy5uJEv-ZJox"),
    lattesUrl: "http://lattes.cnpq.br/5566553710721063",
    bio: "Doutora em Educação pela UFPE com modalidade sanduíche na Universidade do Porto. É professora no Campus III da UEPB, atuando na rede de cooperação internacional CAFTe e estudando avaliação curricular formativa.",
    publications: ["Rede CAFTe: Práticas de Avaliação", "Formação Curricular de Professores"]
  },
  {
    id: "sp_ex_45",
    name: "Kadydja Menezes da Rocha Barreto",
    type: "nacional",
    institution: "Prefeitura de João Pessoa",
    topic: "Educação de Jovens e Adultos, Direitos Humanos e Prisões",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=101ISft4C-iwcC2qmZp5ZwQ59AbTJ7z6f"),
    lattesUrl: "http://lattes.cnpq.br/3379109782585489",
    bio: "Doutoranda em Educação na UFPB. Advogada atuante em Direitos Humanos, especialista em Letras e mestra em Letras e Educação Prisional. Leciona no município de João Pessoa e no governo do estado.",
    publications: ["Educação Prisional e Direitos Humanos", "EJA, Letramentos e Políticas Curriculares"]
  },
  {
    id: "sp_ex_46",
    name: "Vinícius Lírio Hozana Ferreira",
    type: "nacional",
    institution: "UNIG",
    topic: "Geografia, Relações Étnico-Raciais e Percursos nos Cotidianos",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1DWmfiz9h0_HAk_Y-1QvrkfkqvIbbnOWX"),
    lattesUrl: "https://lattes.cnpq.br/4163358825561968",
    bio: "Doutor e mestre em Educação pela UNIRIO. Fundador do conselho GPEAR-MIRA sobre educação antirracista. Elaborou livros aclamados no campo do saber geográfico e atuou na comissão técnica do PNLD/MEC.",
    publications: ["Percursos Curriculares nos Cotidianos", "Conversas com um Professor Negro de Geografia"]
  },
  {
    id: "sp_ex_47",
    name: "Lucinalva Andrade Ataide de Almeida",
    type: "nacional",
    institution: "UFPE",
    topic: "Formação de Professores, Avaliação e Redes CAFTe",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1KtNGNNIb_kdowUzdbwcnneGw0XND7yUr"),
    lattesUrl: "http://lattes.cnpq.br/3082597438365146",
    bio: "Doutora em Educação pela UFPE e professora titular da instituição, onde coordena o PPG em Educação Contemporânea (Agreste). Integra a rede internacional de investigações curriculares CAFTe da Univ. do Porto.",
    publications: ["Políticas e Práticas de Avaliação", "CAFTe: Currículo, Avaliação e Tecnologias"]
  },
  {
    id: "sp_ex_48",
    name: "Sandra Kretli da Silva",
    type: "nacional",
    institution: "UFES",
    topic: "Culturas, Práticas Cotidianas e Teorias Pós-Críticas",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=1gEIyIN85wC0HpL9RiiScda2IdN0UbuCy"),
    lattesUrl: "http://lattes.cnpq.br/0611688078195189",
    bio: "Professora associada da UFES. Doutora e mestre em Educação, com pós-doutorado na UFMG e na UERJ. Atua em pesquisas de abrangência nacional em cooperação com as associações ANPEd, ABdC e redes internacionais.",
    publications: ["Culturas e Experiências Escolares", "Teorias Pós-Críticas de Currículo"]
  },
  {
    id: "sp_ex_49",
    name: "Danilo Araujo de Oliveira",
    type: "nacional",
    institution: "UFMA",
    topic: "Relações de Gênero, Diferença e Culturas Curriculares",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/open?id=14XWl5AYNscMdRuyi56Xr4I_2vEz8cTxJ"),
    lattesUrl: "http://lattes.cnpq.br/0463409625851892",
    bio: "Professor Adjunto da Universidade Federal do Maranhão (UFMA). Doutor em Educação pela UFMG na linha de Conhecimento e Inclusão Social. Desenvolve pesquisas no âmbito da cultura, sexualidades, gêneros e o seu reflexo curricular.",
    publications: ["Culturas, Gênero e Sexualidade", "Observatório da Juventude (OJ) na UFMA"]
  },
  {
    id: "sp_ex_50",
    name: "Eduardo Jorge Lopes da Silva",
    type: "nacional",
    institution: "UFPB",
    topic: "Sociologia da Educação e Processos de Ensino-Aprendizagem",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/file/d/1-wGmFsHqsgiY-bGwGRr43QfbEMS7tWch/view?usp=sharing"),
    lattesUrl: "http://lattes.cnpq.br/5742801412761879",
    bio: "Doutor em Educação pela UFPE e mestre em Educação pela UFPB. Atualmente é professor associado coordenador da UFPB lotado no Departamento de Fundamentação da Educação. Vice-coordenador ativo de PPG.",
    publications: ["Processos de Ensino-Aprendizagem", "Sociologia Escolar na Paraíba"]
  },
  {
    id: "sp_ex_51",
    name: "Durvalina Rodrigues Lima de Paula e Silva",
    type: "nacional",
    institution: "ABAYOMI",
    topic: "Antropologia da Saúde, Gênero e Feminismo Negro",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/file/d/15JfULo5TCNi02W70yyDb5PwfQ0igTs8-/view?usp=sharing"),
    lattesUrl: "http://lattes.cnpq.br/8494600007646518",
    bio: "Doutoranda em Antropologia pelo PPGA/UFPB vinculada às discussões de saúde, corpo e gerações. Mestra e especialista em estudos de gênero e raça com ampla experiência clínica fenomológica existencial.",
    publications: ["Saúde da População Negra", "Políticas Públicas e Feminismo Negro"]
  },
  {
    id: "sp_ex_52",
    name: "Rafael Ferreira de Souza Honorato",
    type: "nacional",
    institution: "UEPB",
    topic: "Políticas Curriculares, Didática e Experiências Escolares",
    imageUrl: transformGoogleDriveUrl("https://drive.google.com/file/d/1v0Pk9cw1p0TS9jLmajL86uby6__URHYU/view"),
    lattesUrl: "http://lattes.cnpq.br/0019294625125073",
    bio: "Doutor e mestre em Educação pela UFPB. Professor de Didática e Currículo na UEPB, vice-líder de pesquisa institucional, coordenador nacional do GT de Currículo da ANPEd e editor sênior de publicações periódicas.",
    publications: ["Revista Espaço do Currículo", "Didática e Experiências Escolares"]
  },
  {
    id: "sp_ex_53",
    name: "Ana Cláudia da Silva Rodrigues",
    type: "nacional",
    institution: "UFPB",
    topic: "Políticas Educacionais, Ensino Médio e Educação do Campo",
    imageUrl: anaClaudiaImg,
    lattesUrl: "http://lattes.cnpq.br/6240637144545401",
    bio: "Doutora em Educação pela UFPB e Pró-reitora de Graduação sênior. Líder nacional do Grupo de Estudos e Pesquisa em Políticas Curriculares (GEPPC) e primeira secretária da Associação Nacional (ANPEd).",
    publications: ["Ensino Médio e Educação Integral", "Políticas Educacionais e de Campo"]
  }
];

export const EXCLUSIVOS_SPEAKERS: GuestSpeaker[] = [...RAW_EXCLUSIVOS_SPEAKERS].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
