import { useState } from "react";

const useForm = (initalValue = {}) => {

    const [dataForm, setDataForm] = useState(initalValue);

    const handleChangeInputs = (event) => {
        const { name, value, files, type } = event.target;
        // if (type === 'file') {
        //     console.log(files);
        // }
        setDataForm({
            ...dataForm,
            [name]: type === 'file' ? files : value
        });
    }

    const reset = () => {
        setDataForm({});
    }

    return { dataForm, handleChangeInputs, reset }
}

export default useForm;