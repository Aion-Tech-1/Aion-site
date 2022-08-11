import "./productPage.css";

export const ProductPage = () => {
  return (
    <div className="product-page">
      <section className="product-overview">


        <div className="prod-info">
          <div className="overview">PRODUCT OVERVIEW</div>

          <div className="prod-heading">
            The first powered orthotic device with shoulder assist.
          </div>

          <p className="prod-desc">
            The AION Assist — a one-of-a-kind wearable assistive device
            that supports patients with upper-limb weakness or injury in
            completing essential activities of daily living.
          </p>

          <div className="button-comp">
            <button className="prod-btn">BROCHURE</button>
            <button className="prod-btn">PRODUCT DEMO</button>
          </div>
        </div>

        <div className="prod-img-container">
          <img src="images/PROD-IMG1.PNG" className="prod-img" alt="" srcset="" />
        </div>
      </section>


      <section className="prod-section">

<div className="prod-img2"> <img src="" className="prod-img2" alt="" srcset="" /></div>

<div className="section-info">


</div>
      </section>


      <section className="prod-section2">

      </section>
    </div>
  );
};
