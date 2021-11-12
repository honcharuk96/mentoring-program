import { connect } from 'react-redux';
import { getPostersByActiveNavWithSort } from './actions/posterActions';
import App from './App';

function mapStateToProps(state) {
  const { navigation } = state;
  return { activeNav: navigation.activeNav };
}
const mapDispatchToProps = dispatch => ({
  getPostersByActiveNavWithSort: () => {
    dispatch(getPostersByActiveNavWithSort());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
