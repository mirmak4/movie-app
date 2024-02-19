import { RemixBrowser } from "@remix-run/react";
import { startTransition } from "react";
import { hydrateRoot } from "react-dom/client";

async function enableApiMocking() {
  // prevent api mocking in production
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { worker } = await import("./mocks/browser");
  // register service worker
  await worker.start();
}

enableApiMocking().then(() => {
  // make sure to render application, after msw is ready to handle requests
  startTransition(() => {
    hydrateRoot(document, <RemixBrowser />);
  });
});
