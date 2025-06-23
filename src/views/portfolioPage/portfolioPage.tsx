import { ContactForm } from "@/components/contactForm";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section
        id="hero"
        className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
          {/* Texto del Hero */}
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-5xl font-extrabold">
              Hola, soy <span className="text-yellow-300">Germán Morales</span>
            </h1>
            <p className="text-lg">
              Estudiante universitario apasionado por la tecnología y el
              desarrollo web. Creando soluciones modernas para un mundo digital.
            </p>
            <div className="space-x-4">
              <a
                href="#sobre-mi"
                className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-100 transition"
              >
                Conóceme
              </a>
            </div>
          </div>

          {/* Imagen o ilustración */}
          <div className="md:w-1/2">
            <Image
              src="/images/fotoPerfil.jpg"
              alt="Mi Foto Personalizada"
              width={400}
              height={400}
              className="mx-auto rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Sección "Sobre Mi" */}
        <section
          id="sobre-mi"
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-center space-y-6 md:space-y-0 md:space-x-6"
        >
          {/* Imagen*/}
          <div className="md:w-1/3">
            <Image
              src="/images/person-icon.png"
              alt="Mi Foto Personalizada"
              width={400}
              height={400}
            />
          </div>

          {/* Texto a la derecha */}
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-6">Sobre Mi</h2>
            <p className="text-lg leading-relaxed">
              Soy un estudiante de ingeniería civil en computación e informática
              de la Universidad Católica del Norte, actualmente cursando el
              cuarto año de mi carrera. Estoy en una etapa de preparación para
              realizar mi práctica preprofesional, lo que representa un gran
              paso en mi desarrollo académico y profesional. Mi pasión se centra
              en el desarrollo web, con un enfoque principal en el front-end,
              donde disfruto creando interfaces atractivas, funcionales y
              orientadas a la experiencia del usuario. Me motiva aprender y
              explorar nuevas tecnologías que permitan resolver problemas de
              manera innovadora y eficiente, aplicando mis conocimientos para
              generar impacto en el ámbito tecnológico.
            </p>
          </div>
        </section>

        {/* Sección "Proyectos" */}
        <section id="proyectos" className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="bg-gray-100 rounded-lg shadow-md">
              <CardContent>
                <CardTitle>Honor Samurai Legacy</CardTitle>
                <p className="text-sm">
                  Videojuego de acción basado en un samurái en busca de
                  redención. Proyecto colaborativo con un enfoque en narrativa y
                  diseño visual para moviles.
                </p>
                <a
                  href="https://github.com/kzeta11/PIPA.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  Ver en GitHub
                </a>
              </CardContent>
            </Card>
            <Card className="bg-gray-100 rounded-lg shadow-md">
              <CardContent>
                <CardTitle>VHS: Los Xipetiaos 2.0</CardTitle>
                <p className="text-sm">
                  Un videojuego de terror con el objetivo de escapar de un
                  asesino, proyecto reconocido con el premio GOTA 2022 y
                  destacado como el mejor juego de la edición.
                </p>
                <a
                  href="https://github.com/BogeyedBear/Los-xipetiaos-2.0.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  Ver en GitHub
                </a>
              </CardContent>
            </Card>
            <Card className="bg-gray-100 rounded-lg shadow-md">
              <CardContent>
                <CardTitle>Frontend PIDS</CardTitle>
                <p className="text-sm">
                  Interfaz de usuario para un sistema de gestión de datos de
                  proyectos industriales. Diseñado con React y Tailwind CSS.
                </p>
                <a
                  href="https://github.com/mores-hitt/pids-frontend.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  Ver en GitHub
                </a>
              </CardContent>
            </Card>
            <Card className="bg-gray-100 rounded-lg shadow-md">
              <CardContent>
                <CardTitle>Backend PIDS</CardTitle>
                <p className="text-sm">
                  API backend para el sistema PIDS, desarrollada en Node.js con
                  Express y MongoDB para la gestión de datos.
                </p>
                <a
                  href="https://github.com/mores-hitt/pids-backend.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  Ver en GitHub
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sección "Habilidades" */}
        <section
          id="habilidades"
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
          <div className="space-y-6">
            {/* Lenguajes */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Lenguajes</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "TypeScript",
                  "Python",
                  "Java",
                  "SQL",
                  "HTML / CSS",
                ].map((language) => (
                  <div
                    key={language}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm shadow-md"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Tailwind CSS", "Node.js", "Angular"].map(
                  (framework) => (
                    <div
                      key={framework}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm shadow-md"
                    >
                      {framework}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Herramientas */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Herramientas</h3>
              <div className="flex flex-wrap gap-2">
                {["Git / GitHub", "VS Code", "Figma"].map((tool) => (
                  <div
                    key={tool}
                    className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm shadow-md"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sección "Timeline" */}
        <section
          id="timeline"
          className="bg-gray-100 rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-4xl font-bold mb-6 text-center">Mi Historia</h2>
          <div className="relative border-l-4 border-blue-600 pl-6 space-y-8">
            {/* Evento 1 */}
            <div className="flex items-center">
              <div className="absolute -left-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">N</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Nací y crecí en Antofagasta
                </h3>
                <p className="text-gray-700">
                  Antofagasta, Chile, mi ciudad natal, donde pasé mi infancia y
                  años formativos.
                </p>
              </div>
            </div>

            {/* Evento 2 */}
            <div className="flex items-center">
              <div className="absolute -left-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">C</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Estudios en el Colegio San Agustín
                </h3>
                <p className="text-gray-700">
                  Durante mi etapa escolar, pertenecí al electivo matemático,
                  donde desarrollé mi interés por resolver problemas lógicos y
                  analíticos.
                </p>
              </div>
            </div>

            {/* Evento 3 */}
            <div className="flex items-center">
              <div className="absolute -left-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">2020</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Graduación de Enseñanza Media
                </h3>
                <p className="text-gray-700">
                  Me gradué del Colegio San Agustín en 2020, culminando una
                  etapa fundamental en mi desarrollo académico.
                </p>
              </div>
            </div>

            {/* Evento 4 */}
            <div className="flex items-center">
              <div className="absolute -left-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">2021</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Ingreso a la Universidad Católica del Norte
                </h3>
                <p className="text-gray-700">
                  En 2021 ingresé a estudiar Ingeniería Civil, dando un paso
                  importante en mi formación profesional.
                </p>
              </div>
            </div>

            {/* Evento 5 */}
            <div className="flex items-center">
              <div className="absolute -left-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">2022</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Cambio a Ingeniería Civil en Computación e Informática
                </h3>
                <p className="text-gray-700">
                  En 2022 decidí cambiar mi enfoque a la tecnología y la
                  innovación, optando por Ingeniería Civil en Computación e
                  Informática.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección "Contacto" */}
        <section id="contacto" className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-4">Contacto</h2>
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
