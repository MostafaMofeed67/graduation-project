import React from "react";

const LoadingSpinner = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
