import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {getRandomReleaseId} from "../utils/alClient";

const RandomReleaseFunc = () => {
    const nav = useNavigate()

    useEffect(() => {
        getRandomReleaseId()
            .then(r => nav('/release/' + r.data.id))
    })

    return (
        <></>
    );
};

export default RandomReleaseFunc;