import Vue from 'vue'

export default {
    state: {
        books:[],
           /* {
                id: 'asjdflkjasdf',
                title: 'Harry Potter 1',
                description: 'Первая глава первой книги о Гарри Поттере',
                imageId: ';alkdsjf;alkjnjvdvn',
                level: ['B2', 'C1'],
                rating: 4,
                ratingsCount: 100,
                youtube_playlist_id: 'aksf;lkajsdf;lkj',
                parts: [
                    {
                        id: 'fa;djf;a;lkjvxcv',
                        title: 'Kapitel 1',
                        youtube_id: 'asdflknv;lkncxzv'
                    },
                    {
                        id: 'fa;djf;a,bn,vxcv',
                        title: 'Kapitel 2',
                        youtube_id: 'asdsdfgbcv;lkncxzv'
                    },
                    {
                        id: 'fa;djdhgjfhjjvxcv',
                        title: 'Kapitel 3',
                        youtube_id: 'asddfgsgfgncxzv'
                    },
                    {
                        id: 'fa;dxcvxcvxcv',
                        title: 'Kapitel 4',
                        youtube_id: 'asdflaqwvckncxzv'
                    }
                ]
            },
            {
                id: 'asjdflkjasdfadsf',
                title: 'Harry Potter 2',
                description: 'Вторая глава первой книги о Гарри Поттере',
                imageId: ';alkdsxcvcbjnjvdvn',
                level: ['B2', 'C2'],
                rating: 3.5,
                ratingsCount: 55,
                youtube_playlist_id: 'aksf;lkajlkyuliyj',
                parts: [
                    {
                        id: 'fa;djf;a;lkjvxcv',
                        title: 'Kapitel 1',
                        youtube_id: 'asdflknv;lkncxzv'
                    },
                    {
                        id: 'fa;djf;a,bn,vxcv',
                        title: 'Kapitel 2',
                        youtube_id: 'asdsdfgbcv;lkncxzv'
                    },
                    {
                        id: 'fa;djdhgjfhjjvxcv',
                        title: 'Kapitel 3',
                        youtube_id: 'asddfgsgfgncxzv'
                    },
                    {
                        id: 'fa;dxcvxcvxcv',
                        title: 'Kapitel 4',
                        youtube_id: 'asdflaqwvckncxzv'
                    }
                ]
            },
            {
                id: 'asjdfladsfadsfzvxcsdf',
                title: 'Harry Potter 3',
                description: 'Третья глава первой книги о Гарри Поттере',
                imageId: ';alkdsjfqewrqrjnjvdvn',
                level: ['A1', 'C2'],
                rating: 2,
                ratingsCount: 80,
                youtube_playlist_id: 'aksf;lkasdfasdfvzxlkj',
                parts: [
                    {
                        id: 'fa;djf;a;lkjvxcv',
                        title: 'Kapitel 1',
                        youtube_id: 'asdflknv;lkncxzv'
                    },
                    {
                        id: 'fa;djf;a,bn,vxcv',
                        title: 'Kapitel 2',
                        youtube_id: 'asdsdfgbcv;lkncxzv'
                    },
                    {
                        id: 'fa;djdhgjfhjjvxcv',
                        title: 'Kapitel 3',
                        youtube_id: 'asddfgsgfgncxzv'
                    },
                    {
                        id: 'fa;dxcvxcvxcv',
                        title: 'Kapitel 4',
                        youtube_id: 'asdflaqwvckncxzv'
                    }
                ]
            }
        ],*/
 /*       bookParts:[
            {
                bookId: 'asjdflkjasdf',
                bookPartId: 'fa;djf;a;lkjvxcv',
                bookTitle: 'Harry Potter and Stone',
                partTitle: 'Kapitel 1',
                youtube_id: 'LGWLLbalFTM',
                content: [
                    {
                        sentences: [
                            {
                                origText: 'In old old galaxi was very beautiful boy and he loves bla bla bla',
                                transText: 'fsj xclkvj;ja fklj ;fa;fkjdf ;ljdfja jfsd lkajf;lk vcxlkj ;asd'
                            },
                            {
                                origText: 'In old old galaxi was very beautiful boy and he loves bla bla bla',
                                transText: 'fsj xclkvj;ja fklj ;fa;fkjdf ;ljdfja jfsd lkajf;lk vcxlkj ;asd'
                            },
                            {
                                origText: 'In old old galaxi was very beautiful boy and he loves bla bla bla',
                                transText: 'fsj xclkvj;ja fklj ;fa;fkjdf ;ljdfja jfsd lkajf;lk vcxlkj ;asd'
                            }
                        ]
                    },
                    {
                        sentences: [
                            {
                                origText: 'In old old galaxi was very beautiful boy and he loves bla bla bla',
                                transText: 'fsj xclkvj;ja fklj ;fa;fkjdf ;ljdfja jfsd lkajf;lk vcxlkj ;asd'
                            },
                            {
                                origText: 'In old old galaxi was very beautiful boy and he loves bla bla bla',
                                transText: 'fsj xclkvj;ja fklj ;fa;fkjdf ;ljdfja jfsd lkajf;lk vcxlkj ;asd'
                            },
                            {
                                origText: 'In old old galaxi was very beautiful boy and he loves bla bla bla',
                                transText: 'fsj xclkvj;ja fklj ;fa;fkjdf ;ljdfja jfsd lkajf;lk vcxlkj ;asd'
                            }
                        ]
                    }
                ],
                words: [
                    {
                        origWord: 'Hallo',
                        transWord: 'Привет'
                    },
                    {
                        origWord: 'Hallo2',
                        transWord: 'Привет2'
                    },
                    {
                        origWord: 'Hallo3',
                        transWord: 'Привет3'
                    },
                    {
                        origWord: 'Hallo',
                        transWord: 'Привет'
                    },
                    {
                        origWord: 'Hallo2',
                        transWord: 'Привет2'
                    },
                    {
                        origWord: 'Hallo3',
                        transWord: 'Привет3'
                    }
                ]
            }
        ]*/
    },
    mutations: {
        SET_BOOKS(state, payload) {
            state.books = payload
        }
    },
    actions: {
      LOAD_BOOKS({commit}){
        Vue.$db.collection('books')
            .get()
            .then(querySnapshot => {
                let books = []
                querySnapshot.forEach(s => {
                    const data = s.data()
                    let book = {
                        id: s.id,
                        title: data.title,
                        description: data.description,
                        imageUrl: data.imageUrl,
                        level: data.level.slice(),
                        youtube_play_list_id: data.youtube_play_list_id,
                        parts: data.parts
                    }
                    let parts = []
                    if(data.parts){
                        data.parts.forEach(p => {
                            let part = {
                                id: p.id,
                                title: p.title,
                                youtube_id: p.youtube_id
                            }

                            parts.push(part)
                        })
                    }

                    books.parts = parts

                    books.push(book)

                })
                commit('SET_BOOKS',books)
            })
            .catch()
      }
    },
    getters: {
        getBooks: (state) => state.books
    }
}
