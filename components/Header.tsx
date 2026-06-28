export function Header(){
    return(
        <header style={{ backgroundColor: 'hsl(var(--bg))' }} className="sticky top-0 z-50 flex justify-between items-center w-full md:max-w-3xl p-4 border-b border-border shadow-[0_4px_12px_hsl(0_0%_0%/0.5)]">
            <nav className="flex gap-6">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            </nav>
        </header>
        
    );
}