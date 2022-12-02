const ProductCart = (props) => {
  const { product } = props
  return (
    <div {...props} className="flex flex-col justify-between max-w-[250px] max-h-[350px] min-h-[350px] p-4 bg-white rounded cursor-pointer m-4 overflow-hidden">
      {/* <img src="https://thumbs.dreamstime.com/b/envase-de-hojalata-para-el-bio-champ%C3%BA-51270724.jpg" alt="" /> */}
      <div className="w-full h-[150px] max-h-[150px] min-h-[150px] overflow-hidden">
        <img src={product.images[0]} alt="product_image.png" className="w-full" />
      </div>
      <h1 className="text-lg uppercase font-bold">{product.title}</h1>
      <small className="text-gray-400 text-ellipsis overflow-hidden">{product.description}</small>
      <b className="text-right mt-2 py-2 border-t">$ {product.price}</b>
    </div>
  )
}

export default ProductCart