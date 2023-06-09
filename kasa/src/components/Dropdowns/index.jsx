// CSS
import './index.css'
// Assets
import arrow from '../../assest/arrow.svg'
// React
import { useState } from 'react'

function Dropdown({paragraphe, listEquipment, name}){
    let liEquipements
    let list
    let [ componentStyle, setIsOpen] = useState('dropUp-window')
    let [ arrowStyle, setRotate] = useState('dropdown-arrow')

    if(listEquipment){
        liEquipements = listEquipment.map((equipement) => <li key={equipement.toString()} className='liDropdown'>{equipement}</li>)
        list = <ul className='ul-dropdown'>{liEquipements}</ul> 
    }

    function openTheDropdown(){

       if(componentStyle === 'dropdown-window'){
           setIsOpen('dropUp-window');
           setRotate('dropdown-arrow')

       } else {
           setIsOpen('dropdown-window');
           setRotate('dropUp-arrow')
       }

    }
    

    return <div className='dropdown-container'>
            <div className='dropdown-button' onClick={() => openTheDropdown()} >
                <h2 className='dropdown-title'> {name}</h2>
                <img src={arrow}  alt='arrow' className={arrowStyle}/>
            </div>
            <div className={componentStyle}>
                {paragraphe} {list}
            </div>
        </div> 
    
}

export default Dropdown