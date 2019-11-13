import { Common } from './plugin-tutorial.common';

export class PluginTutorial extends Common {
    get() {
        var version = NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
        return version;
    }
}
