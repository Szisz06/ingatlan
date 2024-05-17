import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";
import "./Kartyak.css";
import NewAlert from "./NewAlert";

export default function Kartyak({ tabla }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShow = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  return (
    <div>
      <NewAlert show={showModal} handleClose={handleClose} item={selectedItem} />
      <div className="kartyak">
        {tabla.map((item, index) => (
          <Card key={index} className="card">
            <CardHeader>{item.kategoria_nev}</CardHeader>
            <CardBody>
              <img src={item.kep} alt={item.nev} style={{ width: "100%" }} />
              <div>Ár: {item.ar} millió</div>
            </CardBody>
            <Button variant="primary" onClick={() => handleShow(item)}>
              Érdekel!
            </Button>
            <CardFooter>Feladás Dátuma: {item.datum}</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
