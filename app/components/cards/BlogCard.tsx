import Image from "next/image";
import Link from "next/link";
import { formatBlogDate, type BlogPost } from "@/app/data/blogs";
import { ArrowRight } from "../ui/Icons";

export default function BlogCard({ post }: { post: BlogPost }) {
  const href = `/blog/${post.slug}`;
  const date = formatBlogDate(post.date);
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-shadow hover:shadow-card">
      <Link href={href} tabIndex={-1} aria-hidden="true" className="relative block aspect-[288/165] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(min-width: 1024px) 288px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <time
          dateTime={post.date}
          className="absolute bottom-0 left-3 rounded-t bg-gold px-3 pt-2 pb-1.5 text-center font-heading text-navy"
        >
          <span className="block text-lg leading-none font-bold">{date.day}</span>
          <span className="mt-1 block text-[11px] font-semibold">{date.monthYear}</span>
        </time>
      </Link>
      <div className="flex flex-1 flex-col px-5 pt-5 pb-6">
        <p className="font-heading text-[11px] font-bold tracking-[0.15em] text-navy uppercase">{post.category}</p>
        <h3 className="mt-2.5 text-lg leading-snug font-bold tracking-tight">
          <Link href={href} className="hover:text-gold">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed">{post.excerpt}</p>
        <Link
          href={href}
          aria-label={`Read more: ${post.title}`}
          className="mt-5 inline-flex items-center gap-3 self-start font-heading text-[15px] font-bold text-navy"
        >
          <span className="border-b-2 border-gold pb-1">Read More</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
