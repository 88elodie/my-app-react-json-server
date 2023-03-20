import { useState } from 'react'

const AddProduct = ({onAdd}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name || !price){
            alert('Vous ne pouvez pas avoir un nom ou prix vide')
            return
        }
        onAdd({name, description, price, category})
        setName('')
        setDescription('')
        setPrice('')
        setCategory('')
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
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
            <input type="submit" className="btn btn-primary" value="Ajouter"/>
        </form>
    )
}

export default AddProduct
