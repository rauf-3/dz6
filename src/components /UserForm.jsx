import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const UserForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [users, setUsers] = useState([]);

    const onSubmit = (data) => {
        setUsers([...users, data]);
        reset();
    };

    const handleDelete = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
    };

    const clearTable = () => {
        setUsers([]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Имя:</label>
                    <input
                        {...register('name', { required: true })}
                    />
                    {errors.name && <p>Имя обязательно для заполнения</p>}
                </div>
                <div>
                    <label>Имя пользователя:</label>
                    <input
                        {...register('username', { required: true })}
                    />
                    {errors.username && <p>Имя пользователя обязательно для заполнения</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        {...register('email', { required: true })}
                    />
                    {errors.email && <p>Email обязателен для заполнения</p>}
                </div>
                <div>
                    <label>Телефон:</label>
                    <input
                        {...register('phone', { required: true })}
                    />
                    {errors.phone && <p>Телефон обязателен для заполнения</p>}
                </div>
                <div>
                    <label>Вебсайт:</label>
                    <input
                        {...register('website')}
                    />
                </div>
                <button type="submit">Создать</button>
                <button type="button" onClick={clearTable}>Очистить таблицу</button>
            </form>

            <table>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Имя пользователя</th>
                    <th>Email</th>
                    <th>Телефон</th>
                    <th>Вебсайт</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {users.length > 0 ? (
                    users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>
                                <button onClick={() => handleDelete(index)}>Удалить</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6">Таблица пуста</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default UserForm;
