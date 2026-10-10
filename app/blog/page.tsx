import type { Metadata } from "next";
import { blogs } from "../data/category";
import PageBanner from "../components/ui/PageBanner";
import SectionHeading from "../components/ui/SectionHeading";
import BlogCard from "../components/cards/BlogCard";

export const metadata: Metadata = {
  title: "Blog – Investment & Financial Planning Insights",
  description:
    "Expert insights on investing, financial planning, retirement and wealth management from the advisors at NorthVale Capital.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Blogs" />
      <section className="py-20 lg:py-24">
        <div className="container-x">
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
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {blogs.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
