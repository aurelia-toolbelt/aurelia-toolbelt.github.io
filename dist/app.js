(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("main.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function configure(aurelia) {
    return __awaiter(this, void 0, void 0, function () {
        var option;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    option = {
                        closeButton: true
                    };
                    aurelia.use
                        .standardConfiguration()
                        .developmentLogging()
                        .plugin('aurelia-toolbelt')
                        .plugin('aurelia-toolbelt/services/jquery/toastr', {
                        progressBar: false, preventDuplicates: true, positionClass: 'toast-bottom-left'
                    });
                    return [4, aurelia.start()];
                case 1:
                    _a.sent();
                    return [4, aurelia.setRoot('app')];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
}
exports.configure = configure;
//# sourceMappingURL=main.js.map
});
___scope___.file("app.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("app.css", "body {\n  margin: 0;\n  font-family: 'tahoma';\n  font-size: 13px;\n}\n\n.container-fluid {\n  /* margin-top: 50px !important; */\n  padding: 50px;\n}\n\n\n/* \n.aurelia-color {\n  color: #753B85;\n} */\n")
});
___scope___.file("app.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <require from=\"./components/main-header\"></require>\n  <require from=\"./components/nav-bar\"></require>\n  <require from='bootstrap/dist/css/bootstrap.css'></require>\n\n  <require from=\"./app.css\"></require>\n\n  <link href=\"${selectedTheme.path}.min.css\" rel=\"stylesheet\">\n\n  <aut-nprogress loading.bind=\"router.isNavigating\" color=\"#753B85\"></aut-nprogress>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <main-header themes.bind=\"themes\" theme.bind=\"selectedTheme\" router.bind=\"router\"></main-header>\n    </div>\n  </div>\n  <div class=\"row\">\n\n    <div class=\"container-fluid\">\n      <router-view>\n\n      </router-view>\n    </div>\n\n    <!-- </div> -->\n\n\n\n    <aut-scrollup style=\"background-color: #753B85;\" class=\"btn-info\" threshold=\"1000\">\n\n    </aut-scrollup>\n\n    <!-- <main-footer></main-footer> -->\n</template>\n"
});
___scope___.file("app.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_event_aggregator_1 = require("aurelia-event-aggregator");
var aurelia_pal_1 = require("aurelia-pal");
var aurelia_toolbelt_1 = require("aurelia-toolbelt");
var Theme = (function () {
    function Theme() {
    }
    return Theme;
}());
var App = (function () {
    function App(eventAggregator, bsService) {
        this.bsService = bsService;
        this.rate = 3;
        this.themes = [
            { name: 'aurelia-toolbelt', path: '/bootswatch/aurelia-toolbelt' },
            { name: 'bootstrap', path: '/bootswatch/bootstrap' },
            { name: 'bootstrap-rtl', path: '/bootswatch/bootstrap-rtl' },
            { name: 'cerulean', path: '/bootswatch/cerulean' },
            { name: 'cosmo', path: '/bootswatch/cosmo' },
            { name: 'cyborg', path: '/bootswatch/cyborg' },
            { name: 'darkly', path: '/bootswatch/darkly' },
            { name: 'litera', path: '/bootswatch/litera' },
            { name: 'lumen', path: '/bootswatch/lumen' },
            { name: 'lux', path: '/bootswatch/lux' },
            { name: 'minty', path: '/bootswatch/minty' },
            { name: 'sandstone', path: '/bootswatch/sandstone' },
            { name: 'simplex', path: '/bootswatch/simplex' },
            { name: 'sketchy', path: '/bootswatch/sketchy' },
            { name: 'slate', path: '/bootswatch/slate' },
            { name: 'spacelab', path: '/bootswatch/spacelab' },
            { name: 'superhero', path: '/bootswatch/superhero' },
            { name: 'united', path: '/bootswatch/united' },
            { name: 'yeti', path: '/bootswatch/yeti' }
        ];
    }
    App.prototype.configureRouter = function (config, router) {
        config.map([
            {
                route: '', redirect: 'get-started'
            },
            {
                route: 'get-started',
                name: 'get-started',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./routes/get-started'),
                nav: true,
                title: 'Get Started',
                settings: { auth: false, navigation: [] }
            },
            {
                route: ['bootstrap'],
                name: 'bootstrap',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./routes/bootstrap-route'),
                nav: true,
                title: 'Bootstrap',
                settings: {
                    auth: false, navigation: [
                        {
                            route: 'alert',
                            title: 'Alert'
                        },
                        {
                            route: 'badge',
                            title: 'Badge'
                        },
                        {
                            route: 'breadcrumb',
                            title: 'Breadcrumb'
                        },
                        {
                            route: 'buttons',
                            title: 'Buttons'
                        },
                        {
                            route: 'button-groups',
                            title: 'Button Groups'
                        },
                        {
                            route: 'card',
                            title: 'Card'
                        },
                        {
                            route: 'carousel',
                            title: 'Carousel'
                        }, {
                            route: 'collapse',
                            title: 'Collapse'
                        },
                        {
                            route: 'dropdown',
                            title: 'Dropdowns'
                        },
                        {
                            route: 'float-input',
                            title: 'Float Input'
                        },
                        {
                            route: 'input-group',
                            title: 'Input Group'
                        },
                        {
                            route: 'jumbotron', title: 'Jumbotron'
                        },
                        {
                            route: 'list-group', title: 'List Group'
                        },
                        {
                            route: 'modal', title: 'Modals'
                        },
                        {
                            route: 'navbar', title: 'Navbar'
                        },
                        {
                            route: 'navs', title: 'Navs'
                        },
                        {
                            route: 'password', title: 'Password'
                        },
                        {
                            route: 'progress', title: 'Progressbar'
                        },
                        {
                            route: 'star-rate', title: 'Star Rate'
                        },
                        {
                            route: 'scrollspy', title: 'Scrollspy'
                        },
                        {
                            route: 'toggle', title: 'Toggle'
                        },
                        {
                            route: 'tokenize', title: 'Tokenize'
                        },
                        {
                            route: 'tooltip', title: 'Tooltip'
                        },
                        {
                            route: 'popover', title: 'Popover'
                        },
                        {
                            route: 'pagination', title: 'Pagination'
                        }
                    ]
                }
            },
            {
                route: ['purejs'],
                name: 'purejs',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./routes/purejs-route'),
                nav: true,
                title: 'JS',
                settings: {
                    auth: false, navigation: [{
                            route: 'checkbox', title: 'Pretty Checkbox'
                        },
                        {
                            route: 'radio', title: 'Pretty Radio'
                        },
                        {
                            route: 'markdown', title: 'Mark Down'
                        },
                        {
                            route: 'masked-input', title: 'Masked Input'
                        },
                        {
                            route: 'microlink', title: 'Microlink'
                        }]
                }
            },
            {
                route: ['jquery'],
                name: 'jquery',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./routes/jquery-route'),
                nav: true,
                title: 'jQuery',
                settings: {
                    auth: false, navigation: [{
                            route: 'blockui', title: 'Block UI'
                        },
                        {
                            route: 'lazyimage', title: 'Lazy Image'
                        },
                        {
                            route: 'newsticker', title: 'News Ticker'
                        }]
                }
            }
        ]);
        this.router = router;
    };
    App.prototype.selectedThemeChanged = function (newValue) {
        localStorage.setItem('selectedTheme', JSON.stringify(newValue));
        this.bsService.update();
        aurelia_pal_1.DOM.injectStyles("\n    .toast {\n      background-color: " + this.bsService.primary + " !important;\n    }\n    .toast-success {\n      background-color: " + this.bsService.success + " !important;\n    }\n    .toast-error {\n      background-color: " + this.bsService.danger + " !important;\n    }\n    .toast-info {\n      background-color: " + this.bsService.info + " !important;\n    }\n    .toast-warning {\n      background-color: " + this.bsService.warning + " !important;\n    }\n    #toast-container > div {\n      -moz-border-radius: 0px !important;\n      -webkit-border-radius: 0px !important;\n      border-radius: 0px !important;\n    }\n    ");
    };
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Theme)
    ], App.prototype, "selectedTheme", void 0);
    App = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, aurelia_toolbelt_1.BootstrapTypographyService),
        __metadata("design:paramtypes", [typeof (_a = typeof aurelia_event_aggregator_1.EventAggregator !== "undefined" && aurelia_event_aggregator_1.EventAggregator) === "function" && _a || Object, typeof (_b = typeof aurelia_toolbelt_1.BootstrapTypographyService !== "undefined" && aurelia_toolbelt_1.BootstrapTypographyService) === "function" && _b || Object])
    ], App);
    return App;
    var _a, _b;
}());
exports.App = App;
//# sourceMappingURL=app.js.map
});
___scope___.file("components/main-footer.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <span class=\"text-muted\">Place sticky footer content here.</span>\n    </div>\n  </footer>\n</template>"
});
___scope___.file("components/main-header.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <abt-navbar style=\"z-index:1021\" class=\"bg-light\">\n    <abt-navbar-brand href=\"https://github.com/shahabganji/aurelia-toolbelt\" class=\" text-info\">\n      <img src=\"./logo-navbar.png\"> aurelia-toolbelt\n    </abt-navbar-brand>\n    <abt-navbar-toggler></abt-navbar-toggler>\n    <abt-navbar-collapser>\n      <abt-navbar-nav class=\"mr-auto\">\n        <abt-navbar-link repeat.for=\"row of router.navigation\" href.bind=\"row.href\" class=\"${row.isActive ? 'active' : ''}\" if.bind=\"row.settings.navigation.length===0\">\n          ${row.title}\n        </abt-navbar-link>\n        <abt-navbar-dropdown full-width repeat.for=\"row of router.navigation\" title=\"${row.title}\" if.bind=\"row.settings.navigation.length> 0\">\n          <abt-navbar-dropdown-mega-item>\n            <div class=\"col-sm-2\" repeat.for=\"subRow of row.settings.navigation\">\n              <abt-navbar-link href=\"${row.href}/${subRow.route}\">\n                ${subRow.title}\n              </abt-navbar-link>\n            </div>\n          </abt-navbar-dropdown-mega-item>\n        </abt-navbar-dropdown>\n      </abt-navbar-nav>\n    </abt-navbar-collapser>\n\n    <form class=\"form-inline my-2 my-lg-0\">\n      <label>\n        <a href=\"https://bootswatch.com/\" class=\"text-dark\">Bootswatch themes</a>\n        &nbsp;&nbsp;\n        <abt-dropdown value.bind=\"theme\" class=\"mr-2\" title=\"${theme.name}\" align-right>\n          <abt-dropdown-item repeat.for=\"th of themes\" model.bind=\"th\">${th.name}</abt-dropdown-item>\n        </abt-dropdown>\n      </label>\n    </form>\n\n  </abt-navbar>\n\n\n\n\n</template>\n"
});
___scope___.file("components/main-header.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_router_1 = require("aurelia-router");
var Theme = (function () {
    function Theme() {
    }
    return Theme;
}());
var MainHeader = (function () {
    function MainHeader() {
    }
    MainHeader.prototype.bind = function () {
        var storedTheme = JSON.parse(localStorage.getItem('selectedTheme'));
        if (!storedTheme) {
            this.theme = this.themes[0];
            return;
        }
        var index = this.themes.findIndex(function (x) { return x.path === storedTheme.path; });
        if (index === -1) {
            this.theme = this.themes[0];
            return;
        }
        this.theme = this.themes[index];
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", typeof (_a = typeof aurelia_router_1.Router !== "undefined" && aurelia_router_1.Router) === "function" && _a || Object)
    ], MainHeader.prototype, "router", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], MainHeader.prototype, "themes", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Theme)
    ], MainHeader.prototype, "theme", void 0);
    return MainHeader;
    var _a;
}());
exports.MainHeader = MainHeader;
//# sourceMappingURL=main-header.js.map
});
___scope___.file("components/nav-bar.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("components/nav-bar.css", ".sidebar-nav {\n    background: #212529;\n    height: 1000px;\n}\n.sidebar-nav ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    background: #343a40;\n}\n\n.sidebar-nav .metismenu {\n    background: #212529;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n\n.sidebar-nav .metismenu li + li {\n  margin-top: 5px;\n}\n\n.sidebar-nav .metismenu li:first-child {\n  margin-top: 5px;\n}\n.sidebar-nav .metismenu li:last-child {\n  margin-bottom: 5px;\n}\n\n\n.sidebar-nav .metismenu > li {\n/*    -webkit-box-flex: 1;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;*/\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    position: relative;\n}\n.sidebar-nav .metismenu a {\n    position: relative;\n    display: block;\n    padding: 13px 15px;\n    color: #adb5bd;\n    outline-width: 0;\n    transition: all .3s ease-out;\n}\n\n.sidebar-nav .metismenu ul a {\n    padding: 10px 15px 10px 30px;\n}\n\n.sidebar-nav .metismenu ul ul a {\n    padding: 10px 15px 10px 45px;\n}\n\n.sidebar-nav .metismenu a:hover,\n.sidebar-nav .metismenu a:focus,\n.sidebar-nav .metismenu a:active {\n    color: #f8f9fa;\n    text-decoration: none;\n    background: #0b7285;\n}")
});
___scope___.file("components/nav-bar.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template bindable=\"router\">\n\n  <require from=\"./nav-bar.css\"></require>\n\n  <nav class=\"sidebar-nav\">\n\n    <aut-metis-menu show-menu.call=\"showMenu()\">\n\n      <aut-metis-menu-group active=\"true\" icon-class=\"sidebar-nav-item-icon fa fa-github fa-lg\" text=\"Components\">\n        <aut-metis-menu-item repeat.for=\"r of router.navigation\" if.bind=\"r.settings.isComponent\" href=\"${r.href}\">\n          <span class=\"sidebar-nav-item-icon fa fa-code-fork\"></span>\n          ${r.title}\n        </aut-metis-menu-item>\n      </aut-metis-menu-group>\n\n\n      <aut-metis-menu-group text=\"Services\">\n        <aut-metis-menu-item href=\"#\">\n          <span class=\"sidebar-nav-item-icon fa fa-code-fork\"></span> Fork\n        </aut-metis-menu-item>\n        <aut-metis-menu-item href=\"#\">\n          <span class=\"sidebar-nav-item-icon fa fa-star\"></span> Star\n        </aut-metis-menu-item>\n        <aut-metis-menu-item href=\"#\">\n          <span class=\"sidebar-nav-item-icon fa fa-exclamation-triangle\"></span> Issues\n        </aut-metis-menu-item>\n      </aut-metis-menu-group>\n\n    </aut-metis-menu>\n\n  </nav>\n\n</template>\n"
});
___scope___.file("components/nav-bar.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_router_1 = require("aurelia-router");
var aurelia_framework_1 = require("aurelia-framework");
var NavBar = (function () {
    function NavBar(router) {
        this.router = router;
    }
    NavBar.prototype.showMenu = function () {
        alert('hi');
    };
    NavBar = __decorate([
        aurelia_framework_1.inject(aurelia_router_1.Router),
        __metadata("design:paramtypes", [typeof (_a = typeof aurelia_router_1.Router !== "undefined" && aurelia_router_1.Router) === "function" && _a || Object])
    ], NavBar);
    return NavBar;
    var _a;
}());
exports.NavBar = NavBar;
//# sourceMappingURL=nav-bar.js.map
});
___scope___.file("components/test.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<!-- menu with submenu -->\n<nav>\n  <ul id=\"menu\" class=\"side-nav metismenu menu vertical animated fade\">\n    <li>\n      <a href=\"#\" aria-expanded=\"false\">Link 1</a>\n    </li>\n    <li class=\"\">\n      <a href=\"#\" aria-expanded=\"false\">Menu 1\n        <span class=\"badge alert float-right\">3\n          <span></span>\n        </span>\n      </a>\n      <ul class=\"nested vertical menu collapse\" aria-expanded=\"false\" style=\"height: 0px;\">\n        <li>\n          <a href=\"#\">Link 1.1</a>\n        </li>\n        <li>\n          <a href=\"#\">Link 1.2</a>\n        </li>\n        <li>\n          <a href=\"#\">Link 1.3</a>\n        </li>\n      </ul>\n    </li>\n    <li class=\"active\">\n      <a href=\"#\" aria-expanded=\"true\">Menu 2\n        <span class=\"badge warning float-right\">1\n          <span></span>\n        </span>\n      </a>\n      <ul class=\"nested vertical menu collapse in\" aria-expanded=\"true\" style=\"\">\n        <li class=\"\">\n          <a href=\"#\" aria-expanded=\"false\">Menu 2.1\n            <span class=\"badge danger float-right\">3\n              <span></span>\n            </span>\n          </a>\n          <ul class=\"nested vertical menu collapse\" aria-expanded=\"false\" style=\"height: 0px;\">\n            <li>\n              <a href=\"#\">Link 2.1.1</a>\n            </li>\n            <li>\n              <a href=\"#\">Link 2.1.2</a>\n            </li>\n            <li>\n              <a href=\"#\">Link 2.1.3</a>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <a href=\"#\" aria-expanded=\"false\">Link 2.2</a>\n        </li>\n        <li class=\"active\">\n          <a href=\"#\" aria-expanded=\"true\">Menu 2.2\n            <span class=\"badge success float-right\">3\n              <span></span>\n            </span>\n          </a>\n          <ul class=\"nested vertical menu collapse in\" aria-expanded=\"true\" style=\"\">\n            <li>\n              <a href=\"#\">Link 2.2.1</a>\n            </li>\n            <li>\n              <a href=\"#\">Link 2.2.2</a>\n            </li>\n            <li>\n              <a href=\"#\">Link 2.2.3</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li>\n      <a href=\"#\" aria-expanded=\"false\">Link 4</a>\n    </li>\n  </ul>\n</nav>\n<!-- ****************************************************************************************************************************************************************** -->\n\n<!-- Vertical hover -->\n<nav class=\"sidebar-nav\">\n  <ul class=\"metismenu\" id=\"menu1\">\n    <li>\n      <a class=\"has-arrow\" href=\"#\" aria-expanded=\"false\">\n        <span class=\"fa fa-fw fa-github fa-lg\"></span>\n        metisMenu\n      </a>\n      <ul aria-expanded=\"false\" class=\"collapse\">\n        <li>\n          <a href=\"https://github.com/onokumus/metisMenu\">\n            <span class=\"fa fa-fw fa-code-fork\"></span> Fork\n          </a>\n        </li>\n        <li>\n          <a href=\"https://github.com/onokumus/metisMenu\">\n            <span class=\"fa fa-fw fa-star\"></span> Star\n          </a>\n        </li>\n        <li>\n          <a href=\"https://github.com/onokumus/metisMenu/issues\">\n            <span class=\"fa fa-fw fa-exclamation-triangle\"></span> Issues\n          </a>\n        </li>\n      </ul>\n    </li>\n    <li class=\"\">\n      <a class=\"has-arrow\" href=\"#\" aria-expanded=\"false\">Menu 0</a>\n      <ul aria-expanded=\"false\" class=\"collapse\" style=\"height: 0px;\">\n        <li>\n          <a href=\"#\">item 0.1</a>\n        </li>\n        <li>\n          <a href=\"#\">item 0.2</a>\n        </li>\n        <li>\n          <a href=\"http://onokumus.com\">onokumus</a>\n        </li>\n        <li>\n          <a href=\"#\">item 0.4</a>\n        </li>\n      </ul>\n    </li>\n    <li id=\"removable\" class=\"\">\n      <a class=\"has-arrow\" href=\"#\" aria-expanded=\"false\">Menu 1</a>\n      <ul aria-expanded=\"false\" class=\"collapse\" style=\"height: 0px;\">\n        <li>\n          <a href=\"#\">item 1.1</a>\n        </li>\n        <li>\n          <a href=\"#\">item 1.2</a>\n        </li>\n        <li>\n          <a class=\"has-arrow\" href=\"#\" aria-expanded=\"false\">Menu 1.3</a>\n          <ul aria-expanded=\"false\" class=\"collapse\">\n            <li>\n              <a href=\"#\">item 1.3.1</a>\n            </li>\n            <li>\n              <a href=\"#\">item 1.3.2</a>\n            </li>\n            <li>\n              <a href=\"#\">item 1.3.3</a>\n            </li>\n            <li>\n              <a href=\"#\">item 1.3.4</a>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <a href=\"#\">item 1.4</a>\n        </li>\n        <li>\n          <a class=\"has-arrow\" href=\"#\" aria-expanded=\"false\">Menu 1.5</a>\n          <ul aria-expanded=\"false\" class=\"collapse\">\n            <li>\n              <a href=\"#\">item 1.5.1</a>\n            </li>\n            <li>\n              <a href=\"#\">item 1.5.2</a>\n            </li>\n            <li>\n              <a href=\"#\">item 1.5.3</a>\n            </li>\n            <li>\n              <a href=\"#\">item 1.5.4</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li class=\"\">\n      <a class=\"has-arrow\" href=\"#\" aria-expanded=\"false\">Menu 2</a>\n      <ul aria-expanded=\"false\" class=\"collapse\" style=\"height: 0px;\">\n        <li>\n          <a href=\"#\">item 2.1</a>\n        </li>\n        <li>\n          <a href=\"#\">item 2.2</a>\n        </li>\n        <li>\n          <a href=\"#\">item 2.3</a>\n        </li>\n        <li>\n          <a href=\"#\">item 2.4</a>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</nav>\n<!-- ****************************************************************************************************************************************************************** -->\n\n\n<!-- horizontal -->\n\n<ul class=\"metismenu\" id=\"menu2\">\n  <li class=\"\">\n    <a class=\"has-arrow\" href=\"#\" aria-expanded=\"false\">\n      <span class=\"fa fa-fw fa-github fa-lg\"></span>\n      metisMenu\n    </a>\n    <ul aria-expanded=\"false\" class=\"collapse\" style=\"height: 0px;\">\n      <li>\n        <a href=\"https://github.com/onokumus/metisMenu\">\n          <span class=\"fa fa-fw fa-code-fork\"></span> Fork\n        </a>\n      </li>\n      <li>\n        <a href=\"https://github.com/onokumus/metisMenu\">\n          <span class=\"fa fa-fw fa-star\"></span> Star\n        </a>\n      </li>\n      <li>\n        <a href=\"https://github.com/onokumus/metisMenu/issues\">\n          <span class=\"fa fa-fw fa-exclamation-triangle\"></span> Issues\n        </a>\n      </li>\n    </ul>\n  </li>\n  <li class=\"\">\n    <a class=\"has-arrow\" href=\"#\" aria-expanded=\"false\">Menu 0</a>\n    <ul aria-expanded=\"false\" class=\"collapse\" style=\"height: 0px;\">\n      <li>\n        <a href=\"#\">item 0.1</a>\n      </li>\n      <li>\n        <a href=\"#\">item 0.2</a>\n      </li>\n      <li>\n        <a href=\"http://onokumus.com\">onokumus</a>\n      </li>\n      <li>\n        <a href=\"#\">item 0.4</a>\n      </li>\n    </ul>\n  </li>\n  <li id=\"removable\">\n    <a class=\"has-arrow\" href=\"#\" aria-expanded=\"false\">Menu 1</a>\n    <ul aria-expanded=\"false\" class=\"collapse\">\n      <li>\n        <a href=\"#\">item 1.1</a>\n      </li>\n      <li>\n        <a href=\"#\">item 1.2</a>\n      </li>\n      <li>\n        <a class=\"has-arrow\" href=\"#\" aria-expanded=\"false\">Menu 1.3</a>\n        <ul aria-expanded=\"false\" class=\"collapse\">\n          <li>\n            <a href=\"#\">item 1.3.1</a>\n          </li>\n          <li>\n            <a href=\"#\">item 1.3.2</a>\n          </li>\n          <li>\n            <a href=\"#\">item 1.3.3</a>\n          </li>\n          <li>\n            <a href=\"#\">item 1.3.4</a>\n          </li>\n        </ul>\n      </li>\n      <li>\n        <a href=\"#\">item 1.4</a>\n      </li>\n      <li>\n        <a class=\"has-arrow\" href=\"#\" aria-expanded=\"false\">Menu 1.5</a>\n        <ul aria-expanded=\"false\" class=\"collapse\">\n          <li>\n            <a href=\"#\">item 1.5.1</a>\n          </li>\n          <li>\n            <a href=\"#\">item 1.5.2</a>\n          </li>\n          <li>\n            <a href=\"#\">item 1.5.3</a>\n          </li>\n          <li>\n            <a href=\"#\">item 1.5.4</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n  <li class=\"\">\n    <a class=\"has-arrow\" href=\"#\" aria-expanded=\"false\">Menu 2</a>\n    <ul aria-expanded=\"false\" class=\"collapse\" style=\"height: 0px;\">\n      <li>\n        <a href=\"#\">item 2.1</a>\n      </li>\n      <li>\n        <a href=\"#\">item 2.2</a>\n      </li>\n      <li>\n        <a href=\"#\">item 2.3</a>\n      </li>\n      <li>\n        <a href=\"#\">item 2.4</a>\n      </li>\n    </ul>\n  </li>\n</ul>\n\n<!-- ****************************************************************************************************************************************************************** -->\n"
});
___scope___.file("extra.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fuse = require("fuse.js");
var hl = require('highlight.js');
require("bootstrap/dist/js/bootstrap.bundle.js");
require("bootstrap/dist/css/bootstrap.css");
require("metismenu/dist/metismenu.css");
require("nprogress/nprogress.css");
require("toastr/build/toastr.css");
require("font-awesome/css/font-awesome.css");
require("highlight.js/styles/atom-one-dark.css");
require("pretty-checkbox/dist/pretty-checkbox.css");
require("aureliatoolbelt-thirdparty/bootstrap-tokenize2/tokenize2.css");
require("aureliatoolbelt-thirdparty/bootstrap-tokenize2/tokenize2.js");
require("aureliatoolbelt-thirdparty/bootstrap-toggle/bootstrap-toggle.js");
require("aureliatoolbelt-thirdparty/jquery.blockUI/jquery.blockUI.js");
var ml = require('aureliatoolbelt-thirdparty/microlink/microlink.js');
var x = fuse;
var hljs = hl;
//# sourceMappingURL=extra.js.map
});
___scope___.file("routes/bootstrap-route.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <!-- <require from=\"./../components/nav-bar\"></require> -->\n\n  <div class=\"row\">\n    <!-- <div class=\"col-sm-2\">\n\n        <nav-bar router.bind=\"router\">\n\n        </nav-bar>\n      \n    </div> -->\n    <div class=\"col-sm-12\">\n      <br />\n      <div class=\"main no-select container\">\n        <router-view></router-view>\n      </div>\n\n    </div>\n  </div>\n\n</template>\n"
});
___scope___.file("routes/bootstrap-route.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var BootstrapRoute = (function () {
    function BootstrapRoute() {
    }
    BootstrapRoute.prototype.configureRouter = function (config, router) {
        var routes = [
            {
                route: ['', 'alert'],
                name: 'bootstrap-alert',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/alert'),
                nav: true,
                title: 'Alert',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['badge'],
                name: 'bootstrap-badge',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/badge'),
                nav: true,
                title: 'Badge',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['buttons'],
                name: 'bootstrap-buttons',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/buttons'),
                nav: true,
                title: 'Buttons',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['button-groups'],
                name: 'bootstrap-button-groups',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/button-groups'),
                nav: true,
                title: 'Button Groups',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['breadcrumb'],
                name: 'bootstrap-breadcrumb',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/breadcrumb'),
                nav: true,
                title: 'Breadcrumb',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['card'],
                name: 'bootstrap-card',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/card'),
                nav: true,
                title: 'Card',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['carousel'],
                name: 'bootstrap-carousel',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/carousel'),
                nav: true,
                title: 'Carousel',
                settings: { auth: false, isComponent: true }
            }, {
                route: ['collapse'],
                name: 'bootstrap-collapse',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/collapse'),
                nav: true,
                title: 'Collapse',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['dropdown'],
                name: 'bootstrap-dropdown',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/dropdown'),
                nav: true,
                title: 'Dropdowns',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['float-input'],
                name: 'bootstrap-floatinput',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/float-input'),
                nav: true,
                title: 'Float Input',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['input-group'],
                name: 'bootstrap-input-group',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/input-group'),
                nav: true,
                title: 'Input Group',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['jumbotron'],
                name: 'bootstrap-jumbotron',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/jumbotron'),
                nav: true,
                title: 'Jumbotron',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['list-group'],
                name: 'bootstrap-list-group',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/list-group'),
                nav: true,
                title: 'List Group',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['modal'],
                name: 'bootstrap-modal',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/modal'),
                nav: true,
                title: 'Modals',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['navbar'],
                name: 'bootstrap-navbar',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/navbar'),
                nav: true,
                title: 'Navbar',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['navs'],
                name: 'bootstrap-navs',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/navs'),
                nav: true,
                title: 'Navs',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['password'],
                name: 'bootstrap-password',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/password'),
                nav: true,
                title: 'Password',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['progress'],
                name: 'bootstrap-progress',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/progress'),
                nav: true,
                title: 'Progressbar',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['star-rate'],
                name: 'bootstrap-star-rate',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/rate'),
                nav: true,
                title: 'Star Rate',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['scrollspy'],
                name: 'bootstrap-scrollspy',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/scrollspy'),
                nav: true,
                title: 'Scrollspy',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['toggle'],
                name: 'bootstrap-toggle',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/toggle'),
                nav: true,
                title: 'Toggle',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['tokenize'],
                name: 'bootstrap-tokenize',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/tokenize'),
                nav: true,
                title: 'Tokenize',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['tooltip'],
                name: 'bootstrap-tooltip',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/tooltip'),
                nav: true,
                title: 'Tooltip',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['popover'],
                name: 'bootstrap-popover',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/popover'),
                nav: true,
                title: 'Popover',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['pagination'],
                name: 'bootstrap-pagination',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/pagination'),
                nav: true,
                title: 'Pagination',
                settings: { auth: false, isComponent: true }
            }
        ];
        var direction = 'asc';
        var directionFactor = direction === 'desc' ? -1 : 1;
        routes.sort(function (current, next) {
            var currentValue = current.title;
            var nextValue = next.title;
            if (currentValue > nextValue) {
                return directionFactor;
            }
            else if (currentValue < nextValue) {
                return -directionFactor;
            }
            return 0;
        });
        config.map(routes);
        this.router = router;
    };
    return BootstrapRoute;
}());
exports.BootstrapRoute = BootstrapRoute;
//# sourceMappingURL=bootstrap-route.js.map
});
___scope___.file("routes/bootstrap/alert.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <style>\n    .slow .toggle-group {\n      transition: left 0.7s;\n      -webkit-transition: left 0.7s;\n    }\n\n  </style>\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>Alerts\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/alert\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n    Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n\n    <aut-mark-down src=\"./docs/components/bootstrap/alert/usage.md\">\n    </aut-mark-down>\n\n  </fieldset>\n\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Examples\n    </legend>\n    <p>\n\n      Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the\n      <b>eight required\n      </b> contextual types (e.g., success)\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n        <abt-alert>\n          <strong>Hello there!</strong> I am the default alert.\n        </abt-alert>\n\n        <abt-alert type=\"success\">\n          <strong>Well done!</strong> This is a success alert for you.\n        </abt-alert>\n\n        <abt-alert type=\"secondary\">\n          <strong>Take care!</strong> This is a secondary alert which need your attention.\n        </abt-alert>\n\n        <abt-alert type=\"warning\">\n          <strong>Attention!</strong> Wanna show a warning, use this one.\n        </abt-alert>\n\n\n        <abt-alert type=\"danger\">\n          <strong>Oh no!</strong> Something is going wrong.\n        </abt-alert>\n\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/alert/basic.md\">\n\n        </aut-mark-down>\n      </abt-card-footer>\n\n    </abt-card>\n\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Link color\n    </legend>\n\n    <abt-card>\n      <abt-card-body>\n        <abt-alert>\n          <strong>Hello there!</strong> I am the default alert with a\n          <abt-alert-link href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/alert\">great link</abt-alert-link>to alert repository.\n        </abt-alert>\n\n        <abt-alert type=\"success\">\n          <strong>Well done!</strong> This is a success alert for you with a\n          <abt-alert-link href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/alert\">great link</abt-alert-link>to alert repository..\n        </abt-alert>\n\n        <abt-alert type=\"secondary\">\n          <strong>Take care!</strong> This is a secondary alert which need your attention and with a\n          <abt-alert-link href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/alert\">great link</abt-alert-link>to alert repository.\n        </abt-alert>\n\n        <abt-alert type=\"warning\">\n          <strong>Attention!</strong> Wanna show a warning, use this one with a\n          <abt-alert-link href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/alert\">great link</abt-alert-link>to alert repository.\n        </abt-alert>\n\n        <abt-alert type=\"danger\">\n          <strong>Oh no!</strong> Something is going wrong with a\n          <abt-alert-link href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/alert\">great link</abt-alert-link>to alert repository.\n        </abt-alert>\n\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/alert/link-color.md\">\n        </aut-mark-down>\n      </abt-card-footer>\n    </abt-card>\n  </fieldset>\n\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Additional contents\n    </legend>\n    <p>\n      Alerts can also contain additional HTML elements like headings, paragraphs and dividers.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n        <abt-alert type=\"success\">\n          <abt-alert-heading>\n            <h4>Well done!</h4>\n          </abt-alert-heading>\n          <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so\n            that you can see how spacing within an alert works with this kind of content.</p>\n          <hr>\n          <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n        </abt-alert>\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/alert/additional.md\">\n\n        </aut-mark-down>\n      </abt-card-footer>\n    </abt-card>\n\n  </fieldset>\n\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Dissmissing\n    </legend>\n    <p>\n      Alerts can also contain additional HTML elements like headings, paragraphs and dividers.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n        <abt-alert type=\"warning\" dismissible.bind=\"showDismissible\">\n          <strong>Holy guacamole!</strong> You should check in on some of those fields below.\n        </abt-alert>\n        <abt-alert type=\"success\" dismissible animate>\n          <strong>Awesome!</strong> Your data saved successfully.\n        </abt-alert>\n        <hr />\n        <abt-toggle size=\"small\" css=\"slow\" on-style=\"success\" off-style=\"secondary\" checked.bind=\"showDismissible\">\n          Toggle dismissible\n          </aut-toggle>\n      </abt-card-body>\n      <abt-card-footer>\n\n        <abt-navs tabs id=\"navs-dismissing\">\n          <abt-nav-item id=\"tab-template-dismiss\" title=\"View\">\n            <aut-mark-down src=\"./docs/components/bootstrap/alert/dismissing.md\">\n\n            </aut-mark-down>\n          </abt-nav-item>\n          <abt-nav-item id=\"tab-viewmodel-dismiss\" title=\"ViewModel\">\n            <aut-mark-down src=\"./docs/components/bootstrap/alert/dismissing-ts.md\">\n\n            </aut-mark-down>\n          </abt-nav-item>\n        </abt-navs>\n\n      </abt-card-footer>\n    </abt-card>\n\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Properties and Events\n    </legend>\n\n    <p>\n      <a href=\"http://getbootstrap.com/docs/4.0/components/alerts/#events\">\n        Alters in bootstrap\n      </a> provide two kinds of events, here we provide an experimental four additional events, in which you can return a\n      boolean or a promise which resolves a boolean, if the boolean is false it will ignore triggering the event.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n        <abt-button bs-type=\"secondary\" click.call=\"toggleAlert()\">\n          Show/Hide alerts\n        </abt-button>\n        <br />\n        <br />\n        <abt-alert type=\"secondary\" show-alert.bind=\"show_hide\" bs-show.call=\"onShow(target)\">\n          This is an animated secondary alert which resolves its onShow promise to false:\n        </abt-alert>\n\n        <abt-alert type=\"primary\" animate=\"false\" show-alert.bind=\"show_hide\">\n          This is a non-animated primary alert.\n        </abt-alert>\n      </abt-card-body>\n\n      <abt-card-footer>\n\n        <abt-navs tabs id=\"navs-events\">\n          <abt-nav-item id=\"tab-template-ebents\" title=\"View\">\n            <aut-mark-down src=\"./docs/components/bootstrap/alert/events-properties.md\">\n\n            </aut-mark-down>\n          </abt-nav-item>\n          <abt-nav-item id=\"tab-viewmodel-events\" title=\"ViewModel\">\n            <aut-mark-down src=\"./docs/components/bootstrap/alert/events-properties-ts.md\">\n\n            </aut-mark-down>\n          </abt-nav-item>\n        </abt-navs>\n\n      </abt-card-footer>\n    </abt-card>\n\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              abt-alert\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">animate</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">true</td>\n          <td>Alert will be fade in or out.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Applies the your custom css class on alert</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">dismissible</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>A\n            <code>true/false</code> value which indicates whether to show the dismissible cross button or not.</td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">show-alert</td>\n          <td class=\"text-nowrap\">boolean</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>\n            Changes in the value of this property will enable you to handle four extra events for alert,\n            <code>bs-show</code>,\n            <code>bs-shown</code>,\n            <code>bs-hide</code>, and\n            <code>bs-hidden</code>. Two of which,\n            <code>bs-show</code> and\n            <code>bs-hide</code> will cancel the process if the method bound to them returns\n            <i>\n              <code>\n                <b>false</b>\n              </code>\n            </i> or resolves a proise that returns so.\n\n            <hr />\n            <b>PS:</b>\n            <i>Bear in mind that such a behaviour does not exist in bootstrap; however, we would be grateful, if you send us\n              your feedback.</i>\n\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">size</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">md</td>\n          <td>Indicates the size for alert, values can be 'sm', 'md', and 'lg'</td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Css style attrinutes that you want to apply on the component.</td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">type</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">primary</td>\n          <td>The type of alert, contextual values of bootstrap,\n            <code>primary</code>,\n            <code>secondary</code>,\n            <code>info</code>,\n            <code>success</code>,\n            <code>warning</code>,\n            <code>danger</code>,\n            <code>light</code>, and\n            <code>dark</code>\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Events\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">bs-show</td>\n          <td class=\"text-nowrap\">Promise</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td>This event fires immediately when\n            <code>show-alert</code> changes to\n            <code>true</code>. if this event returns\n            <code>false</code>, or resolve a\n            <b>promise</b> that returns\n            <code>false</code>, the rest of the chain will be escaped.\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">bs-shown</td>\n          <td class=\"text-nowrap\">Promise</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td>This event fires immediately after\n            <code>bs-show</code> resolved or returned\n            <code>true</code>.\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">bs-hide</td>\n          <td class=\"text-nowrap\">Promise</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td>\n            <code>show-alert</code> changes to\n            <code>false</code>. if this event returns\n            <code>false</code>, or resolve a\n            <b>promise</b> that returns\n            <code>false</code>, the rest of the chain will be escaped.\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">bs-hidden</td>\n          <td class=\"text-nowrap\">Promise</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td>This event fires immediately after\n            <code>bs-hide</code> resolved or returned\n            <code>true</code>.\n          </td>\n        </tr>\n\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">bs-close</td>\n          <td class=\"text-nowrap\">Function</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td>This event fires immediately when the\n            <code>close</code> instance method is called.\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">bs-close</td>\n          <td class=\"text-nowrap\">Function</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td>This event is fired when the alert has been closed (will wait for CSS transitions to complete).\n          </td>\n        </tr>\n\n      </tbody>\n    </table>\n    <br>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-alert-link\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td scope=\"row\">disabled</td>\n          <td class=\"text-nowrap\">boolean</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Indicates whether the link should be active or not.\n          </td>\n        </tr>\n        <tr>\n          <td scope=\"row\">href</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>A url to link to another part of the page or web.\n            <hr />\n            <b>PS:</b>\n            <i>Bear in mind that you can use\n              <code>router-href</code> on\n              <code>abt-alert-link</code> to benefit from aurelia route engine.</i>\n          </td>\n        </tr>\n        <tr>\n          <td scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>The id of the element in the DOM.\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-alert-heading\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>The id of the element in the DOM.\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n  </fieldset>\n\n\n  <hr />\n\n</template>\n"
});
___scope___.file("routes/bootstrap/alert.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_toolbelt_1 = require("aurelia-toolbelt");
var Alert = (function () {
    function Alert(ts2) {
        this.ts2 = ts2;
        this.showDismissible = true;
        this.show_hide = true;
    }
    Alert.prototype.toggleAlert = function () {
        this.show_hide = !this.show_hide;
    };
    Alert.prototype.onShow = function (target) {
        console.log(target);
        this.ts2.info('Alert event triggered!', 'Hooray', {
            progressBar: true, preventDuplicates: true, positionClass: 'toast-bottom-left'
        });
        return false;
    };
    Alert = __decorate([
        aurelia_framework_1.inject(aurelia_toolbelt_1.ToastrService),
        __metadata("design:paramtypes", [typeof (_a = typeof aurelia_toolbelt_1.ToastrService !== "undefined" && aurelia_toolbelt_1.ToastrService) === "function" && _a || Object])
    ], Alert);
    return Alert;
    var _a;
}());
exports.Alert = Alert;
//# sourceMappingURL=alert.js.map
});
___scope___.file("routes/bootstrap/badge.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>Badges\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/badge\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n    Documentation and examples for badges, our small count and labeling component.\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n\n    <aut-mark-down src=\"./docs/components/bootstrap/badge/usage.md\">\n    </aut-mark-down>\n\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Examples\n    </legend>\n    <p>\n      Badges scale to match the size of the immediate parent element by using relative font sizing and em units, and also comes\n      in contextual variants throupgh\n      <code>type</code> attribute.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n\n        <h1>Example heading\n          <abt-badge>New</abt-badge>\n        </h1>\n        <h2>Example heading\n          <abt-badge type=\"secondary\">New</abt-badge>\n        </h2>\n        <h3>Example heading\n          <abt-badge type=\"info\">New</abt-badge>\n        </h3>\n        <h4>Example heading\n          <abt-badge type=\"success\">New</abt-badge>\n        </h4>\n        <h5>Example heading\n          <abt-badge type=\"warning\">New</abt-badge>\n        </h5>\n        <h6>Example heading\n          <abt-badge type=\"danger\">New</abt-badge>\n        </h6>\n        <h6 class=\"bg-dark text-light\">Example heading\n          <abt-badge type=\"light\">New</abt-badge>\n        </h6>\n        <h6>Example heading\n          <abt-badge type=\"dark\">New</abt-badge>\n        </h6>\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/badge/basic.md\">\n\n        </aut-mark-down>\n      </abt-card-footer>\n\n    </abt-card>\n\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Using alongside with buttons\n    </legend>\n    <p>\n\n      Badges can be used as part of links or buttons to provide a counter.\n    </p>\n\n    <p>\n      Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies.\n      While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the\n      content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers\n      at the end of a sentence, link, or button.\n    </p>\n    <p>\n      Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications),\n      consider including additional context with a visually hidden piece of additional text.\n    </p>\n\n\n    <abt-card>\n      <abt-card-body>\n        <abt-button class=\"mb-2\">\n          Notifications\n          <abt-badge type=\"light\">\n            4\n          </abt-badge>\n        </abt-button>\n        <br />\n        <br />\n        <abt-button>\n          Profile\n          <abt-badge type=\"light\">\n            9\n            <span class=\"sr-only\">unread messages</span>\n          </abt-badge>\n        </abt-button>\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/badge/with-buttons.md\">\n\n        </aut-mark-down>\n      </abt-card-footer>\n\n    </abt-card>\n\n\n\n\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Pill badges\n    </legend>\n\n    <abt-card>\n      <abt-card-body>\n\n        <abt-badge class=\"mr-1\" type=\"primary\">primary</abt-badge>\n        <abt-badge class=\"mr-1\" type=\"secondary\">secondary</abt-badge>\n        <abt-badge class=\"mr-1\" type=\"info\">info</abt-badge>\n        <abt-badge class=\"mr-1\" type=\"success\">success</abt-badge>\n        <abt-badge class=\"mr-1\" type=\"warning\">warning</abt-badge>\n        <abt-badge class=\"mr-1\" type=\"danger\">danger</abt-badge>\n        <abt-badge class=\"mr-1\" type=\"light\">light</abt-badge>\n        <abt-badge class=\"mr-1\" type=\"dark\">dark</abt-badge>\n\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/badge/pill-badges.md\">\n\n        </aut-mark-down>\n      </abt-card-footer>\n    </abt-card>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Links\n    </legend>\n\n    <p>\n      We don't know how to support\n      <a href=\"http://getbootstrap.com/docs/4.0/components/badge/#links\">link badges</a>, we'd like to consider the whol functionality in one component; however, you can still use it like\n      below with some tiny visual problems.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n\n        <a href=\"http://getbootstrap.com/docs/4.0/components/badge/#links\">\n          <abt-badge type=\"primary\">primary</abt-badge>\n        </a>\n\n        <a href=\"http://getbootstrap.com/docs/4.0/components/badge/#links\">\n          <abt-badge type=\"secondary\">secondary</abt-badge>\n        </a>\n\n        <a href=\"http://getbootstrap.com/docs/4.0/components/badge/#links\">\n          <abt-badge type=\"info\">info</abt-badge>\n        </a>\n\n        <a href=\"http://getbootstrap.com/docs/4.0/components/badge/#links\">\n          <abt-badge type=\"success\">success</abt-badge>\n        </a>\n\n        <a href=\"http://getbootstrap.com/docs/4.0/components/badge/#links\">\n          <abt-badge type=\"warning\">warning</abt-badge>\n        </a>\n\n        <a href=\"http://getbootstrap.com/docs/4.0/components/badge/#links\">\n          <abt-badge type=\"danger\">danger</abt-badge>\n        </a>\n\n        <a href=\"http://getbootstrap.com/docs/4.0/components/badge/#links\">\n          <abt-badge type=\"light\">light</abt-badge>\n        </a>\n\n        <a href=\"http://getbootstrap.com/docs/4.0/components/badge/#links\">\n          <abt-badge type=\"dark\">dark</abt-badge>\n        </a>\n\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/badge/link.md\">\n\n        </aut-mark-down>\n      </abt-card-footer>\n\n    </abt-card>\n\n\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Properties\n    </legend>\n\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-badge\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Applies the your custom css class on badge</td>\n        </tr>\n        <!-- <tr>\n          <td scope=\"row\">href</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>A url to link to another part of the page or web.\n            <hr />\n            <b>PS:</b>\n            <i>Bear in mind that you can use\n              <code>router-href</code> on\n              <code>abt-badge</code> to benefit from aurelia route engine.</i>\n          </td>\n        </tr> -->\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">is-pill</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Makes badges more rounded, it can be used as an attribute with no value\n            <code>is-pill</code>\n            or with aurelia binding system\n            <code>is-pill.bind=\"true\"</code>, both do the same.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">type</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">primary</td>\n          <td>The type of badge, values are contextual values of bootstrap,\n            <code>primary</code>,\n            <code>secondary</code>,\n            <code>info</code>,\n            <code>success</code>,\n            <code>warning</code>,\n            <code>danger</code>,\n            <code>light</code>, and\n            <code>dark</code>\n          </td>\n        </tr>\n\n\n\n      </tbody>\n    </table>\n  </fieldset>\n\n\n\n</template>\n"
});
___scope___.file("routes/bootstrap/badge.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Badge = (function () {
    function Badge() {
    }
    return Badge;
}());
exports.Badge = Badge;
//# sourceMappingURL=badge.js.map
});
___scope___.file("routes/bootstrap/breadcrumb.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>Breadcrumb\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/breadcrumb\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n    Separators are automatically added in CSS through, and it will be rendered based on changes of the\n    <code>items</code> array; you can simply add or remove items to or from the array. Items should be of type\n    <code>IBreadcrumbItem</code>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n\n    <aut-mark-down src=\"./docs/components/bootstrap/breadcrumb/usage.md\">\n    </aut-mark-down>\n\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Overview\n    </legend>\n\n    <abt-card>\n      <abt-card-header>\n        <form class=\"inline\">\n          <abt-inputgroup class=\"mb-3\">\n            <abt-inputgroup-prepend>\n              <abt-inputgroup-text>URL</abt-inputgroup-text>\n            </abt-inputgroup-prepend>\n            <input type=\"text\" value.bind=\"new_title\" class=\"form-control\" placeholder=\"New url\" aria-label=\"Url\">\n            <abt-inputgroup-append>\n              <abt-button bs-type=\"secondary\" click.call=\"push()\">\n                Push\n              </abt-button>\n              <abt-button bs-type=\"warning\" click.call=\"pop()\">\n                Pop\n              </abt-button>\n            </abt-inputgroup-append>\n          </abt-inputgroup>\n        </form>\n\n      </abt-card-header>\n      <abt-card-body>\n        <abt-breadcrumb items.bind=\"items\">\n        </abt-breadcrumb>\n      </abt-card-body>\n      <abt-card-footer>\n\n        <abt-navs tabs id=\"breadcrumb-navs\">\n          <abt-nav-item title=\"View\" id=\"nvs-breadcrumb-view\">\n\n            <aut-mark-down src=\"./docs/components/bootstrap/breadcrumb/overview.md\">\n            </aut-mark-down>\n          </abt-nav-item>\n          <abt-nav-item title=\"ViewModel\" id=\"nvs-breadcrumb-view-model\">\n            <aut-mark-down src=\"./docs/components/bootstrap/breadcrumb/overview-ts.md\">\n            </aut-mark-down>\n          </abt-nav-item>\n        </abt-navs>\n\n\n      </abt-card-footer>\n    </abt-card>\n\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Properties\n    </legend>\n\n\n\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-breadcrumb\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">items</td>\n          <td class=\"text-nowrap\">array of\n            <code>IBreadcrumbItem</code>\n\n          </td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Items to be shown in the breadcrumb.\n            <hr />\n\n            <b>PS:</b>\n            <code>\n              <i>\n\n                IBreadcrumbItem\n              </i>\n            </code>\n            consists of two properties of type\n            <code>\n\n              string,\n            </code>\n            <code>title</code>, and an\n            <i>optional</i>\n            <code>url</code>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n  </fieldset>\n\n\n</template>\n"
});
___scope___.file("routes/bootstrap/breadcrumb.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Breadcrumb = (function () {
    function Breadcrumb() {
        this.items = [];
        this.new_title = 'Test';
    }
    Breadcrumb.prototype.push = function () {
        this.items.push({ title: this.new_title });
    };
    Breadcrumb.prototype.pop = function () {
        this.items.pop();
    };
    Breadcrumb.prototype.activate = function () {
        this.items = [
            {
                title: 'Bootstrap',
                url: '#/bootstrap'
            },
            {
                title: 'Breadcrumb',
                url: '#/bootstrap/breadcrumb'
            }
        ];
        return true;
    };
    return Breadcrumb;
}());
exports.Breadcrumb = Breadcrumb;
//# sourceMappingURL=breadcrumb.js.map
});
___scope___.file("routes/bootstrap/button-groups.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>Buttons\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/button\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n    Group a series of\n    <code>buttons</code> together on a single line with the button group.\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n\n    <aut-mark-down src=\"./docs/components/bootstrap/button-group/usage.md\">\n    </aut-mark-down>\n\n  </fieldset>\n\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Basic, vertical and sizing\n    </legend>\n\n    <p>Simply group buttons via\n      <code>abt-button-group</code>, change their size, and make them vertical by adding\n      <code>vertical</code> attribute.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n\n        <abt-button-group label=\"Small Group\" class=\"mr-2\" size=\"sm\">\n          <abt-button bs-type=\"secondary\">Top</abt-button>\n          <abt-button bs-type=\"secondary\">Middle</abt-button>\n          <abt-button bs-type=\"secondary\">Bottom</abt-button>\n        </abt-button-group>\n\n        <abt-button-group class=\"mr-2\" label=\"Normal group\">\n          <abt-button bs-type=\"secondary\">Left</abt-button>\n          <abt-button bs-type=\"secondary\">Middle</abt-button>\n          <abt-button bs-type=\"secondary\">Right</abt-button>\n        </abt-button-group>\n\n        <abt-button-group label=\"Large Group\" class=\"mr-5\" size=\"lg\">\n          <abt-button bs-type=\"secondary\">Top</abt-button>\n          <abt-button bs-type=\"secondary\">Middle</abt-button>\n          <abt-button bs-type=\"secondary\">Bottom</abt-button>\n        </abt-button-group>\n\n\n\n        <abt-button-group label=\"small Vertical\" size=\"sm\" class=\"ml-5 mr-2\" vertical>\n          <abt-button bs-type=\"secondary\">Top</abt-button>\n          <abt-button bs-type=\"secondary\">Middle</abt-button>\n          <abt-button bs-type=\"secondary\">Bottom</abt-button>\n        </abt-button-group>\n\n        <abt-button-group label=\"Normal Vertical\" class=\"mr-2\" vertical>\n          <abt-button bs-type=\"secondary\">Top</abt-button>\n          <abt-button bs-type=\"secondary\">Middle</abt-button>\n          <abt-button bs-type=\"secondary\">Bottom</abt-button>\n        </abt-button-group>\n\n        <abt-button-group label=\"Large Vertical\" size=\"lg\" vertical>\n          <abt-button bs-type=\"secondary\">Top</abt-button>\n          <abt-button bs-type=\"secondary\">Middle</abt-button>\n          <abt-button bs-type=\"secondary\">Bottom</abt-button>\n        </abt-button-group>\n\n\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/button-group/basics.md\">\n        </aut-mark-down>\n      </abt-card-footer>\n    </abt-card>\n\n\n\n  </fieldset>\n\n\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Button toolbar\n    </legend>\n\n    <p>Use\n      <code>abt-toolbar</code> to combine sets of button groups into button toolbars for more complex components. Use utility classes\n      as needed to space out groups, buttons, and more.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n        <abt-toolbar label=\"Toolbar with button groups\">\n          <abt-button-group label=\"First group\" class=\"mr-2\">\n            <abt-button>1</abt-button>\n            <abt-button>2</abt-button>\n            <abt-button>3</abt-button>\n            <abt-button>4</abt-button>\n          </abt-button-group>\n          <abt-button-group label=\"Second group\" class=\"mr-2\">\n            <abt-button bs-type=\"secondary\">5</abt-button>\n            <abt-button bs-type=\"secondary\">6</abt-button>\n            <abt-button bs-type=\"secondary\">7</abt-button>\n          </abt-button-group>\n          <abt-button-group label=\"Third group\">\n            <abt-button bs-type=\"warning\">8</abt-button>\n          </abt-button-group>\n        </abt-toolbar>\n\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/button-group/toolbar.md\">\n        </aut-mark-down>\n      </abt-card-footer>\n    </abt-card>\n\n    <hr />\n\n\n    <p>\n      Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some\n      utilities though to space things properly.\n    </p>\n\n\n    <abt-card>\n      <abt-card-body>\n        <abt-toolbar class=\"mb-3\" label=\"Toolbar with button groups\">\n          <abt-button-group label=\"First group\" class=\"mr-2\">\n            <abt-button>1</abt-button>\n            <abt-button>2</abt-button>\n            <abt-button>3</abt-button>\n            <abt-button>4</abt-button>\n          </abt-button-group>\n\n          <abt-inputgroup>\n            <abt-inputgroup-prepend>\n              <abt-inputgroup-text>@</abt-inputgroup-text>\n            </abt-inputgroup-prepend>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Input group example\" aria-label=\"Input group example\" aria-describedby=\"btnGroupAddon\">\n          </abt-inputgroup>\n        </abt-toolbar>\n\n        <abt-toolbar class=\"justify-content-between\" label=\"Toolbar with button groups\">\n          <abt-button-group label=\"First group\" class=\"mr-2\">\n            <abt-button>1</abt-button>\n            <abt-button>2</abt-button>\n            <abt-button>3</abt-button>\n            <abt-button>4</abt-button>\n          </abt-button-group>\n          <abt-inputgroup>\n            <abt-inputgroup-prepend>\n              <abt-inputgroup-text>@</abt-inputgroup-text>\n            </abt-inputgroup-prepend>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Input group example\" aria-label=\"Input group example\" aria-describedby=\"btnGroupAddon\">\n          </abt-inputgroup>\n        </abt-toolbar>\n\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/button-group/toolbar-mix.md\">\n        </aut-mark-down>\n      </abt-card-footer>\n    </abt-card>\n\n\n  </fieldset>\n\n\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Dropdowns\n    </legend>\n\n    <p>\n      Use\n      <code>abt-dropdown</code> alongside with button groups.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n        <abt-toolbar label=\"Toolbar with button groups\">\n          \n          <abt-button-group label=\"Button group with nested dropdown\">\n\n            <abt-button type=\"button\" class=\"btn btn-secondary\">1</abt-button>\n            <abt-button type=\"button\" class=\"btn btn-secondary\">2</abt-button>\n\n            <abt-dropdown title=\"Dropdown\" color=\"info\">\n              <abt-dropdown-item>Dropdown link</abt-dropdown-item>\n              <abt-dropdown-item>Dropdown link</abt-dropdown-item>\n            </abt-dropdown>\n            \n          </abt-button-group>\n\n        </abt-toolbar>\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/button-group/dropdowns.md\">\n        </aut-mark-down>\n      </abt-card-footer>\n    </abt-card>\n  </fieldset>\n\n\n\n  <fieldset class=\"mt-5\">\n      <legend>\n        Properties and Events\n      </legend>\n  \n      <table class=\"table table-striped table-bordered\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <td class=\"text-nowrap\" colspan=\"4\">\n              <b>\n                abt-button-group\n              </b>\n            </td>\n            <td class=\"text-nowrap\" colspan=\"1\">\n              <b>\n                containerless\n              </b>\n            </td>\n          </tr>\n          <tr>\n            <th class=\"text-nowrap\" scope=\"col\">Name</th>\n            <th class=\"text-nowrap\" scope=\"col\">Type</th>\n            <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n            <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n            <th class=\"text-nowrap\" scope=\"col\">Description</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class=\"text-nowrap\" colspan=\"5\">\n              <b>\n                Properties\n              </b>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">class</td>\n            <td class=\"text-nowrap\">string</td>\n            <td class=\"text-nowrap\">oneWay</td>\n            <td class=\"text-nowrap\"></td>\n            <td>Applies the your custom css class on alert</td>\n          </tr>\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">id</td>\n            <td class=\"text-nowrap\">string</td>\n            <td class=\"text-nowrap\">oneTime</td>\n            <td class=\"text-nowrap\"></td>\n            <td>Since the\n              <code>abt-button-group</code> is a\n              <code>containerless</code> component, we assign the\n              <code>id</code> to the actual\n              <code>div</code> underneath.\n            </td>\n          </tr>\n          <tr>\n              <td class=\"text-nowrap\" scope=\"row\">label</td>\n              <td class=\"text-nowrap\">string</td>\n              <td class=\"text-nowrap\">oneTime</td>\n              <td class=\"text-nowrap\"></td>\n              <td>Assigns the value to <code>aria-label</code> as bootstrap suggested</td>\n          </tr>\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">size</td>\n            <td class=\"text-nowrap\">string</td>\n            <td class=\"text-nowrap\">oneTime</td>\n            <td class=\"text-nowrap\">md</td>\n            <td>Indicates the size for button group, values can be 'sm', 'md', and 'lg'</td>\n          </tr>\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">style</td>\n            <td class=\"text-nowrap\">string</td>\n            <td class=\"text-nowrap\">oneWay</td>\n            <td class=\"text-nowrap\"></td>\n            <td>Css style attrinutes that you want to apply on the component.</td>\n          </tr>\n        </tbody>\n      </table>\n  \n  \n      <table class=\"table table-striped table-bordered\">\n          <thead class=\"thead-dark\">\n            <tr>\n              <td class=\"text-nowrap\" colspan=\"4\">\n                <b>\n                  abt-toolbar\n                </b>\n              </td>\n              <td class=\"text-nowrap\" colspan=\"1\">\n                <b>\n                  containerless\n                </b>\n              </td>\n            </tr>\n            <tr>\n              <th class=\"text-nowrap\" scope=\"col\">Name</th>\n              <th class=\"text-nowrap\" scope=\"col\">Type</th>\n              <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n              <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n              <th class=\"text-nowrap\" scope=\"col\">Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td class=\"text-nowrap\" colspan=\"5\">\n                <b>\n                  Properties\n                </b>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"text-nowrap\" scope=\"row\">class</td>\n              <td class=\"text-nowrap\">string</td>\n              <td class=\"text-nowrap\">oneWay</td>\n              <td class=\"text-nowrap\"></td>\n              <td>Applies the your custom css class on alert</td>\n            </tr>\n            <tr>\n              <td class=\"text-nowrap\" scope=\"row\">id</td>\n              <td class=\"text-nowrap\">string</td>\n              <td class=\"text-nowrap\">oneTime</td>\n              <td class=\"text-nowrap\"></td>\n              <td>Since the\n                <code>abt-toolbar</code> is a\n                <code>containerless</code> component, we assign the\n                <code>id</code> to the actual\n                <code>div</code> underneath.\n              </td>\n            </tr>\n            <tr>\n                <td class=\"text-nowrap\" scope=\"row\">label</td>\n                <td class=\"text-nowrap\">string</td>\n                <td class=\"text-nowrap\">oneTime</td>\n                <td class=\"text-nowrap\"></td>\n                <td>Assigns the value to <code>aria-label</code> as bootstrap suggested</td>\n            </tr>\n            <tr>\n              <td class=\"text-nowrap\" scope=\"row\">size</td>\n              <td class=\"text-nowrap\">string</td>\n              <td class=\"text-nowrap\">oneTime</td>\n              <td class=\"text-nowrap\">md</td>\n              <td>Indicates the size for toolbar, values can be 'sm', 'md', and 'lg'</td>\n            </tr>\n            <tr>\n              <td class=\"text-nowrap\" scope=\"row\">style</td>\n              <td class=\"text-nowrap\">string</td>\n              <td class=\"text-nowrap\">oneWay</td>\n              <td class=\"text-nowrap\"></td>\n              <td>Css style attrinutes that you want to apply on the component.</td>\n            </tr>\n          </tbody>\n        </table>\n  \n    </fieldset>\n  \n\n\n\n\n</template>\n"
});
___scope___.file("routes/bootstrap/button-groups.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonGroups = (function () {
    function ButtonGroups() {
    }
    return ButtonGroups;
}());
exports.ButtonGroups = ButtonGroups;
//# sourceMappingURL=button-groups.js.map
});
___scope___.file("routes/bootstrap/buttons.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>Buttons\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/button\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n    Use custom button for actions in forms, dialogs, and more with support for multiple sizes, states, and more.\n    <code>abt-button</code> in\n    <code>aurelia-toolbelt</code> are only buttons, for render\n    <code>a</code> tags as buttons use\n    <code>abt-link-button</code>.\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n\n    <aut-mark-down src=\"./docs/components/bootstrap/button/usage.md\">\n    </aut-mark-down>\n\n  </fieldset>\n\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Examples\n    </legend>\n\n    <p>\n      Contextual variations are\n      <code>primary</code> ,\n      <code>secondary</code> ,\n      <code>info</code> ,\n      <code>success</code> ,\n      <code>warning</code> ,\n      <code>danger</code> ,\n      <code>light</code> ,\n      <code>dark</code> , and\n      <code>link</code>.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n\n        <abt-button class=\"mr-2\" bs-type=\"primary\">Primary</abt-button>\n        <abt-button class=\"mr-2\" bs-type=\"secondary\">Secondary</abt-button>\n        <abt-button class=\"mr-2\" bs-type=\"info\">Info</abt-button>\n        <abt-button class=\"mr-2\" bs-type=\"success\">Success</abt-button>\n        <abt-button class=\"mr-2\" bs-type=\"warning\">Warning</abt-button>\n        <abt-button class=\"mr-2\" bs-type=\"danger\">Danger</abt-button>\n        <abt-button class=\"mr-2\" bs-type=\"light\">Light</abt-button>\n        <abt-button class=\"mr-2\" bs-type=\"dark\">Dark</abt-button>\n\n        <abt-button bs-type=\"link\">Link</abt-button>\n\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/button/overview.md\">\n\n        </aut-mark-down>\n      </abt-card-footer>\n    </abt-card>\n\n  </fieldset>\n\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Outline buttons\n    </legend>\n\n    <abt-card>\n      <abt-card-body>\n\n        <abt-button class=\"mr-2\" outline bs-type=\"primary\">Primary</abt-button>\n        <abt-button class=\"mr-2\" outline bs-type=\"secondary\">Secondary</abt-button>\n        <abt-button class=\"mr-2\" outline bs-type=\"info\">Info</abt-button>\n        <abt-button class=\"mr-2\" outline bs-type=\"success\">Success</abt-button>\n        <abt-button class=\"mr-2\" outline bs-type=\"warning\">Warning</abt-button>\n        <abt-button class=\"mr-2\" outline bs-type=\"danger\">Danger</abt-button>\n        <abt-button class=\"mr-2 text-dark\" outline bs-type=\"light\">Light</abt-button>\n        <abt-button class=\"mr-2\" outline bs-type=\"dark\">Dark</abt-button>\n\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/button/outline.md\">\n\n        </aut-mark-down>\n      </abt-card-footer>\n    </abt-card>\n\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Size, block, and disabled\n    </legend>\n\n    <abt-card>\n      <abt-card-body>\n\n        <abt-button class=\"mr-2\" size=\"sm\">small button</abt-button>\n        <abt-button class=\"mr-2\">Normal button</abt-button>\n        <abt-button class=\"mr-5\" size=\"lg\">Large Button</abt-button>\n\n        <abt-button class=\"ml-5\" disabled>Disabled</abt-button>\n        <abt-button class=\"ml-2\" bs-type=\"secondary\" disabled.bind=\"true\">Another Disabled</abt-button>\n        <abt-button class=\"ml-2\" bs-type=\"success\" disabled=\"true\">Yet Another Disabled</abt-button>\n\n        <hr />\n\n        <abt-button class=\"mr-2\" block bs-type=\"secondary\">Block Level</abt-button>\n\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/button/size-block.md\">\n\n        </aut-mark-down>\n      </abt-card-footer>\n    </abt-card>\n\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Link buttons\n    </legend>\n\n    <abt-card>\n      <abt-card-body>\n\n        <abt-link-button href=\"https://aurelia-toolbelt.github.io\" class=\"mr-2\">Primary link</abt-link-button>\n        <abt-link-button type=\"secondary\" href=\"https://github.com/aurelia-toolbelt\" class=\"ml-5\" disabled>Secondary link</abt-link-button>\n\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/button/link-button.md\">\n\n        </aut-mark-down>\n      </abt-card-footer>\n    </abt-card>\n\n  </fieldset>\n\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      A button meant to be\n      <code>clicked!</code>\n    </legend>\n\n    <p>\n      The\n      <code>click</code> event can be bound to functions with no return value, or those returning a\n      <code>promise</code>, when the latter they will have a busy/loading state, in which you can provide a loading template by\n      simply using slots in aurelia.\n      <code>slot=\"loading\"</code>\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n        <abt-button class=\"mr-2\" click.call=\"onClick()\">Click me</abt-button>\n\n        <abt-button click.call=\"onClick()\">Click me with loading indicator\n          <span slot=\"loading\">\n            <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\">\n            </i>\n          </span>\n        </abt-button>\n\n        <abt-button class=\"float-right\" click.call=\"onClickWithoutPromise()\">Click me, no promise returns</abt-button>\n\n      </abt-card-body>\n      <abt-card-footer>\n\n        <abt-navs tabs id=\"navs-button\">\n          <abt-nav-item id=\"navs-button-view\" title=\"View\">\n            <aut-mark-down src=\"./docs/components/bootstrap/button/clicked.md\">\n            </aut-mark-down>\n\n          </abt-nav-item>\n          <abt-nav-item id=\"navs-button-view-model\" title=\"ViewModel\">\n            <aut-mark-down src=\"./docs/components/bootstrap/button/clicked-ts.md\">\n            </aut-mark-down>\n          </abt-nav-item>\n        </abt-navs>\n\n      </abt-card-footer>\n    </abt-card>\n\n  </fieldset>\n\n\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Properties and Events\n    </legend>\n\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-button\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">block</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Expands the button to fill a whole block. You can use it both as a simple attribute (\n            <code>block</code> ) or binding aurelia way (\n            <code>block=\"true\"</code> or block.bind=\"some_boolean_value\" ).\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">bs-type</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">primary</td>\n          <td>The type bootstrap type of button, contextual values of bootstrap,\n            <code>primary</code>,\n            <code>secondary</code>,\n            <code>info</code>,\n            <code>success</code>,\n            <code>warning</code>,\n            <code>danger</code>,\n            <code>light</code>, and\n            <code>dark</code>\n            <hr />\n            <b>PS:</b> Only in the button element we had to name this property\n            <code>bs-type</code> owing to the existence of\n            <code>type</code> attribute for button element in html.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Applies the your custom css class on alert</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">disabled</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Setting this to true will disable the button. You can use it both as a simple attribute (\n            <code>disabled</code> ) or binding aurelia way (\n            <code>disabled=\"true\"</code> or disabled.bind=\"some_boolean_value\" ).\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Since the\n            <code>abt-button</code> is a\n            <code>containerless</code> component, we assign the\n            <code>id</code> to the actual\n            <code>button</code> underneath.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">outline</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Renders the button as outlined. You can use it both as a simple attribute (\n            <code>outline</code> ) or binding aurelia way (\n            <code>outline=\"true\"</code> or outline.bind=\"some_boolean_value\" ).\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">size</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">md</td>\n          <td>Indicates the size for abt-button, values can be 'sm', 'md', and 'lg'</td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Css style attrinutes that you want to apply on the component.</td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">type</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">button</td>\n          <td>The traditional\n            <code>type</code> attribute of html\n            <code>button</code> element,\n            <code>button</code>,\n            <code>submit</code>, and\n            <code>reset</code>, are the acceptable values.\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Events\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">click</td>\n          <td class=\"text-nowrap\">Promise</td>\n          <td class=\"text-nowrap\">call (event, target)</td>\n          <td class=\"text-nowrap\"></td>\n          <td>This event fires immediately when you click the\n            <code>abt-button</code>.\n            <hr />\n            <ul>\n              <li>\n                <b>PS:</b>\n                The\n                <code>abt-button</code> has an extra\n                <code>slot</code> named\n                <code>\n                  <em>\n                    <b>\n                      <i>loading</i>\n                    </b>\n                  </em>\n                </code>, if your\n                <code>click</code> event returns a promise, the\n                <code>loading slot</code> you've provided will be rendered until the promise resolves.\n              </li>\n              <li>\n                <b>PS:</b> The\n                <code>abt-button</code> will remain disabled also, until the promise resolves.\n              </li>\n            </ul>\n\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Extra Slots\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"2\">\n            <b>\n              loading\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"3\">\n            You can use this extra slot to show some loading indicator to visualize that some background work is in progress.\n          </td>\n        </tr>\n\n      </tbody>\n\n\n      <table class=\"table table-striped table-bordered\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <td class=\"text-nowrap\" colspan=\"4\">\n              <b>\n                abt-link-button\n              </b>\n            </td>\n            <td class=\"text-nowrap\" colspan=\"1\">\n              <b>\n                containerless\n              </b>\n            </td>\n          </tr>\n          <tr>\n            <th class=\"text-nowrap\" scope=\"col\">Name</th>\n            <th class=\"text-nowrap\" scope=\"col\">Type</th>\n            <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n            <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n            <th class=\"text-nowrap\" scope=\"col\">Description</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class=\"text-nowrap\" colspan=\"5\">\n              <b>\n                Properties\n              </b>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">block</td>\n            <td class=\"text-nowrap\">boolean | string</td>\n            <td class=\"text-nowrap\">oneTime</td>\n            <td class=\"text-nowrap\">false</td>\n            <td>Expands the button to fill a whole block. You can use it both as a simple attribute (\n              <code>block</code> ) or binding aurelia way (\n              <code>block=\"true\"</code> or block.bind=\"some_boolean_value\" ).\n            </td>\n          </tr>\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">class</td>\n            <td class=\"text-nowrap\">string</td>\n            <td class=\"text-nowrap\">oneWay</td>\n            <td class=\"text-nowrap\"></td>\n            <td>Applies the your custom css class on alert</td>\n          </tr>\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">disabled</td>\n            <td class=\"text-nowrap\">boolean | string</td>\n            <td class=\"text-nowrap\">oneWay</td>\n            <td class=\"text-nowrap\">false</td>\n            <td>Setting this to true will disable the button. You can use it both as a simple attribute (\n              <code>disabled</code> ) or binding aurelia way (\n              <code>disabled=\"true\"</code> or disabled.bind=\"some_boolean_value\" ).\n            </td>\n          </tr>\n          <tr>\n            <td scope=\"row\">href</td>\n            <td class=\"text-nowrap\">string</td>\n            <td class=\"text-nowrap\">oneWay</td>\n            <td class=\"text-nowrap\"></td>\n            <td>A url to link to another part of the page or web.\n              <hr />\n              <b>PS:</b>\n              <i>Bear in mind that you can use\n                <code>router-href</code> on\n                <code>abt-link-button</code> to benefit from aurelia route engine.</i>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">id</td>\n            <td class=\"text-nowrap\">string</td>\n            <td class=\"text-nowrap\">oneTime</td>\n            <td class=\"text-nowrap\"></td>\n            <td>Since the\n              <code>abt-link-button</code> is a\n              <code>containerless</code> component, we assign the\n              <code>id</code> to the actual\n              <code>button</code> underneath.\n            </td>\n          </tr>\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">outline</td>\n            <td class=\"text-nowrap\">boolean | string</td>\n            <td class=\"text-nowrap\">oneTime</td>\n            <td class=\"text-nowrap\">false</td>\n            <td>Renders the button as outlined. You can use it both as a simple attribute (\n              <code>outline</code> ) or binding aurelia way (\n              <code>outline=\"true\"</code> or outline.bind=\"some_boolean_value\" ).\n            </td>\n          </tr>\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">size</td>\n            <td class=\"text-nowrap\">string</td>\n            <td class=\"text-nowrap\">oneTime</td>\n            <td class=\"text-nowrap\">md</td>\n            <td>Indicates the size for abt-link-button, values can be 'sm', 'md', and 'lg'</td>\n          </tr>\n\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">style</td>\n            <td class=\"text-nowrap\">string</td>\n            <td class=\"text-nowrap\">oneWay</td>\n            <td class=\"text-nowrap\"></td>\n            <td>Css style attrinutes that you want to apply on the component.</td>\n          </tr>\n\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">type</td>\n            <td class=\"text-nowrap\">string</td>\n            <td class=\"text-nowrap\">oneTime</td>\n            <td class=\"text-nowrap\">primary</td>\n            <td>The contextual values of bootstrap,\n              <code>primary</code>,\n              <code>secondary</code>,\n              <code>info</code>,\n              <code>success</code>,\n              <code>warning</code>,\n              <code>danger</code>,\n              <code>light</code>, and\n              <code>dark</code>\n            </td>\n          </tr>\n\n          <tr>\n            <td class=\"text-nowrap\" colspan=\"5\">\n              <b>\n                Events\n              </b>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">click</td>\n            <td class=\"text-nowrap\">Promise</td>\n            <td class=\"text-nowrap\">call</td>\n            <td class=\"text-nowrap\"></td>\n            <td>This event fires immediately when you click the\n              <code>abt-link-button</code>.\n              <hr />\n              <b>PS:</b> The\n              <code>abt-link-button</code> will remain disabled also, until the promise resolves.\n\n            </td>\n          </tr>\n\n        </tbody>\n      </table>\n\n  </fieldset>\n\n</template>\n"
});
___scope___.file("routes/bootstrap/buttons.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_http_client_1 = require("aurelia-http-client");
var aurelia_toolbelt_1 = require("aurelia-toolbelt");
var Buttons = (function () {
    function Buttons(http, ts) {
        this.http = http;
        this.ts = ts;
    }
    Buttons.prototype.onClick = function (event, target) {
        this.ts.success('Button clicked', 'Hooray', {
            progressBar: false, preventDuplicates: false
        });
        return this.http.get('https://github.com/aurelia-toolbelt');
    };
    Buttons.prototype.onClickWithoutPromise = function (event, target) {
        this.ts.warning('Button clicked', 'Hooray', {
            progressBar: false, preventDuplicates: false
        });
        this.http.get('https://github.com/aurelia-toolbelt');
    };
    Buttons = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [typeof (_a = typeof aurelia_http_client_1.HttpClient !== "undefined" && aurelia_http_client_1.HttpClient) === "function" && _a || Object, typeof (_b = typeof aurelia_toolbelt_1.ToastrService !== "undefined" && aurelia_toolbelt_1.ToastrService) === "function" && _b || Object])
    ], Buttons);
    return Buttons;
    var _a, _b;
}());
exports.Buttons = Buttons;
//# sourceMappingURL=buttons.js.map
});
___scope___.file("routes/bootstrap/card.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <abt-card>\n    <abt-card-body>\n      <abt-card-title>\n        <h4>\n          Card Title\n        </h4>\n      </abt-card-title>\n      <abt-card-subtitle class=\"mb-2 text-muted\">\n        <h6>Card subtitle</h6>\n      </abt-card-subtitle>\n      <abt-card-text>\n        Some quick example text to build on the card title and make up the bulk of the card's content.\n      </abt-card-text>\n      <a href=\"#\" class=\"card-link\">Card link</a>\n      <a href=\"#\" class=\"card-link\">Another link</a>\n    </abt-card-body>\n  </abt-card>\n\n  <br />\n\n  <abt-card style=\"width: 20rem;\">\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">Cras justo odio</li>\n      <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n      <li class=\"list-group-item\">Vestibulum at eros</li>\n    </ul>\n  </abt-card>\n\n  <br />\n\n  <abt-card style=\"width: 20rem;\">\n    <abt-card-header>\n      Featured\n    </abt-card-header>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">Cras justo odio</li>\n      <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n      <li class=\"list-group-item\">Vestibulum at eros</li>\n    </ul>\n  </abt-card>\n\n  <br />\n\n  <abt-card style=\"width: 20rem;\">\n    <abt-card-image top src=\"/images/test.jpg\" alt=\"Card image cap\">\n    </abt-card-image>\n    <abt-card-body>\n      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    </abt-card-body>\n  </abt-card>\n\n  <br />\n\n  <abt-card style=\"width: 20rem;\">\n    <abt-card-image top src=\"/images/test.jpg\" alt=\"Card image cap\">\n    </abt-card-image>\n    <abt-card-body>\n      <h4 class=\"card-title\">Card title</h4>\n      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    </abt-card-body>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">Cras justo odio</li>\n      <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n      <li class=\"list-group-item\">Vestibulum at eros</li>\n    </ul>\n    <abt-card-body class=\"card-body\">\n      <a href=\"#\" class=\"card-link\">Card link</a>\n      <a href=\"#\" class=\"card-link\">Another link</a>\n    </abt-card-body>\n  </abt-card>\n\n  <br/>\n\n  <abt-card class=\"text-right\">\n    <abt-card-header>\n      Featured\n    </abt-card-header>\n    <abt-card-body>\n      <abt-card-title>\n        <h4>\n          Card Title\n        </h4>\n      </abt-card-title>\n      <abt-card-text> class=\"card-text\">With supporting text below as a natural lead-in to additional content.</abt-card-text>\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </abt-card-body>\n  </abt-card>\n\n  <br />\n\n  <abt-card class=\"text-center\">\n    <abt-card-header>\n      Quote\n    </abt-card-header>\n    <abt-card-body>\n      <blockquote class=\"blockquote mb-0\">\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n        <footer class=\"blockquote-footer\">Someone famous in\n          <cite title=\"Source Title\">Source Title</cite>\n        </footer>\n      </blockquote>\n    </abt-card-body>\n    <abt-card-footer>\n      Something in footer\n    </abt-card-footer>\n  </abt-card>\n\n\n\n  <br/>\n  <br/>\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <abt-card>\n        <abt-card-body>\n          <abt-card-title>\n            <h4>Special title treatment</h4>\n          </abt-card-title>\n          <abt-card-text>With supporting text below as a natural lead-in to additional content.</abt-card-text>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </abt-card-body>\n      </abt-card>\n    </div>\n    <div class=\"col-sm-6\">\n      <abt-card>\n        <abt-card-body>\n          <abt-card-title>\n            <h4>Special title treatment</h4>\n          </abt-card-title>\n          <abt-card-text>With supporting text below as a natural lead-in to additional content.</abt-card-text>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </abt-card-body>\n      </abt-card>\n    </div>\n  </div>\n\n\n  <abt-card class=\"text-center mt-5\">\n    <abt-card-header>\n      <ul class=\"nav nav-tabs card-header-tabs\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" href=\"#\">Active</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n        </li>\n      </ul>\n    </abt-card-header>\n    <abt-card-body>\n      <h4 class=\"card-title\">Special title treatment</h4>\n      <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </abt-card-body>\n  </abt-card>\n\n\n\n  <h1 class=\"mt-4 md-5\">Images</h1>\n  <abt-card class=\"mb-3\">\n    <abt-card-image top src=\"/images/test.jpg\" alt=\"Card image cap\"></abt-card-image>\n    <abt-card-body>\n      <abt-card-title>\n        <h4>Card title</h4>\n      </abt-card-title>\n      <abt-card-text>\n        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit\n        longer.\n      </abt-card-text>\n      <abt-card-text>\n        <small class=\"text-muted\">Last updated 3 mins ago</small>\n      </abt-card-text>\n    </abt-card-body>\n  </abt-card>\n  <abt-card>\n    <abt-card-body>\n      <abt-card-title>\n        <h4>Card title</h4>\n      </abt-card-title>\n      <abt-card-text>\n        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit\n        longer.\n      </abt-card-text>\n      <abt-card-text>\n        <small class=\"text-muted\">Last updated 3 mins ago</small>\n      </abt-card-text>\n    </abt-card-body>\n    <abt-card-image bottom src=\"/images/test.jpg\" alt=\"Card image cap\"></abt-card-image>\n  </abt-card>\n\n\n\n\n  <h1 class=\"mt-4 md-5\">Image Overlays</h1>\n\n  <abt-card class=\"bg-dark text-white\">\n    <abt-card-image src=\"/images/test.jpg\" alt=\"Card image\">\n    </abt-card-image>\n    <abt-card-image-overlay>\n      <abt-card-title>\n        <h4>Card title</h4>\n      </abt-card-title>\n      <abt-card-text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little\n        bit longer.</abt-card-text>\n      <abt-card-text>Last updated 3 mins ago</abt-card-text>\n    </abt-card-image-overlay>\n  </abt-card>\n\n\n\n\n\n\n  <h1 class=\"mt-4 md-5\">Background and color and Card Layout</h1>\n\n  <abt-card-group>\n    <abt-card class=\"text-white bg-success mb-3\" style=\"max-width: 20rem;\">\n      <abt-card-header class=\"border-danger\">Header</abt-card-header>\n      <abt-card-body>\n        <abt-card-title>Primary card title</abt-card-title>\n        <abt-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</abt-card-text>\n      </abt-card-body>\n      <abt-card-footer>\n        <small class=\"text-white\">Last updated 3 mins ago</small>\n      </abt-card-footer>\n    </abt-card>\n    <abt-card class=\"text-white border-primary bg-dark mb-3\" style=\"max-width: 20rem; border-width:5px;\">\n      <abt-card-header class=\"border-danger bg-transparent\">Header</abt-card-header>\n      <abt-card-body class=\"text-success\">\n        <abt-card-title>Primary card title</abt-card-title>\n        <abt-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</abt-card-text>\n      </abt-card-body>\n      <abt-card-footer>\n        <small class=\"text-muted\">Last updated 3 mins ago</small>\n      </abt-card-footer>\n    </abt-card>\n  </abt-card-group>\n\n\n  <abt-card-deck>\n    <abt-card class=\"mb-3\">\n      <abt-card-image top src=\"/images/test.jpg\" alt=\"Card image cap\"></abt-card-image>\n      <abt-card-body>\n        <abt-card-title>\n          <h4>Card title</h4>\n        </abt-card-title>\n        <abt-card-text>\n          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit\n          longer.\n        </abt-card-text>\n        <abt-card-text>\n          <small class=\"text-muted\">Last updated 3 mins ago</small>\n        </abt-card-text>\n      </abt-card-body>\n    </abt-card>\n    <abt-card>\n      <abt-card-body>\n        <abt-card-title>\n          <h4>Card title</h4>\n        </abt-card-title>\n        <abt-card-text>\n          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit\n          longer.\n        </abt-card-text>\n        <abt-card-text>\n          <small class=\"text-muted\">Last updated 3 mins ago</small>\n        </abt-card-text>\n      </abt-card-body>\n      <abt-card-image bottom src=\"/images/test.jpg\" alt=\"Card image cap\"></abt-card-image>\n    </abt-card>\n  </abt-card-deck>\n\n\n\n  <h1>Card Columns</h1>\n\n  <abt-card-columns>\n    <abt-card-columns class=\"card\">\n      <abt-card-image top src=\"/images/test.jpg\" alt=\"Card image cap\"></abt-card-image>\n      <abt-body>\n        <abt-card-title>Card title that wraps to a new line</abt-card-title>\n        <abt-card-text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little\n          bit longer.</abt-card-text>\n      </abt-body>\n      </abt-card-image>\n      <abt-card class=\"p-3\">\n        <blockquote class=\"blockquote mb-0 card-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n          <footer class=\"blockquote-footer\">\n            <small class=\"text-muted\">\n              Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </small>\n          </footer>\n        </blockquote>\n      </abt-card>\n      <abt-card>\n        <abt-card-image top src=\"/images/test.jpg\" alt=\"Card image cap\"></abt-card-image>\n        <abt-card-body>\n          <abt-card-title>Card title</abt-card-title>\n          <abt-card-text>This card has supporting text below as a natural lead-in to additional content.</abt-card-text>\n          <abt-card-text>\n            <small class=\"text-muted\">Last updated 3 mins ago</small>\n          </abt-card-text>\n        </abt-card-body>\n      </abt-card>\n      <abt-card class=\"bg-primary text-white text-center p-3\">\n        <blockquote class=\"blockquote mb-0\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>\n          <footer class=\"blockquote-footer\">\n            <small>\n              Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </small>\n          </footer>\n        </blockquote>\n      </abt-card>\n      <abt-card class=\"text-center\">\n        <abt-card-body>\n          <abt-card-title>Card title</abt-card-title>\n          <abt-card-text>This card has supporting text below as a natural lead-in to additional content.</abt-card-text>\n          <abt-card-text>\n            <small class=\"text-muted\">Last updated 3 mins ago</small>\n          </abt-card-text>\n        </abt-card-body>\n      </abt-card>\n      <abt-card>\n        <abt-card-image src=\"/images/test.jpg\" alt=\"Card image\"></abt-card-image>\n        </abt-card-image>\n        <abt-card class=\"p-3 text-right\">\n          <blockquote class=\"blockquote mb-0\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer class=\"blockquote-footer\">\n              <small class=\"text-muted\">\n                Someone famous in\n                <cite title=\"Source Title\">Source Title</cite>\n              </small>\n            </footer>\n          </blockquote>\n        </abt-card>\n        <abt-card>\n          <abt-card-body>\n            <abt-card-title>Card title</abt-card-title>\n            <abt-card-text>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even\n              longer content than the first to show that equal height action.</abt-card-text>\n            <abt-card-text class=\"card-text\">\n              <small class=\"text-muted\">Last updated 3 mins ago</small>\n            </abt-card-text>\n          </abt-card-body>\n        </abt-card>\n      </abt-card>\n    </abt-card-columns>\n\n\n    <br/>\n    \n</template>\n"
});
___scope___.file("routes/bootstrap/card.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapCard = (function () {
    function BootstrapCard() {
    }
    return BootstrapCard;
}());
exports.BootstrapCard = BootstrapCard;
//# sourceMappingURL=card.js.map
});
___scope___.file("routes/bootstrap/carousel.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>Carousel\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/carousel\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n    A slideshow component for cycling through elements—images or slides of text—like a carousel.\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n    <aut-mark-down src=\"./docs/components/bootstrap/carousel/usage.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Examples\n    </legend>\n    <br>\n    <abt-carousel>\n      <abt-carousel-item>\n        <img class=\"d-block w-100\" src=\"/images/pic1.jpg\" alt=\"The image cannot be displayed\" />\n      </abt-carousel-item>\n      <abt-carousel-item>\n        <img class=\"d-block w-100\" src=\"/images/pic2.jpg\" alt=\"The image cannot be displayed\" />\n      </abt-carousel-item>\n      <abt-carousel-item active=\"true\">\n        <img class=\"d-block w-100\" src=\"/images/pic3.jpg\" alt=\"The image cannot be displayed\" />\n      </abt-carousel-item>\n      <abt-carousel-item>\n        <img class=\"d-block w-100\" src=\"/images/pic4.jpg\" alt=\"The image cannot be displayed\" />\n      </abt-carousel-item>\n      <abt-carousel-item>\n        <img class=\"d-block w-100\" src=\"/images/pic5.jpg\" alt=\"The image cannot be displayed\" />\n      </abt-carousel-item>\n    </abt-carousel>\n    <aut-mark-down src=\"./docs/components/bootstrap/carousel/side-only.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      With controls\n    </legend>\n    <p>Adding in the previous and next controls:</p>\n    <abt-carousel navigator=\"true\">\n      <abt-carousel-item>\n        <img class=\"d-block w-100\" src=\"/images/pic1.jpg\" alt=\"The image cannot be displayed\" />\n      </abt-carousel-item>\n      <abt-carousel-item>\n        <img class=\"d-block w-100\" src=\"/images/pic2.jpg\" alt=\"The image cannot be displayed\" />\n      </abt-carousel-item>\n      <abt-carousel-item active=\"true\">\n        <img class=\"d-block w-100\" src=\"/images/pic3.jpg\" alt=\"The image cannot be displayed\" />\n      </abt-carousel-item>\n      <abt-carousel-item>\n        <img class=\"d-block w-100\" src=\"/images/pic4.jpg\" alt=\"The image cannot be displayed\" />\n      </abt-carousel-item>\n      <abt-carousel-item>\n        <img class=\"d-block w-100\" src=\"/images/pic5.jpg\" alt=\"The image cannot be displayed\" />\n      </abt-carousel-item>\n    </abt-carousel>\n    <aut-mark-down src=\"./docs/components/bootstrap/carousel/with-controls.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n\n    <legend>\n      With indicators\n    </legend>\n    <p>You can also add the indicators to the carousel, alongside the controls, too.</p>\n    <abt-carousel navigator=\"true\" indicator=\"true\">\n      <abt-carousel-item>\n        <img class=\"d-block w-100\" src=\"/images/pic1.jpg\" alt=\"The image cannot be displayed\" />\n      </abt-carousel-item>\n      <abt-carousel-item>\n        <img class=\"d-block w-100\" src=\"/images/pic2.jpg\" alt=\"The image cannot be displayed\" />\n      </abt-carousel-item>\n      <abt-carousel-item active=\"true\">\n        <img class=\"d-block w-100\" src=\"/images/pic3.jpg\" alt=\"The image cannot be displayed\" />\n      </abt-carousel-item>\n      <abt-carousel-item>\n        <img class=\"d-block w-100\" src=\"/images/pic4.jpg\" alt=\"The image cannot be displayed\" />\n      </abt-carousel-item>\n      <abt-carousel-item>\n        <img class=\"d-block w-100\" src=\"/images/pic5.jpg\" alt=\"The image cannot be displayed\" />\n      </abt-carousel-item>\n    </abt-carousel>\n    <aut-mark-down src=\"./docs/components/bootstrap/carousel/with-indicators.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      With captions\n    </legend>\n    <abt-carousel navigator=\"true\" indicator=\"true\">\n      <abt-carousel-item>\n        <img class=\"d-block w-100\" src=\"/images/pic1.jpg\" alt=\"The image cannot be displayed\" />\n        <div slot=\"caption\">\n          <h5>The Godfather - 1972</h5>\n          <p>Director: Francis Ford Coppola</p>\n        </div>\n      </abt-carousel-item>\n      <abt-carousel-item>\n        <img class=\"d-block w-100\" src=\"/images/pic2.jpg\" alt=\"The image cannot be displayed\" />\n        <div slot=\"caption\">\n          <h5>The Dark Knight - 2008</h5>\n          <p>Director: Christopher Nolan</p>\n        </div>\n      </abt-carousel-item>\n      <abt-carousel-item active=\"true\">\n        <img class=\"d-block w-100\" src=\"/images/pic3.jpg\" alt=\"The image cannot be displayed\" />\n        <div slot=\"caption\">\n          <h5>Inception - 2010</h5>\n          <p>Director: Christopher Nolan</p>\n        </div>\n      </abt-carousel-item>\n      <abt-carousel-item>\n        <img class=\"d-block w-100\" src=\"/images/pic4.jpg\" alt=\"The image cannot be displayed\" />\n        <div slot=\"caption\">\n          <h5>The Lord of the Rings: The Return of the King - 2003</h5>\n          <p>Director: Peter Jackson</p>\n        </div>\n      </abt-carousel-item>\n      <abt-carousel-item>\n        <img class=\"d-block w-100\" src=\"/images/pic5.jpg\" alt=\"The image cannot be displayed\" />\n        <div slot=\"caption\">\n          <h5>The Matrix - 1999</h5>\n          <p>Directors: Lana Wachowski, Lilly Wachowski</p>\n        </div>\n      </abt-carousel-item>\n    </abt-carousel>\n    <aut-mark-down src=\"./docs/components/bootstrap/carousel/with-captions.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      With HTML content\n    </legend>\n    <abt-carousel interval=\"15000\" navigator=\"true\" indicator=\"true\">\n      <abt-carousel-item>\n        <div class=\"container\" style=\"height:445px; background-color:gray; padding:20px; color:whitesmoke\">\n          <div class=\"row\">\n            <div class=\"col-sm\">\n              <img src=\"/images/ErnestHemingway.jpg\" />\n            </div>\n            <div class=\"col-sm\">\n              <h4 class=\"text-left\">Ernest Hemingway</h4>\n              <p class=\"text-justify\">\n                An American novelist, short story writer, and journalist. His economical and understated style had a strong influence on\n                20th-century fiction, while his life of adventure and his public image influenced later generations. Hemingway\n                produced most of his work between the mid-1920s and the mid-1950s, and won the Nobel Prize in Literature\n                in 1954.</p>\n            </div>\n            <div class=\"col-sm\">\n              <ul>\n                <b>Novels</b>\n                <hr/>\n                <li>The Old Man and the Sea</li>\n                <li>A Farewell to Arms</li>\n                <li>The Sun Also Rises</li>\n                <li>Across the River and into the Trees</li>\n                <li>The Garden of Eden</li>\n                <li>Islands in the Stream</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div slot=\"caption\">\n          Biography\n        </div>\n      </abt-carousel-item>\n      <abt-carousel-item active=\"true\">\n        <div class=\"container\" style=\"height:445px; background-color:gray; padding:20px; color:whitesmoke\">\n          <div class=\"row\">\n            <div class=\"col-sm\">\n              <img src=\"/images/JulesVerne.jpg\" />\n            </div>\n            <div class=\"col-sm\">\n              <h4 class=\"text-left\">Jules Verne</h4>\n              <p class=\"text-justify\">\n                Verne was born in the seaport of Nantes, where he was trained to follow in his father's footsteps as a lawyer, but quit the\n                profession early in life to write for magazines and the stage. His collaboration with the publisher Pierre-Jules\n                Hetzel led to the creation of the Voyages extraordinaires, a widely popular series of scrupulously researched\n                adventure novels including Journey to the Center of the Earth (1864), Twenty Thousand Leagues Under the Sea\n                (1870), and Around the World in Eighty Days (1873).\n              </p>\n            </div>\n            <div class=\"col-sm\">\n              <ul>\n                <b>Novels</b>\n                <hr/>\n                <li>Twenty Thousand Leagues Under the Sea</li>\n                <li>Journey to the Center of the Earth</li>\n                <li>Michael Strogoff</li>\n                <li>The Mysterious Island</li>\n                <li>Around the World in Eighty Days</li>\n                <li>From the Earth to the Moon</li>\n                <li>An Antarctic Mystery</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div slot=\"caption\">\n          Biography\n        </div>\n      </abt-carousel-item>\n      <abt-carousel-item>\n        <div class=\"container\" style=\"height:445px; background-color:gray; padding:20px; color:whitesmoke\">\n          <div class=\"row\">\n            <div class=\"col-sm\">\n              <img src=\"/images/VirginiaWoolf.jpg\" />\n            </div>\n            <div class=\"col-sm\">\n              <h4 class=\"text-left\">Virginia Woolf</h4>\n              <p class=\"text-justify\">\n                She is considered one of the foremost modernists authors of the 20th-century and a pioneer in the use of stream of consciousness\n                as a narrative device. Born in an affluent household in Kensington, London, she attended the Ladies' Department\n                of King's College and was acquainted with the early reformers of women's higher education.\n              </p>\n            </div>\n            <div class=\"col-sm\">\n              <ul>\n                <b>Novels</b>\n                <hr/>\n                <li>Mrs Dalloway</li>\n                <li>To the Lighthouse</li>\n                <li>The Waves</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div slot=\"caption\">\n          Biography\n        </div>\n      </abt-carousel-item>\n    </abt-carousel>\n    <aut-mark-down src=\"./docs/components/bootstrap/carousel/with-html-content.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      API Reference\n    </legend>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              abt-carousel\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">prev-title</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">Previous</td>\n          <td>Title of prev button</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">next-title</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">Next</td>\n          <td>Title of next button</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">prev-icon</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">carousel-control-prev-icon</td>\n          <td>Icon class for prev button</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">next-icon</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">carousel-control-next-icon</td>\n          <td>Icon class for next button</td>\n        </tr>\n\n        <tr>\n          <td scope=\"row\">interval</td>\n          <td class=\"text-nowrap\">number | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">5000</td>\n          <td>The amount of time to delay between automatically cycling an item. If <code>0</code>, carousel will not automatically cycle.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">keyboard</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">true</td>\n          <td>Whether the carousel should react to keyboard events.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">pause</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">true</td>\n          <td>\n            <p>If set to <code>true</code>, pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave.\n              If set to <code>false</code>, hovering over the carousel won't pause it.</p>\n            <p>On touch-enabled devices, when set to <code>true</code>, cycling will pause on touchend (once the user finished interacting\n              with the carousel) for two intervals, before automatically resuming. Note that this is in addition to the above\n              mouse behavior.</p>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">ride</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Autoplays the carousel after the user manually cycles the first item. If <code>true</code>, autoplays the carousel on\n            load.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">wrap</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">true</td>\n          <td>Whether the carousel should cycle continuously or have hard stops.\n          </td>\n        </tr>\n        <tr>\n          <td scope=\"row\">navigator</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Adding in the previous and next controls</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">indicator</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Adding in the indicators to the carousel.</td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Events\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">bs-slide</td>\n          <td class=\"text-nowrap\">Function</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td>This event fires immediately when the slide instance method is invoked.\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">bs-slid</td>\n          <td class=\"text-nowrap\">Function</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td>This event is fired when the carousel has completed its slide transition.</td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-carousel-item\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td scope=\"row\">active</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>The active attribute needs to be added to one of the <code>abt-carousel-items</code>. Otherwise, the carousel will not be visible.\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </fieldset>\n</template>\n"
});
___scope___.file("routes/bootstrap/carousel.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapCarousel = (function () {
    function BootstrapCarousel() {
    }
    return BootstrapCarousel;
}());
exports.BootstrapCarousel = BootstrapCarousel;
//# sourceMappingURL=carousel.js.map
});
___scope___.file("routes/bootstrap/collapse.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n\n\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>Collapse &amp; Accordion\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/collapse\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n\n    <p>\n      Toggle the visibility of content across your project with a few classes and our JavaScript plugins.\n    </p>\n\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n\n    <aut-mark-down src=\"./docs/components/bootstrap/collapse/usage.md\">\n    </aut-mark-down>\n\n  </fieldset>\n\n\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Example\n    </legend>\n\n    <p>\n      Click the buttons below to show and hide another element via class changes: You can use a\n      <code>link</code>,\n      <code>button</code>, or an\n      <code>abt-button</code>.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n        <p>\n          <a class=\"btn btn-link\" type=\"button\" ref=\"mylink\">\n            Link\n          </a>\n          <abt-button class=\"btn btn-primary\" type=\"button\" id=\"myBtn2\">\n            abt-button\n          </abt-button>\n          <button class=\"btn btn-primary\" type=\"button\" ref=\"myBtn\">\n            Button\n          </button>\n        </p>\n\n        <abt-collapse controlled-by.bind=\"[myBtn,'myBtn2', mylink]\" bs-show.call=\"showCollapse()\" bs-hide.call=\"hideCollapse()\">\n          <div class=\"card card-body\">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,\n            craft beer labore wes anderson cred nesciunt sapiente ea proident.\n          </div>\n        </abt-collapse>\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/collapse/basic.md\">\n        </aut-mark-down>\n      </abt-card-footer>\n    </abt-card>\n\n  </fieldset>\n\n\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Multiple targest\n    </legend>\n\n    <p>\n      you can hide or show a content from multiple targets.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n        <p>\n          <abt-button id=\"btnFirst\">\n            First element\n          </abt-button>\n          <abt-button id=\"btnSecond\">\n            Toggle second element\n          </abt-button>\n          <button class=\"btn btn-primary\" type=\"button\" ref=\"btnBoth\">\n            Toggle All elements\n          </button>\n        </p>\n        <div class=\"row\">\n          <div class=\"col\">\n            <abt-collapse controlled-by.bind=\"['btnFirst',btnBoth]\">\n              <div class=\"card card-body\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,\n                craft beer labore wes anderson cred nesciunt sapiente ea proident.\n              </div>\n            </abt-collapse>\n          </div>\n          <div class=\"col\">\n            <abt-collapse controlled-by.bind=\"['btnSecond',btnBoth]\">\n              <div class=\"card card-body\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,\n                craft beer labore wes anderson cred nesciunt sapiente ea proident.\n              </div>\n            </abt-collapse>\n          </div>\n          <div class=\"col\">\n            <abt-collapse controlled-by.bind=\"btnBoth\">\n              <div class=\"card card-body\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,\n                craft beer labore wes anderson cred nesciunt sapiente ea proident.\n              </div>\n            </abt-collapse>\n          </div>\n        </div>\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/collapse/multiple-targets.md\">\n        </aut-mark-down>\n      </abt-card-footer>\n    </abt-card>\n\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n\n    <legend>\n      Accordion\n    </legend>\n\n    <p>\n      We used\n      <code>abt-card</code> and\n      <code>abt-collapse</code> to buil an accordion,\n      <code>abt-accordion</code> .\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n        <abt-accordion>\n          <abt-accordion-item title=\"first\">\n            <div class=\"container\">\n\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n              non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n              helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\n              lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard\n              of them accusamus labore sustainable VHS.\n\n            </div>\n          </abt-accordion-item>\n\n          <abt-accordion-item title=\"second\" active.bind=\"true\">\n            <div class=\"container\">\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n              non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n              helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\n              lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard\n              of them accusamus labore sustainable VHS.\n            </div>\n          </abt-accordion-item>\n\n          <abt-accordion-item title=\"Third\">\n            <div class=\"container\">\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n              non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n              helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\n              lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard\n              of them accusamus labore sustainable VHS.\n            </div>\n          </abt-accordion-item>\n\n        </abt-accordion>\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/collapse/accordion.md\">\n        </aut-mark-down>\n      </abt-card-footer>\n\n    </abt-card>\n\n  </fieldset>\n\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Properties and Events\n    </legend>\n\n\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-collapse\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Applies your custom css classes on the collapse</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">controlled-by</td>\n          <td class=\"text-nowrap\">array of HTMLElement | string\n          </td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>\n            The elemnts will be able to control this instance of collapse. The values should be the\n            <code>id</code> of other htnl elements on the screen, or the value of\n            <code>ref</code> binding in aurelia.\n            <hr />\n            <b>PS:</b> If you use\n            <code>abt-button</code>, as the\n            <code>controlled-by</code> element, then you must equipe it with\n            <code>id</code> and\n            <b>NOT</b>\n            <code>ref</code>, since that is\n            <b>\n              <a route-href=\"route:bootstrap-buttons\">\n                containerless\n              </a>\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Css style attrinutes that you want to apply on the component.</td>\n        </tr>\n\n\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Events\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">bs-show</td>\n          <td class=\"text-nowrap\">Function</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td>\n            This event fires immediately when the instance is about to show.\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">bs-shown</td>\n          <td class=\"text-nowrap\">Function</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td>\n            This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">bs-hide</td>\n          <td class=\"text-nowrap\">Function</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td> This event fires immediately when the instance is about to hide.\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">bs-hidden</td>\n          <td class=\"text-nowrap\">Function</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td>This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <br />\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-accordion\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Applies your custom css classes on the accordion</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Css style attrinutes that you want to apply on the component.</td>\n        </tr>\n      </tbody>\n    </table>\n    <br />\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-accordion-item\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n            <td class=\"text-nowrap\" scope=\"row\">active</td>\n            <td class=\"text-nowrap\">boolean</td>\n            <td class=\"text-nowrap\">oneTime</td>\n            <td class=\"text-nowrap\">false</td>\n            <td>\n              When set to true,<code>active.bind=\"some_boolean\"</code> , the related item will be active at stratup.\n            </td>\n        </tr>\n        <tr>\n            <td class=\"text-nowrap\" scope=\"row\">class</td>\n            <td class=\"text-nowrap\">string</td>\n            <td class=\"text-nowrap\">oneWay</td>\n            <td class=\"text-nowrap\"></td>\n            <td>Applies your custom css classes on the collapse</td>\n          </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Css style attrinutes that you want to apply on the component.</td>\n        </tr>\n        <tr>\n            <td class=\"text-nowrap\" scope=\"row\">title</td>\n            <td class=\"text-nowrap\">string</td>\n            <td class=\"text-nowrap\">oneWay</td>\n            <td class=\"text-nowrap\"></td>\n            <td>The title of accordion item.</td>\n          </tr>\n      </tbody>\n    </table>\n\n  </fieldset>\n\n\n\n\n</template>\n"
});
___scope___.file("routes/bootstrap/collapse.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_toolbelt_1 = require("aurelia-toolbelt");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var Collapse = (function () {
    function Collapse(tr) {
        this.tr = tr;
    }
    Collapse.prototype.showCollapse = function () {
        this.tr.success('Collapse show event called');
    };
    Collapse.prototype.hideCollapse = function () {
        this.tr.warning('Collapse hide event called');
    };
    Collapse = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_toolbelt_1.ToastrService),
        __metadata("design:paramtypes", [typeof (_a = typeof aurelia_toolbelt_1.ToastrService !== "undefined" && aurelia_toolbelt_1.ToastrService) === "function" && _a || Object])
    ], Collapse);
    return Collapse;
    var _a;
}());
exports.Collapse = Collapse;
//# sourceMappingURL=collapse.js.map
});
___scope___.file("routes/bootstrap/dropdown.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>Dropdown\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/dropdown\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n\n    <p>\n      Dropdowns are toggleable, contextual overlays for displaying lists of links and more.\n    </p>\n\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n\n    <aut-mark-down src=\"./docs/components/bootstrap/dropdown/usage.md\">\n    </aut-mark-down>\n\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Contextual &amp; Splitted Drodowns\n    </legend>\n\n    <p>\n      Here's how you can add simple dropdowns, use\n      <code>type</code> attribute to change the contextual color of dropdowns, and use\n      <code>split</code>\n      attribute to attache an extra button next to your dropdown.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n\n        <abt-dropdown menu-style=\"z-index: 1022;\" title=\"Action\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n\n        <abt-dropdown menu-style=\"z-index: 1022;\" title=\"Action\" type=\"secondary\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n        <abt-dropdown menu-style=\"z-index: 1022;\" title=\"Action\" type=\"info\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n        <abt-dropdown class=\"mr-5\" menu-style=\"z-index: 1022;\" title=\"Action\" type=\"success\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n        <abt-dropdown class=\"ml-5\" menu-style=\"z-index: 1022;\" title=\"Action\" type=\"warning\" split>\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n        <abt-dropdown menu-style=\"z-index: 1022;\" title=\"Action\" type=\"danger\" split=\"true\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n        <abt-dropdown menu-style=\"z-index: 1022;\" title=\"Action\" type=\"dark\" split.bind=\"true\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/dropdown/contextual-split.md\">\n        </aut-mark-down>\n\n      </abt-card-footer>\n    </abt-card>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Sizing\n    </legend>\n\n    <p>\n      simply add\n      <code>size</code> attribute with values,\n      <code>sm</code> ,\n      <code>md</code> , or\n      <code>lg</code>.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n\n        <abt-dropdown title=\"Small button\" size=\"sm\" type=\"secondary\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n        <abt-dropdown title=\"Normal button\" type=\"secondary\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n        <abt-dropdown title=\"Large button\" size=\"lg\" type=\"secondary\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n\n        <abt-dropdown title=\"Small split button\" size=\"sm\" split type=\"secondary\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n        <abt-dropdown title=\"Normal split button\" split type=\"secondary\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n        <abt-dropdown title=\"Large split button\" size=\"lg\" split type=\"secondary\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/dropdown/sizing.md\">\n        </aut-mark-down>\n\n      </abt-card-footer>\n    </abt-card>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Drop variations, left, top, right &amp; Menu-Right-Aligned\n    </legend>\n\n    <p>\n      You can change the position of drop down menu, by seeting the\n      <code>placement</code> and\n      <code>align-right</code> attributes.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n        <abt-dropdown class=\"ml-5\" title=\"Drop Left\" type=\"secondary\" placement=\"left\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n        <abt-dropdown title=\"Drop Up/Top\" type=\"secondary\" placement=\"top\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n        <abt-dropdown title=\"Drop Right\" class=\"mr-5\" type=\"secondary\" placement=\"right\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n\n\n        <abt-dropdown title=\"Align Right Menu\" class=\"ml-5\" align-right>\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n        <abt-dropdown title=\"Align Left Menu\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/dropdown/variations.md\">\n        </aut-mark-down>\n\n      </abt-card-footer>\n    </abt-card>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Dropdown headers, dividers, and forms\n    </legend>\n\n    <p>\n      Use\n      <code>abt-dropdown-header</code> and\n      <code>abt-dropdown-divider</code> to add headers and dividers to your dropdown. If you want to have\n      <code>forms</code>\n      in your drop down do\n      <b>not</b> use\n      <code>abt-dropdown-item</code>, just simply put the\n      <code>form</code>\n      into\n      <code>abt-drodown</code>.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n        <abt-dropdown title=\"Dropdown with header\">\n          <abt-dropdown-header>Important Actions</abt-dropdown-header>\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n        </abt-dropdown>\n\n        <abt-dropdown type=\"secondary\" title=\"Dropdown Divider\" class=\"mr-5\">\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Another action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n          <abt-dropdown-divider></abt-dropdown-divider>\n          <abt-dropdown-item>Separated link</abt-dropdown-item>\n        </abt-dropdown>\n\n        <abt-dropdown type=\"secondary\" title=\"Dropdown Form\" class=\"ml-5\" align-right>\n          <form class=\"px-4 py-3\">\n            <div class=\"form-group\">\n              <label for=\"exampleDropdownFormEmail1\">Email address</label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleDropdownFormEmail1\" placeholder=\"email@example.com\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleDropdownFormPassword1\">Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"exampleDropdownFormPassword1\" placeholder=\"Password\">\n            </div>\n            <div class=\"form-check\">\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"dropdownCheck\">\n              <label class=\"form-check-label\" for=\"dropdownCheck\">\n                Remember me\n              </label>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n          </form>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">New around here? Sign up</a>\n          <a class=\"dropdown-item\" href=\"#\">Forgot password?</a>\n        </abt-dropdown>\n\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/dropdown/headers-dividers.md\">\n        </aut-mark-down>\n      </abt-card-footer>\n    </abt-card>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Dynamic Dropdowns\n    </legend>\n\n    <p>\n      You can bind array of\n      <code>\n        objects\n      </code>,\n      <code>strings</code>,\n      <code>booleans</code>, or even use\n      <i>matcher functions</i> for dropdowns.All the same as\n      <code>select</code>\n      element in\n      <a href=\"http://aurelia.io/docs/binding/selects\">Aurelia</a>\n    </p>\n\n\n    <h4 class=\"mt-5\">\n      <i>\n        Objects\n      </i>\n    </h4>\n    <hr />\n\n    <abt-card>\n      <abt-card-header>\n        Choose your object\n      </abt-card-header>\n      <abt-card-body>\n\n        <abt-dropdown class=\"mb-2\" value.bind=\"selectedProduct\" type=\"secondary\" title=\"choose...\">\n          <abt-dropdown-item model.bind=\"null\">\n            choose...\n          </abt-dropdown-item>\n          <abt-dropdown-divider></abt-dropdown-divider>\n          <abt-dropdown-item repeat.for=\"product of products\" model.bind=\"product\">\n            ${product.id} - ${product.name}\n          </abt-dropdown-item>\n        </abt-dropdown>\n\n        <abt-alert type=\"secondary\" class=\"text-center\">\n          <span>\n            Selected product:&nbsp;\n            <b>${selectedProduct.id} - ${selectedProduct.name}</b>\n          </span>\n        </abt-alert>\n      </abt-card-body>\n      <abt-card-footer>\n        <abt-navs tabs>\n          <abt-nav-item title=\"View\">\n            <aut-mark-down src=\"./docs/components/bootstrap/dropdown/dynamic-objects.md\">\n            </aut-mark-down>\n          </abt-nav-item>\n          <abt-nav-item title=\"ViewModel\">\n            <aut-mark-down src=\"./docs/components/bootstrap/dropdown/dynamic-objects-ts.md\">\n            </aut-mark-down>\n          </abt-nav-item>\n        </abt-navs>\n      </abt-card-footer>\n    </abt-card>\n\n\n    <h4 class=\"mt-5\">\n      <i>Matchers\n      </i>\n    </h4>\n    <hr />\n\n    <abt-card>\n      <abt-card-header>\n        Choose your object\n      </abt-card-header>\n      <abt-card-body>\n\n        <abt-dropdown class=\"mb-2\" value.bind=\"selected_product_matcher\" matcher.bind=\"productMatcher\" type=\"secondary\" title=\"choose...\">\n          <abt-dropdown-item model.bind=\"null\">\n            choose...\n          </abt-dropdown-item>\n          <abt-dropdown-divider></abt-dropdown-divider>\n          <abt-dropdown-item repeat.for=\"product of products\" model.bind=\"product\">\n            ${product.id} - ${product.name}\n          </abt-dropdown-item>\n        </abt-dropdown>\n\n        <abt-alert type=\"secondary\" class=\"text-center\">\n          <span>\n            Selected product: &nbsp;\n            <b>${selected_product_matcher.id} - ${selected_product_matcher.name}</b>\n          </span>\n        </abt-alert>\n      </abt-card-body>\n      <abt-card-footer>\n        <abt-navs tabs>\n          <abt-nav-item title=\"View\">\n            <aut-mark-down src=\"./docs/components/bootstrap/dropdown/dynamic-matchers.md\">\n            </aut-mark-down>\n          </abt-nav-item>\n          <abt-nav-item title=\"ViewModel\">\n            <aut-mark-down src=\"./docs/components/bootstrap/dropdown/dynamic-matchers-ts.md\">\n            </aut-mark-down>\n          </abt-nav-item>\n        </abt-navs>\n      </abt-card-footer>\n    </abt-card>\n\n\n\n    <h4 class=\"mt-5\">\n      <i>Booleans\n      </i>\n    </h4>\n    <hr />\n\n    <abt-card>\n      <abt-card-header>\n        Answer the question\n      </abt-card-header>\n      <abt-card-body>\n\n        <abt-dropdown class=\"mb-2\" value.bind=\"likesTacos\" type=\"secondary\" title=\"like your tacos\">\n          <abt-dropdown-item model.bind=\"null\">\n            Do you like tacos\n          </abt-dropdown-item>\n          <abt-dropdown-divider></abt-dropdown-divider>\n          <abt-dropdown-item model.bind=\"true\">\n            Yes\n          </abt-dropdown-item>\n          <abt-dropdown-item model.bind=\"false\">\n            No\n          </abt-dropdown-item>\n        </abt-dropdown>\n\n        <abt-alert type=\"secondary\" class=\"text-center\">\n          <span>\n            Likes Tacos: &nbsp;\n            <b>${likesTacos}</b>\n          </span>\n        </abt-alert>\n\n      </abt-card-body>\n      <abt-card-footer>\n        <abt-navs tabs>\n          <abt-nav-item title=\"View\">\n            <aut-mark-down src=\"./docs/components/bootstrap/dropdown/dynamic-booleans.md\">\n            </aut-mark-down>\n          </abt-nav-item>\n          <abt-nav-item title=\"ViewModel\">\n            <aut-mark-down src=\"./docs/components/bootstrap/dropdown/dynamic-booleans-ts.md\">\n            </aut-mark-down>\n          </abt-nav-item>\n        </abt-navs>\n      </abt-card-footer>\n    </abt-card>\n\n\n    <h4 class=\"mt-5\">\n      <i>Strings\n      </i>\n    </h4>\n    <hr />\n\n    <abt-card>\n      <abt-card-header>\n        Choose your product\n      </abt-card-header>\n      <abt-card-body>\n\n        <div class=\"row\">\n          <div class=\"col-sm-3\">\n            <abt-dropdown class=\"mb-2\" value.bind=\"selected_Item_String\" type=\"secondary\" title=\"Choose your hardware\">\n              <abt-dropdown-item value=\"\">\n                Choose your hardware\n              </abt-dropdown-item>\n              <abt-dropdown-divider></abt-dropdown-divider>\n              <abt-dropdown-item repeat.for=\"str of stringObjects\" value.bind=\"str\">\n                ${str}\n              </abt-dropdown-item>\n            </abt-dropdown>\n          </div>\n          <div class=\"col-sm-3\">\n            <select value.bind=\"selected_Item_String\" class=\"form-control\">\n              <option value=\"\">\n                Choose your hardware\n              </option>\n              <option repeat.for=\"str of stringObjects\" value.bind=\"str\">\n                ${str}\n              </option>\n            </select>\n          </div>\n        </div>\n\n        <abt-alert type=\"secondary\" class=\"text-center\">\n          <span>\n            Your selected items is: &nbsp;\n            <b>${selected_Item_String}</b>\n          </span>\n        </abt-alert>\n\n      </abt-card-body>\n      <abt-card-footer>\n        <abt-navs tabs>\n          <abt-nav-item title=\"View\">\n            <aut-mark-down src=\"./docs/components/bootstrap/dropdown/dynamic-strings.md\">\n            </aut-mark-down>\n          </abt-nav-item>\n          <abt-nav-item title=\"ViewModel\">\n            <aut-mark-down src=\"./docs/components/bootstrap/dropdown/dynamic-strings-ts.md\">\n            </aut-mark-down>\n          </abt-nav-item>\n        </abt-navs>\n      </abt-card-footer>\n    </abt-card>\n\n  </fieldset>\n\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Events\n    </legend>\n\n    <p>\n      <code>\n        abt-dropdown\n      </code>\n      comes with several events,\n      <code>changed</code>, which is called when you select items in dropdown menu,\n      <code>click</code>, which is called when in\n      <code>split</code> mode and you click the\n      <code>button</code>\n      <b>not</b> the\n      <code>dropdown</code>, it behaves similar to the\n      <code>click</code> event of\n      <code>abt-button</code>.\n    </p>\n\n\n    <h4 class=\"mt-5\">\n      <i>\n        click &amp; changed\n      </i>\n    </h4>\n    <hr />\n\n    <abt-card>\n      <abt-card-body>\n\n        <abt-alert type=\"info\">\n          Click the button section first in order to load data for the dropdown part.\n        </abt-alert>\n\n        <abt-dropdown class=\"mb-2\" value.bind=\"selectedFramework\" align-right split title=\"Choose your framework\" click.call=\"loadFrameworks(event,target)\"\n          changed.call=\"selectedChanged(selected)\">\n          <abt-dropdown-item value=\"\">\n            Choose your framework\n          </abt-dropdown-item>\n          <abt-dropdown-divider></abt-dropdown-divider>\n          <abt-dropdown-item repeat.for=\"framework of frameworks\" value.bind=\"framework\">\n            ${framework}\n          </abt-dropdown-item>\n        </abt-dropdown>\n\n        <abt-alert type=\"secondary\" class=\"text-center\">\n          <span>\n            Your selected framework is: &nbsp;\n            <b>${selectedFramework}</b>\n          </span>\n        </abt-alert>\n      </abt-card-body>\n\n      <abt-card-footer>\n        <abt-navs tabs>\n          <abt-nav-item title=\"View\">\n            <aut-mark-down src=\"./docs/components/bootstrap/dropdown/events.md\">\n            </aut-mark-down>\n          </abt-nav-item>\n          <abt-nav-item title=\"ViewModel\">\n            <aut-mark-down src=\"./docs/components/bootstrap/dropdown/events-ts.md\">\n            </aut-mark-down>\n          </abt-nav-item>\n        </abt-navs>\n      </abt-card-footer>\n\n    </abt-card>\n\n  </fieldset>\n\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Properties and Events\n    </legend>\n\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              abt-dropdown\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">align-right</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Aligns dropdown menu items to the right of the dropdown itself. Can be used as single attribut,\n            <code>align-righ</code>, or with binding and values.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">boundary</td>\n          <td class=\"text-nowrap\">string | element</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">scrollParent</td>\n          <td>Overflow constraint boundary of the dropdown menu. Accepts the values of\n            <code>'viewport'</code>,\n            <code>'window'</code>,\n            <code>'scrollParent'</code>, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's\n            <a href=\"https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement\">preventOverflow docs</a>.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Applies the your custom css class on dropdown</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">disabled</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Setting this to true will disable the dropdown. You can use it both as a simple attribute (\n            <code>disabled</code> ) or binding aurelia way (\n            <code>disabled=\"true\"</code> or disabled.bind=\"some_boolean_value\" ).\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">flip</td>\n          <td class=\"text-nowrap\">boolean</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">true</td>\n          <td>Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to Popper.js's\n            <a href=\"https://popper.js.org/popper-documentation.html#modifiers..flip.enabled\">flip docs</a>.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">matcher</td>\n          <td class=\"text-nowrap\">Function</td>\n          <td class=\"text-nowrap\">twoWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>A matcher function wich selects and matches the items in dropdown to the\n            <code>value</code> property object.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">menu-class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Applies your custom css class on dropdown menu.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">menu-style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Css style attrinutes that you want to apply on the dropdown menu.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">offset</td>\n          <td class=\"text-nowrap\">number</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">0</td>\n          <td>\n            Offset of the dropdown relative to its target. For more information refer to Popper.js's\n            <a href=\"https://popper.js.org/popper-documentation.html#modifiers..offset.offset\">offset docs</a>.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">placement</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>\n            The position of the dropdown menu to be open, it can be\n            <code>top</code>,\n            <code>right</code>, and\n            <code>left</code>. If not specified dropdown menu will be opened at the bottom.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">split</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>\n            Indictaes whether the dropdown should be split, and have an additional button next to it or not. It can be used as single\n            attribute or with values and binding. When\n            <code>true</code>, then you have an additional button and you can handle the\n            <code>click</code> event. Otherwise, even if you handle the\n            <code>click</code> event it won't be triggered.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">size</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">md</td>\n          <td>Indicates the size for abt-dropdown, and values can be\n            <code>'sm'</code>,\n            <code>'md'</code>, and\n            <code>'lg'</code>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Css style attrinutes that you want to apply on the component.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">title</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>The value you like to be shown on the dropdown when no item is selected.</td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">type</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">primary</td>\n          <td>The type of dropdown, contextual values of bootstrap,\n            <code>primary</code>,\n            <code>secondary</code>,\n            <code>info</code>,\n            <code>success</code>,\n            <code>warning</code>,\n            <code>danger</code>,\n            <code>light</code>, and\n            <code>dark</code>\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">value</td>\n          <td class=\"text-nowrap\">any</td>\n          <td class=\"text-nowrap\">twoWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>The value you want to bound to the dropdown, it will change whenever the selcted item changes in dropdown, and\n            that will trigger the\n            <code>change</code> event.</td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Events\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">click</td>\n          <td class=\"text-nowrap\">Promise</td>\n          <td class=\"text-nowrap\">call (event, target)</td>\n          <td class=\"text-nowrap\"></td>\n          <td>This event fires immediately when you click the button part of the dropdown when in\n            <code>split</code> mode\n            <hr />\n            <ul>\n              <li>\n                <b>PS:</b>\n                The\n                <code>abt-dropdown</code> has an extra\n                <code>slot</code> named\n                <code>\n                  <em>\n                    <b>\n                      <i>loading</i>\n                    </b>\n                  </em>\n                </code>, if your\n                <code>click</code> event returns a promise, the\n                <code>loading slot</code> you've provided will be rendered until the promise resolves.\n              </li>\n              <li>\n                <b>PS:</b> The button section of\n                <code>abt-dropdown</code> will remain disabled also, until the promise resolves.\n              </li>\n            </ul>\n\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">changed</td>\n          <td class=\"text-nowrap\">Function</td>\n          <td class=\"text-nowrap\">call (event, target)</td>\n          <td class=\"text-nowrap\"></td>\n          <td>\n            This event fires when you change the selection item in dropdown\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Extra Slots\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"2\">\n            <b>\n              loading\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"3\">\n            You can use this extra slot to show some loading indicator to visualize that some background work is in progress.\n          </td>\n        </tr>\n\n      </tbody>\n    </table>\n\n\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-dropdown-item\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Applies the your custom css class on dropdown items</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">disabled</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Setting this to true will disable the dropdown item. You can use it both as a simple attribute (\n            <code>disabled</code> ) or binding aurelia way (\n            <code>disabled=\"true\"</code> or disabled.bind=\"some_boolean_value\" ).\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">model</td>\n          <td class=\"text-nowrap\">any</td>\n          <td class=\"text-nowrap\">twoWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>\n            The model which bounds to dropdown item, that will change the value of\n            <code>dropdown</code> when selcted.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Css style attrinutes that you want to apply on the component.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">value</td>\n          <td class=\"text-nowrap\">any</td>\n          <td class=\"text-nowrap\">twoWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>\n            The value of the dropdown item, that will change the value of\n            <code>dropdown</code> when selcted.\n          </td>\n        </tr>\n\n      </tbody>\n    </table>\n\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              abt-dropdown-divider\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n\n            This component has neither attributes nor events, it just renders a divider between dropdown items.\n\n          </td>\n        </tr>\n\n      </tbody>\n\n      <table class=\"table table-striped table-bordered\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <td class=\"text-nowrap\" colspan=\"5\">\n              <b>\n                abt-dropdown-header\n              </b>\n            </td>\n          </tr>\n          <tr>\n            <th class=\"text-nowrap\" scope=\"col\">Name</th>\n            <th class=\"text-nowrap\" scope=\"col\">Type</th>\n            <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n            <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n            <th class=\"text-nowrap\" scope=\"col\">Description</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class=\"text-nowrap\" colspan=\"5\">\n\n              This component has neither attributes nor events, it just renders the content as the header elemnts inside the dropdown,\n              something like\n              <code>optgroup</code>\n\n            </td>\n          </tr>\n\n        </tbody>\n      </table>\n\n  </fieldset>\n\n</template>\n"
});
___scope___.file("routes/bootstrap/dropdown.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_http_client_1 = require("aurelia-http-client");
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_toolbelt_1 = require("aurelia-toolbelt");
var BootstrapDropdownRoute = (function () {
    function BootstrapDropdownRoute(http, ts) {
        this.http = http;
        this.ts = ts;
        this.products = [
            { id: 0, name: 'Motherboard' },
            { id: 1, name: 'CPU' },
            { id: 2, name: 'Memory' }
        ];
        this.selectedProduct = null;
        this.selected_product_matcher = { id: 1, name: 'CPU' };
        this.likesTacos = null;
        this.selected_Item_String = 'RAM';
        this.stringObjects = ['Motherboard', 'CPU', 'RAM'];
        this.productMatcher = function (a, b) { return a === b || (a.name === b.name); };
    }
    BootstrapDropdownRoute.prototype.loadFrameworks = function (event, target) {
        var _this = this;
        return this.http.get('./frameworks.json')
            .then(function (res) {
            var x = JSON.parse(res.response);
            var i;
            _this.frameworks = [];
            for (i = 0; i < x.length; i++) {
                _this.frameworks.push(x[i]);
            }
        });
    };
    BootstrapDropdownRoute.prototype.dropDownShown = function () {
        this.ts.success('The dropdown shown event got fired');
    };
    BootstrapDropdownRoute.prototype.selectedChanged = function (selectedItem) {
        this.ts.info("Your favorite js framework is: " + selectedItem);
    };
    BootstrapDropdownRoute = __decorate([
        aurelia_framework_1.inject(aurelia_http_client_1.HttpClient, aurelia_toolbelt_1.ToastrService),
        __metadata("design:paramtypes", [typeof (_a = typeof aurelia_http_client_1.HttpClient !== "undefined" && aurelia_http_client_1.HttpClient) === "function" && _a || Object, typeof (_b = typeof aurelia_toolbelt_1.ToastrService !== "undefined" && aurelia_toolbelt_1.ToastrService) === "function" && _b || Object])
    ], BootstrapDropdownRoute);
    return BootstrapDropdownRoute;
    var _a, _b;
}());
exports.BootstrapDropdownRoute = BootstrapDropdownRoute;
//# sourceMappingURL=dropdown.js.map
});
___scope___.file("routes/bootstrap/float-input.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>Float Labels\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/float-input\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n    Implementation of Float Label pattern for Bootstrap 4.\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Third-party library\n    </legend>\n    This component is created based on the following library.\n    <aut-microlink round.bind=\"false\" url=\"https://github.com/tonystar/bootstrap-float-label\"></aut-microlink>\n    <br>\n    <abt-alert type=\"success\">\n      <i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i>\n      <b> License : </b>\n      <a href=\"https://github.com/tonystar/bootstrap-float-label/blob/master/LICENSE\">MIT</a>\n    </abt-alert>\n    <abt-alert type=\"danger\">\n      <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n      <b> Currently this component does not support right-to-left.</b>\n    </abt-alert>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n    <aut-mark-down src=\"./docs/components/bootstrap/float-input/usage.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Basic example\n    </legend>\n    <abt-float-input type='email' placeholder='email@example.com'>Email</abt-float-input>\n    <aut-mark-down src=\"./docs/components/bootstrap/float-input/basic-example.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Without placeholder\n    </legend>\n    <abt-float-input type='email'>Email</abt-float-input>\n    <aut-mark-down src=\"./docs/components/bootstrap/float-input/placeholder.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Sizing\n    </legend>\n    <abt-float-input type='email' size='sm' placeholder='email@example.com'>Email</abt-float-input>\n    <abt-float-input type='email' placeholder='email@example.com'>Email</abt-float-input>\n    <abt-float-input type='email' size='lg' placeholder='email@example.com'>Email</abt-float-input>\n    <aut-mark-down src=\"./docs/components/bootstrap/float-input/sizing.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Color\n    </legend>\n    <abt-float-input type='email' placeholder='email@example.com' label-color='darkviolet' placeholder-color='darkgreen'>Email</abt-float-input>\n    <aut-mark-down src=\"./docs/components/bootstrap/float-input/color.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Styling\n    </legend>\n    <abt-float-input size=\"lg\" type='email' label-font-size=\"125%\" placeholder-font-size=\"200%\" placeholder-top=\".2em\" placeholder-opacity=\".8\"\n      placeholder='email@example.com'>Email</abt-float-input>\n    <aut-mark-down src=\"./docs/components/bootstrap/float-input/styling.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      API Reference\n    </legend>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-float-input\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">size</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">md</td>\n          <td>Set size to the component. Acceptable values : 'sm', 'md', 'lg'.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">type</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">md</td>\n          <td>The type attribute specifies the type of\n            <code>input</code> element to display.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">placeholder-color</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set the color of placeholder.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">placeholder-font-size</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set the font size of placeholder.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">placeholder-opacity</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set the opacity of placeholder.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">placeholder-top</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set the top of placeholder.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">label-color</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set the color of float label.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">label-font-size</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set the font size of float label.\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </fieldset>\n</template>\n"
});
___scope___.file("routes/bootstrap/float-input.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapFloatInput = (function () {
    function BootstrapFloatInput() {
    }
    return BootstrapFloatInput;
}());
exports.BootstrapFloatInput = BootstrapFloatInput;
//# sourceMappingURL=float-input.js.map
});
___scope___.file("routes/bootstrap/input-group.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>Input group\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/inputgroup\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n    Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and\n    custom file inputs. </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n    <aut-mark-down src=\"./docs/components/bootstrap/inputgroup/usage.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Basic example\n    </legend>\n    <abt-inputgroup class=\"mb-3\">\n      <abt-inputgroup-prepend>\n        <abt-inputgroup-text>@</abt-inputgroup-text>\n      </abt-inputgroup-prepend>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\">\n    </abt-inputgroup>\n\n    <abt-inputgroup class=\"mb-3\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\">\n      <abt-inputgroup-append>\n        <abt-inputgroup-text>@example.com</abt-inputgroup-text>\n      </abt-inputgroup-append>\n    </abt-inputgroup>\n\n    <label for=\"basic-url\">Your vanity URL</label>\n    <abt-inputgroup class=\"mb-3\">\n      <abt-inputgroup-append>\n        <abt-inputgroup-text>https://example.com/users/</abt-inputgroup-text>\n      </abt-inputgroup-append>\n      <input type=\"text\" class=\"form-control\" id=\"basic-url\">\n    </abt-inputgroup>\n\n    <abt-inputgroup id=\"inputgroup\" class=\"mb-3\">\n      <abt-inputgroup-prepend id=\"inputgroup-prepend\">\n        <abt-inputgroup-text id=\"inputgroup-text1\">$</abt-inputgroup-text>\n      </abt-inputgroup-prepend>\n      <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">\n      <abt-inputgroup-append id=\"inputgroup-append\">\n        <abt-inputgroup-text id=\"inputgroup-text2\">.00</abt-inputgroup-text>\n      </abt-inputgroup-append>\n    </abt-inputgroup>\n\n    <abt-inputgroup class=\"mb-3\">\n      <abt-inputgroup-prepend>\n        <abt-inputgroup-text style=\"height:62px\">With textarea</abt-inputgroup-text>\n      </abt-inputgroup-prepend>\n      <textarea class=\"form-control\" aria-label=\"With textarea\"></textarea>\n    </abt-inputgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/inputgroup/basic-example.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Sizing\n    </legend>\n\n    <abt-inputgroup size=\"sm\" class=\"mb-3\">\n      <abt-inputgroup-prepend>\n        <abt-inputgroup-text>Small</abt-inputgroup-text>\n      </abt-inputgroup-prepend>\n      <input type=\"text\" class=\"form-control\">\n    </abt-inputgroup>\n\n    <abt-inputgroup class=\"mb-3\">\n      <abt-inputgroup-prepend>\n        <abt-inputgroup-text>Default</abt-inputgroup-text>\n      </abt-inputgroup-prepend>\n      <input type=\"text\" class=\"form-control\">\n    </abt-inputgroup>\n\n    <abt-inputgroup size=\"lg\" class=\"mb-3\">\n      <abt-inputgroup-prepend>\n        <abt-inputgroup-text>Large</abt-inputgroup-text>\n      </abt-inputgroup-prepend>\n      <input type=\"text\" class=\"form-control\">\n    </abt-inputgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/inputgroup/sizing.md\">\n    </aut-mark-down>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Checkboxes and radios\n    </legend>\n    <abt-inputgroup class=\"mb-3\">\n      <abt-inputgroup-prepend>\n        <abt-inputgroup-text style=\"height:38px\">\n          <input type=\"checkbox\" aria-label=\"Checkbox for following text input\">\n        </abt-inputgroup-text>\n      </abt-inputgroup-prepend>\n      <input type=\"text\" class=\"form-control\" aria-label=\"Text input with checkbox\">\n    </abt-inputgroup>\n\n    <abt-inputgroup>\n      <abt-inputgroup-prepend>\n        <abt-inputgroup-text style=\"height:38px\">\n          <input type=\"radio\" aria-label=\"Radio button for following text input\">\n        </abt-inputgroup-text>\n      </abt-inputgroup-prepend>\n      <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\">\n    </abt-inputgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/inputgroup/checkboxes-radios.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Multiple inputs\n    </legend>\n    <abt-inputgroup>\n      <abt-inputgroup-prepend>\n        <abt-inputgroup-text id=\"\">First and last name</abt-inputgroup-text>\n      </abt-inputgroup-prepend>\n      <input type=\"text\" class=\"form-control\">\n      <input type=\"text\" class=\"form-control\">\n    </abt-inputgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/inputgroup/multiple-inputs.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Multiple addons\n    </legend>\n    <abt-inputgroup class=\"mb-3\">\n      <abt-inputgroup-prepend>\n        <abt-inputgroup-text>$</abt-inputgroup-text>\n        <abt-inputgroup-text>0.00</abt-inputgroup-text>\n      </abt-inputgroup-prepend>\n      <input type=\"text\" class=\"form-control\">\n    </abt-inputgroup>\n\n    <abt-inputgroup size=\"sm\" class=\"mb-3\">\n      <input type=\"text\" class=\"form-control\">\n      <abt-inputgroup-append>\n        <abt-inputgroup-text>$</abt-inputgroup-text>\n        <abt-inputgroup-text>0.00</abt-inputgroup-text>\n      </abt-inputgroup-append>\n    </abt-inputgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/inputgroup/multiple-addons.md\">\n    </aut-mark-down>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Button addons\n    </legend>\n    <abt-inputgroup class=\"mb-3\">\n      <abt-inputgroup-prepend>\n        <abt-button outline color=\"secondary\">\n          Button\n        </abt-button>\n      </abt-inputgroup-prepend>\n      <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\">\n    </abt-inputgroup>\n\n    <abt-inputgroup class=\"mb-3\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\">\n      <abt-inputgroup-append>\n        <abt-button outline color=\"secondary\">\n          Button\n        </abt-button>\n      </abt-inputgroup-append>\n    </abt-inputgroup>\n\n    <abt-inputgroup class=\"input-group mb-3\">\n      <abt-inputgroup-prepend>\n        <abt-button outline color=\"secondary\">\n          Button\n        </abt-button>\n        <abt-button outline color=\"secondary\">\n          Button\n        </abt-button>\n      </abt-inputgroup-prepend>\n      <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\">\n    </abt-inputgroup>\n\n    <abt-inputgroup>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\">\n      <abt-inputgroup-append>\n        <abt-button outline color=\"secondary\">\n          Button\n        </abt-button>\n        <abt-button outline color=\"secondary\">\n          Button\n        </abt-button>\n      </abt-inputgroup-append>\n    </abt-inputgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/inputgroup/button-addons.md\">\n    </aut-mark-down>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Buttons with dropdowns\n    </legend>\n    <abt-inputgroup class=\"mb-3\">\n      <abt-inputgroup-prepend>\n        <abt-dropdown color=\"secondary\" title=\"Dropdown\">\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Another action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n          <abt-dropdown-divider></abt-dropdown-divider>\n          <abt-dropdown-item>Separated link</abt-dropdown-item>\n        </abt-dropdown>\n      </abt-inputgroup-prepend>\n      <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\n    </abt-inputgroup>\n\n    <abt-inputgroup>\n      <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\n      <abt-inputgroup-append>\n        <abt-dropdown color=\"secondary\" title=\"Dropdown\">\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Another action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n          <abt-dropdown-divider></abt-dropdown-divider>\n          <abt-dropdown-item>Separated link</abt-dropdown-item>\n        </abt-dropdown>\n      </abt-inputgroup-append>\n    </abt-inputgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/inputgroup/button-dropdowns.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Segmented buttons\n    </legend>\n    <abt-inputgroup class=\"mb-3\">\n      <abt-inputgroup-prepend>\n        <abt-dropdown split title=\"Action\">\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Another action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n          <abt-dropdown-divider></abt-dropdown-divider>\n          <abt-dropdown-item>Separated link</abt-dropdown-item>\n        </abt-dropdown>\n      </abt-inputgroup-prepend>\n      <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\n    </abt-inputgroup>\n\n    <abt-inputgroup>\n      <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\n      <abt-inputgroup-append>\n        <abt-dropdown split title=\"Action\">\n          <abt-dropdown-item>Action</abt-dropdown-item>\n          <abt-dropdown-item>Another action</abt-dropdown-item>\n          <abt-dropdown-item>Something else here</abt-dropdown-item>\n          <abt-dropdown-divider></abt-dropdown-divider>\n          <abt-dropdown-item>Separated link</abt-dropdown-item>\n        </abt-dropdown>\n      </abt-inputgroup-append>\n    </abt-inputgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/inputgroup/segmented-buttons.md\">\n    </aut-mark-down>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Custom select\n    </legend>\n    <abt-inputgroup class=\"mb-3\">\n      <abt-inputgroup-prepend>\n        <abt-inputgroup-text for=\"inputGroupSelect01\">Options</abt-inputgroup-text>\n      </abt-inputgroup-prepend>\n      <select class=\"custom-select\" id=\"inputGroupSelect01\">\n        <option selected>Choose...</option>\n        <option value=\"1\">One</option>\n        <option value=\"2\">Two</option>\n        <option value=\"3\">Three</option>\n      </select>\n    </abt-inputgroup>\n\n    <abt-inputgroup class=\"mb-3\">\n      <select class=\"custom-select\" id=\"inputGroupSelect02\">\n        <option selected>Choose...</option>\n        <option value=\"1\">One</option>\n        <option value=\"2\">Two</option>\n        <option value=\"3\">Three</option>\n      </select>\n      <abt-inputgroup-append>\n        <abt-inputgroup-text for=\"inputGroupSelect02\">Options</abt-inputgroup-text>\n      </abt-inputgroup-append>\n    </abt-inputgroup>\n\n    <abt-inputgroup class=\"mb-3\">\n      <abt-inputgroup-prepend>\n        <abt-button outline color=\"secondary\">\n          Button\n        </abt-button>\n      </abt-inputgroup-prepend>\n      <select class=\"custom-select\" id=\"inputGroupSelect03\">\n        <option selected>Choose...</option>\n        <option value=\"1\">One</option>\n        <option value=\"2\">Two</option>\n        <option value=\"3\">Three</option>\n      </select>\n    </abt-inputgroup>\n\n    <abt-inputgroup>\n      <select class=\"custom-select\" id=\"inputGroupSelect04\">\n        <option selected>Choose...</option>\n        <option value=\"1\">One</option>\n        <option value=\"2\">Two</option>\n        <option value=\"3\">Three</option>\n      </select>\n      <abt-inputgroup-append>\n        <abt-button outline color=\"secondary\">\n          Button\n        </abt-button>\n      </abt-inputgroup-append>\n    </abt-inputgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/inputgroup/custom-select.md\">\n    </aut-mark-down>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Custom file input\n    </legend>\n    <abt-inputgroup class=\"mb-3\">\n      <abt-inputgroup-prepend>\n        <abt-inputgroup-text>Upload</abt-inputgroup-text>\n      </abt-inputgroup-prepend>\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\">\n        <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n      </div>\n    </abt-inputgroup>\n\n    <abt-inputgroup class=\"mb-3\">\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile02\">\n        <label class=\"custom-file-label\" for=\"inputGroupFile02\">Choose file</label>\n      </div>\n      <abt-inputgroup-append>\n        <abt-inputgroup-text id=\"\">Upload</abt-inputgroup-text>\n      </abt-inputgroup-append>\n    </abt-inputgroup>\n\n    <abt-inputgroup class=\"mb-3\">\n      <abt-inputgroup-prepend>\n        <abt-button outline color=\"secondary\">\n          Button\n        </abt-button>\n      </abt-inputgroup-prepend>\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile03\">\n        <label class=\"custom-file-label\" for=\"inputGroupFile03\">Choose file</label>\n      </div>\n    </abt-inputgroup>\n\n    <abt-inputgroup>\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile04\">\n        <label class=\"custom-file-label\" for=\"inputGroupFile04\">Choose file</label>\n      </div>\n      <abt-inputgroup-append>\n        <abt-button outline color=\"secondary\">\n          Button\n        </abt-button>\n      </abt-inputgroup-append>\n    </abt-inputgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/inputgroup/custom-file-input.md\">\n    </aut-mark-down>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      API Reference\n    </legend>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-inputgroup\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">size</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">md</td>\n          <td>Set size to the component. Acceptable values : 'sm', 'md', 'lg'.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-inputgroup-text\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-inputgroup-prepend\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-inputgroup-append\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n      </tbody>\n    </table>\n  </fieldset>\n\n</template>\n"
});
___scope___.file("routes/bootstrap/input-group.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapInputGroup = (function () {
    function BootstrapInputGroup() {
    }
    return BootstrapInputGroup;
}());
exports.BootstrapInputGroup = BootstrapInputGroup;
//# sourceMappingURL=input-group.js.map
});
___scope___.file("routes/bootstrap/jumbotron.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>Jumbotron\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/jumbotron\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n    Lightweight, flexible component for showcasing hero unit style content.\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n\n    <aut-mark-down src=\"./docs/components/bootstrap/jumbotron/usage.md\">\n    </aut-mark-down>\n\n  </fieldset>\n\n\n\n\n  <fieldset>\n    <legend>\n      Examples\n    </legend>\n\n    <p>\n      A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your\n      site.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n        <abt-jumbotron>\n          <h1 class=\"display-4\">Hello, world!</h1>\n          <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content\n            or information.</p>\n          <hr class=\"my-4\">\n          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n          <p class=\"lead\">\n            <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n          </p>\n        </abt-jumbotron>\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/jumbotron/examples.md\">\n        </aut-mark-down>\n      </abt-card-footer>\n    </abt-card>\n\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Fluid Jumbotron\n    </legend>\n\n    <p>\n      To make the jumbotron full width, and without rounded corners, add the\n      <code>fluid</code> or\n      <code>fluid=\"true\"</code> or\n      <code>fluid.bind=\"some_boolean\"</code> to the component.\n    </p>\n\n    <abt-card>\n      <abt-card-body>\n        <abt-jumbotron fluid>\n\n          <h1 class=\"display-4\">Fluid jumbotron</h1>\n          <p class=\"lead\">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>\n\n        </abt-jumbotron>\n      </abt-card-body>\n      <abt-card-footer>\n        <aut-mark-down src=\"./docs/components/bootstrap/jumbotron/fluid.md\">\n        </aut-mark-down>\n      </abt-card-footer>\n\n    </abt-card>\n  </fieldset>\n\n\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Properties and Events\n    </legend>\n\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-jumbotron\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Applies the your custom css class on jumbotron</td>\n        </tr>\n        <tr>\n            <td class=\"text-nowrap\" scope=\"row\">fluid</td>\n            <td class=\"text-nowrap\">boolean</td>\n            <td class=\"text-nowrap\">oneTime</td>\n            <td class=\"text-nowrap\">false</td>\n            <td>Makes the jumbotron to be rendered as fluid-jumbotron</td>\n          </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Css style attrinutes that you want to apply on the component.</td>\n        </tr>\n      </tbody>\n    </table>\n\n  </fieldset>\n\n</template>\n"
});
___scope___.file("routes/bootstrap/jumbotron.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jumbotron = (function () {
    function Jumbotron() {
        this.items = [];
    }
    Jumbotron.prototype.activate = function () {
        this.items = [{ title: 'Bootstrap' }, { title: 'Breadcrumb' }];
        return true;
    };
    return Jumbotron;
}());
exports.Jumbotron = Jumbotron;
//# sourceMappingURL=jumbotron.js.map
});
___scope___.file("routes/bootstrap/list-group.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>List group\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/listgroup\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n    List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just\n    about any content within.\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n    <aut-mark-down src=\"./docs/components/bootstrap/listgroup/usage.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Examples\n    </legend>\n    <br>\n    <abt-listgroup>\n      <abt-listgroup-item>Cras justo odio</abt-listgroup-item>\n      <abt-listgroup-item>Dapibus ac facilisis in</abt-listgroup-item>\n      <abt-listgroup-item>Morbi leo risus</abt-listgroup-item>\n      <abt-listgroup-item>Porta ac consectetur ac</abt-listgroup-item>\n      <abt-listgroup-item>Vestibulum at eros</abt-listgroup-item>\n    </abt-listgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/listgroup/basic-example.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Active items\n    </legend>\n    <br>\n    <abt-listgroup>\n      <abt-listgroup-item active=\"true\">Cras justo odio</abt-listgroup-item>\n      <abt-listgroup-item>Dapibus ac facilisis in</abt-listgroup-item>\n      <abt-listgroup-item>Porta ac consectetur ac</abt-listgroup-item>\n      <abt-listgroup-item>Vestibulum at eros</abt-listgroup-item>\n    </abt-listgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/listgroup/active-items.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Disabled items\n    </legend>\n    <br>\n    <abt-listgroup>\n      <abt-listgroup-item disabled=\"true\">Cras justo odio</abt-listgroup-item>\n      <abt-listgroup-item>Dapibus ac facilisis in</abt-listgroup-item>\n      <abt-listgroup-item>Porta ac consectetur ac</abt-listgroup-item>\n      <abt-listgroup-item>Vestibulum at eros</abt-listgroup-item>\n    </abt-listgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/listgroup/disabled-items.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Links and buttons\n    </legend>\n    <br>\n    <abt-listgroup>\n      <abt-listgroup-item active href=\"#/bootstrap/list-group\">Cras justo odio</abt-listgroup-item>\n      <abt-listgroup-item href=\"#/bootstrap/list-group\">Dapibus ac facilisis in</abt-listgroup-item>\n      <abt-listgroup-item href=\"#/bootstrap/list-group\">Porta ac consectetur ac</abt-listgroup-item>\n      <abt-listgroup-item disabled href=\"#/bootstrap/list-group\" disabled>Vestibulum at eros</abt-listgroup-item>\n    </abt-listgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/listgroup/links-buttons.md\">\n    </aut-mark-down>\n    <br>\n    <abt-listgroup>\n      <abt-listgroup-item active=\"true\">Cras justo odio</abt-listgroup-item>\n      <abt-listgroup-item click.call=\"itemClicked()\">Anchor behaviour</abt-listgroup-item>\n      <abt-listgroup-item click.call=\"itemClicked()\">Clickable Item</abt-listgroup-item>\n      <abt-listgroup-item click.call=\"itemClicked()\">Porta ac consectetur ac</abt-listgroup-item>\n      <abt-listgroup-item disabled>Vestibulum at eros</abt-listgroup-item>\n    </abt-listgroup>\n    <br>\n    <abt-navs tabs id=\"navs-events\">\n      <abt-nav-item id=\"tab-template-ebents\" title=\"View\">\n        <aut-mark-down src=\"./docs/components/bootstrap/listgroup/links-click-model.md\">\n        </aut-mark-down>\n      </abt-nav-item>\n      <abt-nav-item id=\"tab-viewmodel-events\" title=\"ViewModel\">\n        <aut-mark-down src=\"./docs/components/bootstrap/listgroup/links-click-viewmodel.md\">\n        </aut-mark-down>\n      </abt-nav-item>\n    </abt-navs>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Flush\n    </legend>\n    <br>\n    <abt-listgroup flush=\"true\">\n      <abt-listgroup-item>Cras justo odio</abt-listgroup-item>\n      <abt-listgroup-item>Dapibus ac facilisis in</abt-listgroup-item>\n      <abt-listgroup-item>Morbi leo risus</abt-listgroup-item>\n      <abt-listgroup-item>Porta ac consectetur ac</abt-listgroup-item>\n      <abt-listgroup-item>Vestibulum at eros</abt-listgroup-item>\n    </abt-listgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/listgroup/flush.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Contextual classes\n    </legend>\n    <br>\n    <abt-listgroup>\n      <abt-listgroup-item>Dapibus ac facilisis in</abt-listgroup-item>\n      <abt-listgroup-item type=\"primary\">This is a primary list group item</abt-listgroup-item>\n      <abt-listgroup-item type=\"secondary\">This is a secondary list group item</abt-listgroup-item>\n      <abt-listgroup-item type=\"success\">This is a success list group item</abt-listgroup-item>\n      <abt-listgroup-item type=\"danger\">This is a danger list group item</abt-listgroup-item>\n      <abt-listgroup-item type=\"warning\">This is a warning list group item</abt-listgroup-item>\n      <abt-listgroup-item type=\"info\">This is a info list group item</abt-listgroup-item>\n      <abt-listgroup-item type=\"light\">This is a light list group item</abt-listgroup-item>\n      <abt-listgroup-item type=\"dark\">This is a dark list group item</abt-listgroup-item>\n    </abt-listgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/listgroup/contextual-classes.md\">\n    </aut-mark-down>\n    <br>\n    <abt-listgroup>\n      <abt-listgroup-item href=\"#/bootstrap/listgroup\">Dapibus ac facilisis in</abt-listgroup-item>\n      <abt-listgroup-item href=\"#/bootstrap/listgroup\" type=\"primary\">This is a primary list group item</abt-listgroup-item>\n      <abt-listgroup-item href=\"#/bootstrap/listgroup\" type=\"secondary\">This is a secondary list group item</abt-listgroup-item>\n      <abt-listgroup-item href=\"#/bootstrap/listgroup\" type=\"success\">This is a success list group item</abt-listgroup-item>\n      <abt-listgroup-item href=\"#/bootstrap/listgroup\" type=\"danger\">This is a danger list group item</abt-listgroup-item>\n      <abt-listgroup-item href=\"#/bootstrap/listgroup\" type=\"warning\">This is a warning list group item</abt-listgroup-item>\n      <abt-listgroup-item href=\"#/bootstrap/listgroup\" type=\"info\">This is a info list group item</abt-listgroup-item>\n      <abt-listgroup-item href=\"#/bootstrap/listgroup\" type=\"light\">This is a light list group item</abt-listgroup-item>\n      <abt-listgroup-item href=\"#/bootstrap/listgroup\" type=\"dark\">This is a dark list group item</abt-listgroup-item>\n    </abt-listgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/listgroup/contextual-classes-links.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      With badges\n    </legend>\n    <br>\n    <abt-listgroup>\n      <abt-listgroup-item class=\"d-flex justify-content-between align-items-center\">Vestibulum at eros\n        <abt-badge color=\"primary\">14</abt-badge>\n      </abt-listgroup-item>\n      <abt-listgroup-item class=\"d-flex justify-content-between align-items-center\">Cras justo odio\n        <abt-badge pill color=\"primary\">2</abt-badge>\n      </abt-listgroup-item>\n      <abt-listgroup-item class=\"d-flex justify-content-between align-items-center\">Vestibulum at eros\n        <abt-badge color=\"primary\">1</abt-badge>\n      </abt-listgroup-item>\n    </abt-listgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/listgroup/with-badges.md\">\n    </aut-mark-down>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Custom content\n    </legend>\n    <br>\n    <abt-listgroup>\n      <abt-listgroup-item class=\"flex-column align-items-start\" active>\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">List group item heading</h5>\n          <small>3 days ago</small>\n        </div>\n        <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n        <small>Donec id elit non mi porta.</small>\n      </abt-listgroup-item>\n      <abt-listgroup-item class=\"flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">List group item heading</h5>\n          <small class=\"text-muted\">3 days ago</small>\n        </div>\n        <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n        <small class=\"text-muted\">Donec id elit non mi porta.</small>\n      </abt-listgroup-item>\n      <abt-listgroup-item class=\"flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">List group item heading</h5>\n          <small class=\"text-muted\">3 days ago</small>\n        </div>\n        <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n        <small class=\"text-muted\">Donec id elit non mi porta.</small>\n      </abt-listgroup-item>\n    </abt-listgroup>\n    <aut-mark-down src=\"./docs/components/bootstrap/listgroup/custom-content.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      API Reference\n    </legend>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              abt-listgroup\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">flush</td>\n          <td class=\"text-nowrap\">boolean, string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g.,\n            cards).\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-listgroup-item\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n        <tr>\n          <td scope=\"row\">active</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>The\n            <code>active</code> attribute needs to active an item.\n          </td>\n        </tr>\n        <tr>\n          <td scope=\"row\">disabled</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>The\n            <code>disabled</code> attribute needs to disable an item.\n          </td>\n        </tr>\n        <tr>\n          <td scope=\"row\">href</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Specifies the linked document, resource, or location</td>\n        </tr>\n        <tr>\n          <td scope=\"row\">type</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>The type of color, contextual values of bootstrap,\n            <code>primary</code>,\n            <code>secondary</code>,\n            <code>info</code>,\n            <code>success</code>,\n            <code>warning</code>,\n            <code>danger</code>,\n            <code>light</code>, and\n            <code>dark</code>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Events\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td scope=\"row\">click</td>\n          <td class=\"text-nowrap\">Function</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td>You can handle\n            <code>click</code> on specific item.</td>\n        </tr>\n      </tbody>\n    </table>\n  </fieldset>\n</template>\n"
});
___scope___.file("routes/bootstrap/list-group.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapListGroup = (function () {
    function BootstrapListGroup() {
    }
    BootstrapListGroup.prototype.itemClicked = function () {
        alert('Your item clicked.');
    };
    return BootstrapListGroup;
}());
exports.BootstrapListGroup = BootstrapListGroup;
//# sourceMappingURL=list-group.js.map
});
___scope___.file("routes/bootstrap/modal.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n\n  <h1>Live demo</h1>\n\n  <abt-button id=\"showModal\">\n    Launch demo modal\n  </abt-button>\n\n  <abt-modal open-by=\"showModal\" centered=\"false\" dismissible=\"false\">\n    <abt-modal-header>\n      <abt-modal-title>\n        <h5 style=\"color:maroon\">Aureia Toolbelt Dialog</h5>\n      </abt-modal-title>\n    </abt-modal-header>\n    <abt-modal-body>\n\n      <div>\n        Hooray, you see a message in a dialog.\n      </div>\n\n    </abt-modal-body>\n    <abt-modal-footer>\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n    </abt-modal-footer>\n  </abt-modal>\n\n  <hr />\n\n\n  <h1>Scrolling long contet</h1>\n\n  <abt-button id=\"showModalLarg\">\n    Launch Scrolling Modal\n  </abt-button>\n\n  <abt-modal open-by=\"showModalLarg\" centered=\"false\" dismissible=\"false\">\n    <abt-modal-header>\n      <abt-modal-title>\n        <h5 style=\"color:maroon\">Aureia Toolbelt Dialog</h5>\n      </abt-modal-title>\n    </abt-modal-header>\n    <abt-modal-body>\n      <div>\n        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo\n        risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur\n        et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur.\n        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non\n        metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,\n        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel\n        scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia\n        bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n        dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo\n        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent\n        commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus\n        dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\n        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus\n        sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur\n        ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus\n        vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus\n        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\n        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi\n        leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur\n        et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur.\n        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non\n        metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,\n        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel\n        scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia\n        bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n        dui. Donec ullamcorper nulla non metus auctor fringilla.\n\n      </div>\n    </abt-modal-body>\n    <abt-modal-footer>\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n    </abt-modal-footer>\n  </abt-modal>\n\n\n  <hr />\n\n  <h1>Vertically centered</h1>\n\n  <abt-button id=\"showModalCentered\">\n    Launch demo Modal\n  </abt-button>\n\n  <abt-modal open-by=\"showModalCentered\" centered=\"true\" dismissible=\"false\">\n    <abt-modal-header>\n      <abt-modal-title>\n        <h5 style=\"color:maroon\">Aureia Toolbelt Dialog</h5>\n      </abt-modal-title>\n    </abt-modal-header>\n    <abt-modal-body>\n      <div>\n        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo\n        risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur\n        et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur.\n        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n\n      </div>\n    </abt-modal-body>\n    <abt-modal-footer>\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n    </abt-modal-footer>\n  </abt-modal>\n\n  <hr />\n\n  <h1>Tooltips and popovers</h1>\n\n  <abt-button id=\"showModaltooltip\">\n    Launch demo Modal\n  </abt-button>\n\n  <abt-modal open-by=\"showModaltooltip\" centered=\"true\" dismissible=\"false\">\n    <abt-modal-header>\n      <abt-modal-title>\n        <h5 style=\"color:maroon\">Aureia Toolbelt Dialog</h5>\n      </abt-modal-title>\n    </abt-modal-header>\n    <abt-modal-body>\n      <h5>Popover in a modal</h5>\n      <p>This\n        <a href=\"#\" role=\"button\" class=\"btn btn-secondary popover-test\" title=\"Popover title\" data-content=\"Popover body content is set in this attribute.\">button</a> triggers a popover on click.</p>\n      <hr>\n      <h5>Tooltips in a modal</h5>\n      <p>\n        <a href=\"#\" class=\"tooltip-test\" title=\"Tooltip\">This link</a> and\n        <a href=\"#\" class=\"tooltip-test\" title=\"Tooltip\">that link</a> have tooltips on hover.</p>\n      </div>\n    </abt-modal-body>\n    <abt-modal-footer>\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n    </abt-modal-footer>\n  </abt-modal>\n\n  <hr />\n\n  <h1>Using the grid</h1>\n\n  <abt-button id=\"showModalGrid\">\n    Launch demo Modal\n  </abt-button>\n\n  <abt-modal open-by=\"showModalGrid\" centered=\"true\" dismissible=\"true\">\n    <abt-modal-header>\n      <abt-modal-title>\n        <h5 style=\"color:maroon\">Aureia Toolbelt Dialog</h5>\n      </abt-modal-title>\n    </abt-modal-header>\n    <abt-modal-body>\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-4 bg-info\">.col-md-4</div>\n          <div class=\"col-md-4 ml-auto bg-info\">.col-md-4 .ml-auto</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 ml-auto bg-info\">.col-md-3 .ml-auto</div>\n          <div class=\"col-md-2 ml-auto bg-info\">.col-md-2 .ml-auto</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 ml-auto bg-info\">.col-md-6 .ml-auto</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-9 bg-info\">\n            Level 1: .col-sm-9\n            <div class=\"row\">\n              <div class=\"col-8 col-sm-6 bg-info\">\n                Level 2: .col-8 .col-sm-6\n              </div>\n              <div class=\"col-4 col-sm-6 bg-info\">\n                Level 2: .col-4 .col-sm-6\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </abt-modal-body>\n  </abt-modal>\n\n  <hr />\n\n  <h1>Remove animation</h1>\n\n  <abt-button id=\"showModalAnimated\">\n    Launch demo modal\n  </abt-button>\n\n  <abt-modal open-by=\"showModalAnimated\" backdrop=\"false\" keyboard=\"true\" centered=\"true\" animate=\"false\" dismissible=\"true\">\n    <abt-modal-header>\n      <abt-modal-title>\n        <h5 style=\"color:maroon\">Aureia Toolbelt Dialog</h5>\n      </abt-modal-title>\n    </abt-modal-header>\n    <abt-modal-body>\n\n      <div>\n        No animation dialog, using ESC keyboard button to close\n      </div>\n\n    </abt-modal-body>\n    <abt-modal-footer>\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n    </abt-modal-footer>\n  </abt-modal>\n\n  <hr />\n\n  <h1>Size</h1>\n\n  <abt-button id=\"showLarge\">\n    Large modal\n  </abt-button>\n  <abt-button id=\"showsmall\">\n    Small modal\n  </abt-button>\n\n  <abt-modal open-by=\"showLarge\" centered=\"true\" size=\"lg\">\n    <abt-modal-header>\n      <abt-modal-title>\n        <h5 style=\"color:maroon\">Aureia Toolbelt Dialog</h5>\n      </abt-modal-title>\n    </abt-modal-header>\n    <abt-modal-body>\n\n      <div>\n        Large Modal\n      </div>\n\n    </abt-modal-body>\n    <abt-modal-footer>\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n    </abt-modal-footer>\n  </abt-modal>\n\n  <abt-modal open-by=\"showsmall\" centered=\"true\" size=\"sm\">\n    <abt-modal-header>\n      <abt-modal-title>\n        <h5 style=\"color:maroon\">Aureia Toolbelt Dialog</h5>\n      </abt-modal-title>\n    </abt-modal-header>\n    <abt-modal-body>\n\n      <div>\n        Small Modal\n      </div>\n\n    </abt-modal-body>\n    <abt-modal-footer>\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n    </abt-modal-footer>\n  </abt-modal>\n\n\n  <hr />\n\n\n  <h1>Show with checkbox binding</h1>\n\n\n  <aut-checkbox curve fill outlined animation=\"smooth\" color=\"success\" checked.bind=\"showModal\"> Show Modal\n  </aut-checkbox>\n\n  <abt-modal bs-show.call=\"showEvent()\" bs-hide.call=\"hideEvent()\" visible.bind=\"showModal\" centered=\"true\" size=\"lg\">\n    <abt-modal-header>\n      <abt-modal-title>\n        <h5 style=\"color:maroon\">Aureia Toolbelt Dialog</h5>\n      </abt-modal-title>\n    </abt-modal-header>\n    <abt-modal-body>\n      <div class=\"container\">\n        Modal shown by a checkbox value changed\n        <br />\n        <aut-checkbox curve fill outlined animation=\"smooth\" color=\"danger\" checked.bind=\"showModal\"> Show Modal\n          </aut-checkbox>\n      </div>\n    </abt-modal-body>\n  </abt-modal>\n\n\n</template>\n"
});
___scope___.file("routes/bootstrap/modal.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapListGroup = (function () {
    function BootstrapListGroup() {
        this.showModal = true;
    }
    BootstrapListGroup.prototype.showEvent = function () {
        console.log('Modal show');
    };
    BootstrapListGroup.prototype.hideEvent = function () {
        console.log('Modal hide');
    };
    return BootstrapListGroup;
}());
exports.BootstrapListGroup = BootstrapListGroup;
//# sourceMappingURL=modal.js.map
});
___scope___.file("routes/bootstrap/navbar.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>Navbar\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/navbar\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n    Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding,\n    navigation, and more, including support for our collapse plugin.\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n    <aut-mark-down src=\"./docs/components/bootstrap/navbar/usage.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Basic example\n    </legend>\n    <abt-navbar expand-size=\"lg\" navbar-color-type=\"light\" background-color-type=\"light\">\n      <abt-navbar-brand>NavBar</abt-navbar-brand>\n      <abt-navbar-toggler></abt-navbar-toggler>\n      <abt-navbar-collapser>\n        <abt-navbar-nav class=\"mr-auto\">\n          <abt-navbar-link active=\"true\" href=\"#/bootstrap/navbar\">Home</abt-navbar-link>\n          <abt-navbar-link href=\"#/bootstrap/navbar\">Link</abt-navbar-link>\n          <abt-navbar-dropdown color=\"secondary\" title=\"DropDown\">\n            <abt-navbar-dropdown-item>Action</abt-navbar-dropdown-item>\n            <abt-navbar-dropdown-item>Another action</abt-navbar-dropdown-item>\n            <abt-navbar-dropdown-divider></abt-navbar-dropdown-divider>\n            <abt-navbar-dropdown-item>Something else here</abt-navbar-dropdown-item>\n          </abt-navbar-dropdown>\n          <abt-navbar-link disabled=\"true\">Disabled</abt-navbar-link>\n        </abt-navbar-nav>\n        <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n          <abt-button outline bs-type=\"success\" type=\"submit\" class=\"my-2 my-sm-0\">\n            Button\n          </abt-button>\n        </form>\n      </abt-navbar-collapser>\n    </abt-navbar>\n    <aut-mark-down src=\"./docs/components/bootstrap/navbar/example.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Brand\n    </legend>\n    <abt-navbar expand-size=\"lg\" navbar-color-type=\"light\" background-color-type=\"light\">\n      <abt-navbar-brand href=\"#/bootstrap/navbar\">NavBar</abt-navbar-brand>\n    </abt-navbar>\n    <br>\n    <abt-navbar expand-size=\"lg\" navbar-color-type=\"light\" background-color-type=\"light\">\n      <abt-navbar-brand class=\"mb-0 h1\" heading=\"true\">NavBar</abt-navbar-brand>\n    </abt-navbar>\n    <aut-mark-down src=\"./docs/components/bootstrap/navbar/brand.md\">\n    </aut-mark-down>\n    <abt-navbar expand-size=\"lg\" navbar-color-type=\"light\" background-color-type=\"light\">\n      <abt-navbar-brand>\n        <a class=\"navbar-brand\" href=\"#/bootstrap/navbar\">\n          <img src=\"../../../logo-navbar.png\" alt=\"The image cannot be displayed\">\n        </a>\n      </abt-navbar-brand>\n    </abt-navbar>\n    <br>\n    <abt-navbar expand-size=\"lg\" navbar-color-type=\"light\" background-color-type=\"light\">\n      <abt-navbar-brand>\n        <a class=\"navbar-brand\" href=\"#/bootstrap/navbar\">\n          <img src=\"../../../logo-navbar.png\" alt=\"The image cannot be displayed\"> aurelia-toolbelt\n        </a>\n      </abt-navbar-brand>\n    </abt-navbar>\n    <aut-mark-down src=\"./docs/components/bootstrap/navbar/brand-logo.md\">\n    </aut-mark-down>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Mega menu\n    </legend>\n    <p>We also support\n      <code>mega menu</code> in this component. To use it, just use the\n      <code>abt-navbar-dropdown-mega-item</code> tag. Obviously this accepts any HTML content. You may want to have a\n      <code>full width</code> mega menu. For this purpose, consider the\n      <code>full-width=\"true\"</code> or\n      <code>full-width</code> value for the\n      <code>abt-navbar-dropdown</code> tag.\n    </p>\n    <br>\n    <abt-navbar>\n      <abt-navbar-brand heading=\"true\">NavBar</abt-navbar-brand>\n      <abt-navbar-toggler></abt-navbar-toggler>\n      <abt-navbar-collapser>\n        <abt-navbar-nav class=\"mr-auto\">\n          <abt-navbar-link active>Home</abt-navbar-link>\n          <abt-navbar-link>Features</abt-navbar-link>\n          <abt-navbar-link>Pricing</abt-navbar-link>\n          <abt-navbar-link disabled>Disabled</abt-navbar-link>\n          <abt-navbar-dropdown title=\"DropDown\">\n            <abt-navbar-dropdown-item>Action</abt-navbar-dropdown-item>\n            <abt-navbar-dropdown-item>Another action</abt-navbar-dropdown-item>\n            <abt-navbar-dropdown-divider></abt-navbar-dropdown-divider>\n            <abt-navbar-dropdown-item>Something else here</abt-navbar-dropdown-item>\n          </abt-navbar-dropdown>\n          <abt-navbar-dropdown title=\"Mega menu\">\n            <abt-navbar-dropdown-mega-item>\n              <ul class=\"col-sm-2 list-unstyled\">\n                <li>\n                  <p>\n                    <strong>Section Title</strong>\n                  </p>\n                </li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>List Item</li>\n              </ul>\n              <ul class=\"col-sm-2 list-unstyled\">\n                <li>\n                  <p>\n                    <strong>Links Title</strong>\n                  </p>\n                </li>\n                <li>\n                  <a href=\"#\"> Link Item </a>\n                </li>\n                <li>\n                  <a href=\"#\"> Link Item </a>\n                </li>\n                <li>\n                  <a href=\"#\"> Link Item </a>\n                </li>\n                <li>\n                  <a href=\"#\"> Link Item </a>\n                </li>\n                <li>\n                  <a href=\"#\"> Link Item </a>\n                </li>\n                <li>\n                  <a href=\"#\"> Link Item </a>\n                </li>\n              </ul>\n              <ul class=\"col-sm-2 list-unstyled\">\n                <li>\n                  <p>\n                    <strong>Section Title</strong>\n                  </p>\n                </li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>List Item</li>\n              </ul>\n              <ul class=\"col-sm-2 list-unstyled\">\n                <li>\n                  <p>\n                    <strong>Section Title</strong>\n                  </p>\n                </li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>\n                  <ul>\n                    <li>\n                      <a href=\"#\"> Link Item </a>\n                    </li>\n                    <li>\n                      <a href=\"#\"> Link Item </a>\n                    </li>\n                    <li>\n                      <a href=\"#\"> Link Item </a>\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </abt-navbar-dropdown-mega-item>\n          </abt-navbar-dropdown>\n          <abt-navbar-dropdown full-width=\"true\" title=\"Mega menu with full width\">\n            <abt-navbar-dropdown-mega-item>\n              <ul class=\"col-sm-2 list-unstyled\">\n                <li>\n                  <p>\n                    <strong>Section Title</strong>\n                  </p>\n                </li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>List Item</li>\n              </ul>\n              <ul class=\"col-sm-2 list-unstyled\">\n                <li>\n                  <p>\n                    <strong>Links Title</strong>\n                  </p>\n                </li>\n                <li>\n                  <a href=\"#\"> Link Item </a>\n                </li>\n                <li>\n                  <a href=\"#\"> Link Item </a>\n                </li>\n                <li>\n                  <a href=\"#\"> Link Item </a>\n                </li>\n                <li>\n                  <a href=\"#\"> Link Item </a>\n                </li>\n                <li>\n                  <a href=\"#\"> Link Item </a>\n                </li>\n                <li>\n                  <a href=\"#\"> Link Item </a>\n                </li>\n              </ul>\n              <ul class=\"col-sm-2 list-unstyled\">\n                <li>\n                  <p>\n                    <strong>Section Title</strong>\n                  </p>\n                </li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>List Item</li>\n              </ul>\n              <ul class=\"col-sm-2 list-unstyled\">\n                <li>\n                  <p>\n                    <strong>Section Title</strong>\n                  </p>\n                </li>\n                <li>List Item</li>\n                <li>List Item</li>\n                <li>\n                  <ul>\n                    <li>\n                      <a href=\"#\"> Link Item </a>\n                    </li>\n                    <li>\n                      <a href=\"#\"> Link Item </a>\n                    </li>\n                    <li>\n                      <a href=\"#\"> Link Item </a>\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </abt-navbar-dropdown-mega-item>\n          </abt-navbar-dropdown>\n        </abt-navbar-nav>\n      </abt-navbar-collapser>\n    </abt-navbar>\n    <aut-mark-down src=\"./docs/components/bootstrap/navbar/mega-menu.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Text\n    </legend>\n    <abt-navbar expand-size=\"lg\" navbar-color-type=\"light\" background-color-type=\"light\">\n      <abt-navbar-text>Navbar text with an inline element</abt-navbar-text>\n    </abt-navbar>\n    <br>\n    <abt-navbar expand-size=\"lg\" navbar-color-type=\"light\" background-color-type=\"light\">\n      <abt-navbar-brand>Navbar w/ text</abt-navbar-brand>\n      <abt-navbar-toggler></abt-navbar-toggler>\n      <abt-navbar-collapser>\n        <abt-navbar-nav class=\"mr-auto\">\n          <abt-navbar-link active=\"true\" href=\"#/bootstrap/navbar\">Home</abt-navbar-link>\n          <abt-navbar-link href=\"#/bootstrap/navbar\">Features</abt-navbar-link>\n          <abt-navbar-link href=\"#/bootstrap/navbar\">Pricing</abt-navbar-link>\n        </abt-navbar-nav>\n        <abt-navbar-text>Navbar text with an inline element</abt-navbar-text>\n      </abt-navbar-collapser>\n    </abt-navbar>\n    <aut-mark-down src=\"./docs/components/bootstrap/navbar/text.md\">\n    </aut-mark-down>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Color schemes\n    </legend>\n    <abt-navbar expand-size=\"lg\" navbar-color-type=\"dark\" background-color-type=\"dark\">\n      <abt-navbar-brand>NavBar</abt-navbar-brand>\n      <abt-navbar-toggler></abt-navbar-toggler>\n      <abt-navbar-collapser>\n        <abt-navbar-nav class=\"mr-auto\">\n          <abt-navbar-link active=\"true\" href=\"#/bootstrap/navbar\">Home</abt-navbar-link>\n          <abt-navbar-link href=\"#/bootstrap/navbar\">Features</abt-navbar-link>\n          <abt-navbar-link href=\"#/bootstrap/navbar\">Pricing</abt-navbar-link>\n          <abt-navbar-link href=\"#/bootstrap/navbar\">About</abt-navbar-link>\n        </abt-navbar-nav>\n        <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n          <abt-button outline bs-type=\"success\" type=\"submit\" class=\"my-2 my-sm-0\">\n            Button\n          </abt-button>\n        </form>\n      </abt-navbar-collapser>\n    </abt-navbar>\n    <br>\n    <abt-navbar expand-size=\"lg\" navbar-color-type=\"dark\" background-color-type=\"primary\">\n      <abt-navbar-brand>NavBar</abt-navbar-brand>\n      <abt-navbar-toggler></abt-navbar-toggler>\n      <abt-navbar-collapser>\n        <abt-navbar-nav class=\"mr-auto\">\n          <abt-navbar-link active=\"true\" href=\"#/bootstrap/navbar\">Home</abt-navbar-link>\n          <abt-navbar-link href=\"#/bootstrap/navbar\">Features</abt-navbar-link>\n          <abt-navbar-link href=\"#/bootstrap/navbar\">Pricing</abt-navbar-link>\n          <abt-navbar-link href=\"#/bootstrap/navbar\">About</abt-navbar-link>\n        </abt-navbar-nav>\n        <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n          <abt-button outline bs-type=\"success\" type=\"submit\" class=\"my-2 my-sm-0\">\n            Button\n          </abt-button>\n        </form>\n      </abt-navbar-collapser>\n    </abt-navbar>\n    <br>\n    <abt-navbar expand-size=\"lg\" navbar-color-type=\"light\" style=\"background-color: #e3f2fd !important\">\n      <abt-navbar-brand>NavBar</abt-navbar-brand>\n      <abt-navbar-toggler></abt-navbar-toggler>\n      <abt-navbar-collapser>\n        <abt-navbar-nav class=\"mr-auto\">\n          <abt-navbar-link active=\"true\" href=\"#/bootstrap/navbar\">Home</abt-navbar-link>\n          <abt-navbar-link href=\"#/bootstrap/navbar\">Features</abt-navbar-link>\n          <abt-navbar-link href=\"#/bootstrap/navbar\">Pricing</abt-navbar-link>\n          <abt-navbar-link href=\"#/bootstrap/navbar\">About</abt-navbar-link>\n        </abt-navbar-nav>\n        <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n          <abt-button outline bs-type=\"success\" type=\"submit\" class=\"my-2 my-sm-0\">\n            Button\n          </abt-button>\n        </form>\n      </abt-navbar-collapser>\n    </abt-navbar>\n    <aut-mark-down src=\"./docs/components/bootstrap/navbar/color-schemes.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Containers\n    </legend>\n    <div class=\"container\">\n      <abt-navbar expand-size=\"lg\" navbar-color-type=\"light\" background-color-type=\"light\">\n        <abt-navbar-brand href=\"#/bootstrap/navbar\">NavBar</abt-navbar-brand>\n      </abt-navbar>\n    </div>\n    <aut-mark-down src=\"./docs/components/bootstrap/navbar/containers.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      API Reference\n    </legend>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-navbar\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">navbar-color-type</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">light</td>\n          <td>Use for chaning\n            <code>navbar</code> theme from\n            <code>light</code> or\n            <code>dark</code>.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">background-color-type</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">light</td>\n          <td>The type of color, contextual values of bootstrap,\n            <code>primary</code>,\n            <code>secondary</code>,\n            <code>info</code>,\n            <code>success</code>,\n            <code>warning</code>,\n            <code>danger</code>,\n            <code>light</code>, and\n            <code>dark</code>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">expand-size</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">lg</td>\n          <td>use for automatically collapses at the\n            <code>expand-size</code> breakpoint. The values can be\n            <code>sm</code>,\n            <code>md</code>,\n            <code>lg</code>, and\n            <code>xl</code>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">placement</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">down</td>\n          <td>Position of\n            <code>navbar</code>. You can set one of these values:\n            <code>''</code>,\n            <code>fixed-top</code>,\n            <code>fixed-bottom</code>, and\n            <code>sticky-top</code>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-navbar-nav\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-navbar-toggler\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">toggler-icon</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">navbar-toggler-icon</td>\n          <td>Set custom icon to the toggler</td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-navbar-text\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-navbar-link\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">link-class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the\n            <code>anchor</code> tag inside component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">link-style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the\n            <code>anchor</code> tag inside component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">href</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Specifies the linked document, resource, or location\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">active</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>The\n            <code>active</code> attribute needs to active an item.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">disabled</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>The\n            <code>disabled</code> attribute needs to disable an item.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Events\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td scope=\"row\">click</td>\n          <td class=\"text-nowrap\">Function</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td>You can handle\n            <code>click</code> on specific item.</td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-navbar-brand\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">href</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Specifies the linked document, resource, or location\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">heading</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>If you want to have a brand as a heading set it to\n            <code>true</code>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Events\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td scope=\"row\">click</td>\n          <td class=\"text-nowrap\">Function</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td>You can handle\n            <code>click</code> on specific item.</td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-navbar-collapser\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-navbar-dropdown-divider\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-navbar-dropdown\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">full-width</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Set when ypu need to have full width menu content.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">link-class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the\n            <code>anchor</code> tag inside component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">link-style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the\n            <code>anchor</code> tag inside component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">menu-class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the menu content.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">menu-style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the menu content.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">title</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set title to dropdown.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">placement</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">down</td>\n          <td>Position of dropdown menu. You can set one of these values:\n            <code>up</code>,\n            <code>down</code>,\n            <code>left</code>, and\n            <code>right</code>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Events\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td scope=\"row\">click</td>\n          <td class=\"text-nowrap\">Function</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td>You can handle\n            <code>click</code> on specific item.</td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-navbar-dropdown-item\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">href</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Specifies the linked document, resource, or location\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Events\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td scope=\"row\">click</td>\n          <td class=\"text-nowrap\">Function</td>\n          <td class=\"text-nowrap\">call</td>\n          <td class=\"text-nowrap\"></td>\n          <td>You can handle\n            <code>click</code> on specific item.</td>\n        </tr>\n      </tbody>\n    </table>\n  </fieldset>\n  <br>\n  <table class=\"table table-striped table-bordered\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <td class=\"text-nowrap\" colspan=\"4\">\n          <b>\n            abt-navbar-dropdown-mega-item\n          </b>\n        </td>\n        <td class=\"text-nowrap\" colspan=\"1\">\n          <b>\n            containerless\n          </b>\n        </td>\n      </tr>\n      <tr>\n        <th class=\"text-nowrap\" scope=\"col\">Name</th>\n        <th class=\"text-nowrap\" scope=\"col\">Type</th>\n        <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n        <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n        <th class=\"text-nowrap\" scope=\"col\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class=\"text-nowrap\" colspan=\"5\">\n          <b>\n            Properties\n          </b>\n        </td>\n      </tr>\n      <tr>\n        <td class=\"text-nowrap\" scope=\"row\">id</td>\n        <td class=\"text-nowrap\">string</td>\n        <td class=\"text-nowrap\">oneTime</td>\n        <td class=\"text-nowrap\"></td>\n        <td>Set id to the component</td>\n      </tr>\n      <tr>\n        <td class=\"text-nowrap\" scope=\"row\">class</td>\n        <td class=\"text-nowrap\">string</td>\n        <td class=\"text-nowrap\">oneWay</td>\n        <td class=\"text-nowrap\"></td>\n        <td>Set custom classes to the component</td>\n      </tr>\n      <tr>\n        <td class=\"text-nowrap\" scope=\"row\">style</td>\n        <td class=\"text-nowrap\">string</td>\n        <td class=\"text-nowrap\">oneWay</td>\n        <td class=\"text-nowrap\"></td>\n        <td>Set custom styles to the component</td>\n      </tr>\n    </tbody>\n  </table>\n  </fieldset>\n</template>\n"
});
___scope___.file("routes/bootstrap/navbar.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapNavbar = (function () {
    function BootstrapNavbar() {
    }
    return BootstrapNavbar;
}());
exports.BootstrapNavbar = BootstrapNavbar;
//# sourceMappingURL=navbar.js.map
});
___scope___.file("routes/bootstrap/navs.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n\n  <fieldset>\n    <legend>\n      Horizontal Styles\n    </legend>\n\n    <abt-navs pills>\n      <abt-nav-item active href=\"#\" title=\"Active\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n      <abt-nav-item disabled title=\"Disabled\" href=\"#\"></abt-nav-item>\n    </abt-navs>\n\n    <abt-navs class=\"justify-content-center\">\n      <abt-nav-item active href=\"#\" title=\"Active\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n      <abt-nav-item disabled title=\"Disabled\" href=\"#\"></abt-nav-item>\n    </abt-navs>\n\n    <abt-navs class=\"justify-content-end\">\n      <abt-nav-item active href=\"#\" title=\"Active\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n      <abt-nav-item disabled title=\"Disabled\" href=\"#\"></abt-nav-item>\n    </abt-navs>\n\n  </fieldset>\n\n\n\n  <fieldset>\n    <legend>\n      Vertical\n    </legend>\n\n    <div class=\"col-sm-3\">\n      <abt-navs vertical pills>\n        <abt-nav-item active href=\"#\" title=\"Active\"></abt-nav-item>\n        <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n        <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n        <abt-nav-item disabled title=\"Disabled\" href=\"#\"></abt-nav-item>\n      </abt-navs>\n    </div>\n  </fieldset>\n\n\n  <fieldset>\n    <legend>\n      Tabs\n    </legend>\n\n    <abt-navs tabs>\n      <abt-nav-item active href=\"#\" title=\"Active\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n      <abt-nav-item disabled title=\"Disabled\" href=\"#\"></abt-nav-item>\n    </abt-navs>\n  </fieldset>\n\n  <fieldset>\n    <legend>\n      Fill and justify\n    </legend>\n\n    <abt-navs pills fill>\n      <abt-nav-item active href=\"#\" title=\"Active\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Longer nav link\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Longer nav link\"></abt-nav-item>\n      <abt-nav-item disabled title=\"Disabled\" href=\"#\"></abt-nav-item>\n    </abt-navs>\n    <br />\n    <abt-navs pills justified>\n      <abt-nav-item active href=\"#\" title=\"Active\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Longer nav link\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Longer nav link\"></abt-nav-item>\n      <abt-nav-item disabled title=\"Disabled\" href=\"#\"></abt-nav-item>\n    </abt-navs>\n  </fieldset>\n\n\n  <fieldset>\n    <legend>\n      Dynamic Tabs\n    </legend>\n\n    <abt-navs tabs bs-shown.call=\"testShown(activeTab,prevTab)\">\n\n      <abt-nav-item  title=\"Home\">\n        <div>\n          Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident\n          aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod\n          id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur\n          quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.\n        </div>\n      </abt-nav-item>\n\n      <abt-nav-item  title=\"Profile\">\n        <div>\n          Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est\n          sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim\n          sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in\n          id occaecat pariatur ut ullamco ea tempor duis.\n        </div>\n      </abt-nav-item>\n\n      <abt-nav-item  title=\"Contact\">\n        <div>\n          Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum\n          nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex\n          labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur\n          aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do\n          mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor\n          irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco\n          sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit\n          voluptate voluptate consequat non.\n        </div>\n      </abt-nav-item>\n\n    </abt-navs>\n\n\n  </fieldset>\n\n</template>\n"
});
___scope___.file("routes/bootstrap/navs.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapNavs = (function () {
    function BootstrapNavs() {
    }
    BootstrapNavs.prototype.testShown = function (active, prev) {
        console.log('tab shown event fired');
        console.warn(active);
        console.warn(prev);
        console.log('###################################################################################');
    };
    return BootstrapNavs;
}());
exports.BootstrapNavs = BootstrapNavs;
//# sourceMappingURL=navs.js.map
});
___scope___.file("routes/bootstrap/pagination.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>Pagination\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/pagination\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n    Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages. </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n    <aut-mark-down src=\"./docs/components/bootstrap/pagination/usage.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Basic example\n    </legend>\n    <abt-pagination total-pages=\"3\" start-page=\"1\" visible-pages=\"3\"></abt-pagination>\n    <aut-mark-down src=\"./docs/components/bootstrap/pagination/basic-example.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      With boundary links\n    </legend>\n    <abt-pagination total-pages=\"3\" visible-pages=\"3\" boundary-links=\"true\"></abt-pagination>\n    <aut-mark-down src=\"./docs/components/bootstrap/pagination/basic-example-boundary.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Working with icons\n    </legend>\n    <abt-pagination total-pages=\"3\" start-page=\"1\" visible-pages=\"3\" prev-text='' next-text='' prev-icon='fa fa-chevron-left'\n      next-icon='fa fa-chevron-right'>\n    </abt-pagination>\n    <aut-mark-down src=\"./docs/components/bootstrap/pagination/with-icons.md\">\n    </aut-mark-down>\n    <abt-pagination total-pages=\"3\" start-page=\"1\" visible-pages=\"3\" boundary-links=\"true\" prev-text='' next-text='' first-text=''\n      last-text='' prev-icon='fa fa-chevron-left' next-icon='fa fa-chevron-right' first-icon='fa fa-backward' last-icon='fa fa-forward'>\n    </abt-pagination>\n    <aut-mark-down src=\"./docs/components/bootstrap/pagination/with-icons-boundary.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Sizing\n    </legend>\n    <abt-pagination total-pages=\"3\" start-page=\"1\" size=\"sm\" boundary-links=\"true\" visible-pages=\"3\">\n    </abt-pagination>\n    <abt-pagination total-pages=\"3\" start-page=\"1\" boundary-links=\"true\" visible-pages=\"3\">\n    </abt-pagination>\n    <abt-pagination total-pages=\"3\" start-page=\"1\" size=\"lg\" boundary-links=\"true\" visible-pages=\"3\">\n    </abt-pagination>\n    <aut-mark-down src=\"./docs/components/bootstrap/pagination/size.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Alignment\n    </legend>\n    <abt-pagination total-pages=\"3\" start-page=\"1\" boundary-links=\"true\" visible-pages=\"3\">\n    </abt-pagination>\n    <abt-pagination class=\"justify-content-center\" total-pages=\"3\" start-page=\"1\" boundary-links=\"true\" visible-pages=\"3\">\n    </abt-pagination>\n    <abt-pagination class=\"justify-content-end\" total-pages=\"3\" start-page=\"1\" boundary-links=\"true\" visible-pages=\"3\">\n    </abt-pagination>\n    <aut-mark-down src=\"./docs/components/bootstrap/pagination/alignment.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Template\n    </legend>\n    <p>You can define a text as a template. You should use\n      <code>template</code> property but make sure to use\n      <code>%s</code> as a placehoder for number of pages.</p>\n    <abt-pagination total-pages=\"3\" template=\"Page %s\" start-page=\"1\" boundary-links=\"true\" visible-pages=\"3\">\n    </abt-pagination>\n    <aut-mark-down src=\"./docs/components/bootstrap/pagination/template.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Loop\n    </legend>\n    <p>If the\n      <code>loop</code> feature is enabled, you can use\n      <code>Next</code> and\n      <code>Perv</code> to return the first or last pages.</p>\n    <abt-pagination total-pages=\"6\" start-page=\"4\" boundary-links=\"true\" loop=\"true\" visible-pages=\"4\">\n    </abt-pagination>\n    <aut-mark-down src=\"./docs/components/bootstrap/pagination/loop.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Goto\n    </legend>\n    <p>This feature allows you to jump to a specific page when you have plenty of pages. Click on\n      <code>...</code> for this purpose.</p>\n    <abt-pagination total-pages=\"20\" start-page=\"10\" show-goto=\"true\" boundary-links=\"true\" visible-pages=\"9\">\n    </abt-pagination>\n    <aut-mark-down src=\"./docs/components/bootstrap/pagination/goto.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Page change\n    </legend>\n    <div class=\"container\" style=\"background-color:#F7F7F7;height:150px;border:solid 1px #D8D8D8;margin-bottom:15px\">\n      <h3 id=\"page\" class=\"text-center\" style=\"color:#6B6B6B;margin-top:55px\">Page 10</h3>\n    </div>\n    <abt-pagination total-pages=\"20\" selected-page=\"10\" show-goto=\"true\" boundary-links=\"true\" visible-pages=\"9\" page-changed.call=\"pageChanged($event,selectedPageNumber)\">\n    </abt-pagination>\n    <abt-navs tabs id=\"navs-events\">\n      <abt-nav-item id=\"tab-template-ebents\" title=\"View\">\n        <aut-mark-down src=\"./docs/components/bootstrap/pagination/page-change-model.md\">\n        </aut-mark-down>\n      </abt-nav-item>\n      <abt-nav-item id=\"tab-viewmodel-events\" title=\"ViewModel\">\n        <aut-mark-down src=\"./docs/components/bootstrap/pagination/page-change-viewmodel.md\">\n        </aut-mark-down>\n      </abt-nav-item>\n    </abt-navs>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      API Reference\n    </legend>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              abt-pagination\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">size</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">md</td>\n          <td>Set size to the component. Acceptable values : 'sm', 'md', 'lg'.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">total-pages</td>\n          <td class=\"text-nowrap\">number | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">1</td>\n          <td>Set The number of pages.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">selected-page</td>\n          <td class=\"text-nowrap\">number | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">1</td>\n          <td>The current page that show on start.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">visible-pages</td>\n          <td class=\"text-nowrap\">number | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">1</td>\n          <td>visible pages.</td>\n        </tr>\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">hide-only-one-page</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">true</td>\n          <td>This hides all control buttons if it has one page.</td>\n        </tr>\n\n\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">direction-links</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">true</td>\n          <td>if\n            <code>false</code> previous and next buttons will be hidden.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">boundary-links</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>if\n            <code>false</code> first and last buttons will be hidden.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">loop</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Carousel-style pagination.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">show-goto</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>This feature allows you to jump to a specific page when you have plenty of pages. This works if the\n            <code>visible-pages</code> is\n            <i>greater than or equal</i> to\n            <code>7</code>.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">template</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">%s</td>\n          <td>You can define a text as a template. Make sure to use\n            <code>%s</code> as a placehoder for number of pages.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">first-text</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">First</td>\n          <td>Text label for the\n            <code>First</code> button.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">last-text</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">Last</td>\n          <td>Text label for the\n            <code>Last</code> button.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">prev-text</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">Previous</td>\n          <td>Text label for the\n            <code>Previous</code> button.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">next-text</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">Next</td>\n          <td>Text label for the\n            <code>Next</code> button.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">first-icon</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Icon class for the\n            <code>First</code> button.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">last-icon</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Icon class for the\n            <code>Last</code> button.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">prev-icon</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Icon class for the\n            <code>Previous</code> button.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">next-icon</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Icon class for the\n            <code>Next</code> button.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Events\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">page-changed</td>\n          <td class=\"text-nowrap\">Function</td>\n          <td class=\"text-nowrap\">call(event, startPageNumber)</td>\n          <td class=\"text-nowrap\"></td>\n          <td>This event fires when page changed.\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Styling\n    </legend>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              abt-pagination\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Class name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">abt-pagination</td>\n          <td> CSS class for the component.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">abt-pagination-first</td>\n          <td>CSS class for the\n            <code>First</code> button.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">abt-pagination-link-first</td>\n          <td>CSS class for anchors inside\n            <code>First</code> button.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">abt-pagination-prev</td>\n          <td>CSS class for the\n            <code>Previous</code> button.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">abt-pagination-link-prev</td>\n          <td>CSS class for anchors inside\n            <code>Previous</code> button.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">abt-pagination-item</td>\n          <td>CSS class for the page buttons.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">abt-pagination-link-item</td>\n          <td>CSS class for anchors inside page buttons.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">abt-pagination-next</td>\n          <td>CSS class for the\n            <code>Next</code> button.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">abt-pagination-link-next</td>\n          <td>CSS class for anchors inside\n            <code>Next</code> button.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">abt-pagination-last</td>\n          <td>CSS class for the\n            <code>Last</code> button.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">abt-pagination-link-last</td>\n          <td>CSS class for anchors inside\n            <code>Last</code> button.</td>\n        </tr>\n      </tbody>\n    </table>\n  </fieldset>\n</template>\n"
});
___scope___.file("routes/bootstrap/pagination.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapPagination = (function () {
    function BootstrapPagination() {
    }
    BootstrapPagination.prototype.pageChanged = function (event, selectedPageNumber) {
        var element = document.getElementById('page');
        element.textContent = "Page " + selectedPageNumber;
    };
    return BootstrapPagination;
}());
exports.BootstrapPagination = BootstrapPagination;
//# sourceMappingURL=pagination.js.map
});
___scope___.file("routes/bootstrap/password.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n    <abt-password password-visibility.bind='true' score-range.bind='scoreRange' requirements.bind=\"requirements\"></abt-password>\n\n</template>"
});
___scope___.file("routes/bootstrap/password.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapPassword = (function () {
    function BootstrapPassword() {
        this.requirements = {
            minLength: 5,
            maxLength: 10,
            uppercaseLettersMinLength: 1,
            lowercaseLettersMinLength: 2,
            numbersMinLength: 1,
            symbolsMinLength: 1,
            include: ['s'],
            exclude: ['#', '$'],
            startsWith: 'p',
            endsWith: 'd',
            blackList: ['p@ssw0rd']
        };
        this.scoreRange = {
            '40': { message: 'veryWeak', color: 'red' },
            '80': { message: 'weak', color: 'khaki' },
            '120': { message: 'medium', color: 'orange' },
            '180': { message: 'strong', color: '.success' },
            '200': { message: 'veryStrong', color: 'blue' },
            '_': { message: 'perfect', color: 'green' }
        };
    }
    return BootstrapPassword;
}());
exports.BootstrapPassword = BootstrapPassword;
//# sourceMappingURL=password.js.map
});
___scope___.file("routes/bootstrap/popover.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>Popovers\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/popover\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n    Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n\n    <aut-mark-down src=\"./docs/components/bootstrap/popover/usage.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Basic example\n    </legend>\n    <p>If you want to use\n      <code>popover</code>, you must apply\n      <code>abt-popover</code> as the child inside the component that you want to enable the\n      <code>popover</code>.</p>\n    <abt-button class=\"mr-2\" size=\"lg\" bs-type=\"danger\">Click to toggle popover\n      <abt-popover title=\"Popover title\" placement='right'>\n        And here's some amazing content. It's very engaging. Right?\n      </abt-popover>\n    </abt-button>\n    <aut-mark-down src=\"./docs/components/bootstrap/popover/example.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Four directions\n    </legend>\n    <p>Four options are available: top, right, bottom, and left aligned.</p>\n    <abt-button class=\"mr-2\" bs-type=\"secondary\">Popover on top\n      <abt-popover placement='top'>\n        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\n      </abt-popover>\n    </abt-button>\n    <abt-button class=\"mr-2\" bs-type=\"secondary\">Popover on right\n      <abt-popover placement='right'>\n        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\n      </abt-popover>\n    </abt-button>\n    <abt-button class=\"mr-2\" bs-type=\"secondary\">Popover on bottom\n      <abt-popover placement='bottom'>\n        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\n      </abt-popover>\n    </abt-button>\n    <abt-button class=\"mr-2\" bs-type=\"secondary\">Popover on left\n      <abt-popover placement='left'>\n        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\n      </abt-popover>\n    </abt-button>\n    <aut-mark-down src=\"./docs/components/bootstrap/popover/four-directions.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Dismiss on next click\n    </legend>\n    <p>Use the\n      <code>focus</code> trigger to dismiss popovers on the user’s next click of a different element than the toggle element.</p>\n    <abt-button class=\"mr-2\" size=\"lg\" bs-type=\"danger\">Dismissible popover\n      <abt-popover trigger=\"focus\" title=\"Dismissible popover\" placement='right'>\n        And here's some amazing content. It's very engaging. Right?\n      </abt-popover>\n    </abt-button>\n    <aut-mark-down src=\"./docs/components/bootstrap/popover/dismiss.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      API Reference\n    </legend>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-popover\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">animation</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">true</td>\n          <td>Apply a CSS fade transition to the popover</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">container</td>\n          <td class=\"text-nowrap\">boolean | string | Element</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Appends the popover to a specific element. Example: container:\n            <code>'body'</code>. This option is particularly useful in that it allows you to position the popover in the flow of\n            the document near the triggering element - which will prevent the popover from floating away from the triggering\n            element during a window resize.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">delay</td>\n          <td class=\"text-nowrap\">number | object</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">0</td>\n          <td>Delay showing and hiding the popover (ms) - does not apply to manual trigger type If a number is supplied, delay\n            is applied to both hide/show Object structure is:\n            <code>delay: { \"show\": 500, \"hide\": 100 }</code>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">html</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Insert HTML into the popover. If false, jQuery's\n            <code>text</code> method will be used to insert content into the DOM. Use text if you're worried about XSS attacks.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">placement</td>\n          <td class=\"text-nowrap\">string | Function</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">right</td>\n          <td>How to position the popover - auto | top | bottom | left | right. When\n            <code>auto</code> is specified, it will dynamically reorient the popover. When a function is used to determine the\n            placement, it is called with the popover DOM node as its first argument and the triggering element DOM node as\n            its second. The\n            <code>this</code> context is set to the popover instance.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">selector</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>If a selector is provided, popover objects will be delegated to the specified targets. In practice, this is used\n            to enable dynamic HTML content to have popovers added.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">template</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td>\n            <code>\n              <aut-raw-html>\n                '<div class=\"popover\" role=\"tooltip\">\n                  <div class=\"arrow\"></div>\n                  <h3 class=\"popover-header\"></h3>\n                  <div class=\"popover-body\"></div>\n                </div>'\n              </aut-raw-html>\n            </code>\n          </td>\n          <td>Base HTML to use when creating the popover. The popover's\n            <code>title</code> will be injected into the\n            <code>.popover-header</code>. The popover's\n            <code>content</code> will be injected into the\n            <code>.popover-body</code>.\n            <code>.arrow</code> will become the popover's arrow. The outermost wrapper element should have the\n            <code>.popover</code> class.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">title</td>\n          <td class=\"text-nowrap\">string | Element | Function</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Default\n            <code>title</code> value if title attribute isn't present.If a function is given, it will be called with its\n            <code>this</code> reference set to the element that the popover is attached to.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">trigger</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">click</td>\n          <td>How popover is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a\n            space. `manual` cannot be combined with any other trigger.</tr>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">offset</td>\n          <td class=\"text-nowrap\">number | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">0</td>\n          <td>Offset of the popover relative to its target. For more information refer to Popper.js's offset docs.</td>\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">fallback-placement</td>\n            <td class=\"text-nowrap\">string | string[]</td>\n            <td class=\"text-nowrap\">oneWay</td>\n            <td class=\"text-nowrap\">flip</td>\n            <td>Allow to specify which position Popper will use on fallback. For more information refer to Popper.js's behavior\n              docs\n            </td>\n          </tr>\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">boundary</td>\n            <td class=\"text-nowrap\">string</td>\n            <td class=\"text-nowrap\">oneWay</td>\n            <td class=\"text-nowrap\">scrollParent</td>\n            <td>Overflow constraint boundary of the popover. Accepts the values of\n              <code>'viewport'</code>,\n              <code>'window'</code>,\n              <code>'scrollParent'</code>, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's\n              preventOverflow docs.\n            </td>\n          </tr>\n          <tr>\n            <td class=\"text-nowrap\" colspan=\"5\">\n              <b>\n                Events\n              </b>\n            </td>\n          </tr>\n          <tr>\n            <td scope=\"row\">bs-show</td>\n            <td class=\"text-nowrap\">Function</td>\n            <td class=\"text-nowrap\">call</td>\n            <td class=\"text-nowrap\"></td>\n            <td>This event fires immediately when the\n              <code>show</code> instance method is called.\n            </td>\n          </tr>\n          <tr>\n            <td scope=\"row\">bs-shown</td>\n            <td class=\"text-nowrap\">Function</td>\n            <td class=\"text-nowrap\">call</td>\n            <td class=\"text-nowrap\"></td>\n            <td>This event is fired when the popover has been made visible to the user (will wait for CSS transitions to complete).\n            </td>\n          </tr>\n          <tr>\n            <td scope=\"row\">bs-hide</td>\n            <td class=\"text-nowrap\">Function</td>\n            <td class=\"text-nowrap\">call</td>\n            <td class=\"text-nowrap\"></td>\n            <td>This event is fired immediately when the\n              <code>hide</code> instance method has been called.\n            </td>\n          </tr>\n          <tr>\n            <td scope=\"row\">bs-hidden</td>\n            <td class=\"text-nowrap\">Function</td>\n            <td class=\"text-nowrap\">call</td>\n            <td class=\"text-nowrap\"></td>\n            <td>This event is fired when the popover has finished being hidden from the user (will wait for CSS transitions to\n              complete).\n            </td>\n          </tr>\n          <tr>\n            <td scope=\"row\">bs-inserted</td>\n            <td class=\"text-nowrap\">Function</td>\n            <td class=\"text-nowrap\">call</td>\n            <td class=\"text-nowrap\"></td>\n            <td>This event is fired after the\n              <code>bs-shown</code> event when the popover template has been added to the DOM.</td>\n          </tr>\n      </tbody>\n    </table>\n  </fieldset>\n</template>\n"
});
___scope___.file("routes/bootstrap/popover.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapPopover = (function () {
    function BootstrapPopover() {
    }
    return BootstrapPopover;
}());
exports.BootstrapPopover = BootstrapPopover;
//# sourceMappingURL=popover.js.map
});
___scope___.file("routes/bootstrap/progress.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>Progress\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/progressbar\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n    Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds,\n    and text labels.\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n    <aut-mark-down src=\"./docs/components/bootstrap/progressbar/usage.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Basic example\n    </legend>\n    <abt-progress>\n      <abt-progress-bar value=\"0\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <br>\n    <abt-progress>\n      <abt-progress-bar value=\"25\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <br>\n    <abt-progress>\n      <abt-progress-bar value=\"50\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <br>\n    <abt-progress>\n      <abt-progress-bar value=\"75\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <br>\n    <abt-progress>\n      <abt-progress-bar value=\"100\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n\n    <aut-mark-down src=\"./docs/components/bootstrap/progressbar/basic-example.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Labels\n    </legend>\n    <abt-progress>\n      <abt-progress-bar value=\"25\" min=\"0\" max=\"100\">25%</abt-progress-bar>\n    </abt-progress>\n    <aut-mark-down src=\"./docs/components/bootstrap/progressbar/labels.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Height\n    </legend>\n    <abt-progress height=\"1px\">\n      <abt-progress-bar value=\"25\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <br>\n    <abt-progress height=\"20px\">\n      <abt-progress-bar value=\"25\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <aut-mark-down src=\"./docs/components/bootstrap/progressbar/height.md\">\n    </aut-mark-down>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Backgrounds\n    </legend>\n    <abt-progress>\n      <abt-progress-bar color-type=\"success\" value=\"25\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <br>\n    <abt-progress>\n      <abt-progress-bar color-type=\"info\" value=\"50\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <br>\n    <abt-progress>\n      <abt-progress-bar color-type=\"warning\" value=\"75\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <br>\n    <abt-progress>\n      <abt-progress-bar color-type=\"danger\" value=\"100\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <aut-mark-down src=\"./docs/components/bootstrap/progressbar/backgrounds.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Multiple bars\n    </legend>\n    <abt-progress>\n      <abt-progress-bar value=\"15\" min=\"0\" max=\"100\"></abt-progress-bar>\n      <abt-progress-bar color-type=\"success\" value=\"30\" min=\"0\" max=\"100\"></abt-progress-bar>\n      <abt-progress-bar color-type=\"info\" value=\"20\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <aut-mark-down src=\"./docs/components/bootstrap/progressbar/multiple-bars.md\">\n    </aut-mark-down>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Striped\n    </legend>\n    <abt-progress>\n      <abt-progress-bar striped=\"true\" value=\"10\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <br>\n    <abt-progress>\n      <abt-progress-bar striped=\"true\" color-type=\"success\" value=\"25\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <br>\n    <abt-progress>\n      <abt-progress-bar striped=\"true\" color-type=\"info\" value=\"50\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <br>\n    <abt-progress>\n      <abt-progress-bar striped=\"true\" color-type=\"warning\" value=\"75\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <br>\n    <abt-progress>\n      <abt-progress-bar striped=\"true\" color-type=\"danger\" value=\"100\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <aut-mark-down src=\"./docs/components/bootstrap/progressbar/striped.md\">\n    </aut-mark-down>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Animated stripes\n    </legend>\n    <abt-progress>\n      <abt-progress-bar striped=\"true\" animated=\"true\" value=\"75\" min=\"0\" max=\"100\"></abt-progress-bar>\n    </abt-progress>\n    <aut-mark-down src=\"./docs/components/bootstrap/progressbar/animated.md\">\n    </aut-mark-down>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      Gradient\n    </legend>\n    <p>If you want to use the Gradient feature, you should set both\n      <code>color</code> and\n      <code>gradient-color</code> properties.</p>\n    <abt-progress>\n      <abt-progress-bar color=\"blue\" gradient-color=\"red\" value=\"75\" min=\"0\" max=\"100\">\n        75%\n      </abt-progress-bar>\n    </abt-progress>\n    <aut-mark-down src=\"./docs/components/bootstrap/progressbar/gradient.md\">\n    </aut-mark-down>\n  </fieldset>\n\n  <fieldset class=\"mt-5\">\n    <legend>\n      API Reference\n    </legend>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              abt-progress\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">id</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneTime</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set id to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">height</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set height to the component</td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-progress-bar </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">class</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom classes to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">style</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>Set custom styles to the component</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">color</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>progressbar color.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">gradient-color</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>progressbar gradient color. You should set\n            <code>color</code> property for using this too.</td>\n        </tr>\n        <tr>\n          <td scope=\"row\">color-type</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\"></td>\n          <td>The type of color, contextual values of bootstrap,\n            <code>primary</code>,\n            <code>secondary</code>,\n            <code>info</code>,\n            <code>success</code>,\n            <code>warning</code>,\n            <code>danger</code>,\n            <code>light</code>, and\n            <code>dark</code>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">min</td>\n          <td class=\"text-nowrap\">number | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">0</td>\n          <td>progressbar min value.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">max</td>\n          <td class=\"text-nowrap\">number | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">100</td>\n          <td>progressbar max value.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">animated</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>To animate the stripes right to left via CSS3 animations set this to\n            <code>true</code>.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">striped</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>To apply a stripe via CSS gradient over the progress bar’s background color.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">value</td>\n          <td class=\"text-nowrap\">number | string</td>\n          <td class=\"text-nowrap\">twoWay</td>\n          <td class=\"text-nowrap\">0</td>\n          <td>progressbar value.</td>\n        </tr>\n      </tbody>\n    </table>\n  </fieldset>\n</template>"
});
___scope___.file("routes/bootstrap/progress.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapProgress = (function () {
    function BootstrapProgress() {
    }
    return BootstrapProgress;
}());
exports.BootstrapProgress = BootstrapProgress;
//# sourceMappingURL=progress.js.map
});
___scope___.file("routes/bootstrap/rate.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n\n  <abt-star-rate full-star=\"fa fa-star\" empty-star=\"fa fa-star-o\" half-star=\"fa fa-star-half-o\" class=\"fa-3x\" type=\"primary\"\n    max-rate=\"6\"></abt-star-rate>\n  <br />\n  <abt-star-rate full-star=\"fa fa-star\" empty-star=\"fa fa-star-o\" half-star=\"fa fa-star-half-o\" class=\"fa-3x\" type=\"secondary\"\n    max-rate=\"6\"></abt-star-rate>\n  <br />\n  <abt-star-rate full-star=\"fa fa-star\" empty-star=\"fa fa-star-o\" half-star=\"fa fa-star-half-o\" class=\"fa-3x\" type=\"info\" max-rate=\"6\"></abt-star-rate>\n  <br />\n  <br />\n  <abt-star-rate full-star=\"fa fa-star\" empty-star=\"fa fa-star-o\" half-star=\"fa fa-star-half-o\" class=\"fa-3x\" type=\"success\"\n    max-rate=\"6\"></abt-star-rate>\n  <br />\n  <abt-star-rate full-star=\"fa fa-star\" empty-star=\"fa fa-star-o\" half-star=\"fa fa-star-half-o\" class=\"fa-3x\" type=\"warning\"\n    max-rate=\"6\"></abt-star-rate>\n  <br />\n  <abt-star-rate full-star=\"fa fa-star\" empty-star=\"fa fa-star-o\" half-star=\"fa fa-star-half-o\" class=\"fa-3x\" type=\"danger\"\n    max-rate=\"6\"></abt-star-rate>\n  <br />\n  <abt-star-rate full-star=\"fa fa-star\" empty-star=\"fa fa-star-o\" half-star=\"fa fa-star-half-o\" class=\"fa-3x bg-dark\" type=\"light\"\n    max-rate=\"6\"></abt-star-rate>\n  <br />\n  <abt-star-rate full-star=\"fa fa-star\" empty-star=\"fa fa-star-o\" half-star=\"fa fa-star-half-o\" class=\"fa-3x\" type=\"dark\" max-rate=\"6\"></abt-star-rate>\n\n\n</template>\n"
});
___scope___.file("routes/bootstrap/rate.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RateDemo = (function () {
    function RateDemo() {
    }
    return RateDemo;
}());
exports.RateDemo = RateDemo;
//# sourceMappingURL=rate.js.map
});
___scope___.file("routes/bootstrap/scrollspy.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n\n\n\n  <br />\n  <br />\n  <br />\n  <br />\n  <br />\n  <br />\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <abt-listgroup id=\"list-example\">\n        <abt-listgroup-item href=\"#list-item-1\">Item 1</abt-listgroup-item>\n        <abt-listgroup-item href=\"#list-item-2\">Item 2</abt-listgroup-item>\n        <abt-listgroup-item href=\"#list-item-3\">Item 3</abt-listgroup-item>\n        <abt-listgroup-item href=\"#list-item-4\">Item 4</abt-listgroup-item>\n      </abt-listgroup>\n    </div>\n    <div class=\"col-sm-9\">\n      <abt-scrollspy target=\"list-example\" style=\"height:300px;overflow:scroll\">\n        <abt-scrollspy-item id=\"list-item-1\">\n          <h4>Item 1</h4>\n          <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr\n            farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3\n            wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of\n            them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel\n            keffiyeh artisan ullamco consequat.Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi\n            before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit\n            seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui\n            you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed\n            accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.Ad leggings keytar, brunch id art party dolor\n            labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim\n            keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts,\n            williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson\n            aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.\n          </p>\n        </abt-scrollspy-item>\n        <abt-scrollspy-item id=\"list-item-2\">\n          <h4>Item 2</h4>\n          <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr\n            farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3\n            wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of\n            them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel\n            keffiyeh artisan ullamco consequat.Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi\n            before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit\n            seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui\n            you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed\n            accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.Ad leggings keytar, brunch id art party dolor\n            labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim\n            keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts,\n            williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson\n            aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.\n          </p>\n        </abt-scrollspy-item>\n        <abt-scrollspy-item id=\"list-item-3\">\n          <h4>Item 3</h4>\n          <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr\n            farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3\n            wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of\n            them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel\n            keffiyeh artisan ullamco consequat.Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi\n            before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit\n            seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui\n            you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed\n            accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.Ad leggings keytar, brunch id art party dolor\n            labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim\n            keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts,\n            williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson\n            aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.\n          </p>\n        </abt-scrollspy-item>\n        <abt-scrollspy-item id=\"list-item-4\">\n          <h4>Item 4</h4>\n          <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr\n            farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3\n            wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of\n            them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel\n            keffiyeh artisan ullamco consequat.Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi\n            before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit\n            seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui\n            you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed\n            accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.Ad leggings keytar, brunch id art party dolor\n            labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim\n            keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts,\n            williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson\n            aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.\n          </p>\n        </abt-scrollspy-item>\n      </abt-scrollspy>\n    </div>\n\n  </div>\n\n\n\n\n  <br />\n  <hr />\n  <br />\n\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div id=\"list-example2\" class=\"list-group\">\n        <a class=\"list-group-item list-group-item-action\" href=\"#fat2\" target=\"_self\">fat</a>\n        <a class=\"list-group-item list-group-item-action\" href=\"#mdo2\">mdo</a>\n        <a class=\"list-group-item list-group-item-action\" href=\"#one2\">one</a>\n        <a class=\"list-group-item list-group-item-action\" href=\"#two2\">two</a>\n        <a class=\"list-group-item list-group-item-action\" href=\"#three2\">three</a>\n      </div>\n    </div>\n    <div class=\"col-sm-7\">\n      <abt-scrollspy style=\"max-height: 300px; overflow:scroll\" bs-scrollspy.call=\"spyChanged()\" target=\"list-example2\">\n        <abt-scrollspy-item id=\"fat2\">\n          <h4 id=\"fat2\">@fat</h4>\n          <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr\n            farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3\n            wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of\n            them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel\n            keffiyeh artisan ullamco consequat.\n          </p>\n        </abt-scrollspy-item>\n        <abt-scrollspy-item id=\"mdo2\">\n          <h4>@mdo</h4>\n          <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's\n            vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis\n            non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn\n            adipisicing craft beer vice keytar deserunt.</p>\n        </abt-scrollspy-item>\n        <abt-scrollspy-item id=\"one2\">\n          <h4>one</h4>\n          <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi,\n            velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat\n            quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in,\n            sustainable delectus consectetur fanny pack iphone.</p>\n        </abt-scrollspy-item>\n        <abt-scrollspy-item id=\"two2\">\n          <h4>two</h4>\n          <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur\n            VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko,\n            cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack,\n            tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf\n            voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>\n        </abt-scrollspy-item>\n        <abt-scrollspy-item id=\"three2\">\n          <h4>three</h4>\n          <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr\n            farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3\n            wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of\n            them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel\n            keffiyeh artisan ullamco consequat. Keytar twee blog, culpa messenger bag marfa whatever delectus food truck.\n            Sapiente synth id assumenda.\n            <br /> Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free\n            lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby\n            sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris\n            tempor veniam. Anim mollit minim commodo ullamco thundercats.</p>\n        </abt-scrollspy-item>\n      </abt-scrollspy>\n    </div>\n  </div>\n\n  <br />\n  <hr />\n  <br />\n\n  <nav id=\"navbar-example2\" class=\"navbar navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <ul class=\"nav nav-pills\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#fatnav\">@fat</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#mdonav\">@mdo</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" href=\"#onenav\">one</a>\n          <a class=\"dropdown-item\" href=\"#twonav\">two</a>\n          <div role=\"separator\" class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#threenav\">three</a>\n        </div>\n      </li>\n    </ul>\n  </nav>\n  <abt-scrollspy style=\"max-height: 300px; overflow:scroll\" target=\"#navbar-example2\">\n    <abt-scrollspy-item id=\"fatnav\">\n      <h4>@fat</h4>\n      <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table\n        bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby\n        sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund\n        culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.\n      </p>\n    </abt-scrollspy-item>\n    <abt-scrollspy-item id=\"mdonav\">\n      <h4>@mdo</h4>\n      <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's\n        vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non\n        freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing\n        craft beer vice keytar deserunt.</p>\n    </abt-scrollspy-item>\n    <abt-scrollspy-item id=\"onenav\">\n      <h4>one</h4>\n      <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit\n        ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip\n        banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus\n        consectetur fanny pack iphone.</p>\n    </abt-scrollspy-item>\n    <abt-scrollspy-item id=\"twonav\">\n      <h4>two</h4>\n      <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur\n        VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat\n        terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla\n        cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi\n        ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>\n    </abt-scrollspy-item>\n    <abt-scrollspy-item id=\"threenav\">\n      <h4>three</h4>\n      <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table\n        bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby\n        sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund\n        culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.\n        Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda.\n        <br /> Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free\n        lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby\n        sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris\n        tempor veniam. Anim mollit minim commodo ullamco thundercats.</p>\n    </abt-scrollspy-item>\n  </abt-scrollspy>\n\n\n  <br />\n  <hr />\n  <br />\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <nav id=\"navbar-example3\" class=\"navbar navbar-light bg-light\">\n        <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n        <nav class=\"nav nav-pills flex-column\">\n          <a class=\"nav-link\" href=\"#item-1\">Item 1</a>\n          <nav class=\"nav nav-pills flex-column\">\n            <a class=\"nav-link ml-3 my-1\" href=\"#item-1-1\">Item 1-1</a>\n            <a class=\"nav-link ml-3 my-1\" href=\"#item-1-2\">Item 1-2</a>\n          </nav>\n          <a class=\"nav-link\" href=\"#item-2\">Item2</a>\n          <a class=\"nav-link\" href=\"#item-3\">Item3</a>\n          <nav class=\"nav nav-pills flex-column\">\n            <a class=\"nav-link ml-3 my-1\" href=\"#item-3-1\">Item 3-1</a>\n            <a class=\"nav-link ml-3 my-1\" href=\"#item-3-2\">Item 3-2</a>\n          </nav>\n        </nav>\n      </nav>\n    </div>\n    <div class=\"col-sm-9\">\n      <abt-scrollspy style=\"max-height: 300px; overflow:scroll\" target=\"navbar-example3\">\n        <abt-scrollspy-item id=\"item-1\">\n          <h4>Item 1</h4>\n          <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu.\n            Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor\n            eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et\n            aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit\n            dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat\n            elit dolore.\n            \n          </p>\n        </abt-scrollspy-item>\n        <abt-scrollspy-item id=\"item-1-1\">\n          <h5>Item 1-1</h5>\n          <p>Amet tempor mollit aliquip pariatur excepteur commodo do ea cillum commodo Lorem et occaecat elit qui et. Aliquip\n            labore ex ex esse voluptate occaecat Lorem ullamco deserunt. Aliqua cillum excepteur irure consequat id quis\n            ea. Sit proident ullamco aute magna pariatur nostrud labore. Reprehenderit aliqua commodo eiusmod aliquip est\n            do duis amet proident magna consectetur consequat eu commodo fugiat non quis. Enim aliquip exercitation ullamco\n            adipisicing voluptate excepteur minim exercitation minim minim commodo adipisicing exercitation officia nisi\n            adipisicing. Anim id duis qui consequat labore adipisicing sint dolor elit cillum anim et fugiat.</p>\n        </abt-scrollspy-item>\n        <abt-scrollspy-item id=\"item-1-2\">\n          <h5>Item 2-2</h5>\n          <p>Cillum nisi deserunt magna eiusmod qui eiusmod velit voluptate pariatur laborum sunt enim. Irure laboris mollit\n            consequat incididunt sint et culpa culpa incididunt adipisicing magna magna occaecat. Nulla ipsum cillum eiusmod\n            sint elit excepteur ea labore enim consectetur in labore anim. Proident ullamco ipsum esse elit ut Lorem eiusmod\n            dolor et eiusmod. Anim occaecat nulla in non consequat eiusmod velit incididunt.</p>\n        </abt-scrollspy-item>\n        <abt-scrollspy-item id=\"item-2\">\n          <h4>Item 2</h4>\n          <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim\n            exercitation cillum aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris ad sit\n            ipsum anim Lorem. Incididunt veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua\n            esse irure. Laborum nisi sit est tempor laborum mollit labore officia laborum excepteur commodo non commodo dolor\n            excepteur commodo. Ipsum fugiat ex est consectetur ipsum commodo tempor sunt in proident.</p>\n        </abt-scrollspy-item>\n        <abt-scrollspy-item id=\"item-3\">\n          <h4>Item 3</h4>\n          <p>Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim\n            proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur\n            dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>\n        </abt-scrollspy-item>\n        <abt-scrollspy-item id=\"item-3-1\">\n          <h5>Item 3-1</h5>\n          <p>Deserunt quis elit Lorem eiusmod amet enim enim amet minim Lorem proident nostrud. Ea id dolore anim exercitation\n            aute fugiat labore voluptate cillum do laboris labore. Ex velit exercitation nisi enim labore reprehenderit labore\n            nostrud ut ut. Esse officia sunt duis aliquip ullamco tempor eiusmod deserunt irure nostrud irure. Ullamco proident\n            veniam laboris ea consectetur magna sunt ex exercitation aliquip minim enim culpa occaecat exercitation. Est\n            tempor excepteur aliquip laborum consequat do deserunt laborum esse eiusmod irure proident ipsum esse qui.</p>\n        </abt-scrollspy-item>\n        <abt-scrollspy-item id=\"item-3-2\">\n          <h5>Item 3-2</h5>\n          <p>Labore sit culpa commodo elit adipisicing sit aliquip elit proident voluptate minim mollit nostrud aute reprehenderit\n            do. Mollit excepteur eu Lorem ipsum anim commodo sint labore Lorem in exercitation velit incididunt. Occaecat\n            consectetur nisi in occaecat proident minim enim sunt reprehenderit exercitation cupidatat et do officia. Aliquip\n            consequat ad labore labore mollit ut amet. Sit pariatur tempor proident in veniam culpa aliqua excepteur elit\n            magna fugiat eiusmod amet officia.</p>\n        </abt-scrollspy-item>\n      </abt-scrollspy>\n    </div>\n  </div>\n\n\n\n</template>\n"
});
___scope___.file("routes/bootstrap/scrollspy.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scrollspy = (function () {
    function Scrollspy() {
    }
    Scrollspy.prototype.spyChanged = function () {
        console.log('spy changed');
    };
    return Scrollspy;
}());
exports.Scrollspy = Scrollspy;
//# sourceMappingURL=scrollspy.js.map
});
___scope___.file("routes/bootstrap/toggle.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template class=\"container\">\n\n  <style>\n    .slow .toggle-group {\n      transition: left 0.7s;\n      -webkit-transition: left 0.7s;\n    }\n\n    .fast .toggle-group {\n      transition: left 0.1s;\n      -webkit-transition: left 0.1s;\n    }\n\n    .quick .toggle-group {\n      transition: none;\n      -webkit-transition: none;\n    }\n\n  </style>\n\n  <div class=\"container\">\n\n    <form>\n      <h4>Booleans</h4>\n\n      <abt-toggle size=\"mini\" disabled=\"true\" css=\"slow\" checked.bind=\"motherboard\"> Motherboard</abt-toggle>\n\n      <abt-toggle size=\"small\" checked.bind=\"cpu\" css=\"fast\">CPU</abt-toggle>\n\n      <abt-toggle size=\"normal\" checked.bind=\"memory\" css=\"quick\"> Memory</abt-toggle>\n\n      <br /> motherboard = ${motherboard}\n      <br/> cpu = ${cpu}\n      <br/> memory = ${memory}\n      <br/>\n    </form>\n\n    <hr />\n\n    <form>\n      <h4>Array of Strings</h4>\n\n      <ul>\n        <li repeat.for=\"product of products\">\n\n          <abt-toggle on-style=\"success\" off-style=\"danger\" size=\"small\" value.bind=\"product\" checked.bind=\"selectedProducts\"> ${product}\n          </abt-toggle>\n\n        </li>\n      </ul>\n      <br /> Selected products: ${selectedProducts}\n    </form>\n\n\n    <hr />\n\n\n    <form>\n      <h4>Array of Numbers</h4>\n      <ul>\n        <li repeat.for=\"product of otherProducts\">\n          <abt-toggle color=\"info\" model.bind=\"product.id\" checked.bind=\"selectedProductIds\">\n            ${product.name}\n          </abt-toggle>\n        </li>\n      </ul>\n      <br /> Selected product IDs: ${selectedProductIds}\n    </form>\n\n\n    <hr />\n\n\n    <form>\n      <h4>Array Of objects</h4>\n      <ul>\n\n        <li repeat.for=\"product of productsObject\">\n          <abt-toggle model.bind=\"product\" checked.bind=\"selectedProductsObject\"> ${product.id} - ${product.name}\n          </abt-toggle>\n        </li>\n      </ul>\n\n      Selected products:\n      <ul>\n        <li repeat.for=\"product of selectedProductsObject\">${product.id} - ${product.name}</li>\n      </ul>\n    </form>\n\n\n    <hr />\n\n\n\n    <form>\n      <h4>Array of objects With Matcher</h4>\n\n\n      <abt-toggle model.bind=\"mymotherBoard\" matcher.bind=\"productMatcher\" checked.bind=\"selectedProductsMatcher\">\n        Motherboard\n      </abt-toggle>\n\n\n      <abt-toggle model.bind=\"mycpu\" matcher.bind=\"productMatcher\" checked.bind=\"selectedProductsMatcher\"> CPU\n      </abt-toggle>\n\n\n      <abt-toggle model.bind=\"mymemory\" matcher.bind=\"productMatcher\" checked.bind=\"selectedProductsMatcher\">\n        Memory\n      </abt-toggle>\n\n      Selected products:\n      <ul>\n        <li repeat.for=\"product of selectedProductsMatcher\">${product.id} - ${product.name}</li>\n      </ul>\n    </form>\n  </div>\n\n</template>\n"
});
___scope___.file("routes/bootstrap/toggle.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapToggle = (function () {
    function BootstrapToggle() {
        this.motherboard = false;
        this.cpu = true;
        this.memory = false;
        this.products = ['Motherboard', 'CPU', 'Memory'];
        this.selectedProducts = ['CPU'];
        this.otherProducts = [
            { id: 0, name: 'Motherboard' },
            { id: 1, name: 'CPU' },
            { id: 2, name: 'Memory' }
        ];
        this.selectedProductIds = [];
        this.productsObject = [
            { id: 0, name: 'Motherboard' },
            { id: 1, name: 'CPU' },
            { id: 2, name: 'Memory' }
        ];
        this.selectedProductsObject = [];
        this.mymotherBoard = { id: 0, name: 'Motherboard' };
        this.mycpu = { id: 1, name: 'CPU' };
        this.mymemory = { id: 2, name: 'Memory' };
        this.selectedProductsMatcher = [
            { id: 1, name: 'CPU' },
            { id: 2, name: 'Memory' }
        ];
        this.productMatcher = function (a, b) {
            return a.id === b.id;
        };
    }
    return BootstrapToggle;
}());
exports.BootstrapToggle = BootstrapToggle;
//# sourceMappingURL=toggle.js.map
});
___scope___.file("routes/bootstrap/tokenize.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n    <style>\n        .tokenize>.tokens-container>.token {\n            border-radius: 0px !important;\n            background-color: #1A6DCA !important;\n            color: white !important;\n        }\n\n        .tokenize>.tokens-container>.token>.dismiss {\n            color: white !important;\n        }\n    </style>\n    <abt-tokenize class=\"tokenize-source-demo-1\">\n        <abt-tokenize-item value=\"Africa\">Africa</abt-tokenize-item>\n        <abt-tokenize-item value=\"Americas\">Americas</abt-tokenize-item>\n        <abt-tokenize-item value=\"Asia\">Asia</abt-tokenize-item>\n        <abt-tokenize-item value=\"Europe\">Europe</abt-tokenize-item>\n        <abt-tokenize-item value=\"Oceania\">Oceania</abt-tokenize-item>\n    </abt-tokenize>\n\n\n\n\n</template>"
});
___scope___.file("routes/bootstrap/tokenize.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapTokenize = (function () {
    function BootstrapTokenize() {
    }
    return BootstrapTokenize;
}());
exports.BootstrapTokenize = BootstrapTokenize;
//# sourceMappingURL=tokenize.js.map
});
___scope___.file("routes/bootstrap/tooltip.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <fieldset class=\"mb-5\">\n    <legend>\n      <h2>Tooltips\n        <a href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/tooltip\">\n          <i class=\"fa fa-link\"></i>\n        </a>\n      </h2>\n    </legend>\n    Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-attributes\n    for local title storage.\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Usage\n    </legend>\n    <aut-mark-down src=\"./docs/components/bootstrap/tooltip/usage.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      Example\n    </legend>\n    <p>If you want to use\n      <code>tooltip</code>, you must apply\n      <code>abt-tooltip</code> as the child inside the component that you want to enable the\n      <code>tooltip</code>.</p>\n    <abt-button class=\"mr-2\" bs-type=\"secondary\">Tooltip on top\n      <abt-tooltip placement='top'>\n        Tooltip on top\n      </abt-tooltip>\n    </abt-button>\n    <abt-button class=\"mr-2\" bs-type=\"secondary\">Tooltip on right\n      <abt-tooltip placement='right'>\n        Tooltip on right\n      </abt-tooltip>\n    </abt-button>\n    <abt-button class=\"mr-2\" bs-type=\"secondary\">Tooltip on bottom\n      <abt-tooltip placement='bottom'>\n        Tooltip on bottom\n      </abt-tooltip>\n    </abt-button>\n    <abt-button class=\"mr-2\" bs-type=\"secondary\">Tooltip on left\n      <abt-tooltip placement='left'>\n        Tooltip on left\n      </abt-tooltip>\n    </abt-button>\n    <abt-button class=\"mr-2\" bs-type=\"secondary\">Tooltip with HTML\n      <abt-tooltip html=\"true\" placement='top'>\n        Tooltip\n        <i>with</i>\n        <b> HTML</b>\n      </abt-tooltip>\n    </abt-button>\n    <aut-mark-down src=\"./docs/components/bootstrap/tooltip/example.md\">\n    </aut-mark-down>\n  </fieldset>\n  <fieldset class=\"mt-5\">\n    <legend>\n      API Reference\n    </legend>\n    <table class=\"table table-striped table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"4\">\n            <b>\n              abt-tooltip\n            </b>\n          </td>\n          <td class=\"text-nowrap\" colspan=\"1\">\n            <b>\n              containerless\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <th class=\"text-nowrap\" scope=\"col\">Name</th>\n          <th class=\"text-nowrap\" scope=\"col\">Type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Binding type</th>\n          <th class=\"text-nowrap\" scope=\"col\">Default value</th>\n          <th class=\"text-nowrap\" scope=\"col\">Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-nowrap\" colspan=\"5\">\n            <b>\n              Properties\n            </b>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">animation</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">true</td>\n          <td>Apply a CSS fade transition to the tooltip</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">container</td>\n          <td class=\"text-nowrap\">boolean | string | Element</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Appends the tooltip to a specific element. Example: container:\n            <code>'body'</code>. This option is particularly useful in that it allows you to position the tooltip in the flow of\n            the document near the triggering element - which will prevent the tooltip from floating away from the triggering\n            element during a window resize.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">delay</td>\n          <td class=\"text-nowrap\">number | object</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">0</td>\n          <td>Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type If a number is supplied, delay\n            is applied to both hide/show Object structure is:\n            <code>delay: { \"show\": 500, \"hide\": 100 }</code>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">html</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>Insert HTML into the tooltip. If false, jQuery's\n            <code>text</code> method will be used to insert content into the DOM. Use text if you're worried about XSS attacks.\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">placement</td>\n          <td class=\"text-nowrap\">string | Function</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">right</td>\n          <td>How to position the tooltip - auto | top | bottom | left | right. When\n            <code>auto</code> is specified, it will dynamically reorient the tooltip. When a function is used to determine the\n            placement, it is called with the tooltip DOM node as its first argument and the triggering element DOM node as\n            its second. The\n            <code>this</code> context is set to the tooltip instance.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">selector</td>\n          <td class=\"text-nowrap\">boolean | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">false</td>\n          <td>If a selector is provided, tooltip objects will be delegated to the specified targets. In practice, this is used\n            to enable dynamic HTML content to have tooltips added.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">template</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td>\n            <code>\n              <aut-raw-html>\n                '\n                <div class=\"tooltip\" role=\"tooltip\">\n                  <div class=\"arrow\"></div>\n                  <div class=\"tooltip-inner\"></div>\n                </div>'\n              </aut-raw-html>\n            </code>\n          </td>\n          <td>Base HTML to use when creating the tooltip. The tooltip's\n            <code>title</code> will be injected into the\n            <code>.tooltip-inner</code>.\n            <code>.arrow</code> will become the tooltip's arrow. The outermost wrapper element should have the\n            <code>.tooltip</code> class and\n            <code>role=\"tooltip\"</code>.</td>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">trigger</td>\n          <td class=\"text-nowrap\">string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">hover focus</td>\n          <td>How tooltip is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a\n            space. this value cannot be combined with any other trigger.\n            <code>'hover'</code> on its own will result in tooltips that cannot be triggered via the keyboard, and should only\n            be used if alternative methods for conveying the same information for keyboard users is present.</tr>\n        </tr>\n        <tr>\n          <td class=\"text-nowrap\" scope=\"row\">offset</td>\n          <td class=\"text-nowrap\">number | string</td>\n          <td class=\"text-nowrap\">oneWay</td>\n          <td class=\"text-nowrap\">0</td>\n          <td>Offset of the tooltip relative to its target. For more information refer to Popper.js's offset docs.</td>\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">fallback-placement</td>\n            <td class=\"text-nowrap\">string | string[]</td>\n            <td class=\"text-nowrap\">oneWay</td>\n            <td class=\"text-nowrap\">flip</td>\n            <td>Allow to specify which position Popper will use on fallback. For more information refer to Popper.js's behavior\n              docs\n            </td>\n          </tr>\n          <tr>\n            <td class=\"text-nowrap\" scope=\"row\">boundary</td>\n            <td class=\"text-nowrap\">string</td>\n            <td class=\"text-nowrap\">oneWay</td>\n            <td class=\"text-nowrap\">scrollParent</td>\n            <td>Overflow constraint boundary of the tooltip. Accepts the values of\n              <code>'viewport'</code>,\n              <code>'window'</code>,\n              <code>'scrollParent'</code>, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's\n              preventOverflow docs.\n            </td>\n          </tr>\n          <tr>\n            <td class=\"text-nowrap\" colspan=\"5\">\n              <b>\n                Events\n              </b>\n            </td>\n          </tr>\n          <tr>\n            <td scope=\"row\">bs-show</td>\n            <td class=\"text-nowrap\">Function</td>\n            <td class=\"text-nowrap\">call</td>\n            <td class=\"text-nowrap\"></td>\n            <td>This event fires immediately when the\n              <code>show</code> instance method is called.\n            </td>\n          </tr>\n          <tr>\n            <td scope=\"row\">bs-shown</td>\n            <td class=\"text-nowrap\">Function</td>\n            <td class=\"text-nowrap\">call</td>\n            <td class=\"text-nowrap\"></td>\n            <td>This event is fired when the tooltip has been made visible to the user (will wait for CSS transitions to complete).\n            </td>\n          </tr>\n          <tr>\n            <td scope=\"row\">bs-hide</td>\n            <td class=\"text-nowrap\">Function</td>\n            <td class=\"text-nowrap\">call</td>\n            <td class=\"text-nowrap\"></td>\n            <td>This event is fired immediately when the\n              <code>hide</code> instance method has been called.\n            </td>\n          </tr>\n          <tr>\n            <td scope=\"row\">bs-hidden</td>\n            <td class=\"text-nowrap\">Function</td>\n            <td class=\"text-nowrap\">call</td>\n            <td class=\"text-nowrap\"></td>\n            <td>This event is fired when the tooltip has finished being hidden from the user (will wait for CSS transitions to\n              complete).\n            </td>\n          </tr>\n          <tr>\n            <td scope=\"row\">bs-inserted</td>\n            <td class=\"text-nowrap\">Function</td>\n            <td class=\"text-nowrap\">call</td>\n            <td class=\"text-nowrap\"></td>\n            <td>This event is fired after the\n              <code>bs-shown</code> event when the tooltip template has been added to the DOM.</td>\n          </tr>\n      </tbody>\n    </table>\n  </fieldset>\n</template>\n"
});
___scope___.file("routes/bootstrap/tooltip.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapTooltip = (function () {
    function BootstrapTooltip() {
    }
    BootstrapTooltip.prototype.showMgs = function () {
        console.log('Show My Tooltip!');
    };
    BootstrapTooltip.prototype.hideMgs = function () {
        console.log('Hide My Tooltip!');
    };
    return BootstrapTooltip;
}());
exports.BootstrapTooltip = BootstrapTooltip;
//# sourceMappingURL=tooltip.js.map
});
___scope___.file("routes/bootstrap/touchspin.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template></template>"
});
___scope___.file("routes/bootstrap/touchspin.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapTouchSpin = (function () {
    function BootstrapTouchSpin() {
    }
    return BootstrapTouchSpin;
}());
exports.BootstrapTouchSpin = BootstrapTouchSpin;
//# sourceMappingURL=touchspin.js.map
});
___scope___.file("routes/get-started.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <abt-listgroup id=\"getStartedList\" class=\"sticky-top\">\n        <abt-listgroup-item href=\"#General\">General</abt-listgroup-item>\n        <abt-listgroup-item href=\"#Installation\">Installation</abt-listgroup-item>\n        <abt-listgroup-item href=\"#Categories\">Categories</abt-listgroup-item>\n        <!-- <abt-listgroup-item href=\"#Features\">Features</abt-listgroup-item> -->\n        <abt-listgroup-item href=\"#License\">License</abt-listgroup-item>\n        <abt-listgroup-item href=\"#Support\">Support</abt-listgroup-item>\n\n      </abt-listgroup>\n\n    </div>\n    <div class=\"col-sm-9\">\n      <fieldset>\n        <legend>\n          <h2 class=\"text-info\">\n            <i class=\"fa fa-handshake-o aurelia-color\" aria-hidden=\"true\"></i>\n            <span class=\"aurelia-color\" style=\"font-weight: bold\">Not started yet!</span>\n          </h2>\n        </legend>\n        <aut-mark-down src=\"./docs/introduction.md\">\n        </aut-mark-down>\n      </fieldset>\n      <abt-scrollspy target=\"getStartedList\" on-body=\"true\">\n        <abt-scrollspy-item id=\"General\">\n          <fieldset>\n            <legend>\n              <h2 class=\"text-info\">\n                <i class=\"fa fa-info-circle aurelia-color\" aria-hidden=\"true\"></i>\n                <span class=\"aurelia-color\" style=\"font-weight: bold\">General</span>\n              </h2>\n            </legend>\n            <aut-mark-down src=\"./docs/general.md\">\n            </aut-mark-down>\n          </fieldset>\n\n        </abt-scrollspy-item>\n\n        <!-- ************************************************************************************************ -->\n        <abt-scrollspy-item id=\"Installation\">\n          <fieldset>\n            <legend>\n              <h2 class=\"text-info\">\n                <i class=\"fa fa-download aurelia-color\" aria-hidden=\"true\"></i>\n                <span class=\"aurelia-color\" style=\"font-weight: bold\">Installation</span>\n              </h2>\n            </legend>\n            <aut-mark-down src=\"./docs/installation.md\">\n            </aut-mark-down>\n          </fieldset>\n        </abt-scrollspy-item>\n\n        <!-- ************************************************************************************************ -->\n\n        <abt-scrollspy-item id=\"Categories\">\n          <fieldset>\n            <legend>\n\n              <h2 class=\"text-info\">\n                <i class=\"fa fa-th aurelia-color\" aria-hidden=\"true\"></i>\n                <span class=\"aurelia-color\" style=\"font-weight: bold\">Categories</span>\n              </h2>\n            </legend>\n\n            <aut-mark-down src=\"./docs/categories.md\">\n            </aut-mark-down>\n\n          </fieldset>\n\n\n        </abt-scrollspy-item>\n\n        <!-- ************************************************************************************************ -->\n\n\n        <!-- <abt-scrollspy-item id=\"Features\">\n\n          <fieldset>\n            <legend>\n\n              <h2 class=\"text-info\">\n                <i class=\"fa fa-check-square-o aurelia-color\" aria-hidden=\"true\"></i>\n                <span class=\"aurelia-color\" style=\"font-weight: bold\">Features</span>\n\n              </h2>\n            </legend>\n\n            <aut-mark-down src=\"./docs/features.md\">\n\n            </aut-mark-down>\n\n          </fieldset>\n        </abt-scrollspy-item> -->\n\n        <!-- ************************************************************************************************ -->\n\n        <abt-scrollspy-item id=\"License\">\n          <fieldset>\n            <legend>\n              <h2 class=\"text-info\">\n                <i class=\"fa fa-credit-card aurelia-color\" aria-hidden=\"true\"></i>\n                <span class=\"aurelia-color\" style=\"font-weight: bold\">License</span>\n              </h2>\n            </legend>\n            <aut-mark-down src=\"./docs/license.md\">\n\n            </aut-mark-down>\n          </fieldset>\n        </abt-scrollspy-item>\n\n        <!-- ************************************************************************************************ -->\n\n        <abt-scrollspy-item id=\"Support\">\n          <fieldset>\n            <legend>\n\n              <h2 class=\"text-info\">\n                <i class=\"fa fa-user-circle-o aurelia-color\" aria-hidden=\"true\"></i>\n                <span class=\"aurelia-color\" style=\"font-weight: bold\">Support</span>\n              </h2>\n            </legend>\n\n            <aut-mark-down src=\"./docs/support.md\">\n\n            </aut-mark-down>\n\n            <br />\n\n          </fieldset>\n        </abt-scrollspy-item>\n\n        <!-- ************************************************************************************************ -->\n\n      </abt-scrollspy>\n    </div>\n  </div>\n\n  <abt-alert type=\"info\" class=\"text-left text-dark\" size=\"sm\">\n    Logo designed by\n    <abt-alert-link href=\"https://www.freepik.com/free-vector/elegant-banners-set-with-text-space_1189079.htm\">\n      Freepik\n    </abt-alert-link>\n    <span class=\"float-right\">\n      <a href=\"https://twitter.com/AureliaToolbelt?ref_src=twsrc%5Etfw\" class=\"twitter-follow-button\" data-show-count=\"false\">Follow @AureliaToolbelt</a>\n      <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n    </span>\n  </abt-alert>\n\n</template>\n"
});
___scope___.file("routes/get-started.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetStartedRoute = (function () {
    function GetStartedRoute() {
    }
    return GetStartedRoute;
}());
exports.GetStartedRoute = GetStartedRoute;
//# sourceMappingURL=get-started.js.map
});
___scope___.file("routes/jquery-route.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n\n  <!-- <require from=\"./../components/nav-bar\"></require> -->\n\n  <div class=\"row\">\n    <!-- <div class=\"col-sm-2\">\n\n      <nav-bar router.bind=\"router\">\n\n      </nav-bar>\n\n    </div> -->\n    <div class=\"col-sm-12\">\n      <br />\n      <div class=\"main no-select container\">\n        <router-view></router-view>\n      </div>\n\n    </div>\n  </div>\n\n\n</template>\n"
});
___scope___.file("routes/jquery-route.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var JqueryRoute = (function () {
    function JqueryRoute() {
    }
    JqueryRoute.prototype.configureRouter = function (config, router) {
        config.map([
            {
                route: ['', 'blockui'],
                name: 'jq-blockui',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./jquery/blockui'),
                nav: true,
                title: 'Block UI',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['lazyimage'],
                name: 'jq-lazyimage',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./jquery/lazy-image'),
                nav: true,
                title: 'Lazy Image',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['newsticker'],
                name: 'jq-newsticker',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./jquery/news-ticker'),
                nav: true,
                title: 'News Ticker',
                settings: { auth: false, isComponent: true }
            }
        ]);
        this.router = router;
    };
    return JqueryRoute;
}());
exports.JqueryRoute = JqueryRoute;
//# sourceMappingURL=jquery-route.js.map
});
___scope___.file("routes/jquery/blockui.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <button type=\"button\" class=\"btn btn-primary\" click.delegate=\"toggleBlock1()\">Toggle</button>\n  <br/>\n  <br/>\n  <aut-block-ui block.bind='blockValue1' spinner-color='goldenrod'>\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\" id=\"basic-addon1\">@</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Hello\" aria-describedby=\"basic-addon1\">\n    </div>\n  </aut-block-ui>\n\n</template>"
});
___scope___.file("routes/jquery/blockui.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Blockui = (function () {
    function Blockui() {
        this.blockValue1 = true;
    }
    Blockui.prototype.toggleBlock1 = function () {
        this.blockValue1 = !this.blockValue1;
    };
    return Blockui;
}());
exports.Blockui = Blockui;
//# sourceMappingURL=blockui.js.map
});
___scope___.file("routes/jquery/lazy-image.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n    <div style=\"padding : 10px;border:2px solid dodgerblue;min-height: 800px;\">\n        <aut-lazy-image style=\"border: 1px red solid;\" url='https://picsum.photos/500/200/?random' background-mode.bind='true'></aut-lazy-image>\n        <hr/>\n        <aut-lazy-image style=\"border: 1px blue solid;\" url='https://picsum.photos/550/210/?random' background-mode.bind='true'></aut-lazy-image>\n        <hr>\n        <aut-lazy-image style=\"border: 1px green solid;\" url='https://picsum.photos/530/250/?random' background-mode.bind='true'></aut-lazy-image>\n        <br>\n    </div>\n</template>"
});
___scope___.file("routes/jquery/lazy-image.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JQueryLazyImage = (function () {
    function JQueryLazyImage() {
    }
    return JQueryLazyImage;
}());
exports.JQueryLazyImage = JQueryLazyImage;
//# sourceMappingURL=lazy-image.js.map
});
___scope___.file("routes/jquery/news-ticker.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template></template>"
});
___scope___.file("routes/jquery/news-ticker.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JQueryNewsTicker = (function () {
    function JQueryNewsTicker() {
    }
    return JQueryNewsTicker;
}());
exports.JQueryNewsTicker = JQueryNewsTicker;
//# sourceMappingURL=news-ticker.js.map
});
___scope___.file("routes/jquery/page1.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n   \n    <div class=\"fa-4x\">\n\n      <aut-star-rate full-star=\"fa fa-star\" empty-star=\"fa fa-star-o\" half-star=\"fa fa-star-half-o\" max-rate.bind=\"5\" read-only.bind=\"false\"></aut-star-rate>\n\n      <aut-star-rate rtl.bind=\"true\" full-star=\"fa fa-star\" empty-star=\"fa fa-star-o\" half-star=\"fa fa-star-half-o\" max-rate.bind=\"5\"\n        read-only.bind=\"false\"></aut-star-rate>\n\n    </div>\n  \n<hr />\n\n\n    \n\n\n\n</template>\n"
});
___scope___.file("routes/jquery/page1.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_router_1 = require("aurelia-router");
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_http_client_1 = require("aurelia-http-client");
var Page1 = (function () {
    function Page1(router, http) {
        this.router = router;
        this.http = http;
        this.rate = 3;
        this.myDisable = true;
        this.blockValue1 = true;
        this.blockValue2 = true;
        this.blockValue3 = true;
    }
    Page1.prototype.toggleBlock1 = function () {
        this.blockValue1 = !this.blockValue1;
        console.log(this.blockValue1);
    };
    Page1.prototype.toggleBlock2 = function () {
        this.blockValue2 = !this.blockValue2;
    };
    Page1.prototype.toggleBlock3 = function () {
        this.blockValue3 = !this.blockValue3;
    };
    Page1.prototype.canActivate = function (a, b, c) {
        this.title = b.title;
    };
    Page1 = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [typeof (_a = typeof aurelia_router_1.Router !== "undefined" && aurelia_router_1.Router) === "function" && _a || Object, typeof (_b = typeof aurelia_http_client_1.HttpClient !== "undefined" && aurelia_http_client_1.HttpClient) === "function" && _b || Object])
    ], Page1);
    return Page1;
    var _a, _b;
}());
exports.Page1 = Page1;
//# sourceMappingURL=page1.js.map
});
___scope___.file("routes/jquery/page2.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <section>\n    ${title}\n  </section>\n\n\n\n  <div id=\"accordion\" role=\"tablist\">\n      <div class=\"card\">\n        <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n          <h5 class=\"mb-0\">\n            <a data-toggle=\"collapse\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n              Collapsible Group Item #1\n            </a>\n          </h5>\n        </div>\n    \n        <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n          <div class=\"card-body\">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n          <h5 class=\"mb-0\">\n            <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n              Collapsible Group Item #2\n            </a>\n          </h5>\n        </div>\n        <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n          <div class=\"card-body\">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\" role=\"tab\" id=\"headingThree\">\n          <h5 class=\"mb-0\">\n            <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n              Collapsible Group Item #3\n            </a>\n          </h5>\n        </div>\n        <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n          <div class=\"card-body\">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n          </div>\n        </div>\n      </div>\n    </div>\n\n  <hr />\n\n\n\n\n\n  <label>\n    Filter:\n    <input type=\"text\" value.bind=\"filter\" />\n  </label>\n\n  <ul>\n    <li repeat.for=\"name of names|filterBy:filter\">${name}</li>\n  </ul>\n\n  <hr />\n\n  <style>\n    .my-highlight {\n      color: #ff0000;\n      font-weight: bold;\n    }\n  </style>\n\n  <ul>\n    <li repeat.for=\"book of books | fuse:options:filter | fuseHighlight:'my-highlight'\">\n      <span innerhtml.bind=\"book.item.highlighted.title || book.item.title\"></span>\n      <span>-></span>\n      <span>${book.item.author.firstName}</span>\n      <span innerhtml.bind=\"book.item.highlighted.author.lastName || book.item.author.lastName\" </span>\n    </li>\n  </ul>\n\n</template>"
});
___scope___.file("routes/jquery/page2.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_router_1 = require("aurelia-router");
var aurelia_framework_1 = require("aurelia-framework");
var Page2 = (function () {
    function Page2(router) {
        this.router = router;
        this.names = ['Vegar', 'Saeed', 'Hamed'];
        this.options = {
            shouldSort: true,
            includeMatches: true,
            threshold: 0.6,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 3,
            keys: [
                'title',
                'author.firstName'
            ]
        };
        this.books = [
            {
                title: "Old Man's War",
                author: {
                    firstName: 'John',
                    lastName: 'Scalzi'
                }
            },
            {
                title: 'The Lock Artist',
                author: {
                    firstName: 'Steve',
                    lastName: 'Hamilton'
                }
            },
            {
                title: 'HTML5',
                author: {
                    firstName: 'Remy',
                    lastName: 'Sharp'
                }
            },
            {
                title: 'Right Ho Jeeves',
                author: {
                    firstName: 'P.D',
                    lastName: 'Woodhouse'
                }
            },
            {
                title: 'The Code of the Wooster',
                author: {
                    firstName: 'P.D',
                    lastName: 'Woodhouse'
                }
            },
            {
                title: 'Thank You Jeeves',
                author: {
                    firstName: 'P.D',
                    lastName: 'Woodhouse'
                }
            },
            {
                title: 'The DaVinci Code',
                author: {
                    firstName: 'Dan',
                    lastName: 'Brown'
                }
            },
            {
                title: 'Angels & Demons',
                author: {
                    firstName: 'Dan',
                    lastName: 'Brown'
                }
            },
            {
                title: 'The Silmarillion',
                author: {
                    firstName: 'J.R.R',
                    lastName: 'Tolkien'
                }
            },
            {
                title: 'Syrup',
                author: {
                    firstName: 'Max',
                    lastName: 'Barry'
                }
            },
            {
                title: 'The Lost Symbol',
                author: {
                    firstName: 'Dan',
                    lastName: 'Brown'
                }
            },
            {
                title: 'The Book of Lies',
                author: {
                    firstName: 'Brad',
                    lastName: 'Meltzer'
                }
            },
            {
                title: 'Lamb',
                author: {
                    firstName: 'Christopher',
                    lastName: 'Moore'
                }
            },
            {
                title: 'Fool',
                author: {
                    firstName: 'Christopher',
                    lastName: 'Moore'
                }
            },
            {
                title: 'Incompetence',
                author: {
                    firstName: 'Rob',
                    lastName: 'Grant'
                }
            },
            {
                title: 'Fat',
                author: {
                    firstName: 'Rob',
                    lastName: 'Grant'
                }
            },
            {
                title: 'Colony',
                author: {
                    firstName: 'Rob',
                    lastName: 'Grant'
                }
            },
            {
                title: 'Backwards, Red Dwarf',
                author: {
                    firstName: 'Rob',
                    lastName: 'Grant'
                }
            },
            {
                title: 'The Grand Design',
                author: {
                    firstName: 'Stephen',
                    lastName: 'Hawking'
                }
            },
            {
                title: 'The Book of Samson',
                author: {
                    firstName: 'David',
                    lastName: 'Maine'
                }
            },
            {
                title: 'The Preservationist',
                author: {
                    firstName: 'David',
                    lastName: 'Maine'
                }
            },
            {
                title: 'Fallen',
                author: {
                    firstName: 'David',
                    lastName: 'Maine'
                }
            },
            {
                title: 'Monster 1959',
                author: {
                    firstName: 'David',
                    lastName: 'Maine'
                }
            }
        ];
    }
    Page2.prototype.canActivate = function (a, b, c) {
        this.title = b.title;
    };
    Page2 = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [typeof (_a = typeof aurelia_router_1.Router !== "undefined" && aurelia_router_1.Router) === "function" && _a || Object])
    ], Page2);
    return Page2;
    var _a;
}());
exports.Page2 = Page2;
//# sourceMappingURL=page2.js.map
});
___scope___.file("routes/jquery/page3.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div style=\"margin:20px\">\n    <aut-microlink round.bind=false url=\"https://github.com/HamedFathi/PasswordMeter\">PasswordMeter</aut-microlink>\n    <br>\n    <aut-microlink round.bind=true url=\"https://github.com/shahabganji/aurelia-toolbelt\">aurelia-toolbelt</aut-microlink>\n    <br>\n    <div style=\"border:2px solid dodgerblue;min-height: 800px;\">\n      <aut-lazy-image style=\"border: 3px red solid;\" url='https://picsum.photos/500/200/?random' background-mode.bind='true'></aut-lazy-image>\n      <hr/>\n      <br>\n    </div>\n    <br>\n\n    <abt-password show-password.bind='true' score-range.bind='scoreRange' requirements.bind=\"requirements\"></abt-password>\n\n    <div>\n      <h5 style=\"color:dodgerblue\">stringifyfa value converter</h5>\n      <label>عدد :</label>\n      <input type=\"text\" value.bind=\"num\"></input>\n      <label style=\"margin-left: 10px\" textcontent.bind=\"num | stringifyfa\"></label>\n    </div>\n    <hr>\n    <div>\n      <h5 style=\"color:dodgerblue\">stringify rial value converter</h5>\n      <label>عدد :</label>\n      <input type=\"text\" value.bind=\"strrial\"></input>\n      <label style=\"margin-left: 10px\" textcontent.bind=\"strrial | stringifyrial\"></label>\n    </div>\n    <hr>\n    <div>\n      <h5 style=\"color:dodgerblue\">stringify toman value converter</h5>\n      <label>عدد :</label>\n      <input type=\"text\" value.bind=\"strtoman\"></input>\n      <label style=\"margin-left: 10px\" textcontent.bind=\"strtoman | stringifytoman\"></label>\n    </div>\n    <hr>\n    <div>\n      <h5 style=\"color:dodgerblue\">rial value converter</h5>\n      <label>عدد :</label>\n      <input type=\"text\" value.bind=\"rial\"></input>\n      <label style=\"margin-left: 10px\" textcontent.bind=\"rial | rial : { decimal: '`', alphabet: 'fa', currency: 'هزار ریال' }\"></label>\n    </div>\n    <hr>\n    <div>\n      <h5 style=\"color:dodgerblue\">toman value converter</h5>\n      <label>عدد :</label>\n      <input type=\"text\" value.bind=\"toman\"></input>\n      <label style=\"margin-left: 10px\" textcontent.bind=\"toman | toman : { decimal: '`', alphabet: 'fa', currency: 'هزار تومان' , cut: 1 }\"></label>\n    </div>\n    <hr>\n    <div>\n      <h5 style=\"color:dodgerblue\">persian chars value converter</h5>\n      <label>متن :</label>\n      <input type=\"text\" value.bind=\"word\"></input>\n      <label style=\"margin-left: 10px\" textcontent.bind=\"word | persianchars\"></label>\n    </div>\n    <hr>\n    <div>\n      <h5 style=\"color:dodgerblue\">persian url value converter</h5>\n      <label>آدرس وب :</label>\n      <input type=\"text\" value.bind=\"url\"></input>\n      <label style=\"margin-left: 10px\" textcontent.bind=\"url | persianurl\"></label>\n    </div>\n    <hr>\n    <div>\n      <h5 style=\"color:dodgerblue\">persian keyboard value converter</h5>\n      <label>متن :</label>\n      <input type=\"text\" value.bind=\"keyboard\"></input>\n      <label style=\"margin-left: 10px\" textcontent.bind=\"keyboard | persiankeyboard\"></label>\n    </div>\n    <hr>\n\n    <aut-lazy-image style=\"border: 3px red solid;width: 200px;height: 200px\" url='https://picsum.photos/510/200/?random' background-mode.bind='false'></aut-lazy-image>\n\n  </div>\n</template>\n"
});
___scope___.file("routes/jquery/page3.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_router_1 = require("aurelia-router");
var aurelia_framework_1 = require("aurelia-framework");
var Page3 = (function () {
    function Page3(router) {
        this.router = router;
        this.appended = ['s', 'tr', 'm', 'an'];
        this.num = 0;
        this.strrial = 0;
        this.strtoman = 0;
        this.rial = 0;
        this.toman = 0;
        this.keyboard = 'لخخلمث';
        this.url = 'https://fa.wikipedia.org/wiki/%D8%B5%D9%81%D8%AD%D9%87%D9%94_%D8%A7%D8%B5%D9%84%DB%8C';
        this.word = '٣٤٥ 789 علي';
        this.requirements = {
            minLength: 5
        };
        this.scoreRange = {
            '40': { message: 'veryWeak', color: 'red' },
            '80': { message: 'weak', color: 'khaki' },
            '120': { message: 'medium', color: 'orange' },
            '180': { message: 'strong', color: 'maroon' },
            '200': { message: 'veryStrong', color: 'blue' },
            '_': { message: 'perfect', color: 'green' }
        };
    }
    Page3.prototype.canActivate = function (a, b, c) {
        this.title = b.title;
    };
    Page3.prototype.x = function (element, response) {
        console.warn('***********************************************************');
        console.warn('***********************************************************');
    };
    Page3 = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [typeof (_a = typeof aurelia_router_1.Router !== "undefined" && aurelia_router_1.Router) === "function" && _a || Object])
    ], Page3);
    return Page3;
    var _a;
}());
exports.Page3 = Page3;
//# sourceMappingURL=page3.js.map
});
___scope___.file("routes/not-found.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n\n  <div class=\"container mt-5\">\n\n    <abt-alert type=\"info\" class=\"text-center\">\n      <img src='./favicon.ico' with=\"100\" height=\"100\">\n      <h4>\n        <strong>404</strong> - Page not found,\n        <abt-alert-link route-href=\"route:get-started\">get a fresh start? with\n        </abt-alert-link>\n        <div route-href=\"route:jquery\">jquery</div>\n      </h4>\n    </abt-alert>\n\n  </div>\n\n\n</template>\n"
});
___scope___.file("routes/purejs-route.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <!-- <require from=\"./../components/nav-bar\"></require> -->\n\n  <div class=\"row\">\n    <!-- <div class=\"col-sm-2\">\n\n      <nav-bar router.bind=\"router\">\n\n      </nav-bar>\n\n    </div> -->\n    <div class=\"col-sm-12\">\n      <br />\n      <div class=\"main no-select container\">\n        <router-view></router-view>\n      </div>\n\n    </div>\n  </div>\n\n\n\n</template>\n"
});
___scope___.file("routes/purejs-route.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var Purejs = (function () {
    function Purejs() {
    }
    Purejs.prototype.configureRouter = function (config, router) {
        config.map([
            {
                route: ['', 'checkbox'],
                name: 'pure-checkbox',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./purejs/checkbox'),
                nav: true,
                title: 'Pretty Checkbox',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['radio'],
                name: 'pure-radio',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./purejs/radio'),
                nav: true,
                title: 'Pretty Radio',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['markdown'],
                name: 'pure-markdown',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./purejs/mark-down'),
                nav: true,
                title: 'Mark Down',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['masked-input'],
                name: 'pure-masked-input',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./purejs/masked-input'),
                nav: true,
                title: 'Masked Input',
                settings: { auth: false, isComponent: true }
            },
            {
                route: ['microlink'],
                name: 'pure-microlink',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./purejs/microlink'),
                nav: true,
                title: 'Microlink',
                settings: { auth: false, isComponent: true }
            }
        ]);
        this.router = router;
    };
    return Purejs;
}());
exports.Purejs = Purejs;
//# sourceMappingURL=purejs-route.js.map
});
___scope___.file("routes/purejs/checkbox.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div class=\"container\">\n\n    <form>\n      <h4>Booleans</h4>\n\n      <aut-checkbox type=\"checkbox\" checked.bind=\"motherboard\"> Motherboard</aut-checkbox>\n\n      <aut-checkbox type=\"checkbox\" checked.bind=\"cpu\"> CPU</aut-checkbox>\n\n      <aut-checkbox type=\"checkbox\" checked.bind=\"memory\"> Memory</aut-checkbox>\n\n      <br /> motherboard = ${motherboard}\n      <br/> cpu = ${cpu}\n      <br/> memory = ${memory}\n      <br/>\n    </form>\n\n    <hr />\n\n    <form>\n      <h4>Array of Strings</h4>\n\n      <ul>\n        <li repeat.for=\"product of products\">\n\n          <aut-checkbox curve fill color=\"info\" value.bind=\"product\" checked.bind=\"selectedProducts\"> ${product}\n          </aut-checkbox>\n\n        </li>\n      </ul>\n      <br /> Selected products: ${selectedProducts}\n    </form>\n\n\n    <hr />\n\n\n    <form>\n      <h4>Array of Numbers</h4>\n      <ul>\n        <li repeat.for=\"product of otherProducts\">\n          <aut-checkbox curve fill color=\"info\" model.bind=\"product.id\" checked.bind=\"selectedProductIds\">\n            ${product.name}\n          </aut-checkbox>\n        </li>\n      </ul>\n      <br /> Selected product IDs: ${selectedProductIds}\n    </form>\n\n\n    <hr />\n\n\n    <form>\n      <h4>Array Of objects</h4>\n      <ul>\n\n        <li repeat.for=\"product of productsObject\">\n          <aut-checkbox model.bind=\"product\" checked.bind=\"selectedProductsObject\"> ${product.id} - ${product.name}\n          </aut-checkbox>\n        </li>\n      </ul>\n\n      Selected products:\n      <ul>\n        <li repeat.for=\"product of selectedProductsObject\">${product.id} - ${product.name}</li>\n      </ul>\n    </form>\n\n\n    <hr />\n\n\n\n    <form>\n      <h4>Array of objects With Matcher</h4>\n\n\n      <aut-checkbox model.bind=\"mymotherBoard\" matcher.bind=\"productMatcher\" checked.bind=\"selectedProductsMatcher\">\n        Motherboard\n      </aut-checkbox>\n\n\n      <aut-checkbox model.bind=\"mycpu\" matcher.bind=\"productMatcher\" checked.bind=\"selectedProductsMatcher\"> CPU\n      </aut-checkbox>\n\n\n      <aut-checkbox model.bind=\"mymemory\" matcher.bind=\"productMatcher\" checked.bind=\"selectedProductsMatcher\">\n        Memory\n      </aut-checkbox>\n\n      Selected products:\n      <ul>\n        <li repeat.for=\"product of selectedProductsMatcher\">${product.id} - ${product.name}</li>\n      </ul>\n    </form>\n\n\n  </div>\n\n  <hr>\n  <br />\n  <br />\n  <br />\n\n</template>\n"
});
___scope___.file("routes/purejs/checkbox.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Checkbox = (function () {
    function Checkbox() {
        this.motherboard = false;
        this.cpu = true;
        this.memory = false;
        this.products = ['Motherboard', 'CPU', 'Memory'];
        this.selectedProducts = [];
        this.otherProducts = [
            { id: 0, name: 'Motherboard' },
            { id: 1, name: 'CPU' },
            { id: 2, name: 'Memory' }
        ];
        this.selectedProductIds = [];
        this.productsObject = [
            { id: 0, name: 'Motherboard' },
            { id: 1, name: 'CPU' },
            { id: 2, name: 'Memory' }
        ];
        this.selectedProductsObject = [];
        this.mymotherBoard = { id: 0, name: 'Motherboard' };
        this.mycpu = { id: 1, name: 'CPU' };
        this.mymemory = { id: 2, name: 'Memory' };
        this.selectedProductsMatcher = [
            { id: 1, name: 'CPU' },
            { id: 2, name: 'Memory' }
        ];
        this.productMatcher = function (a, b) {
            return a.id === b.id;
        };
    }
    return Checkbox;
}());
exports.Checkbox = Checkbox;
//# sourceMappingURL=checkbox.js.map
});
___scope___.file("routes/purejs/mark-down.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <!-- <require from=\"highlight.js/styles/solarized-dark.css\"></require> -->\n\n\n  <div class=\"container\">\n\n\n    <aut-checkbox checked.bind=\"showtoolbar\" slim color=\"success\" switch animation=\"snooth\">\n      Show Toolbar\n    </aut-checkbox>\n\n\n    <hr />\n\n    <aut-mark-down show-editor.one-way=\"false\" show-preview.one-way=\"true\" show-tool-bar.bind=\"showtoolbar\" show-switches.bind=\"showSwitches\"\n      src=\"https://raw.githubusercontent.com/shahabganji/aurelia-star-rate/master/README.md\">\n    </aut-mark-down>\n  </div>\n\n</template>\n"
});
___scope___.file("routes/purejs/mark-down.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MarkDownPage = (function () {
    function MarkDownPage() {
        this.showtoolbar = true;
    }
    return MarkDownPage;
}());
exports.MarkDownPage = MarkDownPage;
//# sourceMappingURL=mark-down.js.map
});
___scope___.file("routes/purejs/masked-input.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n\n  <abt-alert color=\"info\">\n    Enter your mask based on information\n    <abt-alert-link href=\"https://github.com/RobinHerbots/Inputmask\">here</abt-alert-link>\n    <br />\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <input class=\"form-control\" type=\"text\" value.bind=\"mask\" />\n      </div>\n    </div>\n\n  </abt-alert>\n\n  <hr />\n\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <input class=\"form-control\" type=\"text\" aut-masked.bind=\"mask\" />\n    </div>\n  </div>\n\n\n</template>\n"
});
___scope___.file("routes/purejs/masked-input.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MaskedInput = (function () {
    function MaskedInput() {
        this.mask = '9999';
    }
    return MaskedInput;
}());
exports.MaskedInput = MaskedInput;
//# sourceMappingURL=masked-input.js.map
});
___scope___.file("routes/purejs/microlink.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n <aut-microlink round.bind=false url=\"https://github.com/HamedFathi/PasswordMeter\">PasswordMeter</aut-microlink>\n    <br>\n    <aut-microlink round.bind=true url=\"https://github.com/shahabganji/aurelia-toolbelt\">aurelia-toolbelt</aut-microlink>\n    <br>\n</template>"
});
___scope___.file("routes/purejs/microlink.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Microlink = (function () {
    function Microlink() {
    }
    return Microlink;
}());
exports.Microlink = Microlink;
//# sourceMappingURL=microlink.js.map
});
___scope___.file("routes/purejs/radio.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div class=\"container\">\n\n\n    <h4>No Binding</h4>\n    <aut-radio color=\"success-o\" name=\"programmer\" animation=\"smooth\">\n      Saeed\n    </aut-radio>\n\n    <aut-radio color=\"warning\" name=\"programmer\" animation=\"smooth\">\n      Hamed\n    </aut-radio>\n\n\n    <hr />\n\n    <form>\n      <h4>Numbers</h4>\n\n      <aut-radio fill color=\"primary\" repeat.for=\"product of products\" name=\"group1\" model.bind=\"product.id\" checked.bind=\"selectedProductId\">\n        ${product.id} - ${product.name}\n      </aut-radio>\n      <br /> Selected product ID: ${selectedProductId}\n    </form>\n\n\n    <hr />\n\n    <form>\n      <h4>Objects</h4>\n\n      <aut-radio color=\"danger-o\" repeat.for=\"product of products\" name=\"group2\" model.bind=\"product\" checked.bind=\"selectedProductObject\">\n        ${product.id} - ${product.name}\n      </aut-radio>\n\n\n      Selected product: ${selectedProductObject.id} - ${selectedProductObject.name}\n    </form>\n\n    <hr />\n\n\n    <form>\n      <h4>Matcher</h4>\n\n      <aut-radio switch name=\"group3\" color=\"info\" model.bind=\"products[0]\" matcher.bind=\"productMatcher\" checked.bind=\"selectedProductMatcher\">\n        Matcher - Motherboard</aut-radio>\n      <aut-radio switch color=\"warning\" name=\"group3\" model.bind=\"products[1]\" matcher.bind=\"productMatcher\" checked.bind=\"selectedProductMatcher\">\n        Matcher - CPU</aut-radio>\n      <aut-radio switch color=\"success\" name=\"group3\" model.bind=\"products[2]\" matcher.bind=\"productMatcher\" checked.bind=\"selectedProductMatcher\">\n        Matcher - Memory</aut-radio>\n\n      Selected product: ${selectedProductMatcher.id} - ${selectedProductMatcher.name}\n    </form>\n\n\n    <hr />\n\n    <form>\n      <h4>(boolean values )Do you like cake?</h4>\n\n      <aut-radio name=\"group4\" model.bind=\"null\" checked.bind=\"likesCake\"> Don't Know</aut-radio>\n      <aut-radio name=\"group4\" model.bind=\"true\" checked.bind=\"likesCake\" color=\"success-o\"> Yes</aut-radio>\n      <aut-radio name=\"group4\" model.bind=\"false\" checked.bind=\"likesCake\" color=\"danger-o\"> No</aut-radio>\n\n      likesCake = ${likesCake}\n    </form>\n\n    <hr />\n\n    <form>\n      <h4>Strings</h4>\n\n      <aut-radio switch slim color=\"info\" repeat.for=\"product of productsString\" name=\"group5\" value.bind=\"product\" checked.bind=\"selectedProductstring\">\n        String - ${product}\n      </aut-radio>\n      <br /> Selected product: ${selectedProductstring}\n    </form>\n\n    <br />\n    <br />\n    <br />\n\n\n\n</template>\n"
});
___scope___.file("routes/purejs/radio.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Radio = (function () {
    function Radio() {
        this.likesCake = null;
        this.products = [
            { id: 0, name: 'Motherboard' },
            { id: 1, name: 'CPU' },
            { id: 2, name: 'Memory' }
        ];
        this.selectedProductId = 1;
        this.selectedProductObject = this.products[2];
        this.productsString = ['Motherboard', 'CPU', 'Memory'];
        this.selectedProductstring = null;
        this.selectedProductMatcher = { id: 0, name: 'Motherboard' };
        this.productMatcher = function (a, b) { return a.id === b.id; };
    }
    return Radio;
}());
exports.Radio = Radio;
//# sourceMappingURL=radio.js.map
});
return ___scope___.entry = "main.ts";
});
FuseBox.pkg("fusebox-hot-reload", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
/**
 * @module listens to `source-changed` socket events and actions hot reload
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Client = require('fusebox-websocket').SocketClient, bundleErrors = {}, outputElement = document.createElement('div'), styleElement = document.createElement('style'), minimizeToggleId = 'fuse-box-toggle-minimized', hideButtonId = 'fuse-box-hide', expandedOutputClass = 'fuse-box-expanded-output', localStoragePrefix = '__fuse-box_';
function storeSetting(key, value) {
    localStorage[localStoragePrefix + key] = value;
}
function getSetting(key) {
    return localStorage[localStoragePrefix + key] === 'true' ? true : false;
}
var outputInBody = false, outputMinimized = getSetting(minimizeToggleId), outputHidden = false;
outputElement.id = 'fuse-box-output';
styleElement.innerHTML = "\n    #" + outputElement.id + ", #" + outputElement.id + " * {\n        box-sizing: border-box;\n    }\n    #" + outputElement.id + " {\n        z-index: 999999999999;\n        position: fixed;\n        top: 10px;\n        right: 10px;\n        width: 400px;\n        overflow: auto;\n        background: #fdf3f1;\n        border: 1px solid #eca494;\n        border-radius: 5px;\n        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        box-shadow: 0px 3px 6px 1px rgba(0,0,0,.15);\n    }\n    #" + outputElement.id + "." + expandedOutputClass + " {\n        height: auto;\n        width: auto;\n        left: 10px;\n        max-height: calc(100vh - 50px);\n    }\n    #" + outputElement.id + " .fuse-box-errors {\n        display: none;\n    }\n    #" + outputElement.id + "." + expandedOutputClass + " .fuse-box-errors {\n        display: block;\n        border-top: 1px solid #eca494;\n        padding: 0 10px;\n    }\n    #" + outputElement.id + " button {\n        border: 1px solid #eca494;\n        padding: 5px 10px;\n        border-radius: 4px;\n        margin-left: 5px;\n        background-color: white;\n        color: black;\n        box-shadow: 0px 2px 2px 0px rgba(0,0,0,.05);\n    }\n    #" + outputElement.id + " .fuse-box-header {\n        padding: 10px;\n    }\n    #" + outputElement.id + " .fuse-box-header h4 {\n        display: inline-block;\n        margin: 4px;\n    }";
styleElement.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(styleElement);
function displayBundleErrors() {
    var errorMessages = Object.keys(bundleErrors).reduce(function (allMessages, bundleName) {
        var bundleMessages = bundleErrors[bundleName];
        return allMessages.concat(bundleMessages.map(function (message) {
            var messageOutput = message
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbps;&npbs;&nbps;')
                .replace(/ /g, '&nbsp;');
            return "<pre>" + messageOutput + "</pre>";
        }));
    }, []), errorOutput = errorMessages.join('');
    if (errorOutput && !outputHidden) {
        outputElement.innerHTML = "\n        <div class=\"fuse-box-header\" style=\"\">\n            <h4 style=\"\">Fuse Box Bundle Errors (" + errorMessages.length + "):</h4>\n            <div style=\"float: right;\">\n                <button id=\"" + minimizeToggleId + "\">" + (outputMinimized ? 'Expand' : 'Minimize') + "</button>\n                <button id=\"" + hideButtonId + "\">Hide</button>\n            </div>\n        </div>\n        <div class=\"fuse-box-errors\">\n            " + errorOutput + "\n        </div>\n        ";
        document.body.appendChild(outputElement);
        outputElement.className = outputMinimized ? '' : expandedOutputClass;
        outputInBody = true;
        document.getElementById(minimizeToggleId).onclick = function () {
            outputMinimized = !outputMinimized;
            storeSetting(minimizeToggleId, outputMinimized);
            displayBundleErrors();
        };
        document.getElementById(hideButtonId).onclick = function () {
            outputHidden = true;
            displayBundleErrors();
        };
    }
    else if (outputInBody) {
        document.body.removeChild(outputElement);
        outputInBody = false;
    }
}
exports.connect = function (port, uri, reloadFullPage) {
    if (FuseBox.isServer) {
        return;
    }
    port = port || window.location.port;
    var client = new Client({
        port: port,
        uri: uri,
    });
    client.connect();
    client.on('source-changed', function (data) {
        console.info("%cupdate \"" + data.path + "\"", 'color: #237abe');
        if (reloadFullPage) {
            return window.location.reload();
        }
        /**
         * If a plugin handles this request then we don't have to do anything
         **/
        for (var index = 0; index < FuseBox.plugins.length; index++) {
            var plugin = FuseBox.plugins[index];
            if (plugin.hmrUpdate && plugin.hmrUpdate(data)) {
                return;
            }
        }
        if (data.type === "hosted-css") {
            var fileId = data.path.replace(/^\//, '').replace(/[\.\/]+/g, '-');
            var existing = document.getElementById(fileId);
            if (existing) {
                existing.setAttribute("href", data.path + "?" + new Date().getTime());
            }
            else {
                var node = document.createElement('link');
                node.id = fileId;
                node.type = 'text/css';
                node.rel = 'stylesheet';
                node.href = data.path;
                document.getElementsByTagName('head')[0].appendChild(node);
            }
        }
        if (data.type === 'js' || data.type === "css") {
            FuseBox.flush();
            FuseBox.dynamic(data.path, data.content);
            if (FuseBox.mainFile) {
                try {
                    FuseBox.import(FuseBox.mainFile);
                }
                catch (e) {
                    if (typeof e === 'string') {
                        if (/not found/.test(e)) {
                            return window.location.reload();
                        }
                    }
                    console.error(e);
                }
            }
        }
    });
    client.on('error', function (error) {
        console.log(error);
    });
    client.on('bundle-error', function (_a) {
        var bundleName = _a.bundleName, message = _a.message;
        console.error("Bundle error in " + bundleName + ": " + message);
        var errorsForBundle = bundleErrors[bundleName] || [];
        errorsForBundle.push(message);
        bundleErrors[bundleName] = errorsForBundle;
        displayBundleErrors();
    });
    client.on('update-bundle-errors', function (_a) {
        var bundleName = _a.bundleName, messages = _a.messages;
        messages.forEach(function (message) { return console.error("Bundle error in " + bundleName + ": " + message); });
        bundleErrors[bundleName] = messages;
        displayBundleErrors();
    });
};

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("fusebox-websocket", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events = require('events');
var SocketClient = /** @class */ (function () {
    function SocketClient(opts) {
        opts = opts || {};
        var port = opts.port || window.location.port;
        var protocol = location.protocol === 'https:' ? 'wss://' : 'ws://';
        var domain = location.hostname || 'localhost';
        this.url = opts.host || "" + protocol + domain + ":" + port;
        if (opts.uri) {
            this.url = opts.uri;
        }
        this.authSent = false;
        this.emitter = new events.EventEmitter();
    }
    SocketClient.prototype.reconnect = function (fn) {
        var _this = this;
        setTimeout(function () {
            _this.emitter.emit('reconnect', { message: 'Trying to reconnect' });
            _this.connect(fn);
        }, 5000);
    };
    SocketClient.prototype.on = function (event, fn) {
        this.emitter.on(event, fn);
    };
    SocketClient.prototype.connect = function (fn) {
        var _this = this;
        console.log('%cConnecting to fusebox HMR at ' + this.url, 'color: #237abe');
        setTimeout(function () {
            _this.client = new WebSocket(_this.url);
            _this.bindEvents(fn);
        }, 0);
    };
    SocketClient.prototype.close = function () {
        this.client.close();
    };
    SocketClient.prototype.send = function (eventName, data) {
        if (this.client.readyState === 1) {
            this.client.send(JSON.stringify({ event: eventName, data: data || {} }));
        }
    };
    SocketClient.prototype.error = function (data) {
        this.emitter.emit('error', data);
    };
    /** Wires up the socket client messages to be emitted on our event emitter */
    SocketClient.prototype.bindEvents = function (fn) {
        var _this = this;
        this.client.onopen = function (event) {
            console.log('%cConnected', 'color: #237abe');
            if (fn) {
                fn(_this);
            }
        };
        this.client.onerror = function (event) {
            _this.error({ reason: event.reason, message: 'Socket error' });
        };
        this.client.onclose = function (event) {
            _this.emitter.emit('close', { message: 'Socket closed' });
            if (event.code !== 1011) {
                _this.reconnect(fn);
            }
        };
        this.client.onmessage = function (event) {
            var data = event.data;
            if (data) {
                var item = JSON.parse(data);
                _this.emitter.emit(item.type, item.data);
                _this.emitter.emit('*', item);
            }
        };
    };
    return SocketClient;
}());
exports.SocketClient = SocketClient;

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("events", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
if (FuseBox.isServer) {
    module.exports = global.require("events");
} else {
    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
    }
    module.exports = EventEmitter;

    // Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter;

    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;

    // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10;

    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError("n must be a positive number");
        this._maxListeners = n;
        return this;
    };

    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;

        if (!this._events)
            this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === "error") {
            if (!this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er; // Unhandled 'error' event
                }
                throw TypeError("Uncaught, unspecified \"error\" event.");
            }
        }

        handler = this._events[type];

        if (isUndefined(handler))
            return false;

        if (isFunction(handler)) {
            switch (arguments.length) {
                // fast cases
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                    // slower
                default:
                    args = Array.prototype.slice.call(arguments, 1);
                    handler.apply(this, args);
            }
        } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
                listeners[i].apply(this, args);
        }

        return true;
    };

    EventEmitter.prototype.addListener = function(type, listener) {
        var m;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events)
            this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener)
            this.emit("newListener", type,
                isFunction(listener.listener) ?
                listener.listener : listener);

        if (!this._events[type])
        // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener;
        else if (isObject(this._events[type]))
        // If we've already got an array, just append.
            this._events[type].push(listener);
        else
        // Adding the second element, need to change to array.
            this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners;
            } else {
                m = EventEmitter.defaultMaxListeners;
            }

            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " +
                    "leak detected. %d listeners added. " +
                    "Use emitter.setMaxListeners() to increase limit.",
                    this._events[type].length);
                if (typeof console.trace === "function") {
                    // not supported in IE 10
                    console.trace();
                }
            }
        }

        return this;
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        var fired = false;

        function g() {
            this.removeListener(type, g);

            if (!fired) {
                fired = true;
                listener.apply(this, arguments);
            }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
    };

    // emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events || !this._events[type])
            return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener ||
            (isFunction(list.listener) && list.listener === listener)) {
            delete this._events[type];
            if (this._events.removeListener)
                this.emit("removeListener", type, listener);

        } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
                if (list[i] === listener ||
                    (list[i].listener && list[i].listener === listener)) {
                    position = i;
                    break;
                }
            }

            if (position < 0)
                return this;

            if (list.length === 1) {
                list.length = 0;
                delete this._events[type];
            } else {
                list.splice(position, 1);
            }

            if (this._events.removeListener)
                this.emit("removeListener", type, listener);
        }

        return this;
    };

    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;

        if (!this._events)
            return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
            if (arguments.length === 0)
                this._events = {};
            else if (this._events[type])
                delete this._events[type];
            return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === "removeListener") continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners("removeListener");
            this._events = {};
            return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
            this.removeListener(type, listeners);
        } else if (listeners) {
            // LIFO order
            while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
    };

    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
            ret = [];
        else if (isFunction(this._events[type]))
            ret = [this._events[type]];
        else
            ret = this._events[type].slice();
        return ret;
    };

    EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];

            if (isFunction(evlistener))
                return 1;
            else if (evlistener)
                return evlistener.length;
        }
        return 0;
    };

    EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type);
    };

    function isFunction(arg) {
        return typeof arg === "function";
    }

    function isNumber(arg) {
        return typeof arg === "number";
    }

    function isObject(arg) {
        return typeof arg === "object" && arg !== null;
    }

    function isUndefined(arg) {
        return arg === void 0;
    }
}

});
return ___scope___.entry = "index.js";
});
FuseBox.import("fuse-box-aurelia-loader")
FuseBox.import("aurelia-bootstrapper")
window.FUSEBOX_AURELIA_LOADER_RELOAD = true;
window.FUSEBOX_AURELIA_LOADER_LOGGING = true;
FuseBox.import("fusebox-hot-reload").connect(4444, "", false)
FuseBox.target = "universal"

