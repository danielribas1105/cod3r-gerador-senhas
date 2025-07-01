import OpcaoCaractere from '@/model/OpcaoCaractere'
import IdsCaracteres from '@/model/IdsCaracteres'

const opcoes: OpcaoCaractere[] = [
   {
      id: IdsCaracteres.NUMEROS,
      nome: 'Números',
      valor: false,
   },
   {
      id: IdsCaracteres.MAIUSCULAS,
      nome: 'Letras maiúsculas',
      valor: false,
   },
   {
      id: IdsCaracteres.MINUSCULAS,
      nome: 'Letras minúsculas',
      valor: false,
   },
   {
      id: IdsCaracteres.ESPECIAIS,
      nome: 'Caracteres especiais',
      valor: false,
   },
]

export default opcoes
