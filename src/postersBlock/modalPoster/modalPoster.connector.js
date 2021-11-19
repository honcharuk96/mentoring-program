import { connect } from 'react-redux';
import ModalPoster from './modalPoster.component';

function mapStateToProps(state) {
  const { modalForm } = state;
  return modalForm;
}

export default connect(mapStateToProps, null)(ModalPoster);
