import Link from "next/link";

interface ButtonProps {
  isSubmit?: boolean;
  link: string;
  children: any;
}

const Button = (props: ButtonProps) => {
  const { isSubmit, link } = props;

  if (!isSubmit) {
    return <Link href={link}>{props.children}</Link>;
  }

  return <button>{props.children}</button>;
};

export default Button;
