import React from 'react'

import './Input.css'

interface InputProps {
    placeholder: string
    label: string
    value: string
    onchange: (valor: string) => void
    type?: string
    obrigatorio?: boolean
}

const Input = ({ placeholder, label, value, onchange, type = "text", obrigatorio = false }: InputProps) => {

    const placeholderModificada = `${placeholder}...`

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onchange(event.target.value);
    };

    return (
        <div className={`input input-${type}`}>
            <label>{label}</label>
            <input
                value={value}
                onChange={handleChange}
                type={type}
                required={obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default Input