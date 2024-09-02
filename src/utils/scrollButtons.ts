import { RefObject } from "react";

export const scrollPrevious = (containerRef: RefObject<HTMLDivElement>) => {
  if (containerRef.current) {
    const container = containerRef.current;
    const containerWidth = container.getBoundingClientRect().width;
    container.scrollBy({ left: -containerWidth, behavior: "smooth" });
  }
};

export const scrollNext = (containerRef: RefObject<HTMLDivElement>) => {
  if (containerRef.current) {
    const container = containerRef.current;
    const containerWidth = container.getBoundingClientRect().width;
    container.scrollBy({ left: containerWidth, behavior: "smooth" });
  }
};
