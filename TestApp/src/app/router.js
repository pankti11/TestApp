"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var app_component_editor_1 = require("./editor/app.component.editor");
var app_menuComponent_1 = require("./menu/app.menuComponent");
var app_home_component_1 = require("./home/app.home.component");
var appRoutes = [
    { path: 'menu', component: app_menuComponent_1.MenuComponent },
    { path: 'editor', component: app_component_editor_1.EditorComponent },
    { path: 'home', component: app_home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=router.js.map