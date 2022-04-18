import Footer from "@components/footer/footer";
import Logo from "@public/JYM-logo.png";
import useStore, { userDataAtom } from "@hooks/useStore";
import Image from "next/image";

export default function DefaultLayout({ children }: any) {
  return (
    <div className="bg-body-container">
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-column-fluid">
          <div className="d-flex flex-column flex-column-fluid flex-center p-10 py-lg-15">
            <a href="/" className="mb-10">
              <Image
                alt="Logo"
                src={Logo}
                className="h-40px mb-5"
                width={100}
                height={100}
                layout="responsive"
              />
            </a>
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
