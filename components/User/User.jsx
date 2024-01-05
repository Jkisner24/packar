    'use client'
    import React, { useState, useEffect } from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import Card from 'react-bootstrap/Card';
    import ListGroup from 'react-bootstrap/ListGroup';
    import Modal from 'react-bootstrap/Modal';
    import {getUsers} from '../../store/slice'

    function User() {
      const dispatch = useDispatch()
      const [showModal, setShowModal] = useState(false);
      const users = useSelector((state) => state.slice.users);
      const handleShowModal = () => setShowModal(true);
      const handleCloseModal = () => setShowModal(false);
      
      
      useEffect(() => {
        dispatch(getUsers());
      }, [dispatch]);
      console.log(users,"USER")

      if (!users || users.length === 0) {
        return null; 
      }
        const { username, email } = users[0];
      

      return (
        <div>
          <button onClick={handleShowModal}>Perfil del usuario</button>
    
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>User Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: '30rem', height: '30rem' }}>
                <Card.Img variant="top" src="https://skydatalatam.com/wp-content/uploads/2023/01/4v1.-Jun-Transportista-sus-aportes-al-momento-de-planear-las-rutas-1024x683-1-1024x650.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Transportista de Barcelona
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{username}</ListGroup.Item>
                  <ListGroup.Item>{email}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Instagram</Card.Link>
                  <Card.Link href="#">Linkedin</Card.Link>
                </Card.Body>
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={handleCloseModal}>Cerrar Modal</button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
    
    export default User;
    