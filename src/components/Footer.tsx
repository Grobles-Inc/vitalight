import type React from 'react';
import Logo from "../assets/logo.png";
import { Phone, CreditCard } from 'lucide-react';
import { scrollToSection } from '../utils/scrollAnimation';

const Footer: React.FC = () => {
  // Función para manejar la navegación con animación de scroll
  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-10 pb-6 px-4 mt-10 text-[#253d4e]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Logo y contacto */}
        <div className="flex flex-col items-center md:items-start mb-10 md:mb-0 col-span-1">
          <img src={Logo} alt="Logo" className="w-28 h-auto mb-2" />
          <span className="text-xl tracking-wide text-green-700 font-bold">VitaLight</span>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Phone color='green' size={18} />
              <span className="text-sm">901 641 252</span>
            </div>
          </div>
        </div>

        {/* Navegación del sitio */}
        <div className="col-span-1">
          <h4 className="font-semibold mb-2">Navegación</h4>
          <ul className="text-sm space-y-4 mt-6">
            <li><a href="#inicio" className="hover:underline" onClick={(e) => handleNavClick('inicio', e)}>Inicio</a></li>
            <li><a href="#acerca" className="hover:underline" onClick={(e) => handleNavClick('acerca', e)}>Acerca de</a></li>
            <li><a href="/productos" className="hover:underline">Productos</a></li>
            <li><a href="#categorias" className="hover:underline" onClick={(e) => handleNavClick('categorias', e)}>Categorías</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="col-span-1 flex flex-col items-start gap-2">
          <h4 className="font-semibold mb-2">Redes Sociales</h4>
          <div className="flex gap-3 mt-6">
            <a href="https://www.facebook.com/people/VitaLight/61576756075615/?sk=about" aria-label="Facebook" className="hover:opacity-70">
              <img src="https://img.icons8.com/?size=100&id=118466&format=png&color=12B886" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/vitalightienda/" aria-label="Instagram" className="hover:opacity-70">
              <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=12B886" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Métodos de pago */}
        <div className="col-span-1 flex flex-col items-start gap-2">
          <h4 className="font-semibold mb-2">Métodos de Pago</h4>
          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img src="https://ingenieriacivilyconstruccion.com/wp-content/uploads/2024/12/Icono-1.png" alt="BCP" className='w-6 h-6 rounded-md' />
              <span className="text-sm">BCP (Banco de Crédito del Perú)</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="https://logosenvector.com/logo/img/yape-37283.png" alt="Yape" className='w-5 h-5' />
              <span className='text-sm'>Yape</span>
            </div>
            <div className='flex items-center gap-2'>
              <img src="https://marketing-peru.beglobal.biz/wp-content/uploads/2024/09/logo-plin-fondo-transparente.png" alt="Plin" className='w-5 h-5' />
              <span className='text-sm'>Plin</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOVBMZKttzqH3jXr8J3hoJMS5_3sdPfS5wA&s" alt="Caja Huancayo" className='w-5 h-5 rounded-md' />
              <span className='text-sm'>Caja Huancayo</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">Razón Social: VitaLight S.A.C. - RUT: <span className='font-bold'>15614072293</span></p>
          </div>
        </div>
      </div>
      <p className="text-lg text-center text-green-700 mt-16 opacity-80"
        data-aos="fade-up"
        data-aos-delay="200"
      >© 2025 VitaLight. Todos los derechos reservados.</p>
      <p className="text-lg text-center text-green-700 mt-16 opacity-80">Sitio desarrollado por <a href="https://www.groblestudio.com/" rel="noopener noreferrer" className='underline text-black'>Grobles Studio</a>.</p>
    </footer>
  );
};

export default Footer;
