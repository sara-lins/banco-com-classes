import Person  from "./person.mjs";
import Company  from "./company.mjs";
import Transaction  from "./transaction.mjs";

const ChurrosVictor = new Company(
    "01",
    "Vip",
    "16/05/2022",
    156,
    2798,
    987654321,
    1000,
    "Churros do Victor",
    "1011121314",
    "churrosVictor@email.com.br",
    1234567890,
    "16/05/2022"
);
  
const Joao = new Person(
    "02",
    "Comum",
    "16/03/2022",
    156,
    2798,
    91919292,
    100,
    "João",
    "2345678901",
    "joao@kenzie.com.br",
    "90919293",
    "01/01/2019"
);
  
const Maria = new Person(
    "03",
    "Vip",
    "16/03/2022",
    156,
    2798,
    10121416,
    5000,
    "Maria",
    "3456789012",
    "maria@kenzie.com.br",
    "90919293",
    "01/01/2019"
);
  
  console.log(ChurrosVictor._balance); // Deve retornar 1000
  console.log(ChurrosVictor._fantasyName); // Deve retornar ChurrosVictor
  console.log(ChurrosVictor._historic); // Deve retornar []
  console.log(Joao._name); // Deve retornar João
  console.log(Joao._balance); // Deve retornar 100
  console.log(Maria._idClient); // Deve retornar "03"
  console.log(Maria._typeClient); // Deve retornar "Vip"
  
  console.log(Transaction.transfer(Joao, Maria, 1, "25/07/2022", 200)); // Deve retornar {mensagem: "Saldo insuficiente para transferência!"}
  
  console.log(
    Transaction.transfer(ChurrosVictor, Joao, 2, "20/07/2022", 500)
  ); // Deve retornar {mensagem: "Transferência realizada com sucesso!"}
  
  console.log(ChurrosVictor._historic); // Deve retornar [{idTransacao: 2, dataDeTransacao: "20/07/2022", valorDaTransferencia: 500, tipo: "pagamento"}]***
  console.log(Joao._historic); // Deve retornar [{idTransacao: 2, dataDeTransacao: "20/07/2022", valorDaTransferencia: 500, tipo: "recebimento"}]***
  
  console.log(ChurrosVictor._balance); // Deve retornar 500
  console.log(Joao._balance); // Deve retornar 600
  
  console.log(Transaction.deposit(ChurrosVictor, 3, "02/07/2022", 650)); // Deve retornar {mensagem: "Depósito realizado com sucesso!"}
  
  console.log(ChurrosVictor._historic[1]); // Deve retornar [{idDeposito: 3, dataDoDeposito: "02/07/2022", valorDoDeposito: 650, tipo: "recebimento"}]
  console.log(ChurrosVictor._balance); // Deve retornar 1150
  
  console.log(Transaction.paymentSalary(Maria, Joao, 4, "22/07/2022", 1100)); // Deve retornar {mensagem: "Seu limite máximo para este tipo de operação é de 1000, entre em contato com o banco!"}
  console.log(Transaction.paymentSalary(Joao, Maria, 5, "23/07/2022", 700)); // Deve retornar {mensagem: "Saldo insuficiente para realizar o pagamento!"}
  
  console.log(Transaction.paymentSalary(Maria, Joao, 6, "22/12/2022", 900)); // Deve retornar {mensagem: "Pagamento realizado com sucesso!"}
  console.log(Maria._balance); // Deve retornar 4100
  console.log(Maria._historic); // Deve retornar [{idPagamento: 6, dataDoPagamento: "22/12/2022", valorDaSalario: 900, tipo: "pagamento"}]***
  console.log(Joao._historic[1]); // Deve retornar [{idPagamento: 6, dataDoPagamento: "22/12/2022", valorDaSalario: 900, tipo: "recebimento"}]
