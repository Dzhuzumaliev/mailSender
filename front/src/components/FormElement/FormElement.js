import React from 'react';
import {Grid, TextField} from "@mui/material";

const FormElement = ({name, value, onChange, label, error, type, required, inputProps, multiline, rows, className, variant}) => {
    return (
        <Grid item xs={12} >
                <TextField
                    type={type}
                    required={required}
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error)}
                    helperText={error}
                    autoComplete={name}
                    inputProps={inputProps}
                    multiline={multiline}
                    rows={rows}
                    className={className}
                    variant={variant}
                    fullWidth
                />
        </Grid>
    );
};


export default FormElement;