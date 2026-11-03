import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

import dipperImg from '../assets/meadowforge/shop-honey-dipper.jpg'
import jarsImg from '../assets/meadowforge/home-jars-collection.jpg'
import jarWildflower from '../assets/meadowforge/shop-jar-wildflower.jpg'
import jarAcacia from '../assets/meadowforge/shop-jar-acacia.jpg'
import jarForest from '../assets/meadowforge/shop-jar-forest.jpg'

const ALL_PRODUCTS = [
  { id: 'wild', name: 'Wildflower Honey', type: 'Wildflower', region: 'Deccan Highlands', origin: 'From Deccan Highlands', price: '₹599', size: '350 g', rating: '4.8', reviews: 240, img: jarWildflower },
  { id: 'acacia', name: 'Acacia Honey', type: 'Acacia', region: 'Himalayan Foothills', origin: 'From Himalayan Foothills', price: '₹699', size: '350 g', rating: '4.9', reviews: 312, img: jarAcacia },
  { id: 'forest', name: 'Forest Honey', type: 'Forest', region: 'Western Ghats', origin: 'From Western Ghats', price: '₹649', size: '350 g', rating: '4.8', reviews: 198, img: jarForest },
  { id: 'euc', name: 'Eucalyptus Honey', type: 'Eucalyptus', region: 'Nilgiri Hills', origin: 'From Nilgiri Hills', price: '₹599', size: '350 g', rating: '4.7', reviews: 146, img: jarsImg },
  { id: 'multi', name: 'Multiflora Honey', type: 'Multiflora', region: 'Deccan Highlands', origin: 'Seasonal harvest', price: '₹549', size: '350 g', rating: '4.8', reviews: 201, img: jarsImg },
  { id: 'gift', name: 'Raw Honey Gift Set', type: 'Gift sets', region: 'Western Ghats', origin: 'Three single-origin honeys', price: '₹1,799', size: '3 × 350 g', rating: '4.9', reviews: 98, img: jarsImg },
]

const TYPE_NAMES = ['Wildflower', 'Acacia', 'Forest', 'Eucalyptus', 'Multiflora', 'Gift sets']
const REGION_NAMES = ['Himalayan Foothills', 'Deccan Highlands', 'Western Ghats', 'Nilgiri Hills']

