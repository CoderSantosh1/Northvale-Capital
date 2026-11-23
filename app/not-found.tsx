import ButtonLink from "./components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="py-28">
      <div className="container-x text-center">
        <p className="font-heading text-7xl font-extrabold text-gold">404</p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-[16px]">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <ButtonLink href="/" className="mt-8">
          Back to Home
        </ButtonLink>
      </div>
    </section>
  );
}
