import './Offering.css'
import OfferingCard from './OfferingCard'
import React, { useState, useEffect } from 'react'
import data from './data.js'

const Offering = () => {

    const [items] = useState(data);
    const carditems = items.map(item =>
        <div key={item.id} className="section-2-card flex-row">
            <div className="card-div">
                <img src={item.image} />
            </div>
            <OfferingCard>{item}
            </OfferingCard>
        </div>
    )

    return (
        //Section-2-Offering start
        <div className="section-2 container flex-column ">
            <div className="section-title section-title-1">Our Offerings In</div>
            <div className="section-title section-title-2">Mobile App Development</div>
            <div className="section-2-container flex-column">
                {carditems}
            </div>
        </div>
    )

}
export default Offering