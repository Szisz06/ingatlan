import React from "react";

export default function Tablazat({ tabla, onDelete }) {
  return (
    <div className="table-responsive">
      <h1>Ingatlanok táblázata</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Kategória</th>
            <th>Leírás</th>
            <th>Dátum</th>
            <th>Tehermentes</th>
            <th>Ár</th>
            <th>Kép</th>
            <th>Műveletek</th>
          </tr>
        </thead>
        <tbody>
          {tabla.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.kategoria_nev}</td>
              <td>{item.leiras}</td>
              <td>{item.datum}</td>
              <td style={{ color: item.tehermentes === 0 ? 'red' : 'green' }}>
                {item.tehermentes === 0 ? "nem" : "igen"}
              </td>
              <td>{item.ar}</td>
              <td>
                <img src={item.kep} alt={item.nev} style={{ maxWidth: "100px" }} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(item.id);
                  }}
                >
                  Törlés
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
