// React
import { useEffect, useState } from "react"
// Composant
import Card from "../../components/Card";
import Loader from "../../components/Loader";
// Style
import './index.css'
// assets
import IMG from "../../assest/IMG.jpg"


function Home(){

    const [houseData, setData] = useState([]);
    useEffect(() => {
         fetch('./datas/index.json')
        .then((res ) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error))      

    }, [])

    let liHouse = houseData.map(({id, title, cover}) => (
        <li key={id} className="liCardContainer">
            <Card 
            id={id}
            title= {title}
            cover= {cover}/>
        </li>
    ))

    return <section>
        <div className="imgCoverContainer">
            <img src={IMG} alt="recif" className="imgCover"/>
            <h1 className="imgCoverTitle">Chez vous, partout et ailleurs</h1>

        </div>
            
        { 
            houseData.length === 0 ?
            (<Loader/> )
             : 
            (
            <ul className="cardContainer">
                {liHouse}
            </ul>
            )
        }
            
    </section>
}

export default Home