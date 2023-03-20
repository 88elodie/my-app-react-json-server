import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ManyProducts from './components/ManyProduct'
import AddProduct from './components/AddProduct'
import About from './components/About'
import Footer from './components/Footer'
import EditProduct from './components/EditProduct'


function App() {
//Global

const [products, setProducts] = useState([])

useEffect(()=>  {
  const getProducts = async () => {
    const productsFromServer = await fetchProducts()
    setProducts(productsFromServer)
  }
  getProducts()
},[])

const fetchProducts = async () => {
const res = await fetch('http://localhost:3001/products')
const data = await res.json()

return data
}

// const fetchProduct = async (id) => {
// const res = await fetch(`http://localhost:3001/products/${id}`)
// const data = await res.json()

// return data
// }

//Delete
const deleteProduct = async (id) => {
  await fetch(`http://localhost:3001/products/${id}`, {
    method: 'DELETE',
  })
  setProducts(products.filter((product) => product.id !== id))
}

//Add
const addProduct = async (product) => {
  const res = await fetch('http://localhost:3001/products', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  
  const newProduct = await res.json()
  setProducts([...products, newProduct])
}

//Update
const editProduct = async (uptProduct) => {
  const updatedProducts = products.map(product => (product.id === uptProduct.id ? uptProduct : product))
  const updatedProduct = updatedProducts.filter(product =>{
    return product.id === uptProduct.id
  })
  console.log(updatedProducts)
  await fetch (`http://localhost:3001/products/${uptProduct.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updatedProduct[0])
  })

  // const otherProducts = products.filter((product) => product.id !== id)

  setProducts(updatedProducts)
}

//toggle Form
const [showAddProduct, setShowAddProduct] = useState(false)

return (
  <BrowserRouter>
  <div className='container'>
    <Header onAdd={() => setShowAddProduct(!showAddProduct)} showAdd={showAddProduct}/>

    { showAddProduct && <AddProduct onAdd={addProduct}/> }
    {products.length > 0 ? (
      <Routes>
        <Route path="/" element={<ManyProducts products={products} onDeleteMany={deleteProduct} onEditMany={editProduct}/>}/>
      </Routes>
      ):(
        'Aucun Produits'
      )}
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/edit/:id' element={<EditProduct products={products} onEdit={editProduct}/>}/>
    </Routes>
    <Footer/>
  </div>
  </BrowserRouter>
);
}

export default App;
