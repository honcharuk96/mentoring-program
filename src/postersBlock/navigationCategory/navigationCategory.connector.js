import { connect } from 'react-redux';
import NavigationCategory from './navigationCategory.component';
import { setActiveNav, setVariantSort } from '../../actions/navigatinActions';
import { getPostersByActiveNavWithSort } from '../../actions/posterActions';

function mapStateToProps(state) {
  const { navigation } = state;
  return { activeNav: navigation.activeNav };
}
const mapDispatchToProps = dispatch => ({
  changeActiveNav: async nav => {
    dispatch(setActiveNav(nav));
    await dispatch(getPostersByActiveNavWithSort());
  },
  changeVariantSort: async variant => {
    dispatch(setVariantSort(variant));
    await dispatch(getPostersByActiveNavWithSort());
  },
  getPostersByActiveNavWithSort: async () => {
    await dispatch(getPostersByActiveNavWithSort());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationCategory);
