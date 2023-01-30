import Link from "next/link";

interface ButtonProps {
  isExternal?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isDisabled?: boolean;
  isDownload?: boolean;
  isOutlined?: boolean;
  link?: string;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const {
    isExternal,
    link,
    isSecondary,
    isDisabled,
    isOutlined,
    isDownload,
    isPrimary,
  } = props;

  const className = [
    "py-2",
    "px-4",
    "font-medium",
    "capitalize",
    "btn",
    "rounded-sm",
    "group",
  ];

  // Default button
  isPrimary && className.push("bg-neutral-800 text-white");
  isSecondary && className.push("bg-white text-neutral-800");

  // Outline button
  if (isOutlined) {
    if (isPrimary)
      className.push(
        "bg-transparent border border-neutral-800 text-neutral-800"
      );
    if (isSecondary)
      className.push("bg-transparent border border-white text-white");
  }

  // disabled button
  isDisabled && className.push("btn-disabled text-stone-500");

  // External button
  if (isExternal) {
    if (isOutlined) {
      return (
        <Link
          href={link!}
          className={`hover:no-underline ${className.join(" ")}`}
          download={isDownload}
        >
          {props.children}
        </Link>
      );
    }

    return (
      <Link
        href={link!}
        className={`text-neutral-800 btn-link bg-transparent hover:no-underline ${className.join(
          " "
        )}`}
        download={isDownload}
      >
        {props.children}
      </Link>
    );
  }

  return <button className={`${className.join(" ")}`}>{props.children}</button>;
};

export default Button;
