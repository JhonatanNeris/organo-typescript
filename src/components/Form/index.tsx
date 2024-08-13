import React, { useState } from 'react'

//Import do CSS
import './Form.css'

//components
import Input from '../Input/Input'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botão'

//Interface
import { Icolab } from '../../shared/interfaces/IColab'
import { ITeam } from '../../shared/interfaces/ITeam'

//UUID
import { v4 as uuidv4 } from 'uuid';


interface FormProps {
    teamsName: string[]
    addColab: (colab: Icolab) => void
    createTeam: (team: ITeam) => void
}

const Form = (props: FormProps) => {

    const [name, setName] = useState("")
    const [post, setPost] = useState("")
    const [image, setImage] = useState("")
    const [team, setTeam] = useState("")
    const [teamName, setTeamName] = useState("")
    const [teamColor, setTeamColor] = useState("#000000")

    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.addColab({
            name,
            post,
            image,
            team,
            favorite: false,
            id: uuidv4()
        })

        setImage("")
        setName("")
        setPost("")
        setTeam("")

    }
    const handleSubmitTeam = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.createTeam({
            id: uuidv4(),
            name: teamName,
            color: teamColor
        })

        setTeamName("")
        setTeamColor("")
       
    }

    return (
        <section className='formulario-container'>
            <form  className="formulario" onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <Input
                    value={name}
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    onchange={(valor) => setName(valor)}
                />
                <Input
                    value={post}
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    onchange={(valor) => setPost(valor)}
                />
                <Input
                    value={image}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    onchange={(valor) => setImage(valor)}
                />
                <ListaSuspensa 
                    value={team}   
                    obrigatorio={true} 
                    itens={props.teamsName} 
                    label="Time" 
                    onchange={(valor) => setTeam(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
            <form className="formulario" onSubmit={handleSubmitTeam}>
                <h2>Preencha os dados para criar um novo time:</h2>
                <Input
                    value={teamName}
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do time"
                    onchange={(valor) => setTeamName(valor)}
                />
                <Input
                    value={teamColor}
                    obrigatorio
                    label="Cor"
                    placeholder="Digite a cor do time"
                    onchange={(valor) => setTeamColor(valor)}
                    type="color"
                />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}

export default Form