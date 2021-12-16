/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "0px",
  },
  medium: {
    "--height": "12px",
    "--padding": "0px",
  },
  large: {
    "--height": "24px",
    "--padding": "4px",
  },
};

const Wrapper = styled.div`
  width: 100%;
  height: var(--height);
  padding: var(--padding);
  border-radius: 8px;
  background-color: ${COLORS.gray50};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const InnerProgressBar = styled.div`
  height: 100%;
  width: ${(props) => props.value + "%"};
  border-radius: 4px;
  background-color: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Progress Bar"
      style={styles}
    >
      <InnerProgressBar value={value}></InnerProgressBar>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

export default ProgressBar;
