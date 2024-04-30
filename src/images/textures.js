
import { TextureLoader } from 'three';
import {
    dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,
} from './images';


const dirttexture = new TextureLoader().load(dirtImg);
const logtexture = new TextureLoader().load(logImg);
const grasstexture = new TextureLoader().load(grassImg);
const glasstexture = new TextureLoader().load(glassImg);
const woodtexture = new TextureLoader().load(woodImg);
const groundtexture = new TextureLoader().load(grassImg);

export {
    groundtexture,
    woodtexture,glasstexture,grasstexture,logtexture,dirttexture
}