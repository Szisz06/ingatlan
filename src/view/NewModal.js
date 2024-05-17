import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function NewModal({ show, handleClose, handleSave }) {
  const [category, setCategory] = useState('1'); 
  const [price, setPrice] = useState('');
  const [tehermentes, setTehermentes] = useState('0');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const newItem = {
      kateg_id: parseInt(category), 
      leiras: description,
      tehermentes: tehermentes,
      ar: price,
      kep: image,
    };
    handleSave(newItem);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Új Ingatlan hozzáadása</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>      
          <Form.Group controlId="formCategory">
            <Form.Label>Kategória</Form.Label>
            <Form.Control
              as="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="1">Ház</option>
              <option value="2">Lakás</option>
              <option value="3">Garázs</option>
              <option value="3">Telek</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formCategory">
            <Form.Label>Tehermentes</Form.Label>
            <Form.Control
              as="select"
              value={tehermentes}
              onChange={(e) => setTehermentes(e.target.value)}
            >
              <option value="0">Nem</option>
              <option value="1">Igen</option>

            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Leírás</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Adja meg az ingatlan leírását"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Ár</Form.Label>
            <Form.Control
              type="text"
              placeholder="Adja meg az ingatlan árát"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Kép</Form.Label>
            <Form.Control
              type="text"
              placeholder="Adja meg a kép URL-jét"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
          
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Mégsem
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
