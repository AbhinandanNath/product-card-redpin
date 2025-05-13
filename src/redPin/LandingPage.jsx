import { useState, useCallback,} from "react";
import ProductBoard from "./ProductBoard";
import "./productPagination.css";
import ViewProduct from "./ViewProduct";
// import useFetchData from "./useFetchData";

/*

We are working on a back-office application that displays products available for purchase on our company's website.

We would like to add pagination to the ListProducts page. The list should only show 10 products at a time, and the page should have links or buttons for navigating backwards and forwards in the list.

*/

export default function Landingpage() {
  // const [location, setLocation] = useState({ page: "list", params: {} });
  const [viewProductCard, setViewProductCard] = useState(false);
  const [productId, setProductId] = useState(null);
  const [fetchState, setFetchState] = useState({
    data: null,
    loading: true,
    error: "",
  });

  // const { data, error, loading } = useFetchData(
  //   "https://dummyjson.com/products/" + id
  // );

  // useEffect(() => {

  // },[productId])
  const fetchProductSpecificData = useCallback(async (id) => {
    setFetchState({
      data: null,
      loading: true,
      error: "",
    });
    try {
      const response = await fetch("https://dummyjson.com/products/" + id);
      if (!response.ok) {
        throw new Error("Error fetching product data");
      }
      const responseData = await response.json();
      setTimeout(() => {
        setFetchState({
          data: responseData,
          loading: false,
          error: "",
        });
        setViewProductCard(true)
      }, 2000);
      // setFetchState({
      //   data: responseData,
      //   loading: false,
      //   error: "",
      // });
      // setViewProductCard(true);
    } catch (error) {
      setViewProductCard(false);
      setFetchState({
        data: null,
        loading: false,
        error: "An error occurred",
      });
      console.error("Error fetching product data:", error);
    }
  }, []);

  const openProductDetails = useCallback(
    (showProductDetails) => {
      // setViewProductCard(true);

      setProductId(showProductDetails.id);
      fetchProductSpecificData(showProductDetails.id);
    },
    [setProductId, fetchProductSpecificData]
  );

 
  return (
    <div className="mainProductScreen">
      <ProductBoard openProductDetails={openProductDetails} />
      {fetchState.loading && !fetchState.data ? (
        <div className="loading">Loading...</div>
      ) : viewProductCard ? (
        <ViewProduct productData={fetchState.data} productId={productId} />
      ) : null}

      {/* {location.page !== "list" && (
        <div>
          <a className="link" onClick={() => changeLocation("list")}>
            Return to list
          </a>
        </div>
      )} */}
    </div>
  );
}
