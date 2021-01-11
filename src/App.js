import React, { useState } from "react"

function App() {
  const [s, setS] = useState(0)

  
  return (
    <div>
      <p
        onClick={() => { setS(s + 1) }}
      >
        click
      </p>
      <h2>
        num:{s}
      </h2>
    </div>
  );
}

export default App;
