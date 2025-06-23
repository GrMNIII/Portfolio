export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://www.linkedin.com/in/german-agustin-morales-navia/" target="_blank">LinkedIn</a>
        <a href="https://github.com/GrMNIII" target="_blank">GitHub</a>
      </div>
    </footer>
  );
}
