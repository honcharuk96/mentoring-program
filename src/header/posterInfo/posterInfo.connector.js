import { connect } from 'react-redux';

import PosterInfoComponent from './posterInfo.component';
import { getPosterByID } from '../../actions/posterActions';

function mapStateToProps(state) {
  const { posters } = state;
  return { poster: posters.posterDataById };
}
const mapDispatchToProps = dispatch => ({
  getPosterById: posterId => {
    dispatch(getPosterByID(posterId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PosterInfoComponent);
