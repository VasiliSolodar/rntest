if (typeof window !== 'undefined') {
    if (typeof HTMLCanvasElement !== 'undefined') {
    // taken from https://stackoverflow.com/questions/48828759/jest-and-jsdom-error-with-canvas
      HTMLCanvasElement.prototype.getContext = () => {
        // return whatever getContext has to return
      };
    }
    window.matchMedia = () => ({ matches: true });
}
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

enzyme.configure({adapter: new Adapter()});
// ============== global Mocks
global.fetch = require("jest-fetch-mock");