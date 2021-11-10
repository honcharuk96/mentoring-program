import { connect } from 'react-redux';
import PosterCountComponent from './postersCount.component';

function mapStateToProps(state) {
  const { posters } = state;
  return { numberOfPosters: posters.numberOfPosters };
}

export default connect(mapStateToProps, null)(PosterCountComponent);
