"use client";
export default function GlobalError({ error }) {
  return <html><body>Error: {error.message}</body></html>;
}