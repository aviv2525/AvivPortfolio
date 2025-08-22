export default function Card({ title, subtitle, children, href, imageUrl }) {
return (
<a
href={href}
target={href?.startsWith('http') ? '_blank' : undefined}
rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md hover:-translate-y-[2px]"
>
{imageUrl && (
// eslint-disable-next-line @next/next/no-img-element
<img src={imageUrl} alt="" className="h-44 w-full object-cover" />
)}
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight text-gray-900 group-hover:text-gray-700">
{title}
</h3>
{subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
{children && <div className="mt-3 text-sm text-gray-600">{children}</div>}
</div>
</a>
)}