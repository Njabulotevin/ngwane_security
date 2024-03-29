import React from "react";

export default function SectionTitle({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <h2 className="text-3xl font-bold text-red-700">{title}</h2>
      <h4 className="text-xl font-bold text-gray-900">{subtitle}</h4>
    </div>
  );
}
