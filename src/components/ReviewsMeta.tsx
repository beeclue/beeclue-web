import Image from 'next/image';
import styles from './ReviewsMeta.module.css';

interface ReviewsMetaProps {
  campaign: string;
}

export default function ReviewsMeta({ campaign }: ReviewsMetaProps) {
  const reviewUrl = `https://share.google/OxZGLLnL8BWUAsvnn?utm_source=beeclue&utm_medium=website&utm_campaign=${campaign}`;

  return (
    <div className={styles.reviewsMeta}>
      <div className={styles.ratingsBadges}>
        <div className={styles.ratingBadge}>
          <Image src="/google-logo.svg" alt="Google" width={24} height={24} priority />
          <div className={styles.ratingInfo}>
            <div className={styles.ratingStars}>★★★★★</div>
            <span className={styles.ratingText}>5.0 Rating</span>
          </div>
        </div>
        <div className={styles.ratingBadge}>
          <Image
            src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
            alt="Trustpilot 5 Stars"
            width={100}
            height={20}
            priority
          />
          <div className={styles.ratingInfo}>
            <span className={styles.ratingText}>Excellent</span>
          </div>
        </div>
      </div>

      <a
        href={reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.reviewButton}
      >
        Review Us on Google
      </a>
    </div>
  );
}
