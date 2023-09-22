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

const fetchNewAlbums = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

const fetchSongs = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export { fetchTopAlbums, fetchNewAlbums, fetchSongs };
