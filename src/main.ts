import { createApp, html, render, router } from "iares";
import PageLayout from './Layouts/Page';
import { SHome } from "@/components/Screens";

export const appHost = createApp({
  onMount(context, props) {
    PageLayout(SHome, { title: 'Outro' })
  },
});

// if (environment === "development") {
//   new EventSource("esbuild").addEventListener("change", () => {
//     window.location.reload();
//   });
// }


 