export interface Tipos {
    PERSONAGEM: string;
    PLANETA: string;
    NAVES: string;
    VEICULOS: string;
    FILMES: string;
    ESPECIES: string;
}

// Uso:
export const tipo: Tipos = {
    PERSONAGEM: 'people',
    PLANETA: 'planets',
    NAVES: 'starships',
    VEICULOS: 'vehicles',
    FILMES: 'films',
    ESPECIES: 'species',

};


export const TipoTraduzido = {
    [tipo.PERSONAGEM]: 'Pessoas',
    [tipo.PLANETA]: 'Planetas',
    [tipo.FILMES]: 'Filmes',
    [tipo.ESPECIES]: 'Espécies',
    [tipo.VEICULOS]: 'Veículos',
    [tipo.NAVES]: 'Espaçonaves',
};