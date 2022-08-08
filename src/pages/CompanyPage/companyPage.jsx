import "./companyPage.css"

import { Nav } from "../../component/Nav/nav";
import { Footer } from "../../component/Footer/footer";
export const CompanyPage = () =>
{
    return(
        <div>
<Nav />
<main className="company-page">

<section className="about-company">

<div className="img-container">
    <img src="images\aboutUs.jpg" alt="about-us image" className="company-img" />
</div>

<div className="text-container">
    <h1>About AION</h1>

<p>Founded in 2002, Gilero began as an engineering design firm with a focus on single-use medical
         device products. Since then, Gilero has grown into a one-stop shop for the design, development and contract manufacturing of everything
         from consumable medical devices to complex electromechanical drug delivery systems.</p>

         <p>
         Gilero was conceived by three engineers who spent mornings, nights and weekends 
         together brainstorming ideas for how they could use their product development skills and 
         interest in medical devices to start their own company. The first thing they decided on, 
         before the company even had a purpose, was its name: Gilero. 
         It’s a combination of the last syllables of the founders last names – koroGI, mosLER and dimeO.
         </p>

         <p>
         The company continues to grow its manufacturing capabilities and office locations. 
         2019 growth plans included the opening of a new manufacturing assembly facility in Pittsboro, NC, a design center in Southern California, and an expansion of Medacys – Gilero’s joint venture toolmaking and medical injection molder in Shenzhen, China. The company opened a Chicago-based design center at the end of 2021, and a manufacturing facility in Tijuana, Mexico in early 2022.
          Future plans for expansion include added design centers in New Jersey and Ireland.
         </p>
</div>

</section>


<section className="vision-section">

<div className="vision-heading">

<div className="line"></div>
<h1 className="vision-header">VISION </h1>
<div className="line"></div>
</div>
<div className="vision-text">

<p>To reduce the cost of healthcare, enhance clinical experience and productivity,
     and improve patient outcomes through workflow automation. The Murata Vios team is comprised of 
    leaders in medical technology development who bring disruptive healthcare solutions to market</p>

</div>


</section>


<section className="vision-section">

<div className="vision-heading">

<div className="line"></div>
<h1 className="vision-header">MISSION </h1>
<div className="line"></div>
</div>

<div className="vision-text">

<p>To utilize IoT sensors, remote monitoring 
    services and a big data approach to cost-effectively manage the oversight of
     patients across the entire continuum of care, and automate common patient clinical 
     workflows. The Vios Monitoring System seeks to reduce hospital costs, deliver greater clinician productivity, 
    increase operational efficiency, and improve patient outcomes.</p>

</div>


</section>

<section className="supported-section">

<h1 className="logo-header">BACKED BY</h1>

<div className="logo-container">

<img src="images/MUTBILOGO.png" className="support-logo" alt="mutbi-logo"  />
<img src="images/nidhi_logo.png" className="support-logo" alt="nidhi_logo"  />
<img src="images/vc_logo.png" className="support-logo" alt="vc_logo"  />
<img src="images/m-gok_incu.png" className="support-logo" alt="m-gok_incu"  />

</div>
</section>

</main>
<Footer />
        </div>
    )
}