import React from 'react';


const CartWidget = () => {
  return (
    <div>
        <button type="button" class="btn btn-outline-light position-relative"><i class="bi bi-bag-heart"></i><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span></button>
     </div>
  );
};

export default CartWidget;
