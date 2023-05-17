import './index.css'
import { Link } from 'react-router-dom'

function Card({id, title, cover}){
    return  <Link className='cardStyle' to={`/fiche-logement/${id}`} > 
            <img src={cover} alt={title + `cover`} className='cardImg'/>
            <h1 className='cardTitle'>{title}</h1>
        </Link>
            
        
    
}

export default Card
