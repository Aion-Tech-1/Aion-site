import "./footer.css"
import { BsLinkedin ,BsInstagram,BsTwitter } from "react-icons/bs";
// import { MdLocationPin , MdCall, MdEmail} from "react-icons/md";
export const Footer =() =>
{

    return(
        <div>
<footer className="site-footer">


<div className="footer-icons">

<a href="_blank" className="small-icons"><BsInstagram /></a>

<a href="_blank" className="small-icons"><BsTwitter /></a>

<a href="_blank" className="small-icons"><BsLinkedin /></a>

</div>

<p className="footer-info"> <p className="feat-desc">© 2022 Aion Health Solutions Pvt. Ltd.</p> <a href="http://" className="footer-links">Privacy Policy</a>   <a href="http://" className="footer-links">Terms Of Use</a></p>


</footer>
        </div>
    )
}