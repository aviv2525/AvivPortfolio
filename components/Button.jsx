export default function Button({ as: Tag = 'button', className = '', children, ...props }) {
return (
<Tag
className={`inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-medium shadow-sm ring-1 ring-inset ring-gray-200 bg-white hover:shadow-md hover:-translate-y-[1px] transition active:translate-y-0 active:shadow ${className}`}
{...props}
>
{children}
</Tag>
)
}