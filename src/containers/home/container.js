import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../../components/home';

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../store/actions'

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(Home);
