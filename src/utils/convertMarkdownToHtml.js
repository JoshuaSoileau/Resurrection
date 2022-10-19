import * as matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { reduce } from 'awaity/esm';

export default async function (sections) {
  console.log(sections);
  const value = await reduce(
    Object.entries(sections),
    async (total, [key, value]) => {
      if (key.includes('arkdown')) {
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(value);

        // Use remark to convert markdown into HTML string
        const processedContent = await remark().use(html).process(value);
        const contentHtml = processedContent.toString();

        return {
          ...total,
          [key]: contentHtml, // return converted markdown here
        };
      }

      return {
        ...total,
        [key]: value,
      };
    },
    {}
  );

  return value;
}
