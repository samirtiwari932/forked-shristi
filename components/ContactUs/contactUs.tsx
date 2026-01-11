"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { contactUs } from "@/lib/api/contactUsFeedBack";
import Footer from "@/components/Landing/Footer";
import { Sidebar } from "lucide-react";
import Navbar from "@/components/Navbar";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await contactUs(formData);
      toast.success("Message sent successfully!");
      setIsLoading(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      setIsLoading(false);
      toast.error(
        error.response?.data?.message ||
          "Failed to send the message. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e8edff] dark:from-gray-900 dark:to-gray-800">
      {/* Navbar */}
      <Navbar />
      <Sidebar />

      {/* Main Content - Fills Remaining Height */}
      <main className="flex-1 flex items-center justify-center py-8 px-4">
        <div className="flex flex-col md:flex-row w-full max-w-5xl h-full md:h-[80vh] rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 items-stretch">
          {/* Left Illustration */}
          <div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-br from-[#5d87ff] to-[#4a70d4] p-10">
            <img
              src="/assets/images/login_image.png"
              alt="Contact Illustration"
              className="object-contain w-96 h-96 drop-shadow-2xl"
            />
          </div>

          {/* Form Section */}
          <div className="flex-1 flex flex-col justify-center p-10">
            <h2 className="text-4xl font-extrabold text-[#5d87ff] mb-4 text-center">
              Get in Touch
            </h2>
            <p className="text-gray-500 dark:text-gray-300 mb-8 text-center text-lg">
              We’d love to hear from you! Fill in your details and our team will
              get back to you soon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                {
                  id: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "Your full name",
                  required: true,
                },
                {
                  id: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "you@email.com",
                  required: true,
                },
                {
                  id: "phone",
                  label: "Phone",
                  type: "tel",
                  placeholder: "Optional",
                  required: false,
                },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={(formData as any)[field.id]}
                    onChange={handleChange}
                    required={field.required}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#5d87ff] outline-none transition"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  placeholder="Your message here..."
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#5d87ff] outline-none transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#5d87ff] hover:bg-[#4a70d4] text-white font-semibold text-lg shadow-md transition-all duration-300 hover:shadow-lg disabled:opacity-60"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer at Bottom */}
      <Footer />
    </div>
  );
};

export default ContactUs;
