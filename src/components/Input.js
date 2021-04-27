const textInput = (props) => {
  const {type, placeholder, onChange} = props
  return(
    <input className="text-input" 
    type={type} 
    placeholder={placeholder} 
    onChange={onChange}>
    </input>  
  )
}

export default textInput;
