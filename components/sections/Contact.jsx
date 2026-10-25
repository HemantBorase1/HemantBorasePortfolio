"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { submitContactForm } from "@/lib/submitForm";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Reveal from "@/components/interactive/Reveal";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: "",
  });

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please provide a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus({ submitting: true, success: null, message: "" });

    try {
      const response = await submitContactForm({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      if (response.success) {
        setStatus({
          submitting: false,
          success: true,
          message: response.message,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: response.message,
        });
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        message: "Failed to transmit message. Please try again or email directly.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something Great"
          subtitle="Whether you have an upcoming project, need freelance expertise, or want to say hello, my inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Socials Column */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.1}>
              <Card className="p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                  Contact Information
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                  Fill out the form or reach out directly through any of the channels below.
                </p>

                <div className="space-y-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800/80 hover:border-indigo-500/50 transition-colors group"
                  >
                    <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400 font-medium">Email</div>
                      <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                        {siteConfig.email}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800/80">
                    <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400 font-medium">Location</div>
                      <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                        {siteConfig.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                    Social Channels
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={siteConfig.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter Profile"
                      className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 transition-colors"
                    >
                      <FaXTwitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>

          {/* Controlled Form Column */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <Card className="p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      disabled={status.submitting}
                      suppressHydrationWarning
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-800/60 border ${
                        errors.name
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-zinc-200 dark:border-zinc-700/80 focus:border-indigo-500"
                      } text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      disabled={status.submitting}
                      suppressHydrationWarning
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-800/60 border ${
                        errors.email
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-zinc-200 dark:border-zinc-700/80 focus:border-indigo-500"
                      } text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Project Brief / Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and goals..."
                      disabled={status.submitting}
                      suppressHydrationWarning
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-800/60 border ${
                        errors.message
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-zinc-200 dark:border-zinc-700/80 focus:border-indigo-500"
                      } text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submission Status Alerts */}
                  {status.success === true && (
                    <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm">{status.message}</p>
                    </div>
                  )}

                  {status.success === false && (
                    <div className="p-4 rounded-xl bg-rose-50 text-rose-800 dark:bg-rose-950/50 dark:text-rose-200 border border-rose-200 dark:border-rose-800 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <p className="text-sm">{status.message}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status.submitting}
                    className="w-full"
                  >
                    {status.submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
