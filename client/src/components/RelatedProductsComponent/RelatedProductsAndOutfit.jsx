import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx'

class RelatedProductsAndOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return (
      <>
      <RelatedProducts productId={this.props.productId}/>
      <YourOutfit productId={this.props.productId}/>
      </>
    )
  }

}

export default RelatedProductsAndOutfit;