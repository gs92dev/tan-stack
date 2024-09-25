import { createFileRoute } from "@tanstack/react-router";
import { Gui } from "../Gui";

export const Route = createFileRoute("/gui")({
  component: () => <Gui />,
});
