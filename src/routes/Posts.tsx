import { Outlet } from "react-router-dom";
import { ListPost } from "../components/ListPost";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <ListPost />
      </main>
    </>
  );
}

export default Posts;
