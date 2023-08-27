import InputForm from 'comonents/basicForm/InputForm';
import React, { useState } from 'react'
import './InputForm.css'


export interface InputOptions {
    id: Number;
    name: String;
    label: string;
    placeholder: String,
    errorMessage: String,
    type: String,
    required?: Boolean
}
export interface Inputs {
    name: String;
    email: String;
    age: String,
    phoneNumber: String
}

export default function Form() {
    const [values, setvalues] = useState<Inputs>(
        {
            name: "",
            email: "",
            age: "",
            phoneNumber: "",
        }
    )
    const inputs: InputOptions[] = [
        {
            id: 1,
            name: "name",
            label: "name",
            placeholder: "enter name",
            errorMessage: "it is required",
            type: "text",

        },
        {
            id: 2,
            name: "email",
            label: "email",
            placeholder: "enter email",
            errorMessage: "it is required",
            type: "text",
            required: true
        },
        {
            id: 3,
            name: "age",
            label: "age",
            placeholder: "enter age",
            errorMessage: "it is required",
            type: "text",
            required: true
        },
        {
            id: 4,
            name: "phoneNumber",
            label: "age",
            placeholder: "enter phoneNumber",
            errorMessage: "it is required",
            type: "text"
        }
    ]

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }
    const onChange = (e: any) => {
        setvalues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                {
                    inputs.map((input) => {
                        console.log(input.name)
                        return (<InputForm
                            key={input.id}
                            onChange={onChange}
                            //  value={values[input.name]}
                            {...input}></InputForm>)
                    })
                }
                <button>
                    submit
                </button>
            </form>
        </div>
    )
}
