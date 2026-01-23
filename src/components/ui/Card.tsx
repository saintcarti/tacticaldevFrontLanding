interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={`relative rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-soft transition duration-300 ease-out after:absolute after:left-2 after:right-2 after:top-0 after:h-0.5 after:rounded-full after:bg-accent after:opacity-0 after:transition-opacity after:duration-300 after:ease-out hover:after:opacity-100 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
