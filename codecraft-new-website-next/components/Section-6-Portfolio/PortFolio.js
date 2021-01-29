import './PortFolio.css'
import Link from 'next/link'
import portfolios from './data.js'
import PortFolioCard from './PortfolioCard'


const PortFolio = () => {

    const newsItems = portfolios.map(portfolio =>
        <PortFolioCard key={portfolio.id}>{portfolio}</PortFolioCard>
    )
    return (
        <div className="section-6 grey">
            <div className="container flex-column center ">
                <div className="section-title section-title-1">Our</div>
                <div className="section-title section-title-2">PortFolio</div>
                <div className="section-6-container flex-wrap-row jc-space_even">
                    {newsItems}
                </div>
                <Link href="/about">
                    <button className="btn" >LOAD MORE</button>
                </Link>
            </div >
        </div>
    )
}

export default PortFolio