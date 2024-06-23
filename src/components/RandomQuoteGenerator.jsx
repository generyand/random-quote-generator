import Header from "./Header";
import Quote from "./Quote";

export default function RandomQuoteGenerator() {
  return (
    <div className=" mt-[15vh] max-w-xl basis-[36rem] flex flex-col items-center mx-4">
      <Header />
      <Quote />
    </div>
  );
}
