import { ImageResponse } from 'next/server'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

type IconProps = {
  params: { dataId: string }
}
export default function Icon({ params: { dataId } }: IconProps) {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw="flex items-center justify-center w-full h-full bg-black text-white text-[24px] leading-8">
        {dataId[0].toUpperCase()}
      </div>
    ),
    {
      ...size,
    },
  )
}
