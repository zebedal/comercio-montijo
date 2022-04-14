import { StylesConfig } from "react-select";

export enum Breakpoints {
  Small = 600,
  Medium = 960,
  Large = 1280,
  Extra = 1920,
}

export enum Colors {
  TextColor = "#111111",
  TextLightColor = "#393939",
  LightGrey = "#f1f1f1",
  Green = "#62c358",
  Yellow = "#F6C000",
  Transparent = "transparent",
  White = "white",
  Blue = "#2d48c3",
}

export const MenuItems = [
  {
    title: "Notícias",
    path: "/noticias",
  },
  {
    title: "Iniciativas",
    path: "/iniciativas",
  },
  {
    title: "Contactos",
    path: "/contactos",
  },
];

export const CategoriasNegocios = [
  {
    label: "Alojamento Local",
    value: " Alojamento Local",
  },
  {
    label: "Beleza e Bem-estar",
    value: " Beleza e Bem-estar",
  },
  {
    label: "Design e Publicidade",
    value: " Design e Publicidade",
  },
  {
    label: "Desporto",
    value: "Desporto",
  },
  {
    label: "Cultura",
    value: "Cultura",
  },
  {
    label: "Diversão e Lazer",
    value: "Diversão e Lazer",
  },
  {
    label: "Educação",
    value: "Educação",
  },
  {
    label: "Escolas de Condução",
    value: "Escolas de Condução",
  },
  {
    label: "Fotografia",
    value: "Fotografia",
  },
  {
    label: "Informática",
    value: "Informática",
  },
  {
    label: "Mobiliário",
    value: "Mobiliário",
  },
  {
    label: "Moda",
    value: "Moda",
  },
];

export const selectStyles: StylesConfig = {
  control: (provided: Record<string, unknown>, state: any) => ({
    ...provided,

    border: "1px solid rgba(57, 57, 57, 0.3)",
    boxShadow: state.isFocused ? "none" : "none",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "none",
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? "rgba(189,197,209,.5)" : "white",
    fontSize: "$text-small",
    color: state.isSelected ? "#5a7d00" : "$text-color",
    "&:hover": {
      backgroundColor: "rgba(189,197,209,.5)",
    },
  }),
};

export const selectNoBorderStyles: StylesConfig = {
  control: (provided: Record<string, unknown>, state: any) => ({
    ...provided,
    border: "none",
    boxShadow: state.isFocused ? "none" : "none",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "none",
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? "rgba(189,197,209,.5)" : "white",
    fontSize: "$text-small",
    color: state.isSelected ? "#5a7d00" : "$text-color",
    "&:hover": {
      backgroundColor: "rgba(189,197,209,.5)",
    },
  }),
};
