const dateFormatting = (date: string) => {
  if (date) {
    return date.slice(0, 19).replace('T', ' ');
  }
};

export default dateFormatting;
