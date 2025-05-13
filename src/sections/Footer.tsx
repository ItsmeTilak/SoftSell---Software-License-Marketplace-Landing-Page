'use client';

const Footer = () => (
  <footer className="bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700 py-8 mt-20">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div className="text-secondary-600 dark:text-secondary-300 text-sm">
        &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
      </div>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 transition">Privacy Policy</a>
        <a href="#" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 transition">Terms of Service</a>
        <a href="#" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 transition" aria-label="Twitter">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.89-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.13 12.13 0 013 4.8a4.28 4.28 0 001.32 5.71c-.7-.02-1.35-.21-1.92-.53v.05a4.28 4.28 0 003.43 4.2c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.29 4.29 0 004 2.97A8.61 8.61 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0024 4.59a8.61 8.61 0 01-2.54.7z" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
