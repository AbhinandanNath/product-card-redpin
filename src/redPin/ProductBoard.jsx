import useFetchData from "./useFetchData";
import { useEffect, useState } from "react";
import PaginationBar from "./PaginationBar";
import ProductListItem from "./ProductListItem";

const ProductBoard = ({ openProductDetails }) => {
  const { loading, error, data } = useFetchData(
    "https://dummyjson.com/products?limit=100"
  );
  const [endIndex, setEndIndex] = useState(10);
  const [startIndex, setStartIndex] = useState(0);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setProductData((prevState) => {
        let updatePageData = [];
        if (prevState.length == 0) {
          updatePageData = [...data.products];
        } else {
          updatePageData = [...prevState.map((item) => ({ ...item }))];
        }
        return updatePageData;
      });
    }
  }, [loading, data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const handlePageChange = (pageIndex) => {
    setEndIndex((prevPageIndex) => prevPageIndex + pageIndex);
    setStartIndex((prevStartIndex) => prevStartIndex + pageIndex);
  };

  return (
    <div className="productList">
      <h1>Products</h1>
      <ul className="productListContainer">
        {productData.slice(startIndex, endIndex).map((product) => (
          <ProductListItem productData={product} key={product.id} openProductDetails={openProductDetails} />
        ))}
      </ul>
      <PaginationBar
        handlePageChange={handlePageChange}
        startIndex={startIndex}
        endIndex={endIndex}
        totalPageSize={productData.length}
      />
    </div>
  );
};

export default ProductBoard;
