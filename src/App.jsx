import RandomQuoteGenerator from "./RandomQuoteGenerator";
import backgroundImage from "./assets/background.jpg";

function App() {
  return (
    <div
      className="mx-auto flex justify-center bg-no-repeat bg-cover h-full bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      id="root"
    >
      <RandomQuoteGenerator />
    </div>
  );
}

export default App;
