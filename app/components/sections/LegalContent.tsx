type Props = {
  updated: string;
  sections: { heading: string; body: string }[];
};

/** Simple prose layout for policy pages. */
export default function LegalContent({ updated, sections }: Props) {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-x max-w-3xl">
        <p className="text-sm">Last updated: {updated}</p>
        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-2xl font-bold">{s.heading}</h2>
              <p className="mt-3 text-[16px] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
