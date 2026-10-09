/** Placeholder shown while a detail page's URL-specific content streams in. */
export default function DetailSkeleton({ withBanner = false }: { withBanner?: boolean }) {
  return (
    <div aria-busy="true" aria-label="Loading">
      {withBanner && <div className="min-h-[220px] bg-navy-800 sm:min-h-[300px]" />}
      <div className="container-x animate-pulse py-20 lg:py-24">
        <div className="h-56 rounded-lg bg-cream" />
        <div className="mt-8 h-4 w-40 rounded bg-cream" />
        <div className="mt-4 h-10 w-3/4 max-w-xl rounded bg-cream" />
        <div className="mt-6 space-y-3">
          <div className="h-4 rounded bg-cream" />
          <div className="h-4 rounded bg-cream" />
          <div className="h-4 w-2/3 rounded bg-cream" />
        </div>
      </div>
    </div>
  );
}
