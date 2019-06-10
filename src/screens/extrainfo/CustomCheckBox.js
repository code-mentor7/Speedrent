import React from "react";
import { CheckBox } from "native-base";
import ExtrainfoStyle from "../../styles/Extrainfo.style";

export default props => (
  <CheckBox
    checked={props.state[props.keyValue]}
    style={
      props.state[props.keyValue]
        ? ExtrainfoStyle.checkboxSelected
        : ExtrainfoStyle.checkboxUnSelected
    }
    onPress={props._toggleCheckBox(
      props.keyValue,
      !props.state[props.keyValue],
      props.formState
    )}
  />
);
