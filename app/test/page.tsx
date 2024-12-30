"use client";

import { useEffect, useState } from "react";

export default function TestPage() {
  const [note, setNote] = useState<string>("");

  useEffect(() => {
    const savedNote = localStorage.getItem("note"); // Retrieve the note from local storage
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  return (
    <div className="p-6">
      <h1>Test Page</h1>
      <p>Note: {note}</p>
    </div>
  );
}
