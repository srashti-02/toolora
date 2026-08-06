"use client";

import React from "react";

type LoanChartProps = {
  width?: number;
  height?: number;
};

export default function LoanChart({ width = 300, height = 150 }: LoanChartProps) {
  return (
    <div style={{ width, height }} aria-hidden>
      {/* Simple placeholder chart */}
      <svg width="100%" height="100%" viewBox="0 0 300 150" preserveAspectRatio="none">
        <rect x="0" y="0" width="100%" height="100%" fill="#0f1724" />
        <polyline
          fill="none"
          stroke="#7c3aed"
          strokeWidth={3}
          points="10,140 60,90 110,100 160,60 210,80 260,30"
        />
      </svg>
    </div>
  );
}