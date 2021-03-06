import classes from './ProductDescriptionPage.module.css';
import { Component } from 'react';
import Gallery from './gallery/Gallery';
import ProductDetails from './product_details/ProductDetails';
import Loader from '../common/loader/Loader';

class ProductDescriptionPage extends Component {

    componentDidMount () {
        if(this.props.params.id !== this.props.id) {
            this.props.getProduct(this.props.params.id);
        }
        window.scrollTo(0, 0);
    }

    render() {
        if(this.props.isLoading) {
            return <Loader/>
        }
        return (
            <div className={classes.pdp + ' container'}>
                <div className={classes.pdp_grid}>
                    <Gallery gallery={this.props.gallery} name={this.props.name}/>
                    <ProductDetails {...this.props}/>
                </div>
            </div>
        )
    }
}

export default ProductDescriptionPage;