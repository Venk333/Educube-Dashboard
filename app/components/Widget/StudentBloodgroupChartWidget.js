import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Pie } from 'react-chartjs-2';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

const data = {
  labels: [
    'O+',
    'O-',
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-'
  ],
  datasets: [{
    data: [35, 13, 30, 8, 8, 2, 2, 2],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#32612D',
      '#B03A2E',
      '#424949',
      '#9A7D0A',
      '#2E86C1'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#32612D',
      '#B03A2E',
      '#424949',
      '#9A7D0A',
      '#2E86C1'
    ]
  }]
};

function StudentBloodgroupChartWidget(props) {
  const { classes } = props;

  return (
    <PapperBlock whiteBg noMargin title="Student's Blood Group %" icon="ion-ios-stats-outline" desc="">
      <Grid container spacing={2}>
        <Grid item md={12} xs={6}>
          <Grid container className={classes.secondaryWrap}>
            <Pie data={data} />
          </Grid>
        </Grid>
      </Grid>
    </PapperBlock>
  );
}

StudentBloodgroupChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentBloodgroupChartWidget);
