import classes from "./MainHeader.module.css";
import { MdPostAdd, MdMessage } from "react-icons/md";

export function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <a href="/create-post" className={classes.button}>
          <MdPostAdd size={18} />
          New Posts
        </a>
      </p>
    </header>
  );
}
