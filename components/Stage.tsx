interface StageProps {
  children: React.ReactNode;
}

export function Stage({ children }: StageProps) {
  return (
    <div className="stage flex flex-col min-h-screen w-full items-center bg-background">
      {children}
    </div>
  );
}