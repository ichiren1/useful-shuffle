import { connect } from 'react-redux';

import Counter from '../components/Counter';
import { ACTION_INCREMENT, ACTION_DECREMENT } from '../actions';

const mapStateToProps = (state) => {
  return {value: state.value};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickPlus: () => dispatch(ACTION_INCREMENT),
    onClickMinus: () => dispatch(ACTION_DECREMENT)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
