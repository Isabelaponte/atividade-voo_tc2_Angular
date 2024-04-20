import { DateInfo } from "../interfaces/date"
import { Passageiro } from './passageiro';
import { Voo } from "./voo"

export class Reserva {
  private data: DateInfo
  private voos: Voo[] = []
  private passageiro: Passageiro
  private status: string = "PAGAMENTO PENDENTE"

  constructor(data: DateInfo, passageiro: Passageiro) {
    this.data = data
    this.passageiro = passageiro
  }

  private PENDENTE: string = "PAGAMENTO PENDENTE";
  private PAGA: string = "PAGA";
  private CANCELADA: string = "CANCELADA";

  getVoos(): Voo[]{
    return this.voos;
  }

  setVoos(vooAntigo: Voo, vooAtualizado: Voo): void {
    const index = this.voos.findIndex(voo => voo === vooAntigo);
    if (index !== -1) {
      this.voos[index] = vooAtualizado;
    }
  }
  

  addVoo(voo: Voo): void{
    this.voos.push(voo);
  }

  removeVoo(numeroVoo: string):void{
    const index = this.voos.findIndex((voo) => voo.getNumeroVoo() === numeroVoo);
    if (index !== -1) {
      this.voos.splice(index, 1);
      console.log(`Voo ${numeroVoo} deletado!`);
    } else {
      console.warn(`Voo ${numeroVoo} não encontrado.`);
    }
  }

  getPassageiro(): Passageiro{
    return this.passageiro
  }
  
  setPassageiro(passageiro: Passageiro): void{
    this.passageiro = passageiro
  }

  getStatus(): string{
    return this.status
  }

  setStatus(status: string): void{
    this.status = status
  }

  getData(): DateInfo{
    return this.data;
  }

  setData(data: DateInfo): void{
    this.data = data;
  }

  reservar(): void {
    console.log('Voo reservado!')
  }

  pagar(): void {
    this.setStatus(this.PAGA);
    console.log('Voo pago!')
  }

  cancelar(): void {
    this.setStatus(this.CANCELADA);
    console.log('Voo cancelado!')
  }

  alterar(): void {
    console.log('Voo alterado!')
  }
}
