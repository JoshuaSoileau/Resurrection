import getEitherCmsOrDefaults from '../../utils/getEitherCmsOrDefaults';
import SectionConfig from './Contact1.field.json';
// import Hero1 from '../Hero1/Hero1';

const Contact1 = (CmsValues) => {
  const props = getEitherCmsOrDefaults(CmsValues, SectionConfig);

  /** Destructure keys here */
  const { map_url, headline, subheadline } = props;

  return (
    <>
      {/* <Hero1 /> */}
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src={map_url}
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              {headline}
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">{subheadline}</p>
            <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Donate!
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;
