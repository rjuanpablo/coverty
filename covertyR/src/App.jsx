import React, { useState } from "react";
import logoImage from "./assets/coverty_logo.png";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-slate-300 w-screen h-screen">
      <header id="header-wrap" className="relative">
        <div className="navigation fixed top-0 left-0 w-full z-30 duration-300">
          <div className="py-2 px-2 md:px-10 flex justify-between items-center relative duration-300 bg-slate-400">
            <a href="index.html">
              <img src={logoImage} alt="Logo" />
            </a>
            <div className="md:hidden">
              {/* Icono para abrir el menú */}
              {!isMenuOpen ? (
                <div
                  className="cursor-pointer transition opacity duration-300"
                  onClick={handleMenuClick}
                >
                  <RxHamburgerMenu size={40} color="black" />
                </div>
              ) : (
                // Icono para cerrar el menú
                <div
                  className="cursor-pointer transition opacity duration-300"
                  onClick={handleMenuClick}
                >
                  <RxCross1 size={40} color="black" />
                </div>
              )}

              {/* Aquí puedes agregar el contenido del menú desplegable */}
            </div>

            <div class="hidden md:block">
              <a
                class="text-white border border-white px-10 py-3 rounded-full duration-300 hover:bg-blue-600 hover:text-white"
                href="https://www.vidaplus.com.ar/registro/registro.php"
              >
                ¡Quiero Coverty!
              </a>
            </div>

            {/*+
              <button
                className="navbar-toggler focus:outline-none block lg:hidden"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse hidden lg:block duration-300 shadow absolute top-100 left-0 mt-full bg-white z-20 px-5 py-3 w-full lg:static lg:bg-transparent lg:shadow-none"
                id="navbarSupportedContent"
                style="background-color: #272856;"
              >
                <ul className="navbar-nav mr-auto justify-center items-center lg:flex">
                  <li className="nav-item">
                    <a className="page-scroll active" href="#hero-area">
                      Inicio
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="header-btn hidden sm:block sm:absolute sm:right-0 sm:mr-16 lg:static lg:mr-0 w-full">
                  <a
                    className="text-white border border-white px-10 py-3 rounded-full duration-300 hover:bg-blue-600 hover:text-white"
                    href="https://www.vidaplus.com.ar/registro/registro.php"
                  >
                    ¡QuieroCoverty!
                  </a>
                </div>
              </div> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
