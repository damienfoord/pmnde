import Image from "next/image";

export default function Home() {
  return (
      <div class="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Sign In</h2>
        <form action="#" method="POST" class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
    
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
    
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember" name="remember" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
              <label for="remember" class="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
    
            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
            </div>
          </div>
    
          <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Sign In
          </button>
        </form>
    
        <p class="mt-6 text-center text-sm text-gray-600">
          Don't have an account? <a href="#" class="text-indigo-600 hover:text-indigo-500 font-medium">Sign up</a>
        </p>
      </div>
      );
}
