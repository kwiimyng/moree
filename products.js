export async function fetchProducts() {
    const res = await fetch('https://dummyjson.com/products')
    if (!res.ok) throw new Error('Failed to fetch products')
    const data = await res.json()
    return data.products
  }
  
  export async function fetchProductById(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    if (!res.ok) throw new Error('Failed to fetch product')
    return await res.json()
  }
  