import { Link } from 'react-router-dom'

export const Footer = () => (
  <footer className="bg-dark text-dark-body">
    <div className="max-w-[1280px] mx-auto px-8 pt-16 pb-8 flex flex-col gap-12">
      <div className="flex flex-wrap gap-12 justify-between">
        <div className="flex-1 basis-80 flex flex-col gap-4">
          <span className="font-serif text-[32px] font-semibold text-dark-ink">Meadowforge</span>
          <p className="m-0 text-[15px] leading-relaxed max-w-[340px]">
            Seasonal harvests, beekeeper stories and first access to small batches — once a month.
          </p>
          <form className="flex flex-wrap gap-2 max-w-[400px]">
            <label htmlFor="nl-email" className="sr-only">Email address</label>
            <input
              id="nl-email"
              type="email"
              placeholder="Your email address"
              className="flex-1 basis-48 h-[46px] px-3.5 border border-muted bg-transparent text-dark-ink rounded text-[15px] font-body"
            />
            <button type="button" className="h-12 px-[22px] border-0 rounded bg-gold text-ink text-[15px] cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-wrap gap-16">
          <div className="flex flex-col gap-2.5 text-[15px]">
            <span className="text-[11px] tracking-[0.22em] text-dark-muted">SHOP</span>
            <Link to="/shop" className="text-dark-body no-underline">All Honey</Link>
            <Link to="/shop" className="text-dark-body no-underline">Gift Sets</Link>
            <Link to="/traceability" className="text-dark-body no-underline">Trace a Jar</Link>
          </div>
          <div className="flex flex-col gap-2.5 text-[15px]">
            <span className="text-[11px] tracking-[0.22em] text-dark-muted">ABOUT</span>
            <Link to="/our-story" className="text-dark-body no-underline">Our Story</Link>
            <Link to="/journal" className="text-dark-body no-underline">Journal</Link>
            <Link to="/contact" className="text-dark-body no-underline">Contact</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-border pt-6 flex flex-wrap gap-4 justify-between text-[13px] text-dark-muted">
        <span>© 2026 Meadowforge Artisan Honey</span>
        <span>Deccan Highlands, Maharashtra, India</span>
      </div>
    </div>
  </footer>
)
