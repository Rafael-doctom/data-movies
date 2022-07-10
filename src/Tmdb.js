const API_KEY= '540b890d592935324106c0701f73aaf2';
const APY_BASE = 'https://api.themoviedb.org/3'

const basicFetch= async(endpoint)=>{
    // se der erro provavemnte será por causas das aspas('')
    const req = await fetch('${APY_BASE}${endpoint}')
}


// minuto 29:00

export default {
    getHomeList: async()=>{
        return[
            {
                slug: 'originals',
                title:'Originais do Netflix',
                items:[],
            },
            {
                slug:'trending',
                title: 'Recomendados para Você',
                items: []
            },
            {
                slug: 'toprated',
                title: 'em Alta',
                items: []
            },

            {
                slug: 'action',
                title: 'Ação',
                items: []
            },

            {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            },

            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: []
            }
        ]
    }
}