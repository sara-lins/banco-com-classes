import Client from "./client.mjs";
export default class Company extends Client{
    constructor(idClient,typeClient,dataCreation,codBank,agency,account,balance,fantasyName,cnpj,email,telephone,foundingDate) {
      
      super(idClient,typeClient,dataCreation,codBank,agency,account,balance);

        this._fantasyName  = fantasyName;
        this._cnpj         = cnpj;
        this._email        = email;
        this._telephone    = telephone;
        this._foundingDate = foundingDate;
    }
}