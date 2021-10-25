import axios from "axios"

export const sendContactMail = async (name, petName,  phone, email, reason) => {
    const data = {
        name, petName,  phone, email, reason
    }

    try {
        const res = await axios({
            method: "post",
            url: "/api/email",
            headers: {
                "Content-Type": "application/json"
            },
            data
        })
        return res

    } catch (error) {
        return error
    }
}