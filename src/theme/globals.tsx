import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    /**
		 * 1. Correct the line height in all browsers.
		 * 2. Prevent adjustments of font size after orientation changes in iOS.
		*/

    :root {
      font-size: ${theme.typography.rootFontSize};
    }

    html {
      line-height: 1.15; /* 1 */
      -webkit-text-size-adjust: 100%; /* 2 */
    }

    /**
		 * Remove the margin in all browsers.
		*/

    body {
      margin: 0;
    }

    /**
		 * Render the 'main' element consistently in IE.
		*/

    main {
      display: block;
    }

    /* Grouping content
   ==========================================================================
	 */

    hr {
      box-sizing: content-box; /* 1 */
      height: 0; /* 1 */
      overflow: visible; /* 2 */
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
    }

    p {
      margin: 0;
    }

    ul {
      margin: 0;
      padding: 0;
    }

    ul li {
      list-style: none;
    }

    /**
		 * Remove the gray background on active links in IE 10.
		*/

    a {
      background-color: transparent;
      text-decoration: none;
    }

    /**
		 * Remove the border on images inside links in IE 10.
		*/

    img {
      border-style: none;
    }

    /**
			* Add the correct display in IE 10.
		*/

    [hidden] {
      display: none;
    }

    /**
     * Remove figure margin and padding
    */

    figure {
      margin: 0;
      padding: 0;
    }
  `
);
