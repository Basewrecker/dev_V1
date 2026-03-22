import type { Route } from "./+types/index";
import {useEffect} from "react";
import Hero from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dev" },
    { name: "description", content: "cust" },
  ];
}

export default function Home() {
  return <section>

  <Hero />
  </section>
}
