export const UPDATE_SUBSTITUTE_LAYER_POPUP_STATE = 'UPDATE_SUBSTITUTE_LAYER_POPUP_STATE';
export const UPDATE_ROCKET_THRESHOLD_LAYER_POPUP_STATE = 'UPDATE_ROCKET_THRESHOLD_LAYER_POPUP_STATE';
export const UPDATE_SUBSTITUTE_TOAST_POPUP_STATE = 'UPDATE_SUBSTITUTE_TOAST_POPUP_STATE';


export function updateSubstituteLayerPopupState(data: boolean) {
  return {
    type: UPDATE_SUBSTITUTE_LAYER_POPUP_STATE,
    payload: {
      data
    }
  };
}

export function updateRocketThresholdLayerPopupState(data: boolean) {
  return {
    type: UPDATE_ROCKET_THRESHOLD_LAYER_POPUP_STATE,
    payload: {
      data
    }
  };
}

export function updateSubstituteToastPopupState(data: boolean) {
  return {
    type: UPDATE_SUBSTITUTE_TOAST_POPUP_STATE,
    payload: {
      data
    }
  };
}