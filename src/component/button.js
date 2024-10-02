import React from "react";

const Button = (props) =>{

  const {bg, title,onClick} = props
  return(
    <div>
      <button style={{backgroundColor:bg, border:'none', borderRadius:'5px', color:'white', padding:'10px 20px' }} onClick={onClick}>{title}</button>
    </div>
  )
}

export default Button