import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import Computer from '@material-ui/icons/Computer';
import Toys from '@material-ui/icons/Toys';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Style from '@material-ui/icons/Style';
import Typography from '@material-ui/core/Typography';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';
import colorfull from 'dan-api/palette/colorfull';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart, Pie, Cell,
  Legend
} from 'recharts';
import { dataYearly } from 'dan-api/chart/chartData';
import { dataPay } from '../../api/chart/chartMiniData';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

const color = ({
  primary: colorfull[6],
  secondary: colorfull[3],
  third: colorfull[2],
  fourth: colorfull[4],
});

const colorsPie = [purple[500], blue[500], cyan[500], pink[500]];

function AdminSchoolFeeWidget(props) {
  const { classes } = props;
  return (
    <Grid container spacing={2}>
      <Grid item md={12} xs={12}>
        <div className={classes.chartWrap}>
          {/* <Bar dataKey="Bus" stackId="a" fillOpacity="0.8" fill={color.third} />
          <Bar dataKey="Bicycle" stackId="a" fillOpacity="0.8" fill={color.fourth} />
          <Bar dataKey="Parents" stackId="a" fillOpacity="0.8" fill={color.secondary } />
          <Bar dataKey="Others" stackId="a" fillOpacity="0.8" fill={color.primary} /> */}

          {/* <ResponsiveContainer width={1000} height="100%">
        <BarChart
          width={1000}
          height={450}
          data={dataAdmin}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <XAxis dataKey="name" tickLine={false} />
          <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <CartesianAxis vertical={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="cash" stackId="a" fillOpacity="0.8" fill={color.third} />
          <Bar dataKey="cheque" stackId="a" fillOpacity="0.8" fill={color.fourth} />
          <Bar dataKey="DD" stackId="a" fillOpacity="0.8" fill={color.secondary } />
          <Bar dataKey="POS" stackId="a" fillOpacity="0.8" fill={color.primary} />


        </BarChart>
      </ResponsiveContainer> */}
          <div className={classes.chartFluid2}>
            <ResponsiveContainer width={1000} height="100%">
              <BarChart
                width={1000}
                height={450}
                data={dataPay}
                margin={{
                  top: 5,
                  right: 20,
                  left: 20,
                  bottom: 5
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color.primary} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={color.primaryDark} stopOpacity={1} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color.secondary} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={color.secondaryDark} stopOpacity={1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" tickLine={false} />
                <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <CartesianAxis vertical={false} />
                <Tooltip />
                <Legend />

                <Bar dataKey="Teaching" fillOpacity="0.8" fill={color.secondary} />
                <Bar dataKey="NonTeaching" fillOpacity="0.8" fill={color.primary} />
                {/* <Bar dataKey="Bus" stackId="a" fillOpacity="0.8" fill={color.third} />
          <Bar dataKey="Bicycle" stackId="a" fillOpacity="0.8" fill={color.fourth} />
          <Bar dataKey="Parents" stackId="a" fillOpacity="0.8" fill={color.secondary } />
          <Bar dataKey="Others" stackId="a" fillOpacity="0.8" fill={color.primary} />  */}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

AdminSchoolFeeWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminSchoolFeeWidget);
