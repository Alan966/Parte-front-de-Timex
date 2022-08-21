import React from 'react'
import "../../../ComponentsCss/Organims/Autenticacion/Login.css"
import { useState, } from 'react'
import axios from 'axios'
import { BACKEND } from '../../Atoms/backend'
import Form from '../../Atoms/Components/Form'
import Field from '../../Atoms/Components/Field'
import Submit from '../../Atoms/Components/Submit'
export default function Login() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        let newDatos = {...user, [name]:value}
        setUser(newDatos)
    }


    const handleSubmit = async (e) => {
        console.log('Ya cargue')
        e.preventDefault();
        if(!e.target.checkValidity()){
            return;
        }else{
            let res = await axios.post(`${BACKEND}/autenticacion/login`, user)
            axios.get('http://localhost:5000/autenticacion/admin', {
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${res.data.token}`
                },
            })
            .then(res => {
                return res.data
            })
            .then(res => {
                if(res.userData){
                    console.log(res.userData.user)
                    localStorage.setItem('user', JSON.stringify(res.userData))
                    // window.location.href = '/'
                }else{
                    console.log(res)
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    return(
        <Form onSubmit={handleSubmit}>
        <Field
        label={'Email'}
        value={user.email}
        type={'email'}
        name="email"
        checked={handleInputChange}
        />
        <Field
        label={'Contraseña'}
        value={user.password}
        type={'password'}
        name="password"
        checked={handleInputChange}
        />
        <Submit 
            valor={"Guardar"}
        />
        </Form>
    )
}
