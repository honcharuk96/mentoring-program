import { connect } from 'react-redux';
import {
  addPoster,
  deletePoster,
  getPosterByID,
  getPostersByActiveNavWithSort,
  updatePoster,
} from '../../actions/posterActions';
import PosterForm from './posterForm.component';

function mapStateToProps(state) {
  const { posters } = state;
  return { posterDataById: posters.posterDataById };
}

const mapDispatchToProps = dispatch => ({
  getPosterById: async posterId => {
    await dispatch(getPosterByID(posterId));
  },
  addPoster: async data => {
    await dispatch(addPoster(data));
    await dispatch(getPostersByActiveNavWithSort());
  },
  updatePoster: async data => {
    await dispatch(updatePoster(data));
    await dispatch(getPostersByActiveNavWithSort());
  },
  deletePoster: async id => {
    await dispatch(deletePoster(id));
    await dispatch(getPostersByActiveNavWithSort());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PosterForm);
