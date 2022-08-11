import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Doughnut } from 'react-chartjs-2';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

const data = {
  labels: [
    'General',
    'OBC',
    'Others'
  ],
  datasets: [{
    data: [200, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

function StudentStrengthCastwiseChartWidget(props) {
  const { classes } = props;

  return (
    <PapperBlock whiteBg noMargin title="Student's Strength Cast wise" icon="ion-ios-stats-outline" desc="">
      <Grid container spacing={2}>
        <Grid item md={12} xs={6}>
          <Grid container className={classes.secondaryWrap}>
            <Doughnut data={data} />
          </Grid>
        </Grid>
      </Grid>
    </PapperBlock>
  );
}

StudentStrengthCastwiseChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentStrengthCastwiseChartWidget);
