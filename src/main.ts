// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

platformBrowserDynamic().bootstrapModule(AppModule);

// platformBrowserDynamic().bootstrapModule()方法来编译启用AppModule模块
// 根据当前的运行环境，如操作系统、浏览器，来初始化一个运行环境，然后从这个环境里面运行AppModule。
