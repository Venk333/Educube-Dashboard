import React from 'react';
import { dataTransport } from 'dan-api/chart/chartMiniData';

import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import colorfull from 'dan-api/palette/colorfull';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';
import ThemePallete from 'dan-api/palette/themePalette';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import imgData from 'dan-api/images/imgData';
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend
} from 'recharts';
import { Paper } from '@material-ui/core';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';


const theme = createMuiTheme(ThemePallete.purpleTheme);
const color = ({
  primary: colorfull[6],
  secondary: colorfull[3],
  third: colorfull[2],
  fourth: colorfull[4],
});

const colorsPie = [purple[500], blue[500], cyan[500], pink[500]];


function NoticeBoard(props) {
  const { classes } = props;
  return (
    <PapperBlock title="Notice Board" icon="ion-ios-clipboard-outline">
      <div className={classes.secondaryWrap}>
        {/* <div className={classes.rightTop}>
              <Chip label="" className={classes.chip} color="primary" />
            </div> */}
        <Grid container justify="center">
          <br />
          <Button color="secondary" className={classes.buttonNoticeBoard}>
                15 August, 2022
          </Button>
          <br />
          <p>
            {' '}
Celebration of Independence Day in School, Students should be present in school at 7:30 AM.
          </p>
          <p className={classes.sentby}>
                    Vikaram Bhat / 5 min ago
          </p>
          <br />
          <br />
        </Grid>

      </div>
      <Divider className={classes.divider} />
      <Grid container justify="center" />
    </PapperBlock>
  );
}

export default withStyles(styles)(NoticeBoard);
