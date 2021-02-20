import { Action } from "../actions";
import { ActionType } from "../actions-types";

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (
    state: RepositoriesState = initialState,
    action: Action) => {
    switch (action.type) {
        case ActionType.SEARCH_RESPOSITORIES:
            return { loading: true, error: null, data: [] };
        case ActionType.SEARCH_RESPOSITORIES_SUCCESS:
            return { loading: false, error: action.payload, data: action.payload };
        case ActionType.SEARCH_RESPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
}

export default reducer;