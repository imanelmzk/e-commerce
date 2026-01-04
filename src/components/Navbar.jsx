import { NavLink } from 'react-router-dom'

export default function Navbar(cartCount) {
    const linkClass = ({ isActive }) =>
        isActive ? "font-bold text-pink-600" : "text-gray-600 hover:text-black";
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-yellow-600">
        Mini Boutique
      </h1>

      <div className="space-x-4">
        <NavLink to="/" className={linkClass}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          À propos
        </NavLink>
        <NavLink to="/cart" className={linkClass}>
          Panier
          {cartCount > 0 && (
            <span className='ml-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full'>
              {cartCount}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

