import React, { Component } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import AlertDialog from "./pop-up";
import IconLabelButtons from "./upload-button";
import Contact from "./contact";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './login';

class Main extends Component {
	constructor(props) {
			super(props);
			this.state = {
					gallery: [],
					isOpen: 0,
			}
	}

	componentDidMount() {       
		axios.get('https://res.cloudinary.com/dkwm7h5vw/image/list/xmas.json')
				.then(res => {
						console.log(res.data.resources);
						this.setState({gallery: res.data.resources});
				});		
		
		axios.get('http://localhost:5000')
		.then(res => {
				console.log(res.data.resources);
				this.setState({gallery: res.data.resources});
		});				
	}

	uploadWidget() {
			let _this = this;
			cloudinary.openUploadWidget({ cloud_name: 'dkwm7h5vw', upload_preset: 'y2fguksm', tags:['xmas']},
					function(error, result) {
						console.log(result);
						axios.post('http://localhost:5000/',{
							res:result
						})
						.then(res => {
							console.log(res.data.resources);
					});		
					if(error){
						alert("Could not upload to cloudinary.. Please try again..");
						const url= "http://localhost:1234/"; 
						window.location = url; 
					}
				_this.setState({gallery: _this.state.gallery.concat(result)})
			});
	}

	render(){
			return (
				<div className="main">
				<Router>
					<Route path='/contact' component={Contact} />
					<Route exact path='/' component={Login} />
        				<Route exact path='/home' render={()=>(
						<div>
							<h1 className="title">Animal Gallery View</h1>
								<div className="gallery">
									<div class="upload" onClick={this.uploadWidget.bind(this)}>
    									<IconLabelButtons iconClassName="upload-button" />
  									</div>
								</div>
							<CloudinaryContext cloudName="dkwm7h5vw">
							{
								this.state.gallery.map(data => {
										return (
											<div className="responsive" key={data.public_id}>
												<div className="img">
														<Image publicId={data.public_id} >
																<Transformation
																		crop="fill"
																		width="300"
																		height="200"
																		dpr="auto"
																		radius="50"
																		responsive_placeholder="blank"
																/>      
														</Image>
														<AlertDialog 
														value={`https://res.cloudinary.com/dkwm7h5vw/image/upload/${data.public_id}.jpg`}
														/>
												</div>
											</div>
										)
								})
							}
							</CloudinaryContext>
							<div className="footer">
          						<p className='copyright'>© Copyright 2019 Sustainable Computing Research Group (SCoRe)<br />
                				<Link to="/contact" style={{ color: '#ABA' }}>Contact-Us</Link> | <Link to="/" style={{ color: '#ABA' }}>Logout</Link> </p>
          					</div>
						</div>
					)}>
					</Route>
				</Router>
			</div>
        );
    }
}

export default Main;