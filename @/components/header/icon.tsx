import {
  ArrowDownToLine,
  Briefcase,
  Dot,
  Home,
  Phone,
  User2,
} from "lucide-react";

const Icon = ({ name }: { name: string }) => {
  if (name === "Home") return <Home />;
  if (name === "Works") return <Briefcase />;
  if (name === "About") return <User2 />;
  if (name === "Contact") return <Phone />;
  if (name === "Resume") return <ArrowDownToLine />;

  return <Dot size={2} />;
};

export default Icon;
