import { connect } from 'react-redux';
import { withRouter } from '../common/hocs/withRouter';
import ProductDescriptionPage from './ProductDescriptionPage';
import { getProduct } from './../../reducers/productReducer';

const mapStateToProps = (state) => {
    return {
        ...state.product,
        selectedCurrency: state.currencies.selectedCurrency
    }
}

export default connect(mapStateToProps,{getProduct})(withRouter(ProductDescriptionPage))