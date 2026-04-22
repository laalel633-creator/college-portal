import { Layout } from "@/components/Layout";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AuthProvider } from "@/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import { Skeleton } from "@/components/ui/skeleton";
// Lazy page imports
import { Suspense, lazy } from "react";

const HomePage = lazy(() =>
  import("@/pages/Home").then((m) => ({ default: m.HomePage })),
);
const CoursesPage = lazy(() =>
  import("@/pages/Courses").then((m) => ({ default: m.CoursesPage })),
);
const StaffPage = lazy(() =>
  import("@/pages/Staff").then((m) => ({ default: m.StaffPage })),
);
const LoginPage = lazy(() =>
  import("@/pages/Login").then((m) => ({ default: m.LoginPage })),
);
const ApplyPage = lazy(() =>
  import("@/pages/Apply").then((m) => ({ default: m.ApplyPage })),
);
const ContactPage = lazy(() =>
  import("@/pages/Contact").then((m) => ({ default: m.ContactPage })),
);
const PortalPage = lazy(() =>
  import("@/pages/Portal").then((m) => ({ default: m.PortalPage })),
);

function PageLoader() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-4">
      <Skeleton className="h-10 w-64" />
      <Skeleton className="h-4 w-96" />
      <Skeleton className="h-4 w-80" />
    </div>
  );
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
});

// Routes
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </Layout>
      </AuthProvider>
    </QueryClientProvider>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses",
  component: CoursesPage,
});
const staffRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/staff",
  component: StaffPage,
});
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});
const applyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/apply",
  component: ApplyPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const PortalGuarded = () => (
  <ProtectedRoute>
    <PortalPage />
  </ProtectedRoute>
);
const portalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portal",
  component: PortalGuarded,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  coursesRoute,
  staffRoute,
  loginRoute,
  applyRoute,
  contactRoute,
  portalRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
