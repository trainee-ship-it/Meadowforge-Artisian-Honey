import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { TextLink } from '../components/ui/Button'
import { CompassSunIcon, HiveBuildingIcon, FlaskIcon, BoxIcon } from '../components/ui/Icons'

import heroImg from '../assets/meadowforge/traceability-hero-hexagon-hills.jpg'
import honeycombImg from '../assets/meadowforge/traceability-honeycomb-meadow.jpg'

const steps = [
  { Icon: CompassSunIcon, title: '1. Harvest', desc: 'When and where it was collected.' },
  { Icon: HiveBuildingIcon, title: '2. Apiary', desc: 'The hive and the beekeeper who tends it.' },
  { Icon: FlaskIcon, title: '3. Testing', desc: 'Independent lab results for purity.' },
  { Icon: BoxIcon, title: '4. Packing', desc: 'The date and batch details on your jar.' },
]

export const Traceability = () => {
  const [code, setCode] = useState('')
  const [result, setResult] = useState('')

  const lookup = (e) => {
    e.preventDefault()
    setResult((code || 'MF-24-1087').toUpperCase())
  }

  return (
    <div className="font-body text-ink bg-page min-h-screen">
      <Header />

      <section className="relative overflow-hidden min-h-[600px] flex flex-wrap items-center">
        <img
          src={heroImg}
          alt="Hillside landscape seen through a pattern of golden hexagons"
          className="absolute top-0 right-0 w-[56%] h-full object-cover block [mask-image:linear-gradient(to_right,transparent_0%,#000_30%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_30%)]"
        />
        <div className="relative w-full max-w-[1280px] mx-auto px-8 pt-10 pb-18 box-border">
          <div className="max-w-[540px] flex flex-col gap-5">
            <nav aria-label="Breadcrumb" className="text-[13px] text-muted flex gap-2">
              <Link to="/" className="text-muted no-underline">Home</Link>
              <span aria-hidden="true">›</span>
              <span>Traceability</span>
            </nav>
            <h1 className="m-0 font-serif font-medium text-[clamp(44px,5.4vw,74px)] leading-[1]">
              Trace Your Honey<br />From Hive to Jar
            </h1>
            <p className="m-0 text-lg leading-relaxed text-body max-w-[480px]">
              Enter your batch code to see the complete journey of your honey — from the beekeeper and
              landscape to the harvest and testing details.
            </p>
            <form onSubmit={lookup} className="flex flex-col gap-2 max-w-[480px]">
              <label htmlFor="batch" className="text-[13px] tracking-[0.14em] font-semibold">BATCH CODE</label>
              <div className="flex border border-input-border rounded bg-card overflow-hidden">
                <input
                  id="batch"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="e.g. MF-24-1087"
                  className="flex-1 min-w-0 h-[52px] px-4 border-0 bg-transparent font-body text-base text-ink"
                />
                <button type="submit" aria-label="Trace batch" className="w-14 h-[54px] border-0 bg-brown text-header cursor-pointer text-xl">→</button>
              </div>
              <span className="text-[13px] text-muted">Find the code printed on the jar's lid or base label.</span>
            </form>
          </div>
        </div>
      </section>

      {result && (
        <section className="max-w-[1280px] mx-auto px-8 pb-18">
          <div className="bg-card border border-border rounded-lg p-10 flex flex-wrap gap-10">
            <div className="flex-1 basis-[260px] flex flex-col gap-2.5">
              <span className="text-xs tracking-[0.24em] text-accent">BATCH {result}</span>
              <h2 className="m-0 font-serif text-[40px] font-medium">Wildflower Honey</h2>
              <p className="m-0 text-[15px] leading-[1.6] text-body">Your jar's journey, verified at every step.</p>
            </div>
            <dl className="flex-[2] basis-[480px] m-0 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6">
              {[
                ['BEEKEEPER', '[Beekeeper name]'],
                ['APIARY', 'Deccan Highlands, Maharashtra'],
                ['HARVESTED', '[Harvest date]'],
                ['LAB TESTED', '[Lab name]'],
                ['PACKED', '[Packing date]'],
                ['MAIN BLOOMS', '[Floral sources]'],
              ].map(([dt, dd]) => (
                <div key={dt}>
                  <dt className="text-xs tracking-[0.16em] text-muted">{dt}</dt>
                  <dd className="m-0 mt-1.5 text-[17px]">{dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="bg-header border-t border-b border-border">
        <div className="max-w-[1280px] mx-auto px-8 py-22 flex flex-col gap-14">
          <h2 className="m-0 text-center font-serif font-medium text-[clamp(36px,4vw,52px)]">A Fully Transparent Journey</h2>
          <div className="relative">
            <div aria-hidden="true" className="hidden sm:block absolute top-9 left-[12.5%] right-[12.5%] border-t border-dashed border-accent-ring" />
            <ol className="relative list-none m-0 p-0 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 text-center">
              {steps.map(({ Icon, title, desc }) => (
                <li key={title} className="flex flex-col items-center gap-3">
                  <div className="w-[72px] h-[72px] border border-accent-ring rounded-full flex items-center justify-center bg-card">
                    <Icon className="text-accent" />
                  </div>
                  <h3 className="m-0 font-serif text-2xl font-semibold">{title}</h3>
                  <p className="m-0 text-[15px] leading-[1.55] text-body max-w-[220px]">{desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="standards" className="max-w-[1280px] mx-auto px-8 py-22 flex flex-wrap gap-14 items-center">
        <div className="flex-1 basis-[440px] flex flex-col gap-5">
          <h2 className="m-0 font-serif font-medium text-[clamp(36px,4vw,52px)] leading-[1.05]">Why Traceability Matters</h2>
          <p className="m-0 text-[17px] leading-[1.7] text-body max-w-[500px]">
            It gives you confidence in what you're eating, supports ethical beekeeping, and helps protect the
            landscapes that make our honey possible.
          </p>
          <TextLink to="/our-story">Our Standards →</TextLink>
        </div>
        <div className="flex-1 basis-[380px] min-w-0">
          <img src={honeycombImg} alt="Golden honeycomb with honey dripping from its edge" className="w-full h-[380px] object-cover rounded-md block" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
