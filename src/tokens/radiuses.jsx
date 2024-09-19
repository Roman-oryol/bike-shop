import { createGlobalStyle } from 'styled-components';

const Radius = {
  4: 'var(--radius-4)',
};

const GlobalRadiuses = createGlobalStyle`
  --radius-4: 4px;
`;

export default GlobalRadiuses;
export { Radius };
