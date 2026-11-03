import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

import journalMeadow from '../assets/meadowforge/home-journal-meadow-sunrise.jpg'
import journalBeekeeper from '../assets/meadowforge/journal-day-in-apiary.jpg'
import journalHills from '../assets/meadowforge/journal-biodiversity-valley.jpg'
import journalBee from '../assets/meadowforge/journal-life-of-honeybee.jpg'
import journalHoneycomb from '../assets/meadowforge/journal-clean-honey-pour.jpg'
import journalHives from '../assets/meadowforge/journal-meet-beekeepers.jpg'

const ALL_POSTS = [
  { cat: 'Landscapes', meta: 'LANDSCAPES · 6 MIN READ', title: 'The Wildflowers That Feed Our Bees', img: journalMeadow, alt: 'Wildflower meadow at sunrise' },
  { cat: 'Beekeeping', meta: 'BEEKEEPING · 4 MIN READ', title: 'A Day in the Apiary', img: journalBeekeeper, alt: 'A beekeeper inspects a honeycomb frame at golden hour' },
  { cat: 'Nature', meta: 'NATURE · 5 MIN READ', title: 'Why Biodiversity Makes Better Honey', img: journalHills, alt: 'Beehives in a wildflower valley at sunset' },
  { cat: 'Nature', meta: 'NATURE · 4 MIN READ', title: 'The Life of a Honeybee', img: journalBee, alt: 'Honeybee foraging on a pink cosmos bloom' },
  { cat: 'Sustainability', meta: 'SUSTAINABILITY · 4 MIN READ', title: 'Our Commitment to Cleaner, Greener Honey', img: journalHoneycomb, alt: 'Golden honey poured into a glass jar' },
  { cat: 'Beekeeping', meta: 'BEEKEEPING · 5 MIN READ', title: 'Meet Our Beekeepers', img: journalHives, alt: 'Beehives in a flowering meadow at sunrise' },
]

const CATEGORIES = ['All', 'Beekeeping', 'Landscapes', 'Nature', 'Sustainability']

export const Journal = () => {
  const [cat, setCat] = useState('All')
  const posts = useMemo(() => (cat === 'All' ? ALL_POSTS : ALL_POSTS.filter((p) => p.cat === cat)), [cat])

  return (
    <div className="font-body text-ink bg-page min-h-screen">
      <Header />

      <section className="max-w-[1280px] mx-auto px-8 pt-10 pb-10 flex flex-col items-center gap-4 text-center">
        <nav aria-label="Breadcrumb" className="self-start text-[13px] text-muted flex gap-2">
          <Link to="/" className="text-muted no-underline">Home</Link>
          <span aria-hidden="true">›</span>
          <span>Journal</span>
        </nav>
        <h1 className="m-0 font-serif font-medium text-[clamp(44px,5vw,68px)] leading-[1]">The Meadowforge Journal</h1>
        <p className="m-0 text-[17px] leading-relaxed text-body max-w-[520px]">
          Stories from our landscapes, beekeepers, and the natural world that makes our honey possible.
        </p>
        <div role="group" aria-label="Filter by topic" className="flex flex-wrap justify-center gap-2.5 mt-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              aria-pressed={c === cat}
              className={`h-11 px-[22px] rounded-full border border-brown font-body text-sm cursor-pointer ${
                c === cat ? 'bg-brown text-header' : 'bg-transparent text-ink'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-8 pt-6 pb-24">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
          {posts.map((p) => (
            <article key={p.title} className="flex flex-col">
              <img src={p.img} alt={p.alt} className="w-full h-[240px] object-cover block rounded" />
              <div className="pt-[18px] flex flex-col gap-2 flex-1">
                <span className="text-[11px] tracking-[0.18em] text-muted">{p.meta}</span>
                <h2 className="m-0 font-serif text-[28px] font-semibold leading-[1.12]">{p.title}</h2>
                <a href="#" className="mt-auto text-sm py-2.5 no-underline">Read more →</a>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button type="button" className="h-12 px-7 border border-ink rounded bg-transparent font-body text-[15px] cursor-pointer">
            Load more stories
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
