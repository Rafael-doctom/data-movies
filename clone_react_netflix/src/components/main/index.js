import { useEffect, useState } from "react";

export default function Main() {


    // const BASE_IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg';
    // const min = 555;
    // const max = 70000;
    // const ID_MOVIE = Math.floor(max * Math.random() + min * 2 + max * Math.random() + min);

    // // const URL_MOVIE = `${BASE_URL}${ID_MOVIE}?api_key=${API_KEY}&${LANGUAGE}`;
    // const URL_MOVIE1 = `${BASE_URL}15?api_key=${API_KEY}&${LANGUAGE}`;
    // const URL_MOVIE2 = `${BASE_URL}25?api_key=${API_KEY}&${LANGUAGE}`;
    // const URL_MOVIE3 = `${BASE_URL}35?api_key=${API_KEY}&${LANGUAGE}`;


    // const image = `https://api.themoviedb.org/3/configuration?api_key=d54bd45f38aa4b1f75c30a3086f27e83`

    // console.log(image)

    // useEffect(() => {
    //     fetch(URL_MOVIE1)
    //         .then((response) => response.json())
    //         .then(json => {
    //             setData(json)
    //         })

    //         .catch((err) => {
    //             console.log(`erro aqui: ${err}`)
    //         })
    // }, [])

    const [data, setData] = useState(null);

    const BASE_URL = 'https://api.themoviedb.org/3/movie/';
    const API_KEY = 'de3613e5e17f32d97ff99513ddc6b056';
    const LANGUAGE = 'language=PT-BR';

    const endPoints = [
        `${BASE_URL}15?api_key=${API_KEY}&${LANGUAGE}`,
        `${BASE_URL}25?api_key=${API_KEY}&${LANGUAGE}`,
        `${BASE_URL}35?api_key=${API_KEY}&${LANGUAGE}`
    ];

    const promises = endPoints.map(url => fetch(url).then(response => response.json()));

    useEffect(() => {
        Promise.all(promises)
            .then(json => setData(json))
            .catch(error => console.log(` ${error}`))
            .finally(final => console.log(` ${final}`))
    }, []);


    return (
        <>
            {
                data && (
                    <>
                        <h1>{data[0].title}</h1>
                        <h1>{data[1].title}</h1>
                        <h1>{data[2].title}</h1>
                    </>
                )
            }

        </>
    )
};
