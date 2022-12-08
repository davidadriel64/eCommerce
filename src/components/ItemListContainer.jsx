import  React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from './json/Productos.json';
import ItemList from './ItemList';
import Loader from './Loader';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);	
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      document.getElementById("ocultar").style.display = "none";
      document.getElementById("mostrar").style.display = "block";
    } else {
      document.getElementById("ocultar").style.display = "block";
      document.getElementById("mostrar").style.display = "none";
    }
    const promesa = new Promise((resolve,reject) => {
      setTimeout(() => {
        setLoading(false);
        resolve( id ? arrayProductos.filter((producto) => producto.categoria === id): arrayProductos);
      }, 2000);
    });
    promesa.then((resultado) => {
      setProductos(resultado);
    });


  }, [id]);

  return (
    <div>
        <div id="ocultar" className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">Bienvenidos a TIENDA YA!</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">Todo lo que queres a un click de distancia</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            </div>
          </div>
        </div>
      </div>
      <div id="mostrar" className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-3">
          <h1 className="display-5 fw-bold text-white">Productos de la categoria {id}</h1>
          <div className="col-lg-6 mx-auto">
          </div>
        </div>
      </div>
    <div className="container">
    <div className="mt-3">
    {
      loading ? <Loader /> : <ItemList productos={productos} />
    }
      </div>
    </div>
    </div>
  );
};

export default ItemListContainer;