"use client";

import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [note, setNote] = useState<string>("");
  const [allowSubmit,setAllowSubmit] = useState<boolean>(true);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
    setAllowSubmit(false)
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAllowSubmit(true)
  };

  const openTestPage = () => {
    localStorage.setItem("note", note); // Save the note in local storage
    window.open("/pdf", "_blank", "noopener,noreferrer"); // Open the new page in a new tab
  };

  return (
    <div className="p-6 flex justify-center">
      <div>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="note"
            value={note}
            onChange={onChangeHandler}
            className="p-2 border rounded"
          />

          <input type="submit" value="submit note" />
        </form>

 

    {allowSubmit ?       
        <button
          className="px-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
          onClick={openTestPage}
        >
          Open Test Page
        </button>
       : "you have tu submit note or leave it empty"}
      </div>
    </div>
  );
}
