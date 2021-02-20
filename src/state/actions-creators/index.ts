import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_RESPOSITORIES
        })

        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            });

            const names = data.objects.map((result: any) => {
                return result.package.name;
            })

            dispatch({
                type: ActionType.SEARCH_RESPOSITORIES_SUCCESS,
                payload: names
            });

        } catch (error) {
            dispatch({
                type: ActionType.SEARCH_RESPOSITORIES_ERROR,
                payload: error.message
            })
        }
    };
}