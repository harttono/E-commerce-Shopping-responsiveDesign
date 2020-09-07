import React from 'react'
import Brand from './Brand';
import SideBar from './SideBar';
export default function Product() {
    return (
        <div>
            <section className="product">
              <div className="p-heading">
                 <h3>Trending <font>Arr</font>ivals</h3>
              </div>
              <div className="product-container">
                  <div className="p-box">
                      <img src={require('../images/b1.png')} alt=""/>
                      <p>Black Guinuine Leather Bags</p>
                      <a href="#" className="price">$ 43.3</a>
                      <a href="#" className="buy-btn">Add To Cart</a>
                  </div>

                  <div className="p-box">
                      <img src={require('../images/b2.png')} alt=""/>
                      <p>Black Guinuine Leather Bags</p>
                      <a href="#" className="price">$ 43.3</a>
                      <a href="#" className="buy-btn">Add To Cart</a>
                  </div>

                  <div className="p-box">
                      <img src={require('../images/b3.png')} alt=""/>
                      <p>Black Guinuine Leather Bags</p>
                      <a href="#" className="price">$ 43.3</a>
                      <a href="#" className="buy-btn">Add To Cart</a>
                  </div>

                  <div className="p-box">
                      <img src={require('../images/b4.png')} alt=""/>
                      <p>Black Guinuine Leather Bags</p>
                      <a href="#" className="price">$ 43.3</a>
                      <a href="#" className="buy-btn">Add To Cart</a>
                  </div>

                  <div className="p-box">
                      <img src={require('../images/b5.png')} alt=""/>
                      <p>Black Guinuine Leather Bags</p>
                      <a href="#" className="price">$ 43.3</a>
                      <a href="#" className="buy-btn">Add To Cart</a>
                  </div>

                  <div className="p-box">
                      <img src={require('../images/b6.png')} alt=""/>
                      <p>Black Guinuine Leather Bags</p>
                      <a href="#" className="price">$ 43.3</a>
                      <a href="#" className="buy-btn">Add To Cart</a>
                  </div>
              </div>
           </section>
           <SideBar/>
           <section className="product">
              <div className="p-heading">
                 <h3>Watches <font>Show</font>Case</h3>
              </div>
              <div className="product-container">
                  <div className="p-box">
                      <img src={require('../images/w1.png')} alt=""/>
                      <p>Black Guinuine Leather Bags</p>
                      <a href="#" className="price">$ 43.3</a>
                      <a href="#" className="buy-btn">Add To Cart</a>
                  </div>

                  <div className="p-box">
                      <img src={require('../images/w2.png')} alt=""/>
                      <p>Black Guinuine Leather Bags</p>
                      <a href="#" className="price">$ 43.3</a>
                      <a href="#" className="buy-btn">Add To Cart</a>
                  </div>

                  <div className="p-box">
                      <img src={require('../images/w3.png')} alt=""/>
                      <p>Black Guinuine Leather Bags</p>
                      <a href="#" className="price">$ 43.3</a>
                      <a href="#" className="buy-btn">Add To Cart</a>
                  </div>

                  <div className="p-box">
                      <img src={require('../images/w4.png')} alt=""/>
                      <p>Black Guinuine Leather Bags</p>
                      <a href="#" className="price">$ 43.3</a>
                      <a href="#" className="buy-btn">Add To Cart</a>
                  </div>

                  <div className="p-box">
                      <img src={require('../images/w5.png')} alt=""/>
                      <p>Black Guinuine Leather Bags</p>
                      <a href="#" className="price">$ 43.3</a>
                      <a href="#" className="buy-btn">Add To Cart</a>
                  </div>

                  <div className="p-box">
                      <img src={require('../images/w6.png')} alt=""/>
                      <p>Black Guinuine Leather Bags</p>
                      <a href="#" className="price">$ 43.3</a>
                      <a href="#" className="buy-btn">Add To Cart</a>
                  </div>
              </div>
           </section>
        </div>
    )
}
