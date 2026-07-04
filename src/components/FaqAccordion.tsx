"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "@/app/page.module.css";

export interface FaqItem {
  q: string;
  a: string | React.ReactNode;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, i) => (
        <div key={i} className={styles.faqItem}>
          <button
            className={styles.faqQuestion}
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
          >
            {faq.q}
            <ChevronDown
              size={20}
              className={`${styles.faqChevron} ${openFaq === i ? styles.faqChevronOpen : ""}`}
            />
          </button>
          <div className={`${styles.faqAnswer} ${openFaq === i ? styles.faqAnswerOpen : ""}`}>
            {typeof faq.a === "string" ? <p>{faq.a}</p> : faq.a}
          </div>
        </div>
      ))}
    </div>
  );
}

export { FaqAccordion as FAQAccordion };
