import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endpoint';
import ProductCard from '../../components/product/ProductCard';
import Layout from '../../components/layout/Layout';
import detailStyle from '../ProductDetail/productdetail.module.css';
import {Loader}  from '../../components/Loader.jsx';
function ProductDetail() {
  const { productId } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    
    setLoading(true); 
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        setDetail(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [productId]); 
  if (loading) {
    return <div>
      <Loader /></div>; 
  
  }

  return (
    <Layout>
      <div className={detailStyle['detailContainer']}>ProductDetail</div>
      <ProductCard product={detail} 
      flex={true}
      flexedDescription={true}
      BaketRender={true}/>
      
    </Layout>
  );
}  

export default ProductDetail;






// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { productUrl } from '../../Api/endpoint';
// import ProductCard from '../../components/product/ProductCard';
// import Layout from '../../components/layout/Layout';
// import detailStyle from '../ProductDetail/productdetail.module.css';

// function ProductDetail() {
//   const { productId } = useParams();
//   console.log('Product ID:', productId);
  
//   const [detail, setDetail] = useState({});
//   const [Loading, setLoading] = useState(false)

//   useEffect(() => {
//     setLoading(true)
//     axios.get(`${productUrl}/products/${productId}`)
//       .then((res) => {
//         setDetail(res.data);
//         setLoading(false)
//       })
//       .catch((err) => {
//         setLoading(flase)
//       });
//   }, [productId]);

//   return (
//     <Layout>
//       {Loading? <BeatLoader color='#36d7b7' />: 
//       <div className={detailStyle['detailContainer']}>
//       {Object.keys(detail).length === 0 ? (
//         <div>No product found</div>
//       ) : (
//         <ProductCard product={detail} />
//       )}
//     </div>
//       }
      
//     </Layout>
//   );
// }

// export default ProductDetail;






















