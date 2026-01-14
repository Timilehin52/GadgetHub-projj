import { createContext, useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

const getCartFromStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

export default function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState(getCartFromStorage);
  const cartRef = useRef(cart);
  const lastToastRef = useRef(0);

  useEffect(() => {
    cartRef.current = cart;
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const showOnce = (message, type = "success", windowMs = 700) => {
    const now = Date.now();
    if (now - lastToastRef.current < windowMs) return;
    lastToastRef.current = now;
    toast[type]?.(message);
  };

  const addToCart = (item) => {
    const existing = cartRef.current.find((i) => i.id === item.id);

    setCart((prevCart) => {
      if (prevCart.find((i) => i.id === item.id)) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });

    if (existing) {
      showOnce(`${item.name} quantity increased`, "success");
    } else {
      showOnce(`${item.name} added to cart`, "success");
    }
  };

  const removeFromCart = (id) => {
    const removedItem = cartRef.current.find((i) => i.id === id);
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    if (removedItem) showOnce(`${removedItem.name} removed from cart`, "error");
  };

  const increaseQuantity = (id) => {
    const item = cartRef.current.find((i) => i.id === id);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    if (item) showOnce(`Increased ${item.name} quantity`, "info");
  };

  const decreaseQuantity = (id) => {
    const item = cartRef.current.find((i) => i.id === id);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    if (item) showOnce(`Decreased ${item.name} quantity`, "info");
  };

  const clearCart = () => {
    if (cartRef.current.length === 0) {
      showOnce("Cart is already empty", "warn");
      return;
    }
    setCart([]);
    showOnce("Cart cleared", "warn");
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}