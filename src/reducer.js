export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    discover_weekly: null
    // token: "BQBnrn7NyvJ9ZZY2pjrmNOE55tzgScqqM24LEE1vf71Gs0PBX4m8JvtVepZvkh-i45Bm9k0SkFYW3pLFT1WlUOUv3rx3qjDPU_e0yDo8coJNNFPwWNMl5uuBl65k94Zz6kL8XnUUcUw5erTAHniqp8yvs7o4R5JNoJCRBRmh3jsgqdFB0hQfCRydkQKcg3FyL0-7zka-ENJbdgpG6WgGTPR08ECT0mLzXAgdkYwOnzpmymqQjAlbgh8uaowGeDnfWzAquBxfGMrXKtYarQudWEA"
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }

        default:
            return state;
    }
}

export default reducer;