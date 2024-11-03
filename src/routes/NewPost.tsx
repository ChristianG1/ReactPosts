import { FormEvent, useState } from "react";
import classes from "./NewPost.module.css";
import { Modal } from "../components/Modal";

type Post = {
  body: string;
  author: string;
};

type Props = {
  onCancel: () => void;
  addPostsHandler: (post: Post) => void;
};

export function NewPost({ onCancel, addPostsHandler }: Props) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const changeBodyHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredBody(event.target.value);
  };

  const changeAuthorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };

    addPostsHandler(postData);

    onCancel();
  };

  return (
    <Modal onClose={onCancel}>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            required
            type="text"
            onChange={changeAuthorHandler}
          />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </p>
      </form>
    </Modal>
  );
}
