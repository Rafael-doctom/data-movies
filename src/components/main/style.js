import styled from "styled-components";

export const Main = styled.main`
    height:100vh;
    width:100%;
    color:white;
    margin-left:10rem;
`;

export const Content = styled.div`

`;

export const DescribeMovie = styled.div`
    display:flex;
    justify-content:space-between;
    width:85vw;
    margin:1rem 2rem;
    align-items:center;
`;

export const H1 = styled.h1`
    color:white;
    font-size:1.35rem;
`;

export const P = styled.p`
font-size:1rem;
    display:block;
    width:25vw;
`;

export const  BannerImage = styled.img`

`;

// movies
export const ContentMovies = styled.div`
    margin:0 2rem;
    width:85vw;
`

export const CardMovies = styled.div`
    display:flex;
    flex-wrap:wrap;
`

export const Card = styled.div`
    height:100%;
    display:flex;
    flex-wrap:wrap;
`

export const DivCard = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 0.55rem;
`;

export const ImageCardMovie = styled.img`
    height:32vh;
    width:20vw;
    margin:1rem 0;
`;

export const Button = styled.button`
    height:5vh;
    width:20vw;
    background:#8257E6;
    color:white;
    text-align:center;
    border:0;
    border-radius:5px;
    cursor:pointer;
    outline:none;
    font-size:1.12rem;
    
    &:hover{
        background:#536b95;
    }
`;