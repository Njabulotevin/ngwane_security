import React from "react";

export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-3xl font-bold text-red-700">{title}</h2>
      <h4 className="text-xl font-bold text-gray-900">{subtitle}</h4>
    </div>
  );
}
