import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;
const startElement = document.getElementById("start");

ReactDOM.createRoot(rootElement).render(<App />);

if (startElement) {
  startElement.remove();
}