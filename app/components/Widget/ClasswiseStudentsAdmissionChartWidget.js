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
  Legend,
  ResponsiveContainer
} from 'recharts';
import { dataClasswise } from 'dan-api/chart/chartData';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

const color = ({
  primary: colorfull[6],
  secondary: colorfull[3],
  third: colorfull[2],
  fourth: colorfull[4],
});

// const colorsPie = [purple[500], blue[500], cyan[500], pink[500]];

function ClasswiseStudentsAdmissionChartWidget(props) {
  const { classes } = props;
  return (
    <PapperBlock whiteBg noMargin title="Classwise Student's Admission" icon="ion-ios-stats-outline" desc="">
      <Grid container spacing={2}>
        <Grid item md={12} xs={12}>
          <div className={classes.chartWrap}>
            <div className={classes.chartFluid}>
              <ResponsiveContainer>
                <BarChart
                  width={800}
                  height={450}
                  data={dataClasswise}
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
                  <Bar dataKey="Male" stackId="a" fillOpacity="0.8" fill={color.secondary} />
                  <Bar dataKey="Female" stackId="a" fillOpacity="0.8" fill={color.primary} />
                  <Bar dataKey="MaleNew" stackId="a" fillOpacity="0.8" fill={color.third} />
                  <Bar dataKey="FemaleNew" stackId="a" fillOpacity="0.8" fill={color.fourth} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Grid>
      </Grid>
    </PapperBlock>
  );
}

ClasswiseStudentsAdmissionChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClasswiseStudentsAdmissionChartWidget);
