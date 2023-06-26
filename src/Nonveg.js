import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from "react";
import { Link } from 'react-router-dom';

function Nonveg() {
  const [qua , setQua] = useState(0);
  const [quaFish, setQuaFish] = useState(0);
  const [quaegg, setQuaegg] = useState(0);
  const [quamutton, setQuamutton] = useState(0);
  const  [quachicken, setQuachicken] = useState(0);


  
    const handleClick = () => {
      alert('sorry Backend is not Yet Connected');
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
      
      
      <Navbar/>
      
      {/* non veg section */}


             <section class="non-veg " id="non-veg">
                <h1 class="text-center">Non-Veg Items</h1>
                <div class="row d-flex  m-0 p-0 g-5 justify-content-center"> 
                  <div style={{width:"25rem ;"}} class="col col-12 col-md-4 mb-5">
                   <div  class="card h-100">
                    <img src="   https://www.modernhoney.com/wp-content/uploads/2019/04/Chinese-Lemon-Chicken-7-500x500.jpg" class="card-img-top"  alt="lemon-chicken"></img>
                     <div  class="card-body">
                       <h5 class="card-title border-bottom-card-title">Lemon Chicken</h5>
                       <p class="card-text">This parmesan-crusted Lemon Chicken which is  favorite dish for Indians. </p>
                       <span class="price"><b>price ₹60</b> </span> <br></br>
                       <b class="qty">Quantity: </b><button className='badge bg-secondary' onClick={()=> setQua(qua - 1)}>-</button>{qua}<button className='badge bg-secondary' onClick={()=> setQua(qua + 1)}>+</button><br></br> <br></br>
                       <button class="btn btn-warning" id="lemonchickenbtn" onclick={myfunc("lemonchickenbtn",qua,60)}>₹ 0</button>
                       <button className='buy btn btn-warning float-end'onClick={handleClick}>Buy Now</button>
                     </div>
                   </div>
                 </div>
                   <div  style={{width:"25rem ;"}}  class="col col-12 col-md-4 mb-5">
                      <div class="card h-100">
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGf5R1G-XRQSOiJsQ7RmkJ3gPRhBmrzbtSMw&usqp=CAU" class="card-img-top" alt="fish"></img>
                        <div class="card-body ">
                         <h5 class="card-title ">Fish</h5>
                         <p class="card-text">Recipe for Kerala style fish fry marinated in an oil marinade and shallow fried in oil.</p>
                         <span class="price"> <b>price ₹50</b></span> <br></br>
                         <b class="qty">Quantity: </b><button className='badge bg-secondary' onClick={()=> setQuaFish(quaFish - 1)}>-</button>{quaFish}<button className='badge bg-secondary' onClick={()=> setQuaFish(quaFish + 1)}>+</button><br></br> <br></br>
                         <button class="btn btn-warning" id="fishbtn"  onclick={myfunc("fishbtn",quaFish,50)}>₹ 0</button>
                         <button className='buy btn btn-warning float-end'onClick={handleClick}>Buy Now</button>
                       </div>
                      </div>
                     </div>
                       <div  style={{width:"25rem ;"}} class="col col-12 col-md-4 mb-5">
                          <div class="card h-100">
                            <img src="https://www.eggs.ca/assets/RecipePhotos/eggsandwich.jpg" class="card-img-top" alt="egg sandwich"></img>
                             <div class="card-body">
                               <h5 class="card-title">Egg Sandwich</h5>
                               <p class="card-text">Tgg sandwich made of boiled eggs, caramelized onions and spice powders.</p>
                               <span class="price"> <b>price ₹90</b></span> <br></br>
                               <b class="qty">Quantity: </b><button className='badge bg-secondary' onClick={()=> setQuaegg(quaegg - 1)}>-</button>{quaegg}<button className='badge bg-secondary' onClick={()=> setQuaegg(quaegg + 1)}>+</button><br></br> <br></br>
                               <button class="btn btn-warning" id="eggsandwichbtn" onclick={myfunc("eggsandwichbtn",quaegg,90)}>₹ 0</button>
                               <button className='buy btn btn-warning float-end'onClick={handleClick}>Buy Now</button>
                              </div>
                             </div>
                            </div>
                            <div style={{width:"25rem ;"}} class="col col-12 col-md-4 mb-5">
                              <div  class="card h-100">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Zu-BnvwwW1myWn6vhFPH4Gt9YHaJDFGcfg&usqp=CAU" class="card-img-top" alt="mutton sandwich"></img>
                                <div class="card-body">
                                   <h5 class="card-title">Mutton Sandwich</h5>
                                   <p class="card-text">An interesting fusion between the Mughals and the British. A simple kheema stuffed into bread.</p>
                                   <span class="price"> <b>price ₹250</b></span> <br></br>
                                   <b class="qty">Quantity: </b><button className='badge bg-secondary' onClick={()=> setQuamutton(quamutton - 1)}>-</button>{quamutton}<button className='badge bg-secondary' onClick={()=> setQuamutton(quamutton + 1)}>+</button><br></br> <br></br>
                                   <button class="btn btn-warning " id="muttonsandwichbtn" onclick={myfunc("muttonsandwichbtn",quamutton,250)}>₹ 0</button>
                                   <button className='buy btn btn-warning float-end'onClick={handleClick}>Buy Now</button>
                                  </div>
                                </div>
                              </div>
                              <div style={{width:"25rem ;"}} class="col col-12 col-md-4 mb-5">
                                <div  class="card h-100">
                                  <img src="https://www.mydelicious-recipes.com/home/images/423_1200_1200/mydelicious-recipes-chicken-biryani" class="card-img-top" alt="chicken biryani"></img>
                                    <div class="card-body">
                                       <h5 class="card-title">Chicken Biryani</h5>
                                       <p class="card-text">Chicken Biryani is a famous recipe of South Asian countries full of healthy ingredients.</p>
                                       <span class="price"> <b>price ₹140</b></span> <br></br>
                                       <b class="qty">Quantity: </b><button className='badge  bg-secondary' onClick={()=> setQuachicken(quachicken - 1)}>-</button>{quachicken}<button className='badge  bg-secondary' onClick={()=> setQuachicken(quachicken + 1)}>+</button><br></br> <br></br>
                                       <button class="btn btn-warning" id="Chickenbiryanibtn"  onclick={myfunc("Chickenbiryanibtn",quachicken,140)}>₹ 0</button>
                                       <button className='buy btn btn-warning float-end'onClick={handleClick}>Buy Now</button>
                                     </div>
                                   </div>
                                 </div>
               </div>
             </section>
             <Footer/>
             <nav>
      <Link to="/Nonveg">  </Link>
     </nav>                                       
                               
    </div>
     
    
  );


}

export default Nonveg;