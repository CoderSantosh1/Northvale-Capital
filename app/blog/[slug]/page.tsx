import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs, formatBlogDate, getBlog } from "../../data/blogs";
import { site } from "../../data/site";
import PageBanner from "../../components/ui/PageBanner";
import BlogCard from "../../components/cards/BlogCard";
import JsonLd from "../../components/seo/JsonLd";
import DetailSkeleton from "../../components/ui/DetailSkeleton";
import { Calendar, Clock, Folder, User } from "../../components/ui/Icons";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.date,
      images: [post.coverImage],
    },
  };
}

async function BlogDetailContent({ params }: Pick<PageProps<"/blog/[slug]">, "params">) {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) notFound();

  const date = formatBlogDate(post.date);
  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);
  const meta = [
    { Icon: Calendar, text: <time dateTime={post.date}>{date.full}</time> },
    { Icon: User, text: `By ${post.author}` },
    { Icon: Folder, text: post.category },
    { Icon: Clock, text: post.readTime },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: `${site.url}${post.coverImage}`,
          datePublished: post.date,
          author: { "@type": "Organization", name: site.name },
          publisher: {
            "@type": "Organization",
            name: site.name,
            logo: { "@type": "ImageObject", url: `${site.url}/common/northvale-capital-logo.png` },
          },
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
        }}
      />

      <article className="py-20 lg:py-24">
        <div className="container-x max-w-[1060px]">
          <div className="relative h-56 overflow-hidden md:h-auto md:aspect-[1130/245] rounded-lg">
            <Image
              src={post.coverImage}
              alt={post.imageAlt}
              fill
              priority
              sizes="(min-width: 1060px) 1010px, 100vw"
              className="object-cover"
            />
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-2 text-[14px] text-ink">
            {meta.map(({ Icon, text }, i) => (
              <li key={i} className="flex items-center gap-2">
                <Icon className="size-[18px] text-gold" />
                {text}
              </li>
            ))}
          </ul>

          <h1 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {post.headline[0]}
            <br />
            <span className="text-gold">{post.headline[1]}</span>
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed">{post.intro}</p>

          <ol className="mt-8 space-y-7">
            {post.points.map((pt, i) => (
              <li key={pt.title} className="flex gap-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold-100 font-heading text-[15px] font-bold text-navy">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-xl font-bold">{pt.title}</h2>
                  <p className="mt-1.5 text-[15px] leading-relaxed">{pt.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="mt-10 text-2xl font-bold">Conclusion</h2>
          <p className="mt-2 text-[16px] leading-relaxed">{post.conclusion}</p>
        </div>
      </article>

      <section aria-labelledby="related-heading" className="bg-cream py-16">
        <div className="container-x">
          <h2 id="related-heading" className="text-3xl font-extrabold tracking-tight">
            Related <span className="text-gold">Articles</span>
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((b) => (
              <BlogCard key={b.slug} post={b} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// The banner and layout shell render instantly; slug-specific content streams in.
export default function BlogDetailPage({ params }: PageProps<"/blog/[slug]">) {
  return (
    <>
      <PageBanner title="Blog Detail" trail={[{ label: "Blogs", href: "/blog" }]} />
      <Suspense fallback={<DetailSkeleton />}>
        <BlogDetailContent params={params} />
      </Suspense>
    </>
  );
}
