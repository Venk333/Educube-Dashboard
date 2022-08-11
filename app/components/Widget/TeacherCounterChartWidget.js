import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  BarChart, Bar,
  AreaChart, Area,
  LineChart, Line,
} from 'recharts';
import { data1 } from 'dan-api/chart/chartMiniData';
import colorfull from 'dan-api/palette/colorfull';
import AssignmentReturned from '@material-ui/icons/AssignmentReturned';
import CounterWidget from '../Counter/CounterWidget';
import styles from './widget-jss';


function TeacherCounterChartWidget(props) {
  const { classes } = props;
  return (
    <div className={classes.rootCounter}>
      <Grid container spacing={2}>
        <Grid item md={3} xs={6}>
          <CounterWidget
            color={colorfull[6]}
            start={0}
            end={31}
            duration={3}
            title="Submission"
            // unitBefore="$ "
            unitAfter="/36"

          >
            <AssignmentReturned className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item md={3} xs={6}>
          <CounterWidget
            color={colorfull[3]}
            start={0}
            end={30}
            duration={3}
            title="Class Attendance"
            unitAfter="/36"

          >
            <BarChart width={100} height={40} data={data1}>
              <Bar dataKey="uv" fill="#ffffff" />
            </BarChart>
          </CounterWidget>
        </Grid>
        <Grid item md={3} xs={6}>
          <CounterWidget
            color={colorfull[5]}
            start={0}
            end={4}

            duration={3}
            title="Absents"
          >
            <AreaChart width={100} height={60} data={data1}>
              <Area type="monotone" dataKey="uv" stroke="#FFFFFF" fill="rgba(255,255,255,.5)" />
            </AreaChart>
          </CounterWidget>
        </Grid>
        <Grid item md={3} xs={6}>
          <CounterWidget
            color={colorfull[4]}
            start={0}

            end={86}
            duration={3}
            title="Attendance"
            unitAfter="%"

          >
            <LineChart width={100} height={80} data={data1}>
              <Line type="monotone" dataKey="pv" stroke="#FFFFFF" strokeWidth={2} />
            </LineChart>
          </CounterWidget>
        </Grid>
      </Grid>
    </div>
  );
}

TeacherCounterChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeacherCounterChartWidget);

