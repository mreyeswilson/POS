import { useEffect, useState } from "react";
import ProductCart from "./components/ProductCart";


const App = () => {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [categories, setCategories] = useState([])

  const addProduct = (product) => {
    setCart([...cart, product])
  }

  useEffect(() => {
    (async () => {
      const prods = await getProducts()
      setProducts(prods)
      getCategories(prods)
    })()
  }, [])

  const getCategories = (prods) => {
    const categories = prods.map(product => product.category?.toUpperCase())
    categories.unshift('All')
    console.log(categories)
    setCategories([...new Set(categories)])
  }

  const getProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products")
      const { products } = await res.json()
      console.log(products)
      return products
    } catch (e) {
      console.log("Error getting products ->", e)
    }
  }

  const filterProducts = async (category) => {
    const prods = await getProducts()
    if (category !== 'All') {
      const filteredProducts = prods.filter(product => product.category?.toUpperCase() === category)
      setProducts(filteredProducts)
      return
    }
    setProducts(prods)
  }

  return (
    <div className="fixed left-0 top-0 w-full h-screen  overflow-y-auto">
      <div className="w-full sm:w-4/6 bg-white absolute top-0 left-0 h-screen">
        <div className="w-full h-16 py-4 px-10 flex justify-center items-center">
          <input className="bg-gray-100 w-full focus:outline-none py-2 px-8 rounded-xl text-gray-500" placeholder="Buscar producto..." />
        </div>
        <div className="absolute left-0 top-[64px] bg-gray-100 h-[calc(100%-64px)] w-full p-8 overflow-hidden">

          <div className="flex justify-start items-center overflow-hidden overflow-x-auto py-4 px-8">
            {categories.map(category => (
              <span className="px-6 whitespace-nowrap text-sm cursor-pointer active:bg-green-700 active:text-white select-none font-bold rounded py-1 mx-2 bg-white" onClick={() => filterProducts(category)}>{category}</span>
            ))}
          </div>

          <div className="flex justify-center items-start flex-wrap overflow-hidden overflow-y-auto h-[calc(100%-30px)] py-4">
            {products.map(product => (
              <ProductCart product={product} key={product.id} onClick={() => addProduct(product)} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-2/6 sm:block hidden bg-white border-l absolute top-0 right-0 h-screen">
        {
          cart.map((product) => (
            <p>{product.title}</p>
          ))
        }
      </div>
    </div>
  );
}

export default App