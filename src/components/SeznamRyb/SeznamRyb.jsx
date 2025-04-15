import React from "react";
import { useState } from "react";

function SeznamRyb({ rybicky, setRybicky }) {
  const [valid, setValid] = useState(false);
  const [novaRyba, setNovaRyba] = useState({
    id:
      rybicky.length > 0 ? Math.max(...rybicky.map((ryba) => ryba.id)) + 1 : 1,
    jmeno: "",
    druh: "mala",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaRyba((predchoziRyba) => ({ ...predchoziRyba, [name]: value }));
    validateData({ ...novaRyba, [name]: value });
  };

  const validateData = (ryba) => {
    setValid(ryba.jmeno.trim().length > 0);
  };

  const resetNovaRyba = () => {
    setNovaRyba((predchoziRyba) => ({
      id: predchoziRyba.id + 1,
      jmeno: "",
      druh: "mala",
    }));
    setValid(false);
  };

  return (
    <div className="seznam-ryb">
      <h2 className="m-4">Rybičky</h2>
      <input
        type="text"
        name="jmeno"
        placeholder="Jméno rybičky"
        value={novaRyba.jmeno}
        onChange={handleChange}
        className="form-control d-inline-block w-auto me-2"
      />
      <select
        name="druh"
        value={novaRyba.druh}
        onChange={handleChange}
        className="form-select d-inline-block w-auto me-2"
      >
        <option value="mala">Malá</option>
        <option value="velka">Velká</option>
      </select>
      <button
        disabled={!valid}
        onClick={() => {
          setRybicky([...rybicky, novaRyba]);
          resetNovaRyba();
        }}
        className="btn btn-danger"
      >
        Přidat
      </button>

      <div className="mt-3">
        {rybicky.map((ryba, index) => (
          <div
            key={ryba.id}
            className="p-2 mb-2 border rounded d-flex justify-content-between align-items-center"
          >
            <span>
              {ryba.jmeno} ({ryba.druh})
            </span>
            <button
              onClick={() => setRybicky(rybicky.filter((_, i) => i !== index))}
              className="btn btn-danger btn-sm"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeznamRyb;
