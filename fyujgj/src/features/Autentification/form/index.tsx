// LoginPage.tsx
import React, { useState } from 'react';
import styles from './index.module.sass';
import {Link} from "react-router-dom";

interface AutentificationFormData {
    email: string;
    password: string;
}

export const Autentification: React.FC = () => {
    const [formData, setFormData] = useState<AutentificationFormData>({
        email: '',
        password: '',
    });
    const [loginError, setLoginError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setLoginError('');
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you can handle the login logic
        if (formData.email === 'example@example.com' && formData.password === 'password') {
            // Successful login
            console.log('Successful login');
        } else {
            setLoginError('Invalid email or password');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="email">
                        Email
                    </label>
                    <input
                        className={styles.input}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="password">
                        Password
                    </label>
                    <input
                        className={`${styles.input} ${loginError ? styles.error : ''}`}
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    {loginError && (
                        <div className={styles.errorMessage}>{loginError}</div>
                    )}
                </div>

                <button type="submit" className={styles.submitButton}>
                    Login
                </button>
                <div >
                    <Link to="/registration" className={styles.reg}>
                        Регистрация
                    </Link>
                </div>
            </form>
        </div>
    );
};
