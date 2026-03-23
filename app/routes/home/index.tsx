import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dev" },
    { name: "description", content: "cust" },
  ];
}

export default function Home() {
  return <section>

  Home page
  </section>
}
