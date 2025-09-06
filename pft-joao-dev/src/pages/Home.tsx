import Squares from "../components/BgAnimation/Squares";
import Card from "../components/Card/Card";
import Introduction from "../components/Introduction/Introduction";

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-screen w-full overflow-hidden bg-tertiary pt-24">
        <div className="absolute inset-0 -z-10 ">
          <Squares
            speed={0.4}
            squareSize={40}
            direction="left"
            borderColor="#ff8800"
            hoverFillColor="#ffffff"
          />
        </div>

        <div className="relative z-10 px-6">
          <div className="flex p-4 flex-col md:flex-row md:w-1/3 md:mt-10 md:ml-10">
            <Card />
            <Introduction />
          </div>
        </div>
      </section>
    </>
  );
}
