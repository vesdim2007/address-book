/**
 * Animated Loader element while fetching data
 *
 * @type {import('react').FunctionComponentElement<{}>}
 */

/**
 * Returns Image Spinner Element
 *
 * @returns {JSX.Element}
 */

import React from "react";
import Spinner from "../../assets/spinner1.gif";

const Loader = () => {
  return <img src={Spinner} alt="spinner" width={100} height={100} />;
};

export default Loader;
