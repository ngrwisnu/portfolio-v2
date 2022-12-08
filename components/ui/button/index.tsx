import Link from "next/link";

interface ButtonProps {
  isSubmit?: boolean;
  isDefault?: boolean;
  isDisabled?: boolean;
  link: string;
  children: any;
}

const Button = (props: ButtonProps) => {
  const { isSubmit, link } = props;

  if (!isSubmit) {
    return (
      <Link href={link} className="btn-link btn">
        {props.children}
      </Link>
    );
  }

  return <button className="btn-outline btn">{props.children}</button>;
};

export default Button;
