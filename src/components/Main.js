import { addToCart,  remove_from_cart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.log("data in main component from saga", data)

  useEffect(() => {
    dispatch(productList())
  }, [])
  return (
    <div className="w3-center">

      <img src="images/banner.png" width={'100%'} alt=""/>
      {/* <div>
        <button id="btn3"onClick={() => dispatch(emptyCart())}>EMPTY_CART</button>
        </div>

        <div>
        <button id="btn4"onClick={() => dispatch(productList())}>Get Product List</button>
        </div> */}

      <div className="w3-pannel w3-center w3-xlarge">
        <span className="w3-red w3-padding w3-round-xlarge">Products</span>
      </div>


      <div className="product-container">

        {
          data.map((item) => <div key={item.id} className="product-item">
            <img src={item.photo} alt="" width={"200px"} height={"200px"} />

            <div>Name: {item.name}</div>
            <div>color : {item.color}</div>
            <div>price : {item.price}</div>
            <div>category : {item.category}</div>
            <div>brand : {item.brand}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))} className="w3-margin">Add to Cart</button>
              <button onClick={() => dispatch(remove_from_cart(item.id))}>Remove</button>
            </div>
          </div>)
        }

      </div>


    </div>
  );
}

export default Main;