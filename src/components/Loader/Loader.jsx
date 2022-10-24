import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import { Ring } from '@uiball/loaders'



function Loader() {
  return (
    <FlexWrapper>
      <Ring 
        size={40}
        lineWeight={5}
        speed={2} 
        color="black" 
    />
    </FlexWrapper>
  );
}

export default Loader;