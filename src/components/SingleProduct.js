import { FaTimes } from 'react-icons/fa'
// import EditProduct from './EditProduct'
import { Link } from 'react-router-dom'

const SingleProduct = ({product, onDelete, onEdit}) => {
    return(
        <div className='card m-2'>
        <div className='card-body'>
            <h3>{product.name}
                <span className='float-end'>
                <FaTimes
                style={{ color: 'red', cursor: 'pointer'}}
                onClick = {() => onDelete(product.id)} 
                />
                </span>
            </h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p className='muted'>{product.category}</p>
        </div>
        <Link to={{pathname: `edit/${product.id}`, component: {product}}}>
            <button className="btn btn-primary">Modifier</button>
        </Link>
        </div>
    )
}

export default SingleProduct

