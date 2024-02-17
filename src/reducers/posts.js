import { FETCH_ALL, UPDATE_POST, DELETE_POST, CREATE_POST, FETCH_FILTERED, FETCH_POST } from '../constants/actionTypes';
export default (state = { isLoading: false, posts: [] }, action) => {
    switch (action.type) {
        case FETCH_POST:
            return { ...state, post: action.payload.post };
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_FILTERED:
            return { ...state, posts: action.payload.data };
        case CREATE_POST:
            return { ...state, posts: [...state.posts, action.payload] };
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)),
            };
        case DELETE_POST:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        default:
            return state;
    }
};
