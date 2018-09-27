import * as React from "react";
import { connect } from "react-redux";
import { updateSubstituteLayerPopupState } from "../../action/common";
import { Dispatch } from "redux";
import ICommon from "../../interface/ICommon";
import { IImmutablePreset } from "../../interface/IImmutable";
//import "./reset.css";


type typeGeneralFunction = (...args) => void;

interface ITestProps {
  common: IImmutablePreset<ICommon>;
  updateSubstituteLayerPopupState: typeGeneralFunction;
}

class Test extends React.Component<ITestProps, React.ComponentState> {

  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  componentWillMount() {
    //eventInit();
  }

  public componentDidMount(): void {

  }

  public render(): JSX.Element {
    const common = this.props.common.toJS();


    return (
      <div>
          {common.isActiveSubstituteLayerPopup &&
            <div>짠</div>
          }
        hello world
        <button onClick={this.click}>
          버튼임
        </button>
      </div>
    );
  }


  protected click(): void {
      this.props.updateSubstituteLayerPopupState(true);
  }

}

const mapStateToProps = (state: ITestProps): Partial<ITestProps> => {
  return {
    common: state.common
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): Partial<any> => {
  return {
      updateSubstituteLayerPopupState: (isFlag) => dispatch(updateSubstituteLayerPopupState(isFlag))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
