import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Calendar from 'react-calendar';
import Grid from '@material-ui/core/Grid';
// import purple from '@material-ui/core/colors/purple';
// import blue from '@material-ui/core/colors/blue';
// import cyan from '@material-ui/core/colors/cyan';
// import pink from '@material-ui/core/colors/pink';
// import colorfull from 'dan-api/palette/colorfull';
// import {
//   PieChart, Pie, Cell,
//   Legend
// } from 'recharts';
// import { dataSales } from 'dan-api/chart/chartData';
// import { dataCastwise } from 'dan-api/chart/chartMiniData';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';
import ActivityTimelineWidget from './ActivityTimelineWidget';

// const color = ({
//   primary: colorfull[6],
//   secondary: colorfull[3],
//   third: colorfull[2],
//   fourth: colorfull[4],
// });

// const colorsPie = [purple[500], blue[500], cyan[500], pink[500]];

function CalendarActivityDateWidget(props) {
  const [date, setDate] = useState(new Date());
  const { classes } = props;

  const onChange = dateParams => setDate(dateParams);

  return (
    <PapperBlock whiteBg noMargin title="My School Calendar" icon="ion-ios-time-outline" desc="">
      <Grid container spacing={2}>
        <Grid item md={6} xs={6}>
          <Grid container className={classes.secondaryWrap3}>
            <Paper className={classes.wrapperDate}>
              <section className={classes.calendarWrap}>
                <Calendar
                  onChange={onChange}
                  value={date}
                />
              </section>
            </Paper>
          </Grid>
        </Grid>
        <Grid className={classes.activitytimeline} item md={6} xs={6} >
          <ActivityTimelineWidget />
        </Grid>
      </Grid>
    </PapperBlock>
  );
}

CalendarActivityDateWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CalendarActivityDateWidget);