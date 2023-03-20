export const technologiesFormater = (technologies: string[]) => {
  let languagesTable: any[] = [];
  technologies.map((item: any) => {
    languagesTable.push(item.language);
  });
  const languages = languagesTable.reduce((acc: any, curr: any) => {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, []);

  return languages;
};
