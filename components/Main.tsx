interface StageProps {
  children: React.ReactNode;
}

export function Main({ children }: StageProps){
    return(
        <main style={{ backgroundColor: 'hsl(var(--bg))' }} className="flex flex-col w-full md:max-w-3xl grow pt-4">
        {children}
      </main>
    );
}