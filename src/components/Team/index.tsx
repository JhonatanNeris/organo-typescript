//Import do CSS
import './Team.css'

//Components 
import Collaborator from '../Collaborator'

//hex to rgba
import hexToRgba from 'hex-to-rgba';
import { Icolab } from '../../shared/interfaces/IColab';

interface TimeProps {
  id: string
  name: string
  color: string
  colabs: Icolab[]
  changeColor: (color: string, id: string) => void
  removeCollaborator: (id: string) => void
  favorite: (id: string) => void
}

const Team = ({colabs, color, name, changeColor, id, removeCollaborator, favorite }: TimeProps) => {
  return (
    (colabs.length > 0) && <section className='team' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(color, "0.5") }}>
      <input type="color" className='color-input' value={color} onChange={(e) => changeColor(e.target.value, id)} />
      <h3 style={{ borderBottomColor: color }}>{name}</h3>
      <div className='colabs'>
        {colabs.map((colab, index) => {
          return (
            <Collaborator
              key={index}
              collaborator={colab}
              color={color}
              removeCollaborator={removeCollaborator}
              favorite={favorite}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Team