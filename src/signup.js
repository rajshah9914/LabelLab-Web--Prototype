import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Form,Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Main from "./app";
import ReCAPTCHA from "react-google-recaptcha";
import Login from "./login";
import Contact from "./contact";

const TEST_SITE_KEY = "6LdLJIEUAAAAAPej-KLTOAGxr3-_IekqMqJh6fW4";
const DELAY = 1500;
class SignUp extends React.Component {
    constructor(props, ...args) {
        super(props, ...args);
        this.state = {
          callback: "not fired",
          value: "[empty]",
          load: false,
          expired: "false"
        };
        this._reCaptchaRef = React.createRef();
    }

    componentDidMount() {
    setTimeout(() => {
        this.setState({ load: true });
    }, DELAY);
    console.log("didMount - reCaptcha Ref-", this._reCaptchaRef);
    }

    handleChange = value => {
        console.log("Captcha value:", value);
        this.setState({ value });
        // if value is null recaptcha expired
        if (value === null) this.setState({ expired: "true" });
    };
    
    asyncScriptOnLoad = () => {
    this.setState({ callback: "called!" });
    console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
    };


    render(){
        const { value, callback, load, expired } = this.state || {};
        return (
            <div className="main">
                <Router>
                    <Route path='/home' component={Main} />
                    <Route path='/contact' component={Contact} />
                    <Route exact path='/' component={Login} />
                    <Route exact path='/signup' render={()=>(
                        <div>
                            <div className="login-display">
                                <h1>Sign-Up In SCORELAB</h1>
                            </div>
                            <div className="container">
                                <Form className="form-login">
                                    <Form.Group controlId="validationCustom01" as={Col} md="6">
                                        <Form.Label>Email addressses</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" required/>
                                        <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword" as={Col} md="6">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" required/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicChecbox">
                                    <Form.Check type="checkbox" label="I agree to terms and conditions.." /><br />
                                    <div className="captcha">
                                        {load && (
                                            <ReCAPTCHA
                                                style={{ display: "inline-block" }}
                                                theme="dark"
                                                ref={this._reCaptchaRef}
                                                sitekey={TEST_SITE_KEY}
                                                onChange={this.handleChange}
                                                asyncScriptOnLoad={this.asyncScriptOnLoad}
                                            />
                                        )}
                                    </div>
                                    <div className="submit">
                                        <Link to="/home">
                                        <Button variant="primary" type="submit" className="submit" md="6" as={Col}>
                                            Sign-In
                                        </Button>
                                        </Link>
                                    </div>
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className="footer">
                                <p className='copyright'>© Copyright 2019 Sustainable Computing Research Group (SCoRe)<br />
                                <Link to="/contact" style={{ color: '#ABA' }}>Contact-Us</Link> | <Link to="/" style={{ color: '#ABA' }}>Login</Link> </p>
                            </div>
                        </div>
                    )}>
                    </Route>
                </Router>
            </div>
        )
    }
}

export default SignUp;