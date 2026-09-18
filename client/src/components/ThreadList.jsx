import { useQuery } from "@tanstack/react-query";
import { getThreads } from "../services/threads.service";

function ThreadList() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["threads"],
    queryFn: getThreads,
  });

  if (isPending) {
    return <p>Loading threads...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
      {data.map((thread) => (
        <li key={thread.id}>{thread.title}</li>
      ))}
    </ul>
  );
}

export default ThreadList;
