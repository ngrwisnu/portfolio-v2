import Link from "next/link";

interface ButtonProps {
  id?: string;
  isExternal?: boolean;
  isDownload?: boolean;
  isDisabled?: boolean;
  isSecondary?: boolean;
  newClassName?: string;
  clickHandler?: () => void;
  link: string;
  tooltipName?: string;
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={[
        "btn rounded py-2 px-5 font-medium not-italic dark:text-white",
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
      id={props.id}
      href={props.link!}
      download={props.isDownload}
      className={[
        "btn rounded py-2 px-5 font-medium dark:text-white dark:hover:text-[#1e293b]",
        props.newClassName,
      ].join(" ")}
      data-tip={props.tooltipName}
      onClick={props.clickHandler}
    >
      {props.children}
    </Link>
  );
};
