import './App.css';
import { useState } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
function Veg() {

  const [quavegbiryani, setQuavegbiryani] = useState(0);
  const [quaidliDosa, setQuaidliDosa] = useState(0);
  const [quacurdrice, setQuacurdrice] = useState(0);
  const [quatomatorice, setQuatomatorice] = useState(0);
  const [qualemonrice, setQualemonrice] = useState(0);
 
  const handleClick = () => {
    alert('sorry for inconvenience Backend is not Yet Connected');
  };

 function myfunc(id,quan,price){
    let  ids = id;
  let  quantity = quan ;
  
 let  pri = price;
  let total = 0;
  if(quantity>0 && quantity!==0){
    total= pri * quantity;
    document.getElementById(ids).innerHTML="Pay ₹"+total ;
  }
 
  if(quantity<0){
    document.getElementById(ids).innerHTML="invalid";
  }

  }
  myfunc();
  return (
    <div className="App">

       {/* veg section */}

      <Navbar/>

             <section class="veg " id="veg">
                <h1 class="text-center">Veg Items</h1>
                <div class="row d-flex  m-0 p-0 g-5 justify-content-center"> 
                  <div style={{width:"25rem ;"}} class="col col-12 col-md-4 mb-5">
                   <div  class="card h-100">
                    <img  src="https://static.toiimg.com/thumb/53870704.cms?imgsize=142559&width=800&height=800" class="card-img-top"  alt="Lemon Rice"></img>
                    <div class="card-body">
          <h5 class="card-title">Lemon Rice</h5>
          <p class="card-text">Lemon Rice also known as chitranna or nimmakaya pulihora is a crunchy, flavorful and tangy rice dish.</p>
          <span class="price"> <b>price ₹40</b></span> <br></br>
          <b class="qty">Quantity: </b><button className='badge bg-secondary' onClick={()=> setQualemonrice(qualemonrice - 1)}>-</button>{qualemonrice}<button className='badge bg-secondary' onClick={()=> setQualemonrice(qualemonrice + 1)}>+</button><br></br> <br></br>
          <button class="btn btn-warning" id="LemonRice" onclick={myfunc("LemonRice",qualemonrice,40)}>₹ 0</button>
          <button className='buy btn btn-warning float-end'onClick={handleClick}>Buy Now</button>
        </div>
                   </div>
                 </div>
                   <div  style={{width:"25rem ;"}}  class="col col-12 col-md-4 mb-5">
                      <div class="card h-100">
                       <img src="https://www.cookclickndevour.com/wp-content/uploads/2017/10/tomato-rice-recipe-thakkali-sadham-1-500x500.jpg"class="card-img-top" alt="Tomato Rice"></img>
                       <div class="card-body">
          <h5 class="card-title">Tomato Rice</h5>
          <p class="card-text">Looking for an authentic Tomato Rice recipe? Here is a lip-smacking Tomato Rice that you can buy.</p>
          <span class="price"> <b>price ₹70</b></span> <br></br>
          <b class="qty">Quantity: </b><button className='badge bg-secondary' onClick={()=> setQuatomatorice(quatomatorice - 1)}>-</button>{quatomatorice}<button className='badge bg-secondary' onClick={()=> setQuatomatorice(quatomatorice + 1)}>+</button><br></br> <br></br>
          <button class="btn btn-warning" id="TomatoRice" onclick={myfunc("TomatoRice",quatomatorice,70)}>₹ 0</button>
          <button className='buy btn btn-warning float-end'onClick={handleClick}>Buy Now</button>
        </div>
                      </div>
                     </div>
                     <div  style={{width:"25rem ;"}}  class="col col-12 col-md-4 mb-5">
                      <div class="card h-100">
                       <img   src="https://www.vegrecipesofindia.com/wp-content/uploads/2016/07/curd-rice-2.jpg" class="card-img-top" alt="Curd Rice"></img>
                       <div class="card-body">
          <h5 class="card-title">Curd Rice</h5>
          <p class="card-text">Curd rice or thayir sadam is a popular South Indian rice variety that is served with a South Indian.</p>
          <span class="price"> <b>price ₹55</b></span> <br></br>
          <b class="qty">Quantity: </b><button className='badge bg-secondary' onClick={()=> setQuacurdrice(quacurdrice - 1)}>-</button>{quacurdrice}<button className='badge bg-secondary' onClick={()=> setQuacurdrice(quacurdrice + 1)}>+</button><br></br> <br></br>
          <button class="btn btn-warning" id="CurdRice" onclick={myfunc("CurdRice",quacurdrice,55)}>₹ 0</button>
          <button className='buy btn btn-warning float-end'onClick={handleClick}>Buy Now</button>
        </div>
                      </div>
                     </div>
                     <div  style={{width:"25rem ;"}}  class="col col-12 col-md-4 mb-5">
                      <div class="card h-100">
                       <img  src="https://www.kannammacooks.com/wp-content/uploads/idli-dosa-batter-recipe-from-scratch-wet-grinder-16.jpg" class="card-img-top" alt="Idli Dosa"></img>
                       <div class="card-body">
          <h5 class="card-title">Idli Dosa</h5>
          <p class="card-text">idli & Dosa are two of the healthiest and most popular South Indian breakfast foods.</p>
          <span class="price"> <b>price ₹65</b></span> <br></br>
          <b class="qty">Quantity: </b><button className='badge bg-secondary' onClick={()=> setQuaidliDosa(quaidliDosa - 1)}>-</button>{quaidliDosa}<button className='badge bg-secondary' onClick={()=> setQuaidliDosa(quaidliDosa + 1)}>+</button><br></br> <br></br>
          <button class="btn btn-warning" id="IdliDosa" onclick={myfunc("IdliDosa",quaidliDosa,65)}>₹ 0</button>
          <button className='buy btn btn-warning float-end'onClick={handleClick}>Buy Now</button>
        </div>
                      </div>
                     </div>
                     <div  style={{width:"25rem ;"}}  class="col col-12 col-md-4 mb-5">
                      <div class="card h-100">
                       <img  src="https://www.whiskaffair.com/wp-content/uploads/2020/08/Veg-Biryani-2-3.jpg" class="card-img-top" alt="Veg Biryani"></img>
                       <div class="card-body">
          <h5 class="card-title">Veg Biryani</h5>
          <p class="card-text">Hyderabadi Veg Biryani is a delicious medley of succulent vegetables, spices, ghee, saffron.</p>
          <span class="price"> <b>price ₹90</b></span> <br></br>
          <b class="qty">Quantity: </b><button className='badge bg-secondary' onClick={()=> setQuavegbiryani(quavegbiryani - 1)}>-</button>{quavegbiryani}<button className='badge bg-secondary' onClick={()=> setQuavegbiryani(quavegbiryani + 1)}>+</button><br></br> <br></br>
          <button class="btn btn-warning" id="VegBiryani" onclick={myfunc("VegBiryani",quavegbiryani,90)}>₹ 0</button>
          <button className='buy btn btn-warning float-end'onClick={handleClick}>Buy Now</button>
        </div>
                      </div>
                     </div>
               </div>
             </section>
        <Footer/>    
             <nav>
      <Link to="/Veg"></Link>
             </nav>
    </div>
     
    
  );


}

export default Veg;