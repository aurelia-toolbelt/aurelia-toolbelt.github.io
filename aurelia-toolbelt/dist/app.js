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
        var _this = this;
        var option;
        return __generator(this, function (_a) {
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
            setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, aurelia.start()];
                        case 1:
                            _a.sent();
                            aurelia.setRoot('app');
                            return [2];
                    }
                });
            }); }, 1500);
            return [2];
        });
    });
}
exports.configure = configure;
//# sourceMappingURL=main.js.map
});
___scope___.file("app.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("app.css", "body {\n    margin: 0;\n    font-family: 'tahoma';\n    font-size: 13px;\n}\n\n.no-select {\n    -webkit-touch-callout: none;\n    /* iOS Safari */\n    -webkit-user-select: none;\n    /* Safari */\n    -khtml-user-select: none;\n    /* Konqueror HTML */\n    -moz-user-select: none;\n    /* Firefox */\n    -ms-user-select: none;\n    /* Internet Explorer/Edge */\n    user-select: none;\n    /* Non-prefixed version, currently supported by Chrome and Opera */\n}\n\n.main{\n    margin-top: 50px;\n}\n\n\n\nlegend{\n    padding-top: 50px !important;\n    \n    border-bottom: 1px solid #773377;\n}")
});
___scope___.file("app.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <require from=\"./components/main-header\"></require>\n  <require from=\"./components/nav-bar\"></require>\n  <require from='bootstrap/dist/css/bootstrap.css'></require>\n\n  <require from=\"./app.css\"></require>\n\n  <link href=\"${selectedTheme.path}.min.css\" rel=\"stylesheet\">\n\n  <aut-nprogress loading.bind=\"router.isNavigating\" color=\"gold\"></aut-nprogress>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <main-header themes.bind=\"themes\" theme.bind=\"selectedTheme\" router.bind=\"router\"></main-header>\n    </div>\n  </div>\n  \n  <br/>\n  <br/>\n\n  <router-view></router-view>\n\n\n  <aut-scrollup class=\"btn-info\" threshold=\"1000\">\n\n  </aut-scrollup>\n\n  <!-- <main-footer></main-footer> -->\n</template>\n"
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
                route: ['bootstrap'],
                name: 'bootstrap',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./routes/bootstrap-route'),
                nav: true,
                title: 'Bootstrap',
                settings: { auth: false }
            },
            {
                route: ['purejs'],
                name: 'purejs',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./routes/purejs-route'),
                nav: true,
                title: 'JS',
                settings: { auth: false }
            },
            {
                route: ['jquery'],
                name: 'jquery',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./routes/jquery-route'),
                nav: true,
                title: 'jQuery',
                settings: { auth: false }
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

module.exports.default =  "<template>\n\n\n\n  <nav class=\"navbar fixed-top navbar-expand-lg  navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"https://github.com/shahabganji/aurelia-toolbelt\">\n      <i class=\"fa fa-github fa-lg mr-2\"></i>\n      aurelia-toolbelt\n    </a>\n    <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button> -->\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav  mr-auto\">\n        <li repeat.for=\"row of router.navigation\" class=\"nav-item ${row.isActive ? 'active' : ''}\">\n          <a class=\"nav-link\" href.bind=\"row.href\">${row.title}\n            <span class=\"sr-only\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n\n    <form class=\"form-inline my-2 my-lg-0\">\n      <label>\n        <a href=\"https://bootswatch.com/\" class=\"text-light\">Bootswatch themes</a>\n        &nbsp;&nbsp;\n        <abt-dropdown value.bind=\"theme\" class=\"mr-2\" title=\"${theme.name}\" align-right>\n          <abt-dropdown-item repeat.for=\"th of themes\" model.bind=\"th\">${th.name}</abt-dropdown-item>\n        </abt-dropdown>\n      </label>\n    </form>\n  </nav>\n\n</template>\n"
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
var $ = require("jquery");
var NavBar = (function () {
    function NavBar(router) {
        this.router = router;
    }
    NavBar.prototype.attached = function () {
        $('.aut-metis-menu-item-link').click(function () {
            document.documentElement.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });
    };
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
var popperjs = require('popper.js');
require("bootstrap");
require("bootstrap/dist/css/bootstrap.css");
require("metismenu/dist/metismenu.css");
require("nprogress/nprogress.css");
require("toastr/build/toastr.css");
require("font-awesome/css/font-awesome.css");
require("highlight.js/styles/solarized-dark.css");
require("pretty-checkbox/dist/pretty-checkbox.css");
var zenscroll = require("zenscroll");
require("aureliatoolbelt-thirdparty/bootstrap-tokenize2/tokenize2.css");
require("aureliatoolbelt-thirdparty/bootstrap-tokenize2/tokenize2.js");
require("aureliatoolbelt-thirdparty/bootstrap-toggle/bootstrap-toggle.js");
require("aureliatoolbelt-thirdparty/jquery.blockUI/jquery.blockUI.js");
var ml = require('aureliatoolbelt-thirdparty/microlink/microlink.js');
var x = fuse;
var hljs = hl;
var Popper = popperjs;
var zen = zenscroll;
//# sourceMappingURL=extra.js.map
});
___scope___.file("routes/bootstrap-route.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n    <require from=\"./../components/nav-bar\"></require>\n\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n\n        <nav-bar router.bind=\"router\">\n\n        </nav-bar>\n      \n    </div>\n    <div class=\"col-sm-10\">\n      <br />\n      <div class=\"main no-select container\">\n        <router-view></router-view>\n      </div>\n\n    </div>\n  </div>\n\n</template>\n"
});
___scope___.file("routes/bootstrap-route.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var BootstrapRoute = (function () {
    function BootstrapRoute() {
    }
    BootstrapRoute.prototype.configureRouter = function (config, router) {
        config.map([
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
                route: ['floatinput'],
                name: 'bootstrap-floatinput',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/float-input'),
                nav: true,
                title: 'Float Input',
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
                route: ['listgroup'],
                name: 'bootstrap-listgroup',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/listgroup'),
                nav: true,
                title: 'Listgroup',
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
            }, {
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
                route: ['touchspin'],
                name: 'bootstrap-touchspin',
                moduleId: aurelia_framework_1.PLATFORM.moduleName('./bootstrap/touchspin'),
                nav: true,
                title: 'Touch Spin',
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
            }
        ]);
        this.router = router;
    };
    return BootstrapRoute;
}());
exports.BootstrapRoute = BootstrapRoute;
//# sourceMappingURL=bootstrap-route.js.map
});
___scope___.file("routes/bootstrap/alert.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  \n  <abt-alert>This is a primary alert—check it out!</abt-alert>\n\n  <abt-alert dismissible=\"true\" color=\"secondary\">This is a dismissible secondary alert—check it out!</abt-alert>\n  <abt-alert dismissible color=\"warning\">This is a dismissible warning alert—check it out!</abt-alert>\n  <abt-alert dismissible.bind=\"true\" color=\"danger\">\n    This is a dismissible danger alert with\n    <abt-alert-link href=\"https://github.com/shahabganji/aurelia-toolbelt/src/components/bootstrap/alert\">an example link</abt-alert-link>. Give it a click if you like.\n  </abt-alert>\n\n  <abt-alert color=\"primary\">\n    This is a non-dismissible primary alert with\n    <abt-alert-link href=\"https://github.com/shahabganji/aurelia-toolbelt/src/components/bootstrap/alert\">an example link</abt-alert-link>. Give it a click if you like.\n  </abt-alert>\n  <abt-alert dismissible=\"false\" color=\"success\">This is a non-dismissible success alert—check it out!</abt-alert>\n  <abt-alert dismissible.bind=\"false\" color=\"info\">This is a non-dismissible info alert—check it out!</abt-alert>\n  <br />\n\n  <abt-alert color=\"success\">\n    <h4 class=\"alert-heading\">Well done!</h4>\n    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that\n      you can see how spacing within an alert works with this kind of content.</p>\n    <hr>\n    <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n  </abt-alert>\n\n  <hr /> \n\n\n\n\n  <abt-button click.call=\"toggleAlert()\">\n    Toggle Alert\n  </abt-button>\n\n  <abt-alert color=\"primary\" show-alert.bind=\"showOrHideAlert\" bs-show.call=\"showAlert(target)\">\n    This is an animated primary alert with\n    <abt-alert-link href=\"https://github.com/shahabganji/aurelia-toolbelt/src/components/bootstrap/alert\">an example link</abt-alert-link>. Give it a click if you like.\n  </abt-alert>\n  <br />\n  <abt-alert color=\"primary\" animate=\"false\" show-alert.bind=\"showOrHideAlert\">\n    This is a non-animated primary alert with\n    <abt-alert-link href=\"https://github.com/shahabganji/aurelia-toolbelt/src/components/bootstrap/alert\">an example link</abt-alert-link>. Give it a click if you like.\n  </abt-alert>\n\n\n</template>\n"
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
        this.showOrHideAlert = true;
    }
    Alert.prototype.showAlert = function (target) {
        console.log('show');
    };
    Alert.prototype.toggleAlert = function () {
        this.ts2.info('Toggling alerts', '', {
            progressBar: true, preventDuplicates: true, positionClass: 'toast-bottom-right'
        });
        this.showOrHideAlert = !this.showOrHideAlert;
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

module.exports.default =  "<template>\n  <h3>\n    Badges\n  </h3>\n\n  <hr />\n\n  <h1>Example heading\n    <abt-badge color=\"secondary\">New</abt-badge>\n  </h1>\n  <h2>Example heading\n    <abt-badge color=\"secondary\" pill>New</abt-badge>\n  </h2>\n  <br />\n  <abt-button type=\"button\">\n    Notifications\n    <abt-badge color=\"light\" pill>11</abt-badge>\n  </abt-button>\n  <br>\n  <br>\n  <abt-button type=\"button\">\n    Profile\n    <abt-badge color=\"light\">\n      9\n    </abt-badge>\n    <span class=\"sr-only\">unread messages</span>\n  </abt-button>\n\n  <br />\n  <br />\n\n  <abt-badge color=\"primary\">Primary</abt-badge>\n  <abt-badge color=\"secondary\">Secondary</abt-badge>\n  <abt-badge color=\"success\">Success</abt-badge>\n  <abt-badge color=\"danger\">Danger</abt-badge>\n  <abt-badge color=\"warning\">Warning</abt-badge>\n  <abt-badge color=\"info\">Info</abt-badge>\n  <abt-badge color=\"light\">Light</abt-badge>\n  <abt-badge color=\"dark\">Dark</abt-badge>\n\n  <br>\n\n  <abt-badge pill color=\"primary\">Primary</abt-badge>\n  <abt-badge pill color=\"secondary\">Secondary</abt-badge>\n  <abt-badge pill color=\"success\">Success</abt-badge>\n  <abt-badge pill color=\"danger\">Danger</abt-badge>\n  <abt-badge pill color=\"warning\">Warning</abt-badge>\n  <abt-badge pill color=\"info\">Info</abt-badge>\n  <abt-badge pill color=\"light\">Light</abt-badge>\n  <abt-badge pill color=\"dark\">Dark</abt-badge>\n\n  <br />\n  <br />\n</template>\n"
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

module.exports.default =  "<template>\n\n\n  <fieldset>\n    <legend>\n      Breadcrumb sample\n    </legend>\n\n    <abt-breadcrumb items.bind=\"items\">\n\n    </abt-breadcrumb>\n\n  </fieldset>\n\n</template>\n"
});
___scope___.file("routes/bootstrap/breadcrumb.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Breadcrumb = (function () {
    function Breadcrumb() {
        this.items = [];
    }
    Breadcrumb.prototype.activate = function () {
        this.items = [{ title: 'Bootstrap' }, { title: 'Breadcrumb' }];
        return true;
    };
    return Breadcrumb;
}());
exports.Breadcrumb = Breadcrumb;
//# sourceMappingURL=breadcrumb.js.map
});
___scope___.file("routes/bootstrap/button-groups.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n\n  <h1>Button Groups</h1>\n\n  <br />\n\n  <abt-button-group label=\"Basic example\">\n    <abt-button type=\"button\" color=\"secondary\">Left</abt-button>\n    <abt-button type=\"button\" color=\"secondary\">Middle</abt-button>\n    <abt-button type=\"button\" color=\"secondary\">Right</abt-button>\n  </abt-button-group>\n\n\n  <abt-button-group label=\"Basic example\" vertical>\n    <abt-button type=\"button\" color=\"secondary\">Left</abt-button>\n    <abt-button type=\"button\" color=\"secondary\">Middle</abt-button>\n    <abt-button type=\"button\" color=\"secondary\">Right</abt-button>\n  </abt-button-group>\n\n  <br/>\n  <br/>\n\n  <abt-toolbar label=\"Toolbar with button groups\">\n    <abt-button-group label=\"First group\" class=\"mr-2\">\n      <abt-button type=\"button\" color=\"secondary\">1</abt-button>\n      <abt-button type=\"button\" color=\"secondary\">2</abt-button>\n      <abt-button type=\"button\" color=\"secondary\">3</abt-button>\n      <abt-button type=\"button\" color=\"secondary\">4</abt-button>\n    </abt-button-group>\n    <abt-button-group label=\"Second group\" class=\"mr-2\">\n      <abt-button type=\"button\" color=\"secondary\">5</abt-button>\n      <abt-button type=\"button\" color=\"secondary\">6</abt-button>\n      <abt-button type=\"button\" color=\"secondary\">7</abt-button>\n    </abt-button-group>\n    <abt-button-group label=\"Third group\">\n      <abt-button type=\"button\" color=\"secondary\">8</abt-button>\n    </abt-button-group>\n  </abt-toolbar>\n\n  <br />\n  <br />\n  <br />\n\n\n  <abt-toolbar class=\"mb-3\" label=\"Toolbar with button groups\">\n    <abt-button-group label=\"First group\" class=\"mr-2\">\n      <abt-button type=\"button\" color=\"secondary\">1</abt-button>\n      <abt-button type=\"button\" color=\"secondary\">2</abt-button>\n      <abt-button type=\"button\" color=\"secondary\">3</abt-button>\n      <abt-button type=\"button\" color=\"secondary\">4</abt-button>\n    </abt-button-group>\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\" id=\"btnGroupAddon\">@</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Input group example\" aria-label=\"Input group example\" aria-describedby=\"btnGroupAddon\">\n    </div>\n  </abt-toolbar>\n\n  <abt-toolbar class=\"justify-content-between\" label=\"Toolbar with button groups\">\n    <abt-button-group label=\"First group\" class=\"mr-2\">\n      <abt-button type=\"button\" color=\"secondary\">1</abt-button>\n      <abt-button type=\"button\" color=\"secondary\">2</abt-button>\n      <abt-button type=\"button\" color=\"secondary\">3</abt-button>\n      <abt-button type=\"button\" color=\"secondary\">4</abt-button>\n    </abt-button-group>\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\" id=\"btnGroupAddon2\">@</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Input group example\" aria-label=\"Input group example\" aria-describedby=\"btnGroupAddon2\">\n    </div>\n  </abt-toolbar>\n\n\n  <br />\n  <br />\n\n  <abt-button-group label=\"First group\" size=\"lg\">\n    <abt-button type=\"button\" color=\"secondary\">left</abt-button>\n    <abt-button type=\"button\" color=\"secondary\">middle</abt-button>\n    <abt-button type=\"button\" color=\"secondary\">right</abt-button>\n  </abt-button-group>\n\n  <abt-button-group label=\"First group\">\n    <abt-button type=\"button\" color=\"secondary\">left</abt-button>\n    <abt-button type=\"button\" color=\"secondary\">middle</abt-button>\n    <abt-button type=\"button\" color=\"secondary\">right</abt-button>\n  </abt-button-group>\n\n  <abt-button-group label=\"First group\" size=\"sm\">\n    <abt-button type=\"button\" color=\"secondary\">left</abt-button>\n    <abt-button type=\"button\" color=\"secondary\">middle</abt-button>\n    <abt-button type=\"button\" color=\"secondary\">right</abt-button>\n  </abt-button-group>\n  <br />\n  <br />\n\n  <abt-button-group label=\"Button group with nested dropdown\">\n    <abt-button type=\"button\" class=\"btn btn-secondary\">1</abt-button>\n    <abt-button type=\"button\" class=\"btn btn-secondary\">2</abt-button>\n\n    <abt-dropdown title=\"Dropdown\" color=\"info\">\n      <abt-dropdown-item>Dropdown link</abt-dropdown-item>\n      <abt-dropdown-item>Dropdown link</abt-dropdown-item>\n    </abt-dropdown>\n\n  </abt-button-group>\n\n\n  <br />\n  <br />\n  <br />\n</template>\n"
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

module.exports.default =  "<template>\n\n\n  <abt-link-button color=\"warning\" href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/button\">\n    Link\n  </abt-link-button>\n  <br /><br />\n  <abt-link-button block href=\"https://github.com/shahabganji/aurelia-toolbelt/tree/master/src/components/bootstrap/button\">\n    Link\n  </abt-link-button>\n  <br /><br />\n  <abt-button color=\"success\" click.call=\"buttonClicked(event,target)\">\n    Test-Success\n  </abt-button>\n\n  <br /><br />\n\n  <abt-button outline block color=\"danger\" size=\"sm\" click.call=\"buttonClicked(event,target)\">\n    <i class=\"fa fa-gear fa-spin\"></i>\n    Test-Danger\n    </span>\n  </abt-button>\n\n  <br /><br />\n\n  <abt-button block color=\"info\" size=\"lg\" click.call=\"buttonClicked(event,target)\">\n    <span>\n      <i class=\"fa fa-link\"></i>\n      Test-Info\n    </span>\n    <slot slot=\"loading\">\n      <i class=\"fa fa-refresh fa-spin\" aria-hidden=\"true\">\n      </i>\n    </slot>\n  </abt-button>\n  <br />\n</template>\n"
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
var Buttons = (function () {
    function Buttons(http) {
        this.http = http;
    }
    Buttons.prototype.buttonClicked = function (event, target) {
        console.log('buttonClicked');
        console.log(target);
        return this.http.get('https://github.com');
    };
    Buttons = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [typeof (_a = typeof aurelia_http_client_1.HttpClient !== "undefined" && aurelia_http_client_1.HttpClient) === "function" && _a || Object])
    ], Buttons);
    return Buttons;
    var _a;
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

