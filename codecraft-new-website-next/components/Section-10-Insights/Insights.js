import './Insights.css'
import insights from './data.js'
import InsightCard from './InsightCard'

const Insights = () => {
    const newsItems = insights.map(insight =>
        <InsightCard key={insight.id} >{insight}</InsightCard>
    )
    return (
        <div className="section-10">
            <div className="container">
                <div className="section-title section-title-1 ">Insights</div>
                <div className="section-title section-title-2">And News</div>
                <div className="section-10-container flex-wrap-row center">
                    {newsItems}
                </div>
            </div>
        </div>
    )
}

export default Insights