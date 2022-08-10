import { useState } from "react";
import { Nav } from "../../component/Nav/nav";
import { Footer } from "../../component/Footer/footer";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import "./logIn.css"
export const LogIn = () =>
{

    const [logInScreern, setLogInScreen] = useState("flex");
    const [ signUpScreern, setSignUpScreen] = useState("none");
    const [ alert, setAlert] = useState("none");
    const LogInClickHandler = () =>
    {

   
    setSignUpScreen("none")
    setLogInScreen("flex")
    }

    const SignUpClickHandler = () =>
    {

    setLogInScreen("none")
    setSignUpScreen("flex")

    }



    return(
        <div className="page-div">
<Nav />
<section className="login-section">

<div className="one login-img-container">

{/* <img src="images/aionLogo.png" alt="login-img" className="login-img"/> */}

<h1>Welcome</h1>

<p>Start your journey with us</p>

<button className="register-btn">REGISTER</button>
</div>



{/* <div className="login-component"> */}

{/* <div className="login-buttons">
    <button   className="login-btn"  onClick={LogInClickHandler}>Log-In</button>
    
<button   className="login-btn" onClick={SignUpClickHandler}>Register</button>
</div> */}

<div style={{display: logInScreern}}  className="login-container">
    <label htmlFor="" className="login-label">
        USERNAME
        <input type="text"  className="input-fields"/>
    </label>

    <label htmlFor=""  className="login-label">
        PASSWORD
        <input type="password"  className="input-fields"/>
    </label>
    
    <button onClick={() => setAlert("block")} className="enter-btn">LOG IN</button>
   
<div className="alternate-login">

<span><FcGoogle /></span>

<span><GrFacebook /></span>
</div>

<a href="" className="login-link">Forgot Password</a>
    </div>
  


{/* <div style={{display: signUpScreern}} className="signup-container">

<label htmlFor="" className="login-label">
        NAME
        <div className="name-input">
        <input type="text"  className="input-fields"/>
        <input type="text"  className="input-fields"/>
        </div>
    </label>

    <label htmlFor="" className="login-label">
        EMPLOYEE ID
        <input type="text"  className="input-fields"/>
    </label>

    <label htmlFor="" className="login-label">
       MOBILE NUMBER
        <input type="number"  className="input-fields"/>
    </label>

    <label htmlFor="" className="login-label">
       E-MAIL
        <input type="email"  className="input-fields"/>
    </label>


    <label htmlFor=""  className="login-label">
        SET PASSWORD
        <input type="password"  className="input-fields"/>
    </label>

   
 

</div> */}


{/* </div> */}

<button style={{display: alert}} onClick={ () => setAlert("none")} className="alert-box">
LOGGED IN !
</button>

</section>

<Footer />

        </div>
    )
}