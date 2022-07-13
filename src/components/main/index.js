import { useEffect, useState } from "react";

import * as S from './style.js';

export default function Main() {

    const [data, setData] = useState([]);

    const BASE_URL = 'https://api.themoviedb.org/3/movie/';
    const API_KEY = 'de3613e5e17f32d97ff99513ddc6b056';
    const LANGUAGE = 'language=PT-BR';
    const BASE_IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

    const getMoviesPop = async () => {
        const response = await fetch(`${BASE_URL}top_rated?api_key=${API_KEY}&${LANGUAGE}&page=1`);
        const dados = await response.json();
        setData(dados.results);
    };


    useEffect(() => {
        getMoviesPop()
    }, []);


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
                            {data.length > 0 &&
                                data.map(item => {
                                    return (
                                        <>
                                            <S.DivCard>
                                                <S.ImageCardMovie src={`${BASE_IMAGE_PATH}${item.backdrop_path}`} alt="image card" width={200} height={200} />
                                                <S.Button>
                                                    {item.original_title}
                                                </S.Button>
                                            </S.DivCard>
                                        </>
                                    )
                                })
                            }
                        </S.Card>
                        <S.List>
                            <S.Li>
                                1
                            </S.Li>
                            <S.Li>
                                2
                            </S.Li>
                            <S.Li>
                                3
                            </S.Li>
                            <S.Li>
                                4
                            </S.Li>
                            <S.Li>
                                >>
                            </S.Li>
                        </S.List>
                    </S.CardMovies>

                </S.ContentMovies>

            </S.Main>

        </>
    )
};
