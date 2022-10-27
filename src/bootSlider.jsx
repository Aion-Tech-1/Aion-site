import Carousel from 'react-bootstrap/Carousel';
import "./sliderStyle.css";
function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item style={{backgroundColor:"#67E2EA"}}>
        <img
          className="d-block center"
          src="images/scientist.svg"
          alt="First slide"
          style={{height: 350,width: 300,color:'black'}}
        />
        <Carousel.Caption>
          <h2 style={{fontSize:40, fontWeight: 500 ,textAlign:'center'}}>ADVANCE TECHNOLOGY</h2>
          <p style={{fontSize: 25 }}>Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item style={{backgroundColor:"#67E2EA"}}>
        <img
          className="d-block center"
          src="images/medicalCare.svg"
          alt="Second slide"
          style={{height: 350,width: 300,color:'black'}}
        />
        <Carousel.Caption>
        <h2 style={{fontSize:40, fontWeight: 500 ,textAlign:'center'}}>GREAT SERVICE</h2>
          <p style={{fontSize: 25 }}>Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:"#67E2EA"}}>
        <img
          className="d-block center"
          src="images/CHECK.svg"
          alt="Third slide"
          style={{height: 350,width: 300,color:'black'}}
        />
        <Carousel.Caption>
        <h2 style={{fontSize:40, fontWeight: 500 ,textAlign:'center'}}>SIMPLE HANDLING</h2>
          <p style={{fontSize: 25 }}>Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;