module.exports.default =  "<template>\n\n  <abt-carousel interval.bind=\"3000\" show-indicator.bind=\"true\" prev-control=\"true\" next-control=\"true\">\n    <abt-carousel-image-item src=\"/images/c1.jpg\" alt=\"First\">\n      <h5>First</h5>\n      <p>This is a image.</p>\n    </abt-carousel-image-item>\n    <abt-carousel-image-item active src=\"/images/c2.jpg\" alt=\"Second\">\n      <h5>Second</h5>\n      <p>This is a image.</p>\n    </abt-carousel-image-item>\n    <abt-carousel-image-item src=\"/images/c3.jpg\" alt=\"Third\">\n      <h5>Third</h5>\n      <p>This is a image.</p>\n    </abt-carousel-image-item>\n    <abt-carousel-image-item src=\"/images/c4.jpg\" alt=\"Forth\">\n      <h5>Forth</h5>\n      <p>This is a image.</p>\n    </abt-carousel-image-item>\n    <abt-carousel-image-item src=\"/images/c5.jpg\" alt=\"Fifth\">\n      <h5>Fifth</h5>\n      <p>This is a image.</p>\n    </abt-carousel-image-item>\n  </abt-carousel>\n\n  <br/>\n  <hr/>\n  <br/>\n\n\n  <abt-carousel  interval.bind=\"3000\" prev-control=\"true\" next-control=\"true\">\n    <abt-carousel-html-item>\n      <h1 style='color:red'>AAAA</h1>\n    </abt-carousel-html-item>\n    <abt-carousel-html-item active>\n      <h1 style='color:greed'>BBBB</h1>\n         </abt-carousel-html-item>\n    <abt-carousel-html-item>\n      <h1 style='color:blue'>CCCC</h1>\n    </abt-carousel-html-item>\n    <abt-carousel-html-item>\n      <h1 style='color:gray'>DDDD</h1>\n    </abt-carousel-html-item>\n    <abt-carousel-html-item>\n      <h1 style='color:yellow'>EEEE</h1>\n    </abt-carousel-html-item>\n  </abt-carousel>\n</template>\n"
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

