import styled, { css } from 'styled-components';
import { Color } from '../tokens/colors';

const TypographyVariant = {
  TITLE_1: 'title-1',
  TITLE_2: 'title-2',
  TITLE_3: 'title-3',
  TITLE_4: 'title-4',
  TEXT_1: 'text-1',
  TEXT_2: 'text-2',
  TEXT_3: 'text-3',
};

const TypographyVariantToCSS = {
  [TypographyVariant.TITLE_1]: css`
    font-size: 3.6rem;
    line-height: 4rem;
    font-weight: 600;
  `,
  [TypographyVariant.TITLE_2]: css`
    font-size: 2.8rem;
    line-height: 3rem;
    font-weight: 600;
  `,
  [TypographyVariant.TITLE_3]: css`
    font-size: 2.4rem;
    line-height: 3rem;
    font-weight: 600;
  `,
  [TypographyVariant.TITLE_4]: css`
    font-size: 1.8rem;
    line-height: 2rem;
    font-weight: 600;
  `,
  [TypographyVariant.TEXT_1]: css`
    font-size: 1.6rem;
    line-height: 2.2rem;
    font-weight: 400;
  `,
  [TypographyVariant.TEXT_2]: css`
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 400;
  `,
  [TypographyVariant.TEXT_3]: css`
    font-size: 1rem;
    line-height: 1.4rem;
    font-weight: 400;
  `,
};

const Typography = styled.div.attrs(({ $color }) => ({
  $color: $color || Color.WHITE,
}))`
  ${({ $variant }) => TypographyVariantToCSS[$variant]};
  color: ${({ $color }) => $color};
`;

export default Typography;
export { TypographyVariant };
