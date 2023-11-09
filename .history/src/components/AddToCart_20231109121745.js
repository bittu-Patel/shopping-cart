"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addToCart } from "@/redux/slices/cartSlice";

export default function AddToCart({
  product,
  showQty = true,
  redirect = false,
  increasePerClick = false,
}) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const router = useRouter();
  const [qty, setQty] = useState(1);

  const Dropdown = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const numItems = 5; // Change this to the desired number of items
  
    const handleSelect = (item) => {
      setSelectedItem(item);
    };
  
    return (
      <div>
        <h2>Dropdown Example</h2>
        <select value={selectedItem} onChange={(e) => handleSelect(e.target.value)}>
          <option value="">Select an item</option>
          {[...Array(numItems)].map((_, index) => (
            <option key={index} value={index + 1}>
              Item {index + 1}
            </option>
          ))}
        </select>
        {selectedItem && <p>Selected Item: {selectedItem}</p>}
      </div>
      <div>
        {product.countInStock > 0 ? (
          <button className="primary-button w-full" onClick={addToCartHandler}>
            Add to cart
          </button>
        ) : (
          <button disabled>Out of stock</button>
        )}
      </div>
    </>
  );
}
