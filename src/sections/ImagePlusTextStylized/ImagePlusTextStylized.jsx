import Markdown from '../../components/Markdown/Markdown';
import { getSectionColor, getProseColor } from '../../components/color-utils';

export default function ImagePlusTextStylized({
  alignment,
  background_color,
  hide,
  image_url,
  markdown_content,
  max_content,
  isAdmin,
}) {
  if (hide) return '';

  const bgColor = getSectionColor(background_color);
  const proseColor = getProseColor(background_color);

  const Image = (
    <div className={`bg-white p-12 md:p-24 flex justify-end items-center`}>
      <a href="/blog/this-is-latest-post/">
        <img src={image_url} className="w-full max-w-md" />
      </a>
    </div>
  );

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${
        !max_content ? 'container mx-auto' : ''
      }`}
    >
      {alignment == 'Image on left' ? Image : ''}
      <div
        className={`${bgColor} p-12 md:p-24 flex justify-start items-center`}
      >
        <div className="max-w-md">
          <div className="w-24 h-2 bg-emerald-800 mb-4"></div>
          <div className={`w-full prose prose-l ${proseColor}`}>
            <Markdown content={markdown_content} isAdmin={isAdmin} />
          </div>
          <a
            href="/blog/this-is-latest-post/"
            className="inline-block border-2 border-emerald-800 font-light text-emerald-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-emerald-800 hover:text-white mt-8"
          >
            Read more
          </a>
        </div>
      </div>
      {alignment == 'Image on right' ? Image : ''}
    </div>
  );
}
