const InsightCard = (props) => (
    <div className="news-card flex-column">
        <div className="news-pic">
            <img src={props.children.image} />
        </div>
        <div className="news-body">
            <div className="news-date">{props.children.date}</div>
            <div className="news-name">{props.children.name}</div>
            <div className="news-about">{props.children.about}</div>
        </div>
    </div>

)

export default InsightCard;