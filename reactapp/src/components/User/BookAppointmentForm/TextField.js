import React from "react";
import { ErrorMessage,useField } from "formik";
export const TextField = ({label, ...props}) => {
    const [field,meta] = useField(props);
    return(
        <div className="mb-3">
            <label htmlFor={field.name} style={{fontSize:"18px",color:"darkcyan"}}>{label}</label>
            <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} 
            {...field} {...props}
            autoComplete="off"/>
            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    )
}