import React from "react";
import { SEOLayout } from "../components/layout";

const NotFoundPage = () => {
  return (
    <SEOLayout title="404 - Not found" description={"Not found page"}>
      <div className="perfect_center w-screen flex justify-center items-center">
        <span className="font-bold text-3xl">404 | </span>
        <span className="text-xl">Not found page</span>
      </div>
    </SEOLayout>
  );
};

export default NotFoundPage;
