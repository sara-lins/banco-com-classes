import Client  from "./client.mjs";

export default class Person extends Client{
    constructor(idClient,typeClient,dataCreation,codBank,agency,account,balance,name,cpf,email,telephone,birthDate) {
        super(idClient,typeClient,dataCreation,codBank,agency,account,balance);
        
        this._name      = name;
        this._cpf       = cpf;
        this._email     = email;
        this._telephone = telephone;
        this._birthDate = birthDate;
    }
}