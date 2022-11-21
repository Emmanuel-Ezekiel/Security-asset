import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../styles/home.scss";
import Particles from "../components/particles";
import { Data, Testimonial, Bronze_Plan, Silver_Plan, Gold_Plan,  Diamond_Plan} from "../components/Data";
import { Fa500Px } from "react-icons/fa";
import Footer from "../components/footer/footer";


const Home = () => {
  const first = Object.assign({}, Testimonial);
  console.log(first[1]);
  return (
    <>
      <main>
        <section className="hero-container">
          <div className="hero">
            <h1>Future digit mining Crypto currency</h1>
            <h4>
              With more than 1,111 cryptocurrencies and a total market cap of
              approximately $151 billion circulating in the market today,
            </h4>
            <div className="btn_container">
              <a
                href="https://app.cryptoforrests.com/register"
                className="btn1"
              >
                Register
              </a>
              <a href="https://app.cryptoforrests.com/login" className="btn2">
                Login
              </a>
            </div>
          </div>
          <div className="carousel">
            <OwlCarousel
              className="owl-theme"
              loop
              autoplay
              margin={11}
              items={1}
              dots={false}
            >
              <div class="item">
                <img src="b-1.png" alt="" />
              </div>
              <div class="item">
                <img src="b-2.png" alt="" />
              </div>
              <div class="item">
                <img src="b-3.png" alt="" />
              </div>
              <div class="item">
                <img src="b-1.png" alt="" />
              </div>
              <div class="item">
                <img src="b-2.png" alt="" />
              </div>
            </OwlCarousel>
          </div>
        </section>
        <section className="certificate">
          <div className="container">
            <h1>
              Our mission is new technology <span>trading with Bitcoin</span>
            </h1>
            <div className="cert_con">
              <div className="about">
                <p>
                  About our company In 2114, a group of graduates of the
                  University of Manchester led by Robert Rose was engaged in the
                  study of the phenomenon of Bitcoin and development of new
                  alternative cryptocurrency types. Our team includes the best
                  specialists in economics, finance, trading as well as highly
                  specialized technical experts. Some of them already have the
                  necessary experience and previously were involved in the
                  development of algorithms of cryptocurrency mining. Not having
                  the necessary technical base, we started working with
                  investors from the United Kingdom. For two years we have
                  launched four data centers and repeatedly upgraded technical
                  equipment, giving up graphics cards in favor of modern ASIC
                  miners such as KnC Neptune, Bitmine.ch Avalon Clone 85GH and
                  TerraHash DX Large. Currently our main facilities are located
                  in London, Leeds, Thorlby and Gargrave.
                </p>
              </div>
              <div className="certi_box">
                <img src="image.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="offers">
          <div className="container">
            <h1>
              Our advantages and <span>offers</span>
            </h1>
          </div>
          <div className="grid_container">
            {Data.map((item, index) => (
              <div className="grid_data" key={index}>
                <div>{item.image}</div>
                <h1>{item.title}</h1>
                <p>{item.describe}</p>
              </div>
            ))}
          </div>
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
        <section className="testimonial_container">
          <div className="testimony">
            <h5>TESTIMONIALS</h5>

            <div className="test_container">
              <OwlCarousel
                className="owl-theme"
                loop
                autoplay
                margin={11}
                items={1}
                dots={false}
                nav={false}
                navText={[
                  '<span class="arrow prev">‹</span>',
                  '<span class="arrow next">›</span>',
                ]}
              >
                <div class="item">
                  <div className="box">
                    <div className="test_info">
                      <h4>{first[0]?.name}</h4>
                      <p>{first[0].pro}</p>
                    </div>
                    <div className="test_content">
                      <ul className="cours_star">
                        <li>{first[0].starfill}</li>
                        <li>{first[0].starfill}</li>
                        <li>{first[0].starfill}</li>
                        <li>{first[0].star}</li>
                        <li>{first[0].star}</li>
                      </ul>
                      <p>{first[0].content}</p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className="box">
                    <div className="test_info">
                      <h4>{first[1]?.name}</h4>
                      <p>{first[1].pro}</p>
                    </div>
                    <div className="test_content">
                      <ul className="cours_star">
                        <li>{first[1].starfill}</li>
                        <li>{first[1].starfill}</li>
                        <li>{first[1].starfill}</li>
                        <li>{first[1].star}</li>
                        <li>{first[1].star}</li>
                      </ul>
                      <p>{first[1].content}</p>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div className="box">
                    <div className="test_info">
                      <h4>{first[2]?.name}</h4>
                      <p>{first[2].pro}</p>
                    </div>
                    <div className="test_content">
                      <ul className="cours_star">
                        <li>{first[2].starfill}</li>
                        <li>{first[2].starfill}</li>
                        <li>{first[2].starfill}</li>
                        <li>{first[2].star}</li>
                        <li>{first[2].star}</li>
                      </ul>
                      <p>{first[2].content}</p>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div className="box">
                    <div className="test_info">
                      <h4>{first[3]?.name}</h4>
                      <p>{first[3].pro}</p>
                    </div>
                    <div className="test_content">
                      <ul className="cours_star">
                        <li>{first[3].starfill}</li>
                        <li>{first[3].starfill}</li>
                        <li>{first[3].starfill}</li>
                        <li>{first[3].star}</li>
                        <li>{first[3].star}</li>
                      </ul>
                      <p>{first[3].content}</p>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div className="box">
                    <div className="test_info">
                      <h4>{first[4]?.name}</h4>
                      <p>{first[4].pro}</p>
                    </div>
                    <div className="test_content">
                      <ul className="cours_star">
                        <li>{first[4].starfill}</li>
                        <li>{first[4].starfill}</li>
                        <li>{first[4].starfill}</li>
                        <li>{first[4].star}</li>
                        <li>{first[4].star}</li>
                      </ul>
                      <p>{first[1].content}</p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>

            <h5 className="activites">Activities</h5>
            <div className="table">
              <div className="card-body">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Mode</th>
                      <th scope="col">Status</th>
                      <th scope="col">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
										<td>2022-11-25 11:24:33</td>
										<td>$100.00</td>
										<td>bitcoin</td>
										<td>processed</td>
										<td>Deposit</td>
									</tr>
                  <tr>
										<td>2022-11-09 11:41:28</td>
										<td>$100.00</td>
										<td>12</td>
										<td>processed</td>
										<td>Deposit</td>
									</tr>
                  <tr>
										<td>2022-10-15 11:42:17</td>
										<td>$100.00</td>
										<td>1</td>
										<td>processed</td>
										<td>Deposit</td>
									</tr>
                  <tr>
										<td>2022-09-02 13:00:49</td>
										<td>$500.00</td>
										<td>Bitcoin</td>
										<td>processed</td>
										<td>Deposit</td>
									</tr>
                  <tr>
										<td>2022-08-04 07:18:01</td>
										<td>$2000.00</td>
										<td>Deposit</td>
										<td>processed</td>
										<td>Deposit</td>
									</tr>


                  </tbody>
                </table>
              </div>
            </div>
            <div className="youtube">
              <iframe
                width="100%"
                height="100%"
                src="https://youtube.com/embed/Gc2en3nHxA4?autoplay=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              ></iframe>
            </div>
            <h5 className="activites">Market Live</h5>
            <div className="table">
              <iframe
                src="https://widget.coinlib.io/widget?type=full_v2&amp;theme=light&amp;cnt=6&amp;pref_coin_id=1505&amp;graph=yes"
                width="100%"
                height="409px"
                scrolling="auto"
                marginWidth="0"
                marginHeight="0"
                frameBorder="0"
                border="0"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="plan_container">
          <div className="plan_header">
            <h2>Choose the best Plan</h2>
            <div className="plan_info">
              <div className="plan_info_item">
                {Bronze_Plan.map((item, index) => (
                  <>
                    <div className="plan_box" key={index}>
                      <div className="center">
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <hr />
                      </div>

                      <ul className="list">
                        <li>
                          {item.icon} {item.deposits}
                        </li>
                        <li>
                          {item.icon} {item.Risk}
                        </li>
                        <li>
                          {item.icon}
                          {item.Train}
                        </li>
                        <li>
                          {item.icon}
                          {item.Broker}
                        </li>
                        <li>
                          {item.icon}
                          {item.support}
                        </li>
                        <li>
                          {item.icon}
                          {item.Bonus}
                        </li>
                        <li>
                          {item.icon}
                          {item.Referral_Bonus}
                        </li>
                        <li>
                          {item.icon}
                          {item.Duration}
                        </li>
                      </ul>
                    </div>
                  </>
                ))}

                <div className="box_footer">
                  <div className="container">
                     <a href="#"> Sign Up</a>
                  </div>
                </div>
              </div>
              
              <div className="plan_info_item">
                {Silver_Plan.map((item, index) => (
                  <>
                    <div className="plan_box" key={index}>
                      <div className="center">
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <hr />
                      </div>

                      <ul className="list">
                        <li>
                          {item.icon} {item.deposits}
                        </li>
                        <li>
                          {item.icon} {item.Risk}
                        </li>
                        <li>
                          {item.icon}
                          {item.Train}
                        </li>
                        <li>
                          {item.icon}
                          {item.Broker}
                        </li>
                        <li>
                          {item.icon}
                          {item.support}
                        </li>
                        <li>
                          {item.icon}
                          {item.Bonus}
                        </li>
                        <li>
                          {item.icon}
                          {item.Referral_Bonus}
                        </li>
                        <li>
                          {item.icon}
                          {item.Duration}
                        </li>
                      </ul>
                    </div>
                  </>
                ))}

                <div className="box_footer">
                  <div className="container">
                     <a href="#"> Sign Up</a>
                  </div>
                </div>
              </div>
              
              <div className="plan_info_item">
                {Gold_Plan.map((item, index) => (
                  <>
                    <div className="plan_box" key={index}>
                      <div className="center">
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <hr />
                      </div>

                      <ul className="list">
                        <li>
                          {item.icon} {item.deposits}
                        </li>
                        <li>
                          {item.icon} {item.Risk}
                        </li>
                        <li>
                          {item.icon}
                          {item.Train}
                        </li>
                        <li>
                          {item.icon}
                          {item.Broker}
                        </li>
                        <li>
                          {item.icon}
                          {item.support}
                        </li>
                        <li>
                          {item.icon}
                          {item.Bonus}
                        </li>
                        <li>
                          {item.icon}
                          {item.Referral_Bonus}
                        </li>
                        <li>
                          {item.icon}
                          {item.Duration}
                        </li>
                      </ul>
                    </div>
                  </>
                ))}

                <div className="box_footer">
                  <div className="container">
                     <a href="#"> Sign Up</a>
                  </div>
                </div>
              </div>
              
              <div className="plan_info_item">
                {Diamond_Plan.map((item, index) => (
                  <>
                    <div className="plan_box" key={index}>
                      <div className="center">
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <hr />
                      </div>

                      <ul className="list">
                        <li>
                          {item.icon} {item.deposits}
                        </li>
                        <li>
                          {item.icon} {item.Risk}
                        </li>
                        <li>
                          {item.icon}
                          {item.Train}
                        </li>
                        <li>
                          {item.icon}
                          {item.Broker}
                        </li>
                        <li>
                          {item.icon}
                          {item.support}
                        </li>
                        <li>
                          {item.icon}
                          {item.Bonus}
                        </li>
                        <li>
                          {item.icon}
                          {item.Referral_Bonus}
                        </li>
                        <li>
                          {item.icon}
                          {item.Duration}
                        </li>
                      </ul>
                    </div>
                  </>
                ))}

                <div className="box_footer">
                  <div className="container">
                     <a href="#"> Sign Up</a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        <Footer/>
      </main>
      <Particles id="tsparticles" />
    </>
  );
};

export default Home;
