import Person  from "./person.mjs";

export default class Transaction {

    static transfer(accountOrigin, accountDestination, idTransaction, TransactionDate, transferValue) {
        if(accountOrigin._balance >= transferValue) {
            
            accountOrigin._historic.push(
                {
                    idTransaction   : idTransaction,
                    TransactionDate : TransactionDate,
                    transferValue   : transferValue,
                    type            : "payment"
                }
            )
            accountOrigin._balance -= transferValue;

            accountDestination._historic.push(
                {
                    idTransaction   : idTransaction,
                    TransactionDate : TransactionDate,
                    transferValue   : transferValue,
                    type            : "receipt"
                }
            )
            accountDestination._balance += transferValue;

            return (
                {
                    mensagem: "Transferência realizada com sucesso!"
                }
            )
        }else{
            return (
                {
                    mensagem: "Saldo insuficiente para transferência!"
                }
            )
        }
    }

    static deposit(accountDestination, idDeposit, depositDate, depositValue) {

        accountDestination._balance += depositValue;

        accountDestination._historic.push(
            {
                idDeposit       : idDeposit,
                depositDate     : depositDate,
                depositValue    : depositValue,
                type            : "receipt"
            }
        )
        return(
            {
                mensagem: "Depósito realizado com sucesso!"
            }
        )
    }

    static paymentSalary(accountOrigin, accountDestination, idPayment, payDay, salaryValue) {
        if(accountOrigin.constructor == Person) {
            if(salaryValue > 1000) {
                return(
                    {
                        mensagem: "Seu limite máximo para este tipo de operação é de 1000, entre em contato com o banco!"
                    }
                )
            }
            if(accountOrigin._balance >= salaryValue) {

                accountDestination._balance += salaryValue;
                accountOrigin._balance -= salaryValue;

                accountDestination._historic.push(
                    {
                        idPayment    : idPayment,
                        payDay       : payDay,
                        salaryValue  : salaryValue,
                        type         : "receipt"
                    }
                )
                accountOrigin._historic.push(
                    {
                        idPayment   : idPayment,
                        payDay      : payDay,
                        salaryValue : salaryValue,
                        type        : "payment"
                    }
                )
                return(
                    {
                        mensagem: "Pagamento realizado com sucesso!"
                    }
                )
            }else{
                return(
                    {
                        mensagem: "Saldo insuficiente para realizar o pagamento!"
                    }
                )
            }
        }
    }
}