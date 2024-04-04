export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="prose container mx-auto my-4 px-4 sm:px-6 lg:px-8 lg:prose-lg">
      {children}
    </div>
  )
}
