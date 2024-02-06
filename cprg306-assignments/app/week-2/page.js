import Link from "next/link";
import StudentInfo from "./student-info.js";

export default function Page() {
    return (
      <main>
        <h1>Shopping List</h1>
        <div><StudentInfo></StudentInfo></div>
      </main>
    );
  }