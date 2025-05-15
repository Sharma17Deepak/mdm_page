import hero from "./../assets/hero.png";
import banner from "./../assets/footer-banner.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="banner">
          <div className="info1">
            <h4>Sell on 1mdm.com</h4>
            <h1>Reach millions of B2B buyers globally</h1>
            <button className="btn1">Start Selling</button>
            <button className="btn2">Chat with consultant</button>
          </div>
          <div className="info2">
            <h2>26,000,000</h2>
            <p>active buyers globally</p>
            <br></br>
            <h2>400,000</h2>
            <p>product inquiries daily</p>
            <br></br>
            <h2>200</h2>
            <p>countries and regions represented</p>
          </div>
        </div>
      </div>
      <div className="hero2">
        <center>
          <h2>
            1mdm.com is a leading ecommerce platform that helps SMEs go global
          </h2>
        </center>
        <div className="video-data">
          <iframe
            className="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TN7iJyc5Uks?si=S6bEfomgsGkYue6d"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="data">
            <p>
              Connect with millions of business buyers from around the world.
            </p>
            <br />
            <p>
              Get the tools and know-how to build a successful ecommerce
              presence for your business.
            </p>
            <br />
            <p>
              Pocket more from each sale, with take rates as low as 0% in some
              cases.
            </p>
          </div>
        </div>
      </div>
      <div className="hero3">
        <h1>
          Largest number of products & categories of medical devices on a single
          place - 1mdm.com
        </h1>
        <h5>
          Connect with buyers worldwide for your product & start selling now.
        </h5>
      </div>
      <h2 className="grow">Grow your business with a suite of tools built for you</h2>
      <img src={hero} className="ss"/>
      <div className="hero4">
       <h2>Success stories from 1mdm.com sellers</h2> 

      </div>
      <div className="hero5">
        <h2>Ready to Grow Your Business?</h2>
        <br></br>
        <center>
        <button className="hero-btn">Start Selling</button>
        <button className="hero-btn2">Chat with consultant</button>
        </center>
      </div>
    </>
  );
};

export default Hero;
