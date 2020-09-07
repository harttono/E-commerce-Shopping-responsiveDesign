import React,{Component, Fragment} from 'react';
import './App.css'
import SideBar from './components/SideBar';
import Product from './components/Product';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
        <Fragment>
           <section className="main">
             <div className="logo">
                <a href="#"><font>LO</font>GO</a>
             </div>

             <div className="side-box">
                <div className="search">
                   <i className="fas fa-search"/>
                   <input placeholder="Search"/>
                </div>
             </div>

             <div className="main-img">
                <img src={require('./images/undraw_shopping.svg')} alt="shopping"/>
             </div>

             <div className="main-text">
                <h1>Su<font>mm</font>er</h1>
                <h2>Collec<font>tion</font></h2>
                <a href="#" className="main-btn">Details</a>
             </div>
             <SideBar/>
           </section>
           <Product/>
           <Subscribe/>
           <Footer/>    
        </Fragment>
    )
  }
}
export default App
