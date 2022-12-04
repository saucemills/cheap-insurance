/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable require-jsdoc */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAY8f3AGvC8QBEmswAUbPpALLb8gAyg74AadL9AIrl/wCO4v8APoq4AD2MvgBgvOkAPI3BAEiKrwAGUn8AleX/AEqu5ABmwe8Al+7/ADub0AA5m9kAgN/3AKDr/wBOtO0Ab8LyAC9okwBOmsQAW7jnAHLN+ACP4f0AIXW6ACZWggCX4vcAMpfOAJ3a+gA/kMIAdtr7AFnF/AB52P4ABleGAD2ZywBgyfYAZsfwAGjF8wCUzOwAYs//ADKJtwCI3fsAUJXIAARJeAB1zvMAV7/0AFCq2gB42P8Adtv/ABtrngAwhrgAM2OGAH3n/wB4wegANIu+AGiu1AA2iL4Ahef/AFq57AB1zfoAdc/3AGO35gBQodIAabPjACp7qgBVyP4AZb3vAC9+qgCZ5/8AXcj+AD6d0ABgzv4Aa8j1AG/L7ABLmscAbMv1AEOi1gBftN4Ad8jsAGnR/gBCpNwAQ4SqAHHO9QA1j8IAMpbOAGO76gAGVYMAOpjLAFnI/wAEWokAftT+AFzK/AA6mtEAMoOxAIDi+wAyiLcAWLLiAD+BqwBEodQAfMLkADao6QArjskAWLnlAEOe3QBszfwAVbrxAC2RyQAocqwAEmSVAEyi1wBx1/8ABVWEADaZzwB71fkAOpfJAHba/wBaptEAgNn8AGLJ+gCD3f8AaM30AGbN/QAmbKQAKGykAHPO7gCK4P8ALJLNAARIeQCH6f8AT8H+AIzv/wBJq+EATqfeAIHR9wAGWosAMIe2AGvI7wBTjsEApOz/AEuZ0AA4p+gALpHLAJDe+gAsc58AfMfsAK7y/wBssdgAYcf2ACuEtwArY4sAKYa9AG/A6gCM0vIAGXKmAClplABk0P8AbMv5ADGMvQBUufEALZDJACJxtQB4yfMAbNn/AJXi9QBfvuUAWcX6AGbD6wBMkLcASpG6AIjR8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACeRJNpdpYAAAAAAAAAAABPny0jQjwbKXcAAAAAAAAAQBxqWYiFjnOgAAAAAAAAAGUsBXuuDm2AmRRyhmY9AABBMHylbDlgpJ0uIBqjNVsAAgxFJKE6q0hjBoIyL14LBENVi3Q4SptNiaeBD5w0lEkhEIQzFnUqJpKQMa9kXnFUF5iHeI8loghuHz8oRwpXAAARmlapYhgZRoxvYT55IgAAAAAAAABclQFrU40vWnAAAAAAAAAAqLCtUWhYfWdbAAAAAAAAAB0eEhUDXS9eDQAAAAAAAACXSwl+Nnp/X6YAAAAAAAAAkaoTUIMrB05MAAAAAAAAAACKUic3O6wAAMD/AACAPwAAgD8AAIABAACAAAAAgAAAAAAAAAAAAAAAAAAAAMAAAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP8DAAA="
          rel="icon"
          type="image/x-icon"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-55P5ZW5')`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-55P5ZW5"
            height="0" width="0" style="display:none;visibility:hidden" />`,
          }}
        />
      </body>
    </Html>
  );
}
