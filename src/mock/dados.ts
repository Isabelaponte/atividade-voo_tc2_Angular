import { Aeroporto } from "../classes/models/aeroporto";
import { CompanhiaAerea } from "../classes/models/companhiaAerea";
import { ContaMilha } from "../classes/models/contaMilha";
import { Embarque } from "../classes/models/embarque";
import { Passageiro } from "../classes/models/passageiro";
import { Reserva } from "../classes/models/reserva";
import { Voo } from "../classes/models/voo";

export const passageiros: Passageiro[] = []
export const contasMilha: ContaMilha[] = []
export const aeroportos: Aeroporto[] = []
export const embarques: Embarque[] = []
export const voos: Voo[] = []
export const companhiasAereras: CompanhiaAerea[] = []
export const reservas: Reserva[] = []

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