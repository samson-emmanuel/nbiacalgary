/* Temporary demo photography (Unsplash, free license) standing in for real
   church photography. Swap every one of these for actual photos of NBIAC's
   own gatherings, building and people before this site goes live. */

function unsplash(id, w) {
  return `https://images.unsplash.com/${id}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=75&w=${w}`
}

export const demoImages = {
  heroWorship: unsplash('photo-1510384742052-1abcb6282645', 2000),
  congregation: unsplash('photo-1644698101032-f8f0fc47457f', 1200),
  preaching: unsplash('photo-1558541966-d1071f7329bd', 1000),
  openBible: unsplash('photo-1504052434569-70ad5836ab65', 1800),
}

/* Page-banner background photos — one per interior page, each picked to
   match that page's topic. Same temporary/demo caveat as demoImages above. */
export const bannerImages = {
  about: unsplash('photo-1569292567777-e5d61a759322', 1800),
  beliefs: unsplash('photo-1596133675020-00e7642c4c8b', 1800),
  ministries: unsplash('photo-1593678820334-91d5f99be314', 1800),
  visit: unsplash('photo-1755705153160-67b29c7718ee', 1800),
  watch: unsplash('photo-1594394489098-74ac04c0fc2e', 1800),
  events: unsplash('photo-1540039155733-5bb30b53aa14', 1800),
  giving: unsplash('photo-1599659593072-10de2e109486', 1800),
  prayer: unsplash('photo-1520187044487-b2efb58f0cba', 1800),
  contact: unsplash('photo-1599073472048-578c99bbe801', 1800),
}
