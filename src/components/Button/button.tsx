
import './button.css'

type btnT = {
    text: string;
    className?: string
}

const Button = (props: btnT) => {
 
  return (
 
    <button   className={`nbt ${props.className}`}>{props.text} </button>
 
  )
}

export default Button