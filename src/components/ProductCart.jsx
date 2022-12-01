const ProductCart = (props) => {
  return (
    <div {...props} className="flex flex-col max-w-[250px] max-h-[350px] p-4 bg-white rounded cursor-pointer m-4 overflow-hidden">
        <img src="https://thumbs.dreamstime.com/b/envase-de-hojalata-para-el-bio-champ%C3%BA-51270724.jpg" alt="" />
        <h1 className="text-lg uppercase font-bold">Hojalata 30ml</h1>
        <small className="text-gray-400 text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. kljsdkljkfjdkslfjkldsjflksdjfklsdjlkfjdsklf</small>
        <b className="text-right mt-2 py-2 border-t">$ 100</b>
    </div>
  )
}

export default ProductCart