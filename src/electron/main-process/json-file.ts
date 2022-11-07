/**
 * 어플리케이션 데이터 폴더에서 JSON파일을 읽고 쓰는 걸 관리하는 코드
 * 'save-json' IPC event가 발생하면 작동하는 코드다.
 */

// Manages reading and writing JSON files to the application data folder. This
// listens to the `save-json` IPC event.

import {app} from 'electron';
import {readJson, writeJson} from 'fs-extra';
import {join} from 'path';

/**
 * Returns a promise resolving to the contents of a JSON file in the app data
 * folder. The promise rejects if there are any problems reading the file,
 * including if the file does not exist.
 */
export function loadJsonFile(filename: string) {
	return readJson(join(app.getPath('userData'), filename));
}

/**
 * Saves an object to JSON in the app data folder. Returns a promise when done.
 */
export function saveJsonFile(filename: string, data: any) {
	return writeJson(join(app.getPath('userData'), filename), data);
}
