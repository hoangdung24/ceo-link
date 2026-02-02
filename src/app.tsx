import "./app.css";
import "@fontsource/mulish";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/500-italic.css";
import "@fontsource/mulish/700.css";
import "@fontsource/mulish/700-italic.css";

import { Suspense } from "solid-js";
import { FileRoutes } from "@solidjs/start/router";
import { Router, RouteSectionProps } from "@solidjs/router";

import Header from "~/components/Header";
import Footer from "~/components/Footer";
import MetaProvider from "~/providers/MetaProvider";

export default function App() {
  return (
    <Router root={RootComponent}>
      <FileRoutes />
    </Router>
  );
}

const RootComponent = (props: RouteSectionProps<unknown>) => {
  return (
    <MetaProvider>
      <div class="flex min-h-[100vh] flex-col">
        <Header />
        <div class="flex-grow">
          <Suspense>{props.children}</Suspense>
        </div>
        <Footer />
      </div>
    </MetaProvider>
  );
};
