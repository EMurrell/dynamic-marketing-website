import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";
import DelayedFadeIn from "../animations/DelayedFadeIn";
import { ChevronDownIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <section className="flex flex-col justify-center w-full h-screen px-6 bg-center bg-no-repeat bg-cover text-neutral-900 md:px-10 lg:px-16 bg-hero">
      <FadeUp>
        <h1 className="pb-2 text-5xl font-black text-center text-neutral-900 md:text-6xl lg:text-8xl">
          Your Headline
        </h1>
      </FadeUp>
      <FadeIn>
        <h2 className="pb-5 text-2xl font-semibold text-center md:text-3xl lg:text-4xl">
          And a description or slogan
        </h2>
      </FadeIn>
      <DelayedFadeIn>
        <div className="flex flex-row justify-center mx-auto mb-40">
          <button className="py-3 mr-2 text-lg font-semibold text-white border-2 rounded shadow-xl w-36 bg-highlight1 border-highlight1 shadow-neutral-900/50 md:text-xl lg:py-4 hover:bg-transparent hover:text-highlight1">
            Learn More
          </button>
          <button className="py-3 ml-2 text-lg font-semibold bg-gray-200 border-2 rounded shadow-xl hover:text-white w-36 hover:bg-highlight2 border-highlight2 shadow-neutral-900/50 md:text-xl lg:py-4 text-highlight2">
            Contact Us
          </button>
        </div>
      </DelayedFadeIn>
      <DelayedFadeIn>
        <div className="absolute mb-4 bottom-6 inset-x-1/2">
          <ChevronDownIcon className="w-10 h-10 -ml-4 ease-in delay-75 text-neutral-100 animate-bounce" />
        </div>
      </DelayedFadeIn>
    </section>
  );
}
