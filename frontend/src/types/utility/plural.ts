const ruRules = new Intl.PluralRules('ru-RU');

export function plural(n: number, forms: Record<Intl.LDMLPluralRule, string>) {

    return forms[ruRules.select(n)] ?? forms.other;
}