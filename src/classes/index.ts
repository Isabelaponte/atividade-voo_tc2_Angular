import { DateInfo } from "./interfaces/date.js";
import { Aeroporto } from "./models/aeroporto.js";
import { CompanhiaAerea } from "./models/companhiaAerea.js";
import { ContaMilha } from "./models/contaMilha.js";
import { Embarque } from "./models/embarque.js";
import { Passageiro } from "./models/passageiro.js";
import { Reserva } from "./models/reserva.js";
import { Voo } from "./models/voo.js";

import * as readline from 'readline';
import { Formatador } from "./utils/Formatador.js";

const formatador: Formatador = new Formatador;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const passageiros: Passageiro[] = []
const contasMilha: ContaMilha[] = []
const aeroportos: Aeroporto[] = []
const embarques: Embarque[] = []
const voos: Voo[] = []
const companhiasAereras: CompanhiaAerea[] = []
const reservas: Reserva[] = []

function executarCarga() {
    contasMilha.push(
        new ContaMilha('123456789', 10000, 'Active'),
        new ContaMilha('987654321', 5000, 'Active'),
        new ContaMilha('246813579', 15000, 'Active'),
        new ContaMilha('135792468', 8000, 'Active'),
        new ContaMilha('369874125', 3000, 'Active')
    )

    passageiros.push(
        new Passageiro('João', '123456789', '1234 5678 9012 3456', 'Gold', contasMilha[0]),
        new Passageiro('Maria', '987654321', '9876 5432 1098 7654', 'Silver', contasMilha[1]),
        new Passageiro('Pedro', '135792468', '2468 1357 7913 4682', 'Platinum', contasMilha[2]),
        new Passageiro('Ana', '246813579', '8642 9753 1867 2435', 'Gold', contasMilha[3]),
        new Passageiro('Carlos', '369874125', '3698 7412 5369 8741', 'Silver', contasMilha[4])
    )

    aeroportos.push(
        new Aeroporto('Sanca', 'AE Sao Carlos', 'Brasil', 20, []),
        new Aeroporto('Sant', 'AE Santos', 'Brasil', 15, []),
        new Aeroporto('VRC', 'Viracopos', 'Brasil', 30, []),
    )

    companhiasAereras.push(
        new CompanhiaAerea('Rosa', 'ROSA', [aeroportos[0], aeroportos[1]])
    )

    voos.push(
        new Voo({ data: '2024-04-02' }, { tempo: '13:00' }, companhiasAereras[0], aeroportos[0], aeroportos[1], '153', embarques[0]),
        new Voo({ data: '2024-07-02' }, { tempo: '13:00' }, companhiasAereras[0], aeroportos[1], aeroportos[2], '160', embarques[0]),
        new Voo({ data: '2024-06-02' }, { tempo: '13:00' }, companhiasAereras[0], aeroportos[0], aeroportos[2], '158', embarques[0])
    )

    embarques.push(
        new Embarque(12, { data: '2024-04-02' }, { tempo: '13:00' }, voos[0], 'Não realizado'),
        new Embarque(8, { data: '2024-07-02' }, { tempo: '13:00' }, voos[0], 'Não realizado'),
        new Embarque(11, { data: '2024-06-02' }, { tempo: '13:00' }, voos[0], 'Não realizado')
    )

    //setar embarque dos voos
    voos[0].setEmbarque(embarques[0]);
    voos[1].setEmbarque(embarques[1]);
    voos[2].setEmbarque(embarques[2]);

    voos[0].addVooConexao(voos[1]);
}



const reservarVoo = (passageiro: Passageiro, voo : Voo) => { 
    const reserva = new Reserva(voo.getEmbarque().getData(), passageiro);
    reserva.addVoo(voo);
    reservas.push(reserva);
    console.log("\n========")
    reserva.reservar()

    console.log('Informações sobre embarque:')
    const embarqueVoo = embarques.find(embarque => embarque.voo === voo)
    if (embarqueVoo) {
        console.log(formatador.formatarEmbarque(embarqueVoo));
    } else {
        console.log("Embarque não encontrado.");
    }
    console.log("========\n")
    
    return reserva
}

const pagarPassagem = (reserva:Reserva) => {
    reserva.pagar()
}

const cancelarPassagem = (reserva:Reserva) => {
    reserva.cancelar()
}

const alterarPassagem = (reserva:Reserva) => {
    reserva.alterar()
}


const informacoesPassagem = (reserva : Reserva) => {   
    console.log("Informações sobre a Reserva:")
    console.log(formatador.formatarReserva(reserva))
}

