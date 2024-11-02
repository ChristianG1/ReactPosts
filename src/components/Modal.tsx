import classes from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export function Modal({ children, onClose }: Props) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
}
