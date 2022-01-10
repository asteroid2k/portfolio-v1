import Link from "next/link";
import { ChevronLeft } from "react-feather";
import Logo from "../public/images/logo.svg";
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <nav className="flex justify-between shadow-md px-2 md:px-8 py-3 items-center">
        {/* back button */}
        <Link href="/" passHref>
          <button>
            <ChevronLeft size={50} strokeWidth={3} className=""></ChevronLeft>
          </button>
        </Link>
        {/* logo */}
        <div>
          <Logo color="var(--accentColor)" />
        </div>
        <div></div>
      </nav>
      {/* Main */}
      <div className="flex flex-col justify-center py-6  max-w-full mx-auto mt-12 font-[Inter]">
        {/* intro text */}
        <div className="flex flex-col gap-8 px-2">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Thanks for taking the time to reach out.
          </p>
        </div>
        {/* contact form */}
        <form
          onSubmit={handleSubmit}
          method="post"
          data-stein-url="https://api.steinhq.com/v1/storages/61d34e228d29ba2379111e4d/Sheet1"
          id="form"
          className="py-8 px-8 mx-auto max-w-[90%]  lg:w-full lg:max-w-[70%]  mt-12 flex flex-col gap-8 items-center"
        >
          <div className="flex flex-wrap lg:grid lg:flex-none lg:grid-cols-2 w-full lg:gap-8 justify-center gap-10">
            <div className="w-full flex flex-col gap-2">
              <label
                className="text-xl font-semibold text-[color:var(--textShade300)] text-[Barlow]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="form-input k-input"
                id="name"
                type="text"
                name="Name"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-2 justify-center">
              <label className="text-xl font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="form-input k-input"
                id="email"
                type="email"
                name="Email"
                required
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-xl font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-textarea k-input"
              name="Message"
              id="message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="k-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
