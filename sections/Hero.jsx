import Button from '../components/Button'


export default function Hero() {
return (
<section id="home" className="relative">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-100 to-transparent" />
<div className="container-max grid gap-8 py-20 md:grid-cols-2 md:items-center">
<div>
<p className="text-sm font-medium text-gray-500">Hi, I'm Aviv 👋</p>
<h1 className="mt-2 text-4xl/tight font-bold tracking-tight sm:text-5xl">
Building clean web experiences & Android apps
</h1>
<p className="mt-4 text-gray-600">
CS student & maker. I like turning ideas into products — from simple landing pages to Kotlin/Android apps.
</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<Button as="a" href="#projects" className="bg-gray-900 text-white ring-gray-900">View projects</Button>
<Button as="a" href="#contact">Get in touch</Button>
</div>
</div>
<div className="justify-self-center">
{/* Placeholder לאיור/תמונה */}
<div className="aspect-video w-full max-w-md overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
<div className="grid h-full place-items-center text-gray-400">Hero Image</div>
</div>
</div>
</div>
</section>
)
}