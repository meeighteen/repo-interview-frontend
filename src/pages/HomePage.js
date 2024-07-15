import React, { useState, useEffect, lazy, Suspense } from 'react';
const LazyHomeTable = lazy(() => import ('./HomePage/Components/HomeTable'));


const result = {
  "data": [
    {
      "id": "uno",
      "name": "Nombre producto",
      "description": "Descripción producto",
      "logo": "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      "date_release": "2025-01-01",
      "date_revision": "2025-01-01"
    },
    {
      "id": "2",
      "name": "Nombre producto",
      "description": "Descripción producto",
      "logo": "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      "date_release": "2025-01-01",
      "date_revision": "2025-01-01"
    },
    {
      "id": "3",
      "name": "Nombre producto",
      "description": "Descripción producto",
      "logo": "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      "date_release": "2025-01-01",
      "date_revision": "2025-01-01"
    },
    {
      "id": "4",
      "name": "Nombre producto",
      "description": "Descripción producto",
      "logo": "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      "date_release": "2025-01-01",
      "date_revision": "2025-01-01"
    },
    {
      "id": "5",
      "name": "Nombre producto",
      "description": "Descripción producto",
      "logo": "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      "date_release": "2025-01-01",
      "date_revision": "2025-01-01"
    },
    {
      "id": "6",
      "name": "Nombre producto",
      "description": "Descripción producto",
      "logo": "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      "date_release": "2025-01-01",
      "date_revision": "2025-01-01"
    },
    {
      "id": "7",
      "name": "Nombre producto",
      "description": "Descripción producto",
      "logo": "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      "date_release": "2025-01-01",
      "date_revision": "2025-01-01"
    }
  ]
}

const HomePage = () => {
  const [data, setData] = useState(result.data);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    try {
      // const response = await fetch('http://localhost:3002/bp/products');

      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }
      // const result = await response.json();
  
        setData(result.data);
        setLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { 
      key: 'logo',
      header: 'Logo',
      render: (row) => <img src={row.logo} alt='logo' style={{ height: "30px"}}/>
    },
    { 
      key: 'name', 
      header: 'Nombre del producto',
    },
    { 
      key: 'description', 
      header: 'Descripción'
    },
    {
      key: 'date_release', 
      header: 'Fecha de liberación' 
    },
    { 
      key: 'date_revision', 
      header: 'Fecha de reestructuración' 
    },
    { 
      key: 'id', 
      header: 'ID' 
    },
  ];

  if(loading) 
    return(<div> Loading...</div>)

  return (
    <div className="home-page">
      <h1>Componente: Tabla</h1>
          <Suspense fallback={<div>Cargando...</div>}>
            <LazyHomeTable columns={columns} data={data}/>
          </Suspense>
    </div>
  );
};

export default HomePage;
