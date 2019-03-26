import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/styles';
import LinkedInButton from './LinkedIn';


export class SSOModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };
  }


    handleOnClose = () => {
      this.setState({ open: false });
    }


    render() {
      const { open } = this.state;
      const {
        classes: {
          root,
          buttonContainer,
        },
      } = this.props;

      return (
        <Dialog
          open={open}
          onClose={this.handleOnClose}
        >
          <div className={root}>
            <Typography variant="h5" gutterBottom> Please sign in</Typography>
            <Typography variant="body1" gutterBottom>{'Confirm that it\'s really you.'}</Typography>
            <div className={buttonContainer}>
              <LinkedInButton />
            </div>
            <Typography
              variant="caption"
              color="textSecondary"
              gutterBottom
            >
              We will protect your private information and use it only to provide this service.
            </Typography>
            <Link
              target="_blank"
              variant="body1"
              href="https://trustbot.io/privacy-policy"
            >
              Read our privacy
            </Link>
          </div>
        </Dialog>
      );
    }
}


const styles = {
  root: {
    minWidth: 300,
    minHeight: 350,
    maxWidth: 300,
    padding: 16,
    display: 'flex',
    flexFlow: 'column',
  },
  buttonContainer: {
    flex: 1,
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default withStyles(styles)(SSOModal);
