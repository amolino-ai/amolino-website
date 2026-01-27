'use client';

import Script from 'next/script';

export function RB2BScript({ rb2bId }: { rb2bId: string }) {
  return (
    <Script
      id="reb2b-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `!function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://b2bjsstore.s3.us-west-2.amazonaws.com/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("${rb2bId}");`,
      }}
    />
  );
}

export function ApolloScript({ appId }: { appId: string }) {
  return (
    <Script
      id="apollo-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `!function(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"${appId}"})},document.head.appendChild(o)}();`,
      }}
    />
  );
}
