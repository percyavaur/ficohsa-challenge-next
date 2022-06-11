import React from "react";
import { SEOLayout } from '../components/layout/SEOLayout';

const BadRequestPage = () => {
  return (
    <SEOLayout title="400 - Not found" description={"Bad request page"}>
      <div className="perfect_center w-screen flex justify-center items-center">
        <span className="font-bold text-3xl">400 | </span>
        <span className="text-xl">Bad request</span>
      </div>
    </SEOLayout>
  );
};

export default BadRequestPage;
