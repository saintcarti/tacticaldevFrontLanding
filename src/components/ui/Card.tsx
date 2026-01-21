interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={`rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-soft ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
