
export default {
    state: {
        books:[
            {
                id: 'asjdflkjasdf',
                title: 'Harry Potter 1',
                description: 'Первая глава первой книги о Гарри Поттере',
                imageId: ';alkdsjf;alkjnjvdvn',
                parts: 7,
                level: ['B2', 'C1'],
                rating: 4,
                ratingsCount: 100,
                youtube_playlist_id: 'aksf;lkajsdf;lkj'
            },
            {
                id: 'asjdflkjasdfadsf',
                title: 'Harry Potter 2',
                description: 'Вторая глава первой книги о Гарри Поттере',
                imageId: ';alkdsxcvcbjnjvdvn',
                parts: 7,
                level: ['B2', 'C4'],
                rating: 3.5,
                ratingsCount: 55,
                youtube_playlist_id: 'aksf;lkajlkyuliyj'
            },
            {
                id: 'asjdfladsfadsfzvxcsdf',
                title: 'Harry Potter 3',
                description: 'Третья глава первой книги о Гарри Поттере',
                imageId: ';alkdsjfqewrqrjnjvdvn',
                parts: 7,
                level: ['B23', 'C2'],
                rating: 2,
                ratingsCount: 80,
                youtube_playlist_id: 'aksf;lkasdfasdfvzxlkj'
            }
        ]
    },
    mutations: {
        SET_BOOKS(state, payload) {
            state.books = payload
        }
    },
    getters: {
        getBooks: (state) => state.books
    }
}
