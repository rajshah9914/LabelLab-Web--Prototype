import React, { Component } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { render } from 'react-dom';
import AlertDialog from "./pop-up";

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
		}

	uploadWidget() {
			let _this = this;
			cloudinary.openUploadWidget({ cloud_name: 'dkwm7h5vw', upload_preset: 'y2fguksm', tags:['xmas']},
					function(error, result) {
					console.log(result);
					if(error){
					alert("Could not upload to cloudinary.. Please try again..");
					}
					_this.setState({gallery: _this.state.gallery.concat(result)})
					});
	}

	render(){
			return (
				<div className="main">
						<h1>Galleria</h1>
						<div className="gallery">
						<div className="upload">
						<button onClick={this.uploadWidget.bind(this)} className="upload-button">
							Click to Upload
						</button>
						</div>
							<CloudinaryContext cloudName="dkwm7h5vw">
								{
									this.state.gallery.map(data => {
											return (
												<div className="responsive" key={data.public_id}>
													<div className="img">
															<Image publicId={data.public_id} >
																	<Transformation
																			crop="scale"
																			width="300"
																			height="200"
																			dpr="auto"
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
							<div className="clearfix"></div>
						</div>
				</div>
        );
    }
}

render(<Main />, document.getElementById('root'));