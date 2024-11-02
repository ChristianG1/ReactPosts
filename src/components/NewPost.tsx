import classes from "./NewPost.module.css";

type Props = {
  onBodyChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAuthorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function NewPost({ onBodyChange, onAuthorChange }: Props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input id="name" required type="text" onChange={onAuthorChange} />
      </p>
    </form>
  );
}
