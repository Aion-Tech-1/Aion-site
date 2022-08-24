import "./productPage.css";
import { FcApproval } from "react-icons/fc";
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


      {/* <section className="prod-section">

<div className="prod-img2-container"> <img src="images/PROD-IMG2.png" className="prod-img2" alt="" srcset="" /></div>

<div className="section-info">
<p className="info prod-desc">
Springs at the shoulder and elbow help arms feel weightless and support existing strength for smooth, natural movement. A connected battery pack helps 
users adjust to different weighted objects like a spoon, cell phone or water bottle.
          </p>

<div className="prod-logo-comp">
<div className="logo-box">
<img src="images/brain-prod-icon.svg" className="prod-logo" alt="prod-logo" srcset="" />
<p>Intuitive</p>
</div>
<div className="logo-box">
<img src="images/heart-beat-icon.svg" className="prod-logo" alt="prod-logo" srcset="" />
<p>Lorem</p>
</div>
<div className="logo-box">
<img src="images/hospital-network-icon.svg" className="prod-logo" alt="prod-logo" srcset="" />
<p>Data Network</p>
</div>
<div className="logo-box">
<img src="images/engine-gears-icon.svg" className="prod-logo" alt="prod-logo" srcset="" />
<p>Easy Calibration</p>
</div>
<div className="logo-box">
<img src="images/medical-device-icon.svg" className="prod-logo" alt="prod-logo" srcset="" />
<p>Data Analytics</p>
</div>
<div className="logo-box">
<img src="images/tech-icon.svg" className="prod-logo" alt="prod-logo" srcset="" />
<p>Futuristic Tech</p>
</div>

</div>

</div>
      </section> */}

{/* 
      <section className="prod-section2">

      </section> */}


      <section className="prod-1">

<div className="image-comp">
  <img src="images/product-bedside-monitor.jpg" alt="" className="product-image" srcset="" />
</div>

<div className="about-prod">
<div className="prod-name">BEDSIDE MONITOR</div>

<div className="prod-desc">
The Aion Bedside Monitor processes and displays
 data from the chest sensor and other third-party sensors.
</div>

<div className="product-features">

<div className="feat-points">  <span> <FcApproval /></span> Battery operated or AC power</div>
<div className="feat-points">  <span> <FcApproval /></span> Small, lightweight wearable design</div>
<div className="feat-points"> <span> <FcApproval /></span> Diagnostic quality 7-lead ECG</div>
<div className="feat-points"> <span> <FcApproval /></span>Adapter with detachable pulse ox</div>
<div className="feat-points"> <span> <FcApproval /></span> Compatible with standard ECG patches</div>


</div>
</div>
      </section>



      <section className="prod-2 prod-1">



<div className="about-prod">
<div className="prod-name">CENTRAL SERVER AND CLOUD CONNECTION</div>

<div className="prod-desc">
Aion makes IT simple, handling your server and infrastructure-related needs
Aion devices and software operate on a private, encrypted network.
 All data is encrypted in transit and at rest.
</div>

<div className="product-features">

<div className="feat-points">  <span> <FcApproval /></span> Container orchestration and redundant VPNs ensure system availability</div>
<div className="feat-points">  <span> <FcApproval /></span> 24/7/365 IT support access for Aion-related issues</div>
<div className="feat-points"> <span> <FcApproval /></span> Redundant site-to-site VPN’s are configured to ensure resource availability</div>
<div className="feat-points"> <span> <FcApproval /></span>HIPAA-compliant</div>
{/* <div className="feat-points"> <span> <FcApproval /></span> Compatible with standard ECG patches</div> */}


</div>
</div>

<div className="image-comp">
  <img src="images/cloud-img.png" alt="" className="product-image" srcset="" />
</div>
      </section>




      <section className="prod-3 prod-1">

      <div className="image-comp">
  <img src="images/ecg_image.png" alt="" className="product-image" srcset="" />
</div>

<div className="about-prod">
<div className="prod-name">CENTRAL STATION MONITOR AND SOFTWARE</div>

<div className="prod-desc">
The Aion Central Station Monitor and Software solution enables the monitoring of multiple 
patients simultaneously. It intuitively navigates between screens to view vital signs summary
 information or customized patient reports. Customizable alarms notify when established limits
  have been exceeded.
 Viewing options facilitate easy retrieval and review of all alarm-related information.
</div>

<div className="product-features">

<div className="feat-points">  <span> <FcApproval /></span> View 12 patients on a single central station monitor</div>
<div className="feat-points">  <span> <FcApproval /></span> Annotation options for recording notes</div>
<div className="feat-points"> <span> <FcApproval /></span> Data is automatically stored, easily retrieved</div>
<div className="feat-points"> <span> <FcApproval /></span>Event reports with corresponding
clinical data</div>
{/* <div className="feat-points"> <span> <FcApproval /></span> Compatible with standard ECG patches</div> */}


</div>
</div>


      </section>


    </div>
  );
};