export const Shop = () => {
  const [types, setTypes] = useState([])
  const [regions, setRegions] = useState([])
  const [added, setAdded] = useState({})

  const toggle = (list, setList, val) => {
    setList(list.includes(val) ? list.filter((v) => v !== val) : [...list, val])
  }

  const shown = useMemo(
    () =>
      ALL_PRODUCTS.filter(
        (p) => (types.length === 0 || types.includes(p.type)) && (regions.length === 0 || regions.includes(p.region))
      ),
    [types, regions]
  )

  return (
    <div className="font-body text-ink bg-page min-h-screen">
      <Header />

      <section className="max-w-[1280px] mx-auto px-8 pt-10 pb-12 flex flex-wrap gap-8 items-center justify-between">
        <div className="flex-1 basis-[480px] flex flex-col gap-4">
          <nav aria-label="Breadcrumb" className="text-[13px] text-muted flex gap-2">
            <Link to="/" className="text-muted no-underline">Home</Link>
            <span aria-hidden="true">›</span>
            <span>Shop</span>
          </nav>
          <h1 className="m-0 font-serif font-medium text-[clamp(44px,5vw,68px)] leading-[1]">Our Honey Collection</h1>
          <p className="m-0 text-[17px] leading-relaxed text-body max-w-[520px]">
            Single-origin, small-batch honeys from unique landscapes, each with its own rare flavor, aroma, and story.
          </p>
        </div>
        <img src={dipperImg} alt="" aria-hidden="true" className="flex-none w-[260px] h-[200px] object-contain block" />
      </section>

      <section className="max-w-[1280px] mx-auto px-8 pb-24 flex flex-wrap gap-10 items-start">
        <aside aria-label="Filters" className="flex-1 basis-[220px] max-w-[280px] flex flex-col gap-7">
          <div className="flex justify-between items-center border-b border-border pb-3">
            <span className="text-[15px] font-semibold">Filter</span>
            <button
              type="button"
              onClick={() => { setTypes([]); setRegions([]) }}
              className="border-0 bg-transparent font-body text-[13px] text-muted underline cursor-pointer py-3"
            >
              Clear all
            </button>
          </div>

          <fieldset className="border-0 m-0 p-0 flex flex-col gap-1">
            <legend className="text-[13px] tracking-[0.16em] font-semibold mb-2">HONEY TYPE</legend>
            {TYPE_NAMES.map((t) => {
              const count = ALL_PRODUCTS.filter((p) => p.type === t).length
              return (
                <label key={t} className="flex items-center gap-2.5 text-[15px] text-body min-h-9 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={types.includes(t)}
                    onChange={() => toggle(types, setTypes, t)}
                    className="w-[18px] h-[18px] accent-brown"
                  />
                  {t} <span className="text-muted">({count})</span>
                </label>
              )
            })}
          </fieldset>

          <fieldset className="border-0 m-0 p-0 flex flex-col gap-1">
            <legend className="text-[13px] tracking-[0.16em] font-semibold mb-2">HARVEST REGION</legend>
            {REGION_NAMES.map((r) => (
              <label key={r} className="flex items-center gap-2.5 text-[15px] text-body min-h-9 cursor-pointer">
                <input
                  type="checkbox"
                  checked={regions.includes(r)}
                  onChange={() => toggle(regions, setRegions, r)}
                  className="w-[18px] h-[18px] accent-brown"
                />
                {r}
              </label>
            ))}
          </fieldset>

          <fieldset className="border-0 m-0 p-0 flex flex-col gap-1">
            <legend className="text-[13px] tracking-[0.16em] font-semibold mb-2">SIZE</legend>
            {['250 g', '350 g', '500 g'].map((s) => (
              <label key={s} className="flex items-center gap-2.5 text-[15px] text-body min-h-9">
                <input type="checkbox" className="w-[18px] h-[18px] accent-brown" />
                {s}
              </label>
            ))}
          </fieldset>
        </aside>

        <div className="flex-[999] basis-[560px] min-w-0 flex flex-col gap-6">
          <div className="flex flex-wrap gap-3 justify-between items-center">
            <span className="text-sm text-body">
              Showing {shown.length} of {ALL_PRODUCTS.length} honeys
            </span>
            <label className="flex items-center gap-2.5 text-sm">
              Sort by
              <select className="h-11 px-3 border border-input-border rounded bg-card font-body text-sm text-ink">
                <option>Best selling</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
                <option>Top rated</option>
              </select>
            </label>
          </div>

          {shown.length === 0 ? (
            <p className="m-0 p-12 text-center text-base text-body border border-dashed border-input-border rounded-md">
              No honeys match those filters yet. Try clearing one.
            </p>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
              {shown.map((p) => {
                const done = !!added[p.id]
                return (
                  <article key={p.id} className="bg-card border border-border rounded-md p-4 flex flex-col gap-2.5 text-center">
                    <img src={p.img} alt={`Jar of Meadowforge ${p.name}`} className="w-full h-[240px] object-contain block bg-tint rounded" />
                    <h2 className="m-0 mt-1.5 font-serif text-2xl font-semibold">{p.name}</h2>
                    <span className="text-sm text-muted">{p.origin}</span>
                    <div className="flex justify-center gap-3 items-baseline">
                      <span className="text-xl font-semibold">{p.price}</span>
                      <span className="text-sm text-muted">{p.size}</span>
                    </div>
                    <span className="text-[13px] text-body">
                      <span className="text-star" aria-hidden="true">★</span> {p.rating} ({p.reviews} reviews)
                    </span>
                    <button
                      type="button"
                      onClick={() => setAdded((a) => ({ ...a, [p.id]: true }))}
                      className={`mt-1.5 h-[46px] border border-brown rounded font-body text-[15px] cursor-pointer ${
                        done ? 'bg-brown text-header' : 'bg-transparent text-ink'
                      }`}
                    >
                      {done ? 'Added ✓' : 'Add to Cart'}
                    </button>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
