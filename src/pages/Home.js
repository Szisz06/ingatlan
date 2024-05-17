// Home.js
import React, { useEffect, useState } from "react";
import DataService from "../modell/DataService";
import { Form, Button } from "react-bootstrap";
import Tablazat from "../view/Tablazat";
import NewModal from "../view/NewModal";
import Kartyak from "../view/Kartyak";

export default function Home() {
  const DB = new DataService();

  const [objLista1, setObjLista1] = useState([]);
  const [objLista2, setObjLista2] = useState([]);
  const [objLista3, setObjLista3] = useState([]);
  const [objLista4, setObjLista4] = useState([]);
  const [value, setValue] = useState("Ház");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    DB.getData("/ingatlanok/1", setObjLista1);
    DB.getData("/ingatlanok/2", setObjLista2);
    DB.getData("/ingatlanok/3", setObjLista3);
    DB.getData("/ingatlanok/4", setObjLista4);
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleDelete = (id) => {
    DB.deleteData("ingatlanok", id, () => {
      if (value === "Ház") {
        DB.getData("/ingatlanok/1", setObjLista1);
      } else if (value === "Lakás") {
        DB.getData("/ingatlanok/2", setObjLista2);
      } else if (value === "Garázs") {
        DB.getData("/ingatlanok/3", setObjLista2);
      } else {
        DB.getData("/ingatlanok/4", setObjLista4);
      }
    });
  };

  const handleSave = (newItem) => {
    console.log(newItem);
    DB.postData("ingatlanok", newItem, () => {
      if (value === "Ház") {
        DB.getData("/ingatlanok/1", setObjLista1);
      } else if (value === "Lakás") {
        DB.getData("/ingatlanok/2", setObjLista2);
      } else if (value === "Garázs") {
        DB.getData("/ingatlanok/3", setObjLista2);
      } else {
        DB.getData("/ingatlanok/4", setObjLista4);
      }
    });
  };

  const getCurrentList = () => {
    if (value === "Ház") {
      return objLista1;
    } else if (value === "Lakás") {
      return objLista2;
    } else if (value === "Garázs") {
      return objLista3;
    } else {
      return objLista4;
    }
  };

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 700;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="valaszto">
        <Form.Group className="mb-3">
          <Form.Label>Ingatlanok</Form.Label>
          <Form.Select id="kategoria" value={value} onChange={handleChange}>
            <option value="Ház">Ház</option>
            <option value="Lakás">Lakás</option>
            <option value="Garázs">Garázs</option>
            <option value="Telek">Telek</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Új Ingatlan
        </Button>
        {width > breakpoint ? (
          <Tablazat
            tabla={getCurrentList()}
            onDelete={handleDelete}
          />
        ) : (
          <Kartyak
            tabla={getCurrentList()}
            onDelete={handleDelete}
          />
        )}
      </div>
      <NewModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={handleSave}
      />
    </>
  );
}

//termális operátor a homon
//kártya létrehozása
//mobil nézetes rendezés !!
//alert létrehozása
//szinezés termális operátorban 