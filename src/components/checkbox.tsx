interface CheckboxProps {
   id: string
   texto: string
   selecionado: boolean
   onChange: () => void
}

export default function Checkbox(props: CheckboxProps) {
   const id = `checkbox-${props.id}`
   return (
      <div className="flex text-xl gap-2">
         <input
            type="checkbox"
            id={id}
            checked={props.selecionado}
            onChange={props.onChange}
         />
         <label htmlFor={id}>{props.texto}</label>
      </div>
   )
}
