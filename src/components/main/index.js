import { useEffect, useState } from "react";

import * as S from './style.js'

export default function Main() {

    const [data, setData] = useState(null);

    const BASE_URL = 'https://api.themoviedb.org/3/movie/';
    const API_KEY = 'de3613e5e17f32d97ff99513ddc6b056';
    const LANGUAGE = 'language=PT-BR';
    const BASE_IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';
    // const min = 555;
    // const max = 70000;
    // const ID_MOVIE = Math.floor(max * Math.random() + min * 2 + max * Math.random() + min);

    const endPoints = [
        `${BASE_URL}15?api_key=${API_KEY}&${LANGUAGE}`,
        `${BASE_URL}25?api_key=${API_KEY}&${LANGUAGE}`,
        `${BASE_URL}35?api_key=${API_KEY}&${LANGUAGE}`
    ];

    const promises = endPoints.map(url => fetch(url).then(response => response.json()));

    useEffect(() => {
        Promise.all(promises)
            .then(json => setData(json))
            // .then(json => console.log(json))

            .catch(error => console.log(` ${error}`))
    }, []);

    // console.log(data[0].poster_path)

    return (
        <>
            <S.Main>
                <S.Content>
                    <S.DescribeMovie>
                        <div>
                            <S.H1>
                                Stranger Things
                            </S.H1>
                            <S.P>
                                Um grupo de amigos se envolve em uma série de eventos sobrenaturais na pacata cidade de Hawkins. Eles enfrentam criaturas monstruosas, agências secretas do governo e se aventuram em dimensões paralelas.

                            </S.P>
                        </div>
                        <S.BannerImage src="./assets/images/tela1.jpg" alt="Banner" />

                    </S.DescribeMovie>

                </S.Content>

                <S.ContentMovies>

                    <S.CardMovies>
                        <S.Card>
                            {
                                data && (
                                    <>
                                        {/* <h1>{data[1].title}</h1> */}
                                        {/* <h1>{data[1].overview}</h1> */}
                                        <S.ImageCardMovie src={`${BASE_IMAGE_PATH}${data[0].backdrop_path}`} alt="image card" width={200} height={200} />
                                        <S.ImageCardMovie src={`${BASE_IMAGE_PATH}${data[0].backdrop_path}`} alt="image card" width={200} height={200} />
                                        <S.ImageCardMovie src={`${BASE_IMAGE_PATH}${data[0].backdrop_path}`} alt="image card" width={200} height={200} />
                                        <S.ImageCardMovie src={`${BASE_IMAGE_PATH}${data[0].backdrop_path}`} alt="image card" width={200} height={200} />
                                        <S.ImageCardMovie src={`${BASE_IMAGE_PATH}${data[0].backdrop_path}`} alt="image card" width={200} height={200} />
                                        <S.ImageCardMovie src={`${BASE_IMAGE_PATH}${data[0].backdrop_path}`} alt="image card" width={200} height={200} />
                                        <S.ImageCardMovie src={`${BASE_IMAGE_PATH}${data[0].backdrop_path}`} alt="image card" width={200} height={200} />
                                        <S.ImageCardMovie src={`${BASE_IMAGE_PATH}${data[0].backdrop_path}`} alt="image card" width={200} height={200} />
                                        <S.ImageCardMovie src={`${BASE_IMAGE_PATH}${data[0].backdrop_path}`} alt="image card" width={200} height={200} />
                                        <S.ImageCardMovie src={`${BASE_IMAGE_PATH}${data[0].backdrop_path}`} alt="image card" width={200} height={200} />
                                        <S.ImageCardMovie src={`${BASE_IMAGE_PATH}${data[0].backdrop_path}`} alt="image card" width={200} height={200} />
                                        <S.ImageCardMovie src={`${BASE_IMAGE_PATH}${data[0].backdrop_path}`} alt="image card" width={200} height={200} />
                                        <S.ImageCardMovie src={`${BASE_IMAGE_PATH}${data[0].backdrop_path}`} alt="image card" width={200} height={200} />
                                    </>
                                )
                            }
                        </S.Card>
                    </S.CardMovies>


                </S.ContentMovies>

            </S.Main>

        </>
    )
};
