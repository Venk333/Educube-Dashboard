import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import colorfull from 'dan-api/palette/colorfull';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { dataAnalysis } from 'dan-api/chart/chartData';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

const color = ({
  primary: colorfull[6],
  secondary: colorfull[3],
  third: colorfull[2],
  fourth: colorfull[4],
});

function PredictiveAnalysisChartWidget(props) {
  const { classes } = props;

  return (
    <PapperBlock whiteBg noMargin title="Predictive Analysis" icon="ion-ios-stats-outline" desc="">
      <Grid container spacing={2}>
        <Grid item md={12} xs={12}>
          <div className={classes.chartFluid}>
            <ResponsiveContainer>
              <ComposedChart
                width={800}
                height={450}
                data={dataAnalysis}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color.main} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={color.mainDark} stopOpacity={1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" tickLine={false} />
                <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <CartesianAxis vertical={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="MarksScored" barSize={60} fillOpacity="0.8" fill="url(#colorUv)" />
                <Line type="monotone" dataKey="PredictiveMarks" strokeWidth={5} stroke={color.secondary} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Grid>
      </Grid>
    </PapperBlock>
  );
}

PredictiveAnalysisChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PredictiveAnalysisChartWidget);
