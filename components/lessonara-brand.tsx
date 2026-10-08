// Logo geometry, wordmark styling and colors from the existing Lessonara project.
export function LessonaraBrand() {
  return (
    <span className="lessonara-brand-lockup" aria-label="Lessonara">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="currentColor" />
        <path
          d="M10 8v16h12"
          stroke="var(--lessonara-mark-bg)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="21" cy="11" r="2.5" fill="var(--lessonara-mark-bg)" />
      </svg>
      <span>
        lessonara<span className="lessonara-brand-dot">.</span>
      </span>
    </span>
  );
}
