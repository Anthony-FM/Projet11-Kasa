import './index.css'

function Card({id, title, cover}){
    return <a className='cardStyle' href={`/fiche-logement?id=${id}`} > 
        <img src={cover} alt={title + `cover`} className='cardImg'/>
        <h1 className='cardTitle'>{title}</h1>
    </a>
}

export default Card
