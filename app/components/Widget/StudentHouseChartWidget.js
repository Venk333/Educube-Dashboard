import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Pie } from 'react-chartjs-2';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

const data = {
  labels: [
    'Blue',
    'Orange',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [200, 50, 100, 125],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#32612D'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#32612D'
    ]
  }]
};

function StudentHouseChartWidget(props) {
  const { classes } = props;

  return (
    <PapperBlock whiteBg noMargin title="Student Houses" icon="ion-ios-stats-outline" desc="">
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

StudentHouseChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentHouseChartWidget);
