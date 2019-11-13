import { Common } from './plugin-tutorial.common';
import * as application from "tns-core-modules/application";

export class PluginTutorial extends Common {
    get() {
        var PackageManager = android.content.pm.PackageManager;
        var pkg = application.android.context.getPackageManager().getPackageInfo(application.android.context.getPackageName(),
          PackageManager.GET_META_DATA);
        return pkg.versionName;
      }
}
