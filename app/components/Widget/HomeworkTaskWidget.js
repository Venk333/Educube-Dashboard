import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import PapperBlock from '../PapperBlock/PapperBlock';
import styles from './widget-jss';

const dataTasks = [
  {
    title: 'Rohan - English Homework',
    desc: 'Homework of Chapter 4'
  },
  {
    title: 'Divya - English Homework',
    desc: 'Homework of Chapter 4'
  },
  {
    title: 'Anjali - English Homework',
    desc: 'Homework of Chapter 4'
  },
  {
    title: 'Priya - English Grammer',
    desc: 'Homework of Chapter 2'
  },
];

function HomeworkTaskWidget(props) {
  const [checked, setChecked] = useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const { classes } = props;
  return (
    <PapperBlock
      title="Homework / Assignment"
      icon="ion-ios-checkbox-outline"
      noMargin
      whiteBg
      colorMode
      desc="Not Submitted"
      className={classes.root}
    >
      <List className={classes.taskList}>
        {dataTasks.map((item, value) => (
          <Fragment key={value}>
            <ListItem
              key={value}
              role={undefined}
              dense
              button
              onClick={handleToggle(value)}
              className={
                classNames(
                  classes.listItem,
                  checked.indexOf(value) !== -1 ? classes.done : ''
                )
              }
            >
              <Checkbox
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={item.title} secondary={item.desc} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Fragment>
        ))}
      </List>
    </PapperBlock>
  );
}

HomeworkTaskWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeworkTaskWidget);
