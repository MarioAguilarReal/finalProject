import './new_users.scss'
import { useState, useEffect } from 'react'
import { User } from '../../models/User.model'
import usersService from '../../services/users.service';

const initialUser : User = {
    username: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    profile_picture: null,
    email: '',
    password: '',
    password2: ''
};

const NewUsers = () => {
    const [user, setUser] = useState(initialUser as User);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const imageFile = e.target.files?.[0] || null;
        setUser({
            ...user,
            profile_picture: imageFile
        });
    };

    const saveUser = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validateData()) {
            const formData = new FormData();

            for (let key in user) {
                if (user.hasOwnProperty(key)) {
                    const value = user[key as keyof User];
                    if (value !== null) {

                        if (value instanceof File) {
                            formData.append(key, value, value.name);
                        }
                        else {
                            if (key === 'password2') {
                                continue;
                            }
                            formData.append(key, value as string);
                        }
                    }
                }
            }
            const resp = await usersService.createUser(formData as any);
            if (resp) {
                //Limpiar formulario
                alert('User created');

                setUser(initialUser as User);
            }
            else {
                alert('Error creating user');
            }
        }
    }

    const validateData = () => {
        let isValid = true;
        if (!user.username) {
            alert('Username is required');
            isValid = false;
            return;
        }
        if (!user.first_name) {
            alert('First name is required');
            isValid = false;
            return;
        }
        if (!user.last_name) {
            alert('Last name is required');
            isValid = false;
            return;
        }
        if (!user.phone_number) {
            alert('Phone is required');
            isValid = false;
            return;
        }
        if (!user.email) {
            alert('Email is required');
            isValid = false;
            return;
        }
        if (!user.password) {
            alert('Password is required');
            isValid = false;
            return;
        }
        if (!user.password2) {
            alert('Confirm password is required');
            isValid = false;
            return;
        }
        if (user.password !== user.password2) {
            alert('Password and confirm password must be the same');
            isValid = false;
            return;
        }
        return isValid;
    }

    useEffect(() => {
    }, [])

    return (
        <div className="new-user">
            <div className='container'>
                <h1 className='title'>Create New Agent</h1>
                <p className='description'>Create a new agent of real estate sales</p>
                <form className='form'>
                    <div className='form-item'>
                        <input
                            className='form-control'
                            type='text'
                            name='username'
                            id='username'
                            placeholder='UserName'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-item'>
                        <input
                            className='form-control'
                            type='text'
                            name='first_name'
                            id='first_name'
                            placeholder='First Name'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-item'>
                        <input
                            className='form-control'
                            type='text'
                            name='last_name'
                            id='last_name'
                            placeholder='Last Name'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-item'>
                        <input
                            className='form-control'
                            type='text'
                            name='phone_number'
                            id='phone_number'
                            placeholder='Phone'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-item'>
                        <input
                            className='form-control'
                            type='file'
                            accept='image/*'
                            name='profile_picture'
                            id='profile_picture'
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className='form-item'>
                        <input
                            className='form-control'
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Email'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-item'>
                        <input
                            className='form-control'
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Password'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-item'>
                        <input
                            className='form-control'
                            type='password'
                            name='password2'
                            id='password2'
                            placeholder='Confirm Password'
                            onChange={handleChange}
                        />
                    </div>
                    <button className='btn btn-primary' onClick={saveUser}>Create new user</button>
                </form>
            </div>
        </div>
    )
}

export default NewUsers;