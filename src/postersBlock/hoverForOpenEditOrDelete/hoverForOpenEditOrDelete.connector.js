import { connect } from 'react-redux';
import HoverForOpenEditOrDeleteComponent from './hoverForOpenEditOrDelete.component';
import { openModal } from '../../actions/modalFormActions';

const mapDispatchToProps = dispatch => ({
  openModal: (data, id) => {
    dispatch(openModal(data, id));
  },
});

export default connect(null, mapDispatchToProps)(HoverForOpenEditOrDeleteComponent);
