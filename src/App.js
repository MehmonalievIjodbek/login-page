import { useState } from "react";
import About from "./component/About";
import Login from "./component/Login";
import SignUp from "./component/SignUp";

function App() {
  const [changes, setChanges] = useState(true);

  return (
    <div className="App">
      {changes ?
        <Login setChanges={setChanges} />
        :
        <SignUp setChanges={setChanges} />

      }
    </div>
  );
}

export default App;
