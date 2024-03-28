"use server"

import axios from "axios"

export async function compareFiles(formData: FormData) {
    const comparedArray = await axios.post(`${process.env.API_URL}/compare`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        console.log(error);
    })

    return comparedArray;
}