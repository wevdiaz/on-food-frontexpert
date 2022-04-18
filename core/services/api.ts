import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.imersaofx.danieldcs.com/",
    headers: {
        Authorization: "d2V2ZXJzLmluZm9AZ21haWwuY29t",
    },
});