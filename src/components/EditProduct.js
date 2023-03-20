import { useState } from 'react'
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const EditProduct = ({products, onEdit}) => {
    const navigate = useNavigate();
    const params = useParams();
    const product = products.filter(product =>{
        return product.id == params.id
    })
    const [name, setName] = useState(product[0].name);
    const [description, setDescription] = useState(product[0].description);
    const [price, setPrice] = useState(product[0].price);
    const [category, setCategory] = useState(product[0].category);
    const [id] = useState(product[0].id);

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name || !price){
            alert('Vous ne pouvez pas avoir un nom ou prix vide')
            return
        }
        onEdit({name, description, price, category, id})
        navigate('/')
    }

    return (
        <form className="edit-form form" onSubmit={onSubmit}>
            <input type='hidden' value='{id}' />
            <div className="form-control">
                <label>Nom du produit</label>
                <input
                type='text'
                placeholder="Mon produit..."
                value={name}
                onChange = {(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Description</label>
                <input
                type='text'
                placeholder="Description de mon produit..."
                value={description}
                onChange = {(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Prix</label>
                <input
                type='text'
                placeholder="$"
                value={price}
                onChange = {(e) => setPrice(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Catégorie</label>
                <input
                type='text'
                placeholder="Catégorie de mon produit..."
                value={category}
                onChange = {(e) => setCategory(e.target.value)}
                />
            </div>
            <input type="submit" className="btn btn-primary" value="Sauvegarder"/>
            <Link to="/">
                <button className='btn btn-danger'>Annuler</button>
            </Link>
        </form>
    )
}

export default EditProduct
