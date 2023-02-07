const Web = [

    //Authentication Routes
    {
        path: '/login'
    },{
        path: '/sign-up'
    },{
        path: '/me'
    },

    //Home Routes
    {
        path: '/',
    },

    // chatting routes
    {
        path: '/friend/:id(\\d+)/chat'
    },

    //find in chat
    {
        path: '/friend/:id(\\d+)//message'
    },

    //profile routes
    {
        path: '/friend/:id(\\d+)/profile'
    },

    //find friends
    {
        path: '/friends/search'
    },

];
export default Web;
