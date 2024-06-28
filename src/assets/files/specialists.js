

let specialists = [
    {
        id: 1,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "BarDeWhisky",
        name: "John Doe",
        age: 35,
        phone: "11 91234-5678",
        email: "john.doe@example.com",
        xp: "10 anos de experiência como bartender em bares renomados, especializado em coquetéis à base de whisky e mixologia avançada. Conhecido por suas criações inovadoras e atendimento de excelência.",
        score: 5
    },
    {
        id: 2,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "CoquetelariaClassica",
        name: "Alice Silva",
        age: 28,
        phone: "11 92345-6789",
        email: "alice.silva@example.com",
        xp: "7 anos de experiência como bartender em diversos bares e restaurantes, com uma forte ênfase em coquetéis clássicos. Conhecida por sua habilidade em preparar drinks como Martini, Manhattan e Negroni com perfeição.",
        score: 4
    },
    {
        id: 3,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "CoquetelariaClassica",
        name: "Bruno Pereira",
        age: 32,
        phone: "21 93456-7890",
        email: "bruno.pereira@example.com",
        xp: "9 anos de experiência em coquetelaria clássica, trabalhando em bares de alto padrão. Especialista em Old Fashioned, Daiquiri e Sidecar, com reconhecimento pela sua precisão e apresentação impecável.",
        score: 5
    },
    {
        id: 4,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "CoquetelariaClassica",
        name: "Carla Souza",
        age: 30,
        phone: "31 94567-8901",
        email: "carla.souza@example.com",
        xp: "8 anos de experiência em coquetelaria clássica, com passagem por diversos bares e eventos. Mestre em preparar clássicos como Mojito, Margarita e Cosmopolitan, sempre garantindo um sabor autêntico e balanceado.",
        score: 4
    },
    {
        id: 5,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "CoquetelariaClassica",
        name: "Daniel Santos",
        age: 29,
        phone: "19 95678-1234",
        email: "daniel.santos@example.com",
        xp: "6 anos de experiência em bares renomados, especializado em coquetéis clássicos. Conhecido por sua habilidade em criar um ambiente acolhedor e drinks como Whiskey Sour e Gin Tonic.",
        score: 3
    },
    {
        id: 6,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "CoquetelariaClassica",
        name: "Elisa Ferreira",
        age: 34,
        phone: "81 96789-2345",
        email: "elisa.ferreira@example.com",
        xp: "12 anos de experiência em coquetelaria, com especialização em coquetéis clássicos e autorais. Destaque por suas interpretações de drinks clássicos e mixologia criativa.",
        score: 5
    },
    {
        id: 7,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "CoquetelariaClassica",
        name: "Fernando Lima",
        age: 37,
        phone: "71 97890-3456",
        email: "fernando.lima@example.com",
        xp: "15 anos de experiência em coquetelaria clássica, com vasta experiência internacional. Conhecido por sua técnica impecável e por preparar clássicos como o Bloody Mary e o Mai Tai com maestria.",
        score: 5
    },
    {
        id: 8,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "CoquetelariaClassica",
        name: "Gabriela Costa",
        age: 27,
        phone: "62 98901-4567",
        email: "gabriela.costa@example.com",
        xp: "5 anos de experiência em coquetelaria clássica, com destaque em eventos e festas. Especialista em coquetéis como Caipirinha, Piña Colada e Cuba Libre.",
        score: 4
    },
    {
        id: 9,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "CoquetelariaClassica",
        name: "Hugo Martins",
        age: 31,
        phone: "11 99012-3456",
        email: "hugo.martins@example.com",
        xp: "9 anos de experiência em bares e restaurantes, especializado em coquetéis clássicos e contemporâneos. Conhecido por sua criatividade e habilidade em preparar drinks como Martini e French 75.",
        score: 5
    },
    {
        id: 10,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "MixologiaMolecular",
        name: "Igor Almeida",
        age: 33,
        phone: "21 91234-5678",
        email: "igor.almeida@example.com",
        xp: "8 anos de experiência em mixologia molecular, com um portfólio de criações inovadoras utilizando técnicas como esferificação e espumas. Conhecido por sua habilidade em surpreender os clientes com coquetéis visualmente impressionantes.",
        score: 5
    },
    {
        id: 11,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "MixologiaMolecular",
        name: "Juliana Moreira",
        age: 29,
        phone: "31 92345-6789",
        email: "juliana.moreira@example.com",
        xp: "6 anos de experiência em mixologia molecular, trabalhando em bares de alto padrão e eventos exclusivos. Especialista em criar coquetéis que combinam sabor e apresentação única, utilizando técnicas avançadas.",
        score: 4
    },
    {
        id: 12,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "MixologiaMolecular",
        name: "Lucas Fernandes",
        age: 35,
        phone: "11 93456-7890",
        email: "lucas.fernandes@example.com",
        xp: "10 anos de experiência em mixologia molecular, com passagem por renomados bares internacionais. Mestre em técnicas de gelificação, infusões e utilização de nitrogênio líquido para criar coquetéis únicos.",
        score: 5
    },
    {
        id: 13,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "MixologiaMolecular",
        name: "Mariana Ribeiro",
        age: 31,
        phone: "41 94567-8901",
        email: "mariana.ribeiro@example.com",
        xp: "7 anos de experiência em mixologia molecular, conhecida por suas criações inovadoras que combinam ciência e arte. Experiência em técnicas de deconstrução e reconstrução de sabores, proporcionando experiências únicas aos clientes.",
        score: 4
    },
    {
        id: 14,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "MixologiaMolecular",
        name: "Ricardo Oliveira",
        age: 36,
        phone: "61 95678-1234",
        email: "ricardo.oliveira@example.com",
        xp: "12 anos de experiência em mixologia molecular, com um foco em coquetéis que desafiam as expectativas e criam uma experiência multisensorial. Conhecido por suas técnicas de vaporização e coquetéis em cápsulas.",
        score: 5
    },
    {
        id: 15,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "MixologiaMolecular",
        name: "Sofia Santos",
        age: 27,
        phone: "71 96789-2345",
        email: "sofia.santos@example.com",
        xp: "5 anos de experiência em mixologia molecular, trazendo inovação e criatividade para cada coquetel. Especialista em técnicas de clarificação e uso de ingredientes incomuns para criar bebidas surpreendentes.",
        score: 4
    },
    {
        id: 16,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "MixologiaMolecular",
        name: "Thiago Martins",
        age: 30,
        phone: "62 97890-3456",
        email: "thiago.martins@example.com",
        xp: "9 anos de experiência em mixologia molecular, com uma abordagem experimental e técnica impecável. Conhecido por seus coquetéis que utilizam técnicas como carbonatação e destilação a frio para criar experiências únicas.",
        score: 5
    },
    {
        id: 17,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "BarDeWhisky",
        name: "Ana Paula",
        age: 32,
        phone: "21 91234-5678",
        email: "ana.paula@example.com",
        xp: "8 anos de experiência especializada em whisky, com conhecimento aprofundado em single malts e blends. Participou de diversos workshops internacionais.",
        score: 4
    },
    {
        id: 18,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "BarDeWhisky",
        name: "Carlos Nunes",
        age: 40,
        phone: "31 92345-6789",
        email: "carlos.nunes@example.com",
        xp: "15 anos de experiência em bares especializados em whisky, com habilidades excepcionais em harmonização de bebidas e culinária.",
        score: 5
    },
    {
        id: 19,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "BarDeWhisky",
        name: "Beatriz Oliveira",
        age: 28,
        phone: "41 93456-7890",
        email: "beatriz.oliveira@example.com",
        xp: "6 anos de experiência em mixologia com foco em whisky, destacando-se por suas apresentações em eventos e competições de bartenders.",
        score: 4
    },
    {
        id: 20,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "BarDeWhisky",
        name: "Eduardo Lima",
        age: 38,
        phone: "51 94567-8901",
        email: "eduardo.lima@example.com",
        xp: "12 anos de experiência em bares de whisky, com especialização em destilados e criação de coquetéis exclusivos à base de whisky.",
        score: 5
    },
    {
        id: 21,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "BarDeWhisky",
        name: "Fernanda Souza",
        age: 34,
        phone: "71 95678-1234",
        email: "fernanda.souza@example.com",
        xp: "10 anos de experiência em mixologia, com foco em whiskies raros e exclusivos. Participou de diversos cursos e treinamentos internacionais.",
        score: 5
    },
    {
        id: 22,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "BarDeWhisky",
        name: "Gabriel Ferreira",
        age: 36,
        phone: "61 96789-2345",
        email: "gabriel.ferreira@example.com",
        xp: "11 anos de experiência em bares e pubs especializados em whisky. Conhecido por suas recomendações de harmonização e seu atendimento personalizado.",
        score: 4
    },
    {
        id: 23,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "BarDeWhisky",
        name: "Helena Ramos",
        age: 30,
        phone: "62 97890-3456",
        email: "helena.ramos@example.com",
        xp: "7 anos de experiência em mixologia com ênfase em whisky. Participou de workshops e treinamentos com grandes nomes da indústria.",
        score: 4
    },
    {
        id: 24,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "BarDeWhisky",
        name: "Igor Santos",
        age: 39,
        phone: "11 98901-4567",
        email: "igor.santos@example.com",
        xp: "14 anos de experiência em bares de whisky, com um vasto conhecimento em marcas e estilos. Reconhecido por sua habilidade em criar experiências memoráveis para os clientes.",
        score: 5
    },
    {
        id: 25,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "BarDeWhisky",
        name: "Joana Carvalho",
        age: 27,
        phone: "21 99012-3456",
        email: "joana.carvalho@example.com",
        xp: "5 anos de experiência em mixologia, com uma paixão por whisky e técnicas de envelhecimento. Conhecida por sua criatividade e inovação em coquetéis.",
        score: 4
    },
    {
        id: 26,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "CoqueteisSemAlcool",
        name: "Larissa Almeida",
        age: 30,
        phone: "11 91234-5678",
        email: "larissa.almeida@example.com",
        xp: "8 anos de experiência em mixologia, com especialização em coquetéis sem álcool. Conhecida por suas criações refrescantes e saudáveis, utilizando ingredientes frescos e naturais.",
        score: 4
    },
    {
        id: 27,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "CoquetéisSemAlcool",
        name: "Marcelo Rocha",
        age: 35,
        phone: "21 92345-6789",
        email: "marcelo.rocha@example.com",
        xp: "10 anos de experiência em bares e restaurantes, especializado em coquetéis sem álcool. Suas receitas são conhecidas por serem saborosas e criativas, atendendo a todos os tipos de públicos.",
        score: 5
    },
    {
        id: 28,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "CoqeetéisSemAlcool",
        name: "Natália Lima",
        age: 28,
        phone: "31 93456-7890",
        email: "natalia.lima@example.com",
        xp: "6 anos de experiência em mixologia, focada em coquetéis sem álcool. Ela utiliza uma variedade de frutas e ervas para criar bebidas inovadoras e refrescantes.",
        score: 4
    },
    {
        id: 29,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "CoquetéisSemAlcool",
        name: "Pedro Martins",
        age: 33,
        phone: "41 94567-8901",
        email: "pedro.martins@example.com",
        xp: "9 anos de experiência em coquetelaria, com um foco em coquetéis sem álcool nos últimos 5 anos. Ele é conhecido por suas apresentações elegantes e sabores equilibrados.",
        score: 5
    },
    {
        id: 30,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "CoquetéisSemAlcool",
        name: "Renata Santos",
        age: 27,
        phone: "51 95678-1234",
        email: "renata.santos@example.com",
        xp: "5 anos de experiência em mixologia, com uma paixão por criar coquetéis sem álcool que são tão saborosos quanto os tradicionais. Suas criações são populares em eventos e festas.",
        score: 4
    },
    {
        id: 31,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "CoqueeéisSemAlcool",
        name: "Thiago Pereira",
        age: 29,
        phone: "62 96789-2345",
        email: "thiago.pereira@example.com",
        xp: "7 anos de experiência em coquetelaria, especializado em coquetéis sem álcool. Conhecido por suas combinações inovadoras e técnicas de infusão que garantem bebidas únicas e saborosas.",
        score: 5
    },
    {
        id: 32,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "PersonalizaçaoDeCoqueteis",
        name: "Vitor Mendes",
        age: 34,
        phone: "11 91234-5678",
        email: "vitor.mendes@example.com",
        xp: "10 anos de experiência em mixologia, especializado em personalização de coquetéis para eventos e festas. Conhecido por criar coquetéis sob medida que atendem aos gostos individuais dos clientes.",
        score: 5
    },
    {
        id: 33,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "PersonalizaçaoDeCoqueteis",
        name: "Larissa Carvalho",
        age: 30,
        phone: "21 92345-6789",
        email: "larissa.carvalho@example.com",
        xp: "8 anos de experiência em mixologia, com foco em coquetéis personalizados. Suas criações são conhecidas por serem únicas e adaptadas aos temas e preferências dos clientes.",
        score: 4
    },
    {
        id: 34,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "PersonalizaçaoDeCoqueteis",
        name: "Felipe Araújo",
        age: 36,
        phone: "31 93456-7890",
        email: "felipe.araujo@example.com",
        xp: "12 anos de experiência em mixologia, especializado em coquetéis personalizados para eventos de alto padrão. Conhecido por sua criatividade e atenção aos detalhes.",
        score: 5
    },
    {
        id: 35,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "PersonalizaçaoDeCoqueteis",
        name: "Tatiana Ribeiro",
        age: 28,
        phone: "41 94567-8901",
        email: "tatiana.ribeiro@example.com",
        xp: "6 anos de experiência em mixologia, com especialização em coquetéis personalizados. Ela é conhecida por suas criações inovadoras que refletem os gostos e preferências dos clientes.",
        score: 4
    },
    {
        id: 36,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "PersonalizaçaoDeCoqueteis",
        name: "Rafael Silva",
        age: 32,
        phone: "51 95678-1234",
        email: "rafael.silva@example.com",
        xp: "9 anos de experiência em mixologia, focado em personalização de coquetéis. Suas habilidades incluem criar bebidas exclusivas para eventos e desenvolver menus personalizados.",
        score: 5
    },
    {
        id: 37,
        photo: "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
        category: "PersonalizaçaoDeCoqueteis",
        name: "Juliana Martins",
        age: 27,
        phone: "71 96789-2345",
        email: "juliana.martins@example.com",
        xp: "5 anos de experiência em mixologia, com uma paixão por personalizar coquetéis para diferentes tipos de eventos. Ela é reconhecida por sua capacidade de criar experiências únicas através de suas bebidas.",
        score: 4
    }
];


export default specialists