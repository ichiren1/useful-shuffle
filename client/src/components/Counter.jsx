import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import AddIconButton from 'material-ui/svg-icons/content/add-circle';
import RemoveIconButton from 'material-ui/svg-icons/content/remove-circle';
import {blue500, red500} from 'material-ui/styles/colors';

const Counter = ({value, onClickPlus, onClickMinus}) => (
  <Paper>
    <h2>Count: {value}</h2>
    <IconButton tooltip="増やす" onClick={onClickPlus}>
      <AddIconButton color={blue500} />
    </IconButton>
    <IconButton tooltip="減らす" onClick={onClickMinus}>
      <RemoveIconButton color={red500} />
    </IconButton>
  </Paper>
);

Counter.propTypes = {
  value: React.PropTypes.number.isRequired,
  onClickPlus: React.PropTypes.func.isRequired,
  onClickMinus: React.PropTypes.func.isRequired
};

export default Counter;
