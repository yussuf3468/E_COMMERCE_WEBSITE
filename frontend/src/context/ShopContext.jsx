import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Create a new context for the shop
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    
    // Set constants for currency and delivery fee
    const currency = '$';
    const delivery_fee = 10;

    // State to track search input, visibility of search, and cart items
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    // Function to add an item to the cart
    const addToCart = async (itemId, size) => {
        // Notify user if size isn't selected
        if (!size) {
            toast.error('Select Product Size');
            return;
        }
        
        // Show success notification for adding item
        if (itemId && size) {
            toast.success('Added to Cart');
        }

        // Clone the current cart data to modify it safely
        let cartData = structuredClone(cartItems);

        // Check if the item already exists in the cart
        if (cartData[itemId]) {
            // If item and size exist, increment the quantity
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                // If size does not exist, set quantity to 1
                cartData[itemId][size] = 1;
            }
        } else {
            // If item does not exist, create an entry for it
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        // Update the cart state with the modified data
        setCartItems(cartData);
    };

    // Function to calculate the total quantity of items in the cart
    const getCartCount = () => {
        let totalCount = 0;

        // Loop through each item in the cart
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    // Add quantity to total if it's a valid number
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    // Catch any errors to prevent app crashes (usually from non-numeric values)
                }
            }
        }

        return totalCount;
    };

    // Function to update the quantity of a specific item in the cart
    const updateQuantity = async (itemId, size, quantity) => {
        // Clone the cart data to safely modify it
        let cartData = structuredClone(cartItems);
        // Set the new quantity for the specified item and size
        cartData[itemId][size] = quantity;
        // Update the cart state with the modified data
        setCartItems(cartData);
    };

    // Function to calculate the total cost of all items in the cart
    const getCartAmount = () => {
        let totalAmount = 0;

        // Loop through each item in the cart
        for (const items in cartItems) {
            // Find the product details using the item's ID
            let itemsInfo = products.find((product) => product._id === items);

            for (const item in cartItems[items]) {
                try {
                    // Calculate and add the price for the item's quantity if valid
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemsInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    // Handle any errors, usually if data is malformed or price is missing
                }
            }
        }

        return totalAmount;
    };

    // Object containing the state and functions, passed to the context provider
    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity, getCartAmount, navigate
    };

    return (
        // Provide the context values to the child components
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
