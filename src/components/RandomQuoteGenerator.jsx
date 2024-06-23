import Header from "./Header";
import Quote from "./Quote";

export default function RandomQuoteGenerator() {
  console.log("RandomQuoteGenerator Rendered!");

  return (
    <div className="text-white mt-[15vh] max-w-2xl flex flex-col items-center mx-4">
      <Header />
      <Quote />
    </div>
  );
}
