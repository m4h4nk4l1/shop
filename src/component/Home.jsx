import React from "react";
import Products from "./Products";

export default function Home() {
  return (
      <div className="hero">
        <div class="card bg-dark text-white border-0">
          <img src="/assets/bg.jpg" class="card-img" alt="Background" height="800px" />
          <div class="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
            <h5 class="card-title display-3 fw-bolder bg-gradient-light text-dark mb-0">Essentials</h5>
            <p class="card-text lead bg-gradient-light text-light fs-1">
              CHECK OUT ALL THE MATERIALS
            </p>
            </div>
          </div>
        </div>
        <Products />
      </div>
  );
}
