import { useQuery } from "@tanstack/react-query";

export function Gui() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["todo"], // Change "todo" if your API endpoint expects a different key
    queryFn: () =>
      fetch("https://catfact.ninja/fact").then((res) => res.json()),
  });

  if (error) {
    console.error(error);
    return <p>Something went wrong</p>;
  }

  return (
    <div className="p-20">
      {isLoading ? (
        <p>Loading cat fact...</p>
      ) : (
        <div key={data.fact}>
          {/* Use data.fact as a unique key */}
          <h1>{data.fact}</h1>
          <h1>{data.length}</h1> {/* Check if data has a length property */}
        </div>
      )}
    </div>
  );
}
