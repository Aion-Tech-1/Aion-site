import "./landingPage.css";
import { Footer } from "../../component/Footer/footer";
import { Nav } from "../../component/Nav/nav";
const LandingPage = () => {
  return (
    <div className="landing-page">
         
      <main className="landing-main">
      <Nav />
        <section className="carousel-container">
       
          <div className="carousel-info">
            <div className="carousel-heading">
              THE FUTURE OF MEDICAL-GRADE REFRIGERATION
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
           
              <button className="btn">Explore!</button>
              </div>
          </div>
        </section>
        </main>
        <div className="section-heading">
          <h1>FEATURES</h1>
        </div>
        <section className="feature-section">
          <div className="feature-box">
            <img
              className="feature-logo"
              src="images/scientist.svg"
              alt="feature-img"
            />

            <h2>ADVANCE TECHNOLOGY</h2>

            <p className="feat-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus minima expedita aspernatur maiores unde
              laudantium sed eveniet quis! Nihil rem
            </p>
          </div>

          <div className="feature-box">
            <img
              className="feature-logo"
              src="images/medicalCare.svg"
              alt="feature-img"
            />

            <h2>GREAT SERVICE</h2>

            <p className="feat-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus minima expedita aspernatur maiores unde
              laudantium sed eveniet quis! Nihil rem
            </p>
          </div>

          <div className="feature-box">
            <img
              className="feature-logo"
              src="images/CHECK.svg"
              alt="feature-img"
            />

            <h2>SIMPLE HANDLING</h2>

            <p className="feat-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus minima expedita aspernatur maiores unde
              laudantium sed eveniet quis! Nihil rem
            </p>
          </div>
        </section>

        {/* -------- */}

        <section className="stat-container">

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

           {/* -------- */}

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

        </section>
     

     <section className="info-modal one">


<div className="info-desc">

<div className="info-heading">Remote Monitoring Services</div>

<div className="info-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
 Voluptatum minus tenetur, odit nemo, doloremque qui earum blanditiis</div>

</div>

<div className="info-disp">

<img src="images/info_img_1.jpg" alt="info-img" className="info-img" />

</div>

     </section>

     <section className="info-modal two">


     <div className="info-disp">

<img src="images/info_img_2.jpg" alt="info-img" className="info-img" />
</div>

<div className="info-desc">

<div className="info-heading">Remote Monitoring Services</div>

<div className="info-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
 Voluptatum minus tenetur, odit nemo, doloremque qui earum blanditiis</div>

</div>






     </section>



<section className="demo-section two">

<div className="demo-info">
  <div className="demo-heading">The Time is Right for the Aion Monitoring System</div>


<div className="info-content">
Learn how your care facility can reduce costs and improve care by implementing the Aion Monitoring System.
</div>


</div>

<div className="demo-btns">

  <button className="req-btn"> REQUEST DEMO</button>
  <button className="broch-btn"> GET BROCHURE</button>
</div>


</section>

      <Footer />

    </div>
  );
};

export { LandingPage };
