import Card from "@/components/Card";
import Footer from "@/components/Footer";
import IntoBanner from "@/components/IntroBanner";
import NavBar from "@/components/NavBar";
import ProgressBar from "@/components/ProgressBar";
import Title from "@/components/Title";
// import { useState } from "react";
export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <IntoBanner />
      {/* <hr /> */}
      <div className="max-w-screen-xl mx-auto">
        <ProgressBar progress={50} />
        <Title />
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            img={"/img2.jpg"}
            title={"Phishing Awareness"}
            link="/training/phishing"
          />
          <Card img={"/img4.jpg"} title={"Password Security"} />

          <Card img={"/img6.jpg"} title={"Social Engineering"} />
          <Card img={"/dataprotection.jpg"} title={"Data Protection"} />

          <Card img={"/incidence.jpg"} title={"Incidence Response"} />
          <Card img={"/remote.jpg"} title={"Remote Work Security"} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
