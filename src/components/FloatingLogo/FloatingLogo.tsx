"use client";

import { useState } from "react";
import FlynasAI from "@/components/FlynasAI";
import "./FloatingLogo.scss";

export default function FloatingLogo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`floatingLogo${open ? " is-hidden" : ""}`}
        aria-label="Open Flynas AI"
        aria-expanded={open}
        aria-controls="flynas-ai-dialog"
        onClick={() => setOpen(true)}
      >
        <span className="floatingLogo__icon" aria-hidden="true" />
      </button>

      <FlynasAI open={open} onClose={() => setOpen(false)} />
    </>
  );
}
