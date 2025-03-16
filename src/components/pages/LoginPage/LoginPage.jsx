import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom' // Для перенаправления после авторизации
import { UserContext } from '../../UserContext/UserContext.jsx' // Импортируем контекст
import styles from './LoginPage.module.css'

export function LoginPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [fullName, setFullName] = useState('')
	const [error, setError] = useState('')
	const [isRegistering, setIsRegistering] = useState(false) // Режим регистрации
	const navigate = useNavigate()

	// Получаем setUser из контекста
	const { setUser } = useContext(UserContext)

	const handleLogin = async e => {
		e.preventDefault()

		try {
			const response = await fetch('http://localhost:5000/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			})

			const data = await response.json()

			if (data.success) {
				// Авторизация успешна
				localStorage.setItem('user', JSON.stringify(data.user)) // Сохраняем данные пользователя
				setUser(data.user) // Обновляем состояние пользователя в контексте
				navigate('/') // Перенаправляем на главную страницу
			} else {
				// Ошибка авторизации
				setError(data.message || 'Неверный email или пароль')
			}
		} catch (error) {
			setError('Ошибка при подключении к серверу')
		}
	}

	const handleRegister = async e => {
		e.preventDefault()

		try {
			const response = await fetch('http://localhost:5000/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password, fullName }),
			})

			const data = await response.json()

			if (data.success) {
				// Регистрация успешна
				setError('Регистрация прошла успешно. Теперь вы можете войти.')
				setIsRegistering(false) // Переключаем на режим авторизации
			} else {
				// Ошибка регистрации
				setError(data.message || 'Ошибка при регистрации')
			}
		} catch (error) {
			setError('Ошибка при подключении к серверу')
		}
	}

	return (
		<div className={styles.loginPage}>
			<h2>{isRegistering ? 'Регистрация' : 'Авторизация'}</h2>
			{error && <p className={styles.error}>{error}</p>}
			<form
				onSubmit={isRegistering ? handleRegister : handleLogin}
				className={styles.loginForm}
			>
				{isRegistering && (
					<div className={styles.formGroup}>
						<label htmlFor='fullName'>Имя:</label>
						<input
							type='text'
							id='fullName'
							value={fullName}
							onChange={e => setFullName(e.target.value)}
							required
						/>
					</div>
				)}
				<div className={styles.formGroup}>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor='password'>Пароль:</label>
					<input
						type='password'
						id='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type='submit' className={styles.loginButton}>
					{isRegistering ? 'Зарегистрироваться' : 'Войти'}
				</button>
			</form>
			<p>
				{isRegistering ? (
					<span>
						Уже есть аккаунт?{' '}
						<button
							className={styles.toggleButton}
							onClick={() => setIsRegistering(false)}
						>
							Войти
						</button>
					</span>
				) : (
					<span>
						Нет аккаунта?{' '}
						<button
							className={styles.toggleButton}
							onClick={() => setIsRegistering(true)}
						>
							Зарегистрироваться
						</button>
					</span>
				)}
			</p>
		</div>
	)
}
