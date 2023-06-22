import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
function Home() {
  
  return (
    
    <div className="App">
        <Navbar/>
<div className='home'>


                                                                              {/* ABOUT SECTION */}



<div id="home" className="row text-center">
  <div className="head">
    <h1>Food's Here</h1>
  </div>
  <p>
    <h3 className="text-white h3p">Welcome to Food's Here!</h3>
  </p>
  <div className="content text-white">
    
      <p>Wide Range of Delicacies: Our menu offers a diverse selection of mouth-watering dishes from various cuisines. <br/>
      Expert Chefs: Our team of experienced chefs are passionate about cooking and ensure that every dish is prepared to <br/> perfection.

      Comfortable Ambience: Enjoy a cozy and welcoming atmosphere that adds to your overall dining pleasure. <br/>
      Exceptional Service: Our staff is dedicated to providing you with attentive and friendly service, making your  <br/>visit memorable.
      Affordable Prices: We believe that great food shouldn't break the bank, which is why we offer competitive and <br/> reasonable prices.
      Visit us today and experience the delightful flavors of Food's Here. We look forward to serving you!</p>
  </div>
</div>

        <div className="row  text-center">
          <div className="content mb-2 mt-5 h3p">
            <h3>Get Your Favorites Here</h3>
           
          </div>
        </div>
        </div>

      <section class="about" id="about">
             
             <div class="row text-center">
               <h1>About Us</h1>
               <div class="content offset-md-2 offset-lg-2 offset-xl-2 col-12 col-md-8 col-lg-8 col-xl-8 mb-5 ">
                <p class="about-para "> Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id.  </p>   
               </div>
             </div>
       </section>
       <Footer/>
<nav>
      <Link to="/">  </Link>
     </nav>
    </div>
    
    
  );


}

export default Home;