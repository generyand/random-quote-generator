import RandomQuoteGenerator from "./components/RandomQuoteGenerator";
import backgroundImage from "./assets/background.webp";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <div
        className="flex justify-center h-full mx-auto bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        id="quote-generator"
      >
        <RandomQuoteGenerator />
      </div>
    </>
  );
}

export default App;
