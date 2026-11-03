import { Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Button, TextLink } from '../components/ui/Button'
import { FernIcon, LocationPinIcon, PersonIcon, LeafIcon } from '../components/ui/Icons'

import heroImg from '../assets/meadowforge/journal-day-in-apiary.jpg'
import storyImg from '../assets/meadowforge/home-story-hexagon-collage-v2.jpg'
import honeycombImg from '../assets/03_honeycomb_dripping.jpg'
import jarsImg from '../assets/04_honey_jars_collection.jpg'
import journalMeadow from '../assets/meadowforge/home-journal-meadow-sunrise.jpg'
import journalBeekeeper from '../assets/meadowforge/journal-day-in-apiary.jpg'
import journalHills from '../assets/meadowforge/journal-biodiversity-valley.jpg'

const traceFeatures = [
  { Icon: LocationPinIcon, title: 'Know the Origin', desc: 'See exactly where your honey was harvested.' },
  { Icon: PersonIcon, title: 'Meet the Beekeeper', desc: 'The people who care for our hives and landscapes.' },
  { Icon: LeafIcon, title: 'Harvest Details', desc: 'Real dates, real places, complete transparency.' },
]

const journalPosts = [
  { img: journalMeadow, meta: 'LANDSCAPES · 6 MIN READ', title: 'The Wildflowers That Feed Our Bees' },
  { img: journalBeekeeper, meta: 'BEEKEEPING · 4 MIN READ', title: 'A Day in the Apiary' },
  { img: journalHills, meta: 'NATURE · 5 MIN READ', title: 'Why Biodiversity Makes Better Honey' },
]

