export const site = {
  name: "Mosaic Labs",
  url: "https://mosaic-labs.co",
  email: "contact@mosaic-labs.co",
  tagline: "Build Ideas Together",
  description:
    "An independent software and product studio. We build thoughtful digital products, turning independent ideas into meaningful experiences.",
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  category: string;
  href: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "lessonara",
    name: "Lessonara",
    tagline: "More teaching. Less juggling.",
    description:
      "A simpler way to manage teaching. One thoughtful space for English teachers to organize lessons, students, materials, and activities.",
    status: "MVP · In development",
    category: "Education · SaaS",
    href: "https://lessonara.mosaic-labs.co",
    features: [
      "Lesson planning",
      "Student organization",
      "Materials & activities",
    ],
  },
];
