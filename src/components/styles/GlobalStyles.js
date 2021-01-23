import { createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .wave {
  position: relative;
  height: 250px;
  width: 100%;
  background: #0b345d;
  background-image: linear-gradient(155deg, #020312 0%, #020312 50%, #020312 100%);
  z-index: -1;
}
.wave-white {
  position: relative;
  height: 250px;
  width: 100%;
  background: #0b345d;
  background-image: linear-gradient(155deg, #181a25 0%, #181a25 50%, #181a25 100%);
  z-index: -1;
}
.wave-transparent {
  position: absolute;
  bottom: 0;
  height: 250px;
  width: 100%;
  background: transparent;
  background-image: linear-gradient(155deg, transparent 0%, transparent 50%, transparent 100%);
  z-index: -1;
}
.wave-transparent2 {
  position: absolute;
  top: 0;
  height: 250px;
  width: 100%;
  background: transparent;
  background-image: linear-gradient(155deg, transparent 0%, transparent 50%, transparent 100%);
  transform: rotate(180deg);
  z-index: -1;
}
.wave-home {
  position: absolute;
  height: 110vh;
  width: 100%;
  background: transparent;
  background-image: linear-gradient(155deg, transparent 0%, transparent 50%, transparent 100%);
}
.svgwave {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  z-index: 1;
}
`