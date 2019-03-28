import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Form,Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Main from "./app";
import SignUp from "./signup";
import Contact from "./contact";

class Login extends React.Component {
    render(){
        return (
            <div className="main">
            <Router>
                <div className="main">
                <Route path='/signup' component={SignUp}></Route>
                <Route path='/home' component={Main} />
                <Route path='/contact' component={Contact} />
                <Route exact path='/' render={()=>(
                    <div>
                        <div>
                            <div className="login-display">
                                <h1>LOGIN TO SCORELAB</h1>
                            </div>
                            <div className="container">
                                <Form className="form-login">
                                    <Form.Group controlId="validationCustom01" as={Col} md="6">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" required/>
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword" as={Col} md="6">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" required/>
                                    </Form.Group>
                                    <div className="signup">
                                        <Link to='/signup'>New to Scorelab, Sign-Up here</Link>
                                    </div><br />
                                    <div className="submit1">
                                        <Link to="/home">
                                        <Button variant="primary" type="submit" className="submit" md="6" as={Col}>
                                            Sign-In
                                        </Button>
                                        </Link>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    <div className="footer">
                        <p className='copyright'>© Copyright 2019 Sustainable Computing Research Group (SCoRe)<br />
                        <Link to="/contact" style={{ color: '#ABA' }}>Contact-Us</Link></p>
                    </div>
                </div>
                )}>
                </Route>
                </div>
            </Router>
            </div> 
        )
    }
}

render(<Login />, document.getElementById('root'));
export default Login;