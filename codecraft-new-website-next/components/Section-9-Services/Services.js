import './Services.css'
import services from './data.js'
import ServiceCard from './ServiceCard'

const Services = () => {
    const serviceItems = services.map(service =>
        <ServiceCard key={service.id}>{service}</ServiceCard>
    )

    return (
        <div className="section-9 grey ">
            <div className="container flex-column  ">
                <div className="section-title section-title-1">Other</div>
                <div className="section-title section-title-2">Services</div>
                <div className="section-9-container flex-wrap-row">
                    {serviceItems}
                </div>
            </div>

        </div >)
}

export default Services