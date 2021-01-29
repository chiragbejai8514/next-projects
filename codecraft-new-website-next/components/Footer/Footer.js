import './Footer.css'

const Footer = () => {
    return (
        <React.Fragment>
            <a className="scroll-top" href="#"><span className="icon-angle-double-up"></span></a>
            <div className="footer">
                <div className="container">
                    <div className="footer-body">
                        <div className="social-media-links">
                            <a href="https://medium.com/@CodeCraft" target="_blank"><span className="icon-medium"></span></a>
                            <a href="https://in.linkedin.com/company/codecraft-technologies-private-limited" target="_blank"><span
                                className="icon-linkedin2"></span></a>
                            <a href="https://twitter.com/codecrafttech" target="_blank"><span className="icon-twitter"></span></a>
                            <a href="https://www.facebook.com/CodeCraft" target="_blank"><span className="icon-facebook"></span></a>
                        </div>
                        <p className="slogan">Driving innovation with passion</p>
                        <h4 className="footer-logo">
                            <a href="#">CodeCraft </a><small className="color-white">Technologies</small>
                        </h4>
                    </div>
                    <div className="last">
                        <p>Copyright © 2017</p>
                        <a href="#">CodeCraftTechnologies Pvt. Ltd</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer