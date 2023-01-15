import React from "react";

// export async function generateStaticParams() {
//   const names: string[] = ["hello", "world"];
//   return names.map((name) => ({
//     name: name,
//   }));
// }

export async function generateStaticParams() {
  const url = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const res = await url.json();

  return res.map((name: any) => ({
    name: name.title,
    isCompleted: name.isCompleted,
  }));
}

const GiveName = ({
  params,
  searchParams,
}: {
  params: { name: string; isCompleted: boolean };
  searchParams: { id: string };
}) => {
  return (
    <div>
      My name is {params.name} && {params.isCompleted ? "true" : "false"}
    </div>
  );
};

export default GiveName;
