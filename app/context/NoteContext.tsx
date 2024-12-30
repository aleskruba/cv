"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context
interface NoteContextType {
  note: string;
  setNote: (value: string) => void;
}

// Create the context
const NoteContext = createContext<NoteContextType | undefined>(undefined);

// Create a provider component
export const NoteProvider = ({ children }: { children: ReactNode }) => {
  const [note, setNote] = useState<string>("");

  return (
    <NoteContext.Provider value={{ note, setNote }}>
      {children}
    </NoteContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useNote = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNote must be used within a NoteProvider");
  }
  return context;
};
