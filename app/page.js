"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import GetCertificateButton from "@/components/GetCertificateButton";
import IntoBanner from "@/components/IntroBanner";
import NavBar from "@/components/NavBar";
import ProgressBar from "@/components/ProgressBar";
import Title from "@/components/Title";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setUsername(() => localStorage.getItem("name"));
      setIsLogged(() => true);
    } else {
      setUsername(() => null);
      setIsLogged(() => false);
    }

    getProgress();
  }, []);

  const getProgress = async () => {
    const user_id = localStorage.getItem("user_id");
    const totalModules = 6;

    const response = await fetch("/api/progress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, totalModules }),
    });

    const data = await response.json();
    setProgress(() => data.progress);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <IntoBanner username={username} />
      {/* <hr /> */}
      <div className="max-w-screen-xl mx-auto">
        {username ? <ProgressBar progress={progress} /> : null}
        {username && progress == 100 && (
          <div className="flex justify-center items-center p-4">
            <GetCertificateButton />
          </div>
        )}
        <Title />
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            img={"/img2.jpg"}
            title={"Phishing Awareness"}
            link={isLogged ? "/training/phishing" : "/login"}
          />
          <Card
            img={"/img4.jpg"}
            title={"Password Security"}
            link={isLogged ? "/training/password" : "/login"}
          />
          <Card
            img={"/img6.jpg"}
            title={"Social Engineering"}
            link={isLogged ? "/training/social" : "/login"}
          />
          <Card
            img={"/dataprotection.jpg"}
            title={"Data Protection"}
            link={isLogged ? "/training/data" : "/login"}
          />

          <Card
            img={"/incidence.jpg"}
            title={"Incidence Response"}
            link={isLogged ? "/training/incidence" : "/login"}
          />
          <Card
            img={"/remote.jpg"}
            title={"Remote Work Security"}
            link={isLogged ? "/training/remote" : "/login"}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
