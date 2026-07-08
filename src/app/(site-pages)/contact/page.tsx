"use client";

import FadeIn from "@/components/FadeIn";

import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import { Mail, MapPin, ArrowRight, Phone, MessageCircle, Check, X } from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { trackFormSubmit, trackFormStart, trackPageView } from "@/lib/analytics";

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  comments?: string;
  consent?: string;
};

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [phone, setPhone] = useState<string | undefined>();
  const hasStartedRef = useRef(false);

  useEffect(() => {
    trackPageView("/contact");
  }, []);

  const handleFormStart = () => {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackFormStart("contact_form", formData.service || "general");
    }
  };

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    comments: "",
    consent: false,
  });

  // Validation State
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!isValidPhoneNumber(phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the terms and consent to store your information";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handlePhoneChange = (val: string | undefined) => {
    setPhone(val);
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setFormStatus("submitting");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2394a933-0d56-4b63-8d32-2269f36e5679",
          name: formData.name,
          email: formData.email,
          phone: phone,
          service: formData.service,
          message: formData.comments,
        }),
      });
      
      const result = await response.json();
      
      if (response.status === 200) {
        setFormStatus("success");
        trackFormSubmit("contact_form", formData.service);
        
        // Add the user to EmailOctopus list in the background
        try {
          await fetch("/api/newsletter", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: formData.email }),
          });
        } catch (err) {
          console.error("Failed to add email to Octopus:", err);
        }
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Beeclue Tech",
    "description": "Get in touch with Beeclue Tech for a free consultation on your web design, mobile app, or custom software project.",
    "url": "https://beeclue.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Beeclue Tech",
      "telephone": "+1-647-947-6253",
      "email": "hello@beeclue.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-647-947-6253",
        "contactType": "customer service"
      }
    }
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.container}>
        
        {/* Left Column - Contact Info */}
        <div className={styles.infoColumn}>
          <h1 className={styles.title}>Let's talk about your project</h1>
          <p className={styles.subtitle}>
            Ready to build a scalable digital foundation? Reach out to our team of experts in Toronto to discuss your business goals, technical requirements, and how we can accelerate your growth.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <Mail className={styles.icon} />
              <div>
                <h3>Email</h3>
                <a href="mailto:hello@beeclue.com">hello@beeclue.com</a>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <MapPin className={styles.icon} />
              <div>
                <h3>Office</h3>
                <p>Toronto, ON</p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <Phone className={styles.icon} />
              <div>
                <h3>Phone</h3>
                <a href="tel:+16479476253">+1 (647) 947-6253</a>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <MessageCircle className={styles.icon} />
              <div>
                <h3>WhatsApp</h3>
                <a href="https://wa.me/16479476253">+1 (647) 947-6253</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className={styles.formColumn}>
            <form className={styles.form} onSubmit={handleSubmit} onFocus={handleFormStart} onChange={handleFormStart} noValidate>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  disabled={formStatus === "submitting"}
                  className={errors.name ? styles.inputError : ""}
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com" 
                  autoComplete="email"
                  disabled={formStatus === "submitting"}
                  className={errors.email ? styles.inputError : ""}
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone">Phone</label>
                <div className={`${styles.phoneInputWrapper} ${errors.phone ? styles.inputError : ""}`}>
                  <PhoneInput
                    id="phone"
                    international
                    defaultCountry="CA"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="Enter phone number"
                    autoComplete="tel"
                    disabled={formStatus === "submitting"}
                  />
                </div>
                {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="service">Service</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  disabled={formStatus === "submitting"}
                  className={errors.service ? styles.inputError : ""}
                >
                  <option value="">Select a service</option>
                  <option value="web-design">Web Design & Development</option>
                  <option value="custom-software">Custom Software / SaaS</option>
                  <option value="mobile-app">Mobile Application</option>
                  <option value="ecommerce">E-Commerce Solution</option>
                  <option value="seo">SEO & Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && <span className={styles.errorText}>{errors.service}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="comments">Comments</label>
                <textarea 
                  id="comments" 
                  name="comments" 
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="Tell us about your goals, timeline, and budget..."
                  disabled={formStatus === "submitting"}
                  className={errors.comments ? styles.inputError : ""}
                ></textarea>
                {errors.comments && <span className={styles.errorText}>{errors.comments}</span>}
              </div>

              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    disabled={formStatus === "submitting"}
                    className={styles.checkbox}
                  />
                  <span>
                    I agree to the <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a> and <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>, and consent to Beeclue storing my information to respond to my inquiry.
                  </span>
                </label>
                {errors.consent && <span className={styles.errorText}>{errors.consent}</span>}
              </div>

              <button type="submit" className={styles.submitButton} disabled={formStatus === "submitting"}>
                {formStatus === "submitting" ? "Sending..." : "Get My Free Consultation"} <ArrowRight className={styles.arrow} />
              </button>
            </form>
        </div>
      </div>

      {formStatus === "success" && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={`${styles.modalIcon} ${styles.modalIconSuccess}`}>
               <Check size={32} />
            </div>
            <h3 className={styles.modalTitle}>Message Received</h3>
            <p className={styles.modalText}>Thanks! We&apos;ll respond within 2 business hours. Check your inbox for a confirmation.</p>
            <button 
              className={styles.modalButton}
              onClick={() => {
                setFormStatus("idle");
                setFormData({ name: "", email: "", service: "", comments: "", consent: false });
                setPhone(undefined);
                hasStartedRef.current = false;
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {formStatus === "error" && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={`${styles.modalIcon} ${styles.modalIconError}`}>
               <X size={32} />
            </div>
            <h3 className={styles.modalTitle}>Submission Failed</h3>
            <p className={styles.modalText}>Something went wrong. Please try again or email us directly at hello@beeclue.com.</p>
            <button 
              className={styles.modalButton}
              onClick={() => {
                setFormStatus("idle");
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
