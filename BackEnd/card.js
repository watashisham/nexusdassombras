//VAMPIRAS
export const baralhoVampiras = [
    // Nível Básico
    { nome: "Noviça Vampira", ataque: 3, defesa: 2, magia: "Sugador Leve", efeitoMagia: function () { this.defesa += 1; } },
    { nome: "Caçadora Noturna", ataque: 4, defesa: 3, magia: "Mordida Curativa", efeitoMagia: function () { this.ataque += 1; } },
    { nome: "Assassina Sombria", ataque: 3, defesa: 4, magia: "Passos Silenciosos", efeitoMagia: function () { this.defesa += 2; } },
    { nome: "Sanguinária Iniciante", ataque: 2, defesa: 3, magia: "Garra Afiada", efeitoMagia: function () { this.ataque += 2; } },

    // Nível Intermediário
    { nome: "Caçadora de Almas", ataque: 5, defesa: 4, magia: "Drenar Vida", efeitoMagia: function () { this.defesa += 2; } },
    { nome: "Rainha da Noite", ataque: 6, defesa: 5, magia: "Encanto Sombrio", efeitoMagia: function () { this.ataque += 3; } },
    { nome: "Predadora Veloz", ataque: 5, defesa: 6, magia: "Ataque Frenético", efeitoMagia: function () { this.ataque += 2; this.defesa -= 1; } },
    { nome: "Vampira Astuta", ataque: 4, defesa: 5, magia: "Ilusão Sombria", efeitoMagia: function () { this.defesa += 3; } },
    { nome: "Sanguessuga", ataque: 6, defesa: 4, magia: "Suga-Energia", efeitoMagia: function () { this.ataque += 1; this.defesa += 1; } },
    { nome: "Guardiã do Sangue", ataque: 5, defesa: 5, magia: "Escudo de Sangue", efeitoMagia: function () { this.defesa += 4; } },
    { nome: "Caçadora de Crepúsculo", ataque: 4, defesa: 6, magia: "Lâmina Sombria", efeitoMagia: function () { this.ataque += 3; } },
    { nome: "Vampira das Trevas", ataque: 6, defesa: 5, magia: "Nevoeiro Sombrio", efeitoMagia: function () { this.defesa += 2; } },

    // Nível Avançado
    { nome: "Matriarca Vampira", ataque: 7, defesa: 6, magia: "Dominação Mental", efeitoMagia: function () { this.ataque += 4; } },
    { nome: "Senhora da Noite", ataque: 8, defesa: 7, magia: "Grito Assustador", efeitoMagia: function () { this.defesa += 3; } },
    { nome: "Rainha Sanguinária", ataque: 7, defesa: 8, magia: "Pacto de Sangue", efeitoMagia: function () { this.ataque += 2; this.defesa += 2; } },
    { nome: "Vampira Imortal", ataque: 8, defesa: 6, magia: "Regeneração", efeitoMagia: function () { this.defesa += 5; } },
    { nome: "Caçadora Implacável", ataque: 9, defesa: 7, magia: "Ataque Fulminante", efeitoMagia: function () { this.ataque += 5; } },
    { nome: "Guardiã das Sombras", ataque: 7, defesa: 9, magia: "Escudo das Trevas", efeitoMagia: function () { this.defesa += 6; } },

    // Cartas Lendárias
    { nome: "Lilith, a Rainha Vampira", ataque: 10, defesa: 8, magia: "Dominação Total", efeitoMagia: function () { this.ataque += 6; this.defesa += 4; } },
    { nome: "Selene, a Imortal", ataque: 9, defesa: 10, magia: "Eclipse Sanguinário", efeitoMagia: function () { this.ataque += 5; this.defesa += 5; } }
];

