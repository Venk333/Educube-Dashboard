import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';
// import colorfull from 'dan-api/palette/colorfull';
import {
  PieChart, Pie, Cell,
  Legend
} from 'recharts';
// import { dataSales } from 'dan-api/chart/chartData';
import { dataCastwise } from 'dan-api/chart/chartMiniData';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

// const color = ({
//   primary: colorfull[6],
//   secondary: colorfull[3],
//   third: colorfull[2],
//   fourth: colorfull[4],
// });

const colorsPie = [purple[500], blue[500], cyan[500], pink[500]];

function CastWisePieChartWidget(props) {
  const { classes } = props;
  return (
    <PapperBlock whiteBg noMargin title="Student's Strength Caste Wise" icon="ion-ios-stats-outline" desc="">
      <Grid container spacing={2}>
        <Grid item md={12} xs={12}>
          <Grid container className={classes.secondaryWrap}>
            <PieChart width={300} height={300}>
              <Pie
                data={dataCastwise}
                cx={150}
                cy={100}
                dataKey="value"
                innerRadius={40}
                outerRadius={70}
                fill="#FFFFFF"
                paddingAngle={5}
                label
              >
                {
                  dataCastwise.map((entry, index) => <Cell key={index.toString()} fill={colorsPie[index % colorsPie.length]} />)
                }
              </Pie>
              <Legend iconType="circle" verticalALign="bottom" iconSize={10} />
            </PieChart>
          </Grid>
        </Grid>
      </Grid>
    </PapperBlock>
  );
}

CastWisePieChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CastWisePieChartWidget);
