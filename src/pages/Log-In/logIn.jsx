import { useState } from "react"
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
        <div>

<section className="login-section">

<div className="img-container">

<img src="images/log-in.png" alt="login-img" className="login-img"/>

</div>



<div className="login-component">

<div className="login-buttons">
    <button   className="login-btn"  onClick={LogInClickHandler}>Log-In</button>
    <button   className="login-btn" onClick={SignUpClickHandler}>Register</button>
</div>

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
    </div>


<div style={{display: signUpScreern}} className="signup-container">

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

    <button className="enter-btn">REGISTER</button>
 

</div>


</div>

<button style={{display: alert}} onClick={ () => setAlert("none")} className="alert-box">
LOGGED IN !
</button>

</section>



        </div>
    )
}