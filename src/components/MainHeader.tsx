import classes from "./MainHeader.module.css";
import { MdPostAdd, MdMessage } from "react-icons/md";

type Props = {
  showModalHandler: () => void;
};

export function MainHeader({ showModalHandler }: Props) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick={showModalHandler}>
          <MdPostAdd size={18} />
          New Posts
        </button>
      </p>
    </header>
  );
}
