import datas from './data.js'
import ProcessCard from '../Section-4-DevProcess/ProcessCard'
import './Industries.css'

const Industries = () => {

    const items = datas.map(data =>
        <ProcessCard key={data.id}>{data}</ProcessCard>
    )

    return (
        <div className="section-5 grey center">
            <div className="container">
                <div className="section-title section-title-1">Industries</div>
                <div className="section-title section-title-2">We Serve</div>
                <div className="industries flex-wrap-row center">
                    {items}
                </div>
            </div>
        </div >)
}

export default Industries