//NECROMANCER
export const baralhoNecromantes = [
    // Nível Básico
    { nome: "Aprendiz Necromante", ataque: 2, defesa: 3, magia: "Invocar Esqueleto", efeitoMagia: function () { this.defesa += 1; } },
    { nome: "Feiticeira das Sombras", ataque: 3, defesa: 2, magia: "Toque da Morte", efeitoMagia: function () { this.ataque += 1; } },
    { nome: "Invocadora de Almas", ataque: 3, defesa: 3, magia: "Espírito Guardião", efeitoMagia: function () { this.defesa += 2; } },
    { nome: "Necromante Iniciante", ataque: 2, defesa: 4, magia: "Maldição Leve", efeitoMagia: function () { this.ataque += 2; } },

    // Nível Intermediário
    { nome: "Mestra dos Mortos", ataque: 5, defesa: 4, magia: "Invocação Macabra", efeitoMagia: function () { this.defesa += 2; } },
    { nome: "Rainha das Trevas", ataque: 6, defesa: 5, magia: "Explosão Sombria", efeitoMagia: function () { this.ataque += 3; } },
    { nome: "Feiticeira Sombria", ataque: 5, defesa: 6, magia: "Necrose", efeitoMagia: function () { this.ataque += 2; this.defesa -= 1; } },
    { nome: "Necromante Astuta", ataque: 4, defesa: 5, magia: "Escudo de Ossos", efeitoMagia: function () { this.defesa += 3; } },
    { nome: "Invocadora de Mortos", ataque: 6, defesa: 4, magia: "Legião de Esqueletos", efeitoMagia: function () { this.ataque += 1; this.defesa += 1; } },
    { nome: "Guardiã das Almas", ataque: 5, defesa: 5, magia: "Barreira Espectral", efeitoMagia: function () { this.defesa += 4; } },
    { nome: "Feiticeira das Trevas", ataque: 4, defesa: 6, magia: "Lâmina da Morte", efeitoMagia: function () { this.ataque += 3; } },
    { nome: "Necromante das Sombras", ataque: 6, defesa: 5, magia: "Nevoeiro da Morte", efeitoMagia: function () { this.defesa += 2; } },

    // Nível Avançado
    { nome: "Archimaga Necromante", ataque: 7, defesa: 6, magia: "Invocação dos Mortos", efeitoMagia: function () { this.ataque += 4; } },
    { nome: "Rainha dos Mortos", ataque: 8, defesa: 7, magia: "Explosão Necrótica", efeitoMagia: function () { this.defesa += 3; } },
    { nome: "Senhora das Trevas", ataque: 7, defesa: 8, magia: "Pacto com a Morte", efeitoMagia: function () { this.ataque += 2; this.defesa += 2; } },
    { nome: "Necromante Imortal", ataque: 8, defesa: 6, magia: "Regeneração Sombria", efeitoMagia: function () { this.defesa += 5; } },
    { nome: "Invocadora Implacável", ataque: 9, defesa: 7, magia: "Ataque Necrótico", efeitoMagia: function () { this.ataque += 5; } },
    { nome: "Guardiã das Trevas", ataque: 7, defesa: 9, magia: "Escudo da Morte", efeitoMagia: function () { this.defesa += 6; } },

    // Cartas Lendárias
    { nome: "Morgana, a Rainha Necromante", ataque: 10, defesa: 8, magia: "Dominação dos Mortos", efeitoMagia: function () { this.ataque += 6; this.defesa += 4; } },
    { nome: "Lilith, a Imortal", ataque: 9, defesa: 10, magia: "Eclipse da Morte", efeitoMagia: function () { this.ataque += 5; this.defesa += 5; } }
];

