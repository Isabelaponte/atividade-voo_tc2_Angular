export class ContaMilha {
  private numero: string
  private totalMilhas: number
  private status: string

  constructor(numero: string, totalMilhas: number, status: string) {
    this.numero = numero
    this.totalMilhas = totalMilhas
    this.status = status
  }

  // Getter para o número da conta
  getNumero(): string {
    return this.numero;
  }

  setNumero(numero: string) {
    this.numero = numero;
  }

  // Getter para o total de milhas
  getTotalMilhas(): number {
    return this.totalMilhas;
  }

  setTotalMilhas(totalMilhas: number) {
    this.totalMilhas = totalMilhas;
  }


  // Setter para adicionar milhas
  adicionarMilhas(valor: number): void {
    if (valor > 0) {
      this.totalMilhas += valor;
    } else {
      console.error("Valor inválido para adicionar milhas: " + valor);
    }
  }

  // Getter para o status da conta
  getStatus(): string {
    return this.status;
  }

  // Setter para o status da conta
  setStatus(status: string): void {
    if (["Ativo", "Inativo"].includes(status)) {
      this.status = status;
    } else {
      console.error("Status inválido: " + status);
    }
  }
}

