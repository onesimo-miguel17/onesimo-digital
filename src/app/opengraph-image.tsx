import { ImageResponse } from "next/og";
import { SocialImage } from "@/lib/social-image";

export const alt =
  "Onésimo Digital — Estratégia, design e tecnologia em Luanda, Angola.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<SocialImage />, size);
}
