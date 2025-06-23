import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-blue-500 text-white">
      <h1 className="text-5xl font-bold mb-4">Hola, soy Germán Morales</h1>
      <p className="text-2xl mb-6">Desarrollador web apasionado</p>
      <Image src="/profile.jpg" alt="Germán Morales" width={150} height={150} className="rounded-full" />
      <button className="mt-4 bg-white text-blue-500 px-6 py-2 rounded-lg">Conóceme</button>
    </section>
  );
}
