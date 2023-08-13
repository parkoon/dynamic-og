/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          padding: "20px 16px",
          background: "#E1E6FA",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{ fontWeight: "bold", fontSize: 14, marginBottom: "4px" }}
            >
              Timothee Hal Chalamet
            </div>
            <div style={{ fontSize: 11 }}>data.id/eonjoeonjoeonjoeon</div>
          </div>
          <DataIdLogoSvg />

          <div
            style={{
              display: "flex",
              position: "absolute",
              right: 0,
              bottom: 0,
            }}
          >
            <img
              style={{ borderRadius: "100%" }}
              width={64}
              height={64}
              src="https://ca.slack-edge.com/TPRUYBA3T-UQ1N493K9-ddea6ca50f0b-512"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

const DataIdLogoSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="5.71em"
    height="1em"
    fill="none"
  >
    <g clip-path="url(#clip0_1675_129081)">
      <path
        d="M13.0722 7L12.9083 5.76606H10.2556L9.6198 7H7.68628L11.512 0H13.708L14.9052 7H13.0722ZM10.8329 4.4625H12.812L12.4262 1.75778H12.2202L10.8333 4.4625H10.8329Z"
        fill="#222222"
      />
      <path
        d="M16.3995 7L17.4491 1.45172H15.4561L15.7341 0H21.5859L21.3074 1.45172H19.3239L18.2643 7H16.3995Z"
        fill="#222222"
      />
      <path
        d="M25.1668 7L25.0029 5.76606H22.3502L21.7144 7H19.7809L23.6066 0H25.8026L26.9998 7H25.1668ZM22.9275 4.4625H24.9066L24.5208 1.75778H24.3148L22.9279 4.4625H22.9275Z"
        fill="#222222"
      />
      <path
        d="M29.5536 7L30.8817 0H32.7465L31.4184 7H29.5536Z"
        fill="#222222"
      />
      <path
        d="M32.799 7L34.127 0H36.6535C38.749 0 40.0001 1.14956 40.0001 3.07533C40.0001 5.42267 38.3264 7 35.8349 7H32.7986H32.799ZM34.9328 5.64744H35.7579C37.0776 5.64744 38.0354 4.57022 38.0354 3.08544C38.0354 1.95222 37.4778 1.35294 36.4225 1.35294H35.7321L34.9328 5.64744Z"
        fill="#222222"
      />
      <path
        d="M0.890322 7L1.76281 3.09633H3.61516L3.01389 5.64744H3.84542C5.16516 5.64744 6.123 4.57022 6.123 3.08544C6.123 1.95183 5.56537 1.35294 4.51003 1.35294H1.08493L0 0H4.74105C6.83655 0 8.08763 1.14956 8.08763 3.07533C8.08763 5.42267 6.41396 7 3.92242 7H0.890322Z"
        fill="#222222"
      />
    </g>
    <defs>
      <clipPath id="clip0_1675_129081">
        <rect width="40" height="7" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
