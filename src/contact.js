import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import './contact.css';
import Main from "./app";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Contact = props => {
  document.title =
    'Contact Developer Team of LabelLab - Open Source Community..';
  $('html, body').animate({ scrollTop: 0 }, 'fast');

  document.body.style.setProperty('background-image', 'none');

  return (
    <div>
      <Router>
        <Route path='/home' component={Main} />
        <Route exact path='/contact' render={()=>(
        <div>
          <div className="gray-wrapper">
            <div className="white-grey">
              <div className="conversation__description">
                <div className="support__heading"><b>Contact Us</b></div>
                <br />
                <p className="support__text">
                  Get the help and information you need from our community and team
                  through various channels.
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="contact-content">
              <h5><b>LabelLab</b></h5>
              <br />
              <p>
                <h6>
                Sustainable Computing Research Group (SCoRe)<br />
                University of Colombo School of Computing,<br />
                No. 35, Reid Avenue,<br />
                Colombo 7, Sri Lanka<br />
                Phone +94-11-2158919<br />
                Fax +94-11-2587239
                </h6>
              </p>
            </div>
          </div>
          <div className="footer">
            <p className='copyright'>© Copyright 2019 Sustainable Computing Research Group (SCoRe)<br />
            <Link to="/home" style={{ color: '#ABA' }}>Home</Link></p>
          </div>
        </div>
        )}>
        </Route>
      </Router>
    </div>
  );
};

Contact.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};

export default Contact;
