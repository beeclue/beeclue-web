"use client";

import React, { useState } from "react";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe.");
      }

      setStatus("success");
      setMessage(data.message || "Thanks for subscribing!");
      setEmail(""); // Clear the input
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className={styles.newsletterWrapper}>
      <form onSubmit={handleSubmit} className={styles.newsletterForm}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className={styles.inputField}
          disabled={status === "loading" || status === "success"}
          required
        />
        <button 
          type="submit" 
          className={styles.submitBtn}
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe"}
        </button>
      </form>

      {message && (
        <div className={styles.messageContainer}>
          <span className={status === "success" ? styles.successMessage : styles.errorMessage}>
            {message}
          </span>
        </div>
      )}
    </div>
  );
}
