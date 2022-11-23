import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
    <Navbar />
     <ItemListContainer greeting={"Tienda ya, tenes todo Ya"} />
    </div>
  );
};

export default App;