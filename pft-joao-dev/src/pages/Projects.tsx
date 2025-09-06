import Squares from "../components/BgAnimation/Squares";

export default function Projects() {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-tertiary pt-24">
      <div className="absolute inset-0 -z-10 ">
        <Squares
          speed={0.4}
          squareSize={40}
          direction="up"
          borderColor="#ff8800"
          hoverFillColor="#ffffff"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center">
        <h1 className="text-white text-3xl">Projects</h1>
      </div>
    </section>
  );
}
