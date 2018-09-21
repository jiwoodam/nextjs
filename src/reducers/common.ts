import { fromJS } from "immutable";
import ICommon from "../interface/ICommon";
import { UPDATE_ROCKET_THRESHOLD_LAYER_POPUP_STATE, UPDATE_SUBSTITUTE_LAYER_POPUP_STATE, UPDATE_SUBSTITUTE_TOAST_POPUP_STATE } from "../action/common";
import { IImmutablePreset } from "../interface/IImmutable";

const initialContext = fromJS({
  isActiveRocketThresholdLayerPopup: false,
  isActiveSubstituteLayerPopup: false,
  isActiveSubstituteToastPopup: false,
});

export default function reducer(state: IImmutablePreset<ICommon> = initialContext, { type, payload }) {
  switch (type) {
    case UPDATE_SUBSTITUTE_LAYER_POPUP_STATE:
      return state.merge({ isActiveSubstituteLayerPopup: payload.data });
    case UPDATE_ROCKET_THRESHOLD_LAYER_POPUP_STATE:
      return state.merge({ isActiveRocketThresholdLayerPopup: payload.data });
    case UPDATE_SUBSTITUTE_TOAST_POPUP_STATE:
      return state.merge({ isActiveSubstituteToastPopup: payload.data });
    default:
      return state;
  }
}
