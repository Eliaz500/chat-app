import React from "react";
import { Circle } from "better-react-spinkit";
import * as C from "./styles";

const Loading = ({ loading }) => { 
  return loading ? (
    <C.Container>
      <Circle />
    </C.Container>
  ) : null;
};

export default Loading;