//GUERREIRAS
export const baralhoGuerreiras = [
    // Nível Básico
    { nome: "Recruta Guerreira", ataque: 3, defesa: 2, magia: "Golpe Básico", efeitoMagia: function () { this.ataque += 1; } },
    { nome: "Espadachim Iniciante", ataque: 4, defesa: 3, magia: "Defesa Básica", efeitoMagia: function () { this.defesa += 1; } },
    { nome: "Arqueira Novata", ataque: 3, defesa: 4, magia: "Flecha Rápida", efeitoMagia: function () { this.ataque += 2; } },
    { nome: "Cavaleira Iniciante", ataque: 2, defesa: 3, magia: "Investida", efeitoMagia: function () { this.ataque += 2; } },

    // Nível Intermediário
    { nome: "Capitã Guerreira", ataque: 5, defesa: 4, magia: "Golpe Poderoso", efeitoMagia: function () { this.ataque += 3; } },
    { nome: "Espadachim Elite", ataque: 6, defesa: 5, magia: "Defesa de Aço", efeitoMagia: function () { this.defesa += 3; } },
    { nome: "Arqueira Especialista", ataque: 5, defesa: 6, magia: "Chuva de Flechas", efeitoMagia: function () { this.ataque += 2; this.defesa -= 1; } },
    { nome: "Cavaleira Astuta", ataque: 4, defesa: 5, magia: "Escudo de Ferro", efeitoMagia: function () { this.defesa += 3; } },
    { nome: "Guerreira Implacável", ataque: 6, defesa: 4, magia: "Ataque Duplo", efeitoMagia: function () { this.ataque += 1; this.defesa += 1; } },
    { nome: "Guardiã da Fortaleza", ataque: 5, defesa: 5, magia: "Muralha de Aço", efeitoMagia: function () { this.defesa += 4; } },
    { nome: "Arqueira de Elite", ataque: 4, defesa: 6, magia: "Flecha Flamejante", efeitoMagia: function () { this.ataque += 3; } },
    { nome: "Cavaleira das Sombras", ataque: 6, defesa: 5, magia: "Investida Sombria", efeitoMagia: function () { this.defesa += 2; } },

    // Nível Avançado
    { nome: "General Guerreira", ataque: 7, defesa: 6, magia: "Golpe Devastador", efeitoMagia: function () { this.ataque += 4; } },
    { nome: "Espadachim Mestra", ataque: 8, defesa: 7, magia: "Defesa Impenetrável", efeitoMagia: function () { this.defesa += 3; } },
    { nome: "Arqueira Lendária", ataque: 7, defesa: 8, magia: "Flecha Explosiva", efeitoMagia: function () { this.ataque += 2; this.defesa += 2; } },
    { nome: "Cavaleira Imortal", ataque: 8, defesa: 6, magia: "Investida Implacável", efeitoMagia: function () { this.defesa += 5; } },
    { nome: "Guerreira Implacável", ataque: 9, defesa: 7, magia: "Ataque Fulminante", efeitoMagia: function () { this.ataque += 5; } },
    { nome: "Guardiã das Planícies", ataque: 7, defesa: 9, magia: "Escudo de Aço", efeitoMagia: function () { this.defesa += 6; } },

    // Cartas Lendárias
    { nome: "Valquíria, a Guerreira Lendária", ataque: 10, defesa: 8, magia: "Golpe do Destino", efeitoMagia: function () { this.ataque += 6; this.defesa += 4; } },
    { nome: "Athena, a Imortal", ataque: 9, defesa: 10, magia: "Escudo Divino", efeitoMagia: function () { this.ataque += 5; this.defesa += 5; } }
];

//ELFAS
export const baralhoElfas = [
    // Nível Básico
    { nome: "Aprendiz Elfa", ataque: 3, defesa: 2, magia: "Flecha Básica", efeitoMagia: function () { this.ataque += 1; } },
    { nome: "Caçadora Iniciante", ataque: 4, defesa: 3, magia: "Defesa Básica", efeitoMagia: function () { this.defesa += 1; } },
    { nome: "Arqueira Novata", ataque: 3, defesa: 4, magia: "Flecha Rápida", efeitoMagia: function () { this.ataque += 2; } },
    { nome: "Druida Iniciante", ataque: 2, defesa: 3, magia: "Cura Leve", efeitoMagia: function () { this.defesa += 2; } },

    // Nível Intermediário
    { nome: "Caçadora Elite", ataque: 5, defesa: 4, magia: "Flecha Flamejante", efeitoMagia: function () { this.ataque += 3; } },
    { nome: "Arqueira Especialista", ataque: 6, defesa: 5, magia: "Chuva de Flechas", efeitoMagia: function () { this.ataque += 2; this.defesa -= 1; } },
    { nome: "Druida Astuta", ataque: 4, defesa: 5, magia: "Escudo de Natureza", efeitoMagia: function () { this.defesa += 3; } },
    { nome: "Elfa das Florestas", ataque: 6, defesa: 4, magia: "Cura Moderada", efeitoMagia: function () { this.defesa += 2; } },
    { nome: "Guardiã da Floresta", ataque: 5, defesa: 5, magia: "Barreira de Natureza", efeitoMagia: function () { this.defesa += 4; } },
    { nome: "Arqueira de Elite", ataque: 4, defesa: 6, magia: "Flecha Explosiva", efeitoMagia: function () { this.ataque += 3; } },
    { nome: "Druida das Sombras", ataque: 6, defesa: 5, magia: "Nevoeiro da Floresta", efeitoMagia: function () { this.defesa += 2; } },

    // Nível Avançado
    { nome: "Archidruida", ataque: 7, defesa: 6, magia: "Cura Total", efeitoMagia: function () { this.defesa += 4; } },
    { nome: "Rainha das Elfas", ataque: 8, defesa: 7, magia: "Flecha do Destino", efeitoMagia: function () { this.ataque += 5; } },
    { nome: "Senhora das Florestas", ataque: 7, defesa: 8, magia: "Escudo de Natureza", efeitoMagia: function () { this.defesa += 3; } },
    { nome: "Elfa Imortal", ataque: 8, defesa: 6, magia: "Regeneração Natural", efeitoMagia: function () { this.defesa += 5; } },
    { nome: "Caçadora Implacável", ataque: 9, defesa: 7, magia: "Ataque Fulminante", efeitoMagia: function () { this.ataque += 5; } },
    { nome: "Guardiã das Florestas", ataque: 7, defesa: 9, magia: "Escudo de Natureza", efeitoMagia: function () { this.defesa += 6; } },

    // Cartas Lendárias
    { nome: "Sylvanas, a Rainha Elfa", ataque: 10, defesa: 8, magia: "Flecha do Destino", efeitoMagia: function () { this.ataque += 6; this.defesa += 4; } },
    { nome: "Luna, a Imortal", ataque: 9, defesa: 10, magia: "Escudo da Natureza", efeitoMagia: function () { this.ataque += 5; this.defesa += 5; } }
];

