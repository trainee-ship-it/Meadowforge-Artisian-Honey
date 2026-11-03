import { Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Button } from '../components/ui/Button'
import { HiveRoofIcon, GearSunIcon, ShieldCheckIcon, ShieldDotIcon } from '../components/ui/Icons'

import heroImg from '../assets/meadowforge/journal-biodiversity-valley.jpg'
import hivesImg from '../assets/meadowforge/story-beehives-meadow.jpg'
import beeImg from '../assets/meadowforge/story-bee-cosmos.jpg'

const timeline = [
  { Icon: HiveRoofIcon, year: '2019', label: 'The first hives' },
  { Icon: GearSunIcon, year: '2021', label: 'Our beekeeper network' },
  { Icon: ShieldCheckIcon, year: '2024', label: 'Traceability at scale' },
  { Icon: ShieldDotIcon, year: 'Today', label: 'A growing community' },
]

const values = [
  { n: '01', title: 'Bees First', desc: 'We harvest only surplus honey and never feed sugar syrup in flowering season.' },
  { n: '02', title: 'Raw & Unblended', desc: 'Every jar is single-origin, cold-filtered and never heated or mixed.' },
  { n: '03', title: 'Fair to Keepers', desc: 'Partner beekeepers are paid fairly and credited by name on every batch.' },
]

export const OurStory = () => (
  <div className="font-body text-ink bg-page min-h-screen">
    <Header />

    <section className="relative overflow-hidden min-h-[580px] flex flex-wrap items-center">
      <img
        src={heroImg}
        alt="Beehives in a wildflower valley at sunset"
        className="absolute top-0 right-0 w-[72%] h-full object-cover block [mask-image:linear-gradient(to_right,transparent_0%,#000_35%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_35%)]"
      />
      <div className="relative w-full max-w-[1280px] mx-auto px-8 pt-10 pb-18 box-border">
        <div className="max-w-[560px] flex flex-col gap-5">
          <nav aria-label="Breadcrumb" className="text-[13px] text-muted flex gap-2">
            <Link to="/" className="text-muted no-underline">Home</Link>
            <span aria-hidden="true">›</span>
            <span>Our Story</span>
          </nav>
          <h1 className="m-0 font-serif font-medium text-[clamp(46px,5.6vw,78px)] leading-[1]">
            Our Story<br /><em className="italic">Rooted in Nature, Guided by Bees</em>
          </h1>
          <p className="m-0 text-lg leading-relaxed text-body max-w-[460px]">
            Meadowforge is a sustainable honey company built on a simple belief — healthy landscapes create
            extraordinary honey.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-header border-t border-b border-border">
      <div className="max-w-[1280px] mx-auto px-8 py-22 flex flex-wrap gap-16 items-center">
        <div className="flex-1 basis-[440px] min-w-0">
          <img src={hivesImg} alt="Wooden beehives in a flowering meadow below forested hills" className="w-full h-[460px] object-cover rounded-md block" />
        </div>
        <div className="flex-1 basis-[440px] flex flex-col gap-5">
          <h2 className="m-0 font-serif font-medium text-[clamp(36px,4vw,52px)] leading-[1.05]">The Meadowforge Journey</h2>
          <p className="m-0 text-[17px] leading-[1.7] text-body">
            What began as a small family apiary has grown into a purpose-driven brand, working with local
            beekeepers to protect biodiversity and bring truly pure, traceable honey to your table.
          </p>
          <ol className="list-none m-0 mt-4 pt-6 border-t border-border grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6">
            {timeline.map(({ Icon, year, label }) => (
              <li key={year} className="flex flex-col gap-2">
                <Icon className="text-accent" />
                <span className="font-serif text-[30px] font-semibold">{year}</span>
                <span className="text-sm text-body">{label}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-dark text-dark-text min-h-[600px] flex flex-wrap items-center">
      <img
        src={beeImg}
        alt="A honeybee gathering pollen from a pink cosmos flower"
        className="absolute top-0 right-0 w-[70%] h-full object-cover block [mask-image:linear-gradient(to_right,transparent_0%,#000_40%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_40%)]"
      />
      <div className="relative w-full max-w-[1280px] mx-auto px-8 box-border">
        <div className="max-w-[520px] flex flex-col gap-5 py-22">
          <p className="m-0 text-xs tracking-[0.28em] text-gold">OUR PURPOSE</p>
          <h2 className="m-0 font-serif font-medium text-[clamp(40px,4.4vw,60px)] leading-[1.02] text-dark-ink">
            Healthier Landscapes, Happier Bees
          </h2>
          <p className="m-0 text-[17px] leading-[1.7] max-w-[460px]">
            We work with nature, not against it — supporting pollinators, native habitats, and regenerative
            beekeeping for a more resilient tomorrow.
          </p>
          <Button variant="outline-light" to="/traceability" className="self-start">Our Commitment →</Button>
        </div>
      </div>
    </section>

    <section className="max-w-[1280px] mx-auto px-8 py-22 flex flex-col gap-10">
      <h2 className="m-0 text-center font-serif font-medium text-[clamp(34px,3.6vw,46px)]">What We Stand For</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
        {values.map(({ n, title, desc }) => (
          <div key={n} className="bg-card border border-border rounded-md p-8 flex flex-col gap-3">
            <span className="font-serif text-4xl text-accent">{n}</span>
            <h3 className="m-0 font-serif text-[26px] font-semibold">{title}</h3>
            <p className="m-0 text-[15px] leading-[1.65] text-body">{desc}</p>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
)
