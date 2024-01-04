import React, { useState, useCallback } from 'react';
import { useFormik } from 'formik';
import { Modal, Button, Form } from 'react-bootstrap';
import { PrismaClient } from '@prisma/client';
import { Autocomplete, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

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
        // Inserta una nueva entrada en la tabla Trip
        const newTrip = await prisma.trip.create({
          data: {
            title: values.producto,
            description: `Viaje desde ${values.desde} hasta ${values.hasta} el ${values.fecha}`,
            status: 'Programado',
            origin: values.desde,
            destination: values.hasta,
            createdBy: {
              connect: { id: userId },
            },
          },
        });

        console.log('Viaje creado:', newTrip);
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
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="desde">
          <Form.Label>Desde</Form.Label>
          <PlacesAutocomplete
            value={formik.values.desde}
            onChange={(address) => formik.setFieldValue('desde', address)}
            onSelect={(address) => handleLocationSelect(address, 'desde')}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div className="my-3 col-12 col-md-6 text-left d-flex flex-column">
                <input
                  {...getInputProps({
                    placeholder: 'Selecciona la ubicación de partida',
                    className:"mt-1 p-2 w-full rounded-full border",
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
          <Form.Label>Hasta</Form.Label>
          <PlacesAutocomplete
            value={formik.values.hasta}
            onChange={(address) => formik.setFieldValue('hasta', address)}
            onSelect={(address) => handleLocationSelect(address, 'hasta')}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: 'Selecciona la ubicación de destino',
                    className:"mt-1 p-2 w-full rounded-full border",
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
          <Form.Label>Fecha del viaje</Form.Label>
          <Form.Control
            type="date"
            placeholder="Selecciona la fecha del viaje"
            value={formik.values.fecha}
            onChange={formik.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="producto">
          <Form.Label>Producto</Form.Label>
          <Form.Control
            as="select"
            placeholder="Selecciona el producto a transportar"
            value={formik.values.producto}
            onChange={formik.handleChange}
          >
            <option value="">Selecciona un producto</option>
            {/* Incluye tus 20 productos aleatorios aquí */}
          </Form.Control>
        </Form.Group>

        <Button type="submit">Enviar</Button>
      </Form>

      {/* Modal para seleccionar la ubicación */}
      <Modal show={showModal} onHide={handleCloseModal} onEntered={handleOpenModal}>
        <Modal.Header closeButton>
          <Modal.Title>Selecciona la ubicación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showModal && (
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '400px' }}
                center={selectedLocation?.latLng || { lat: -34.397, lng: 150.644 }}
                zoom={8}
                onLoad={onLoad}
              >
                {mapRef.current && selectedLocation && (
                  <Marker
                    position={selectedLocation.latLng}
                    onClick={() => {
                      console.log('Marker clicked');
                    }}
                  />
                )}
              </GoogleMap>
            </LoadScript>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export { EnvioForm };

