import "./App.css";
import AppHeader from "./component/AppHeader";
import EmptyBox from "./component/EmptyBox";
import AddModule from "./component/AddModule";
import { useState } from "react";

function App() {
  let allModules = [];
  let allLinks = [];
  let allResources = [];
  let totalLength = allLinks.length + allModules.length + allResources.length;

  const [showAddModule, setShowAddModule] = useState(false);

  const handleCloseAddModule = () => {
    setShowAddModule(false);
  };

  return (
    <>
      {showAddModule ? (
        <AddModule onClose={handleCloseAddModule} />
      ) : (
        <>
          <AppHeader setShowAddModule={setShowAddModule} />
          {totalLength === 0 && <EmptyBox />}
        </>
      )}
    </>
  );
}
//main
export default App;
