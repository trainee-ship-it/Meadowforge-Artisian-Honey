import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { MailIcon, PhoneIcon, LocationPinIcon, CheckCircleIcon } from '../components/ui/Icons'

import hivesImg from '../assets/meadowforge/contact-hives-sunset.jpg'

const inputCls = 'h-12 px-3.5 border border-input-border rounded bg-header font-body text-[15px]'

export const Contact = () => {
  const [sent, setSent] = useState(false)

  return (
    <div className="font-body text-ink bg-page min-h-screen">
      <Header />

      <section className="relative z-10 max-w-[1280px] mx-auto px-8 pt-10 flex flex-wrap gap-16 items-start">
        <div className="flex-1 basis-[400px] flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="text-[13px] text-muted flex gap-2">
            <Link to="/" className="text-muted no-underline">Home</Link>
            <span aria-hidden="true">›</span>
            <span>Contact</span>
          </nav>
          <h1 className="m-0 font-serif font-medium text-[clamp(44px,5vw,68px)] leading-[1]">Get in Touch</h1>
          <p className="m-0 text-[17px] leading-relaxed text-body max-w-[440px]">
            Have a question, feedback, or a partnership idea? We'd love to hear from you.
          </p>
          <ul className="list-none m-0 mt-4 p-0 flex flex-col gap-7">
            <li className="flex gap-[18px] items-start">
              <div className="w-12 h-12 shrink-0 border border-accent-ring rounded-full flex items-center justify-center">
                <MailIcon className="text-accent" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[15px] font-semibold">Email</span>
                <a href="mailto:hello@meadowforge.co" className="text-[15px] text-body">hello@meadowforge.co</a>
              </div>
            </li>
            <li className="flex gap-[18px] items-start">
              <div className="w-12 h-12 shrink-0 border border-accent-ring rounded-full flex items-center justify-center">
                <PhoneIcon className="text-accent" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[15px] font-semibold">Phone</span>
                <a href="tel:+919876543210" className="text-[15px] text-body">+91 98765 43210</a>
                <span className="text-sm text-muted">Mon – Sat, 10 AM – 6 PM</span>
              </div>
            </li>
            <li className="flex gap-[18px] items-start">
              <div className="w-12 h-12 shrink-0 border border-accent-ring rounded-full flex items-center justify-center">
                <LocationPinIcon className="text-accent" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[15px] font-semibold">Our Apiary</span>
                <span className="text-[15px] text-body">Deccan Highlands, Maharashtra, India</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex-1 basis-[460px] min-w-0 bg-card border border-border rounded-lg p-10">
          {sent ? (
            <div className="flex flex-col gap-3.5 items-start py-6">
              <CheckCircleIcon className="text-accent" />
              <h2 className="m-0 font-serif text-[34px] font-medium">Thank you — message received.</h2>
              <p className="m-0 text-base leading-relaxed text-body">We reply within two working days.</p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="h-11 px-5 border border-ink rounded bg-transparent font-body text-[15px] cursor-pointer"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true) }}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="c-name" className="text-sm font-semibold">Your name</label>
                <input id="c-name" type="text" required className={inputCls} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-email" className="text-sm font-semibold">Email address</label>
                <input id="c-email" type="email" required className={inputCls} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-subject" className="text-sm font-semibold">Subject</label>
                <select id="c-subject" className={inputCls}>
                  <option>General question</option>
                  <option>Order support</option>
                  <option>Wholesale &amp; partnerships</option>
                  <option>Press</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-msg" className="text-sm font-semibold">Your message</label>
                <textarea id="c-msg" rows={6} required className={`${inputCls} h-auto py-3 resize-y`} />
              </div>
              <button
                type="submit"
                className="self-start h-[50px] px-7 border-0 rounded bg-brown text-header font-body text-[15px] cursor-pointer"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </section>

      <section aria-hidden="true" className="-mt-[140px]">
        <img
          src={hivesImg}
          alt=""
          className="w-full h-[480px] object-cover block [mask-image:linear-gradient(to_bottom,transparent_0%,#000_40%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,#000_40%)]"
        />
      </section>

      <Footer />
    </div>
  )
}
