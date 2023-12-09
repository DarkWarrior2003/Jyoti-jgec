import React from "react";
import './Contact.css';
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div class="container py-16 mt-10 container1">
      <h1>Let's Have a Talk</h1>
      <div id="social" class="item">
        <h3>Social Contact</h3>
        <p id="socialpara" class="para">
          <ul>
            <li>
              <a href="mailto:jgec.jyoti@gmail.com">
                Email id:jgec.jyoti@gmail.com{" "}
              </a>
            </li>{" "}
            <br />
            <li>
              <a href="https://www.facebook.com/jgecjyoti?mibextid=ZbWKwL">
                {" "}
                Facebook Id: Jyoti - Free Night-Education Centre
              </a>
            </li>
            <br />
            <li>
              <a href="https://t.me/jyotijgec">
                Telegram: JYOTI - A Ray of Hope
              </a>
            </li>
            <br />
            <li>
              <a href="https://instagram.com/jyotijgec?igshid=NzZlODBkYWE4Ng==">
                Instragram: jyotijgec
              </a>
            </li>
          </ul>
        </p>
      </div>
      <div id="onsite" class="item">
        <h3>On Site</h3>
        <p id="onsitepara" class="para">
          <ul>
            <li>Place: Jalpaiguri Government Enginnering College</li>
            <li>Denguajhar</li>
            <li>Jalpaiguri</li>
            <li>W.B,735102</li>
            <li>
              <a href="https://maps.app.goo.gl/uJXHGdrAya8KwDo57" class="btn">
                Location
              </a>
            </li>
          </ul>
        </p>
      </div>
      <div id="online" class="item">
        <h3>Online Contact</h3>
        <p id="onlinepara" class="para">
          Your Suggestions is more valuable for us. Here you can share yours
          thoughts with us.
        </p>
        <Link to="/form" class="btn">
          Forms Page
        </Link>
        / <button class="btn">Contact Us</button> /
      </div>
      <div id="oursidepara" class="item">
        <h3>From Our Side</h3>
        <p id="oursidepara" class="para">
          <ul>
            <li>Thanks For sharing your thoughts with us</li>
            <li>
              Your thoughts and Suggestion will help us to build our
              organisation strong.
            </li>
            <li>
              We are continuously trying to fullfill all the necessity of the
              students and hope we will archive it.{" "}
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Contact;
