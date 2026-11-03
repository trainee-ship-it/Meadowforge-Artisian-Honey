import { NavLink, Link } from 'react-router-dom'
import { BeeLogoIcon, SearchIcon, CartIcon } from '../ui/Icons'

const navLinkClass = ({ isActive }) =>
  `no-underline py-3 ${isActive ? 'text-accent border-b border-accent' : ''}`

export const Header = () => (
  <header className="bg-header border-b border-border">
    <div className="max-w-[1280px] mx-auto px-8 py-4 flex flex-wrap items-center justify-between gap-4">
      <nav aria-label="Primary" className="flex flex-wrap gap-7 flex-1 basis-60 text-[15px]">
        <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
        <NavLink to="/our-story" className={navLinkClass}>Our Story</NavLink>
        <NavLink to="/traceability" className={navLinkClass}>Traceability</NavLink>
      </nav>

      <Link to="/" aria-label="Meadowforge home" className="no-underline flex flex-col items-center gap-0.5">
        <BeeLogoIcon className="text-accent" />
        <span className="font-serif text-[28px] font-semibold leading-none">Meadowforge</span>
        <span className="text-[10px] tracking-[0.32em] text-muted">ARTISAN HONEY</span>
      </Link>

      <div className="flex flex-wrap justify-end items-center gap-5 flex-1 basis-60 text-[15px]">
        <NavLink to="/journal" className={navLinkClass}>Journal</NavLink>
        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        <button aria-label="Search" className="w-11 h-11 flex items-center justify-center bg-transparent border-0 cursor-pointer">
          <SearchIcon />
        </button>
        <Link to="/shop" aria-label="Cart, 2 items" className="relative w-11 h-11 flex items-center justify-center">
          <CartIcon />
          <span className="absolute top-1.5 right-1 bg-brown text-header text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
        </Link>
      </div>
    </div>
  </header>
)
