import { IconCopy } from '@tabler/icons-react'
import { useState } from 'react'

interface ExibeSenhaProps {
   senha: string
}

export default function ExibeSenha(props: ExibeSenhaProps) {
   const [mostrarAviso, setMostrarAviso] = useState(false)

   const copiar = () => {
      navigator.clipboard.writeText(props.senha)
      setMostrarAviso(true)
      setTimeout(() => {
         setMostrarAviso(false)
      }, 2000)
   }

   return (
      <div className="mt-3">
         {props.senha.trim() !== '' && (
            <>
               <span className="text-lg font-bold">Senha gerada:</span>
               <div className="flex justify-between p-2 border bg-gray-200 rounded text-slate-800">
                  {props.senha}
                  <IconCopy
                     className="hover:text-blue-500 cursor-pointer"
                     title="Copiar senha"
                     onClick={copiar}
                  />
               </div>
            </>
         )}
         {mostrarAviso && (
            <p className="mt-2 text-blue-500 text-center">
               Senha copiada para a área de transferência!
            </p>
         )}
      </div>
   )
}
