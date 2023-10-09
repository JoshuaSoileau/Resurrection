import {
  getOpacityValue,
  getProseColor,
  getSectionColor,
} from 'components/color-utils';
import Markdown from 'components/Markdown/Markdown';
import tw from 'twin.macro';

const textAlignment = {
  center: tw`text-center`,
  left: tw`text-left`,
  right: tw`text-right`,
};

const paddingTop = {
  Large: tw`pt-24 md:pt-32`,
  Medium: tw`pt-14 md:pt-20`,
  Small: tw`pt-6 md:pt-12`,
  Tiny: tw`pt-2`,
};

const paddingBottom = {
  Large: tw`pb-24 md:pb-32`,
  Medium: tw`pb-14 md:pb-20`,
  Small: tw`pb-6 md:pb-12`,
  Tiny: tw`pb-2`,
};

export default function Teams({
  alignment,
  anchor,
  hide,
  image_url,
  include_line,
  isAdmin,
  items,
  markdown_content,
  opacity,
  overlay_color,
  padding,
}) {
  if (hide) return '';

  const textMarginTop = include_line ? '' : tw`mt-6`;

  const bgColor = getSectionColor(overlay_color);
  const proseColor = getProseColor(overlay_color);
  const opacityValue = getOpacityValue(opacity);

  const gridClasses =
    items?.length % 2
      ? tw`grid grid-cols-1 sm:grid-cols-3`
      : tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`;

  const gridNeedsStuffing = items?.length === 1 || items?.length === 2;
  const gridItems = gridNeedsStuffing ? [{}, ...items, {}] : items;

  return (
    <section css={[tw`relative`, bgColor]} id={anchor}>
      {image_url && (
        <img
          css={[tw`w-full h-full absolute inset-0 object-cover`, opacityValue]}
          src={image_url}
        />
      )}
      <div
        css={[
          tw`max-w-xl mx-auto  px-4 md:px-0 pb-12`,
          textAlignment[alignment],
          paddingTop[padding] || paddingTop['Large'],
        ]}
      >
        <div
          css={[
            tw`w-full prose prose-sm md:prose lg:prose-lg mx-auto relative`,
            proseColor,
            textMarginTop,
          ]}
        >
          {include_line ? (
            <div tw="w-24 h-2 bg-emerald-800 mb-4 inline-block"></div>
          ) : (
            ''
          )}
          <Markdown content={markdown_content} isAdmin={isAdmin} />
        </div>
      </div>
      <div
        css={[paddingBottom[padding] || paddingBottom['Large'], gridClasses]}
        tw="container mx-auto  pb-16 gap-4"
      >
        {gridItems?.map(({ image_url, name, title }) => {
          if (!name) return <article key={image_url}></article>;

          return (
            <article key={image_url} tw="relative rounded-lg overflow-hidden">
              <div tw="aspect-w-9 aspect-h-10 md:aspect-h-14"></div>
              <div tw="absolute top-0 bottom-0 left-0 right-0">
                <img src={image_url} tw="object-cover min-w-full min-h-full" />
                <div tw="absolute bottom-5 left-0 w-full text-center">
                  <div tw="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                    <h3 tw="text-base font-semibold">{name}</h3>
                    <p tw="text-sm">{title}</p>
                    <div>
                      <span tw="absolute left-0 bottom-0">
                        <svg
                          fill="none"
                          height="30"
                          viewBox="0 0 61 30"
                          width="61"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="16"
                            cy="45"
                            fill="#13C296"
                            fillOpacity="0.11"
                            r="45"
                          />
                        </svg>
                      </span>
                      <span tw="absolute top-0 right-0">
                        <svg
                          fill="none"
                          height="25"
                          viewBox="0 0 20 25"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="0.706257"
                            cy="24.3533"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 0.706257 24.3533)"
                          />
                          <circle
                            cx="6.39669"
                            cy="24.3533"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 6.39669 24.3533)"
                          />
                          <circle
                            cx="12.0881"
                            cy="24.3533"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 12.0881 24.3533)"
                          />
                          <circle
                            cx="17.7785"
                            cy="24.3533"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 17.7785 24.3533)"
                          />
                          <circle
                            cx="0.706257"
                            cy="18.6624"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 0.706257 18.6624)"
                          />
                          <circle
                            cx="6.39669"
                            cy="18.6624"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 6.39669 18.6624)"
                          />
                          <circle
                            cx="12.0881"
                            cy="18.6624"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 12.0881 18.6624)"
                          />
                          <circle
                            cx="17.7785"
                            cy="18.6624"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 17.7785 18.6624)"
                          />
                          <circle
                            cx="0.706257"
                            cy="12.9717"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 0.706257 12.9717)"
                          />
                          <circle
                            cx="6.39669"
                            cy="12.9717"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 6.39669 12.9717)"
                          />
                          <circle
                            cx="12.0881"
                            cy="12.9717"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 12.0881 12.9717)"
                          />
                          <circle
                            cx="17.7785"
                            cy="12.9717"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 17.7785 12.9717)"
                          />
                          <circle
                            cx="0.706257"
                            cy="7.28077"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 0.706257 7.28077)"
                          />
                          <circle
                            cx="6.39669"
                            cy="7.28077"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 6.39669 7.28077)"
                          />
                          <circle
                            cx="12.0881"
                            cy="7.28077"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 12.0881 7.28077)"
                          />
                          <circle
                            cx="17.7785"
                            cy="7.28077"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 17.7785 7.28077)"
                          />
                          <circle
                            cx="0.706257"
                            cy="1.58989"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 0.706257 1.58989)"
                          />
                          <circle
                            cx="6.39669"
                            cy="1.58989"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 6.39669 1.58989)"
                          />
                          <circle
                            cx="12.0881"
                            cy="1.58989"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 12.0881 1.58989)"
                          />
                          <circle
                            cx="17.7785"
                            cy="1.58989"
                            fill="#3056D3"
                            r="0.646687"
                            transform="rotate(-90 17.7785 1.58989)"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
