import React from 'react';
import { dataTransport } from 'dan-api/chart/chartMiniData';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import colorfull from 'dan-api/palette/colorfull';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';
import ThemePallete from 'dan-api/palette/themePalette';
import PropTypes from 'prop-types';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import green from '@material-ui/core/colors/green';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
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
// import styles from './widget-jss';
import avatarApi from 'dan-api/images/avatars';
import PapperBlock from '../PapperBlock/PapperBlock';


const theme = createMuiTheme(ThemePallete.purpleTheme);
const color = ({
  primary: colorfull[6],
  secondary: colorfull[3],
  third: colorfull[2],
  fourth: colorfull[4],
});

const styles = ({

  row: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: -70

  },
  firstDiv: {
    display: 'flex',
    justifyContent: 'column',
  },
  firstDiv1: {
    display: 'flex',
    justifyContent: 'column',
    marginTop: -50
  },
  firstDiv2: {
    display: 'flex',
    justifyContent: 'column',
    marginTop: -50
  },
  firstInnerDiv: {
    display: 'flex',
    justifyContent: 'row',
    marginLeft: 80,
    marginTop: 15

  },
  firstInnerDiv1: {

    marginLeft: 23,

  },

  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 100,
    height: 100,
    marginTop: 120,
    marginLeft: 30
  },
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: pink[500],
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  
  // firstDiv : {
  //     marginLeft : -200
  // }
});

const colorsPie = [purple[500], blue[500], cyan[500], pink[500]];


function NoticeBoard(props) {
  const { classes } = props;
  return (
    <PapperBlock title="My Details" icon="ion-md-person" desc = "Details of the student.">
      <div className={classes.secondaryWrap1}>
        {/* <div className={classes.rightTop}>
              <Chip label="" className={classes.chip} color="primary" />
            </div> */}
        <Grid container>
          <div className={classes.row}>
            <Avatar alt="Remy Sharp" src={avatarApi[7]} className={classes.bigAvatar} />
            {/* <Avatar
              alt="Adelle Charles"
              src={avatarApi[5]}
              className={classNames(classes.bigAvatar)}
            /> */}
          </div>
          {/* <div className={classes.firstDiv}>

            <div className={classes.firstInnerDiv}>
            <p>Name:</p>

            <p className={classes.firstInnerDiv}> Sachin A</p>
            </div>
            <div className={classes.firstInnerDiv}>
            <p className={classes.firstInnerDiv}>Date Of Birth:</p>
            </div>
            <div>
            <p className={classes.firstInnerDiv}> 0.7.08.2006</p>
            </div>
            <div className={classes.firstInnerDiv}>
            <p className={classes.firstInnerDiv} >Class:</p>
            </div>
            <div>
            <p className={classes.firstInnerDiv}> 10</p>
            </div>

          </div>
          <div className={classes.firstDiv1}>

         <div className={classes.firstInnerDiv1}>
         <p>Name:</p>

         <p className={classes.firstInnerDiv}> Sachin A</p>
         </div>
         <div className={classes.firstInnerDiv}>
         <p className={classes.firstInnerDiv}>Date Of Birth:</p>
         </div>
         <div>
         <p className={classes.firstInnerDiv}> 0.7.08.2006</p>
         </div>
         <div className={classes.firstInnerDiv}>
         <p className={classes.firstInnerDiv} >Class:</p>
         </div>
         <div>
         <p className={classes.firstInnerDiv}> 10</p>
         </div>

          </div>
          <div className={classes.firstDiv2}>

         <div className={classes.firstInnerDiv1}>
         <p>Name1:</p>

         <p className={classes.firstInnerDiv}> Sachin A</p>
         </div>
         <div className={classes.firstInnerDiv}>
         <p className={classes.firstInnerDiv}>Date Of Birth:</p>
         </div>
         <div>
         <p className={classes.firstInnerDiv}> 0.7.08.2006</p>
         </div>
         <div className={classes.firstInnerDiv}>
         <p className={classes.firstInnerDiv} >Class:</p>
         </div>
         <div>
         <p className={classes.firstInnerDiv}> 10</p>
         </div>

          </div> */}
          <Grid justify="column">
            <div className={classes.firstInnerDiv}>
              <p>Name:</p>

              <p className={classes.firstInnerDiv1}> Sachin A</p>
            </div>
            <div className={classes.firstInnerDiv}>
              <p>Gender:</p>

              <p className={classes.firstInnerDiv1}> Male</p>
            </div>
            <div className={classes.firstInnerDiv}>
              <p>Father Name:</p>

              <p className={classes.firstInnerDiv1}> Saravana</p>
            </div>
            <div className={classes.firstInnerDiv}>
              <p>Mother Name:</p>

              <p className={classes.firstInnerDiv1}> Srimathi</p>
            </div>
          </Grid>

          <Grid justify="column">
            <div className={classes.firstInnerDiv}>
              <p>Date Of Birth:</p>

              <p className={classes.firstInnerDiv1}> 07.08.2006</p>
            </div>
            <div className={classes.firstInnerDiv}>
              <p>Religion:</p>

              <p className={classes.firstInnerDiv1}> Hindu</p>
            </div>
            <div className={classes.firstInnerDiv}>
              <p>Father Occupation:</p>

              <p className={classes.firstInnerDiv1}> Business</p>
            </div>
            <div className={classes.firstInnerDiv}>
              <p>Admission Date:</p>

              <p className={classes.firstInnerDiv1}> 06.05.2020</p>
            </div>
          </Grid>


          <Grid justify="column">
            <div className={classes.firstInnerDiv}>
              <p>Class:</p>

              <p className={classes.firstInnerDiv1}> 10</p>
            </div>
            <div className={classes.firstInnerDiv}>
              <p>Section:</p>

              <p className={classes.firstInnerDiv1}>A</p>
            </div>
            <div className={classes.firstInnerDiv}>
              <p>Roll:</p>

              <p className={classes.firstInnerDiv1}> 1005</p>
            </div>
            <div className={classes.firstInnerDiv}>
              <p>Phone:</p>

              <p className={classes.firstInnerDiv1}> 9536124612</p>
            </div>
          </Grid>
        </Grid>

      </div>
      <Divider className={classes.divider} />
      <Grid container justify="center" />
    </PapperBlock>
  );
}

export default withStyles(styles)(NoticeBoard);
