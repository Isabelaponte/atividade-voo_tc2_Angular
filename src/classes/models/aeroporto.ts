import { CompanhiaAerea } from "./companhiaAerea.js"

export class Aeroporto {
  private sigla: string
  private nome: string
  private pais: string
  private taxa: number
  private cpAereas: CompanhiaAerea[]

  constructor(sigla: string, nome: string, pais: string, taxa: number, cpAereas: CompanhiaAerea[]) {
    this.sigla = sigla
    this.nome = nome
    this.pais = pais
    this.taxa = taxa
    this.cpAereas = cpAereas
  }

  public getSigla(): string {
    return this.sigla;
  }
  
  public setSigla(novaSigla: string): void {
    this.sigla = novaSigla;
  }
  
  public getNome(): string {
    return this.nome;
  }
  
  public setNome(novoNome: string): void {
    this.nome = novoNome;
  }
  
  public getPais(): string {
    return this.pais;
  }
  
  public setPais(novoPais: string): void {
    this.pais = novoPais;
  }
  
  public getTaxa(): number {
    return this.taxa;
  }
  
  public setTaxa(novaTaxa: number): void {
    this.taxa = novaTaxa;
  }
  
  public getCpAereas(): CompanhiaAerea[] {
    return this.cpAereas;
  }
  
  public setCpAereas(novasCpAereas: CompanhiaAerea[]): void {
    this.cpAereas = novasCpAereas;
  }
}
