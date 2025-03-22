import { i18n } from "@lingui/core";

export const locales = {
    en: "en",
    fr: "fr",
};
export const defaultLocale = "en";

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export async function dynamicActivate(locale) {
    const { messages } = await require(`./locales/${locale}/messages`);
    i18n.load(locale, messages);
    i18n.activate(locale);
}
