import Link from "next/link";

interface ButtonProps {
  isSubmit?: boolean;
  link: string;
  children: any;
}

const Button = (props: ButtonProps) => {
  const { isSubmit, link } = props;

  if (!isSubmit) {
    return (
      <Link href={link} className="btn btn-link">
        {props.children}
      </Link>
    );
  }

  return <button className="btn btn-outline">{props.children}</button>;
};

export default Button;
