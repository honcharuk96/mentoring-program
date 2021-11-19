import { connect } from 'react-redux';
import { setSelectedPoster } from '../actions/posterActions';
import PosterComponent from './poster.component';

const mapDispatchToProps = dispatch => ({
  setSelectedPoster: poster => {
    dispatch(setSelectedPoster(poster));
  },
});

export default connect(null, mapDispatchToProps)(PosterComponent);
