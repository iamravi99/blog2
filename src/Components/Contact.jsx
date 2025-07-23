import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  const contactData = {
    name: "Ravinder Singh",
    mobile: "12345667998",
    email: "random@gmail.com",
  };

  return (
    <>
      <Navbar />

      {/* Top Heading */}
      <div className="text-center mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          Get in Touch with Ravinder Singh
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          I’d love to hear from you. Whether it’s a project, feedback, or just
          to say hello — feel free to reach out.
          <span className="text-yellow-400 font-semibold block">
            Contact me anytime.
          </span>
        </p>
      </div>

      {/* Contact Card */}
      <div className="flex items-center justify-center px-6 py-10">
        <div className="card bg-base-100 shadow-2xl max-w-md w-full p-6">
          <div className="card-body space-y-4">
            <h2 className="card-title text-2xl text-red-500">Contact Info</h2>
            <p className="text-lg text-gray-600">
              <span className="text-yellow-400 font-semibold">Name:</span>{" "}
              {contactData.name}
            </p>
            <p className="text-lg text-gray-600">
              <span className="text-yellow-400 font-semibold">Mobile:</span>{" "}
              {contactData.mobile}
            </p>
            <p className="text-lg text-gray-600">
              <span className="text-yellow-400 font-semibold">Email:</span>{" "}
              {contactData.email}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
