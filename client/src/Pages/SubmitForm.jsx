import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useFormik, Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CentralizeItems from '../components/CentralizeItems';
import { submitForm } from '../hooks/apiCalls';


const submitSchema = yup.object().shape({
    name: yup.string().min(3).required("Please enter your name"),
    sectors: yup.string().required("Please select an option"),
    term: yup.string().required("Please agree to the terms and conditions")
});




const initialValues = {
    name: "",
    sectors: "",
    term: false,
};

const documentId = JSON.parse(localStorage.getItem("editSafeHouse"));


function SubmitForm() {
    const { palette } = useTheme();
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [id, setId] = useState('');

    //submisson to the backend server
    const handleFinalSubmission = async (values) => {
        const response = await submitForm(values);
        console.log(response.message);
        localStorage.setItem("editSafeHouse", JSON.stringify(response.message._id));
        await setId(JSON.parse(localStorage.getItem("editSafeHouse")));
    };


    return (
        <Formik
            onSubmit={handleFinalSubmission}
            initialValues={initialValues}
            validationSchema={submitSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 5
                        }}
                    >

                        <>
                            <TextField
                                label="Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                name='name'
                                fullWidth
                                margin='normal'
                                sx={{
                                    marginBottom: 2
                                }}
                            />

                            {errors.name && (
                                <Typography
                                    variant='caption'
                                    color="error"
                                    gutterBottom
                                >
                                    {errors.name}
                                </Typography>
                            )}

                            <FormControl
                                variant='outlined'
                                fullWidth sx={{ marginBottom: 2 }}

                            >
                                <InputLabel id="selectors">Selectors</InputLabel>
                                <Select
                                    labelId="sectors"
                                    label="sectors"
                                    name='sectors'
                                    value={values.sectors}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"AI"}>Artificial Intelligence</MenuItem>
                                    <MenuItem value={"ML"}>Machine Learning</MenuItem>
                                    <MenuItem value={"DL"}>Deep Learning</MenuItem>
                                </Select>
                            </FormControl>
                            {errors.sectors && (
                                <Typography
                                    variant='caption'
                                    color="error"
                                    gutterBottom
                                >
                                    {errors.sectors}
                                </Typography>
                            )}

                            <FormControlLabel
                                control={<Checkbox />}
                                value={values.term}
                                label="Agree to terms"
                                name='term'
                                sx={{ marginBottom: 2 }}
                                onChange={handleChange}
                            />
                            {errors.term && (
                                <Typography
                                    variant='caption'
                                    color="error"
                                    gutterBottom
                                >
                                    {errors.term}
                                </Typography>
                            )}


                            <Button
                                fullWidth
                                type='submit'
                                margin='normal'
                                disabled={values.term == false}
                                sx={{
                                    m: ".3rem 1rem",
                                    p: "1rem",
                                    backgroundColor: palette.primary.main,
                                    color: '#fff',
                                    "&:hover": { color: palette.primary.main }
                                }}
                            >
                                SAVE
                            </Button>
                            <Link to={`/update/${id}`}>Edit</Link>
                        </>

                    </Box>
                </form>
            )}
        </Formik>
    )
}

export default SubmitForm