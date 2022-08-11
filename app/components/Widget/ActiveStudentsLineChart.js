import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import ThemePallete from 'dan-api/palette/themePalette';
import colorfull from 'dan-api/palette/colorfull';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { dataLine } from '../../api/chart/chartMiniData';
import styles from '../../containers/Charts/demos/fluidChart-jss';

const theme = createMuiTheme(ThemePallete.magentaTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
  fourth: colorfull[4],

});

const CustomizedLabel = props => {
  const {
    x,
    y,
    stroke,
    value
  } = props;
  return (
    <text x={x} y={y} dy={-4} fill={stroke} fillOpacity="0.8" fontSize={10} textAnchor="middle">
      { value }
    </text>
  );
};

CustomizedLabel.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  value: PropTypes.number,
  stroke: PropTypes.string,
};

CustomizedLabel.defaultProps = {
  x: 0,
  y: 0,
  value: 0,
  stroke: '#000'
};

function LineCustomLabel(props) {
  const { classes } = props;
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer width={1000} height="100%">
        <LineChart
          width={1000}
          height={300}
          data={dataLine}
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
          <Line type="monotone" dataKey="Active" strokeWidth={3} stroke={color.primary} label={<CustomizedLabel stroke={color.primary} />} />
          <Line type="monotone" dataKey="Inactive" strokeWidth={3} stroke={color.fourth} label={<CustomizedLabel stroke={color.fourth} />} />
          <Line type="monotone" dataKey="TC" strokeWidth={3} stroke={color.primary} label={<CustomizedLabel stroke={color.primary} />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

LineCustomLabel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LineCustomLabel);
