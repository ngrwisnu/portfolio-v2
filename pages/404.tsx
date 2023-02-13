import { ButtonLink } from "../components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="col-center flex h-screen w-screen ">
      <div className="col-center mb-8 flex">
        <h2 className="text-neutral-800 font-['Josefin_Sans'] text-6xl font-light">
          404
        </h2>
        <p className="text-neutral-400 mt-4">This page is never exist</p>
      </div>
      <ButtonLink
        link="/"
        newClassName="btn-link text-slate-800 hover:no-underline"
      >
        Go to Homepage
      </ButtonLink>
    </div>
  );
};

export default NotFoundPage;
