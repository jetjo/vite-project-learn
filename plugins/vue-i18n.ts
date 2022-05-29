const vueI18nPlugin = {
  name: "vue-i18n",
  transform(code: string, id: string) {
    if (!/vue&type=vue-i18n/.test(id)) {
      console.log(id, "builtin-block...");
      return;
    }
    console.log(id, "custom-block...");
    return `export default Comp => {
        Comp.i18n = ${code}
      }`;
  },
};

export { vueI18nPlugin };
