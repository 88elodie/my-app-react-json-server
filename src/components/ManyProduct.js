import SingleProduct from './SingleProduct'

const ManyProducts = ({products, onDeleteMany, onToggleMany, onEditMany}) => {
    return(
        <>
            {products.map((product)=>(
                <SingleProduct key={product.id} product={product} onDelete={onDeleteMany} onToggle={onToggleMany} onEdit={onEditMany}/>
            ))}
        </>
    )
}

export default ManyProducts