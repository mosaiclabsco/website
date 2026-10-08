import Image from "next/image";
export function LessonaraShowcase({ alt }: { alt: string }) {
  return (
    <div className="lessonara-showcase" data-reveal>
      <div className="lessonara-screen">
        <Image
          src="/images/lessonara-login.png"
          alt={alt}
          width={3301}
          height={1298}
          sizes="(max-width: 767px) calc(100vw - 70px), (max-width: 1023px) 52vw, 660px"
        />
      </div>
    </div>
  );
}
