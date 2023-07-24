import { type CounterState } from "./features/counterSlice";
import { type themeState } from "./features/switchThemeSlice";

export interface RootState {
  counter: CounterState;
  theme: themeState;
}
