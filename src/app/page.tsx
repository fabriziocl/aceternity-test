"use client"
import Image from "next/image";
import NavBar from "../../src/app/components/NavBar"
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import {NavbarDemo} from "./components/NavBarDemo";

import * as React from "react";


export default function Home() {
  return (
    <main className="select-none">
      <NavbarDemo />
    </main>
  );
}
