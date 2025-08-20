import Button from './Button'


export default function Navbar() {
return (
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
<nav className="container-max flex h-14 items-center justify-between">
<a href="#home" className="font-semibold tracking-tight">Aviv • Portfolio</a>
<div className="hidden sm:flex items-center gap-3">
<a href="#projects" className="text-sm text-gray-600 hover:text-gray-900">Projects</a>
<a href="#about" className="text-sm text-gray-600 hover:text-gray-900">About</a>
<a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
<Button as="a" href="#contact" className="bg-gray-900 text-white ring-gray-900 hover:brightness-110">Hire me</Button>
</div>
</nav>
</header>
)
}