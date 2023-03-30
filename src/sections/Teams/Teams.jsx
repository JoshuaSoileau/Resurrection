import tw from 'twin.macro';

export default function Teams({ anchor, hide, items, max_content }) {
  if (hide) return '';

  // TODO -- figure out recursive "field" markdown parsing.

  return (
    <section
      css={[
        tw`flex flex-wrap bg-black`,
        max_content ? tw`container mx-auto` : '',
      ]}
      id={anchor}
    >
      {items.map(item => {
        const { image_url, name, title } = item;

        if (link_url)
          return (
            <a
              href={link_url}
              key={link_url}
              tw="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 text-white uppercase tracking-widest hover:opacity-75"
            >
              <div tw="relative z-10">{text}</div>
              <img
                src={image_url}
                tw="absolute inset-0 w-full h-full object-cover opacity-50"
              />
            </a>
          );

        return (
          <div
            key={image_url}
            tw="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-64 text-white uppercase tracking-widest"
          >
            <div tw="relative z-10">{text}</div>
            <img
              src={image_url}
              tw="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          </div>
        );
      })}
    </section>
  );

  return (
    <section className="pt-20 pb-10 lg:pt-120px lg:pb-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="text-primary mb-2 block text-lg font-semibold">
                Our Team
              </span>
              <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              <p className="text-body-color text-base">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {items.map(({ image_url, name, title }) => {
            return (
              <div className="w-full px-4 md:w-1/2 xl:w-1/4">
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                  <div className="relative overflow-hidden rounded-lg">
                    <img alt="image" className="w-full" src={image_url} />
                    <div className="absolute bottom-5 left-0 w-full text-center">
                      <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                        <h3 className="text-dark text-base font-semibold">
                          {name}
                        </h3>
                        <p className="text-body-color text-sm">{title}</p>
                        <div>
                          <span className="absolute left-0 bottom-0">
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
                          <span className="absolute top-0 right-0">
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
