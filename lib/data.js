// ovo mora da bude posle domen koji ce da se koristi umesto localhost pri production.
// imaces problem tako da znas gde da trazis
const url = 'http://localhost:3000/api'

export const fetchFeatured = async () => {
  const req = await fetch(`api/products/featured`)
  const response = await req.json()
  return response
}
