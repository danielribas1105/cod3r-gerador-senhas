'use client'
import { useEffect, useState } from 'react'
import opcoes from '@/data/OpcoesCaracteres'
import Checkbox from '@/components/checkbox'
import Senha from '@/model/Senha'
import ExibeSenha from '@/components/exibe-senha'
import ForcaSenha from '@/components/forca-senha'

export default function Home() {
   const [tamanho, setTamanho] = useState<number>(8)
   const [tiposCaracteres, setTiposCaracteres] = useState(opcoes)
   const [senha, setSenha] = useState('')
   const [forcaSenha, setForcaSenha] = useState(1)

   useEffect(() => {
      setForcaSenha(Senha.calcularForca(tamanho, tiposCaracteres))
   }, [tamanho, tiposCaracteres])

   const tratarMudanca = (indice: number) => {
      const aux = [...tiposCaracteres]
      aux[indice].valor = !aux[indice].valor
      setTiposCaracteres(aux)
   }

   const gerarSenha = () => {
      const novaSenha = Senha.gerarSenha(tamanho, tiposCaracteres)
      setSenha(novaSenha)
   }

   return (
      <main className="flex flex-col items-center justify-center h-screen">
         <h1 className="text-4xl text-gray-200 font-bold mb-4 text-center">
            Gerador de Senhas
         </h1>
         <div className="w-3/12 bg-slate-700 text-gray-200 p-8">
            <div className="flex flex-col gap-3 text-2xl">
               <label className="flex justify-between">
                  <span>Tamanho da senha:</span>
                  <span className="text-blue-500">{tamanho}</span>
               </label>
               <input
                  type="range"
                  min={4}
                  max={30}
                  value={tamanho}
                  onChange={(e) => setTamanho(+e.target.value)}
               />
            </div>
            <div className="flex flex-col my-3">
               {tiposCaracteres.map((opcao, i) => {
                  return (
                     <Checkbox
                        key={opcao.id}
                        id={opcao.id}
                        texto={opcao.nome}
                        selecionado={opcao.valor}
                        onChange={() => tratarMudanca(i)}
                     />
                  )
               })}
            </div>
            <ForcaSenha forca={forcaSenha} />
            <button
               className="text-white text-lg font-bold bg-blue-500 px-4 py-2 rounded w-full"
               onClick={gerarSenha}
            >
               Gerar Senha
            </button>
            <ExibeSenha senha={senha} />
         </div>
      </main>
   )
}
