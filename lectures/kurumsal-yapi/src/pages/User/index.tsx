import { lazy } from "react";

const UserModule = lazy(() => import("./Views/UserRoutes"));

export default UserModule;