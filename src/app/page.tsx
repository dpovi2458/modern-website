import React from 'react';
import { Home, UserCircle, BarChart, Layers } from 'lucide-react';

const ModernWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navegación */}
      <nav className="bg-white shadow-md fixed w-full z-20 top-0">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">MiMarca</div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-800 hover:text-blue-600 transition flex items-center">
              <Home className="mr-2" size={20} /> Inicio
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition flex items-center">
              <UserCircle className="mr-2" size={20} /> Perfil
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition flex items-center">
              <BarChart className="mr-2" size={20} /> Servicios
            </a>
          </div>
        </div>
      </nav>

      {/* Sección Hero */}
      <header className="pt-24 pb-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Transforma Tu Negocio</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Soluciones innovadoras que impulsan el crecimiento y la eficiencia de tu empresa.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
              Comenzar
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Más Información
            </button>
          </div>
        </div>
      </header>

      {/* Características */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-100 rounded-lg hover:shadow-lg transition">
              <Layers className="mx-auto mb-4 text-blue-600" size={50} />
              <h3 className="text-xl font-bold mb-3">Escalabilidad</h3>
              <p className="text-gray-600">Sistemas que crecen con tu negocio.</p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg hover:shadow-lg transition">
              <BarChart className="mx-auto mb-4 text-green-600" size={50} />
              <h3 className="text-xl font-bold mb-3">Análisis</h3>
              <p className="text-gray-600">Insights profundos para tomar decisiones.</p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg hover:shadow-lg transition">
              <UserCircle className="mx-auto mb-4 text-purple-600" size={50} />
              <h3 className="text-xl font-bold mb-3">Experiencia</h3>
              <p className="text-gray-600">Diseño centrado en el usuario.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 MiMarca. Todos los derechos reservados.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacidad</a>
            <a href="#" className="text-gray-400 hover:text-white">Términos</a>
            <a href="#" className="text-gray-400 hover:text-white">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernWebsite;