import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Book Now', href: 'https://www.massagebook.com/therapists/restorativebodyworkatx', target: '_blank' },
    { text: 'Services', href: getPermalink('/services') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'FAQ', href: getPermalink('/faq') },
  ],
  actions: [],
};

export const footerData = {
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://rugh.dev/favicon.ico)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://rugh.dev/"> rugh.dev</a> · All rights reserved.
  `,
};
