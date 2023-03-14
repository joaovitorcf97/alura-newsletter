import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

function ToggleTheme() {
  const pageRef = document.documentElement.classList;
  const systemThemePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [dark, setDark] = useState(systemThemePreference);

  useEffect(() => {
    dark && pageRef.add('dark');
  });

  function toggle() {
    pageRef.toggle('dark');
    setDark(!dark);
  }

  return (
    <div className="hidden sm:block">
      <MoonIcon className="h-8 text-gray-100 block dark:hidden cursor-pointer" onClick={toggle} />
      <SunIcon className="h-8 text-gray-100 hidden dark:block cursor-pointer" onClick={toggle} />
    </div>
  );
}

export default ToggleTheme;