import React from 'react';

const ItemCount = ({stock}) => {
    const [count, setCount] =  React.useState(1);

    const sumarStock = () => {
        if (count < stock) {
        setCount(count + 1);
        }
    }

    const restarStock = () => {
        if (count > 1) {
        setCount(count - 1);
        }
    }

    const onAdd = () => {
        if (count <= stock) {
        console.log('Agregaste '+ count +' productos al carrito');
        }
    }

  return (
    <div className='row'>
       <div className="btn-group mb-1" role="group" aria-label="Basic mixed styles example">
        <button type="button" className="btn btn-dark" onClick={restarStock}> - </button>
        <button type="button" className="btn btn-dark"> {count} </button>
        <button type="button" className="btn btn-dark" onClick={sumarStock}> + </button>
        </div>
    <div className="d-grid col-12 mx-auto">
        <button className="btn btn-dark" type="button"  onClick={onAdd}>Agregar al carrito</button>
    </div>
     </div>
  );
};

export default ItemCount;