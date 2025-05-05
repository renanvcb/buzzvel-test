interface MarkedTextProps {
  children: React.ReactNode;
}

export function MarkedText({ children }: MarkedTextProps) {
  return (
    <span
      className="relative inline-block bg-no-repeat bg-left-bottom bg-[length:100%_0.6em] pb-1"
      style={{ backgroundImage: "url('/orange-marker.svg')" }}
    >
      {children}
    </span>
  );
}
