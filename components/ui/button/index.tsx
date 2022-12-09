import Link from "next/link";

interface ButtonProps {
  isSubmit?: boolean;
  isDefault?: boolean;
  isDisabled?: boolean;
  link?: string | any;
  children: any;
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
  ];

  isDefault && className.push("btn-outline");
  isDisabled && className.push("btn-disabled text-stone-500");

  if (!isSubmit) {
    return (
      <Link href={link} className="btn-link btn">
        {props.children}
      </Link>
    );
  }

  return <button className={`${className.join(" ")}`}>{props.children}</button>;
};

export default Button;
