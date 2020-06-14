/**
 * Dynamic Import of Settings Page
 *
 * @type {import('react').FunctionComponentElement<{}>}
 */

/**
 * Returns Settings Page
 *
 * @returns {JSX.Element}
 */

import React, { lazy, Suspense } from "react";

/**
 * Lazy Loading of Settings Page
 *
 * @type {import('../Settings')}
 */
const SettingsComponent = lazy(() => import("../Settings"));

const DynamicImport = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SettingsComponent />
      </Suspense>
    </>
  );
};

export default DynamicImport;
