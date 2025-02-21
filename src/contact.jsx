import {useState} from "react"

function Contact () {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState('');
    const [isChecked, setIsChecked] = useState(false);


    function handleCheck (){
        setIsChecked(!isChecked)
    }

    function changeName(e){
        const value = e.target.value;
        setFirstName(value); 
    }

    function changeLastName(e){
        setLastName(e.target.value)
    }

    function changeEmail(e){
        const value = e.target.value
        setEmail(value)
    }


    function changeQuery(e){
        setQuery(e.target.value)
    }
   

    const [message, setMessage] = useState('');
     function changeMessage(e){
        setMessage(e.target.value)
     }

    
    
    function handleSubmit(e){
        e.preventDefault() 
        if(!isChecked){
            alert("term and condition");
            return null;
        }
        console.log({firstName, lastName, email, query, message});
        
    }

    return (
        <main className="parent-div">
            <div className="sub-Div">
                <h1>Contact Us</h1>
                <form className="first-parent" onSubmit={handleSubmit}>
                    <div className="Names">
                        <div className="Names1">
                            <p>First Name *</p>
                            <input type="text" name="" id="" placeholder=" Enter your First Name" className="new1" value={firstName} onChange={changeName} />
                        </div>
                        <div className="Names1">
                            <p>Last Name *</p>
                            <input type="text" name="" id="" placeholder=" Enter your Last Name" className="new1" value={lastName} onChange={changeLastName} />
                        </div>
                    </div>
                    <div className="Email">
                        <p>Email Address *</p>
                        <input type="email" name="" id="" placeholder=" Enter your Email Address" className="new2" value={email} onChange={changeEmail}/>
                    </div>
                    <div className="called">
                            <p>Query Type *</p>
                        <div className="Input1">
                            <label htmlFor="" className="Type1">
                                <input className="rad" type="radio" checked = {query === "General Enquiry"} name="query" id="" value="General Enquiry" onChange={changeQuery}/>
                                <p>General Enquiry</p>
                            </label>
                            <label htmlFor=""className="Type1">
                                <input className="rad" type="radio" checked = {query === "Support Request"} name="query" id="" value="Support Request" onChange={changeQuery}/>
                                <p>Support Request</p>
                            </label>
                        </div>
                    </div>
                    <div className="new3a">
                        <p>Message *</p>
                        <textarea className="new3" name="" id="" placeholder="Enter your Message" value={message} onChange={changeMessage}></textarea>
                    </div>
                    <div className="check">
                        <input type="checkbox" name="" id="" value={isChecked} onChange={handleCheck} />
                        <p>I consent to being contacted by the team * </p>
                    </div>
                    <button className="btn" type="submit">Submit</button>
                </form>
            </div>
        </main>
    )
}
export default Contact;