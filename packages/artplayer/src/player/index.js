import urlMix from './urlMix';
import attrInit from './attrInit';
import eventInit from './eventInit';
import playMix from './playMix';
import pauseMix from './pauseMix';
import toggleMix from './toggleMix';
import seekMix from './seekMix';
import volumeMix from './volumeMix';
import currentTimeMix from './currentTimeMix';
import durationMix from './durationMix';
import switchMix from './switchMix';
import playbackRateMix from './playbackRateMix';
import aspectRatioMix from './aspectRatioMix';
import screenshotMix from './screenshotMix';
import fullscreenMix from './fullscreenMix';
import fullscreenWebMix from './fullscreenWebMix';
import pipMix from './pipMix';
import loadedMix from './loadedMix';
import playedMix from './playedMix';
import playingMix from './playingMix';
import autoSizeMix from './autoSizeMix';
import rectMix from './rectMix';
import flipMix from './flipMix';
import lightMix from './lightMix';
import { proxyPropertys } from '../utils';

export default class Player {
    constructor(art) {
        urlMix(art, this);
        eventInit(art, this);
        attrInit(art, this);
        playMix(art, this);
        pauseMix(art, this);
        toggleMix(art, this);
        seekMix(art, this);
        volumeMix(art, this);
        currentTimeMix(art, this);
        durationMix(art, this);
        switchMix(art, this);
        playbackRateMix(art, this);
        aspectRatioMix(art, this);
        screenshotMix(art, this);
        fullscreenMix(art, this);
        fullscreenWebMix(art, this);
        pipMix(art, this);
        loadedMix(art, this);
        playedMix(art, this);
        playingMix(art, this);
        autoSizeMix(art, this);
        rectMix(art, this);
        flipMix(art, this);
        lightMix(art, this);
        proxyPropertys(art, this);
    }
}
