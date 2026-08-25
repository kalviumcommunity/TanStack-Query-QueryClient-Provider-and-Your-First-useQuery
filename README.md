# Threadbase — TanStack Query Starter

A React (Vite) + Express scaffold. The Express API and the Axios service layer are
**done**. Your job is to replace the hand-rolled `useState`/`useEffect` fetching in
`ThreadList.jsx` with **TanStack Query**.

## Run it

```bash
npm run setup     # installs root + server + client deps
cp client/.env.development.example client/.env.development
npm run dev       # Express on :3001, Vite on :5173
```

Open http://localhost:5173 — you'll see the thread list (fetched the old way).

## Your task

1. **`client/src/main.jsx`** — create a `QueryClient` and wrap `<App />` in
   `<QueryClientProvider>`. Add `<ReactQueryDevtools />` so you can screenshot the cache.
2. **`client/src/components/ThreadList.jsx`** — replace `useState`/`useEffect` with
   `useQuery({ queryKey: ["threads"], queryFn: getThreads })` and render the
   loading / error / data states. No `useState` or `useEffect` for fetching.

## What you should NOT touch

- `server/` — the API is complete.
- `client/src/services/` — `apiClient.js` and `threads.service.js` are wired.

## Verify

- DevTools → **Network** → one `threads` request per load.
- ReactQueryDevtools panel shows a `['threads']` entry in the cache after first load.
- <img width="1917" height="1077" alt="image" src="https://github.com/user-attachments/assets/02519730-575c-48b8-aaac-4eac26aeeb53" />

