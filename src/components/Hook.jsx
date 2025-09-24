import ComingSoon from "./ComingSoon";
import { Route } from "react-router-dom";
import React, { lazy } from "react";


const LazyComingSoon = (name) =>
  lazy(() => Promise.resolve({ default: () => <ComingSoon name={name} /> }));

export const hookmap = {
  usestate: () => lazy(() => import('./useStateEx')),//<ComingSoon name="useState" />,
  useeffect: () => lazy(() => import('./useEffectEx')),//<ComingSoon name="useState" />,
  usecontext: () => lazy(() => import('./useContextEx')),//<ComingSoon name="useState" />,
  usereducer: () => LazyComingSoon("useReducer"),
  useref: () => LazyComingSoon("useRef"),
  usememo: () => LazyComingSoon("useMemo"),
  usecallback: () => LazyComingSoon("useCallback")
};

export function generateRoutes() {
  return Object.entries(hookmap).map(([path, getComponent]) => {
    const Component = getComponent();
    return <Route key={path} path={`/${path}`} element={<Component />} />;
  });
}
