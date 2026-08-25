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
    <div>
      {data.map((thread) => (
        <div key={thread.id}>
          <h2>{thread.title}</h2>
          <p>{thread.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ThreadList;