import { connect } from 'react-redux';
import NavigationCategory from './navigationCategory.component';
import { setActiveNav, setVariantSort } from '../../actions/navigatinActions';
import { getPostersByActiveNavWithSort } from '../../actions/posterActions';

function mapStateToProps(state) {
  const { navigation } = state;
  return { activeNav: navigation.activeNav };
}
const mapDispatchToProps = dispatch => ({
  changeActiveNav: nav => {
    dispatch(setActiveNav(nav));
    dispatch(getPostersByActiveNavWithSort());
  },
  changeVariantSort: variant => {
    dispatch(setVariantSort(variant));
    dispatch(getPostersByActiveNavWithSort());
  },
  getPostersByActiveNavWithSort: () => {
    dispatch(getPostersByActiveNavWithSort());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationCategory);
