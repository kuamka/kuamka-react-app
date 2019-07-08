import { configure } from "@storybook/react";
import requireContext from "require-context.macro";

// Automatically import all files ending in *.stories.tsx. Uses webpack's require.context which can
// be statically resolved by the bundler. This has to be polyfilled under node when storyshotting.
const req = requireContext("../src", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
