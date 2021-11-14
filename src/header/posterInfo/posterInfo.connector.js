import { connect } from 'react-redux';

import PosterInfoComponent from './posterInfo.component';
import { getPosterByID } from '../../actions/posterActions';

function mapStateToProps(state) {
  const { posters } = state;
  return { poster: posters.posterDataForPosterInfo };
}
const mapDispatchToProps = dispatch => ({
  getPosterById: async posterId => {
    await dispatch(getPosterByID(posterId, true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PosterInfoComponent);
