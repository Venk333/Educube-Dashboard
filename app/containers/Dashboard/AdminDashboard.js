import React from 'react';
import PropTypes from 'prop-types';
import brand from 'dan-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
// import colorfull from 'dan-api/palette/colorfull';
import {
  PapperBlock,
  SourceReader,
  TodayFeeChartWidget,
  MonthlyFeeChartWidget,
  YearlyFeeChartWidget,
  SalesChartWidget,
  CarouselWidget,
  TableWidget,
  NewsWidget,
  CalculatorWidget,

} from 'dan-components';

import AdminCounterChart from '../../components/Widget/AdminCounterChart';

import AdminSchoolFeeWidget from '../../components/Widget/AdminSchoolFeeWidget';
import AdminSchoolTransport from '../../components/Widget/AdminSchoolTransport';
import SchoolPayrollChart from '../../components/Widget/SchoolPayrollChart';
import ActiveStudentsLineChart from '../../components/Widget/ActiveStudentsLineChart';
import StudentWiseAdmissionChart from '../../components/Widget/StudentWiseAdmissionChart';
import SchoolStudentStrengthChart from '../../components/Widget/SchoolStudentStrengthChart';
import StudentAbsenteesChart from '../../components/Widget/StudentAbsenteesChart';
import StudentTransportChart from '../../components/Widget/StudentTransportChart';


// import AdminDahboard from './Charts/AdminBarStackedChart'
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
// import {AdminBarStackedChart} from './Charts/AdminBarStackedChart'
import styles from './dashboard-jss';

// const color = ({
//   primary: colorfull[6],
//   secondary: colorfull[3],
//   third: colorfull[2],
//   fourth: colorfull[4],
// });

function AdminDahboard(props) {
  const title = brand.name + ' - Admin Dashboard';
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
        <AdminCounterChart />
      </Grid>
      <Divider className={classes.divider} />
      {/* <SalesChartWidget /> */}
      {/* <Divider className={classes.divider} /> */}
      {/* <TableWidget /> */}
      {/* <Divider className={classes.divider} /> */}
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={12} xs={12}>
          <AdminSchoolFeeWidget />
        </Grid>
        <Grid item md={12} xs={12}>
          <AdminSchoolTransport />
        </Grid>

      </Grid>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <StudentTransportChart />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <StudentWiseAdmissionChart />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <SchoolStudentStrengthChart />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <StudentAbsenteesChart />
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.root}>
        <Grid item md={12} xs={12}>
          <PapperBlock title="School Wise Payroll Processed" icon="ion-ios-pulse-outline" desc="">
            <SchoolPayrollChart />
          </PapperBlock>
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.root}>
        <Grid item md={12} xs={12}>
          <PapperBlock title="School Wise Active, Inactive and TC Students" icon="ion-ios-pulse-outline" desc="">
            <ActiveStudentsLineChart />
          </PapperBlock>
        </Grid>
      </Grid>


    </div>
  );
}

AdminDahboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminDahboard);
