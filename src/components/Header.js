import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { productSearch } from "../redux/productAction";
import { emptyCart } from "../redux/action";



const Header = () => {
    const result = useSelector((state) => state.cartData)
    const dispatch = useDispatch();

    console.log("redux data in header", result)
    return (<div className="header ">
        <div className="w3-panel sticky w3-card">
            <Link to="/">
                <img className="w3-margin-right-100" src="./images/logo.png" width="200 px" alt="" /> </Link>
            <span className="w3-hide-medium w3-hide-small">
                <button className="w3-button w3-white">Edible Oils</button>
                <button className="w3-button w3-white">Foods</button>
                <button className="w3-button w3-white">Ready to Cook</button>
                <button className="w3-button w3-white">Fortunes Recipes</button>
                <button className="w3-button w3-white " >About US</button>
            </span>
            <span className="w3-hide-large  ">
                <span className="w3-dropdown-hover ">
                    <button className="w3-button w3-red fa fa-bars"> Pruducts Menu</button>
                    <div className="w3-dropdown-content w3-bar-block w3-border">
                        <button className="w3-button w3-white">Edible Oils</button>
                        <button className="w3-button w3-white">Foods</button>
                        <button className="w3-button w3-white">Ready to Cook</button>
                        <button className="w3-button w3-white">Fortunes Recipes</button>
                        <button className="w3-button w3-white " >About US</button>
                    </div>
                </span>
            </span>
            <span className="w3-margin-left"><input type='text' onChange={(event) => dispatch(productSearch(event.target.value))} placeholder="Search Product" /></span>
            {/* <span className="w3-hide-small w3-hide-medium w3-right"><button id="btn3" onClick={() => dispatch(emptyCart())} className="w3-red w3-margin-left" >EMPTY_CART</button></span> */}
            <Link to="/cart">
                <div className="w3-right w3-padding-16">
                    <span className="w3-center w3-red w3-padding w3-margin-left w3-round-xxlarge">{result.length}</span>
                    <div className="w3-margin-right"><img src="images/cart.png" width="50px" alt="" />
                    </div>
                </div>
            </Link>


        </div>
    </div>);
}

export default Header;