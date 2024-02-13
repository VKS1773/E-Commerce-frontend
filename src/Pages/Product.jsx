import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../components/Breadcrums/Breadcrum';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox';
import { Relatedproducts } from '../components/RelatedProducts/Relatedproducts';

const Product=()=>{
  const {all_product}=useContext(ShopContext);
  const {productId} =useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <Relatedproducts/>
    </div>
  )
}

export default Product;