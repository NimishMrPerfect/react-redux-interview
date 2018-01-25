import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../../components/home';

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../store/actions'

const mapStateToProps = state => ({
	count: state.counter.count,
	isIncrementing: state.counter.isIncrementing,
	isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
}, dispatch);

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(Home);
