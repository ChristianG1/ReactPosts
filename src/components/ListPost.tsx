import { Post } from "./Post";
import classes from "./ListPost.module.css";
import { NewPost } from "./NewPost";
import { useState } from "react";
import { Modal } from "./Modal";

type Props = {
  modalIsVisible: boolean;
  hideModalHandler: () => void;
};

export function ListPost({ modalIsVisible, hideModalHandler }: Props) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const changeBodyHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredBody(event.target.value);
  };

  const changeAuthorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAuthor(event.target.value);
  };

  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler}
          />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Lorenzo Castellanos" body="Level up!" />
      </ul>
    </>
  );
}
