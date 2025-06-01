import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-4">
          <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
          <Card/>
      <div className="flex flex-col gap-4">
        {/* Small Buttons */}
        <Button title="Small Button" styles="text-sm rounded-sm" />
        <Button title="Medium Button" styles="text-base rounded-md" />
        <Button title="Large Button" styles="text-lg rounded-full" />
      </div>
    </div>
  );
};

export default Landing;