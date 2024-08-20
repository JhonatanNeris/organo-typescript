//CSS
import './Collaborator.css'

//Icons
import { IoIosCloseCircle, IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { Icolab } from '../../shared/interfaces/IColab';

interface CollaboratorProps {
  collaborator: Icolab;
  color: string;
  removeCollaborator: (id: string) => void;
  favorite: (id: string) => void;  
}

const Collaborator = ({ collaborator, color, removeCollaborator, favorite }: CollaboratorProps) => {
  return (
    <div className='collaborator'>
      <IoIosCloseCircle
        size={28}
        className='delete-button'
        onClick={() => removeCollaborator(collaborator.id)}
      />
      <div className='header' style={{ backgroundColor: color }}>
        <img src={collaborator.image} alt={collaborator.name} />
      </div>
      <div className='card-footer'>
        <h4>{collaborator.name}</h4>
        <h5>{collaborator.post}</h5>
        <h5>{new Date(collaborator.date).toLocaleDateString()}</h5>
        <div className='favorite'>
          {collaborator.favorite
            ? <IoIosHeart color='red' size={24} onClick={() => (favorite(collaborator.id))}/>
            : <IoIosHeartEmpty size={24} onClick={() => (favorite(collaborator.id))}/>
          }

        </div>
      </div>
    </div>
  )
}

export default Collaborator