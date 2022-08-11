import { dataTransport } from 'dan-api/chart/chartMiniData';
import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import colorfull from 'dan-api/palette/colorfull';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';
import ThemePallete from 'dan-api/palette/themePalette';
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend
} from 'recharts';
import PapperBlock from '../PapperBlock/PapperBlock';


const theme = createMuiTheme(ThemePallete.purpleTheme);
const color = ({
  primary: colorfull[6],
  secondary: colorfull[3],
  third: colorfull[2],
  fourth: colorfull[4],
});

const colorsPie = [purple[500], blue[500], cyan[500], pink[500]];


function PieSimple() {
  return (
    <PapperBlock title="School mode of Transport %" icon="ion-ios-stats-outline" desc="">
      <PieChart
        width={500}
        height={245}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <Pie
          data={dataTransport}
          cx={200}
          cy={100}
          dataKey="value"
          innerRadius={50}
          outerRadius={90}
          fill="#FFFFFF"
          paddingAngle={5}
          label
        >
          {
            dataTransport.map((entry, index) => <Cell key={index.toString()} fill={colorsPie[index % colorsPie.length]} />)
          }
        </Pie>
        <Legend iconType="circle" verticalALign="bottom" iconSize={10} />
      </PieChart>
    </PapperBlock>
  );
}

export default PieSimple;
