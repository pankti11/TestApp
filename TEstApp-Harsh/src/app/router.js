"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var app_home_component_1 = require("./home/app.home.component");
var app_mainpage_component_1 = require("./app.mainpage/app.mainpage.component");
var appRoutes = [
    { path: 'home', component: app_home_component_1.HomeComponent },
    { path: 'data', component: app_mainpage_component_1.MainPageComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=router.js.map