import data from './data.js'
import './DevProcess.css'
import '../Section-5-Industries/Industries.css'

const Card = (props) => {

    const carditems =
        <div className="card-container center">
            <img src={props.children.image} />
            <div className="card-about">{props.children.about}</div>
        </div>
    return (carditems)
}

export default Card