const informacaoVoo = (voo : Voo) => {   
    console.log("Informações sobre o Voo:")
    console.log(formatador.formatarVoo(voo))
}


// ===========MENU!!!============
const menuString = "1 - Comprar passagem" + "\n" +
  "2 - Alterar passagem" + "\n" +
  "3 - Cancelar passagem" + "\n" +
  "4 - Informações da passagem" + "\n" +
  "5 - Informações sobre voo" + "\n" +
  "0 - Sair" + "\n"

  const simNao = "1 - Sim \n0 - Não"

function mostrarMenu(): void {
  console.clear();
  console.log(menuString);
}

function lerOpcao(): Promise<number> {
  return new Promise((resolve, reject) => {
    rl.question("Digite sua opção: ", (input) => {
      const opcao = parseInt(input);
      if (!isNaN(opcao)) {
        resolve(opcao);
      } else {
        reject(new Error("Opção inválida. Tente novamente."));
      }
    });
  });
}


const lerData = async ():Promise<DateInfo> => {
    return new Promise<DateInfo>((resolve, reject) => {
        rl.question("Digite a data da viagem (no formato yyyy-mm-dd): ", (input) => {
            resolve({ data: input });
        });
    });
};


const selecionarVoo = async () => {
    return new Promise<Voo>((resolve, reject) => {
        console.log("Voo disponível:");
        voos.forEach((voo, index) => {
            console.log(`${index + 1} - ${voo.getNumeroVoo()}`);
        });
        rl.question("Selecione o número do voo: ", (input) => {
            const index = parseInt(input) - 1;
            if (index >= 0 && index < voos.length) {
                resolve(voos[index]);
            } else {
                reject(new Error("Voo selecionado inválido. Tente novamente."));
            }
        });
    });
};

const selecionarPassageiro = async () => {
    return new Promise<Passageiro>(async (resolve, reject) => {
        console.log("Passageiros:");
        passageiros.forEach((passageiro, index) => {
            console.log(`${index + 1} - ${passageiro.getNome()}`);
        });
        rl.question("Selecione o número do passageiro: ", (input) => {
            const index = parseInt(input) - 1;
            if (index >= 0 && index < passageiros.length) {
                resolve(passageiros[index]);
            } else {
                reject(new Error("Passageiro selecionado inválido. Tente novamente."));
            }
        });
    });
};

const selecionarPassagens = async () => {
    return new Promise<Reserva>((resolve, reject) => {
        console.log("Passagens/Reservas:");
        reservas.forEach((reserva, index) => {
            console.log(`${index + 1} - Reserva de ${reserva.getPassageiro().getNome()} - ${formatador.formatarData(reserva.getData().data)}`);
        });
        rl.question("Selecione o número da reserva: ", (input) => {
            const index = parseInt(input) - 1;
            if (index >= 0 && index < reservas.length) {
                resolve(reservas[index]);
            } else {
                reject(new Error("Reserva selecionada inválida. Tente novamente."));
            }
        });
    });
};

async function executarOpcao(opcao: number): Promise<void> {
    switch (opcao) {
        case 1:
            const passageiro: Passageiro = await selecionarPassageiro()
            const voo: Voo = await selecionarVoo();
            const reserva = reservarVoo(passageiro, voo);
            //pagar
            console.log("Deseja efetuar o pagamento da sua Passagem/Reserva?")
            console.log(simNao);
            const opt: number = await lerOpcao();
            if(opt === 1){
                reserva.pagar();
            }
            break;
        case 2:
            const reservaAlt: Reserva = await selecionarPassagens();
            alterarPassagem(reservaAlt);
            break;
        case 3:
            const reservaCan: Reserva = await selecionarPassagens();
            cancelarPassagem(reservaCan);
            break;
        case 4:
            const reservaShow: Reserva = await selecionarPassagens();
            informacoesPassagem(reservaShow)
            break;
        case 5:
            const vooShow2: Voo = await selecionarVoo();
            informacaoVoo(vooShow2);
            break;
        case 0:
            console.log('Saindo...');
            rl.close();
            break;
        default:
            console.log("Opção inválida!");
    }
    
    if (opcao !== 0) {
        console.log("\nDeseja continuar? \n(Digite 1 para continuar ou 0 para sair)");
        const continuarOpcao = await lerOpcao();
        if (continuarOpcao === 0) {
            console.log('Saindo...');
        } else {
            await main();
        }
    }
}



async function main() {
    let continuar = true;
    mostrarMenu();
    
    while (continuar) {
      mostrarMenu()
      const opcao = await lerOpcao();
      continuar = opcao !== 0;
      await executarOpcao(opcao);
    }
  }

executarCarga()
main()
