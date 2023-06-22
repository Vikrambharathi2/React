import { Link } from 'react-router-dom';
import './App.css';
import { useState } from "react";
function Duplicate() {
  const [qua , setQua] = useState("0");
  const [quaFish, setQuaFish] = useState("0");
  const [quaegg, setQuaegg] = useState("0");
  const [quamutton, setQuamutton] = useState("0");
  const  [quachicken, setQuachicken] = useState("0");

  const [quavegbiryani, setQuavegbiryani] = useState("0");
  const [quaidliDosa, setQuaidliDosa] = useState("0");
  const [quacurdrice, setQuacurdrice] = useState("0");
  const [quatomatorice, setQuatomatorice] = useState("0");
  const [qualemonrice, setQualemonrice] = useState("0");
 
   function myfunc(id,quan,price){
      let  ids = id;
    let  quantity = quan ;
   let  pri = price;
    let total = 0;
    if(quantity>0){
      total= pri * quantity;
      document.getElementById(ids).innerHTML="Pay ₹"+total;
   }
    }
    myfunc();
  return (
    <div className="App">

                                                                            {/* navbar section */}

     



      <section className="home">
    <nav className="navbar  navbar-expand-lg">
        <div className="container-fluid navbar-dark">
          <a className="navbar-brand " href='#home'>
            <img src="assets/css/logo.png" alt="logo" width="70" height="70" ></img>
          </a>
          <div className="me-0">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
       
          <div className="collapse  navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a> 
              </li>
              <li className="nav-item dropdown">
                <b className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </b>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#non-veg">Non Veg</a></li>
                  <li><a className="dropdown-item" href="#veg">veg</a></li>
                </ul>
              </li>
            
              <li className="nav-item">
                <a className="nav-link" href="#form">Login</a>
              </li>
            </ul>
          </div>
    
        </div>
      </nav>
     
        <div id="home" className="row text-center">
          <div className="head">
            <h1>Food's Here</h1>
          </div>
          <p>
            <h3  className="text-white h3p"> Main Motives Of My Restaurent </h3>
             <ul className="text-white">
              <li>Fresh and Organic</li>
              <li>value for money</li>
              <li>Quality and Quantity</li>
             </ul>
          </p>
        
        </div>
        <div className="row  text-center">
          <div className="content mb-5 ">
            <h3>Get Your Favorites Here</h3>
            <button className="btn btn-warning"><a href="#non-veg">Order something</a> </button>
          </div>
        </div>

      </section>


                                                                              {/* ABOUT SECTION */}



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
                       <button class="btn btn-warning" id="lemonchickenbtn" onclick={myfunc("lemonchickenbtn",qua,60)}>Order Now</button>
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
                         <button class="btn btn-warning" id="fishbtn"  onclick={myfunc("fishbtn",quaFish,50)}>Order Now</button>
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
                               <button class="btn btn-warning" id="eggsandwichbtn" onclick={myfunc("eggsandwichbtn",quaegg,90)}>Order Now</button>
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
                                   <button class="btn btn-warning" id="muttonsandwichbtn" onclick={myfunc("muttonsandwichbtn",quamutton,250)}>Order Now</button>
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
                                       <b class="qty">Quantity: </b><button className='badge bg-secondary' onClick={()=> setQuachicken(quachicken - 1)}>-</button>{quachicken}<button className='badge bg-secondary' onClick={()=> setQuachicken(quachicken + 1)}>+</button><br></br> <br></br>
                                       <button class="btn btn-warning" id="Chickenbiryanibtn"  onclick={myfunc("Chickenbiryanibtn",quachicken,140)}>Order Now</button>
                                     </div>
                                   </div>
                                 </div>
               </div>
             </section>
                                                                           {/* veg section */}



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
          <button class="btn btn-warning" id="LemonRice" onclick={myfunc("LemonRice",qualemonrice,40)}>Order Now</button>
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
          <button class="btn btn-warning" id="TomatoRice" onclick={myfunc("TomatoRice",quatomatorice,70)}>Order Now</button>
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
          <button class="btn btn-warning" id="CurdRice" onclick={myfunc("CurdRice",quacurdrice,55)}>Order Now</button>
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
          <button class="btn btn-warning" id="IdliDosa" onclick={myfunc("IdliDosa",quaidliDosa,65)}>Order Now</button>
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
          <button class="btn btn-warning" id="VegBiryani" onclick={myfunc("VegBiryani",quavegbiryani,90)}>Order Now</button>
        </div>
                      </div>
                     </div>
               </div>
             </section>

 

                                                                            {/* login */}
      <section class="form " id="form">
    <h1 class="text-center">Login</h1>
    <div class="form">
 <form>
    <input type="text" placeholder="Enter Your Name"required/> <br/>
    <input type="email" placeholder="Enter Your E-mail" required/> <br/>
    <input type="tel" placeholder="Enter Your MobileNumber" required/> <br/>
   <textarea class="p" name="textarea"placeholder="IF you have any problems type here" required></textarea><br/>
   <button type="submit">submit</button> <br/>
</form>
</div>   
</section>
             
                                                                    
                                                                       {/* footer section */}


       
<footer class="text-center bg text-dark  pt-3 p-5 ">
<div class="icons pb-3">
  <a href="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram me-3" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
  </svg></a>
 <a href="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook me-3" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg></a>
<a href="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter me-3" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg></a>
<a href="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github me-3" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
</a>
<a href="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
  </svg>
</a>

</div>
<div class="row text-center">   
  <div class="contact-footer col-md-6 col-12 ">
   <h5><span style={{color: " rgb(206, 177, 105);"}}>Contact Us </span></h5>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-outbound" viewBox="0 0 16 16">
      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
    </svg>  &nbsp;&nbsp;&nbsp;  +91 123456789 <br></br>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-open" viewBox="0 0 16 16">
      <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z"/>
    </svg>  &nbsp;&nbsp;&nbsp;   FoodsHere@123.com
  </div>

  <div class="contact-footer mb-3 col-md-6 col-12 ">
    <h5><span style={{color: " rgb(206, 177, 105);"}}>Links </span></h5>
  <a href="_blank">Service</a> <br></br>
  <a href="_blank">Terms and Conditions</a>
</div>
<br></br>
<div class="copyright text-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"/>
  </svg> &nbsp;2022 Food's Here 
</div>
</div>
</footer>

  
   <nav> 
    <Link to="/Duplicate"></Link>
   </nav>
    </div>
     
    
  );


}

export default Duplicate;