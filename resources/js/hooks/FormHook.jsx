import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const useForm = (onSuccess) => {

    // setting some states to use in form
    const [errors, setErrors] = useState({});
    const [inProgress, setInProgress] = useState(false);

    // creating a form handler for the forms
    const formHandler = async (event) => {
        event.preventDefault();

        // saving the contexts
        let form = event.target;

        try{
            // setting the loading true
            setInProgress(true);

            // sending the request
            const res = await axios[form.method](form.action, new FormData(form));

            // setting the loading false and handling the success
            setInProgress(false);
            onSuccess(res.data);
        }catch(errs){
            // pausing the loading
            setInProgress(false);

            // if validation error occurs
            if(errs?.response?.data?.errors != undefined) setErrors(errs.response.data.errors);
            else toast.error(err.response.data.message);
        }
    }

    return {errors, formHandler, inProgress};
}
