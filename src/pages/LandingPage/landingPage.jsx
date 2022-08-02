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
     

      <Footer />

    </div>
  );
};

export { LandingPage };
