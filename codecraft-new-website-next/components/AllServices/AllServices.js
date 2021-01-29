import '../AllServices/AllServices.css'
import services from './data.js'

const AllServices = () => {
    const servicesAll = services.map(service => {
        const item = service.services.map(serviceName => (<div className="allServices-container">{serviceName}</div>))
        return (
            <div key={service.id} className="flex-column section-12-container">
                <div className="allServices">
                    <div className="allServices-name">{service.name}</div>
                    <div>{item}</div>
                </div>
            </div>
        )
    })
    return (<div className="section-12 container">
        <div className="flex-wrap-row"> {servicesAll}</div>
    </div>)
}

export default AllServices