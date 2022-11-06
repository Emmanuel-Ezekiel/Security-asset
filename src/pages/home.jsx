import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../styles/home.scss';
import Particles from '../components/particles';
import { Data } from '../components/Data';


const Home = () => {
  return (
    <>
      <main>
          <section className="hero-container">
              <div className="hero">
                <h1>Future digit mining Crypto currency</h1>
                <h4 >With more than 1,100 cryptocurrencies and a total market cap of approximately $150 billion circulating in the market today,</h4>
                <div className='btn_container'>
                  <a href="https://app.cryptoforrests.com/register" className='btn1' >Register</a>
                  <a href="https://app.cryptoforrests.com/login" className='btn2'>Login</a>
                </div>
              </div>
              <div className='carousel'>
                <OwlCarousel className="owl-theme" loop autoplay margin={10} items={1} dots={false}>
                  <div class="item">
                    <img src="b-1.png" alt='' />
                  </div>
                  <div class="item">
                    <img src="b-2.png"  alt='' />
                  </div>
                  <div class="item">
                    <img src="b-3.png" alt=''  />
                  </div>
                  <div class="item">
                    <img src="b-1.png"  alt='' />
                  </div>
                  <div class="item">
                    <img src="b-2.png"  alt='' />
                  </div>
                </OwlCarousel>
              </div>
            </section>
            <section className='certificate'>
              <div className='container'>
                <h1>Our mission is new technology  <span>trading with Bitcoin</span></h1>
                <div className="cert_con">
                  <div className='about'>
                    <p>
                      About our company
                      In 2014, a group of graduates of the University of Manchester led by Robert Rose was engaged in the study of the phenomenon of Bitcoin and development of new alternative cryptocurrency types. Our team includes the best specialists in economics, finance, trading as well as highly specialized technical experts.
                      Some of them already have the necessary experience and previously were involved in the development of algorithms of cryptocurrency mining. Not having the necessary technical base, we started working with investors from the United Kingdom.
                      For two years we have launched four data centers and repeatedly upgraded technical equipment, giving up graphics cards in favor of modern ASIC miners such as KnC Neptune, Bitmine.ch Avalon Clone 85GH and TerraHash DX Large. Currently our main facilities are located in London, Leeds, Thorlby and Gargrave.
                    </p>
                  </div>
                  <div className='certi_box'>
                    <img src="image.png" alt="" />
                  </div>
               
                </div>
              </div>
           </section>
           <section className='offers'>
            <div className="container">
              <h1>Our advantages and <span>offers</span></h1>
            </div>
            <div className='grid_container'>
              {Data.map((item, index) => (
                <div className='grid_data' key={index}>
                  <div>{item.image}</div>
                  <h1>{item.title}</h1>
                  <p>{item.describe}</p>
                </div>
              ))}
            </div>
           </section>
           <section className='cto'>
                <div className='container'>
                    <div className='des_con'>
                      <h1>Powerful mining invest with <span> Safe &amp; Secure</span></h1>
                      <p>We all have our own techniques, but one of the most effective techniques is to actually put some text where text goes and some pictures where pictures go to make sure everyone can see the vision you’ve created.</p>
                      <h5>Estimated Mingin Digit</h5>
                      <h3>10092050.0145 / BTC</h3>
                    </div>
                    <div className="image">
                      <img src="invest_ilust1.png" alt="" />
                    </div>
                </div>
           </section>
           <section className='interest'>
            <div className="container">
            <img src="app.png" alt="" />
                <div className="desp_container">
                  <h1>Protecting Investors <span>Interests</span></h1>
                  <p className='note'>Cryptocurrency investing has a steep learning curve. And as a volatile, highly speculative investment, many investors are appropriately cautious. But for those who are interested in crypto and making tremendous money out of it, there are tested and proven ways to ensure the protection of investors interest: And that is investing with crypto forrests.</p>
                  <p>Over some years of successful activity, Crypto Forrests proved to be a reliable company,
                     First of all, Stability and possibility to manage your own financial assets is one of the key factors of successful investment cooperation.We create favourable conditions for regular functioning and expansion of our production facilities, which guarantees a daily profit for each active partner of the Company.</p>
                </div>
               
            </div>
           </section>
        </main>
        <Particles id="tsparticles" />
    </>
  )
}

export default Home;
