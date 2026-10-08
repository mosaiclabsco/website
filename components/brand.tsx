export function Brand({
  footer = false,
  label = "Mosaic Labs — home",
}: {
  footer?: boolean;
  label?: string;
}) {
  return (
    <a
      className={`brand${footer ? " brand-footer" : ""}`}
      href="#top"
      aria-label={label}
    >
      <img
        className="brand-symbol"
        src="/brand/icon.svg"
        alt=""
        width="42"
        height="42"
      />
      <span className="brand-wordmark">
        <img
          src="/brand/icon-text.png"
          alt="Mosaic Labs"
          width="188"
          height="42"
        />
      </span>
    </a>
  );
}
