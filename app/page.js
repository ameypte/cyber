import Card from "@/components/Card";
import IntoBanner from "@/components/IntroBanner";
import NavBar from "@/components/NavBar";
import ProgressBar from "@/components/ProgressBar";
export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <IntoBanner />
      {/* <hr /> */}
      <div className="max-w-screen-xl mx-auto">
        <ProgressBar progress={75} />
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            Empower Your Cybersecurity Knowledge
          </h2>
          <p class=" text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Track Your Cybersecurity Journey: Monitor Progress and Earn Your
            Certificate
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          <Card img={"/img2.jpg"} />
          <Card img={"/img2.jpg"} />
          <Card img={"/img2.jpg"} />
          <Card img={"/img2.jpg"} />
        </div>
      </div>
    </div>
  );
}
