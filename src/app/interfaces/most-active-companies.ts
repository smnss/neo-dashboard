export interface MostActiveCompanies {
    mostActiveStock: ActiveCompany[];
}

interface ActiveCompany {
    ticker: string;
    changes: number;
    price: string;
    changesPercentage: string;
    companyName: string;
}