module.exports.default =  "<template>\n  <br />\n  \n  <fieldset>\n\n    <legend>\n      Simple Usage\n    </legend>\n    <p>\n      <a class=\"btn btn-link\" type=\"button\" ref=\"mylink\">\n        Link with href\n      </a>\n      <abt-button class=\"btn btn-primary\" type=\"button\" id=\"myBtn2\">\n        abt-button with data-target\n      </abt-button>\n      <button class=\"btn btn-primary\" type=\"button\" ref=\"myBtn\">\n        Button with data-target\n      </button>\n    </p>\n\n    <abt-collapse controlled-by.bind=\"[myBtn,'myBtn2', mylink]\" bs-show.call=\"showCollapse()\" bs-hide.call=\"hideCollapse()\">\n      <div class=\"card card-body\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,\n        craft beer labore wes anderson cred nesciunt sapiente ea proident.\n      </div>\n    </abt-collapse>\n\n  </fieldset>\n\n  <fieldset>\n\n    <legend>\n      Multiple targets\n    </legend>\n\n\n    <p>\n      <abt-button id=\"btnFirst\">\n        First element\n      </abt-button>\n      <abt-button id=\"btnSecond\">\n        Toggle second element\n      </abt-button>\n      <button class=\"btn btn-primary\" type=\"button\" ref=\"btnBoth\">\n        Toggle All elements\n      </button>\n    </p>\n    <div class=\"row\">\n      <div class=\"col\">\n        <abt-collapse controlled-by.bind=\"['btnFirst',btnBoth]\">\n          <div class=\"card card-body\">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,\n            craft beer labore wes anderson cred nesciunt sapiente ea proident.\n          </div>\n        </abt-collapse>\n      </div>\n      <div class=\"col\">\n        <abt-collapse controlled-by.bind=\"['btnSecond',btnBoth]\">\n          <div class=\"card card-body\">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,\n            craft beer labore wes anderson cred nesciunt sapiente ea proident.\n          </div>\n        </abt-collapse>\n      </div>\n      <div class=\"col\">\n        <abt-collapse controlled-by.bind=\"btnBoth\">\n          <div class=\"card card-body\">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,\n            craft beer labore wes anderson cred nesciunt sapiente ea proident.\n          </div>\n        </abt-collapse>\n      </div>\n    </div>\n\n  </fieldset>\n\n  <fieldset>\n\n    <legend>\n      Accordion\n    </legend>\n\n    <abt-accordion>\n      <abt-accordion-item title=\"first\" >\n        <div class=\"container\">\n\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n          non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt\n          aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n\n        </div>\n      </abt-accordion-item>\n\n      <abt-accordion-item title=\"second\" active.bind=\"true\"> \n        <div class=\"container\">\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n          non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt\n          aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </div>\n      </abt-accordion-item>\n\n      <abt-accordion-item title=\"Third\">\n        <div class=\"container\">\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n          non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt\n          aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </div>\n      </abt-accordion-item>\n\n    </abt-accordion>\n\n  </fieldset>\n\n\n</template>\n"
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
        this.tr.warning('Collapse ide event called');
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

