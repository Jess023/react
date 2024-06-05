import {BigPlayButton, ControlBar, PlaybackRateMenuButton, Player} from 'video-react';

export default function Player1(){
    return(
        <Player poster='https://media.discordapp.net/attachments/981865540802990110/1063269199968997446/image.png?ex=6655341b&is=6653e29b&hm=67c20d0b34393e2e05efe2841e658885a8514b0c9f3068dc0c5f7cc7c60c996e&=&format=webp&quality=lossless&width=522&height=506'
            src='music.mp4'
            fluid={false}
            width={600}
            height={400}
            muted={true}
            autoPlay={false}>

            <BigPlayButton position='center' />
            <ControlBar>
                <PlaybackRateMenuButton rates={[64, 2, 1.5, 1.25, 1, 0.1]} />
            </ControlBar>
        </Player>
    )
}