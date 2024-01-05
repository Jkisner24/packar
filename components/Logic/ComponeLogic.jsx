import React, { useState, useCallback } from 'react';
import { useFormik } from 'formik';
import Image from 'next/image';
import { Modal, Button, Form } from 'react-bootstrap';
import { Autocomplete, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { home } from '@/public/assets';

const generateRandomProducts = () => {
  const products = [];
  for (let i = 1; i <= 20; i++) {
    products.push(`Producto ${i}`);
  }
  return products;
};

const EnvioForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [map, setMap] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const formik = useFormik({
    initialValues: {
      desde: '',
      hasta: '',
      fecha: '',
      producto: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:3000/api/trips', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: values.producto,
            description: `Viaje desde ${values.desde} hasta ${values.hasta} el ${values.fecha}`,
            status: 'Programado',
            origin: values.desde,
            destination: values.hasta,
            createdBy: {
              id: 1,
            },
          }),
        });
    
        if (response.ok) {
          const newTrip = await response.json();
          console.log('Viaje creado:', newTrip);
        } else {
          console.error('Error al crear el viaje:', response.status);
        }
      } catch (error) {
        console.error('Error al crear el viaje:', error);
      }
    },

  });

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const handleLocationSelect = async (address, field) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setSelectedLocation({ address, latLng });
      formik.setFieldValue(field, address);
      handleCloseModal();
    } catch (error) {
      console.error('Error al obtener coordenadas:', error);
    }
  };
  const handleOpenModal = () => {
    handleShowModal();
    if (map !== null) {
      setMap(null);
      setTimeout(() => {
        setMap(map);
      }, 100);
    }
  };
  const randomProducts = generateRandomProducts();

  return (
    <div className="fw-bold fs-6 " style={{ color: 'var(--accent-color)' }}>
  <div className="relative h-screen flex items-center justify-center">
    <div className='text-center text-white' style={{zIndex: '1'}}>
      <Image style={{position: 'relative', width: '100%', height: '400px'}} src={home} alt="Fondo de pantalla" />
    </div>
    
    <div className="container my-5 border border-black p-4 rounded-md text-center shadow" style={{ maxWidth: '800px', borderRadius: '10px' }}>
      <div className="mt-2 col-12">
        <div style={{ cursor: 'pointer' }}>
          <span className="my-10 text-black text-3xl font-bold">
            ¿Qué quieres enviar?
          </span>
              <Form
                className="my-3 mx-auto col-12 col-md-6 text-center d-flex flex-column"
                onSubmit={formik.handleSubmit}
              >
                <Form.Group controlId="desde">
                  <PlacesAutocomplete
                    value={formik.values.desde}
                    onChange={(address) => formik.setFieldValue('desde', address)}
                    onSelect={(address) => handleLocationSelect(address, 'desde')}
                  >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                      <div className="my-1">
                        <input
                          {...getInputProps({
                            placeholder: 'Desde',
                            className: 'w-full border-none outline-none bg-transparent mb-2',
                            style: {
                              borderBottom: '-1px solid #000',
                              height: '35px',
                              width: '100%', 
                              borderRadius: '4px',
                              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                            },
                          })}
                        />
                        <div>
                          {loading && <div>Loading...</div>}
                          {suggestions.map((suggestion) => (
                            <div {...getSuggestionItemProps(suggestion)} key={suggestion.placeId}>
                              {suggestion.description}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                </Form.Group>

                <Form.Group controlId="hasta">
                  <PlacesAutocomplete
                    value={formik.values.hasta}
                    onChange={(address) => formik.setFieldValue('hasta', address)}
                    onSelect={(address) => handleLocationSelect(address, 'hasta')}
                  >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                      <div className="my-2">
                        <input
                          {...getInputProps({
                            placeholder: 'Hasta',
                            className: 'w-full border-none outline-none bg-transparent mb-2',
                            style: {
                              borderBottom: '1px solid #000',
                              height: '35px',
                              width: '100%', 
                              borderRadius: '4px',
                              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                            },
                          })}
                        />
                        <div>
                          {loading && <div>Loading...</div>}
                          {suggestions.map((suggestion) => (
                            <div {...getSuggestionItemProps(suggestion)} key={suggestion.placeId}>
                              {suggestion.description}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                </Form.Group>

                <Form.Group controlId="fecha">
                  <Form.Control
                    type="date"
                    placeholder="Selecciona la fecha del viaje"
                    value={formik.values.fecha}
                    onChange={formik.handleChange}
                    className="w-full border-none outline-none bg-transparent mb-2"
                    style={{
                      borderBottom: '1px solid #000',
                      height: '35px',
                      borderRadius: '4px',
                      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="producto">
                  <Form.Control
                    as="select"
                    placeholder="Producto"
                    value={formik.values.producto}
                    onChange={formik.handleChange}
                    className="w-full border-none outline-none bg-transparent mb-2"
                    style={{
                      borderBottom: '1px solid #000',
                      height: '35px',
                      borderRadius: '4px',
                      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <option value="">Producto</option>
                    {randomProducts.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="buscar">
                <Button
             type="submit"
             className="btn w-full p-3 text-light mt-3"
             style={{background: '#FE1252',
             width: '50%', }}
             onClick={handleOpenModal}
               >
            Buscar
              </Button>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>

       
        <Modal show={showModal} onHide={handleCloseModal} onEntered={handleOpenModal}>
          <Modal.Header closeButton>
            <Modal.Title>Loading...</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export { EnvioForm };
