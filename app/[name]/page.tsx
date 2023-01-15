import React from "react";

// export async function generateStaticParams() {
//   const names: string[] = ["hello", "world"];
//   return names.map((name) => ({
//     name: name,
//   }));
// }

// type Props = {
//     params?: { name?: string; isCompleted?: boolean };
//     searchParams?: { id?: string };
// }

export async function generateStaticParams() {
  const url = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const res = await url.json();

  return res.map((name: any) => ({
    name: name.title,
    isCompleted: name.isCompleted,
  }));
}

const GiveName = ({ params, searchParams }: any) => {
  return (
    <div>
      My name is {params.name} && {params.isCompleted ? "true" : "false"}
    </div>
  );
};

export default GiveName;
