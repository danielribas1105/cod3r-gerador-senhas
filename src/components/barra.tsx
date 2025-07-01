interface BarraProps {
   corBarra: string
}

export default function Barra(props: BarraProps) {
   return (
      <span
         className={`ml-2 w-3 h-8 p-1.5 rounded-sm border-2 border-gray-100 ${props.corBarra}`}
      ></span>
   )
}
