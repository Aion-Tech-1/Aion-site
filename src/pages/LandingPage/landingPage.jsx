import "./landingPage.css"

import { Nav } from "../../component/Nav/nav"
const LandingPage = () =>
{


return (
<div>

<Nav />

<main className="landing-main">

<section className="carousel-container">
<div className="carousel-info">
                    <div className="carousel-heading">THE FUTURE OF MEDICAL-GRADE
REFRIGERATION</div>

<p className="carousel-desc">
A Portable temperature-regulated carrier for transport of biologicals.
Blackfrog Tech has developed Emvólio- a patented rapid cooling technology for safe last-mile transport of vaccines, insulin, breast-milk, blood-serums, medications & specimens with minimal freeze-thaw cycles. 
The product is eco friendly and compliant with IEC 60601 medical device standard.
</p>
              <div>      
             <button className="btn">Explore!</button>       
             </div>
                </div>
</section>

</main>

</div>
)

}

export {LandingPage}