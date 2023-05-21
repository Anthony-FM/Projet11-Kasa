// CSS
import './index.css'
// Assets
import Pink from '../../assest/pink-star.svg'
import Grey from '../../assest/grey-star.svg'

function Rating({rating}){
    let rangeStar = [1,2,3,4,5]
     
    let greyStar = <img src={Pink} alt='étoile rose' className='stars' />
    let pinkStar = <img src={Grey} alt='étoile grise' className='stars' />

    let ratingStars = 
        rangeStar.map(range => 
            rating >= range ? <span key={`${range.toString()}greyStar`}> {greyStar}</span>
             : <span key={`${range.toString()}pinkStar`}>{pinkStar}</span> 
            ) 
    
    return <div className='ratingsContainer'>
        {ratingStars}
    </div>
}

export default Rating