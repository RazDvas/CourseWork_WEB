import React, { useEffect, useState } from 'react'
import styles from './AdminPanel.module.css'

export function AdminPanel() {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	// Состояние для формы добавления товара
	const [newProduct, setNewProduct] = useState({
		name: '',
		description: '',
		material: '',
		price: '',
		image_url: '',
		category_id: '',
	})

	// Загрузка списка товаров при монтировании компонента
	useEffect(() => {
		fetchProducts()
	}, [])

	// Функция для загрузки списка товаров
	const fetchProducts = async () => {
		try {
			const response = await fetch('http://localhost:5000/api/products')
			if (!response.ok) {
				throw new Error('Ошибка при загрузке товаров')
			}
			const data = await response.json()
			setProducts(data)
			setLoading(false)
		} catch (error) {
			setError(error.message)
			setLoading(false)
		}
	}

	// Функция для добавления товара
	const handleAddProduct = async e => {
		e.preventDefault()

		try {
			const response = await fetch('http://localhost:5000/api/products', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newProduct),
			})

			if (!response.ok) {
				throw new Error('Ошибка при добавлении товара')
			}

			const data = await response.json()
			setProducts([...products, data])
			setNewProduct({
				name: '',
				description: '',
				material: '',
				price: '',
				image_url: '',
				category_id: '',
			})
			alert('Товар успешно добавлен!')
		} catch (error) {
			console.error('Ошибка:', error)
			alert('Не удалось добавить товар.')
		}
	}

	// Функция для удаления товара
	const handleDeleteProduct = async productId => {
		try {
			const response = await fetch(
				`http://localhost:5000/api/products/${productId}`,
				{
					method: 'DELETE',
				}
			)

			if (!response.ok) {
				throw new Error('Ошибка при удалении товара')
			}

			setProducts(products.filter(product => product.product_id !== productId))
			alert('Товар успешно удален!')
		} catch (error) {
			console.error('Ошибка:', error)
			alert('Не удалось удалить товар.')
		}
	}

	const handleInputChange = e => {
		const { name, value } = e.target
		setNewProduct({
			...newProduct,
			[name]: value,
		})
	}

	if (loading) {
		return <div>Загрузка данных...</div>
	}

	if (error) {
		return <div>Ошибка: {error}</div>
	}

	return (
		<div className={styles.adminPanel}>
			<h1>Админская панель</h1>

			{/* Форма для добавления товара */}
			<form onSubmit={handleAddProduct} className={styles.addProductForm}>
				<h2>Добавить новый товар</h2>
				<input
					type='text'
					name='name'
					placeholder='Название товара'
					value={newProduct.name}
					onChange={handleInputChange}
					required
				/>
				<input
					type='text'
					name='description'
					placeholder='Описание товара'
					value={newProduct.description}
					onChange={handleInputChange}
					required
				/>
				<input
					type='text'
					name='material'
					placeholder='Материал'
					value={newProduct.material}
					onChange={handleInputChange}
					required
				/>
				<input
					type='number'
					name='price'
					placeholder='Цена'
					value={newProduct.price}
					onChange={handleInputChange}
					required
				/>
				<input
					type='text'
					name='image_url'
					placeholder='Ссылка на изображение'
					value={newProduct.image_url}
					onChange={handleInputChange}
					required
				/>
				<input
					type='number'
					name='category_id'
					placeholder='ID категории'
					value={newProduct.category_id}
					onChange={handleInputChange}
					required
				/>
				<button type='submit'>Добавить товар</button>
			</form>

			{/* Список товаров */}
			<div className={styles.productList}>
				<h2>Список товаров</h2>
				{products.map(product => (
					<div key={product.product_id} className={styles.productItem}>
						<img
							src={product.image_url}
							alt={product.name}
							className={styles.productImage}
						/>
						<div className={styles.productDetails}>
							<h3>{product.name}</h3>
							<p>{product.description}</p>
							<p>Материал: {product.material}</p>
							<p>Цена: {product.price} руб.</p>
							<p>Категория: {product.category_id}</p>
						</div>
						<button
							onClick={() => handleDeleteProduct(product.product_id)}
							className={styles.deleteButton}
						>
							Удалить
						</button>
					</div>
				))}
			</div>
		</div>
	)
}
