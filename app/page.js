"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import IntoBanner from "@/components/IntroBanner";
import NavBar from "@/components/NavBar";
import ProgressBar from "@/components/ProgressBar";
import Title from "@/components/Title";

import { useState, useEffect } from "react";
export default function Home() {
  const [username, setUsername] = useState(null);
  try {
    if (localStorage.getItem("name")) {
      useEffect(() => {
        if (localStorage.getItem("name")) {
          setUsername(localStorage.getItem("name").split(" ")[0]);
        }
      }, []);
    }
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <IntoBanner username={username} />
      {/* <hr /> */}
      <div className="max-w-screen-xl mx-auto">
        {username ? <ProgressBar progress={50} /> : null}
        <Title />
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            img={"/img2.jpg"}
            title={"Phishing Awareness"}
            link="/training/phishing"
          />
          <Card
            img={"/img4.jpg"}
            title={"Password Security"}
            link="/training/password"
          />

          <Card
            img={"/img6.jpg"}
            title={"Social Engineering"}
            link="/training/social"
          />
          <Card
            img={"/dataprotection.jpg"}
            title={"Data Protection"}
            link="/training/data"
          />

          <Card
            img={"/incidence.jpg"}
            title={"Incidence Response"}
            link="/training/incidence"
          />
          <Card
            img={"/remote.jpg"}
            title={"Remote Work Security"}
            link="/training/remote"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
