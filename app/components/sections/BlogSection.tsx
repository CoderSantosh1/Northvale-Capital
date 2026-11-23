import { blogs } from "@/app/data/category";
import BlogCard from "../cards/BlogCard";
import ButtonLink from "../ui/ButtonLink";
import SectionHeading from "../ui/SectionHeading";

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our Blogs"
            title={
              <>
                Insights to Help You
                <br />
                Make
              </>
            }
            highlight="Smarter Financial Decisions"
            inline
          />
          <ButtonLink href="/blog" size="sm" className="bg-navy text-white hover:bg-gold hover:text-navy">
            View All Blogs
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogs.slice(0, 4).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
