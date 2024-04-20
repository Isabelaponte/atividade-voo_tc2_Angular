import { Embarque } from '../models/embarque';
import { Voo } from '../models/voo';
import { Reserva } from '../models/reserva';
import { Passageiro } from '../models/passageiro';


export class Formatador{
    constructor(){

    };

    public formatarData(data: string): string {
        const dia = data.slice(8, 10);
        const mes = data.slice(5, 7);
        const ano = data.slice(0, 4);
        return `${dia}/${mes}/${ano}`;
      }
      
      
    public formatarTempo(tempo: string): string {
        const hora = tempo.slice(0, 2);
        const minuto = tempo.slice(3, 5);
        return `${hora}:${minuto}`;
      }

    public formatarReserva(reserva: Reserva): string{
      var textoReserva: string = '**Reserva: \n';
      textoReserva += `**Status: ${reserva.getStatus()}** \n`
      textoReserva += this.formatarPassageiro(reserva.getPassageiro(), false)
      reserva.getVoos().forEach(voo => {
        textoReserva += this.formatarVoo(voo)
        textoReserva += this.formatarEmbarque(voo.getEmbarque())
        if(voo.getVoosConexao().length > 0){
          textoReserva += this.formatConexões(voo.getVoosConexao())
        }
      });
      return textoReserva
    }

    public formatConexões(voosConexao: Voo[]): string{
      var textConexao = '\n-**Conexões\n';
      voosConexao.forEach(vooConexao => {
          textConexao += '        -**Conexão**\n' +
              `   ${this.formatarVoo(vooConexao)}` +
              `      ${this.formatarEmbarque(vooConexao.getEmbarque())}`;
      });
      return textConexao;
    }
    
    public formatarPassageiro(passageiro: Passageiro, isComplete: boolean): string{
      return `**Passageiro:
      **Nome: ${passageiro.getNome()}**` +
      (isComplete ? 
        `**${passageiro.getCartaoMilha()}**
        **${passageiro.getCc()}**
        **${passageiro.getStatus}** 
        `        
        : '\n')
    }
      
    public formatarEmbarque(embarque: Embarque): string {
        const { dataFormatada, tempoFormatado } = this.getEmbarqueData(embarque);
      
        return `**Embarque:      
      **Portão: ${embarque.getPortaoEmbarque()}      
      **Data: ${dataFormatada}      
      **Hora: ${tempoFormatado}
      `
      }

    public formatarVoo(voo: Voo): string{
      return ` 
        **Voo:        
            **Companhia aérea: ${voo.getCompanhiaAerea().getNome()} (${voo.getCompanhiaAerea().getSigla()})        
            **Origem: ${voo.getAeroportoOrigem().getNome()} (${voo.getAeroportoOrigem().getSigla()})        
            **Destino: ${voo.getAeroportoDestino().getNome()} (${voo.getAeroportoDestino().getNome()})
        \n`;
      }
    
      
    
    private getEmbarqueData(embarque: Embarque): { dataFormatada: string, tempoFormatado: string } {
        const dataFormatada = this.formatarData(embarque.getData().data);
        const tempoFormatado = this.formatarTempo(embarque.getTempo().tempo);
        return { dataFormatada, tempoFormatado };
      }
      
}

