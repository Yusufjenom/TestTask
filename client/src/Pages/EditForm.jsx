import React, { useState, useEffect } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CentralizeItems from '../components/CentralizeItems';
import { updatePost, getApost } from '../hooks/apiCalls';


const submitSchema = yup.object().shape({
    name: yup.string().min(3).required("Please enter your name"),
    sectors: yup.string().required("Please select an option"),

});




const initialValues = {
    name: "",
    sectors: ""
};




function EditForm() {
    const { palette } = useTheme();
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const { id } = useParams();
    const [presentName, setPresentName] = useState('');
    const [presentSector, setPresentSector] = useState('');



    //submisson to the backend server
    const handleFinalSubmission = async (id, values) => {
        const response = await updatePost(id, values);
        console.log(response);
    }


    //getting the previous post so as to make a view for update
    const retrievePreviousPost = async (id) => {
        const response = await getApost(id);
        console.log(response);
        await setPresentName(response.message.name);
        await setPresentSector(response.message.sectors);
        initialValues.name = presentName
        initialValues.sectors = presentSector
    };

    console.log(presentName);
    console.log(presentSector);

    useEffect(() => {
     retrievePreviousPost(id)
    
    }, []);

console.log(initialValues)
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
                                value={presentName || values.name}
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
                                <InputLabel id="selectors">Sectors</InputLabel>
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