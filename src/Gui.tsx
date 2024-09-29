import { useQuery } from "@tanstack/react-query";

export function Gui() {
  const { isLoading, data, error, status } = useQuery({
    queryKey: ["todo"], // Change "todo" if your API endpoint expects a different key
    queryFn: () =>
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => data),
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
          <img src={data.message} alt="A random cat" />
          <p>{data.status}</p>
        </div>
      )}
    </div>
  );
}
