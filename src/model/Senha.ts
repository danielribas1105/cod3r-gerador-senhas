import IdsCaracteres from './IdsCaracteres'
import OpcaoCaractere from './OpcaoCaractere'

export default class Senha {
   static opcoesCheck(id: string, opcoes: OpcaoCaractere[]) {
      const opcao = opcoes.find((o) => o.id === id)
      return opcao!.valor
   }

   static gerarSenha(tamanho: number, opcoes: OpcaoCaractere[]) {
      let caracteresPossiveis = ''
      let senha = ''

      if (Senha.opcoesCheck(IdsCaracteres.NUMEROS, opcoes)) {
         caracteresPossiveis += '0123456789'
      }
      if (Senha.opcoesCheck(IdsCaracteres.MAIUSCULAS, opcoes)) {
         caracteresPossiveis += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      }
      if (Senha.opcoesCheck(IdsCaracteres.MINUSCULAS, opcoes)) {
         caracteresPossiveis += 'abcdefghijklmnopqrstuvwxyz'
      }
      if (Senha.opcoesCheck(IdsCaracteres.ESPECIAIS, opcoes)) {
         caracteresPossiveis += '!@#$%&*()+-?.,:;'
      }

      for (let i = 0; i < tamanho; i++) {
         const a = Math.floor(Math.random() * caracteresPossiveis.length)
         senha += caracteresPossiveis.charAt(a)
      }
      return senha
   }

   static calcularForca(tamanho: number, opcoes: OpcaoCaractere[]) {
      const temNumeros = +Senha.opcoesCheck(IdsCaracteres.NUMEROS, opcoes)
      const temMaiusculas = +Senha.opcoesCheck(IdsCaracteres.MAIUSCULAS, opcoes)
      const temMinusculas = +Senha.opcoesCheck(IdsCaracteres.MINUSCULAS, opcoes)
      const temEspeciais = +Senha.opcoesCheck(IdsCaracteres.ESPECIAIS, opcoes)
      const qtdeTipos =
         temNumeros + temMaiusculas + temMinusculas + temEspeciais

      if (tamanho < 8 || qtdeTipos < 2) {
         return 1
      }

      if (tamanho === 4 && tamanho >= 10) {
         return 3
      }

      return 2
   }
}
