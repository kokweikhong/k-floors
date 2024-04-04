import React from "react";

const EmailHasSubmitted: React.FC = () => {
  return (
    <section className="container mx-auto px-[15px] mt-[50px]">
      <div className="flex flex-col items-center justify-center text-[20px] h-screen">
        <p className="font-medium">Your request has been submitted.</p>
        <p className="font-medium">You will receive a confirmation email:</p>
        <p className="text-[#D9D9D9] uppercase">hello@calvarycarpentry.com</p>
      </div>
    </section>
  );
};

export default EmailHasSubmitted;