FuseBox.import("default/main.js");
FuseBox.main("default/main.js");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((p||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(p){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!p&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=g[a];if(!s){if(p&&"electron"!==x.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),d=i(c),v=s.f[d];return!v&&d.indexOf("*")>-1&&(l=d),v||l||(d=t(c,"/","index.js"),v=s.f[d],v||"."!==c||(d=s.s&&s.s.entry||"index.js",v=s.f[d]),v||(d=c+".js",v=s.f[d]),v||(v=s.f[c+".jsx"]),v||(d=c+"/index.jsx",v=s.f[d])),{file:v,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:d}}function s(e,r,n){if(void 0===n&&(n={}),!p)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);x.dynamic(a,o),r(x.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=h[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=g[t.pkgName];if(u){var d={};for(var m in u.f)a.test(m)&&(d[m]=c(t.pkgName+"/"+m));return d}}if(!i){var h="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return h?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var y=i.locals={},w=n(t.validPath);y.exports={},y.module={exports:y.exports},y.require=function(e,r){return c(e,{pkg:_,path:w,v:t.versions})},p||!v.require.main?y.require.main={filename:"./",paths:[]}:y.require.main=v.require.main;var j=[y.module.exports,y.require,y.module,t.validPath,w,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),y.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof WorkerGlobalScope,p="undefined"!=typeof window&&window.navigator||d,v=p?d?{}:window:global;p&&(v.global=d?{}:window),e=p&&"undefined"==typeof __fbx__dnm__?e:module.exports;var m=p?d?{}:window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};p||(v.require=require);var g=m.p=m.p||{},h=m.e=m.e||{},x=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){h[e]=h[e]||[],h[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=g[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=g.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(g[e])return n(g[e].s);var t=g[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=g,r.isBrowser=p,r.isServer=!p,r.plugins=[],r}();return p||(v.FuseBox=x),e.FuseBox=x}(this))