//MAGAS
export const baralhoMagas = [
    // Nível Básico
    { nome: "Aprendiz Maga", ataque: 3, defesa: 2, magia: "Bola de Fogo", efeitoMagia: function () { this.ataque += 1; } },
    { nome: "Feiticeira Iniciante", ataque: 4, defesa: 3, magia: "Escudo Mágico", efeitoMagia: function () { this.defesa += 1; } },
    { nome: "Maga Novata", ataque: 3, defesa: 4, magia: "Raio de Gelo", efeitoMagia: function () { this.ataque += 2; } },
    { nome: "Encantadora Iniciante", ataque: 2, defesa: 3, magia: "Cura Leve", efeitoMagia: function () { this.defesa += 2; } },

    // Nível Intermediário
    { nome: "Maga Elite", ataque: 5, defesa: 4, magia: "Explosão Arcana", efeitoMagia: function () { this.ataque += 3; } },
    { nome: "Feiticeira Especialista", ataque: 6, defesa: 5, magia: "Escudo Arcano", efeitoMagia: function () { this.defesa += 3; } },
    { nome: "Maga das Sombras", ataque: 5, defesa: 6, magia: "Nevoeiro Mágico", efeitoMagia: function () { this.ataque += 2; this.defesa -= 1; } },
    { nome: "Encantadora Astuta", ataque: 4, defesa: 5, magia: "Escudo de Energia", efeitoMagia: function () { this.defesa += 3; } },
    { nome: "Maga Implacável", ataque: 6, defesa: 4, magia: "Ataque Duplo", efeitoMagia: function () { this.ataque += 1; this.defesa += 1; } },
    { nome: "Guardiã da Magia", ataque: 5, defesa: 5, magia: "Barreira Arcano", efeitoMagia: function () { this.defesa += 4; } },
    { nome: "Feiticeira de Elite", ataque: 4, defesa: 6, magia: "Raio de Fogo", efeitoMagia: function () { this.ataque += 3; } },
    { nome: "Maga das Sombras", ataque: 6, defesa: 5, magia: "Nevoeiro Mágico", efeitoMagia: function () { this.defesa += 2; } },

    // Nível Avançado
    { nome: "Archimaga", ataque: 7, defesa: 6, magia: "Explosão de Mana", efeitoMagia: function () { this.ataque += 4; } },
    { nome: "Rainha das Magas", ataque: 8, defesa: 7, magia: "Escudo Arcano", efeitoMagia: function () { this.defesa += 3; } },
    { nome: "Senhora das Sombras", ataque: 7, defesa: 8, magia: "Pacto Arcano", efeitoMagia: function () { this.ataque += 2; this.defesa += 2; } },
    { nome: "Maga Imortal", ataque: 8, defesa: 6, magia: "Regeneração Mágica", efeitoMagia: function () { this.defesa += 5; } },
    { nome: "Feiticeira Implacável", ataque: 9, defesa: 7, magia: "Ataque Fulminante", efeitoMagia: function () { this.ataque += 5; } },
    { nome: "Guardiã das Sombras", ataque: 7, defesa: 9, magia: "Escudo Arcano", efeitoMagia: function () { this.defesa += 6; } },

    // Cartas Lendárias
    { nome: "Morgana, a Rainha Maga", ataque: 10, defesa: 8, magia: "Explosão de Mana", efeitoMagia: function () { this.ataque += 6; this.defesa += 4; } },
    { nome: "Lilith, a Imortal", ataque: 9, defesa: 10, magia: "Escudo Arcano", efeitoMagia: function () { this.ataque += 5; this.defesa += 5; } }
];