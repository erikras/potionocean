import React from "react";

const OrderComplete = ({ isDelivery }: { isDelivery: boolean }) => (
  <>
    <div className="orderComplete">
      <h3>Great! Your order is complete!</h3>
      <h4>It will be {isDelivery ? "delivered" : "ready"} in 15 minutes.</h4>
    </div>
    <div>
      <button onClick={() => document.location.reload()}>
        Continue Shopping
      </button>
    </div>
  </>
);

export default OrderComplete;
