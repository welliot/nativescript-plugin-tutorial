import { Observable } from "tns-core-modules/data/observable";
import { PluginTutorial } from "nativescript-plugin-tutorial";

export class HomeViewModel extends Observable {

    private _message: string;
    private pluginTutorial : PluginTutorial;
    public greeting: string;

    constructor() {
        super(); 
        this.pluginTutorial = new PluginTutorial();
        this.message = this.pluginTutorial.get();
        this.greeting = this.pluginTutorial.greet();
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
        this.notifyPropertyChange('message', value);
    }
}
