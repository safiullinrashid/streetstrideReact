import React, { useState } from 'react';
import styles from './index.module.sass';

interface RegistrationFormData {
    email: string;
    phone: string;
    password: string;
    repeatPassword: string;
}

export const Registration: React.FC = () => {
    const [formData, setFormData] = useState<RegistrationFormData>({
        email: '',
        phone: '+7',
        password: '',
        repeatPassword: '',
    });
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            let cleanedPhone = value.replace(/\D/g, '');
            if (cleanedPhone.length <= 11) {
                if (cleanedPhone.length === 11 && cleanedPhone.startsWith('7')) {
                    cleanedPhone = `+${cleanedPhone}`;
                }
                setFormData((prevData) => ({
                    ...prevData,
                    phone: cleanedPhone,
                }));
                setPhoneError('');
            } else {
                setPhoneError('Phone number must start with +7 and have 11 digits');
            }
        } else if (name === 'password' || name === 'repeatPassword') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
            if (name === 'repeatPassword' && value !== formData.password) {
                setPasswordError('Passwords do not match');
            } else {
                setPasswordError('');
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.password !== formData.repeatPassword) {
            setPasswordError('Passwords do not match');
            return;
        }
        // Здесь можно обрабатывать отправку формы
        console.log(formData);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Registration</h1>
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
                    <label className={styles.label} htmlFor="phone">
                        Phone
                    </label>
                    <input
                        className={`${styles.input} ${phoneError ? styles.error : ''}`}
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                    {phoneError && (
                        <div className={styles.error}>{phoneError}</div>
                    )}
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="password">
                        Enter the password
                    </label>
                    <input
                        className={styles.input}
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="repeatPassword">
                        Repeat the password
                    </label>
                    <input
                        className={`${styles.input} ${passwordError ? styles.error : ''}`}                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        value={formData.repeatPassword}
                        onChange={handleInputChange}
                        required
                    />
                    {passwordError && (
                        <div className={styles.errorMessage}>{passwordError}</div>
                    )}
                </div>
                <button type="submit" className={styles.submitButton}>
                    Register
                </button>
            </form>
        </div>
    );
};


