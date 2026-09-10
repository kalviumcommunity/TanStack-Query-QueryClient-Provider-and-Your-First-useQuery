import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

import { getThreads } from "../services/threads.service";
import { useDebounce } from "../hooks/useDebounce";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";

export default function ThreadList() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  const debouncedSearch = useDebounce(search, 300);

  const { data = [], isPending, isFetching, isError, error } = useQuery({
    queryKey: ["threads", { search: debouncedSearch, sort }],
    queryFn: ({ queryKey: [, filters] }) => getThreads(filters),
    placeholderData: keepPreviousData,
  });

  return (
    <>
      <SearchBar value={search} onChange={setSearch} />
      <SortDropdown value={sort} onChange={setSort} />

      {isPending && <p>Loading threads...</p>}

      {isError && (
        <p className="err">
          Error: {error instanceof Error ? error.message : "Unable to load threads."}
        </p>
      )}

      {!isPending && !isError && (
        data.length > 0 ? (
          <>
            {isFetching && <p className="muted">Updating threads...</p>}
            <ul className="threads">
              {data.map((thread) => (
                <li className="card" key={thread.id}>
                  <h3>{thread.title}</h3>
                  <p>{thread.body}</p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="muted">No threads found.</p>
        )
      )}
    </>
  );
}