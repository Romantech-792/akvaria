import { useState } from "react";
import SeznamRyb from "./components/SeznamRyb/SeznamRyb";
import PlanovacAkvaria from "./components/PlanovacAkvaria/PlanovacAkvaria";

function App() {
  const [sekce, setSekce] = useState("rybicky");
  const [rybicky, setRybicky] = useState([]);

  return (
    <div className="container text-center mt-4" style="background-color: grey;">
      <h1 className="text-center fw-bold text-dark text-uppercase m-4 pb-2 border-bottom">
        Aplikace pro plánování rozměrů akvária
      </h1>
      <div className="mb-4">
        <button
          onClick={() => setSekce("rybicky")}
          className="btn btn-danger me-2"
        >
          Rybičky
        </button>
        <button onClick={() => setSekce("akvarium")} className="btn btn-danger">
          Akvárium
        </button>
      </div>

      {sekce === "rybicky" ? (
        <SeznamRyb rybicky={rybicky} setRybicky={setRybicky} />
      ) : (
        <PlanovacAkvaria rybicky={rybicky} />
      )}
    </div>
  );
}

export default App;
