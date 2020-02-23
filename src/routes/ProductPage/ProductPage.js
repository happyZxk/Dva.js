import React from 'react';
import { connect } from 'dva';
import Product from '../../components/Product'
class ProductPage extends React.Component {
    render() {
        console.log(this.props);
        let { productList, dispatch,history } = this.props;
        return (<div>
            ProductPage
            <Product dispatch={dispatch} title="商品类型" productList={productList} />
        </div>)
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        productList: state.product
    }
}
export default connect(mapStateToProps)(ProductPage);