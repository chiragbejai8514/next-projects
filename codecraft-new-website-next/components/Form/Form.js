import '../Form/Form.css'

import React, { useState } from 'react'

const DevProcess = () => {

    const [userName, setUsername] = useState('')
    const [howCanWeHelp, setHowCanWeHelp] = useState('')


    const howCanWeHelpHandler = (event) => {
        setHowCanWeHelp(event.target.value)
    }
    return (
        // <form>
        //     <div>
        //         <label>Uesrname</label>
        //         <input type='text' value={userName} onChange={userNameHandler} />
        //     </div>
        // </form>

        <section className="section-form form">
            <div className="container">
                <div className="section-title">Start a</div>
                <div className="section-title section-title-2 font-montserrat" id="contact-section">Project with CodeCraft</div>
                <div className="note text-center" id="contact-form-title">Fill in this form or <a
                    href="mailto:%63%6f%6e%74%61%63%74%75%73%40%63%6f%64%65%63%72%61%66%74%2e%63%6f%2e%69%6e">send us an
        e-mail</a> </div>
                <h4 id="form-status-message"></h4>
                <button className="custom-button" id="try-again-btn" onClick="tryAgainContactForm()">RETRY</button>
                <form id="contact-form" >
                    <div className="flex-wrap-row">
                        <div className="full">
                            <input type="text" placeholder=" " name="projectgoal" size="30" value={howCanWeHelp} onChange={howCanWeHelpHandler} />
                            <span className="floating-label">How can we help?</span>
                            <div className="error-msg" id="work-field-err">This field can not be empty</div>
                        </div>
                        <div className="half">
                            <input type="text" size="50" name="timeline" placeholder=" " />
                            <span className="floating-label">Timeline (optional)</span>
                        </div>
                        <div className="half">
                            <div className="range-input-label-wrapper">
                                <label for="">My budget is <span id="amount"></span></label>
                                <div className="radio-buttons">
                                    <label className="radio-btn-container">
                                        <input className="radio-btn" type="radio" checked="checked" name="radio" value="INR"
                                            oninput="currencyChanged(this.value)" />
                                        <span className="checkmark">INR</span>
                                    </label>
                                    <label className="radio-btn-container">
                                        <input className="radio-btn" type="radio" name="radio" value="USD"
                                            oninput="currencyChanged(this.value)" />
                                        <span className="checkmark">USD</span>
                                    </label>
                                </div>
                            </div>
                            <input id="amount-range" type="range" className="custom-range" value="1" min="0" max="4"
                                oninput="amountSelected(this.value)" />
                        </div>
                        <div className="half">
                            <input type="text" placeholder=" " name="name" size="30" />
                            <span className="floating-label">Name</span>
                            <div className="error-msg" id="name-field-err">Please enter your name</div>
                        </div>
                        <div className="half">
                            <input type="text" placeholder=" " name="company" size="100" />
                            <span className="floating-label">Company or organisation</span>
                            <div className="error-msg" id="company-field-err">This field can not be empty</div>
                        </div>
                        <div className="half">
                            <input type="text" placeholder=" " name="phone" size="30" />
                            <span className="floating-label" id="phone-label">Phone</span>
                            <div className="error-msg" id="phone-field-err">Phone number can only contain digits</div>
                        </div>
                        <div className="half">
                            <input type="text" placeholder=" " name="email" size="30" />
                            <span className="floating-label" id="email-label">Email</span>
                            <div className="error-msg" id="email-field-err">You have entered an invalid e-mail address, try again</div>
                        </div>
                        <div className="full">
                            <input type="text" placeholder=" " size="200" />
                            <span className="floating-label">Tell us about your project (optional)</span>
                        </div>
                        <div className="full text-center">
                            <button type="submit" className="btn">SEND</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}


export default DevProcess