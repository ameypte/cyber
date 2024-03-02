import IntoBanner from "@/components/IntroBanner";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <IntoBanner />
    </div>
  );
}
