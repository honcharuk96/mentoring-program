import { connect } from 'react-redux';
import ListPosters from './listPosters.component';

function mapStateToProps(state) {
  const { posters } = state;
  return { listOfPosters: posters.data };
}

export default connect(mapStateToProps, null)(ListPosters);
