// Each item is cropped from the official mark; the supplied geometry is unchanged.
export function MosaicPiece({ index }: { index: number }) {
  return (
    <span className={`mosaic-piece piece-${index}`} aria-hidden="true">
      <img src="/brand/icon.svg" width={87} height={87} alt="" />
    </span>
  );
}
