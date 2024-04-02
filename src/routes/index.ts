import { html, render } from "iares";
import { TRoute } from "iares";

import { SDefault, SHome } from "@/components/Screens";

export const routes: TRoute[] = [
  {
    regex: /^\/404$/,
    default: "#/404",
    mount: ({ context }) => {
      render(html`<${SDefault} />`, context);
    },
  },
  {
    regex: /^#\/$|^#\/home$/,
    start: "#/",
    mount: ({ context }) => {
      render(html`<${SHome} />`, context);
    },
  },
];
