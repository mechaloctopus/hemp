export default function SectionImage({ src, alt, caption }) {
  return (
    <div className="relative rounded-2xl overflow-hidden mb-8">
      <img
        src={src}
        alt={alt}
        className="w-full h-48 sm:h-64 object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
      {caption && (
        <div className="absolute bottom-3 left-4 right-4">
          <p className="text-xs text-white/50">{caption}</p>
        </div>
      )}
    </div>
  )
}
