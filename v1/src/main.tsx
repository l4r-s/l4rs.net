import ReactDOM from "react-dom/client";
import "./index.css";

const rootElement = document.getElementById("root")!;
const startElement = document.getElementById("start");

async function bootstrap() {
  const { default: App } = await import('./App');
  ReactDOM.createRoot(rootElement).render(<App />);

  if (startElement) {
    startElement.remove();
  }
}

bootstrap();