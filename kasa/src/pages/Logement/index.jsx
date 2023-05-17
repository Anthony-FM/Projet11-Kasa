// React
import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
// Style
import './index.css'
//Composants
import Slider from "../../components/SlideShow";
import Tags from "../../components/Tags";
import Rating from "../../components/Rating";
import Dropdown from "../../components/Dropdowns";

function Logement(){
    let { id } = useParams();   
    // let params = window.location.href;
    // const id = params.split("id=").at(1)
    console.log(id)

    // state
    let [housesData, setData] = useState(null);
   
    console.log(housesData)
    useEffect(() => {
        fetch('./datas/index.json')
       .then((res) => res.json())
       .then((data) =>  setData(data.filter( data => data.id === id)[0]))       
       .catch((error) => console.log('====='+ error))              
    }, [id])

    
    return housesData === null ? (
        <div>
            Loading... 
            
        </div>
        
    ) 
    : housesData === undefined ?  (<div><Navigate to="*" replace={true} /></div>) 
    : ( 
        
        <section>
            <Slider 
                pictures={housesData.pictures}
                houseName={housesData.title}
            />
            <div className="houseContainer">
                <div className="houseIntroContainer">
                    <div className="houseIntro">
                        
                        <h1 className="houseTitle">{housesData.title}</h1>   
                        <p className="houseLocation">{housesData.location}</p>      
                        <Tags 
                            tags={housesData.tags} 
                            id={housesData.id}
                        /> 
                        
                    </div>        

                </div>
                <div className="hostNratingContainer">
                    <div className="houseHost">
                        <p className="houseHostName">
                            {housesData.host.name}
                        </p>
                        <img 
                            src={housesData.host.picture} 
                            alt={`${housesData.host.name} cover`}
                            className="houseHostImg" 
                        />
                    </div>
                    
                    <Rating rating={housesData.rating}/>
                </div>

            </div>
            <div className="dropdownContainer">
                <Dropdown 
                    paragraphe={housesData.description}
                    name='Description'/>
                <Dropdown 
                    listEquipment={housesData.equipments}
                    name='Équipements'/>
            </div>
    
        </section>            
        ) 
}

export default Logement