import { DateInfo } from "../interfaces/date.js"
import { TimeInfo } from "../interfaces/time.js"
import { Aeroporto } from "./aeroporto.js"
import { CompanhiaAerea } from "./companhiaAerea.js"
import { Embarque } from "./embarque.js"

export class Voo {
  private data: DateInfo
  private tempo: TimeInfo
  private companhiaAerea: CompanhiaAerea // talvez seja necessário, faz mais sentido
  private aeroportoOrigem: Aeroporto
  private aeroportoDestino: Aeroporto
  private numeroVoo: string
  private voosDeConexão: Voo[] = []

  private embarque : Embarque

  constructor(
    data: DateInfo,
    tempo: TimeInfo,
    companhiaAerea: CompanhiaAerea,
    aeroportoOrigem: Aeroporto,
    aeroportoDestino: Aeroporto,
    numeroVoo: string,
    embarque : Embarque

  ) {
    this.data = data
    this.tempo = tempo
    this.companhiaAerea = companhiaAerea
    this.aeroportoOrigem = aeroportoOrigem
    this.aeroportoDestino = aeroportoDestino
    this.numeroVoo = numeroVoo
    this.embarque = embarque
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
  
  public getCompanhiaAerea(): CompanhiaAerea {
    return this.companhiaAerea;
  }
  
  public setCompanhiaAerea(novaCompanhiaAerea: CompanhiaAerea): void {
    this.companhiaAerea = novaCompanhiaAerea;
  }
  
  public getAeroportoOrigem(): Aeroporto {
    return this.aeroportoOrigem;
  }
  
  public setAeroportoOrigem(novoAeroportoOrigem: Aeroporto): void {
    this.aeroportoOrigem = novoAeroportoOrigem;
  }
  
  public getAeroportoDestino(): Aeroporto {
    return this.aeroportoDestino;
  }
  
  public setAeroportoDestino(novoAeroportoDestino: Aeroporto): void {
    this.aeroportoDestino = novoAeroportoDestino;
  }
  
  public getNumeroVoo(): string {
    return this.numeroVoo;
  }
  
  public setNumeroVoo(novoNumeroVoo: string): void {
    this.numeroVoo = novoNumeroVoo;
  }
  
  public getEmbarque(): Embarque {
    return this.embarque;
  }

  public setEmbarque(embarque: Embarque): void{
    this.embarque = embarque;
  }

  getVoosConexao(): Voo[]{
    return this.voosDeConexão
  }

  addVooConexao(voo: Voo): void{
    this.voosDeConexão.push(voo);
  }

  removeVooConexao(numeroVoo: string):void{
    const index = this.voosDeConexão.findIndex((voo) => voo.getNumeroVoo() === numeroVoo);
    if (index !== -1) {
      this.voosDeConexão.splice(index, 1);
      console.log(`Voo ${numeroVoo} deletado!`);
    } else {
      console.warn(`Voo ${numeroVoo} não encontrado.`);
    }
  }
}
