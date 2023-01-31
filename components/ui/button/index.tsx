import Link from "next/link";

interface ButtonProps {
  isExternal?: boolean;
  isDownload?: boolean;
  isDisabled?: boolean;
  isSecondary?: boolean;
  newClassName?: string;
  clickHandler?: () => void;
  link?: string;
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={[
        "btn rounded py-2 px-5 font-medium not-italic",
        props.newClassName,
      ].join(" ")}
      onClick={props.clickHandler}
    >
      {props.children}
    </button>
  );
};

export const ButtonLink = (props: ButtonProps) => {
  return (
    <Link
      href={props.link!}
      download={props.isDownload}
      className={[
        "btn rounded py-2 px-5 font-medium not-italic",
        props.newClassName,
      ].join(" ")}
      onClick={props.clickHandler}
    >
      {props.children}
    </Link>
  );
};
