import { Inter } from "@next/font/google";
import Link from "next/link";
import RootLayout from "./layout";
const inter = Inter({ subsets: ["latin"] });
// console.log(inter);

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const fetchTodos = async () => {
  const url = await fetch("https://jsonplaceholder.typicode.com/todos");
  return url.json();
};

export default async function Home() {
  const res = await fetchTodos();
  // console.log("res", res);

  return (
    <div>
      <h1
        style={{ textTransform: "uppercase", wordSpacing: "2px" }}
        className={inter.className}
      >
        Hello from Next.js 13
      </h1>
      <div>
        <ul>
          {/* <Link href="/hello">Hello</Link> <br />
          <Link href="/world">world</Link> <br /> <br /> */}

          {res.map((todo: Todo) => (
            // <Link href={`/${todo.title.replace(/ +/g, "")}`}>
            <Link href={`/todo/${todo.id.toString()}`}>
              <li>{todo.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
