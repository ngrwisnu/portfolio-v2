import React from "react";
import SelectedWork from "./selected-work";
import data from "../../../../data/works";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SelectedWorks = () => {
  return (
    <section id="works" className="w-full px-4 dark:text-white">
      <div className="container-content flex flex-col gap-10">
        <h6>Works</h6>
        {data
          .map((work) => {
            if (work.isSelected === true) {
              return (
                <SelectedWork
                  key={work.slug}
                  title={work.title}
                  description={work.description}
                  imgUrl={work.imgUrls[0]}
                  gradient={work.gradient}
                  slug={work.slug}
                />
              );
            }
          })
          .reverse()}
        <div className="flex items-center justify-center">
          <Button variant="outline" asChild>
            <Link href="/works">More Works</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
