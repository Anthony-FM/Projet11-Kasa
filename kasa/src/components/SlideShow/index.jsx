import './index.css'
import { useState } from 'react';
import right from '../../assest/chevron-right.png'
import left from '../../assest/chevron-left.png'

function Slider({ pictures, houseName}){
    let [picturesIndex, setPicturesIndex] = useState(0); 

    function next(picturesIndex){
        return picturesIndex === (pictures.length - 1) ? setPicturesIndex(picturesIndex = 0) : setPicturesIndex(picturesIndex + 1)
    }
    function previous(picturesIndex){
        return  picturesIndex === 0 ? setPicturesIndex(pictures.length - 1) : setPicturesIndex(picturesIndex -1)
    }

    return pictures.length === 1 ? (
        <div className="sliderContainer">
            <img 
                src={pictures} 
                alt={`${houseName} images`} 
                className="sliderImg"/>
        </div>
    ) : (
        <div className="sliderContainer">
            <div onClick={() => previous(picturesIndex)} className='previousArrow'>
                <img 
                    src={left} 
                    alt='chevron gauche'
                    className='arrow'
                />
            </div>
            <img src={pictures[picturesIndex]} alt={`${houseName} images ${picturesIndex + 1}`} className="sliderImg"/>
            <div onClick={() => next(picturesIndex)} className='nextArrow'>
                <img 
                    src={right} 
                    alt='chevron droit'
                    className='arrow'
                />
            </div>
        </div>
    )

}

export default Slider