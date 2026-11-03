const base = { fill: 'none', stroke: 'currentColor', 'aria-hidden': true }

export const BeeLogoIcon = ({ className = '' }) => (
  <svg width="28" height="22" viewBox="0 0 28 22" strokeWidth="1.4" className={className} {...base}>
    <ellipse cx="14" cy="13" rx="4" ry="6" />
    <path d="M10.5 11h7M10.5 14h7M10.8 17h6.4" />
    <path d="M10 9C6 2 1 5 3 9s7 2 7 2M18 9c4-7 9-4 7 0s-7 2-7 2" />
    <path d="M12.5 7l-1.5-3M15.5 7l1.5-3" />
  </svg>
)

export const SearchIcon = ({ className = '' }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.6" className={className} {...base}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-4-4" />
  </svg>
)

export const CartIcon = ({ className = '' }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.6" className={className} {...base}>
    <path d="M5 8h14l-1 12H6L5 8z" />
    <path d="M9 8V6a3 3 0 016 0v2" />
  </svg>
)

export const FernIcon = ({ className = '' }) => (
  <svg width="24" height="52" viewBox="0 0 24 52" strokeWidth="1.2" className={className} {...base}>
    <path d="M18 50C6 42 4 24 12 4" />
    <path d="M14 44c-6 0-9-3-10-6 4 0 8 2 10 6zM11 35c-6-1-8-4-9-7 4 0 7 3 9 7zM10 26c-5-2-7-5-7-8 4 1 6 4 7 8zM11 17c-4-3-5-6-4-9 3 2 5 5 4 9z" />
  </svg>
)

export const LocationPinIcon = ({ className = '' }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" className={className} {...base}>
    <path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const PersonIcon = ({ className = '' }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" className={className} {...base}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1-4.5 4.5-7 8-7s7 2.5 8 7" />
  </svg>
)

export const LeafIcon = ({ className = '' }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" className={className} {...base}>
    <path d="M5 19c0-8 6-14 15-14-1 9-7 15-15 14z" />
    <path d="M5 19l8-8" />
  </svg>
)

export const HiveRoofIcon = ({ className = '' }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.4" className={className} {...base}>
    <path d="M4 10l8-5 8 5v10H4z" />
    <path d="M4 14h16" />
  </svg>
)

export const GearSunIcon = ({ className = '' }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.4" className={className} {...base}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.3 4.3M14.1 14.1l4.3 4.3M18.4 5.6l-4.3 4.3M9.9 14.1l-4.3 4.3" />
  </svg>
)

export const ShieldCheckIcon = ({ className = '' }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.4" className={className} {...base}>
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

export const ShieldDotIcon = ({ className = '' }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.4" className={className} {...base}>
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export const CompassSunIcon = ({ className = '' }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.4" className={className} {...base}>
    <circle cx="12" cy="10" r="3" />
    <path d="M12 13v8M12 7V3M9 10H5M19 10h-4M9.9 7.9L7 5M14.1 7.9L17 5" />
  </svg>
)

export const HiveBuildingIcon = ({ className = '' }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.4" className={className} {...base}>
    <path d="M5 9l7-5 7 5v11H5z" />
    <path d="M5 13h14M5 17h14" />
  </svg>
)

export const FlaskIcon = ({ className = '' }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.4" className={className} {...base}>
    <path d="M9 3h6M10 3v6l-5 10a1.5 1.5 0 001.3 2h11.4a1.5 1.5 0 001.3-2L14 9V3" />
    <path d="M7 15h10" />
  </svg>
)

export const BoxIcon = ({ className = '' }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.4" className={className} {...base}>
    <path d="M8 4h8v3H8zM7 7h10l1 13H6z" />
    <path d="M9 12h6" />
  </svg>
)

export const MailIcon = ({ className = '' }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" className={className} {...base}>
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

export const PhoneIcon = ({ className = '' }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" className={className} {...base}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z" />
  </svg>
)

export const CheckCircleIcon = ({ className = '' }) => (
  <svg width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.4" className={className} {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l3 3 5-6" />
  </svg>
)
