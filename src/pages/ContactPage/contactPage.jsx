import "./contactPage.css"
import { Nav } from "../../component/Nav/nav";
import { Footer } from "../../component/Footer/footer";
import { MdLocationPin , MdCall, MdEmail} from "react-icons/md";
export const ContactPage = () =>
{


    return(
        <div>
            
            <div className="navbar-comp">
            <Nav style={{backgroundColor: "#bcc5cc"}}/>
          </div>
<main className="contact-main">


<section className="demo-container">

<div>
<div className="contact-heading">CONTACT US</div>

<h1> Thank you for your interest in the AION Health Solution Pvt. Ltd
     To learn more about our company or products, please complete the form below.</h1>
     </div>


     <div className="demo-box">
     <div className="contact-img-container">
<img src="images/contact-img.svg" className="contact-img" alt="" srcset="" />
</div>
<form action="" className="demo-form">


<label htmlFor="" className="login-label">
        NAME
        <div className="name-input">
        <input type="text" placeholder="First Name"  className="contact-fields-box"/>
        <input type="text" placeholder="Last Name"  className="contact-fields-box"/>
        </div>
    </label>

    <label htmlFor="" className="login-label">
        ORGANIZATION
        <input type="text" placeholder="Organization Name"  className="contact-fields-box"/>
    </label>

    <label htmlFor="" className="login-label">
       MOBILE NUMBER
        <input type="number" placeholder="Enter Your Mobile No"  className="contact-fields-box"/>
    </label>

    <label htmlFor="" className="login-label">
       E-MAIL
        <input type="email" placeholder="Enter Your E-Mail" className="contact-fields-box"/>
    </label>

<label htmlFor="" className="message login-label">
    MESSAGE
<input type="text"  className="message contact-fields-box"/>
</label>

    <button className="contact-btn enter-btn">SEND</button>
    </form>
    </div>
</section>


<section className="contact-comp ">

<div className="contact-info">
<h1>CONTACT US</h1>

<p> <MdCall /><a className="conatct-link" href="tel:+919742442708 ">+919742442708 </a></p>
<p> <MdEmail /><a className="conatct-link" href="mailto:aionhealthsolutions@gmail.com">aionhealthsolutions@gmail.com</a></p>

</div>

<div className="address-info">
    
    <h1>ADDRESS</h1>
    <div className="address-comp">
    <div className="address-1">
<h2>OFFICE</h2>
<p> <a className="conatct-link" href="https://goo.gl/maps/um22GmukDiddAyA38">#74, Pipe Line Road, Prashanth Nagar, T Dasarahalli, Bangalore, Karnataka, India, 560057 </a> </p>
    </div>

    <div className="address-1">
    <h2>R&D CENTER</h2>
    <p> <a className="conatct-link" href="https://goo.gl/maps/GoUk5AFYrmjsSNZBA">Innovation Centre,Manipal Institute of Technology, MIT Inside Rd, Eshwar Nagar, Manipal, Karnataka 576104
 </a> </p>
        </div>
        </div>
</div>

</section>

</main>
<Footer />
        </div>
    )
}