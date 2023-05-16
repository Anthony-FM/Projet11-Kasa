import './index.css'
import IMG from '../../assest/imgApropos.png'
import Dropdown from '../../components/Dropdowns'
import { useState, useEffect } from 'react'

function Apropos(){
    let [ Apropos, setApropos] = useState(undefined)

    useEffect(() => {
        fetch('./datas/Apropos.json')
       .then((res) => res.json())
       .then((data) => setApropos(data))
       .catch((error) => console.log('====='+ error))              
    }, [])

    
    return Apropos === undefined ? (<div> Loading...</div>):(<section>
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