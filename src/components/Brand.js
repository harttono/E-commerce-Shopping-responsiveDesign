import React from 'react'

export default function Brand() {
    return (
    <section className="our-brand">
        <div className="brand-text">
          <h3>Our Brand</h3>
          <h4>Small Shoes 2020 New Arrivals Mini Messeger<font> Classic Shoes</font></h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum hic, rerum, ratione delectus maiores mollitia necessitatibus dolore odio culpa blanditiis cum consequuntur sequi quidem reiciendis, placeat tempora dolorem libero.</p>
        </div>

        <div className="brand-img">
          <img src={require('../images/mobile.png')} alt="mobile"/>
        </div>
     </section>
    )
}
