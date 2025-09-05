import Introduction from "../components/Introduction/Introduction";

export default function Home() {
  return (
    <section className="bg-black h-screen w-full pt-20">
      <div className="items-center justify-center p-4 md:flex flex-col md:w-1/3 md:mt-10 md:ml-10">
        <Introduction />
      </div>
    </section>
  );
}
