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
  CounterChartWidget,
  TodayFeeChartWidget,
  MonthlyFeeChartWidget,
  YearlyFeeChartWidget,
  TodayFacaultyAttendenceChartWidget,
  TodayStudentAttendenceChartWidget,
  StudentAverageAttendenceChartWidget,
  ClasswiseStudentsAdmissionChartWidget,
  GenderwiseStudentsStrengthChartWidget,
  ReligionWisePieChartWidget,
  CastWisePieChartWidget,
  ActivityDateWidget,
  MyMessageWidget,
  MyTaskWidget,
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

function PrincipalDahboard(props) {
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
        <CounterChartWidget />
      </Grid>
      <Divider className={classes.divider} />
      {/* <SalesChartWidget /> */}
      {/* <Divider className={classes.divider} /> */}
      {/* <TableWidget /> */}
      {/* <Divider className={classes.divider} /> */}
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <TodayFeeChartWidget />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <MonthlyFeeChartWidget />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <YearlyFeeChartWidget />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <TodayFacaultyAttendenceChartWidget />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <TodayStudentAttendenceChartWidget />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <StudentAverageAttendenceChartWidget />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <ClasswiseStudentsAdmissionChartWidget />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <GenderwiseStudentsStrengthChartWidget />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <ReligionWisePieChartWidget />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CastWisePieChartWidget />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <ActivityDateWidget />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <MyMessageWidget />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={12} xs={12}>
          <MyTaskWidget />
        </Grid>
      </Grid>
    </div>
  );
}

PrincipalDahboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrincipalDahboard);
