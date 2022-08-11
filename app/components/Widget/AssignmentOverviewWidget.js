import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Dvr from '@material-ui/icons/Dvr';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Healing from '@material-ui/icons/Healing';
import Avatar from '@material-ui/core/Avatar';
import LocalActivity from '@material-ui/icons/LocalActivity';
import Typography from '@material-ui/core/Typography';
import 'dan-styles/vendors/rechart/styles.css';

import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

function AssignmentOverviewWidget(props) {
  const { classes } = props;
  return (
    <PapperBlock whiteBg noMargin title="Assignment Overview" icon="ion-ios-analytics-outline" desc="">
      <Grid container spacing={2}>
        <Grid item md={2} xs={12}>
            &nbsp;
        </Grid>
        <Grid item md={8} xs={12}>
          <ul className={classes.bigResume}>
            <li>
              <Avatar className={classNames(classes.avatar, classes.blueAvatar)}>
                <Dvr />
              </Avatar>
              <Typography variant="h6">
                <span className={classes.blueText}>29</span>
                <Typography>Received</Typography>
              </Typography>
            </li>
            <li>
              <Avatar className={classNames(classes.avatar, classes.tealAvatar)}>
                <CheckCircle />
              </Avatar>
              <Typography variant="h6">
                <span className={classes.tealText}>7</span>
                <Typography>Yet to Receive</Typography>
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item md={2} xs={12}>
            &nbsp;
        </Grid>
        <Grid item md={2} xs={12}>
            &nbsp;
        </Grid>
        <Grid item md={8} xs={12}>
          <ul className={classes.bigResume}>
            <li>
              <Avatar className={classNames(classes.avatar, classes.pinkAvatar)}>
                <Healing />
              </Avatar>
              <Typography variant="h6">
                <span className={classes.pinkText}>17</span>
                <Typography>Pending Review</Typography>
              </Typography>
            </li>
            <li>
              <Avatar className={classNames(classes.avatar, classes.purpleAvatar)}>
                <LocalActivity />
              </Avatar>
              <Typography variant="h6">
                <span className={classes.purpleText}>19</span>
                <Typography>Reviewed</Typography>
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item md={2} xs={12}>
            &nbsp;
        </Grid>
      </Grid>
    </PapperBlock>
  );
}

AssignmentOverviewWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AssignmentOverviewWidget);
