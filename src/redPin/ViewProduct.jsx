// import useFetchproductData from "./useFetchproductData";

const ViewProduct = ({ productData }) => {
  // const { productData, error, loading } = useFetchproductData(
  //   "https://dummyjson.com/products/" + id
  // );

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error!</div>;

  return (
    <div className="viewProductCard">
      <h2>{productData.title}</h2>
      <div className="viewProductDetails"> 
        <div className="viewProductDetailInfo">
          {/* <span>Brand: {productData.brand}</span>
          <span>Stock: {productData.stock}</span> */}
          {/* <span>Discount: {productData.discountPercentage}%</span> */}
          <span>Category: {productData.category}</span>
          <span>Price: ${productData.price.toFixed(2)}</span>
          <span>Rating: {productData.rating}</span>
        </div>
        
        <img src={productData.thumbnail} alt={productData.title}/>
      </div>
     
      <span>Description: {productData.description}</span>
     
    </div>
  );
}
export default ViewProduct;