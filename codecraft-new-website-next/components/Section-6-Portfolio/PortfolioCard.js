import './PortFolio.css'


const PortfolioCard = (props) => (
    <div className="port-folio-card">
        <div className="Pcard-wrapper">
            <a>
                <div className="Pcard-img">
                    <img src={props.children.image} />
                    <div className="Pcard-name">
                        <div className="Pcard-heading Pcard-heading-1">{props.children.name}</div>
                        <div className="Pcard-heading Pcard-heading-2">{props.children.field}</div>
                    </div>
                </div>
                {/* <div className="description">{props.children.about} </div> */}
            </a>
        </div>
    </div>
)


export default PortfolioCard;