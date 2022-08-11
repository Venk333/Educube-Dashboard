import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import PapperBlock from '../PapperBlock/PapperBlock';
import styles from './widget-jss';

const dataTimeline = [
  {
    time: '8:30 AM',
<<<<<<< HEAD
    title: 'Assembly',
    // desc: 'Independence Day Celebration.'
=======
    title: 'Daily campus rounds and Prayer',
    desc: 'Quisque a consequat ante, at volutpat enim.'
>>>>>>> 1fa10a2a9456d9ed82d728664fc26671ef6c4dc2
  },
  {
    time: '9:00 AM',
    title: 'Attendance',
<<<<<<< HEAD
    // desc: 'Aenean sit amet magna vel magna fringilla fermentum.'
=======
    desc: 'Aenean sit amet magna vel magna fringilla fermentum.'
>>>>>>> 1fa10a2a9456d9ed82d728664fc26671ef6c4dc2
  },
  {
    time: '9:30 AM',
    title: 'Discussion with Teachers',
<<<<<<< HEAD
    // desc: 'Nam posuere accumsan porta.'
=======
    desc: 'Nam posuere accumsan porta.'
>>>>>>> 1fa10a2a9456d9ed82d728664fc26671ef6c4dc2
  },
  {
    time: '10:00 AM',
    title: 'Meeting with Class Teachers',
<<<<<<< HEAD
    desc: 'Classteacher meeting'
=======
    desc: 'Curabitur egestas consequat lorem.'
>>>>>>> 1fa10a2a9456d9ed82d728664fc26671ef6c4dc2
  },
  {
    time: '11:30 AM',
    title: 'Pending Activities Completion',
    desc: 'Vestibulum nec mi suscipit, dapibus purus a'
  },
];

function ActivityTimelineWidget(props) {
  const { classes } = props;
  return (
    <div className={classes.activityWrap}>
      <List>
        {dataTimeline.map((item, index) => (
          <ListItem key={index.toString()} className={classes.activityList}>
            <ListItemIcon>
              <div className={classes.timeDot}>
                <time>{item.time}</time>
                <span />
              </div>
            </ListItemIcon>
            <ListItemText primary={item.title} className={classes.activityText} secondary={item.desc} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

ActivityTimelineWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

<<<<<<< HEAD
export default withStyles(styles)(ActivityTimelineWidget);
=======
export default withStyles(styles)(ActivityTimelineWidget);
>>>>>>> 1fa10a2a9456d9ed82d728664fc26671ef6c4dc2
