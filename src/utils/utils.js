export const formatLink = (link, therm) => {
  link = link.replace(/{TERMO}/g, therm);

  if (link.includes("{PAGE}")) {
    return link.replace(/{PAGE}/g, "1");
  }

  let index = Number(link.match(/\d+/g));
  index += 49;

  return link.replace(/\d+/g, index);
};
