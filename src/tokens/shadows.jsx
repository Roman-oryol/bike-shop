import { createGlobalStyle } from 'styled-components';

const Shadow = {
  CARD_DEFAULT_CHILD: 'var(--shadow-card-default-child)',
  CARD_HOVER_OR_FOCUS_CHILD: 'var(--shadow-card-hover-or-focus-child)',
  CARD_HOVER_OR_FOCUS_ADULT: 'var(--shadow-card-hover-or-focus-adult)',
};

const GlobalShadows = createGlobalStyle`
  --shadow-card-default-child: 0 4px 10px rgba(0, 0, 0, 0.07);
  --shadow-card-hover-or-focus-adult: inset 0 0 0 1px #ff833e;
  --shadow-card-hover-or-focus-child: inset 0 0 0 1px #5fcb45;
`;

export default GlobalShadows;
export { Shadow };
