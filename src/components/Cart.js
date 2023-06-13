import { useSelector } from "react-redux";
import { Link } from "react-router-dom";





const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  let amount = cartData.length && cartData.map(item => item.price).reduce((prev, next) => prev + next)
  console.warn(amount)
  return (
    <div  >
      <div className="w3-pannel w3-center w3-xlarge w3-margin">
        <span className="w3-red w3-padding w3-round-xlarge">Your Shopping Cart</span>
        <Link to="/" className="w3-right w3-large w3-margin-right"><button >Go to Products Page</button></Link>
        
      </div>
      <div className="cart-page-container">
        <table>
          <tr>
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
            <td>Brand</td>
            <td>Category</td>
            <td>Item</td>
          </tr>
          {
            cartData.map((item) => <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
              <td><img src={item.photo} alt="" width={"50px"} height={"50px"} />
              </td>
            </tr>)
          }
        </table>
        <div className="price-details">
          <div className="adjust-price"><span>Amount  </span>  <span>{amount}</span></div>
          <div className="adjust-price"><span>Discount</span><span>{amount / 10}</span></div>
          <div className="adjust-price"><span>Tax     </span><span>{amount * 15 / 100}</span></div>
          <div className="adjust-price"><span>Total   </span><span>{amount - (amount / 10) + (amount * 15 / 100)}</span></div>

        </div>


      </div>
    </div>
  );
}

export default Cart;
