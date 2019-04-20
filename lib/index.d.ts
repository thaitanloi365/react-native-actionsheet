declare module "react-native-actionsheet" {
  import { Component } from "react";

  interface Props {
    options: (string | React.ReactNode)[];
    onPress: (index: number) => void;
    title?: React.ReactNode;
    message?: string;
    tintColor?: string;
    cancelButtonIndex?: number;
    destructiveButtonIndex?: number;
    styles?: object;
  }

  class ActionSheet extends Component<Props> {
    public show: () => void;
  }

  export default ActionSheet;
}
