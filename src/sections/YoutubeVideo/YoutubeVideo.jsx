import tw from 'twin.macro';

const paddingY = {
  Large: tw`py-24 md:py-32`,
  Medium: tw`py-14 md:py-20`,
  None: tw`py-0`,
  Small: tw`py-6 md:py-12`,
};

export default function YoutubeVideo({ anchor, hide, embed_html, padding }) {
  if (hide) return '';

  return (
    <section
      id={anchor}
      css={[tw`text-center`, paddingY[padding] || paddingY['Large']]}
    >
      <div tw="max-w-md mx-auto">
        <div dangerouslySetInnerHTML={{ __html: embed_html }} />
      </div>
    </section>
  );
}
