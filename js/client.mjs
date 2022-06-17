export default class Client {
    constructor(idClient,typeClient,dataCreation,codBank,agency,account,balance) {
        this._idClient      = idClient;
        this._typeClient    = typeClient;
        this._dataCreation  = dataCreation;
        this._codBank       = codBank;
        this._agency        = agency;
        this._account       = account;
        this._balance       = balance;
        this._historic      = [];
    }
}