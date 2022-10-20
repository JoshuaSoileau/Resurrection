import Markdown from '../../components/Markdown/Markdown';

export default function Hero1({
  alignment,
  hide,
  include_line,
  markdown_content,
  isAdmin,
}) {
  if (hide) return '';

  const lineAlignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const textAlignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div
        className={`max-w-xl mx-auto ${textAlignment[alignment]} py-24 md:py-32`}
      >
        {include_line ? (
          <div className="w-24 h-2 bg-emerald-800 mb-4 inline-block"></div>
        ) : (
          ''
        )}
        <div className="w-full prose prose-l mx-auto">
          <Markdown content={markdown_content} isAdmin={isAdmin} />
        </div>
      </div>
    </section>
  );
}
