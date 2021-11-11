import { connect } from 'react-redux';
import { getPosters, getPostersByAcntiveNav } from './actions/posterActions';
import App from './App';

function mapStateToProps(state) {
  const { navigation } = state;
  return { activeNav: navigation.activeNav };
};
const mapDispatchToProps = dispatch => ({
  getPosters: () => {
    dispatch(getPosters());
  },
  getPostersByCategory: () => {
    dispatch(getPostersByAcntiveNav());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
