import React from 'react';
import PropTypes from 'prop-types';
import brand from 'dan-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
// import colorfull from 'dan-api/palette/colorfull';
import {
//   PapperBlock,
  TeacherCounterChartWidget,
  AssignmentOverviewWidget,
  CalendarActivityDateWidget,
  SubjectAverageChartWidget,
  PredictiveAnalysisChartWidget,
  HomeworkTaskWidget,
  StudentHouseChartWidget,
  StudentStrengthCastwiseChartWidget,
  StudentBloodgroupChartWidget,
  MyNotesWidget,
//   SalesChartWidget,
//   CarouselWidget,
//   TableWidget,
//   NewsWidget,
//   CalculatorWidget,
} from 'dan-components';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   CartesianAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart, Pie, Cell,
//   Legend
// } from 'recharts';
// import { dataSales } from 'dan-api/chart/chartData';
// import { data2 } from 'dan-api/chart/chartMiniData';
// import styles from './widget-jss';
// import styless from '../Charts/BarCharts/widget-jss';
import styles from './dashboard-jss';

// const color = ({
//   primary: colorfull[6],
//   secondary: colorfull[3],
//   third: colorfull[2],
//   fourth: colorfull[4],
// });

function TeacherDahboard(props) {
  const title = brand.name + ' - Principal Dashboard';

  const description = brand.desc;
  const { classes } = props;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <Grid container className={classes.root}>
        <TeacherCounterChartWidget />
      </Grid>
      <Divider className={classes.divider} />
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <AssignmentOverviewWidget />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CalendarActivityDateWidget />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <SubjectAverageChartWidget />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <PredictiveAnalysisChartWidget />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <HomeworkTaskWidget />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <StudentHouseChartWidget />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <StudentStrengthCastwiseChartWidget />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <StudentBloodgroupChartWidget />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={12} xs={12}>
          <MyNotesWidget />

        </Grid>
      </Grid>
    </div>
  );
}

TeacherDahboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeacherDahboard);
