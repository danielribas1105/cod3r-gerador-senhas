import Barra from './barra'

interface ForcaSenhaProps {
   forca: number
}

export default function ForcaSenha(props: ForcaSenhaProps) {
   return (
      <div className="flex tex-xl items-center mb-3">
         <span className="font-bold">Força da senha:</span>
         <Barra
            corBarra={
               props.forca === 3
                  ? 'bg-green-500'
                  : props.forca === 2
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
            }
         />
         <Barra
            corBarra={
               props.forca === 3
                  ? 'bg-green-500'
                  : props.forca === 2
                    ? 'bg-yellow-500'
                    : ''
            }
         />
         <Barra corBarra={props.forca === 3 ? 'bg-green-500' : ''} />
      </div>
   )
}
