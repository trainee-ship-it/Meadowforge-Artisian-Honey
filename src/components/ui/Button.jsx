import { Link } from 'react-router-dom'

export const Button = ({ children, variant = 'solid', to, href, className = '', ...props }) => {
  const base = 'inline-flex items-center gap-2.5 rounded text-[15px] no-underline'
  const variants = {
    solid: 'bg-brown text-header px-[26px] py-3.5',
    outline: 'border border-ink px-[26px] py-3',
    'outline-light': 'border border-dark-text text-dark-ink px-6 py-3',
  }
  const cls = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href || '#'} className={cls} {...props}>
      {children}
    </a>
  )
}

export const TextLink = ({ children, to, href, className = '', ...props }) => {
  const cls = `inline-flex items-center gap-2 text-[15px] py-3 no-underline ${className}`
  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href || '#'} className={cls} {...props}>
      {children}
    </a>
  )
}
