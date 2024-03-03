import Card from "@/components/Card";
import IntoBanner from "@/components/IntroBanner";
import NavBar from "@/components/NavBar";
import ProgressBar from "@/components/ProgressBar";
export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <IntoBanner />
      <div className="max-w-screen-xl mx-auto">
        <ProgressBar progress={40} />
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
