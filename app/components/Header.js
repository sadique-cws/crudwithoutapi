import Link from "next/link"

const Header = () => {
  return (
    <div className="flex flex-1 bg-blue-500 text-white justify-between px-10 py-5">
        <Link href="/">Home</Link>
        <Link href="/insert">Insert</Link>
    </div>
  )
}

export default Header