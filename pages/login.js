export default function LoginPage() {
  return (
    <div className="flex flex-row items-center justify-center">
      {/* Column 1 */}
      <div className="w-1/2">
        <div>LEFT SIDE asdasdasd</div>
      </div>
      {/* Column 2 */}
      <div className="w-1/2">
        <form className="flex flex-col">
          <label className="text-white">Full Name*</label>
          <input
            className="bg-gray-200 shadow-inner rounded p-2 mb-2"
            id="email1"
            type="name"
            aria-label="Full Name"
            placeholder="Enter your full name"
          />
          <label className="text-white">Email Address*</label>
          <input
            className="bg-gray-200 shadow-inner rounded p-2 mb-2"
            id="email"
            type="email"
            aria-label="email address"
            placeholder="Enter your email address"
          />
          <label className="text-white">Password*</label>
          <input
            className="bg-gray-200 shadow-inner rounded p-2 mb-2"
            id="password"
            type="password"
            aria-label="password"
            placeholder="Create a password"
          />

          <div className="flex items-center justify-center space-x-2">            
            <input id="default-checkbox" type="checkbox" value=""></input>
            <label htmlFor="default-checkbox" className="text-white">Accept Terms & Conditions</label>
          </div>

          <button
            className="bg-tahiti hover-bg-blue-700 duration-300 text-white shadow p-2 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
