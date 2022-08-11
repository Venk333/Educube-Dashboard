import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { HorizontalBar } from 'react-chartjs-2';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

const data = {
  labels: ['Computer', 'Science', 'Social', 'Maths', 'Hindi', 'English'],
  datasets: [
    {
      label: 'Subjects',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

function SubjectAverageChartWidget(props) {
  const { classes } = props;

  return (
    <PapperBlock whiteBg noMargin title="Subject Average %" icon="ion-ios-stats-outline" desc="">
      <Grid container spacing={2}>
        <Grid item md={12} xs={6}>
          <Grid container className={classes.secondaryWrap}>
            <HorizontalBar data={data} />
          </Grid>
        </Grid>
      </Grid>
    </PapperBlock>
  );
}

SubjectAverageChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubjectAverageChartWidget);
