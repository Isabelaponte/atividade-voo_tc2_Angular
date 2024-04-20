import { DateInfo } from "../interfaces/date.js"
import { TimeInfo } from "../interfaces/time.js"
import { Voo } from "./voo.js"

export class Embarque {
  private portaoEmbarque: number
  private data: DateInfo
  private tempo: TimeInfo
  public voo: Voo
  private status: string

  constructor(
    portaoEmbarque: number,
    data: DateInfo,
    tempo: TimeInfo,
    voo: Voo,
    status: string
  ) {
    this.portaoEmbarque = portaoEmbarque
    this.data = data
    this.tempo = tempo
    this.voo = voo
    this.status = status
  }

  public getPortaoEmbarque(): number {
    return this.portaoEmbarque;
  }
  
  public setPortaoEmbarque(novoPortao: number): void {
    this.portaoEmbarque = novoPortao;
  }
  
  public getData(): DateInfo {
    return this.data;
  }
  
  public setData(novaData: DateInfo): void {
    this.data = novaData;
  }
  
  public getTempo(): TimeInfo {
    return this.tempo;
  }
  
  public setTempo(novoTempo: TimeInfo): void {
    this.tempo = novoTempo;
  }
  
  public getVoo(): Voo {
    return this.voo;
  }
  
  public setVoo(novoVoo: Voo): void {
    this.voo = novoVoo;
  }
  
  public getStatus(): string {
    return this.status;
  }
  
  public setStatus(novoStatus: string): void {
    this.status = novoStatus;
  }

  iniciarCheckin(): void {
    console.log('Check-in iniciado!')
  }

  pararCheckin(): void {
    console.log('Check-in parado!')
  }

  finalizarVoo(): void {}

  atrasarVoo(): void {}

  embarcarPassageiro(): void {}
}
