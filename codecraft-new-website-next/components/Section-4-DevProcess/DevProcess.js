import './DevProcess.css'
import datas from './data.js'
import ProcessCard from './ProcessCard'

const DevProcess = () => {
    const items = datas.map(data =>
        <ProcessCard key={data.id}>{data}</ProcessCard>
    )

    return (
        <div className="section-4">
            <div className="container">
                <div className="section-title section-title-1">Our</div>
                <div className="section-title section-title-2">Development Process</div>
                <p>With Design thinking at heart and Agile methodologies as a practice, CodeCraft follows an “ideate design-prototype-build-test” method of development. Beginning with Conceptualization, we prototype your ideas, vision into a concrete requirement. Our projects are helmed by a domain specialist project manager who serves as a contact person. The engineering process comprises of small, focussed two-week sprint cycles with rigorous quality and feedback integrated. Every sprint ] ends with an addition to the product which is reviewed and tested by the client</p>
                <div className="section-4-container flex-wrap-row">
                    <div className="left-container flex-column">
                        {items}
                    </div>
                    <div className="section-4-image">
                        <img src="../../static/images/section-4/development-process.png" />
                    </div>
                </div>
            </div>
        </div >)
}

export default DevProcess