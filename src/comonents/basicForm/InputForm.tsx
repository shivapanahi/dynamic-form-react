import { InputOptions } from 'comonents/basicForm/Form'
import React from 'react'
import  "./InputForm.css"

function InputForm(props:any) {
    const {label,errorMessage,onChange,children,...inputProps}=props
  return (
    <div className='field'>
        <label>{label}</label>
        <input onChange={onChange}  {...inputProps}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default InputForm



