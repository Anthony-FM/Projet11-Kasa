import './index.css'
import { Link } from "react-router-dom"


function Error(){
    return <main className='MainContainer'>
        <h1 className='ErrorTitle'>404</h1>
        <p className='ErrorParagraphe'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/' className='ErrorLink'>Retourner sur la page d’accueil</Link>
        </main>
}

export default Error