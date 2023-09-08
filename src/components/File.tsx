import fs from 'fs';
import React from 'react';
import { File } from '@urban-bot/core';
import filepath from '../assets/video.mp4'; //TODO почему-то не видит текстовые файлы

const file = fs.readFileSync(filepath);

export function FileExample() {
    return <File file={file} title="There is the file" />;
}
