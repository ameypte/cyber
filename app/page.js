import IntoBanner from "@/components/IntroBanner";
import NavBar from "@/components/NavBar";
import ProgressBar from "@/components/ProgressBar";
export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <IntoBanner />
      <ProgressBar />
    </div>
  );
}
