import { connect } from 'react-redux';
import HeaderComponent from './header.component';
import { setSelectedPoster } from '../actions/posterActions';
import { openModal } from '../actions/modalFormActions';

function mapStateToProps(state) {
  const { posters } = state;
  return { selectedPoster: posters.selectedPoster };
}
const mapDispatchToProps = dispatch => ({
  setSelectedPoster: poster => {
    dispatch(setSelectedPoster(poster));
  },
  openModal: (data, id) => {
    dispatch(openModal(data, id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
