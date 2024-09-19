import GlobalFonts from './tokens/fonts';
import { GlobalResets } from './tokens/resets';
import GlobalColors from './tokens/colors';
import GlobalShadows from './tokens/shadows';
import GlobalRadiuses from './tokens/radiuses';
import Button, {
  ButtonSize,
  ButtonVariant,
  ButtonColor,
} from './elements/Button';

function App() {
  return (
    <>
      <GlobalFonts />
      <GlobalResets />
      <GlobalColors />
      <GlobalShadows />
      <GlobalRadiuses />
      <Button>Кнопка</Button>
      <Button variant={ButtonVariant.OUTLINED}>Кнопка</Button>
      <Button color={ButtonColor.GREEN}>Кнопка</Button>
      <Button
        size={ButtonSize.LARGE}
        variant={ButtonVariant.OUTLINED}
        color={ButtonColor.GREEN}
      >
        Кнопка
      </Button>
    </>
  );
}

export default App;
