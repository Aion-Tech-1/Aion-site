import "./landingPage.css";
import { Footer } from "../../component/Footer/footer";
import { Nav } from "../../component/Nav/nav";
import { FcApproval } from "react-icons/fc";
import AOS from 'aos';
import 'aos/dist/aos.css';
import DarkVariantExample from "../../bootSlider";
import Typewriter from "typewriter-effect"
import { useEffect } from "react";

const LandingPage = () => {


useEffect(()=>{
  AOS.init({duration: 2000})
},[])

  return (
    
    <div  className="landing-page">
            <Nav />
      <main  className="landing-main">
    
        <section className="carousel-container">
       
          <div className="carousel-info">
            <div className="carousel-heading">
            THE FUTURE OF MEDICAL-GRADE
       
            <Typewriter 
  options={{
    strings: ["BEDSIDE MONITOR", "MEDICAL-GRADE","CLOUD SYSTEMS"],
    autoStart: true,
    loop: true,
    skipAddStyles:true,
  }} 
/>
               
</div>
          
        

            <p className="carousel-desc">
              A Portable temperature-regulated carrier for transport of
              biologicals. Blackfrog Tech has developed Emvólio- a patented
              rapid cooling technology for safe last-mile transport of vaccines,
              insulin, breast-milk, blood-serums, medications & specimens with
              minimal freeze-thaw cycles. The product is eco friendly and
              compliant with IEC 60601 medical device standard.
            </p>
            <div className="btn-comp">
           
              <button className="landing-btn">Explore!</button>
              </div>
          </div>
        </section>
        </main>
        <div className="section-heading">
          <h1>FEATURES</h1>
        </div>
        <section className="feature-section">
          <div  className="feature-box">

            <img
              className="feature-logo"
              src="images/scientist.svg"
              alt="feature-img"
            />

            <h2>ADVANCE TECHNOLOGY</h2>

            <p className="feat-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex! 
            </p>
          </div>

          <div  className="feature-box">
            <img
              className="feature-logo"
              src="images/medicalCare.svg"
              alt="feature-img"
            />

            <h2>GREAT SERVICE</h2>

            <p className="feat-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex!
            </p>
          </div>

          <div  className="feature-box">
            <img
              className="feature-logo"
              src="images/CHECK.svg"
              alt="feature-img"
            />

            <h2>SIMPLE HANDLING</h2>

            <p className="feat-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex!
            </p>
          </div>
        </section>
        
        {/* -------- */}

        {/* <section className="stat-container">

<div className="number-sphere">
3766
</div>

<div className="stat carousel-desc"> 

              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus minima expedita aspernatur maiores unde
              laudantium sed eveniet quis! Nihil rem
            
            </div>

        </section>

       

           <section className="stat-container">


<div className="stat carousel-desc"> 

              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus minima expedita aspernatur maiores unde
              laudantium sed eveniet quis! Nihil rem
            
            </div>

            <div className="number-sphere">
183
</div>

        </section> ---------*/}


<section className="prod-2 prod-1">



<div data-aos="slide-right" className="about-prod">
<div className="prod-name">CENTRAL SERVER AND CLOUD CONNECTION</div>

<div className="prod-desc">
Aion makes IT simple, handling your server and infrastructure-related needs
Aion devices and software operate on a private, encrypted network.
 All data is encrypted in transit and at rest.
</div>

<div className="product-features">

<div className="feat-points">  <span> <FcApproval /></span> Container orchestration and redundant VPNs ensure system availability</div>
<div className="feat-points">  <span> <FcApproval /></span> 24/7/365 IT support access for Aion-related issues</div>
<div className="feat-points"> <span> <FcApproval /></span> Redundant site-to-site VPN's are configured to ensure resource availability</div>
<div className="feat-points"> <span> <FcApproval /></span>HIPAA-compliant</div>



</div>
</div>

<div data-aos="slide-left" className="image-comp">
  <img src="images/our-solution.png" alt="" className="product-image" srcset="" />
</div>
      </section>


      < DarkVariantExample/>




     <section data-aos="fade-right" className="info-modal one">


<div className="info-desc">

<div className="info-heading">Remote Monitoring Services</div>

<div className="info-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
 Voluptatum minus tenetur, odit nemo, doloremque qui earum blanditiis</div>

</div>

<div className="info-disp">

<img src="images/info_img_1.jpg" alt="info-img" className="info-img" />

</div>

     </section>

     <section data-aos="fade-left" className="info-modal two">


     <div className="info-disp">

<img src="images/info_img_2.jpg" alt="info-img" className="info-img" />
</div>

<div className="info-desc">

<div className="info-heading">Remote Monitoring Services</div>

<div className="info-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
 Voluptatum minus tenetur, odit nemo, doloremque qui earum blanditiis</div>

</div>






     </section>



<section className="demo-section ">

<div className="demo-info">
  <div className="demo-heading">The Time is Right for the Aion Monitoring System</div>


<div className="info-content">
Learn how your care facility can reduce costs and improve care by implementing the Aion Monitoring System.
</div>


</div>

<div className="btn-comp">
           
           <button className="landing-btn">Explore!</button>
           </div>


</section>

      <Footer />

   

  
    </div>
  );
};

export { LandingPage };
