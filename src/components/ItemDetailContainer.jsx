import React, { useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import arrayProductos from './json/Productos.json';
import Loader from './Loader';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);	
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
      const promesa = new Promise((resolve,reject) => {
        setTimeout(() => {
          setLoading(false);
          resolve(arrayProductos.find((producto) => producto.id === parseInt(id)));
        }, 2000);
      });
      promesa.then((resultado) => {
        setProducto(resultado);
      });
    }, [id]);

  return (
    <div className="container">
      {
      loading ? <Loader /> : <ItemDetail producto={producto} />
      }
    </div>
  );
};

export default ItemDetailContainer;