import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">Welcome to Techtronica</h1>
      <Link href="/about" className="text-blue-500 underline mt-4 block text-center">
        Learn more about us
      </Link>
    </div>   
  );
}
