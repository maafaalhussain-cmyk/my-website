const categories = [
  'All products',
  'Electronics',
  'Home & Living',
  'Fashion',
  'Beauty',
  'Health',
  'Outdoor',
];

const featuredSellers = [
  { name: 'Northstar Labs', category: 'Electronics', sales: '12.4K orders', rating: 4.9 },
  { name: 'Luma Home', category: 'Home & Living', sales: '9.1K orders', rating: 4.8 },
  { name: 'Veloura Studio', category: 'Fashion', sales: '8.7K orders', rating: 4.9 },
  { name: 'FreshPeak', category: 'Health', sales: '6.8K orders', rating: 4.7 },
];

const products = [
  {
    id: 1,
    name: 'Aero Wireless Headphones',
    seller: 'Northstar Labs',
    category: 'Electronics',
    price: 179,
    oldPrice: 229,
    rating: 4.9,
    reviews: 128,
    badge: 'Best seller',
    accent: 'from-sky-500 to-blue-600',
  },
  {
    id: 2,
    name: 'Harbor Accent Lamp',
    seller: 'Luma Home',
    category: 'Home & Living',
    price: 94,
    oldPrice: 124,
    rating: 4.8,
    reviews: 89,
    badge: 'New arrival',
    accent: 'from-cyan-500 to-sky-600',
  },
  {
    id: 3,
    name: 'Summit Travel Pack',
    seller: 'FreshPeak',
    category: 'Outdoor',
    price: 132,
    oldPrice: 169,
    rating: 4.7,
    reviews: 64,
    badge: 'Limited stock',
    accent: 'from-blue-600 to-indigo-700',
  },
  {
    id: 4,
    name: 'Nova Daily Serum',
    seller: 'Veloura Studio',
    category: 'Beauty',
    price: 58,
    oldPrice: 72,
    rating: 4.9,
    reviews: 203,
    badge: 'Top rated',
    accent: 'from-indigo-500 to-sky-500',
  },
  {
    id: 5,
    name: 'Urban Flex Smartwatch',
    seller: 'Northstar Labs',
    category: 'Electronics',
    price: 219,
    oldPrice: 279,
    rating: 4.8,
    reviews: 91,
    badge: 'Trending',
    accent: 'from-sky-400 to-cyan-500',
  },
  {
    id: 6,
    name: 'Iris Knit Lounge Set',
    seller: 'Veloura Studio',
    category: 'Fashion',
    price: 88,
    oldPrice: 112,
    rating: 4.7,
    reviews: 74,
    badge: 'Editor pick',
    accent: 'from-blue-500 to-indigo-600',
  },
];

const stats = [
  { value: '24k+', label: 'Verified buyers' },
  { value: '1.8k', label: 'Active sellers' },
  { value: '98%', label: 'Customer satisfaction' },
  { value: '2.4m', label: 'Marketplace orders' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-sky-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-blue-700 text-lg font-bold text-white shadow-sm">
              M
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight text-slate-900">MarketPlace</p>
              <p className="text-xs text-slate-500">Multi-vendor commerce</p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#categories" className="transition hover:text-sky-700">Categories</a>
            <a href="#featured" className="transition hover:text-sky-700">Featured</a>
            <a href="#sellers" className="transition hover:text-sky-700">Sellers</a>
            <a href="#deals" className="transition hover:text-sky-700">Deals</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:text-sky-700 sm:inline-flex">
              Sign in
            </button>
            <button className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800">
              Become a seller
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12),transparent_40%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Trusted marketplace
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Discover products from trusted sellers worldwide.
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Shop curated essentials, trending tech, home favorites, and premium brands from verified
              sellers in one secure marketplace experience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-800">
                Shop now
              </button>
              <button className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:text-sky-700">
                Explore sellers
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-black text-sky-700">{stat.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-white p-5 shadow-[0_32px_80px_rgba(14,116,144,0.12)]">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800 p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]">
                    Top pick
                  </span>
                  <span className="text-sm font-medium">New drop</span>
                </div>
                <div className="mt-8 rounded-[1.25rem] bg-white/10 p-5 backdrop-blur-sm">
                  <div className="flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-white/25 to-white/5 text-4xl shadow-inner">
                    ✨
                  </div>
                </div>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm text-sky-100">Spring collection</p>
                    <h2 className="mt-1 text-2xl font-bold">Aero Smart Bundle</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-sky-100">From</p>
                    <p className="text-2xl font-black">$249</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                  <div className="text-sky-700">98%</div>
                  <div className="mt-1">Repeat orders</div>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                  <div className="text-sky-700">2-day</div>
                  <div className="mt-1">Express shipping</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Categories</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Browse by category</h2>
          </div>
          <button className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:text-sky-700 sm:inline-flex">
            View all
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`group rounded-2xl border p-5 text-left transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-sm ${
                index === 0
                  ? 'border-sky-200 bg-sky-50 text-sky-700'
                  : 'border-slate-200 bg-white text-slate-700'
              }`}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white ${
                  index % 2 === 0 ? 'bg-gradient-to-br from-sky-600 to-blue-700' : 'bg-gradient-to-br from-cyan-500 to-blue-600'
                }`}
              >
                {category.charAt(0)}
              </div>
              <div className="text-lg font-bold">{category}</div>
              <div className="mt-2 text-sm text-slate-500">{index === 0 ? '1,240 items' : `${180 + index * 40} items`}</div>
            </button>
          ))}
        </div>
      </section>

      <section id="featured" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Popular picks</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Trending products</h2>
            </div>
            <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:text-sky-700">
              See all products
            </button>
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            {['Featured', 'Best Sellers', 'Top Rated', 'New Items'].map((filter, index) => (
              <button
                key={filter}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  index === 0
                    ? 'bg-sky-700 text-white shadow-sm'
                    : 'border border-slate-200 bg-slate-50 text-slate-600 hover:border-sky-200 hover:text-sky-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className={`flex h-52 items-center justify-center bg-gradient-to-br ${product.accent} p-6 text-5xl text-white`}>
                  {product.name.charAt(0)}
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-700">
                      {product.badge}
                    </span>
                    <span className="text-sm font-medium text-slate-500">{product.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">Sold by {product.seller}</p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                    <span className="font-semibold text-amber-500">★ {product.rating}</span>
                    <span>({product.reviews} reviews)</span>
                  </div>

                  <div className="mt-5 flex items-end justify-between gap-3">
                    <div>
                      <div className="text-2xl font-black text-slate-900">${product.price}</div>
                      <div className="text-sm text-slate-400 line-through">${product.oldPrice}</div>
                    </div>
                    <button className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800">
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sellers" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Top sellers</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Featured sellers</h2>
          </div>
          <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:text-sky-700">
            Become a seller
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredSellers.map((seller) => (
            <div key={seller.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 text-xl font-black text-white">
                {seller.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{seller.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{seller.category}</p>

              <div className="mt-5 flex items-center justify-between text-sm text-slate-600">
                <span>⭐ {seller.rating}</span>
                <span>{seller.sales}</span>
              </div>

              <button className="mt-6 w-full rounded-full border border-sky-200 bg-sky-50 px-4 py-2.5 text-sm font-semibold text-sky-700 transition hover:bg-sky-100">
                View store
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="deals" className="bg-gradient-to-r from-sky-700 to-blue-800 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">Weekend deals</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Save big on essentials and favorites</h2>
            </div>
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50">
              Shop all deals
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
