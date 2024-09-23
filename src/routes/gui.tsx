import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gui")({
  component: () => <div className="text-red-500">Hello /gui!</div>,
});
