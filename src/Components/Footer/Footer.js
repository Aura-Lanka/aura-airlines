import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
      <div className="Footer mt-5">
        <footer class="page-footer font-small mdb-color lighten-3 pt-4">
          <div class="container text-center text-md-left">
            <div class="row">
              <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                <h5 class="font-weight-bold text-uppercase mb-4 p-1">AURA-LANKA</h5>
                <p>
                  Aura Airlines is a concept of conglomerate in the Airline
                  Industry in Sri Lanka dedicating its approach mainly to
                  Private & Business Airline, as an exclusive platform which
                  customers can benefit from in the fields of Leisure, Corporate
                  and VIP transport solutions, and service for both domestic and
                  international market.
                </p>
                <div id="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7921.855178098111!2d79.9475817!3d6.8992638!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ae250cc8213779f%3A0x4624ec10005649e3!2s949%20Udawatta%20Road%20Malabe!3m2!1d6.899104899999999!2d79.947553!5e0!3m2!1sen!2slk!4v1663602628626!5m2!1sen!2slk"
                    width="600"
                    height="120"
                  ></iframe>
                </div>
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                <h5 class="font-weight-bold text-uppercase mb-4 p-1">
                  Quick Links
                </h5>

                <ul className="quick-links">
                  <li>
                    <p>
                      <Link to="/">HOME</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/Book">Book</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/About">About Us</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/Contact">Contact Us</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/Membership">Membership</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/Destination">Destination</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/Offers">Offers</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/Inquire">Inquire</Link>
                    </p>
                  </li>
                </ul>
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
                <h5 class="font-weight-bold text-uppercase mb-4 p-1">
                  Our Subsidiaries
                </h5>
                {/*<Link to='https://www.facebook.com/' className="mx-3 "><p>Aura Lanka Gem & Museum </p></Link>*/}
                <p className="mx-3 ">Aura Lanka Gem & Museum </p>
                <p className="mx-3 ">Aura Lanka Security</p>
                <p className="mx-3 ">Aura Airlines</p>
                <p className="mx-3">Aura Lanka Construction</p>
                <p className="mx-3 ">Aura Lanka Enterainment</p>
                <p className="mx-3 ">Aura Sports</p>
                <p className="mx-3 ">Aura Lanka LLC USA</p>
                <p className="mx-3 ">Aura Jeewa</p>
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-2 col-lg-3 text-center mx-auto my-4 ">
                <h5 class="font-weight-bold text-uppercase p-1">Contact Info</h5>

                <ul>
                  <li>
                    <p className="mx-auto my-3 ">
                      <i class="fa-solid fa-phone"></i> +94 77 907 1437
                    </p>
                  </li>
                  <li>
                    <p className="mx-auto my-3 ">
                      <i class="fa-solid fa-user"></i> Ruwan Nayanajith - Head of Administrator Sales and Finance
                      <br/>-Chairman
                    </p>
                  </li>
                  <li>
                    <p className="mx-auto my-2">
                      <i class="fas fa-envelope"></i> info@auraairline.com
                    </p>
                  </li>
                  <li>
                    <p className="mx-auto my-3">
                      <i class="fa-solid fa-map"> </i> 949/13, Udawatte Road, Thalanagama North, Malabe.
                    </p>
                  </li>
                </ul>

                <a
                  type="button"
                  className="btn-floating btn-fb icon-size waves-effect waves-light"
                  href="https://www.facebook.com/"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>

                <a
                  type="button"
                  className="btn-floating btn-tw icon-size waves-effect waves-light"
                  href="https://www.youtube.com/"
                >
                <i class="fa-brands fa-youtube"></i>
                </a>

                <a
                  type="button"
                  className="btn-floating btn-gplus icon-size waves-effect waves-light"
                  href="https://www.instagram.com/"
                >
              <i class="fa-brands fa-instagram"></i>
                </a>

           
              </div>
            </div>
          </div>

          <div class="footer-copyright text-center py-3">
          2023 Aura Airline (Pvt) Ltd | All Rights Reserved | This Website is Owned and Managed by Aura Airline (Pvt) Ltd.
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
