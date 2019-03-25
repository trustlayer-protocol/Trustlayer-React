import React, { Component } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/styles';


export class SSOModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };
  }


    handleOnClose = () => {
      console.log('closed');
      this.setState({ open: false });
    }


    render() {
      const { open } = this.state;
      const {
        classes: {
          container,
        },
      } = this.props;

      return (
        <Dialog
          open={open}
          onClose={this.handleOnClose}
          aria-labelledby="simple-dialog-title"
        >
          <DialogTitle id="simple-dialog-title">Please sign in</DialogTitle>
          <div className={container}>
                Hello world
          </div>
        </Dialog>
      );
    }
}


const styles = {
  container: {
    minWidth: 300,
    minHeight: 350,
  },
};

export default withStyles(styles)(SSOModal);
