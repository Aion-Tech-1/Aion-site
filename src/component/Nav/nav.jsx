import { useState } from "react"
import "./nav.css"

const Nav = () =>
{

const [navBar , setNavBar] = useState(false)
const [imgSrc , setImgSrc] = useState("images/aionLogo.png")
const [clr , setClr] = useState("white")
const changeBackground = () =>
{
    if(window.scrollY >= 660)
    {
        setNavBar(true)
        setImgSrc("images/aionLogo2.png")
        setClr("black")
    }
    else{
        setNavBar(false)
        setImgSrc("images/aionLogo.png")
        setClr("white")
    }
}

window.addEventListener('scroll',changeBackground)
   
    return(
        <div>
{/* <header  className="nav-header"> */}
<nav  className={navBar ? "nav-bar active": "nav-bar"}>

<div className="nav-logo-name">
            <img className="company-logo" src={imgSrc} alt="logo" />
           
        </div>


        <div className="nav-components">
<a className="nav-links active" to="/login" style={{color: clr}}> Product </a>
<a className="nav-links active" to="/wishlist" style={{color: clr}}> Technology </a>
<a className="nav-links active" to="/cart" style={{color: clr}}> Contact </a>  
<a className="nav-links active" to="/cart" style={{color: clr}}> Company </a>  
<a className="login-btn"  to="/cart" > Login</a>            

        </div>

</nav>
{/* </header> */}
        </div>
    )
}

export {Nav}