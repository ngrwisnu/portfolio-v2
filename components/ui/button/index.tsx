import Link from "next/link";

interface ButtonProps {
  isSubmit?: boolean;
  isDefault?: boolean;
  isDisabled?: boolean;
  isDownload?: boolean;
  link?: string | any;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { isSubmit, link, isDefault, isDisabled } = props;

  const className = [
    "py-2",
    "px-4",
    "font-medium",
    "capitalize",
    "btn",
    "rounded-sm",
    "group",
  ];

  isDefault && className.push("btn-outline no-underline");
  isDisabled && className.push("btn-disabled text-stone-500");

  if (!isSubmit) {
    return (
      <Link
        href={link}
        className={`btn-link btn hover:no-underline ${className.join(" ")}`}
        download={props.isDownload}
      >
        {props.children}
      </Link>
    );
  }

  return <button className={`${className.join(" ")}`}>{props.children}</button>;
};

export default Button;
