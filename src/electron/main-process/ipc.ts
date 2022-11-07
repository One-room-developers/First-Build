import {app, dialog, ipcMain} from 'electron';
import { debounce, DebouncedFunc } from 'lodash';
import {i18n} from './locales';
import {saveJsonFile} from './json-file';
import { openWithTempFile } from './open-with-temp-file';