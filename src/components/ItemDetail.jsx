import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({producto}) => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">{producto.nombre}</h1>
        <h5 className="display-6   mb-3">${producto.precio}</h5>
        <p className="lead">{producto.info}</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <ItemCount stock={10} />
        </div>
      </div>
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={producto.imagen} className="d-block mx-lg-auto img-fluid" alt={producto.nombre} loading="lazy"/>
      </div>
    </div>
  </div>
  );
};

export default ItemDetail;