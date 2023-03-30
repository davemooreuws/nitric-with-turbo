import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Nav() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  return (
    <nav className='sticky t-0 z-10 w-full h-20 border-b border-gray-100 dark:border-gray-800'>
      <div className='flex h-full px-4 items-center justify-between  mx-auto max-w-5xl'>
        <a
          href='/'
          className=' text-gray-800 dark:text-gray-200 inline-flex items-center'
        >
          <svg
            viewBox='0 0 152 171'
            className='h-10 w-10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clip-path='url(#clip0_133_5079)'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M8.86574 103.523L24.0772 118.748L109.279 33.5143L76.2878 0.511292L8.87286 67.988C6.53805 70.3197 4.68559 73.0888 3.42144 76.1373C2.1573 79.1858 1.50628 82.4538 1.50562 85.7542C1.50495 89.0546 2.15465 92.3226 3.41756 95.3718C4.68048 98.421 6.53182 101.191 8.86574 103.523Z'
                fill='#061499'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M144.313 102.959C144.123 103.161 143.929 103.362 143.732 103.559L128.748 118.549L128.65 118.647L76.3166 171L61.0981 155.783C58.7648 153.451 56.9138 150.682 55.6509 147.633C54.388 144.585 53.738 141.318 53.738 138.018C53.738 134.719 54.388 131.452 55.6509 128.404C56.9138 125.356 58.7648 122.587 61.0981 120.254L95.6778 85.6801L61.1986 51.2065C58.8675 48.8747 57.0183 46.1063 55.7566 43.0596C54.495 40.0128 53.8456 36.7473 53.8456 33.4494C53.8456 30.1516 54.495 26.8861 55.7566 23.8393C57.0183 20.7925 58.8675 18.0242 61.1986 15.6924L76.4174 0.439331L143.832 67.916C148.542 72.621 151.191 79.0052 151.196 85.6635C151.201 92.106 148.731 98.2951 144.313 102.959Z'
                fill='#2C40F7'
              />
            </g>
            <defs>
              <clipPath id='clip0_133_5079'>
                <rect
                  width='150.41'
                  height='170.561'
                  fill='white'
                  transform='translate(0.794922 0.439331)'
                />
              </clipPath>
            </defs>
          </svg>
          <span className='text-2xl font-bold ml-3'>Nitric Guestbook</span>
        </a>
        <div className='flex gap-2'>
          <a
            href='https://github.com/leon-fong/one-guestbook'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='w-9 h-9  flex items-center justify-center transition-all'
          >
            <svg width='28' height='28' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z'
              />
            </svg>
          </a>
          <button
            aria-label='Toggle Dark Mode'
            type='button'
            className='w-9 h-9  flex items-center justify-center  transition-all'
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {mounted && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                className=' text-gray-800 dark:text-gray-200'
              >
                {resolvedTheme === "dark" ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
