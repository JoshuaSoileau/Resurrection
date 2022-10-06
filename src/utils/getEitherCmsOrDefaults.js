export default function getEitherCmsOrDefaults(CmsValues, Config) {
  const { fields } = Config;

  return fields.reduce((total, field) => {
    const { name: key } = field;
    if (!key) return total;

    if (Object.prototype.hasOwnProperty.call(CmsValues, key)) {
      return {
        ...total,
        [key]: CmsValues[key],
      };
    }

    const returnValue = Object.prototype.hasOwnProperty.call(field, 'default')
      ? field.default
      : null;

    return {
      ...total,
      [key]: returnValue,
    };
  });
}
