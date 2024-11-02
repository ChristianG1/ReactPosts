import classes from "./Post.module.css";

type Props = {
  author: string;
  body: string;
};

export function Post({ author, body }: Props) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
  );
}
