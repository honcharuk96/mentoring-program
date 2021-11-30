import { connect } from 'react-redux';
import { getPostersBySearch, setPosterDataFromForm } from '../../actions/posterActions';
import SearchForm from './searchForm.component';

const mapDispatchToProps = dispatch => ({
  setPosterDataFromForm: async searchData => {
    dispatch(setPosterDataFromForm(searchData));
    await dispatch(getPostersBySearch());
  },
});

export default connect(null, mapDispatchToProps)(SearchForm);
