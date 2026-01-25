import React from "react";
import clsx from "clsx";

type CtaProps = {
  children: React.ReactNode;
  className?: string;
};

function Cta({ children, className }: CtaProps) {
  return (
    <section className={clsx("py-20 bg-merino-700 text-white", className)}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* <h2 className="mb-4 text-white font-bold text-3xl"></h2>
        <p className="text-xl mb-8 text-merino-100"></p> */}

        {children}
      </div>
    </section>
  );
}

export default Cta;
