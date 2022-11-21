import React from 'react'
import Footer from "../components/footer/footer"
import "../styles/about.scss";
import {Count} from "../components/Data"
import CountUp from "react-countup";

const About = () => {
  return (
    <>
        <section className="about">
            <h1>About Us</h1>
        </section>
       <section className="cto">
          <div className="container">
            <div className="des_con">
              <h1>
                Powerful mining invest with <span> Safe &amp; Secure</span>
              </h1>
              <p>
                We all have our own techniques, but one of the most effective
                techniques is to actually put some text where text goes and some
                pictures where pictures go to make sure everyone can see the
                vision you’ve created.
              </p>
              <h5>Estimated Mingin Digit</h5>
              <h3>11192151.1145 / BTC</h3>
            </div>
            <div className="image">
              <img src="invest_ilust1.png" alt="" />
            </div>
          </div>
        </section>
        <section className='count'>
            <div className="count_container">
                <div className='row'>
                    {Count.map((item) => (
                        <div className='rowContainer' key={item.id}>
                            <div className="icon">
                                {item.icon}
                            </div>
                            <CountUp duration={2} className="counter" end={item.number} />
                            <div className='words'>{item.label}</div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
        <section className="interest">
          <div className="container">
            <img src="app.png" alt="" />
            <div className="desp_container">
              <h1>
                Protecting Investors <span>Interests</span>
              </h1>
              <p className="note">
                Cryptocurrency investing has a steep learning curve. And as a
                volatile, highly speculative investment, many investors are
                appropriately cautious. But for those who are interested in
                crypto and making tremendous money out of it, there are tested
                and proven ways to ensure the protection of investors interest:
                And that is investing with crypto forrests.
              </p>
              <p>
                Over some years of successful activity, Crypto Forrests proved
                to be a reliable company, First of all, Stability and
                possibility to manage your own financial assets is one of the
                key factors of successful investment cooperation.We create
                favourable conditions for regular functioning and expansion of
                our production facilities, which guarantees a daily profit for
                each active partner of the Company.
              </p>
            </div>
          </div>
        </section>
      <Footer/>
    </>
  )
}

export default About;
