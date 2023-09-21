import React from "react";
import axios from "axios";

const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

const fetchTopAlbums = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export default fetchTopAlbums;
