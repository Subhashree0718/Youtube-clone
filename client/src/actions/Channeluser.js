import * as api from '../api';

// Action to update channel data
export const updateChannelData = (id, updateData) => async (dispatch) => {
    try {
        const { data } = await api.updateChanelData(id, updateData); // Corrected function name
        dispatch({ type: 'UPDATE_DATA', payload: data });
    } catch (error) {
        console.error(error);
    }
};

