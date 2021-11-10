import { connect } from 'react-redux';
import { getPosters, getPostersByCategory } from './actions/posterActions';
import App from './App';

const mapDispatchToProps = dispatch => ({
  getPosters: () => {
    dispatch(getPosters());
  },
  getPostersByCategory: category => {
    dispatch(getPostersByCategory(category));
  },
});

export default connect(null, mapDispatchToProps)(App);
