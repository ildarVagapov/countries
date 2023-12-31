const SET_SEARCH = 'SET_SEARCH'
const SET_REGION = 'SET_REGION'
const CLEAR_CONTROLE = 'CLEAR_CONTROLE'

const initialState = {
	search: '',
	region: ''
}

export const controlsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH: {
			return {
				...state,
				search: action.payload
			}
		}
		case SET_REGION: {
			return {
				...state,
				region: action.payload
			}
		}
		case CLEAR_CONTROLE: {
			return initialState
		}
		default: {
			return state
		}
	}
}

export const clearControle = () => ({ type: CLEAR_CONTROLE })
export const setRegionAC = (region) => ({ type: SET_REGION, payload: region })
export const setSearchAC = (search) => ({ type: SET_SEARCH, payload: search })