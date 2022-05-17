import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/p1">Book</Link>
        </li>
        <li>
          <Link to="/products/p2">Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">Online Course</Link>
        </li>
      </ul>
    </section>
  );
}
