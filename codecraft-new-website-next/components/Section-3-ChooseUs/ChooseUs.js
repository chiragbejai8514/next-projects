import './ChooseUs.css'
import data from './data.js'


const ChooseUs = () => {
    const items = data;
    const chooseItems = items.map(item =>
        <div key={item.id} className="section-3-box flex-column center">
            <img src={item.image} />
            <div className="box-info center">
                {item.about}
            </div>
        </div>
    )

    return (
        <div className="section-3">
            <div className="container flex-column center">
                <div className="section-title section-title-1">Why</div>
                <div className="section-title section-title-2">Choose Us</div>
                <div className="section-3-container flex-wrap-row">
                    {chooseItems}
                </div>
            </div>
        </div>
    )
}


export default ChooseUs