import "./styles.css";
import { MultipleContainers } from "./MultipleContainers";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1>Reference form</h1>
        <ReferenceForm /> */}
        <h1>DndKit Multiple Containers</h1>
        <Routes>
          <Route path="*" element={<MultipleContainers vertical />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
