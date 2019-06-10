import React, { Fragment } from "react";
import { View, Text } from "react-native";
import CustomCheckBox from "./CustomCheckBox";
import ExtrainfoStyle from "../../styles/Extrainfo.style";

export default props => (
  <Fragment>
    <Text style={ExtrainfoStyle.furnishingLabel}>Furnishing</Text>

    <View style={ExtrainfoStyle.furnishingView}>
      <View style={ExtrainfoStyle.furnishingViewList}>
        <View style={ExtrainfoStyle.furnishingViewTab}>
          <Text style={ExtrainfoStyle.furnishingViewTabLabel}>Curtain</Text>
          <CustomCheckBox
            state={props.state.furnishing}
            keyValue={"curtain"}
            formState={"furnishing"}
            _toggleCheckBox={props._toggleCheckBox}
          />
        </View>
        <View style={ExtrainfoStyle.furnishingViewTab}>
          <Text style={ExtrainfoStyle.furnishingViewTabLabel}>Mattress</Text>

          <CustomCheckBox
            state={props.state.furnishing}
            keyValue={"mattress"}
            formState={"furnishing"}
            _toggleCheckBox={props._toggleCheckBox}
          />
        </View>
      </View>
      <View style={ExtrainfoStyle.furnishingViewList}>
        <View style={ExtrainfoStyle.furnishingViewTab}>
          <Text style={ExtrainfoStyle.furnishingViewTabLabel}>A/C</Text>
          <CustomCheckBox
            state={props.state.furnishing}
            keyValue={"ac"}
            formState={"furnishing"}
            _toggleCheckBox={props._toggleCheckBox}
          />
        </View>
        <View style={ExtrainfoStyle.furnishingViewTab}>
          <Text style={ExtrainfoStyle.furnishingViewTabLabel}>Hood & hub</Text>
          <CustomCheckBox
            state={props.state.furnishing}
            keyValue={"hood_hub"}
            formState={"furnishing"}
            _toggleCheckBox={props._toggleCheckBox}
          />
        </View>
      </View>
      <View style={ExtrainfoStyle.furnishingViewList}>
        <View style={ExtrainfoStyle.furnishingViewTab}>
          <Text style={ExtrainfoStyle.furnishingViewTabLabel}>
            Water heater
          </Text>

          <CustomCheckBox
            state={props.state.furnishing}
            keyValue={"water_heater"}
            formState={"furnishing"}
            _toggleCheckBox={props._toggleCheckBox}
          />
        </View>
        <View style={ExtrainfoStyle.furnishingViewTab}>
          <Text style={ExtrainfoStyle.furnishingViewTabLabel}>
            Dining table
          </Text>
          <CustomCheckBox
            state={props.state.furnishing}
            keyValue={"dining_table"}
            formState={"furnishing"}
            _toggleCheckBox={props._toggleCheckBox}
          />
        </View>
      </View>
      <View style={ExtrainfoStyle.furnishingViewList}>
        <View style={ExtrainfoStyle.furnishingViewTab}>
          <Text style={ExtrainfoStyle.furnishingViewTabLabel}>Wardrobe</Text>
          <CustomCheckBox
            state={props.state.furnishing}
            keyValue={"wardrobe"}
            formState={"furnishing"}
            _toggleCheckBox={props._toggleCheckBox}
          />
        </View>
        <View style={ExtrainfoStyle.furnishingViewTab}>
          <Text style={ExtrainfoStyle.furnishingViewTabLabel}>
            Kitchen cabinet
          </Text>
          <CustomCheckBox
            state={props.state.furnishing}
            keyValue={"kitchen_cabinet"}
            formState={"furnishing"}
            _toggleCheckBox={props._toggleCheckBox}
          />
        </View>
      </View>
      <View style={ExtrainfoStyle.furnishingViewList}>
        <View style={ExtrainfoStyle.furnishingViewTab}>
          <Text style={ExtrainfoStyle.furnishingViewTabLabel}>
            Refrigerator
          </Text>
          <CustomCheckBox
            state={props.state.furnishing}
            keyValue={"refrigerator"}
            formState={"furnishing"}
            _toggleCheckBox={props._toggleCheckBox}
          />
        </View>
        <View style={ExtrainfoStyle.furnishingViewTab}>
          <Text style={ExtrainfoStyle.furnishingViewTabLabel}>Sofa</Text>
          <CustomCheckBox
            state={props.state.furnishing}
            keyValue={"sofa"}
            formState={"furnishing"}
            _toggleCheckBox={props._toggleCheckBox}
          />
        </View>
      </View>
      <View style={ExtrainfoStyle.furnishingViewList}>
        <View style={ExtrainfoStyle.furnishingViewTab}>
          <Text style={ExtrainfoStyle.furnishingViewTabLabel}>Oven</Text>
          <CustomCheckBox
            state={props.state.furnishing}
            keyValue={"oven"}
            formState={"furnishing"}
            _toggleCheckBox={props._toggleCheckBox}
          />
        </View>
        <View style={ExtrainfoStyle.furnishingViewTab}>
          <Text style={ExtrainfoStyle.furnishingViewTabLabel}>Microwave</Text>
          <CustomCheckBox
            state={props.state.furnishing}
            keyValue={"microwave"}
            formState={"furnishing"}
            _toggleCheckBox={props._toggleCheckBox}
          />
        </View>
      </View>
      <View style={ExtrainfoStyle.furnishingViewList}>
        <View style={ExtrainfoStyle.furnishingViewTab}>
          <Text style={ExtrainfoStyle.furnishingViewTabLabel}>TV</Text>
          <CustomCheckBox
            state={props.state.furnishing}
            keyValue={"tv"}
            formState={"furnishing"}
            _toggleCheckBox={props._toggleCheckBox}
          />
        </View>
        <View style={ExtrainfoStyle.furnishingViewTab}>
          <Text style={ExtrainfoStyle.furnishingViewTabLabel}>Bed frame</Text>
          <CustomCheckBox
            state={props.state.furnishing}
            keyValue={"bed_frame"}
            formState={"furnishing"}
            _toggleCheckBox={props._toggleCheckBox}
          />
        </View>
      </View>
      <View style={ExtrainfoStyle.furnishingViewList}>
        <View style={ExtrainfoStyle.furnishingViewTab}>
          <Text style={ExtrainfoStyle.furnishingViewTabLabel}>Internet</Text>
          <CustomCheckBox
            state={props.state.furnishing}
            keyValue={"internet"}
            formState={"furnishing"}
            _toggleCheckBox={props._toggleCheckBox}
          />
        </View>
      </View>
    </View>
  </Fragment>
);
