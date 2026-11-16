
import { useQuery } from "@tanstack/react-query";
import { getThreads } from "../services/threads.service";

export default function ThreadList() {

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["threads"],
    queryFn: getThreads,
  });

  // Loading state
  if (isPending) {
    return <p>Loading threads...</p>;
  }

  // Error state
  if (isError) {
    return <p className="err">Error: {error.message}</p>;
  }

  // Success state
  return (
    <ul className="threads">
      {data.map((t) => (
        <li className="card" key={t.id}>
          <h3>{t.title}</h3>
          <p>{t.body}</p>
        </li>
      ))}
    </ul>
  );
}
