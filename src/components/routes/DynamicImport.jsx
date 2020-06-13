import React, { lazy, Suspense } from "react";

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
