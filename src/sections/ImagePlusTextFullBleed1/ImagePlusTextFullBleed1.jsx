import ReactMarkdown from 'react-markdown';

export default function Hero1({ hide, image_url, markdown_content, isAdmin }) {
  if (hide) return '';

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center">
        <div
          className="hidden bg-cover lg:block lg:w-2/5"
          style={{
            'background-image': `url('${image_url}')`,
          }}
        ></div>
        <div className="flex items-center w-full max-w-3xl p-32 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full prose prose-xl">
            {isAdmin ? (
              <ReactMarkdown>{markdown_content}</ReactMarkdown>
            ) : (
              <article
                dangerouslySetInnerHTML={{ __html: markdown_content }}
              ></article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
