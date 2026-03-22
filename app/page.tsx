import Limk from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">Welcome to Techtronica</h1>
      <Limk href="/about" className="text-blue-500 underline mt-4 block text-center">
        Learn more about us
      </Limk>
    </div>   
  );
}
