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

export function HappierLeadsScript({ clientId, version = '4.0.0' }: { clientId: string; version?: string }) {
  return (
    <Script
      id="happierleads-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `!function(){var e="rest.happierleads.com/v3/script?clientId=${clientId}&version=${version}",t=document.createElement("script");window.location.protocol.split(":")[0];t.src="https://"+e;var c=document.getElementsByTagName("script")[0];t.async=true;t.onload=function(){new Happierleads.default};c.parentNode.insertBefore(t,c)}();`,
      }}
    />
  );
}

export function InstantlyScript({ pid }: { pid: string }) {
  return (
    <Script
      id="vtag-ai-js"
      src="https://r2.leadsy.ai/tag.js"
      strategy="afterInteractive"
      data-pid={pid}
      data-version="062024"
    />
  );
}
