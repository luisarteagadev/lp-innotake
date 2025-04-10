import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
  
     <nav className="sticky top-0 z-50 h-16 py-3 backdrop-blur-lg border-b border-neutral-700/80 borderNav">
      <div className="container px-4 mx-auto relative text-sm ">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo Innotake" />
            <span className="text-xl tracking-tight ">InnoTake</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="uppercase tracking-widest relative group font-semibold"
                >
                  {item.label}
                  <div className="w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-500 ease-in-out"></div>
                </a>
              </li>
            ))}
          </ul>

          
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
        
            </div>
          </div>
        )}
      </div>
    </nav> 
  );
};

export default NavBar;
