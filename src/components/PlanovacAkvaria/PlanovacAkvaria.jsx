import React from "react";
import { useState } from "react";

function PlanovacAkvaria({ rybicky }) {
  const [valid, setValid] = useState(false);
  const [akvarium, setAkvarium] = useState({
    sirka: "",
    delka: "",
    vyska: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedAkvarium = { ...akvarium, [name]: value };
    setAkvarium(updatedAkvarium);
    validateData(updatedAkvarium);
  };

  const validateData = (data) => {
    if (!data.sirka || !data.delka || !data.vyska) {
      setValid(false);
      return;
    }
    if (
      parseInt(data.sirka) <= 0 ||
      parseInt(data.delka) <= 0 ||
      parseInt(data.vyska) <= 0
    ) {
      setValid(false);
      return;
    }
    setValid(true);
  };

  const objemAkvaria = () => {
    if (!valid) return 0;
    return (akvarium.sirka * akvarium.delka * akvarium.vyska) / 1000;
  };

  let potrebnyObjem = 0;
  for (const ryba of rybicky) {
    potrebnyObjem += ryba.druh === "mala" ? 10 : 20;
  }

  const jeObjemDostatecny = objemAkvaria() >= potrebnyObjem;

  return (
    <div className="akvarium-form">
      <h2 className="m-4">Plánování akvária</h2>
      <input
        type="number"
        name="sirka"
        placeholder="Šířka (cm)"
        value={akvarium.sirka}
        onChange={handleChange}
        className="form-control d-inline-block w-auto m-2"
      />
      <input
        type="number"
        name="delka"
        placeholder="Délka (cm)"
        value={akvarium.delka}
        onChange={handleChange}
        className="form-control d-inline-block w-auto m-2"
      />
      <input
        type="number"
        name="vyska"
        placeholder="Výška (cm)"
        value={akvarium.vyska}
        onChange={handleChange}
        className="form-control d-inline-block w-auto m-2"
      />
      <p className="mt-3">Objem akvária: {objemAkvaria()} L</p>
      <p>Požadovaný objem: {potrebnyObjem} L</p>
      <button
        disabled={!jeObjemDostatecny}
        className={`btn mt-3 ${
          jeObjemDostatecny ? "btn-success" : "btn-danger disabled"
        }`}
      >
        Schválit rozměry
      </button>
    </div>
  );
}

export default PlanovacAkvaria;
