function Contact () {
    return (
        <main className="parent-div">
            <div className="sub-Div">
                <h1>Contact Us</h1>
                <div className="first-parent">
                    <div className="Names">
                        <div className="Names1">
                            <p>First Name *</p>
                            <input type="text" name="" id="" placeholder=" Enter your First Name" className="new1" />
                        </div>
                        <div className="Names1">
                            <p>Last Name *</p>
                            <input type="text" name="" id="" placeholder=" Enter your Last Name" className="new1" />
                        </div>
                    </div>
                    <div className="Email">
                        <p>Email Address *</p>
                        <input type="email" name="" id="" placeholder=" Enter your Email Address" className="new2"/>
                    </div>
                    <div className="called">
                            <p>Query Type *</p>
                        <div className="Input1">
                            <label htmlFor="" className="Type1">
                                <input className="rad" type="radio" name="" id=""/>
                                <p>General Enquiry</p>
                            </label>
                            <label htmlFor=""className="Type1">
                                <input className="rad" type="radio" name="" id="" />
                                <p>Support Request</p>
                            </label>
                        </div>
                    </div>
                    <div className="new3a">
                        <p>Message *</p>
                        <textarea className="new3" name="" id="" placeholder="Enter your Message"></textarea>
                    </div>
                    <div className="check">
                        <input type="checkbox" name="" id="" />
                        <p>I consent to being contacted by the team * </p>
                    </div>
                    <button className="btn">Submit</button>
                </div>
            </div>
        </main>
    )
}
export default Contact;