export const Home = () => (
  <div className="font-body text-ink bg-page min-h-screen">
    <Header />

    <section className="relative overflow-hidden flex flex-wrap items-stretch min-h-[640px]">
      <div className="flex-1 basis-[440px] flex flex-col justify-center gap-6 py-14 px-8 relative z-10">
        <p className="m-0 text-xs tracking-[0.28em] text-accent">PURE · TRACEABLE · SMALL BATCH</p>
        <h1 className="m-0 font-serif font-medium text-[clamp(48px,6vw,84px)] leading-[0.98]">
          Honey <em className="italic">from</em> Thriving Landscapes
        </h1>
        <p className="m-0 text-lg leading-relaxed text-body max-w-[460px]">
          Single-origin, small-batch honey crafted in harmony with nature — a pure expression of our wild
          landscapes, blooms, and bees.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button variant="solid" to="/shop">Explore Our Honey <span aria-hidden="true">→</span></Button>
          <Button variant="outline" to="/our-story">Our Story</Button>
        </div>
        <div className="self-start inline-flex items-center gap-2 mt-2 text-accent">
          <FernIcon />
          <div className="flex flex-col items-center text-center gap-0.5">
            <span className="text-[11px] tracking-[0.22em] text-muted">GOLD AWARD</span>
            <span className="font-serif italic text-base leading-tight text-ink">
              Artisan Honey Guild<br />2025
            </span>
          </div>
          <FernIcon className="-scale-x-100" />
        </div>
      </div>
      <div className="flex-[1.4] basis-[520px] min-w-0 min-h-[420px] relative">
        <img
          src={heroImg}
          alt="A beekeeper in a veil inspects a honeycomb frame among wildflowers in the hills"
          className="absolute inset-0 w-full h-full object-cover [mask-image:linear-gradient(to_right,transparent_0%,#000_28%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_28%)]"
        />
      </div>
    </section>

    <section className="bg-header border-t border-b border-border">
      <div className="max-w-[1280px] mx-auto px-8 py-22 flex flex-wrap gap-16 items-center">
        <div className="flex-1 basis-[380px] min-w-0">
          <img src={storyImg} alt="Hexagonal collage of green hills, a bee on a white flower and golden honeycomb" className="w-full max-w-[520px] h-[400px] object-contain block" />
        </div>
        <div className="flex-1 basis-[420px] flex flex-col gap-5">
          <p className="m-0 text-xs tracking-[0.28em] text-accent">OUR STORY</p>
          <h2 className="m-0 font-serif font-medium text-[clamp(36px,4vw,52px)] leading-[1.05]">A Wilder, Kinder Honey</h2>
          <p className="m-0 text-[17px] leading-[1.7] text-body max-w-[480px]">
            Meadowforge was born from a simple belief: healthier landscapes make more extraordinary honey. We
            keep our hives where wildflowers still grow freely, and harvest only what the colony can spare.
          </p>
          <TextLink to="/our-story" className="self-start">
            Discover Our Story <span aria-hidden="true">→</span>
          </TextLink>
        </div>
      </div>
    </section>

    <section className="max-w-[1280px] mx-auto px-8 py-22 flex flex-wrap gap-12 items-center">
      <div className="flex-1 basis-[300px] min-w-0">
        <img src={honeycombImg} alt="Honey dripping slowly from a piece of comb" className="w-full h-[360px] object-cover rounded-md block" />
      </div>
      <div className="flex-1 basis-[340px] flex flex-col gap-5">
        <p className="m-0 text-xs tracking-[0.28em] text-accent">TRACEABILITY</p>
        <h2 className="m-0 font-serif font-medium text-[clamp(36px,4vw,52px)] leading-[1.05]">From Hive to Jar, Fully Transparent</h2>
        <p className="m-0 text-[17px] leading-[1.7] text-body">
          Every jar of Meadowforge honey can be traced to its origin — the beekeeper, the landscape, and the
          harvest date.
        </p>
        <Button variant="outline" to="/traceability" className="self-start">Trace Your Honey</Button>
      </div>
      <div className="flex-1 basis-[300px] flex flex-col gap-7 border-l border-border pl-8">
        {traceFeatures.map(({ Icon, title, desc }) => (
          <div key={title} className="flex gap-4 items-start">
            <div className="w-12 h-12 shrink-0 border border-accent-ring rounded-full flex items-center justify-center">
              <Icon className="text-accent" />
            </div>
            <div>
              <h3 className="m-0 mb-1 text-[13px] tracking-[0.16em] font-semibold">{title.toUpperCase()}</h3>
              <p className="m-0 text-[15px] leading-[1.55] text-body">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-tint">
      <div className="max-w-[1280px] mx-auto px-8 py-22 flex flex-wrap gap-14 items-center">
        <div className="flex-[1.3] basis-[480px] min-w-0">
          <img
            src={jarsImg}
            alt="Three jars of Meadowforge honey — Wildflower, Acacia and Forest — among wildflowers"
            className="w-full h-[420px] object-contain bg-tint rounded-md block"
          />
        </div>
        <div className="flex-1 basis-[360px] flex flex-col gap-5">
          <p className="m-0 text-xs tracking-[0.28em] text-accent">OUR HONEY</p>
          <h2 className="m-0 font-serif font-medium text-[clamp(36px,4vw,52px)] leading-[1.05]">Distinctive Harvests, Naturally</h2>
          <p className="m-0 text-[17px] leading-[1.7] text-body">
            A curated collection of single-origin honeys, each with its own character — shaped by seasonal
            blooms, native flora, and the landscapes our bees call home.
          </p>
          <Button variant="solid" to="/shop" className="self-start">
            Shop the Collection <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </section>

    <section className="max-w-[1280px] mx-auto px-8 py-22 flex flex-wrap gap-12">
      <div className="flex-1 basis-[260px] flex flex-col gap-4">
        <p className="m-0 text-xs tracking-[0.28em] text-accent">THE JOURNAL</p>
        <h2 className="m-0 font-serif font-medium text-[44px] leading-[1.05]">Notes from the Hive</h2>
        <p className="m-0 text-base leading-[1.7] text-body">
          Stories from our landscapes, beekeepers, and the natural world that makes our honey possible.
        </p>
        <TextLink to="/journal" className="self-start">Read the Journal →</TextLink>
      </div>
      <div className="flex-[3] basis-[640px] grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7">
        {journalPosts.map((post) => (
          <Link key={post.title} to="/journal" className="no-underline flex flex-col gap-3">
            <img src={post.img} alt={post.title} className="w-full h-[180px] object-cover rounded block" />
            <span className="text-[11px] tracking-[0.18em] text-muted">{post.meta}</span>
            <span className="font-serif text-2xl font-semibold leading-[1.15] text-ink">{post.title}</span>
          </Link>
        ))}
      </div>
    </section>

    <Footer />
  </div>
)