module.exports.default =  "<template>\n\n\n  <fieldset>\n    <legend>Dropdown - Simple</legend>\n    <abt-dropdown split align-right placement=\"top\" size=\"sm\" title=\"Action\" click.call=\"buttonClicked(event,target)\">\n      <abt-dropdown-header>Important Actions</abt-dropdown-header>\n      <abt-dropdown-item>Action</abt-dropdown-item>\n      <abt-dropdown-item disabled>Another action</abt-dropdown-item>\n      <abt-dropdown-item>Something else here</abt-dropdown-item>\n      <abt-dropdown-divider></abt-dropdown-divider>\n      <abt-dropdown-item>Separated link</abt-dropdown-item>\n    </abt-dropdown>\n\n    <abt-dropdown class=\"mr-5\" placement=\"left\" color=\"warning\" title=\"Action\" disabled.bind=\"true\">\n      <abt-dropdown-item>Action</abt-dropdown-item>\n      <abt-dropdown-item>Another action</abt-dropdown-item>\n      <abt-dropdown-item>Something else here</abt-dropdown-item>\n      <abt-dropdown-divider></abt-dropdown-divider>\n      <abt-dropdown-item>Separated link</abt-dropdown-item>\n    </abt-dropdown>\n\n    <abt-dropdown color=\"danger\" placement=\"right\" title=\"Action\" disabled.bind=\"false\" size=\"md\">\n      <abt-dropdown-item>Action</abt-dropdown-item>\n      <abt-dropdown-item>Another action</abt-dropdown-item>\n      <abt-dropdown-item>Something else here</abt-dropdown-item>\n      <abt-dropdown-divider></abt-dropdown-divider>\n      <abt-dropdown-item>Separated link</abt-dropdown-item>\n    </abt-dropdown>\n  </fieldset>\n\n  <fieldset>\n    <legend>Dropdown - Objects</legend>\n\n    <abt-dropdown class=\"mb-5\" placement=\"top\" value.bind=\"selectedProduct\" color=\"info\" title=\"choose...\" size=\"sm\">\n      <abt-dropdown-item model.bind=\"null\">\n        choose...\n      </abt-dropdown-item>\n      <abt-dropdown-divider></abt-dropdown-divider>\n      <abt-dropdown-item repeat.for=\"product of products\" model.bind=\"product\">\n        ${product.id} - ${product.name}\n      </abt-dropdown-item>\n    </abt-dropdown>\n\n    <span>\n      Selected product: ${selectedProduct.id} : ${selectedProduct.name}\n    </span>\n\n  </fieldset>\n\n  <fieldset>\n    <legend>Dropdown - Matchers</legend>\n\n    <abt-dropdown class=\"mb-5\" value.bind=\"selectedProduct\" matcher.bind=\"productMatcher\" color=\"info\" title=\"choose...\" size=\"sm\">\n      <abt-dropdown-item model.bind=\"null\">\n        choose...\n      </abt-dropdown-item>\n      <abt-dropdown-divider></abt-dropdown-divider>\n      <abt-dropdown-item repeat.for=\"product of products\" model.bind=\"product\">\n        ${product.id} - ${product.name}\n      </abt-dropdown-item>\n    </abt-dropdown>\n\n    <span>\n      Selected product: ${selectedProduct.id}: ${selectedProduct.name}\n    </span>\n\n  </fieldset>\n\n\n  <fieldset>\n    <legend>Dropdown - Booleans</legend>\n\n    <abt-dropdown class=\"mb-5\" value.bind=\"likesTacos\" color=\"success\" title=\"like your tacos\" size=\"sm\">\n      <abt-dropdown-item model.bind=\"null\">\n        Do you like tacos\n      </abt-dropdown-item>\n      <abt-dropdown-divider></abt-dropdown-divider>\n      <abt-dropdown-item model.bind=\"true\">\n        Yes\n      </abt-dropdown-item>\n      <abt-dropdown-item model.bind=\"false\">\n        No\n      </abt-dropdown-item>\n    </abt-dropdown>\n\n    <span>\n      likesTacos: ${likesTacos}\n    </span>\n\n  </fieldset>\n\n  <select value.bind=\"selectedItemString\">\n    <option value=\"\">\n      Choose your hardware\n    </option>\n    <option repeat.for=\"str of stringObjects\" value.bind=\"str\">\n      ${str}\n    </option>\n  </select>\n\n  <fieldset>\n    <legend>Dropdown - Strings</legend>\n\n    <abt-dropdown class=\"mb-5\" value.bind=\"selectedItemString\" color=\"success\" title=\"Choose your hardware\" size=\"sm\" \n    changed.call=\"selectedChanged(selected)\"\n      bs-shown.call=\"dropDownShown()\">\n      <abt-dropdown-item value=\"\">\n        Choose your hardware\n      </abt-dropdown-item>\n      <abt-dropdown-divider></abt-dropdown-divider>\n      <abt-dropdown-item repeat.for=\"str of stringObjects\" value.bind=\"str\" disabled.bind=\"$index===1\">\n        ${str}\n      </abt-dropdown-item>\n    </abt-dropdown>\n\n    <span>Your selected items is: </span>\n    <span>${selectedItemString}</span>\n\n  </fieldset>\n\n</template>\n"
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
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_http_client_1 = require("aurelia-http-client");
var BootstrapDropdownRoute = (function () {
    function BootstrapDropdownRoute(http) {
        this.http = http;
        this.products = [
            { id: 0, name: 'Motherboard' },
            { id: 1, name: 'CPU' },
            { id: 2, name: 'Memory' }
        ];
        this.selectedProduct = null;
        this.likesTacos = null;
        this.selectedItemString = 'CPU';
        this.stringObjects = ['Motherboard', 'CPU', 'RAM'];
        this.productMatcher = function (a, b) { return a === b || (a.name === b.name); };
    }
    BootstrapDropdownRoute.prototype.buttonClicked = function (event, target) {
        console.log('buttonClicked');
        console.log(target);
        return this.http.get('https://github.com');
    };
    BootstrapDropdownRoute.prototype.dropDownShown = function () {
        console.log('dropdown shown');
    };
    BootstrapDropdownRoute.prototype.selectedChanged = function (selectedItem) {
        console.log('selected item is:');
        console.warn(selectedItem);
    };
    BootstrapDropdownRoute = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [typeof (_a = typeof aurelia_http_client_1.HttpClient !== "undefined" && aurelia_http_client_1.HttpClient) === "function" && _a || Object])
    ], BootstrapDropdownRoute);
    return BootstrapDropdownRoute;
    var _a;
}());
exports.BootstrapDropdownRoute = BootstrapDropdownRoute;
//# sourceMappingURL=dropdown.js.map
});
___scope___.file("routes/bootstrap/float-input.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n\n  <h4>Large</h4>\n  <abt-float-input class=\"form-control-lg\" type='email' label-color='red' placeholder='email@example.com' placeholder-color='blue'>Email</abt-float-input>\n  <br>\n  <abt-float-input class=\"form-control-lg\" type='email' label-color='red' placeholder-color='blue'>Email</abt-float-input>\n  <br>\n  <h4>Default</h4>\n  <abt-float-input type='email' label-color='red' placeholder='email@example.com' placeholder-color='blue'>Email</abt-float-input>\n  <br>\n  <abt-float-input type='email' label-color='red' placeholder-color='blue'>Email</abt-float-input>\n  <br>\n  <h4>Small</h4>\n  <abt-float-input class=\"form-control-sm\" type='email' label-color='red' placeholder='email@example.com' placeholder-color='blue'>Email</abt-float-input>\n  <br>\n  <abt-float-input class=\"form-control-sm\" type='email' label-color='red' placeholder-color='blue'>Email</abt-float-input>\n\n\n\n</template>\n"
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
___scope___.file("routes/bootstrap/jumbotron.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n\n  <fieldset>\n    <legend>\n      Jumbotron\n    </legend>\n\n\n    <abt-jumbotron>\n      <h1 class=\"display-4\">Hello, world!</h1>\n      <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n      <hr class=\"my-4\">\n      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n      <p class=\"lead\">\n        <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n      </p>\n    </abt-jumbotron>\n\n  </fieldset>\n\n  <fieldset>\n    <legend>\n      Fluid Jumbotron\n    </legend>\n\n    <abt-jumbotron fluid>\n      <div class=\"container\">\n        <h1 class=\"display-4\">Fluid jumbotron</h1>\n        <p class=\"lead\">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>\n      </div>\n    </abt-jumbotron>\n  </fieldset>\n\n</template>\n"
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
___scope___.file("routes/bootstrap/listgroup.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n    <abt-listgroup>\n        <abt-listgroup-item color=\"primary\" >Cras justo odio</abt-listgroup-item>\n        <abt-listgroup-item color=\"warning\">Dapibus ac facilisis in</abt-listgroup-item>\n        <abt-listgroup-item color=\"danger\">Morbi leo risus</abt-listgroup-item>\n        <abt-listgroup-item color=\"info\">Porta ac consectetur ac</abt-listgroup-item>\n        <abt-listgroup-item color=\"success\">Vestibulum at eros</abt-listgroup-item>\n    </abt-listgroup>\n    <br/>\n    <abt-listgroup>\n        <abt-listgroup-item active>Cras justo odio</abt-listgroup-item>\n        <abt-listgroup-item>Dapibus ac facilisis in</abt-listgroup-item>\n        <abt-listgroup-item class=\"d-flex justify-content-between align-items-center\">Cras justo odio\n            <abt-badge color=\"secondary\">15</abt-badge>\n        </abt-listgroup-item>\n        <abt-listgroup-item>Porta ac consectetur ac</abt-listgroup-item>\n        <abt-listgroup-item class=\"d-flex justify-content-between align-items-center\">Vestibulum at eros\n            <abt-badge color=\"secondary\">New</abt-badge>\n        </abt-listgroup-item>\n    </abt-listgroup>\n    <br/>\n    <abt-listgroup>\n        <abt-listgroup-item disabled>Cras justo odio</abt-listgroup-item>\n        <abt-listgroup-item color=\"success\" href='http://github.com'>Anchor behaviour</abt-listgroup-item>\n        <abt-listgroup-item color=\"warning\" click.call=\"itemClicked()\">Clickable Item</abt-listgroup-item>\n        <abt-listgroup-item>Porta ac consectetur ac</abt-listgroup-item>\n        <abt-listgroup-item>Vestibulum at eros</abt-listgroup-item>\n    </abt-listgroup>\n    <br/>\n    <abt-listgroup>\n        <abt-listgroup-item class=\"flex-column align-items-start\" active>\n            <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"mb-1\">List group item heading</h5>\n                <small>3 days ago</small>\n            </div>\n            <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n            <small>Donec id elit non mi porta.</small>\n        </abt-listgroup-item>\n        <abt-listgroup-item class=\"flex-column align-items-start\">\n            <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"mb-1\">List group item heading</h5>\n                <small class=\"text-muted\">3 days ago</small>\n            </div>\n            <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n            <small class=\"text-muted\">Donec id elit non mi porta.</small>\n        </abt-listgroup-item>\n        <abt-listgroup-item class=\"flex-column align-items-start\">\n            <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"mb-1\">List group item heading</h5>\n                <small class=\"text-muted\">3 days ago</small>\n            </div>\n            <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n            <small class=\"text-muted\">Donec id elit non mi porta.</small>\n        </abt-listgroup-item>\n\n    </abt-listgroup>\n</template>\n"
});
___scope___.file("routes/bootstrap/listgroup.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapListGroup = (function () {
    function BootstrapListGroup() {
    }
    BootstrapListGroup.prototype.itemClicked = function () {
        alert('Hamed');
    };
    return BootstrapListGroup;
}());
exports.BootstrapListGroup = BootstrapListGroup;
//# sourceMappingURL=listgroup.js.map
});
___scope___.file("routes/bootstrap/navbar.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n\n  <abt-navbar>\n    <abt-navbar-brand>NavBar</abt-navbar-brand>\n    <abt-navbar-link active>Home</abt-navbar-link>\n    <abt-navbar-link>Features</abt-navbar-link>\n    <abt-navbar-link>Pricing</abt-navbar-link>\n    <abt-navbar-link disabled>Disabled</abt-navbar-link>\n    <abt-dropdown color=\"secondary\" title=\"DropDown 1\">\n      <abt-dropdown-item>A</abt-dropdown-item>\n      <abt-dropdown-item>B</abt-dropdown-item>\n      <abt-dropdown-item>C</abt-dropdown-item>\n      <abt-dropdown-divider></abt-dropdown-divider>\n      <abt-dropdown-item>D</abt-dropdown-item>\n      <abt-dropdown-item>E</abt-dropdown-item>\n    </abt-dropdown>\n    <abt-navbar-dropdown fullwidth title=\"DropDown 2\">\n      <abt-navbar-dropdown-mega-item>\n        <ul class=\"col-sm-2 list-unstyled\">\n          <li>\n            <p>\n              <strong>Section Title</strong>\n            </p>\n          </li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>List Item</li>\n        </ul>\n        <ul class=\"col-sm-2 list-unstyled\">\n          <li>\n            <p>\n              <strong>Links Title</strong>\n            </p>\n          </li>\n          <li>\n            <a href=\"#\"> Link Item </a>\n          </li>\n          <li>\n            <a href=\"#\"> Link Item </a>\n          </li>\n          <li>\n            <a href=\"#\"> Link Item </a>\n          </li>\n          <li>\n            <a href=\"#\"> Link Item </a>\n          </li>\n          <li>\n            <a href=\"#\"> Link Item </a>\n          </li>\n          <li>\n            <a href=\"#\"> Link Item </a>\n          </li>\n        </ul>\n        <ul class=\"col-sm-2 list-unstyled\">\n          <li>\n            <p>\n              <strong>Section Title</strong>\n            </p>\n          </li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>List Item</li>\n        </ul>\n        <ul class=\"col-sm-2 list-unstyled\">\n          <li>\n            <p>\n              <strong>Section Title</strong>\n            </p>\n          </li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>\n            <ul>\n              <li>\n                <a href=\"#\"> Link Item </a>\n              </li>\n              <li>\n                <a href=\"#\"> Link Item </a>\n              </li>\n              <li>\n                <a href=\"#\"> Link Item </a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </abt-navbar-dropdown-mega-item>\n    </abt-navbar-dropdown>\n    <abt-navbar-dropdown title=\"DropDown 3\">\n      <abt-navbar-dropdown-mega-item>\n        <ul class=\"col-sm-2 list-unstyled\">\n          <li>\n            <p>\n              <strong>Section Title</strong>\n            </p>\n          </li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>List Item</li>\n        </ul>\n        <ul class=\"col-sm-2 list-unstyled\">\n          <li>\n            <p>\n              <strong>Links Title</strong>\n            </p>\n          </li>\n          <li>\n            <a href=\"#\"> Link Item </a>\n          </li>\n          <li>\n            <a href=\"#\"> Link Item </a>\n          </li>\n          <li>\n            <a href=\"#\"> Link Item </a>\n          </li>\n          <li>\n            <a href=\"#\"> Link Item </a>\n          </li>\n          <li>\n            <a href=\"#\"> Link Item </a>\n          </li>\n          <li>\n            <a href=\"#\"> Link Item </a>\n          </li>\n        </ul>\n        <ul class=\"col-sm-2 list-unstyled\">\n          <li>\n            <p>\n              <strong>Section Title</strong>\n            </p>\n          </li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>List Item</li>\n        </ul>\n        <ul class=\"col-sm-2 list-unstyled\">\n          <li>\n            <p>\n              <strong>Section Title</strong>\n            </p>\n          </li>\n          <li>List Item</li>\n          <li>List Item</li>\n          <li>\n            <ul>\n              <li>\n                <a href=\"#\"> Link Item </a>\n              </li>\n              <li>\n                <a href=\"#\"> Link Item </a>\n              </li>\n              <li>\n                <a href=\"#\"> Link Item </a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </abt-navbar-dropdown-mega-item>\n    </abt-navbar-dropdown>\n  </abt-navbar>\n\n</template>\n"
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

module.exports.default =  "<template>\n\n\n  <fieldset>\n    <legend>\n      Horizontal Styles\n    </legend>\n\n    <abt-navs pills>\n      <abt-nav-item active href=\"#\" title=\"Active\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n      <abt-nav-item disabled title=\"Disabled\" href=\"#\"></abt-nav-item>\n    </abt-navs>\n\n    <abt-navs class=\"justify-content-center\">\n      <abt-nav-item active href=\"#\" title=\"Active\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n      <abt-nav-item disabled title=\"Disabled\" href=\"#\"></abt-nav-item>\n    </abt-navs>\n\n    <abt-navs class=\"justify-content-end\">\n      <abt-nav-item active href=\"#\" title=\"Active\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n      <abt-nav-item disabled title=\"Disabled\" href=\"#\"></abt-nav-item>\n    </abt-navs>\n\n  </fieldset>\n\n\n\n  <fieldset>\n    <legend>\n      Vertical\n    </legend>\n\n    <div class=\"col-sm-3\">\n      <abt-navs vertical pills>\n        <abt-nav-item active href=\"#\" title=\"Active\"></abt-nav-item>\n        <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n        <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n        <abt-nav-item disabled title=\"Disabled\" href=\"#\"></abt-nav-item>\n      </abt-navs>\n    </div>\n  </fieldset>\n\n\n  <fieldset>\n    <legend>\n      Tabs\n    </legend>\n\n    <abt-navs tabs>\n      <abt-nav-item active href=\"#\" title=\"Active\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Link\"></abt-nav-item>\n      <abt-nav-item disabled title=\"Disabled\" href=\"#\"></abt-nav-item>\n    </abt-navs>\n  </fieldset>\n\n  <fieldset>\n    <legend>\n      Fill and justify\n    </legend>\n\n    <abt-navs pills fill>\n      <abt-nav-item active href=\"#\" title=\"Active\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Longer nav link\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Longer nav link\"></abt-nav-item>\n      <abt-nav-item disabled title=\"Disabled\" href=\"#\"></abt-nav-item>\n    </abt-navs>\n    <br />\n    <abt-navs pills justified>\n      <abt-nav-item active href=\"#\" title=\"Active\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Longer nav link\"></abt-nav-item>\n      <abt-nav-item href=\"#\" title=\"Longer nav link\"></abt-nav-item>\n      <abt-nav-item disabled title=\"Disabled\" href=\"#\"></abt-nav-item>\n    </abt-navs>\n  </fieldset>\n\n\n  <fieldset>\n    <legend>\n      Dynamic Tabs\n    </legend>\n\n    <abt-navs pills id=\"myTab\" role=\"tablist\" bs-shown.call=\"testShown(activeTab,prevTab)\">\n\n      <abt-nav-item id=\"nav-home-tab\" title=\"Home\">\n        <div>\n          Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident\n          aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod\n          id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur\n          quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.\n        </div>\n      </abt-nav-item>\n\n      <abt-nav-item id=\"nav-profile-tab\" title=\"Profile\">\n        <div>\n          Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est\n          sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim\n          sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in\n          id occaecat pariatur ut ullamco ea tempor duis.\n        </div>\n      </abt-nav-item>\n\n      <abt-nav-item id=\"nav-contact-tab\" title=\"Contact\">\n        <div>\n          Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum\n          nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex\n          labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur\n          aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do\n          mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor\n          irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco\n          sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit\n          voluptate voluptate consequat non.\n        </div>\n      </abt-nav-item>\n\n    </abt-navs>\n\n\n  </fieldset>\n\n</template>\n"
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
___scope___.file("routes/bootstrap/password.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n    <abt-password show-password.bind='true' score-range.bind='scoreRange' requirements.bind=\"requirements\"></abt-password>\n\n</template>"
});
___scope___.file("routes/bootstrap/password.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapPassword = (function () {
    function BootstrapPassword() {
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
    return BootstrapPassword;
}());
exports.BootstrapPassword = BootstrapPassword;
//# sourceMappingURL=password.js.map
});
___scope___.file("routes/bootstrap/popover.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div style=\"margin:5px\">\n    <button type=\"button\" class=\"btn btn-primary\">\n      Submit\n      <abt-popover html.bind='true' placement='bottom'>\n        <h1 style='color:red'>Click Me!</h1>\n      </abt-popover>\n    </button>\n  </div>\n</template>\n"
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

module.exports.default =  "<template>\n\n  <abt-progress style=\"height: 20px;\">\n    <abt-progress-bar animated striped color=\"warning\" style=\"width: 30%;\" value=\"30\" min=\"0\" max=\"100\">\n      25%\n    </abt-progress-bar>\n  </abt-progress>\n\n</template>\n"
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
___scope___.file("routes/bootstrap/scrollspy.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <br />\n  <br />\n  <br />\n  <br />\n  <br />\n  <br />\n\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div id=\"list-example\" class=\"list-group\">\n        <a class=\"list-group-item list-group-item-action\" href=\"#fat\" target=\"_self\">fat</a>\n        <a class=\"list-group-item list-group-item-action\" href=\"#mdo\">mdo</a>\n        <a class=\"list-group-item list-group-item-action\" href=\"#one\">one</a>\n        <a class=\"list-group-item list-group-item-action\" href=\"#two\">two</a>\n        <a class=\"list-group-item list-group-item-action\" href=\"#three\">three</a>\n      </div>\n    </div>\n    <div class=\"col-sm-7\">\n      <abt-scrollspy style=\"max-height: 300px; overflow:scroll\" bs-scrollspy.call=\"spyChanged()\" target=\"#list-example\">\n        <h4 id=\"fat\">@fat</h4>\n        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table\n          bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure.\n          Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust\n          fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco\n          consequat.\n        </p>\n        <h4 id=\"mdo\">@mdo</h4>\n        <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's\n          vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis\n          non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing\n          craft beer vice keytar deserunt.</p>\n        <h4 id=\"one\">one</h4>\n        <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi,\n          velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat\n          quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in,\n          sustainable delectus consectetur fanny pack iphone.</p>\n        <h4 id=\"two\">two</h4>\n        <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur\n          VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko,\n          cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed\n          nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate,\n          lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>\n        <h4 id=\"three\">three</h4>\n        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table\n          bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure.\n          Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust\n          fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco\n          consequat. Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda.\n          <br /> Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free\n          lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby\n          sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris\n          tempor veniam. Anim mollit minim commodo ullamco thundercats.</p>\n      </abt-scrollspy>\n    </div>\n  </div>\n\n\n  <br />\n  <hr />\n  <br />\n\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div id=\"list-example2\" class=\"list-group\">\n        <a class=\"list-group-item list-group-item-action\" href=\"#fat2\" target=\"_self\">fat</a>\n        <a class=\"list-group-item list-group-item-action\" href=\"#mdo2\">mdo</a>\n        <a class=\"list-group-item list-group-item-action\" href=\"#one2\">one</a>\n        <a class=\"list-group-item list-group-item-action\" href=\"#two2\">two</a>\n        <a class=\"list-group-item list-group-item-action\" href=\"#three2\">three</a>\n      </div>\n    </div>\n    <div class=\"col-sm-7\">\n      <abt-scrollspy style=\"max-height: 300px; overflow:scroll\" bs-scrollspy.call=\"spyChanged()\" target=\"list-example2\">\n        <h4 id=\"fat2\">@fat</h4>\n        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table\n          bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure.\n          Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust\n          fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco\n          consequat.\n        </p>\n        <h4 id=\"mdo2\">@mdo</h4>\n        <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's\n          vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis\n          non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing\n          craft beer vice keytar deserunt.</p>\n        <h4 id=\"one2\">one</h4>\n        <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi,\n          velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat\n          quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in,\n          sustainable delectus consectetur fanny pack iphone.</p>\n        <h4 id=\"two2\">two</h4>\n        <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur\n          VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko,\n          cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed\n          nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate,\n          lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>\n        <h4 id=\"three2\">three</h4>\n        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table\n          bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure.\n          Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust\n          fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco\n          consequat. Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda.\n          <br /> Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free\n          lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby\n          sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris\n          tempor veniam. Anim mollit minim commodo ullamco thundercats.</p>\n      </abt-scrollspy>\n    </div>\n  </div>\n\n  <br />\n  <hr />\n  <br />\n\n  <nav id=\"navbar-example2\" class=\"navbar navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <ul class=\"nav nav-pills\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#fatnav\">@fat</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#mdonav\">@mdo</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" href=\"#onenav\">one</a>\n          <a class=\"dropdown-item\" href=\"#twonav\">two</a>\n          <div role=\"separator\" class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#threenav\">three</a>\n        </div>\n      </li>\n    </ul>\n  </nav>\n  <abt-scrollspy style=\"max-height: 300px; overflow:scroll\" target=\"#navbar-example2\">\n    <h4 id=\"fatnav\">@fat</h4>\n    <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table\n      bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby\n      sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa\n      biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.\n    </p>\n    <h4 id=\"mdonav\">@mdo</h4>\n    <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's\n      vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non\n      freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing\n      craft beer vice keytar deserunt.</p>\n    <h4 id=\"onenav\">one</h4>\n    <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit\n      ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip\n      banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus\n      consectetur fanny pack iphone.</p>\n    <h4 id=\"twonav\">two</h4>\n    <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur\n      VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat\n      terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla\n      cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea\n      portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>\n    <h4 id=\"threenav\">three</h4>\n    <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table\n      bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby\n      sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa\n      biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.\n      Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda.\n      <br /> Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free lo-fi\n      fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby sweater\n      pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris tempor veniam.\n      Anim mollit minim commodo ullamco thundercats.</p>\n  </abt-scrollspy>\n\n\n  <br />\n  <hr />\n  <br />\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <nav id=\"navbar-example3\" class=\"navbar navbar-light bg-light\">\n        <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n        <nav class=\"nav nav-pills flex-column\">\n          <a class=\"nav-link\" href=\"#item-1\">Item 1</a>\n          <nav class=\"nav nav-pills flex-column\">\n            <a class=\"nav-link ml-3 my-1\" href=\"#item-1-1\">Item 1-1</a>\n            <a class=\"nav-link ml-3 my-1\" href=\"#item-1-2\">Item 1-2</a>\n          </nav>\n          <a class=\"nav-link\" href=\"#item-2\">Item2</a>\n          <a class=\"nav-link\" href=\"#item-3\">Item3</a>\n          <nav class=\"nav nav-pills flex-column\">\n            <a class=\"nav-link ml-3 my-1\" href=\"#item-3-1\">Item 3-1</a>\n            <a class=\"nav-link ml-3 my-1\" href=\"#item-3-2\">Item 3-2</a>\n          </nav>\n        </nav>\n      </nav>\n    </div>\n    <div class=\"col-sm-9\">\n      <abt-scrollspy style=\"max-height: 300px; overflow:scroll\" target=\"navbar-example3\">\n\n        <h4 id=\"item-1\">Item 1</h4>\n        <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do\n          aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu\n          consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua\n          officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore.\n          Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat elit\n          dolore.</p>\n        <h5 id=\"item-1-1\">Item 1-1</h5>\n        <p>Amet tempor mollit aliquip pariatur excepteur commodo do ea cillum commodo Lorem et occaecat elit qui et. Aliquip\n          labore ex ex esse voluptate occaecat Lorem ullamco deserunt. Aliqua cillum excepteur irure consequat id quis ea.\n          Sit proident ullamco aute magna pariatur nostrud labore. Reprehenderit aliqua commodo eiusmod aliquip est do duis\n          amet proident magna consectetur consequat eu commodo fugiat non quis. Enim aliquip exercitation ullamco adipisicing\n          voluptate excepteur minim exercitation minim minim commodo adipisicing exercitation officia nisi adipisicing. Anim\n          id duis qui consequat labore adipisicing sint dolor elit cillum anim et fugiat.</p>\n        <h5 id=\"item-1-2\">Item 2-2</h5>\n        <p>Cillum nisi deserunt magna eiusmod qui eiusmod velit voluptate pariatur laborum sunt enim. Irure laboris mollit consequat\n          incididunt sint et culpa culpa incididunt adipisicing magna magna occaecat. Nulla ipsum cillum eiusmod sint elit\n          excepteur ea labore enim consectetur in labore anim. Proident ullamco ipsum esse elit ut Lorem eiusmod dolor et\n          eiusmod. Anim occaecat nulla in non consequat eiusmod velit incididunt.</p>\n        <h4 id=\"item-2\">Item 2</h4>\n        <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim\n          exercitation cillum aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris ad sit\n          ipsum anim Lorem. Incididunt veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua\n          esse irure. Laborum nisi sit est tempor laborum mollit labore officia laborum excepteur commodo non commodo dolor\n          excepteur commodo. Ipsum fugiat ex est consectetur ipsum commodo tempor sunt in proident.</p>\n        <h4 id=\"item-3\">Item 3</h4>\n        <p>Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim\n          proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore\n          velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>\n        <h5 id=\"item-3-1\">Item 3-1</h5>\n        <p>Deserunt quis elit Lorem eiusmod amet enim enim amet minim Lorem proident nostrud. Ea id dolore anim exercitation\n          aute fugiat labore voluptate cillum do laboris labore. Ex velit exercitation nisi enim labore reprehenderit labore\n          nostrud ut ut. Esse officia sunt duis aliquip ullamco tempor eiusmod deserunt irure nostrud irure. Ullamco proident\n          veniam laboris ea consectetur magna sunt ex exercitation aliquip minim enim culpa occaecat exercitation. Est tempor\n          excepteur aliquip laborum consequat do deserunt laborum esse eiusmod irure proident ipsum esse qui.</p>\n        <h5 id=\"item-3-2\">Item 3-2</h5>\n        <p>Labore sit culpa commodo elit adipisicing sit aliquip elit proident voluptate minim mollit nostrud aute reprehenderit\n          do. Mollit excepteur eu Lorem ipsum anim commodo sint labore Lorem in exercitation velit incididunt. Occaecat consectetur\n          nisi in occaecat proident minim enim sunt reprehenderit exercitation cupidatat et do officia. Aliquip consequat\n          ad labore labore mollit ut amet. Sit pariatur tempor proident in veniam culpa aliqua excepteur elit magna fugiat\n          eiusmod amet officia.</p>\n      </abt-scrollspy>\n    </div>\n  </div>\n\n\n\n</template>\n"
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

module.exports.default =  "<template>\n  <div style=\"margin:5px\">\n    <button type=\"button\" class=\"btn btn-primary\">\n      Submit\n      <abt-tooltip html.bind='true' show-tooltip.call=\"showMgs()\" hide-tooltip.bind=\"hideMgs\" placement='bottom'>\n        <h1 style='color:red'>Click Me!</h1>\n      </abt-tooltip>\n    </button>\n  </div>\n</template>\n"
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
___scope___.file("routes/jquery-route.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n\n    <require from=\"./../components/nav-bar\"></require>\n\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n\n      <nav-bar router.bind=\"router\">\n\n      </nav-bar>\n\n    </div>\n    <div class=\"col-sm-10\">\n      <br />\n      <div class=\"main no-select container\">\n        <router-view></router-view>\n      </div>\n\n    </div>\n  </div>\n\n\n</template>\n"
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

module.exports.default =  "<template>\n\n   \n    <div class=\"fa-4x\">\n\n      <aut-star-rate full-star=\"fa fa-star\" empty-star=\"fa fa-star-o\" half-star=\"fa fa-star-half-o\" max-rate.bind=\"5\" read-only.bind=\"false\"></aut-star-rate>\n\n      <aut-star-rate rtl.bind=\"true\" full-star=\"fa fa-star\" empty-star=\"fa fa-star-o\" half-star=\"fa fa-star-half-o\" max-rate.bind=\"5\"\n        read-only.bind=\"false\"></aut-star-rate>\n\n    </div>\n  \n<hr />\n\n\n    <input type=\"text\" aut-masked=\"mask.bind:'9999'\" />\n\n\n\n</template>\n"
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
___scope___.file("routes/purejs-route.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <require from=\"./../components/nav-bar\"></require>\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n\n      <nav-bar router.bind=\"router\">\n\n      </nav-bar>\n\n    </div>\n    <div class=\"col-sm-10\">\n      <br />\n      <div class=\"main no-select container\">\n        <router-view></router-view>\n      </div>\n\n    </div>\n  </div>\n\n\n\n</template>\n"
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

module.exports.default =  "<template>\n\n  <require from=\"highlight.js/styles/solarized-dark.css\"></require>\n\n\n  <div class=\"container\">\n\n\n    <aut-checkbox checked.bind=\"showtoolbar\" slim color=\"success\" switch animation=\"snooth\">\n      Show Toolbar\n    </aut-checkbox>\n\n\n    <hr />\n\n    <aut-mark-down show-editor.one-way=\"false\" show-preview.one-way=\"true\" show-tool-bar.bind=\"showtoolbar\" show-switches.bind=\"showSwitches\"\n      src=\"https://raw.githubusercontent.com/shahabganji/aurelia-star-rate/master/README.md\">\n    </aut-mark-down>\n  </div>\n\n</template>\n"
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