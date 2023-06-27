import {
    Alert,
    Button,
    Grid,
    Link,
    TextField,
    Typography
} from "@mui/material";
import {AuthLayout} from "../layout/AuthLayout";
import {Link as RouterLink} from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunk";



const formData ={
    email: 'erick@gmail.com',
    password:'123456',
    displayName:'Erick De La Hoz',
}

const formValidations = {
    email:[(value)=>value.includes('@'), 'El correo debe tener un @'],
    password:[(value)=>value.length >=6, 'El password debe de tener 6 caracteres o mas.'],
    displayName:[(value)=> value.length>=1,'El nombre debe de tener por lo menos un cacarter.'],

}


function RegisterPage() {

    const dispatch= useDispatch();

    const [formSubmitted, setFormSubmitted] =useState(false);

    const {status, errorMessage}= useSelector(state=>state.auth);
    const isCheckingAuthentication=useMemo(()=>status==='checking',[status]);

    const { displayName, email, password, onInputChange, formState, 
    isFormValid, emailValid, passwordValid, displayNameValid 
    }=useForm(formData, formValidations);

    

    const onSubmit=(e)=>{
        e.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;
        dispatch(startCreatingUserWithEmailPassword(formState));

    }

    return (
        <AuthLayout title='Crear Cuenta'>
            <h1>Form Valid: {isFormValid ? 'valido':'Incorrecto'}</h1>
            <form onSubmit={onSubmit}
            className="animate__animated animate__fadeIn animate__faster"
            >
                <Grid container>

                    <Grid item xs ={12}
                        sx={
                            {mt: 2}
                    }>
                        <TextField 
                        label='Nombre completo' 
                        type='text' 
                        placeholder="Nombre completo" 
                        fullWidth 
                        name="displayName"  
                        value={displayName}                       
                        onChange={onInputChange}
                        error={!!displayNameValid && formSubmitted}
                        helperText={displayNameValid}
                        />
                    </Grid>

                    <Grid item xs ={12}
                        sx={
                            {mt: 2}
                    }>
                        <TextField 
                        label='correo' 
                        type='email' 
                        placeholder="example@gmail.com" 
                        fullWidth name="email" 
                        onChange={onInputChange}
                        value={email}
                        error={!!emailValid && formSubmitted}
                        helperText={emailValid}
                        />
                    </Grid>
                    <Grid item xs ={12}
                        sx={
                            {mt: 2}
                    }>
                        <TextField 
                        label='Contraseña' 
                        type='password' 
                        placeholder="Contraseña" 
                        fullWidth name="password"                        
                        onChange={onInputChange}
                        value={password}
                        error={!!passwordValid && formSubmitted}
                        helperText={passwordValid}
                        />
                    </Grid>
                    <Grid container
                        spacing={2}
                        sx={
                            {
                                mb: 2,
                                mt: 1
                            }
                    }>

                        <Grid item
                            xs={12}
                            display={!!errorMessage ? '':'none'}
                            >
                           <Alert severity="error">
                            {errorMessage}
                            </Alert> 
                        </Grid>

                        <Grid item
                            xs={12}>
                            <Button 
                            disable={isCheckingAuthentication}
                            variant='contained' 
                            fullWidth 
                            type="submit">
                                Registrar
                            </Button>
                        </Grid>


                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Link component={RouterLink}
                            color='inherit'
                            to='/auth/login'>
                            Ya tengo una cuenta
                        </Link>

                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    );
}

export default RegisterPage;
