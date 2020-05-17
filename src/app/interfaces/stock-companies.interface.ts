export interface StockCompanies {
    symbolsList: Company[];
}

export interface Company {
    symbol: string;
    name: string;
    price: number;
    exchange: string;
}
