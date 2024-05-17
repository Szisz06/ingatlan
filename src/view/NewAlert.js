import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./Kartyak.css";

export default function NewAlert({ show, handleClose, item }) {
  if (!item) {
    return null;
  }
  const tehermentesClass = item.tehermentes === 0 ? "tehermentes-nem" : "tehermentes-igen";
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ingatlan Adatai</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Kategória: {item.kategoria_nev}</p>
        <p>Leírás: {item.leiras}</p>
        <p>Feladás Dátuma: {item.datum}</p>
        <p>Tehermentes:</p><p className={tehermentesClass}> {item.tehermentes === 0 ? "nem" : "igen"}</p>
        <p>Ár: {item.ar} millió</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
