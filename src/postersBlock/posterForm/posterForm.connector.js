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
  getPostersByActiveNavWithSort: () => {
    dispatch(getPostersByActiveNavWithSort());
  },
  getPosterById: posterId => {
    dispatch(getPosterByID(posterId));
  },
  addPoster: data => {
    dispatch(addPoster(data));
    dispatch(getPostersByActiveNavWithSort());
  },
  updatePoster: data => {
    dispatch(updatePoster(data));
    dispatch(getPostersByActiveNavWithSort());
  },
  deletePoster: id => {
    dispatch(deletePoster(id));
    dispatch(getPostersByActiveNavWithSort());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PosterForm);
