"use client";
import dynamic from 'next/dynamic';
import React from 'react';

const LineChartLib = dynamic(() => import('./charts/LineChart'), { ssr: false });
const BarChartLib = dynamic(() => import('./charts/BarChart'), { ssr: false });

export function LineChartCard(props: any) {
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-black/30 backdrop-blur">
      <LineChartLib {...props} />
    </div>
  );
}

export function BarChartCard(props: any) {
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-black/30 backdrop-blur">
      <BarChartLib {...props} />
    </div>
  );
}