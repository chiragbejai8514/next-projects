const serviceCard = props => (
    <div className="service-card flex-row">
        <div className="service-pic">
            <img src={props.children.image} />
        </div>
        <div className="info-container">
            <div className="service-name">{props.children.name}</div>
            <div className="service-info">{props.children.about}</div>
        </div>
    </div>
)

export default serviceCard 