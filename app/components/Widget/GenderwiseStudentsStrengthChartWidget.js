import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
import { dataGender } from 'dan-api/chart/chartData';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

const color = ({
  primary: colorfull[6],
  secondary: colorfull[3],
  third: colorfull[2],
  fourth: colorfull[4],
});

// const colorsPie = [purple[500], blue[500], cyan[500], pink[500]];

function GenderwiseStudentsStrengthChartWidget(props) {
  const { classes } = props;
  return (
    <PapperBlock whiteBg noMargin title="Gender wise Student's Strength" icon="ion-ios-stats-outline" desc="">
      <Grid container spacing={2}>
        <Grid item md={12} xs={12}>
          <div className={classes.chartWrap}>
            <div className={classes.chartFluid}>
              <ResponsiveContainer>
                <BarChart
                  width={800}
                  height={450}
                  data={dataGender}
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
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Grid>
      </Grid>
    </PapperBlock>
  );
}

GenderwiseStudentsStrengthChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GenderwiseStudentsStrengthChartWidget);
