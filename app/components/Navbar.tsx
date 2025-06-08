import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-12 py-3 shadow-md bg-white">
      {/* Left: Logo */}
      <div className="flex-none">
        <Link href="/" className="text-xl font-semibold text-blue-600 dark:text-blue-400">
          Wishes
        </Link>
      </div>

      {/* Center: Links */}
      <div className="flex gap-6">
        <Link href="/" className="text-gray-800  hover:text-blue-600">Home</Link>
        <Link href="/about" className="text-gray-800  hover:text-blue-600">Book Now</Link>
        <Link href="/about" className="text-gray-800  hover:text-blue-600">Packages</Link>
        <Link href="/about" className="text-gray-800  hover:text-blue-600">Popular Places</Link>
      </div>

      {/* Right: Join Button */}
      <div className="flex-none">
        <Link
          href="/join"
          className="px-4 py-2 bg-gray-400 text-white rounded-full text-sm hover:bg-blue-700 transition"
        >
          Join
        </Link>
      </div>
    </nav>
  );
}
