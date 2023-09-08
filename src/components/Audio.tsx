import fs from 'fs';
import React from 'react';
import { Audio } from '@urban-bot/core';
import filepath from '../assets/video.mp4'; //TODO пока временно т.к. не видит файл audio.m4a

const file = fs.readFileSync(filepath);

export function AudioExample() {
    return <Audio file={file} title="There is the audio" name="Some name" />;
}
