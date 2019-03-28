import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import RegionSelect from '../RegionSelect'

class AlertDialog extends React.Component {
    constructor (props) {
		super(props);
		this.regionRenderer = this.regionRenderer.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = {
            open: false,
			regions: []
		};
    }
    
    onChange (regions) {
		this.setState({
			regions: regions
		});
    }
    
	changeRegionData (index, event) {
		const region = this.state.regions[index];
		let color;
		switch (event.target.value) {
		case '1':
			color = 'rgba(0, 255, 0, 0.5)';
			break;
		case '2':
			color = 'rgba(0, 0, 255, 0.5)';
			break;
		case '3':
			color = 'rgba(255, 0, 0, 0.5)';
			break;
		default:
			color = 'rgba(0, 0, 0, 0.5)';
		}

		region.data.regionStyle = {
			background: color
        };
        
		this.onChange([
			...this.state.regions.slice(0, index),
			objectAssign({}, region, {
				data: objectAssign({}, region.data, { dataType: event.target.value })
			}),
			...this.state.regions.slice(index + 1)
		]);
    }
    
    regionRenderer (regionProps) {
		if (!regionProps.isChanging) {
			return (
				<div style={{ position: 'absolute', right: 0, bottom: '-1.5em' }}>
					<select onChange={(event) => this.changeRegionData(regionProps.index, event)} value={regionProps.data.dataType}>
						<option value='1'>Elephant</option>
						<option value='2'>Cat</option>
						<option value='3'>Other Animal</option>
					</select>
				</div>
			);
		}
	}
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
     return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
            Click here for ROI selection.
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
            {"ROI Selection By Dragging.."}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <RegionSelect
                    maxRegions={5}
                    regions={this.state.regions}
                    onChange={this.onChange}
                    regionRenderer={this.regionRenderer}>
                    <img src={this.props.value} height="300" width="500"/>
                </RegionSelect>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={this.handleClose} color="primary">
                Disagree
            </Button>
            <form method="POST" action='/'>
            <Button onClick={this.handleClose} color="primary" autoFocus>
                Agree
            </Button>
            </form>
        </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
