"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 w-full bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between">
        <h1 className="font-bold text-xl">Mi Portafolio</h1>
        <div className="flex space-x-4">
          <Link href="#hero">Inicio</Link>
          <Link href="#about">Sobre mí</Link>
          <Link href="#projects">Proyectos</Link>
          <Link href="#skills">Habilidades</Link>
          <Link href="#contact">Contacto</Link>
          <Link href="#history">Mi Historia</Link>
        </div>
      </div>
    </motion.nav>
  );
}
