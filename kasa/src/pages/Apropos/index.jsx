//React
import { useState, useEffect } from 'react'
// CSS
import './index.css'
// Assets
import IMG from '../../assest/imgApropos.png'
// Composants
import Dropdown from '../../components/Dropdowns'
import Loader from '../../components/Loader'

function Apropos(){
    let [ Apropos, setApropos] = useState(undefined)

    useEffect(() => {
        fetch('./datas/Apropos.json')
       .then((res) => res.json())
       .then((data) => setApropos(data))
       .catch((error) => console.log('====='+ error))              
    }, [])

    
    return Apropos === undefined ? (<Loader/>):(<section>
        <div className="imgCoverContainer">
            <img src={IMG} alt="Paysage montagneuse" className="imgCover"/>

        </div>
        <div className='AproposContainer'>
            <Dropdown 
                paragraphe={Apropos.fiabilite}
                name="Fiabilité"
            />
            <Dropdown 
                paragraphe={Apropos.respect}
                name="Respect"
            />
            <Dropdown 
                paragraphe={Apropos.service}
                name="Service"
            />
            <Dropdown 
                paragraphe={Apropos.securite}
                name="Sécurité"
            />
        </div>
        
    </section>)
}

export default Apropos