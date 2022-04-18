import Link from "next/link";
export default function Footer() {
  return (
    <div className="d-flex flex-center flex-column-auto p-10">
      <div className="d-flex align-items-center fw-bold fs-6">
        <Link href="/about">
          <a className="text-muted text-hover-primary px-2">About</a>
        </Link>
        <Link href="/contact-us">
          <a className="text-muted text-hover-primary px-2">Contact Us</a>
        </Link>
      </div>
    </div>
  );
}
