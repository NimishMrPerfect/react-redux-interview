import { connect } from 'react-redux'
import Results from '../../components/results';

const mapStateToProps = state => ({
	count: state.counter.count,
});

export default connect(
	mapStateToProps
)(Results)
