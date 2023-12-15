import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CentralizeItems from '../components/CentralizeItems';


const registerSchema = yup.object().shape({
    name: yup.string().required("required"),
    sectors: yup.string().required("required"),
    term: yup.string().required("required")
});



const initialValuesRegister = {
    name: "",
    sectors: "",
    term: "",
}





function EditForm() {
    const { palette } = useTheme();
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width: 600px)");



    const register = async (values, onSubmitProps) => {
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value])
        }
        formData.append('picturePath', values.picture.name);

        const savedUserResponse = await fetch("http://localhost:5000/auth/register", {
            method: "POST",
            body: formData,

        });

        const savedUser = await savedUserResponse.json();

        onSubmitProps.resetForm();

        if (savedUser) {
            setPageType("login");
        }
    }



    const handleFormSubmit = async (values, onSubmitProps) => {
        // if (isLogin) await login(values, onSubmitProps);
        // if (isRegister) await register(values, onSubmitProps)
    };


    return (
        <Formik
        // onSubmit={handleFormSubmit}
        // initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        // validationSchema={isLogin ? loginSchema : registerSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 2
                        }}
                    >

                        <>
                            <TextField
                                label="Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                // value={values.firstname}
                                name='firstname'
                                fullWidth
                                margin='normal'
                                // error={Boolean(touched.firstname) && Boolean(errors.firstname)}
                                // helperText={touched.firstname && errors.fristname}
                                sx={{
                                    marginBottom: 2
                                }}
                            />

                            <FormControl
                                variant='outlined'
                                fullWidth sx={{ marginBottom: 2 }}
                            >
                                <InputLabel id="selectors">Selectors</InputLabel>
                                <Select
                                    labelId="selectors"
                                    label="selector"
                                >
                                    <MenuItem value={"AI"}>Artificial Intelligence</MenuItem>
                                    <MenuItem value={"ML"}>Machine Learning</MenuItem>
                                    <MenuItem value={"DL"}>Deep Learning</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControlLabel
                                control={<Checkbox />}
                                label="Agree to terms"
                                sx={{ marginBottom: 2 }}
                            />


                            <Button
                                fullWidth
                                type='submit'
                                margin='normal'
                                sx={{
                                    m: ".3rem 1rem",
                                    p: "1rem",
                                    backgroundColor: palette.primary.main,
                                    color: '#fff',
                                    "&:hover": { color: palette.primary.main }
                                }}
                            >
                                EDIT
                            </Button>

                        </>

                    </Box>
                </form>
            )}
        </Formik>
    )
}

export default EditForm