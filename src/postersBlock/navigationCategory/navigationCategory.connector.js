import { connect } from 'react-redux';
import NavigationCategory from './navigationCategory.component';
import {setActiveNav} from '../../actions/navigatinActions';

function mapStateToProps(state) {
  const { navigation } = state;
  return { activeNav: navigation.activeNav };
}
const mapDispatchToProps = dispatch => ({
  changeActiveNav: nav => {
    dispatch(setActiveNav(nav));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationCategory);
