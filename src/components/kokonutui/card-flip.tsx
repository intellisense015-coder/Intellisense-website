"use client";

import { type PointerEvent, type ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Axis = "x" | "y";

export interface CardFlipProps {
  front?: ReactNode;
  back?: ReactNode;
  flipped?: boolean;
  defaultFlipped?: boolean;
  onFlippedChange?: (flipped: boolean) => void;
  axis?: Axis;
  label?: string;
  className?: string;
  faceClassName?: string;
}

export default function CardFlip({
  front,
  back,
  flipped,
  defaultFlipped = false,
  onFlippedChange,
  axis = "y",
  label = "Interactive card",
  className,
  faceClassName,
}: CardFlipProps) {
  const [internalFlipped, setInternalFlipped] = useState(defaultFlipped);
  const isFlipped = flipped ?? internalFlipped;
  const pointerRef = useRef<{ id: number; x: number; y: number; moved: boolean } | null>(null);

  const toggle = () => {
    const next = !isFlipped;
    if (flipped === undefined) setInternalFlipped(next);
    onFlippedChange?.(next);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    pointerRef.current = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: false };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const pointer = pointerRef.current;
    if (!pointer || pointer.id !== event.pointerId) return;
    const distance = axis === "y" ? Math.abs(event.clientX - pointer.x) : Math.abs(event.clientY - pointer.y);
    if (distance > 6) pointer.moved = true;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const pointer = pointerRef.current;
    if (!pointer || pointer.id !== event.pointerId) return;
    pointerRef.current = null;
    if (!pointer.moved) toggle();
    else {
      const distance = axis === "y" ? event.clientX - pointer.x : event.clientY - pointer.y;
      if (Math.abs(distance) > 28) toggle();
    }
  };

  return <div
    className={cn("kokonut-card-flip", className)}
    data-axis={axis}
    data-flipped={isFlipped ? "true" : "false"}
    role="button"
    tabIndex={0}
    aria-label={label}
    aria-pressed={isFlipped}
    onClick={(event) => { if (event.detail === 0) toggle(); }}
    onKeyDown={(event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    }}
    onPointerDown={onPointerDown}
    onPointerMove={onPointerMove}
    onPointerUp={onPointerUp}
    onPointerCancel={() => { pointerRef.current = null; }}
  >
    <div className="kokonut-card-flip-inner">
      <div className={cn("kokonut-card-flip-face kokonut-card-flip-front", faceClassName)}>{front}</div>
      <div className={cn("kokonut-card-flip-face kokonut-card-flip-back", faceClassName)}>{back}</div>
    </div>
  </div>;
}
