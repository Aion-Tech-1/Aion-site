import "./footer.css"
import { BsLinkedin ,BsInstagram,BsTwitter } from "react-icons/bs";
import { MdLocationPin , MdCall, MdEmail} from "react-icons/md";
export const Footer =() =>
{

    return(
        <div>
<footer className="site-footer">

{/* <div className="contact-container">
<div className="contact">
    <span className="contact-icons"><MdEmail /></span>
    <p className="contact-desc"> <a className="conatct-link" href="mailto:aionhealthsolutions@gmail.com">aionhealthsolutions@gmail.com</a></p>
</div>

<div className="contact">
    <span className="contact-icons"><MdLocationPin /></span>
    <p className="contact-desc"><a className="conatct-link" href="https://goo.gl/maps/um22GmukDiddAyA38">#74, Pipe Line Road, Prashanth Nagar, T Dasarahalli, Bangalore, Karnataka, India, 560057 </a> </p>
</div>

<div className="contact">
    <span className="contact-icons"><MdCall /></span>
    <p className="contact-desc"><a className="conatct-link" href="tel:+919742442708 ">+919742442708 </a> </p>
</div>

</div> */}

<div className="footer-icons">

<a href="_blank" className="small-icons"><BsInstagram /></a>

<a href="_blank" className="small-icons"><BsTwitter /></a>

<a href="_blank" className="small-icons"><BsLinkedin /></a>

</div>

<p> <a href="http://" className="footer-links">Privacy Policy</a> | <a href="http://" className="footer-links">Terms Of Use</a></p>

<p className="feat-desc">© 2022 Aion Health Solutions Pvt. Ltd.</p>
</footer>
        </div>
    )
}