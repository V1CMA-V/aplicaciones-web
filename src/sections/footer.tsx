export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-10 w-full lg:max-w-[1300px] mx-auto mt-10 p-6 bg-gray-800 text-white">
      <div className="text-center">
        <p className="text-lg">© 2023 Your Company Name. All rights reserved.</p>
      </div>
      <div className="flex gap-4">
        <a href="#" className="text-blue-400 hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="text-blue-400 hover:underline">
          Terms of Service
        </a>
      </div>
    </footer>
  )
}
