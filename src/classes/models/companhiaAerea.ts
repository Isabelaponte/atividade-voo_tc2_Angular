import { Aeroporto } from "./aeroporto.js";

export class CompanhiaAerea {
  private nome: string;
  private sigla: string;
  private aeroportos: Aeroporto[]

  constructor(nome: string, sigla: string, aeroportos: Aeroporto[]) {
    this.nome = nome;
    this.sigla = sigla;
    this.aeroportos = aeroportos;
  }

  public getNome(): string {
    return this.nome;
  }
  
  public setNome(novoNome: string): void {
    this.nome = novoNome;
  }
  
  public getSigla(): string {
    return this.sigla;
  }
  
  public setSigla(novaSigla: string): void {
    this.sigla = novaSigla;
  }
  
  public getAeroportos(): Aeroporto[] {
    // Return a copy of the aeroportos array to prevent external modification
    return [...this.aeroportos];
  }
  
  public setAeroportos(novosAeroportos: Aeroporto[]): void {
    // Assign the new array reference (avoids potential mutation issues)
    this.aeroportos = novosAeroportos;
  }

  public adicionarAeroporto(aeroporto: Aeroporto): void {
    this.aeroportos.push(aeroporto);
  }

  public removerAeroporto(aeroporto: Aeroporto): void {
    const nome = aeroporto.getNome();
    const indice = this.aeroportos.findIndex(ap => ap.getNome() === nome);

    if (indice === -1) {
      console.warn(`Aeroporto com nome "${nome}" não encontrado na companhia.`);
      return;
    }
  
    this.aeroportos.splice(indice, 1);
  }
}