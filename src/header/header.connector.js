import { connect } from 'react-redux';
import HeaderComponent from './header.component';
import { setSelectedPoster } from '../actions/posterActions';

function mapStateToProps(state) {
  const { posters } = state;
  return { selectedPoster: posters.selectedPoster };
}
const mapDispatchToProps = dispatch => ({
  setSelectedPoster: poster => {
    dispatch(setSelectedPoster(poster));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
