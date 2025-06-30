import React from 'react'

interface BilibiliVideoProps {
  bvid: string
  width?: string | number
  height?: string | number
  className?: string
}

/**
 * B站视频嵌入组件
 * @param bvid - B站视频的BV号
 * @param width - 视频宽度，默认为100%
 * @param height - 视频高度，默认为400px
 * @param className - 额外的CSS类名
 */
const BilibiliVideo: React.FC<BilibiliVideoProps> = ({
  bvid,
  width = '100%',
  height = 400,
  className = '',
}) => {
  // 构建B站播放器URL
  const playerUrl = `//player.bilibili.com/player.html?bvid=${bvid}&autoplay=0&page=1`
  
  return (
    <div className={`bilibili-video-container ${className}`}>
      <iframe
        src={playerUrl}
        scrolling="no"
        width={width}
        height={height}
        frameBorder="no"
        allowFullScreen={true}
        title={`B站视频 ${bvid}`}
      />
    </div>
  )
}

export default BilibiliVideo 