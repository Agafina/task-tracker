const Button = ({text , color , onAdd}) => {
    return ( 
        <button className="btn" style={{background: color}} onClick={onAdd}>{ text }</button>
     );
}
 
export default Button;