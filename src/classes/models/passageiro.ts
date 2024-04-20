import { ContaMilha } from "./contaMilha.js"
import { Reserva } from "./reserva.js"

export class Passageiro {
  private nome: string
  private cc: string
  private cartaoMilha: string
  private reservas: Reserva[]
  private status: string
  private contaMilha: ContaMilha

  constructor(nome: string, cc: string, cartaoMilha: string, status: string, contaMilha: ContaMilha) {
    this.nome = nome
    this.cc = cc
    this.cartaoMilha = cartaoMilha
    this.reservas = []
    this.status = status
    this.contaMilha = contaMilha
  }

  public getNome(): string {
    return this.nome;
  }
  
  public setNome(novoNome: string): void {
    this.nome = novoNome;
  }
  
  public getCc(): string {
    return this.cc;
  }
  
  public setCc(novoCc: string): void {
    this.cc = novoCc;
  }
  
  public getCartaoMilha(): string {
    return this.cartaoMilha;
  }
  
  public setCartaoMilha(novoCartaoMilha: string): void {
    this.cartaoMilha = novoCartaoMilha;
  }
  
  public getReservas(): Reserva[] {
    // Return a copy of the reservas array to prevent external modification
    return [...this.reservas];
  }
  
  public setReservas(novasReservas: Reserva[]): void {
    // Assign the new array reference (avoids potential mutation issues)
    this.reservas = novasReservas;
  }
  
  public getStatus(): string {
    return this.status;
  }
  
  public setStatus(novoStatus: string): void {
    this.status = novoStatus;
  }
  
  public getContaMilha(): ContaMilha {
    return this.contaMilha;
  }
  
  public setContaMilha(novaContaMilha: ContaMilha): void {
    this.contaMilha = novaContaMilha;
  }

  creditoMilha(r: Reserva) {}

  consumoMilha(r: Reserva) {}
}
