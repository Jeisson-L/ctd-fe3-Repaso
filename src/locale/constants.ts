const EN_US = "en-US";
const ES_ES = "es-ES";
const PT_BR = "pt-BR";

export const defaultLocale = ES_ES;
export const locales = {
  EN_US,
  ES_ES,
  PT_BR,
};

export const localeNames = {
  [EN_US]: "English",
  [ES_ES]: "Español",
  [PT_BR]: "Português",
};

export const TEXTS_BY_LANGUAGE = {
  [EN_US]: {
    HEADER: {
      TYCS: "Terms and conditions",
      PRODUCTS: "Featured Products",
      DISCOUNTS: "Discounts", // Esto nos servirá para agregar la opción en el navbar
    },
    MAIN: {
      PRODUCTS: "Featured Products",
      TYCS: "Terms and conditions",
    },
    DISCOUNTS: {
      // Agregamos este campo para utilizar en el componente
      TITLE: "Discounts",
      EXPIRATION: "Expires",
    },
  },
  [ES_ES]: {
    HEADER: {
      TYCS: "Términos y condiciones",
      PRODUCTS: "Productos destacados",
      DISCOUNTS: "Descuentos", // Esto nos servirá para agregar la opción en el navbar
    },
    MAIN: {
      PRODUCTS: "Productos destacados",
      TYCS: "Términos y condiciones",
    },
    DISCOUNTS: {
      // Agregamos este campo para utilizar en el componente
      TITLE: "Descuentos",
      EXPIRATION: "Validez",
    },
  },
  [PT_BR]: {
    HEADER: {
      TYCS: "Termos e Condições",
      PRODUCTS: "Produtos em destaque",
      DISCOUNTS: "Descontos", // Esto nos servirá para agregar la opción en el navbar
    },
    MAIN: {
      PRODUCTS: "Produtos em destaque",
      TYCS: "Termos e Condições",
    },
    DISCOUNTS: {
      // Agregamos este campo para utilizar en el componente
      TITLE: "Descontos",
      EXPIRATION: "Expiração",
    },
  },
};
