import React from "react";
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin_icon from '../../assets/linkedin_icon.svg'
import github_icon from '../../assets/github_icon.svg'




const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9b9312b4-40f0-498c-8c2b-519f0ec3a88a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        alert(result)
      } else {
        console.log("Error", data);
        setResult(data.message);
        alert(result)
      }
    }; 
  

    return ( 
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt=""/>
                </div>
            <div className="contact-section">
                <div className="contact-left">
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="mail-icon" /><p>rkiana1381@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                        <img src={call_icon} alt="call-icon" /><p>+90 (552) 814 68 98</p>
                        </div>
                        <div className="contact-detail">
                        <img src={linkedin_icon} className="linkedin-icon" alt="linkedin-icon" /><a href="www.linkedin.com/in/kiana-ramzanzadeh-1551292b4" target="
                        _blank"><p>Linkedin page</p></a>
                        </div>
                        <div className="contact-detail">
                        <img src={github_icon} alt="github-icon" className="github-icon"/><a href="https://github.com/KianaRm" target="_blank"><p>Github page</p></a>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                   <label htmlFor="">Your name</label>
                   <input type="text" placeholder="Enter your name" name="name" />
                   <label htmlFor="">Your Email</label>
                   <input type="email" placeholder="Enter your email" name="email"/>
                   <label>Write your message here</label>
                   <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                   <button type="submit" className="contact-submit">Submit</button>
                </form>
            </div>
        </div>
       
    )
}

export default Contact 