import ComingSoon from "./ComingSoon";
import { Route } from "react-router-dom";
import React,{lazy} from "react";

export const hookmap = {
  usestate: () => lazy(() => import('./useStateEx')),//<ComingSoon name="useState" />,
  useeffect: () => lazy(() => import('./useEffectEx')),//<ComingSoon name="useState" />,
  usecontext: () => lazy(() => import('./useContextEx')),//<ComingSoon name="useState" />,
  usereducer: () => <ComingSoon name="useReducer" />,
  useref: () => <ComingSoon name="useRef" />,
  usememo: () => <ComingSoon name="useMemo" />,
  usecallback: () => <ComingSoon name="useCallback" />
};

export function generateRoutes() {
  return Object.entries(hookmap).map(([path, getComponent]) => {
    const Component = getComponent();
    return <Route key={path} path={`/${path}`} element={<Component />} />;
  });
}
