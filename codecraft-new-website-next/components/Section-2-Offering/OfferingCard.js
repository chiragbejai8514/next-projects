import data from './data.js'
import './Offering.css'


const Card = (props) => {

    const carditems =
        <div className=" right card-details flex-column">
            <h3 className="section-title section-title-2">{props.children.name}</h3>
            <p>{props.children.about}</p>
            <button className="btn" >LEARN MORE</button>
            {/* <img className="pattern-right" src="http://d1qgh7vfxb2rk6.cloudfront.net/home/section-2/pattern-right.png" /> */}
        </div>
    return (carditems)
}

export default Card
