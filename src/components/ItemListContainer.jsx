import React from 'react';

const ItemListContainer = ({greeting}) => {
  return (
    <div className="container">
    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 className="display-4 fw-normal">{greeting}</h1>
      <p className="fs-5 text-muted"> :O </p>
    </div>
    <div className="row">
      <div className="col-3">
        <div className="card" >
        <div className="card-body">
            <h5 className="card-title">Categoria 1</h5>
            <h6 className="card-subtitle mb-2 text-muted">Categoria 1</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">ver categoria</a>
        </div>
        </div>
    </div>
    <div className="col-3">
        <div className="card" >
        <div className="card-body">
            <h5 className="card-title">Categoria 2</h5>
            <h6 className="card-subtitle mb-2 text-muted">Categoria 2</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">ver categoria</a>
        </div>
        </div>
    </div>
    <div className="col-3">
        <div className="card" >
        <div className="card-body">
            <h5 className="card-title">Categoria 3</h5>
            <h6 className="card-subtitle mb-2 text-muted">Categoria 3</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">ver categoria</a>
        </div>
        </div>
    </div>
    <div className="col-3">
        <div className="card" >
        <div className="card-body">
            <h5 className="card-title">Categoria 4</h5>
            <h6 className="card-subtitle mb-2 text-muted">Categoria 4</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">ver categoria</a>
        </div>
        </div>
    </div>
    </div>
    </div>
  );
};

export default ItemListContainer;