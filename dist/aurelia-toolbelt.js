(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("aurelia-toolbelt", {}, function(___scope___){
___scope___.file("components/bootstrap/alert/abt-alert-heading.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <span id=\"${id}\" class=\"alert-heading abt-alert-heading\">\n    <slot>\n\n    </slot>\n  </span>\n</template>\n"
});
___scope___.file("components/bootstrap/alert/abt-alert-link.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <a id=\"${id}\" href=\"${href}\" tabindex=\"${disabled===true ? -1 : tabIndex }\" disabled.bind=\"disabled\" class=\"alert-link abt-alert-link\">\n    <slot>\n    </slot>\n  </a>\n\n</template>\n"
});
___scope___.file("components/bootstrap/alert/abt-alert.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div ref=\"alert\" class=\"alert alert-${type} ${dismissible == true ? 'alert-dismissible' : ''} ${animate ? 'fade show':''} ${class}\" role=\"alert\" css=\"${style}\">\n    <slot>\n\n    </slot>\n    <button if.bind=\"dismissible == true\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/badge/abt-badge.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <span class=\"badge ${isPill ? 'badge-pill' : ''} badge-${type} ${class} abt-badge\">\n    <slot></slot>\n  </span>\n\n</template>\n"
});
___scope___.file("components/bootstrap/breadcrumb/abt-breadcrumb.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li repeat.for=\"item of items\" class=\"breadcrumb-item ${$last ? 'active':''} abt-breadcrumb\" aria-current=\"${$last? 'page':''}\">\n        <span if.bind=\"$last\">\n          ${item.title}\n        </span>\n        <a if.bind=\"!$last\" href=\"${item.url || '#'}\">\n          ${item.title}\n        </a>\n      </li>\n    </ol>\n  </nav>\n\n</template>\n"
});
___scope___.file("components/bootstrap/button/abt-button-group.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div id=\"${id}\" class=\"btn-group ${class} btn-group-${size} ${vertical?'btn-group-vertical':''} abt-button-group\" role=\"group\" css=\"${style}\"\n    aria-label=\"${label}\">\n\n    <slot>\n\n    </slot>\n  </div>\n\n</template>\n"
});
___scope___.file("components/bootstrap/button/abt-button.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <require from=\"./abt-button.css\"></require>\n\n  <button id=\"${id}\" role=\"button\" type=\"${type}\" disabled.bind=\"disabled || isBusy\" class=\"abt-button btn btn-${outline? 'outline-' : ''}${bsType} btn-${size} ${block?'btn-block':''} ${class}\"\n    css=\"${style}\" click.delegate=\"onClick($event)\">\n    <span show.bind=\"isBusy\">\n      <slot name=\"loading\">\n        <!-- <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\">\n        </i> -->\n      </slot>\n    </span>\n    <slot>\n    </slot>\n\n  </button>\n\n</template>\n"
});
___scope___.file("components/bootstrap/button/abt-link-button.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <a id=\"${id}\" css=\"${style}\" href=\"${href}\" role=\"button\" click.trigger=\"onClick($event)\" tabindex=\"${disabled===true ? -1 : tabIndex }\" disabled.bind=\"disabled\" class=\"btn btn-${outline? 'outline-' : ''}${type} btn-${size} ${block?'btn-block':''} ${class} abt-link-button\">\n    <slot>\n    </slot>\n  </a>\n</template>\n"
});
___scope___.file("components/bootstrap/button/abt-toolbar.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <div id=\"${id}\" class=\"btn-toolbar ${class} abt-toolbar\" role=\"toolbar\" css=\"${style}\" aria-label=\"${label} \">\n    <slot>\n\n    </slot>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/card/abt-card-body.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <div class=\"card-body ${class}\" css=\"${style}\">\n    <slot>\n    </slot>\n  </div>\n  \n</template>\n"
});
___scope___.file("components/bootstrap/card/abt-card-columns.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  \n  <require from=\"./abt-card-columns.css\"></require>\n  \n  <div class=\"card-columns ${class}\" css=\"${style}\">\n\n    <slot></slot>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/card/abt-card-deck.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <div class=\"card-deck ${class}\" css=\"${style}\">\n    <slot></slot>\n  </div>\n  \n</template>\n"
});
___scope___.file("components/bootstrap/card/abt-card-footer.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template >\n\n  <div  class=\"card-footer  ${class}\" css=\"${style}\">\n    <slot>\n    </slot>\n  </div>\n\n</template>\n"
});
___scope___.file("components/bootstrap/card/abt-card-group.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <div class=\"card-group ${class}\" css=\"${style}\">\n    <slot></slot>\n  </div>\n  \n</template>\n"
});
___scope___.file("components/bootstrap/card/abt-card-header.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <div class=\"card-header  ${class}\" css=\"${style}\">\n    <slot></slot>\n  </div>\n\n</template>\n"
});
___scope___.file("components/bootstrap/card/abt-card-image-overlay.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <div class=\"card-img-overlay ${class}\" css=\"${style}\">\n    <slot></slot>\n  </div>\n  \n</template>\n"
});
___scope___.file("components/bootstrap/card/abt-card-image.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n    <img class=\"${cssClass} ${class}\" css=\"${style}\" src.bind=\"src\" alt=\"${alt}\">\n    \n</template>\n"
});
___scope___.file("components/bootstrap/card/abt-card-link.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <a class=\"card-link ${class}\" css=\"${style}\" target=\"${target}\" href=\"${href}\">\n    <slot>\n    </slot>\n  </a>\n  \n</template>\n"
});
___scope___.file("components/bootstrap/card/abt-card-subtitle.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <div  class=\"card-subtitle ${class}\" css=\"${style}\">\n    <slot></slot>\n  </div>\n\n</template>\n"
});
___scope___.file("components/bootstrap/card/abt-card-text.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n    <p class=\"card-text ${class}\" css=\"${style}\">\n        <slot>\n        </slot>\n    </p>\n    \n</template>\n"
});
___scope___.file("components/bootstrap/card/abt-card-title.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template bindable=\"class,style\">\n\n  <span class=\"card-title ${class}\" css=\"${style}\">\n    <slot></slot>\n  </span>\n\n</template>\n"
});
___scope___.file("components/bootstrap/card/abt-card.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <div class=\"card ${class}\" css=\"${width ? 'width:' + width : ''} ${style}\">\n    <slot>\n    </slot>\n  </div>\n\n</template>\n"
});
___scope___.file("components/bootstrap/carousel/abt-carousel-item.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template ref=\"carouselItemTemplate\">\n  <!-- <require from=\"../../../custom-attributes/vanilla/uuid/aut-uuid\"></require> -->\n  <div ref=\"carouselItem\" class=\"carousel-item\">\n    <slot></slot>\n    <div class=\"carousel-caption\">\n      <slot name=\"caption\"></slot>\n    </div>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/carousel/abt-carousel.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template ref=\"carouselTemplate\">\n  <require from=\"../../../custom-attributes/vanilla/uuid/aut-uuid\"></require>\n\n  <div ref='carousel' aut-uuid class=\"carousel slide\" data-ride=\"carousel\">\n    <ol show.bind=\"showIndicator\" class=\"carousel-indicators\">\n    </ol>\n    <div class=\"carousel-inner\">\n      <slot></slot>\n    </div>\n    <a show.bind=\"showNavigator\" class=\"carousel-control-prev\" href=\"#${carousel.id}\" role=\"button\" data-slide=\"prev\">\n      <span class=\"${prevIcon}\" aria-hidden=\"true\" />\n      <span class=\"sr-only\">${prevTitle}</span>\n    </a>\n    <a show.bind=\"showNavigator\" class=\"carousel-control-next\" href=\"#${carousel.id}\" role=\"button\" data-slide=\"next\">\n      <span class=\"${nextIcon}\" aria-hidden=\"true\" />\n      <span class=\"sr-only\">${nextTitle}</span>\n    </a>\n  </div>\n</template>"
});
___scope___.file("components/bootstrap/collapse/abt-accordion-item.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <!-- <require from=\"../../../custom-attributes/vanilla/uuid/aut-uuid\"></require> -->\n  <!-- <require from='./abt-collapse'></require> -->\n  <abt-card>\n    <div class=\"abt-accordion-item-header card-header\" ref=\"myLink\" style=\"cursor: pointer\">\n      <a href=\"#\" click.delegate=\"onAnchorClick($event)\">\n        ${title}\n      </a>\n    </div>\n\n    <abt-collapse class=\"${active ? 'show' : ''} abt-accordion-item-content\" controlled-by.bind=\"myLink\">\n      <slot></slot>\n    </abt-collapse>\n  </abt-card>\n\n\n</template>\n"
});
___scope___.file("components/bootstrap/collapse/abt-accordion.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <require from=\"../../../custom-attributes/vanilla/uuid/aut-uuid\"></require>\n  <div class=\"abt-accordion ${class}\" role=\"tablist\" css=\"${style}\" aut-uuid ref=\"accordion\">\n    <slot></slot>\n  </div>\n\n</template>\n"
});
___scope___.file("components/bootstrap/collapse/abt-collapse.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <require from=\"../../../custom-attributes/vanilla/uuid/aut-uuid\"></require>\n\n  <div ref=\"collapse\" aut-uuid class=\"collapse ${class} abt-collapse\" css=\"${style}\">\n    <slot></slot>\n  </div>\n\n</template>\n"
});
___scope___.file("components/bootstrap/dropdown/abt-dropdown-divider.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div class=\"dropdown-divider abt-dropdown-divider\"></div>\n</template>\n"
});
___scope___.file("components/bootstrap/dropdown/abt-dropdown-header.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <h6 class=\"dropdown-header abt-dropdown-header\">\n    <slot></slot>\n  </h6>\n</template>\n"
});
___scope___.file("components/bootstrap/dropdown/abt-dropdown-item.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <require from=\"./abt-dropdown-item.css\"></require>\n\n  <div ref=\"item\" class=\"dropdown-item ${disabled===true? 'disabled': ''} abt-dropdown-item\" click.delegate=\"onClick()\">\n    <slot></slot>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/dropdown/abt-dropdown.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <!-- <require from=\"../../../custom-attributes/vanilla/uuid/aut-uuid\"></require> -->\n\n  <div id=\"sample\" class=\"btn-group ${class} ${placementClass} abt-dropdown\" css=\"${style}\">\n    <button if.bind=\"split\" type=\"button\" class=\"btn btn-${type} btn-${size}\" click.delegate=\"onClicked($event)\" disabled.bind=\"disabled || isBusy\">\n      <span show.bind=\"isBusy\">\n        <slot name=\"loading\">\n          <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\">\n          </i>\n        </slot>\n      </span>\n      <span>${title}</span>\n    </button>\n    <button ref=\"dropdown\" type=\"button\" class=\"btn btn-${type} btn-${size} ${placementClass} dropdown-toggle dropdown-toggle-split\"\n      data-offset=\"${offset}\" data-flip=\"${flip}\" data-boundary=\"${boundary}\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n      disabled.bind=\"disabled || isBusy\">\n      <span class=\"${split?'sr-only':''}\">${title}</span>\n    </button>\n    <div class=\"dropdown-menu ${alignRight ? 'dropdown-menu-right' : ''} ${menuClass} abt-dropdown-menu\" css=\"${menuStyle}\">\n      <slot>\n\n      </slot>\n    </div>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/float-input/abt-float-input.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <require from=\"../../../custom-attributes/vanilla/uuid/aut-uuid\"></require>\n  <require from=\"./abt-float-input.css\"></require>\n\n  <label aut-uuid ref=\"floatInputLabel\">\n    <input id=\"${id}\" ref=\"floatInput\" class=\"${class}\" css=\"${style}\" type=\"${type}\" placeholder=\"${placeholder}\" />\n    <span>\n      <slot></slot>\n    </span>\n  </label>\n</template>\n"
});
___scope___.file("components/bootstrap/inputgroup/abt-inputgroup-append.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div id=\"${id}\" class=\"input-group-append ${class}\" css=\"${style}\">\n    <slot></slot>\n  </div>\n</template>"
});
___scope___.file("components/bootstrap/inputgroup/abt-inputgroup-prepend.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div id=\"${id}\" class=\"input-group-prepend ${class}\" css=\"${style}\">\n    <slot></slot>\n  </div>\n</template>"
});
___scope___.file("components/bootstrap/inputgroup/abt-inputgroup-text.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div id=\"${id}\" class=\"input-group-text ${class}\" css=\"${style}\">\n    <slot></slot>\n  </div>\n\n</template>"
});
___scope___.file("components/bootstrap/inputgroup/abt-inputgroup.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template ref=\"inputGroupTemplate\">\n  <div id=\"${id}\" ref=\"inputGroup\" class=\"input-group ${class}\" css=\"${style}\">\n    <slot></slot>\n  </div>\n</template>"
});
___scope___.file("components/bootstrap/jumbotron/abt-jumbotron.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div class=\"jumbotron ${fluid? 'jumbotron-fluid':''} ${class} abt-jumbotron\" css=\"${style}\">\n    <div class=\"${fluid ? 'container-fluid' : ''}\">\n      <slot>\n      </slot>\n    </div>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/listgroup/abt-listgroup-item.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template ref=\"listGroupItemTemplate\">\n  \n  <require from=\"./abt-listgroup-item.css\"></require>\n  \n  <a id=\"${id}\" href=\"${href}\" ref=\"listGroupItem\" click.trigger=\"onClick($event)\" css=\"cursor: ${click || href ? 'pointer' :''}; ${style}\"\n    class=\"list-group-item list-group-item-action ${class}\">\n    <slot></slot>\n  </a>\n</template>\n"
});
___scope___.file("components/bootstrap/listgroup/abt-listgroup.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template ref=\"listGroupTemplate\">\n  <div ref=\"listGroup\" id=\"${id}\" css=\"${style}\" class=\"list-group ${class}\">\n    <slot></slot>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/modal/abt-modal-body.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div class=\"modal-body container-fluid abt-modal-body ${class}\" css=\"${style}\">\n    <slot>\n\n    </slot>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/modal/abt-modal-footer.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div class=\"modal-footer abt-modal-footer ${class}\" css=\"${style}\">\n    <slot>\n    </slot>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/modal/abt-modal-header.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div class=\"modal-header abt-modal-header ${class}\" css=\"${style}\" ref=\"header\">\n    <slot>\n    </slot>\n    <button show.bind=\"dismissible\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/modal/abt-modal-title.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <span class=\"modal-title abt-modal-title ${class}\" css=\"${style}\">\n    <slot>\n\n    </slot>\n  </span>\n</template>\n"
});
___scope___.file("components/bootstrap/modal/abt-modal.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template ref=\"modal\" class=\"modal ${animate ? 'fade' : ''} ${class}\" data-abt-dismissible=\"${dismissible}\" aut-uuid css=\"${style}\"\n  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"fill-later\" aria-hidden=\"true\">\n\n  <require from=\"../../../custom-attributes/vanilla/uuid/aut-uuid\"></require>\n\n  <!-- <div> -->\n  <div class=\"modal-dialog ${centered ? ' modal-dialog-centered' : ''} modal-${size}\" role=\"document\">\n    <div class=\"modal-content\">\n      <slot>\n      </slot>\n    </div>\n  </div>\n  <!-- </div> -->\n\n</template>\n"
});
___scope___.file("components/bootstrap/navbar/abt-navbar-brand.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template ref=\"navbarBrandTemplate\">\n  <require from=\"./abt-navbar-brand.css\"></require>\n  <a id=\"${id}\" ref=\"navbarBrand\" class=\"navbar-brand ${class}\" css=\"${style}\" click.trigger=\"onClick($event)\" href=\"${href}\">\n    <slot></slot>\n  </a>\n\n</template>\n"
});
___scope___.file("components/bootstrap/navbar/abt-navbar-collapser.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <require from=\"../../../custom-attributes/vanilla/uuid/aut-uuid\"></require>\n\n  <div aut-uuid ref=\"navbarCollapse\" class=\"abt-navbar-collapser collapse navbar-collapse ${class}\" css='${style}'>\n    <slot></slot>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/navbar/abt-navbar-dropdown-divider.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div id=\"${id}\" class=\"dropdown-divider ${class}\" css=\"${style}\"></div>\n\n</template>\n"
});
___scope___.file("components/bootstrap/navbar/abt-navbar-dropdown-item.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <a id=\"${id}\" class=\"dropdown-item\" class=\"${class}\" css=\"${style}\" click.delegate=\"onClick($event)\" href=\"${href}\">\n    <slot></slot>\n  </a>\n</template>\n"
});
___scope___.file("components/bootstrap/navbar/abt-navbar-dropdown-mega-item.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template ref=\"navbarMegamenu\">\n  <div id=\"${id}\" class=\"navbar-megamenu-content ${class}\" css='${style}'>\n    <div class=\"row\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/navbar/abt-navbar-dropdown.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template ref=\"navDropDown\">\n  <li ref=\"navListDropDown\" css=\"${style}\" class=\"abt-navbar-dropdown nav-item ${class}\">\n    <a ref=\"navLinkDropDown\" class=\"abt-navbar-dropdown-link nav-link dropdown-toggle ${linkClass}\" css=\"${linkStyle}\" click.delegate=\"onClick($event)\"\n      href=\"${href}\" aut-uuid role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      ${title}\n    </a>\n    <div ref=\"dropDownMenu\" class=\"dropdown-menu ${menuClass}\" css=\"${menuStyle}\" aria-labelledby=\"${navLinkDropDown.id}\">\n      <slot></slot>\n    </div>\n  </li>\n</template>\n"
});
___scope___.file("components/bootstrap/navbar/abt-navbar-link.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template ref=\"navItem\">\n  <require from=\"./abt-navbar-link.css\"></require>\n  \n  <li id=\"${id}\" class=\"nav-item ${class}\" css=\"${style}\">\n    <a ref=\"navItemLink\" class=\"nav-link ${linkClass}\" css=\"${linkStyle}\" click.trigger=\"onClick($event)\" href=\"${href}\">\n      <slot></slot>\n    </a>\n  </li>\n</template>\n"
});
___scope___.file("components/bootstrap/navbar/abt-navbar-nav.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <ul id=\"${id}\" class=\"navbar-nav ${class}\" css=\"${style}\">\n    <slot></slot>\n  </ul>\n</template>\n"
});
___scope___.file("components/bootstrap/navbar/abt-navbar-text.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <span ref=\"navbarText\" id=\"${id}\" class=\"navbar-text ${class}\" css=\"${style}\">\n    <slot></slot>\n  </span>\n</template>\n"
});
___scope___.file("components/bootstrap/navbar/abt-navbar-toggler.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <button class=\"abt-navbar-toggler navbar-toggler ${class}\" css=\"${style}\" id=\"${id}\" type=\"button\" data-toggle=\"collapse\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"${togglerIcon}\">\n      <slot></slot>\n    </span>\n  </button>\n</template>\n"
});
___scope___.file("components/bootstrap/navbar/abt-navbar.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <require from=\"./navbar-megamenu.css\"></require>\n  <nav ref='navbar' id=\"${id}\" class=\"navbar navbar-megamenu ${class} ${placement}\" css=\"${style}\">\n    <slot></slot>\n  </nav>\n</template>\n"
});
___scope___.file("components/bootstrap/navs/abt-nav-item.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <a ref=\"tab_header\" class=\"nav-link nav-item ${class} ${active ? 'active show' : '' } ${disabled? 'disabled':''}\"\n    href=\"${href ? href : '#'}\" css=\"${style}\">\n    ${title}\n  </a>\n\n\n  <div ref=\"tab_body\" class=\"tab-pane ${active ? 'active show' : ''} ${isFade ? 'fade' : ''}\" role=\"tab-panel\">\n    <slot></slot>\n  </div>\n\n\n</template>\n"
});
___scope___.file("components/bootstrap/navs/abt-navs.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template role=\"tablist\" >\n\n\n  <div class=\"${vertical ? 'row' : ''}\">\n\n    \n    <div class=\"${vertical ? navsVerticalClass : ''}\">\n      <nav class=\"nav ${bePills ? 'nav-pills' : ''} ${navsClass} ${vertical ? 'flex-column' : ''} ${beTab ? 'nav-tabs' : ''} ${fill ? 'nav-fill' : ''} ${justify ? 'nav-justified' : ''}\"\n      aria-orientation=\"${vertical ? 'vertical' : 'horizontal'}\" css=\"${navsStyle}\">\n      <slot></slot>\n    </nav>\n  </div>\n  \n  \n  <div class=\"${vertical ? contentVerticalClass : ''}\">\n    <div class=\"tab-content ${contentClass}\" css=\"${contentStyle}\">\n    </div>\n  </div>\n</div>\n  \n</template>\n"
});
___scope___.file("components/bootstrap/pagination/abt-pagination.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template ref=\"paginationTemplate\">\n  <require from=\"./abt-pagination.css\"></require>\n  \n  <ul ref=\"pagination\" css=\"${style}\" id=\"${id}\" class=\"pagination abt-pagination ${class}\">\n    <li show.bind=\"boundaryLinks\" class=\"text-nowrap page-item abt-pagination-first ${selectedPage === 1  ? 'disabled':''}\">\n      <a class=\"page-link abt-pagination-link-first\" href=\"#\" click.trigger=\"onClick($event,1)\">\n        <span class=\"${firstIcon}\" aria-hidden=\"true\">${firstText}</span>\n      </a>\n    </li>\n    <li show.bind=\"directionLinks\" class=\"text-nowrap page-item abt-pagination-prev ${selectedPage === 1 && !loop  ? 'disabled':''}\">\n      <a class=\"page-link abt-pagination-link-prev\" href=\"#\" click.trigger=\"onClick($event, 'prev')\">\n        <span class=\"${prevIcon}\" aria-hidden=\"true\">${prevText}</span>\n      </a>\n    </li>\n\n    <li class=\"${ip.selected ? 'active':''} text-nowrap page-item abt-pagination-item\" repeat.for=\"ip of pages\">\n      <a hide.bind=\"showNumbers && ip.page === '...'\" class=\"page-link abt-pagination-link-item\" href=\"#\" click.trigger=\"onClick($event,ip.pageNumber,pages[$index-1].pageNumber,pages[$index+1].pageNumber)\">\n        ${ip.page === '-1' ? '...' : ip.page}\n      </a>\n    </li>\n\n    <li show.bind=\"directionLinks\" class=\"text-nowrap page-item abt-pagination-next ${selectedPage === totalPages && !loop  ? 'disabled':''}\">\n      <a class=\"page-link abt-pagination-link-next\" href=\"#\" click.trigger=\"onClick($event,'next')\">\n        <span class=\"${nextIcon}\" aria-hidden=\"true\">${nextText}</span>\n      </a>\n    </li>\n    <li show.bind=\"boundaryLinks\" class=\"text-nowrap page-item abt-pagination-last ${selectedPage === totalPages  ? 'disabled':''}\">\n      <a class=\"page-link abt-pagination-link-last\" href=\"#\" click.trigger=\"onClick($event, totalPages)\">\n        <span class=\"${lastIcon}\" aria-hidden=\"true\">${lastText}</span>\n      </a>\n  </ul>\n</template>\n"
});
___scope___.file("components/bootstrap/password/abt-password.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template ref=\"passwordTemplate\">\n  <require from=\"./abt-password.css\"></require>\n  <require from=\"../inputgroup/abt-inputgroup\"></require>\n  <require from=\"../inputgroup/abt-inputgroup-append\"></require>\n  <require from=\"../progressbar/abt-progress\"></require>\n  <require from=\"../progressbar/abt-progress-bar\"></require>\n  \n  <abt-inputgroup size=\"${size}\">\n    <input ref='txtPassword' css=\"${inputStyle}\" type=\"password\" value.bind=\"text\" class=\"form-control abt-password-input ${inputClass}\">\n    <abt-inputgroup-append if.bind=\"passwordVisibility\">\n      <button ref='btnPassword' class=\"btn btn-${buttonColorType} abt-password-button ${buttonClass}\" click.delegate=\"passwordVisibilityToggle()\"\n        css=\"${buttonStyle}\" type=\"button\">\n        <i ref='iconPassword' class=\"${isInvisible ? hidePasswordIcon : showPasswordIcon}\"></i>\n      </button>\n    </abt-inputgroup-append>\n  </abt-inputgroup>\n  <abt-progress if.bind=\"showProgressBar\" height=\"${progressBarHeight}\">\n    <abt-progress-bar type.bind=\"progressBarClass\" color.bind=\"progressBarColor\" value=\"${progressBarValue}\" min=\"0\" max=\"100\">${percentValue}</abt-progress-bar>\n  </abt-progress>\n  <div class=\"abt-password-errors-list\" ref=\"errorsList\" if.bind=\"!showTooltip\"></div>\n</template>\n"
});
___scope___.file("components/bootstrap/popover/abt-popover.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template ref=\"popoverTemplate\">\n  <div ref=\"popover\">\n    <slot></slot>\n  </div>\n</template>"
});
___scope___.file("components/bootstrap/progressbar/abt-progress-bar.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template ref=\"progressbarTemplate\">\n  <require from=\"../../../custom-attributes/vanilla/uuid/aut-uuid\"></require>\n\n  <div aut-uuid ref=\"progressbar\" class=\"progress-bar ${type? 'bg-'+type : ''} ${animated?'progress-bar-animated':''} ${striped?'progress-bar-striped':''} ${class}\"\n    role=\"progressbar\" css=\"width: ${value}%; ${color ? 'background:' + color : ''} ${style}\" aria-valuenow=\"${value}\" aria-valuemin=\"${min}\"\n    aria-valuemax=\"${max}\">\n    <slot>\n      <slot>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/progressbar/abt-progress.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div id=\"${id}\" class=\"progress ${class}\" css=\"height:${height};${style}\">\n    <slot></slot>\n  </div>\n</template>"
});
___scope___.file("components/bootstrap/scrollspy/abt-scrollspy-item.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div class=\"${class} abt-scrollspy-item\" css=\"${style}\" id=\"${id}\">\n    <slot>\n      \n    </slot>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/scrollspy/abt-scrollspy.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div ref=\"spy\" data-spy=\"scroll\" data-target=\"${target}\" data-offset=\"${offset}\" class=\"${class} abt-scrollspy\" css=\"${style}\">\n    <slot></slot>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/star-rate/abt-star-rate.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template class=\"text-${type} star-${type} ${class}\" css=\"cursor:${disabled ? 'auto' : 'pointer'};  ${color ? 'color:' + color + ' !important;' : ''} ${style}\" mouseleave.trigger=\"mouseLeft()\">\n\n  <!-- <require from=\"../../../external-resources/css/font-awesome.css\"></require> -->\n  <require from=\"./abt-star-rate.css\"></require>\n\n\n  <i if.bind=\"!rtl\" class=\"abt-star-rate ${$index > fixedPoint ? emptyStar : $index < fixedPoint ? fullStar : ( ( showHalfStar || hasFloatingPoint ) && halfStarClass && fixedPoint == $index ) ? halfStarClass : emptyStar}\"\n    repeat.for=\"$index of maxRate\" mousemove.delegate=\"mouseMove($event,$index)\" click.delegate=\"setRate($index)\">\n  </i>\n  <!-- <span mouseover.delegate=\"mouseLeft()\"> -->\n    <slot></slot>\n  <!-- </span> -->\n  <i if.bind=\"rtl\" class=\"abt-star-rate abt-star-rtl ${maxRate-$index-1 > fixedPoint ? emptyStar : maxRate-$index-1 < fixedPoint ? fullStar : ( ( showHalfStar || hasFloatingPoint ) && halfStarClass && fixedPoint == maxRate-$index-1 ) ? halfStarClass : emptyStar}\"\n         repeat.for=\"$index of maxRate\"\n          \n          mousemove.delegate=\"mouseMove($event,maxRate-$index-1)\"\n        click.delegate=\"setRate(maxRate-$index-1)\">\n  </i>\n\n</template>\n"
});
___scope___.file("components/bootstrap/toggle/abt-toggle.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template class=\"abt-toggle ${class}\" css=\"${style}\">\n  \n  <require from=\"aureliatoolbelt-thirdparty/bootstrap-toggle/bootstrap-toggle.css\"></require>\n  <require from=\"./abt-toggle.css\"></require>\n\n  <label click.delegate=\"onChanged()\" class=\"checkbox-inline\">\n    <input ref=\"checkbox\" type=\"checkbox\" data-toggle=\"toggle\" data-on=\"${on}\" data-off=\"${off}\" data-onstyle=\"${onType}\" data-offstyle=\"${offType}\"\n      data-style=\"${css}\" data-size=\"${size}\" data-width=\"${width}\" data-height=\"${height}\" style=\"cursor: pointer\">\n    <slot></slot>\n  </label>\n</template>\n"
});
___scope___.file("components/bootstrap/tokenize/abt-tokenize-item.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n    <option value=\"${value}\" class=\"${class}\" css=\"${style}\">\n        <slot></slot>\n      </option>\n</template>\n"
});
___scope___.file("components/bootstrap/tokenize/abt-tokenize.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template ref=\"tokenizeTemplate\">\n  \n  <require from=\"aureliatoolbelt-thirdparty/bootstrap-tokenize2/tokenize2.css\"></require>\n\n  <select id=\"${id}\" ref='tokenize' class=\"${class}\" css=\"${style}\" multiple>\n  </select>\n  <slot></slot>\n</template>\n"
});
___scope___.file("components/bootstrap/tooltip/abt-tooltip.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div ref=\"tooltip\">\n    <slot></slot>\n  </div>\n</template>\n"
});
___scope___.file("components/bootstrap/touchspin/abt-touchspin.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template></template>"
});
___scope___.file("components/jquery/block-ui/aut-block-ui.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n    <require from=\"./aut-block-ui.css\"></require>\n\n    <div aut-uuid ref=\"content\">\n        <slot></slot>\n    </div>\n</template>"
});
___scope___.file("components/jquery/lazy-image/aut-lazy-image.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <img if.bind=\"backgroundMode === true\" class=\"lazy ${lazy}\" css=\"${style}\" data-src=\"${url}\" />\n  <div else class=\"lazy ${lazy}\" css=\"${style}\" data-src=\"${url}\"></div>\n</template>\n"
});
___scope___.file("components/jquery/metis-menu/aut-metis-menu-group.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <li class=\"${active ? 'active' : '' } ${groupClass}\">\n    <a href=\"#\" aria-expanded=\"${active}\">\n      <span class=\"${iconClass}\"></span>\n      <span>${text}</span>\n      <span class=\"${showArrow ? arrowClass : ''}\"></span>\n    </a>\n    <ul class=\"${active ? 'in' : ''}\" aria-expanded=\"${active}\">\n      <slot></slot>\n    </ul>\n  </li>\n\n</template>\n"
});
___scope___.file("components/jquery/metis-menu/aut-metis-menu-item.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <li>\n    <a class=\"aut-metis-menu-item-link\" aria-expanded=\"false\" href=\"${href ? href : '#'}\">\n      <slot></slot>\n    </a>\n  </li>\n</template>\n"
});
___scope___.file("components/jquery/metis-menu/aut-metis-menu.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <require from=\"metismenu/dist/metisMenu.css\"></require>\n\n  <ul ref=\"metismenu\" class=\"metismenu ${class}\" css=\"${style}\">\n    <slot></slot>\n  </ul>\n</template>\n"
});
___scope___.file("components/jquery/news-ticker/aut-news-ticker.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template></template>"
});
___scope___.file("components/vanilla/clock/aut-clock.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <require from=\"./aut-clock.css\"></require>\n  <require from=\"../../../value-converters/vanilla/datetime/moment-vc\"></require>\n  <!-- text-shadow: 0 0 20px ${shadowColor}, 0 0 20px rgba(10, 175, 230, 0); -->\n\n  <div class=\"clock\" css=\"color: ${color};\">\n    <slot name=\"date\">\n      <p if.bind=\"showDate\" class=\"date\" css=\"font-size: ${fontSize/2}px;\">${value|date:dateFormat:locale}</p>\n    </slot>\n    <slot name=\"time\">\n      <p if.bind=\"showTime\" class=\"time\" css=\"font-size: ${fontSize}px;\">${value|time:be24Hours}</p>\n    </slot>\n    <slot name=\"text\">\n      <p if.bind=\"showText\" class=\"text\" css=\"font-size: ${fontSize/3}px;\">${text}</p>\n    </slot>\n  </div>\n\n</template>\n"
});
___scope___.file("components/vanilla/divider/aut-divider.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <require from=\"./aut-divider.css\"></require>\n  <div id=\"${id}\" ref=\"divider\" class=\"${class} ${vertical ? 'is-divider-vertical' : 'is-divider'}\">\n    <slot></slot>\n  </div>\n</template>\n"
});
___scope___.file("components/vanilla/mark-down/aut-mark-down.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <require from=\"../../bootstrap/toggle/abt-toggle\"></require>\n  <require from=\"../../../value-converters/vanilla/mark-down/markdown-vc\"></require>\n  <require from=\"../../bootstrap/button/abt-button\"></require>\n\n  <!-- <require from=\"../../bootstrap/card/abt-card.html\"></require>\n  <require from=\"../../bootstrap/card/abt-card-body.html\"></require> -->\n\n  <abt-card class=\"mt-3 mb-4\">\n    <abt-card-header if.bind=\"showToolBar\">\n\n      <abt-button size=\"sm\" color=\"secondary\" click.call=\"srcChanged()\">\n        <span slot=\"loading\">\n          <i class=\"fa fa-refresh fa-spin\"></i>\n        </span>\n\n        Reload\n\n      </abt-button>\n\n      <div class=\"btn-group btn-group-sm\" role=\"group\">\n        <button click.delegate=\"addText('# ')\" type=\"button\" class=\"btn btn-outline-primary\">h1</button>\n        <button click.delegate=\"addText('## ')\" type=\"button\" class=\"btn btn-outline-primary\">h2</button>\n        <button click.delegate=\"addText('### ')\" type=\"button\" class=\"btn btn-outline-primary\">h3</button>\n        <button click.delegate=\"addText('#### ')\" type=\"button\" class=\"btn btn-outline-primary\">h4</button>\n        <button click.delegate=\"addText('##### ')\" type=\"button\" class=\"btn btn-outline-primary\">h5</button>\n      </div>\n\n      <div class=\"btn-group btn-group-sm\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" click.delegate=\"addText('****', 2)\">\n          <b>Bold</b>\n        </button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" click.delegate=\"addText('__', 1)\">\n          <em>Italic</em>\n        </button>\n      </div>\n\n      <div class=\"btn-group btn-group-sm\" role=\"group\">\n        <abt-button outline click.call=\"addText('[]()', 1)\">\n          <b>Link</b>\n        </abt-button>\n        <abt-button outline click.call=\"addText('![]()', 4)\">\n          <em>Image</em>\n        </abt-button>\n      </div>\n\n\n      <div class=\"btn-group btn-group-sm\" role=\"group\">\n        <abt-toggle size=\"mini\" checked.bind=\"showPreview\">\n          Preview\n        </abt-toggle>\n        <abt-toggle size=\"mini\" checked.bind=\"showEditor\">\n          Editor\n        </abt-toggle>\n      </div>\n    </abt-card-header>\n    <abt-card-body if.bind=\"showEditor === true\" style=\"border-left: 3px solid maroon !important;\">\n\n      <textarea ref=\"editor\" class=\"editor\" style=\"\n                  width: 98%;\n                  border: 0px;\n                  min-height: 400px;\" value.bind=\"myText\">\n      </textarea>\n\n    </abt-card-body>\n    <abt-card-footer if.bind=\"showPreview === true\" style=\"min-height: 100px; border-left:4px solid #753B85;\">\n      <div ref=\"preview\" innerhtml.bind=\"myText | md & debounce:200\">\n      </div>\n    </abt-card-footer>\n\n    <div show.bind=\"false\" ref=\"slotContainer\" style=\"visibility: hidden\">\n      <slot></slot>\n    </div>\n\n  </abt-card>\n</template>\n"
});
___scope___.file("components/vanilla/microlink/aut-microlink.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n  <div style=\"width: 1px\" class=\"${class}\">\n    <a aut-uuid class=\"micro-link aut-microlink\" ref=\"microlink\" data-rounded=\"${rounded}\" href=\"${url}\">\n    </a>\n  </div>\n</template>\n"
});
___scope___.file("components/vanilla/pretty/aut-checkbox.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <require from='pretty-checkbox/dist/pretty-checkbox.css'></require>\n\n  <div class=\"pretty p-has-focus ${switch ? 'p-switch':'p-default'} ${appearanceCSS} ${thickCss} ${animationCss}\n     ${offColorCss != '' ? 'p-toggle' : ''}\">\n    <input type=\"${isCheckBox ? 'checkbox' : 'radio'}\" name.bind=\"name\" checked.bind=\"state\" change.delegate=\"changed()\" disabled.bind=\"disabled\"\n    />\n    <i if.bind=\"icon\" class=\"${icon}\"></i>\n    <div class=\"state ${colorCss} ${offColorCss != '' && disabled === false ? 'p-on' : ''}\">\n      <label>\n        <slot></slot>\n      </label>\n    </div>\n    <div if.bind=\"offColorCss != ''\" class=\"state ${offColorCss} p-off\">\n      <label>\n        ${offLabel}\n      </label>\n    </div>\n  </div>\n\n</template>\n"
});
___scope___.file("components/vanilla/pretty/aut-radio.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <require from='pretty-checkbox/dist/pretty-checkbox.css'></require>\n\n  <div class=\"pretty p-has-focus ${switch ? 'p-switch':'p-default'} ${appearanceCSS} ${thickCss} ${animationCss}\n     ${offColorCss != '' ? 'p-toggle' : ''}\">\n    <input ref=\"radioButton\" type=\"radio\" name.bind=\"name\" disabled.bind=\"disabled\" change.delegate=\"changed()\" />\n    <i if.bind=\"icon\" class=\"${icon}\"></i>\n    <div class=\"state ${colorCss} ${offColorCss != '' && disabled === false ? 'p-on' : ''}\">\n      <label>\n        <slot></slot>\n      </label>\n    </div>\n    <div if.bind=\"offColorCss != ''\" class=\"state ${offColorCss} p-off\">\n      <label>\n        ${offLabel}\n      </label>\n    </div>\n  </div>\n\n</template>\n"
});
___scope___.file("components/vanilla/raw-html/aut-raw-html.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n\n  <span ref=\"renderer\" textcontent.bind=\"content\">\n\n\n\n  </span>\n\n  <div ref=\"dummy\">\n    <slot>\n\n    </slot>\n  </div>\n\n</template>\n"
});
___scope___.file("components/vanilla/scrollup/aut-scrollup.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n    <require from=\"./aut-scrollup.css\"></require>\n    <button ref='scrollupButton' aut-uuid click.delegate=\"goToUp()\" css=\"${style}\" class=\"aut-scrollup aut-scrollup-noselect ${class}\">\n        <slot>\n        </slot>\n    </button>\n</template>\n"
});
___scope___.file("binding-behaviours/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
function configure(config) {
    console.log(config);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/alert/abt-alert-heading.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_binding_1 = require("aurelia-binding");
var aurelia_templating_1 = require("aurelia-templating");
var BootstrapAlertHeading = (function () {
    function BootstrapAlertHeading() {
        this.id = '';
    }
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapAlertHeading.prototype, "id", void 0);
    BootstrapAlertHeading = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-alert-heading')
    ], BootstrapAlertHeading);
    return BootstrapAlertHeading;
}());
exports.BootstrapAlertHeading = BootstrapAlertHeading;
//# sourceMappingURL=abt-alert-heading.js.map
});
___scope___.file("components/bootstrap/alert/abt-alert-link.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapAlertLink = (function () {
    function BootstrapAlertLink() {
        this.id = '';
        this.href = '';
        this.disabled = false;
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapAlertLink.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapAlertLink.prototype, "href", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapAlertLink.prototype, "disabled", void 0);
    BootstrapAlertLink = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-alert-link')
    ], BootstrapAlertLink);
    return BootstrapAlertLink;
}());
exports.BootstrapAlertLink = BootstrapAlertLink;
//# sourceMappingURL=abt-alert-link.js.map
});
___scope___.file("components/bootstrap/alert/abt-alert.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var $ = require("jquery");
var BootstrapAlert = (function () {
    function BootstrapAlert(element) {
        this.element = element;
        this.size = 'md';
        this.type = 'primary';
        this.animate = true;
        this.style = '';
        this.class = '';
        this.showAlert = null;
        this.dismissible = false;
    }
    BootstrapAlert.prototype.attached = function () {
        var _this = this;
        var onlyDismissibleAttribute = (this.dismissible === '' && this.element.hasAttribute('dismissible'));
        this.dismissible = onlyDismissibleAttribute || this.dismissible.toString() === 'true';
        var onlyAnimateAttribute = (this.animate === '' && this.element.hasAttribute('animate'));
        this.animate = onlyAnimateAttribute || this.animate === 'true' || this.animate === true;
        if (this.bsClose) {
            $(alert).on('close.bs.alert', function () {
                if (_this.bsClose) {
                    _this.bsClose();
                }
            });
        }
        if (this.bsClosed) {
            $(alert).on('closed.bs.alert', function () {
                if (_this.bsClosed) {
                    _this.bsClosed();
                }
            });
        }
    };
    BootstrapAlert.prototype.showAlertChanged = function (newValue) {
        return __awaiter(this, void 0, void 0, function () {
            var continueShow, continueHide;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!newValue) return [3, 3];
                        continueShow = true;
                        if (!this.bsShow) return [3, 2];
                        return [4, this.bsShow({ target: this.alert })];
                    case 1:
                        continueShow = (_a.sent());
                        _a.label = 2;
                    case 2:
                        continueShow = continueShow === undefined || continueShow === null ? true : continueShow;
                        if (!continueShow) {
                            this.showAlert = !newValue;
                            return [2];
                        }
                        if (this.animate) {
                            $(this.alert).fadeIn();
                        }
                        else {
                            $(this.alert).show();
                        }
                        if (this.bsShown) {
                            this.bsShown({ target: this.alert });
                        }
                        return [3, 6];
                    case 3:
                        continueHide = true;
                        if (!this.bsHide) return [3, 5];
                        return [4, this.bsHide({ target: this.alert })];
                    case 4:
                        continueHide = (_a.sent());
                        _a.label = 5;
                    case 5:
                        continueHide = continueHide === undefined || continueHide === null ? true : continueHide;
                        if (!continueHide) {
                            this.showAlert = !newValue;
                            return [2];
                        }
                        if (this.animate) {
                            $(this.alert).fadeOut();
                        }
                        else {
                            $(this.alert).hide();
                        }
                        if (this.bsHidden) {
                            this.bsHidden({ target: this.alert });
                        }
                        _a.label = 6;
                    case 6: return [2];
                }
            });
        });
    };
    BootstrapAlert.prototype.detached = function () {
        $(this.alert).alert('close');
        $(this.alert).alert('dispose');
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapAlert.prototype, "size", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapAlert.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapAlert.prototype, "animate", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapAlert.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapAlert.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Boolean)
    ], BootstrapAlert.prototype, "showAlert", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapAlert.prototype, "dismissible", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapAlert.prototype, "bsShow", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapAlert.prototype, "bsShown", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapAlert.prototype, "bsHide", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapAlert.prototype, "bsHidden", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapAlert.prototype, "bsClose", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapAlert.prototype, "bsClosed", void 0);
    BootstrapAlert = __decorate([
        aurelia_dependency_injection_1.inject(Element),
        aurelia_framework_1.customElement('abt-alert'),
        __metadata("design:paramtypes", [Object])
    ], BootstrapAlert);
    return BootstrapAlert;
}());
exports.BootstrapAlert = BootstrapAlert;
//# sourceMappingURL=abt-alert.js.map
});
___scope___.file("components/bootstrap/alert/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-alert"));
__export(require("./abt-alert-heading"));
__export(require("./abt-alert-link"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-alert'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-alert-heading'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-alert-link')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/badge/abt-badge.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapBadge = (function () {
    function BootstrapBadge(element) {
        this.element = element;
        this.class = '';
        this.type = 'primary';
        this.isPill = false;
    }
    BootstrapBadge.prototype.bind = function () {
        var onlyIsPillAttribute = (this.isPill === '' && this.element.hasAttribute('is-pill'));
        this.isPill = onlyIsPillAttribute || this.isPill === 'true' || this.isPill === true;
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapBadge.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapBadge.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapBadge.prototype, "isPill", void 0);
    BootstrapBadge = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-badge'),
        __metadata("design:paramtypes", [Object])
    ], BootstrapBadge);
    return BootstrapBadge;
}());
exports.BootstrapBadge = BootstrapBadge;
//# sourceMappingURL=abt-badge.js.map
});
___scope___.file("components/bootstrap/badge/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-badge"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-badge')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/breadcrumb/abt-breadcrumb.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapBreadcrumb = (function () {
    function BootstrapBreadcrumb() {
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapBreadcrumb.prototype, "items", void 0);
    BootstrapBreadcrumb = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-breadcrumb')
    ], BootstrapBreadcrumb);
    return BootstrapBreadcrumb;
}());
exports.BootstrapBreadcrumb = BootstrapBreadcrumb;
//# sourceMappingURL=abt-breadcrumb.js.map
});
___scope___.file("components/bootstrap/breadcrumb/breadcrumb-item.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=breadcrumb-item.js.map
});
___scope___.file("components/bootstrap/breadcrumb/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./breadcrumb-item"));
__export(require("./abt-breadcrumb"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-breadcrumb')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/button/abt-button-group.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapButtonGroup = (function () {
    function BootstrapButtonGroup(element) {
        this.element = element;
        this.id = '';
        this.label = '';
        this.size = 'md';
        this.style = '';
        this.class = '';
        this.vertical = false;
    }
    BootstrapButtonGroup.prototype.attached = function () {
        var onlyVerticalAttribute = (this.vertical === '' && this.element.hasAttribute('vertical'));
        this.vertical = onlyVerticalAttribute || this.vertical === 'true' || this.vertical === true;
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapButtonGroup.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapButtonGroup.prototype, "label", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapButtonGroup.prototype, "size", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapButtonGroup.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapButtonGroup.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapButtonGroup.prototype, "vertical", void 0);
    BootstrapButtonGroup = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-button-group'),
        __metadata("design:paramtypes", [Object])
    ], BootstrapButtonGroup);
    return BootstrapButtonGroup;
}());
exports.BootstrapButtonGroup = BootstrapButtonGroup;
//# sourceMappingURL=abt-button-group.js.map
});
___scope___.file("components/bootstrap/button/abt-button.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var aurelia_framework_1 = require("aurelia-framework");
var BootstrapButton = (function () {
    function BootstrapButton(element) {
        this.element = element;
        this.size = 'md';
        this.type = 'button';
        this.bsType = 'primary';
        this.outline = false;
        this.block = false;
        this.style = '';
        this.class = '';
        this.disabled = false;
        this.isBusy = false;
        this.task = null;
    }
    BootstrapButton.prototype.attached = function () {
        var onlyOutlineAttribute = (this.outline === '' && this.element.hasAttribute('outline'));
        this.outline = onlyOutlineAttribute || this.outline === 'true' || this.outline === true;
        var onlyBlockAttribute = (this.block === '' && this.element.hasAttribute('block'));
        this.block = onlyBlockAttribute || this.block === 'true' || this.block === true;
        var onlyDisabledAttribute = (this.disabled === '' && this.element.hasAttribute('disabled'));
        this.disabled = onlyDisabledAttribute || this.disabled === 'true' || this.disabled === true;
    };
    BootstrapButton.prototype.onClick = function (event) {
        var _this = this;
        event.preventDefault();
        if (!this.click || this.disabled) {
            return;
        }
        if (this.task) {
            return;
        }
        this.isBusy = true;
        this.task = Promise.resolve(this.click({ event: event, target: event.target }))
            .then(function () { return _this.clickCompleted(); }, function () { return _this.clickCompleted(); });
    };
    BootstrapButton.prototype.clickCompleted = function () {
        this.task = null;
        this.isBusy = false;
    };
    BootstrapButton.prototype.detached = function () {
        this.task = null;
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapButton.prototype, "size", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapButton.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapButton.prototype, "bsType", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapButton.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapButton.prototype, "outline", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapButton.prototype, "block", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapButton.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapButton.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapButton.prototype, "click", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapButton.prototype, "disabled", void 0);
    BootstrapButton = __decorate([
        aurelia_dependency_injection_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-button'),
        __metadata("design:paramtypes", [Object])
    ], BootstrapButton);
    return BootstrapButton;
}());
exports.BootstrapButton = BootstrapButton;
//# sourceMappingURL=abt-button.js.map
});
___scope___.file("components/bootstrap/button/abt-link-button.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapLinkButton = (function () {
    function BootstrapLinkButton(element) {
        this.element = element;
        this.type = 'primary';
        this.size = 'md';
        this.outline = false;
        this.block = false;
        this.style = '';
        this.class = '';
        this.href = '';
        this.isBusy = false;
        this.task = null;
    }
    BootstrapLinkButton.prototype.attached = function () {
        var onlyOutlineAttribute = (this.outline === '' && this.element.hasAttribute('outline'));
        this.outline = onlyOutlineAttribute || this.outline === 'true' || this.outline === true;
        var onlyBlockAttribute = (this.block === '' && this.element.hasAttribute('block'));
        this.block = onlyBlockAttribute || this.block === 'true' || this.block === true;
        var onlyDisabledAttribute = (this.disabled === '' && this.element.hasAttribute('disabled'));
        this.disabled = onlyDisabledAttribute || this.disabled === 'true' || this.disabled === true;
    };
    BootstrapLinkButton.prototype.onClick = function (event) {
        var _this = this;
        if (!this.click) {
            return true;
        }
        event.preventDefault();
        if (this.task || this.disabled) {
            return false;
        }
        this.isBusy = true;
        this.task = Promise.resolve(this.click({ event: event, target: event.target }))
            .then(function () { return _this.clickCompleted(); }, function () { return _this.clickCompleted(); });
        return false;
    };
    BootstrapLinkButton.prototype.clickCompleted = function () {
        this.task = null;
        this.isBusy = false;
    };
    BootstrapLinkButton.prototype.detached = function () {
        this.task = null;
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapLinkButton.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapLinkButton.prototype, "size", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapLinkButton.prototype, "outline", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapLinkButton.prototype, "block", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapLinkButton.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapLinkButton.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapLinkButton.prototype, "href", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapLinkButton.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapLinkButton.prototype, "click", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapLinkButton.prototype, "disabled", void 0);
    BootstrapLinkButton = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-link-button'),
        __metadata("design:paramtypes", [Object])
    ], BootstrapLinkButton);
    return BootstrapLinkButton;
}());
exports.BootstrapLinkButton = BootstrapLinkButton;
//# sourceMappingURL=abt-link-button.js.map
});
___scope___.file("components/bootstrap/button/abt-toolbar.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapToolbar = (function () {
    function BootstrapToolbar() {
        this.id = '';
        this.label = '';
        this.style = '';
        this.class = '';
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapToolbar.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapToolbar.prototype, "label", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapToolbar.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapToolbar.prototype, "class", void 0);
    BootstrapToolbar = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-toolbar')
    ], BootstrapToolbar);
    return BootstrapToolbar;
}());
exports.BootstrapToolbar = BootstrapToolbar;
//# sourceMappingURL=abt-toolbar.js.map
});
___scope___.file("components/bootstrap/button/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-button"));
__export(require("./abt-toolbar"));
__export(require("./abt-button-group"));
__export(require("./abt-link-button"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-button'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-toolbar'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-button-group'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-link-button')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/card/abt-card-body.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_binding_1 = require("aurelia-binding");
var BootstrapCardBody = (function () {
    function BootstrapCardBody() {
    }
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardBody.prototype, "style", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardBody.prototype, "class", void 0);
    BootstrapCardBody = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-card-body')
    ], BootstrapCardBody);
    return BootstrapCardBody;
}());
exports.BootstrapCardBody = BootstrapCardBody;
//# sourceMappingURL=abt-card-body.js.map
});
___scope___.file("components/bootstrap/card/abt-card-columns.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_binding_1 = require("aurelia-binding");
var BootstrapCardColumn = (function () {
    function BootstrapCardColumn() {
    }
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardColumn.prototype, "style", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardColumn.prototype, "class", void 0);
    BootstrapCardColumn = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-card-columns')
    ], BootstrapCardColumn);
    return BootstrapCardColumn;
}());
exports.BootstrapCardColumn = BootstrapCardColumn;
//# sourceMappingURL=abt-card-columns.js.map
});
___scope___.file("components/bootstrap/card/abt-card-deck.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_binding_1 = require("aurelia-binding");
var BootstrapCardDeck = (function () {
    function BootstrapCardDeck() {
    }
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardDeck.prototype, "style", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardDeck.prototype, "class", void 0);
    BootstrapCardDeck = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-card-deck')
    ], BootstrapCardDeck);
    return BootstrapCardDeck;
}());
exports.BootstrapCardDeck = BootstrapCardDeck;
//# sourceMappingURL=abt-card-deck.js.map
});
___scope___.file("components/bootstrap/card/abt-card-footer.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_binding_1 = require("aurelia-binding");
var BootstrapCardFooter = (function () {
    function BootstrapCardFooter() {
    }
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardFooter.prototype, "style", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardFooter.prototype, "class", void 0);
    BootstrapCardFooter = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-card-footer')
    ], BootstrapCardFooter);
    return BootstrapCardFooter;
}());
exports.BootstrapCardFooter = BootstrapCardFooter;
//# sourceMappingURL=abt-card-footer.js.map
});
___scope___.file("components/bootstrap/card/abt-card-group.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_binding_1 = require("aurelia-binding");
var BootstrapCardGroup = (function () {
    function BootstrapCardGroup() {
    }
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardGroup.prototype, "style", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardGroup.prototype, "class", void 0);
    BootstrapCardGroup = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-card-group')
    ], BootstrapCardGroup);
    return BootstrapCardGroup;
}());
exports.BootstrapCardGroup = BootstrapCardGroup;
//# sourceMappingURL=abt-card-group.js.map
});
___scope___.file("components/bootstrap/card/abt-card-header.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_binding_1 = require("aurelia-binding");
var BootstrapCardHeader = (function () {
    function BootstrapCardHeader() {
    }
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardHeader.prototype, "style", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardHeader.prototype, "class", void 0);
    BootstrapCardHeader = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-card-header')
    ], BootstrapCardHeader);
    return BootstrapCardHeader;
}());
exports.BootstrapCardHeader = BootstrapCardHeader;
//# sourceMappingURL=abt-card-header.js.map
});
___scope___.file("components/bootstrap/card/abt-card-image-overlay.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_binding_1 = require("aurelia-binding");
var BootstrapCardImageOverlay = (function () {
    function BootstrapCardImageOverlay() {
    }
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardImageOverlay.prototype, "style", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardImageOverlay.prototype, "class", void 0);
    BootstrapCardImageOverlay = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-card-image-overlay')
    ], BootstrapCardImageOverlay);
    return BootstrapCardImageOverlay;
}());
exports.BootstrapCardImageOverlay = BootstrapCardImageOverlay;
//# sourceMappingURL=abt-card-image-overlay.js.map
});
___scope___.file("components/bootstrap/card/abt-card-image.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapCardImage = (function () {
    function BootstrapCardImage(element) {
        this.element = element;
        this.cssClass = 'card-img';
    }
    BootstrapCardImage.prototype.attached = function () {
        var beOnBottom = this.element.hasAttribute('bottom');
        var beOnTop = this.element.hasAttribute('top');
        if (beOnBottom && beOnTop) {
            var error = new Error("The [abt-card-image] should have either 'top' or 'bottom' attributes, and not both of them simultaneously.");
            throw error;
        }
        this.cssClass += beOnBottom ? '-bottom' : beOnTop ? '-top' : '';
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapCardImage.prototype, "alt", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardImage.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardImage.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardImage.prototype, "src", void 0);
    BootstrapCardImage = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-card-image'),
        __metadata("design:paramtypes", [Object])
    ], BootstrapCardImage);
    return BootstrapCardImage;
}());
exports.BootstrapCardImage = BootstrapCardImage;
//# sourceMappingURL=abt-card-image.js.map
});
___scope___.file("components/bootstrap/card/abt-card-link.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_binding_1 = require("aurelia-binding");
var BootstrapCardLink = (function () {
    function BootstrapCardLink() {
    }
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardLink.prototype, "style", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardLink.prototype, "class", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardLink.prototype, "href", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardLink.prototype, "target", void 0);
    BootstrapCardLink = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-card-link')
    ], BootstrapCardLink);
    return BootstrapCardLink;
}());
exports.BootstrapCardLink = BootstrapCardLink;
//# sourceMappingURL=abt-card-link.js.map
});
___scope___.file("components/bootstrap/card/abt-card-subtitle.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_binding_1 = require("aurelia-binding");
var BootstrapCardSubTitle = (function () {
    function BootstrapCardSubTitle() {
    }
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardSubTitle.prototype, "style", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardSubTitle.prototype, "class", void 0);
    BootstrapCardSubTitle = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-card-subtitle')
    ], BootstrapCardSubTitle);
    return BootstrapCardSubTitle;
}());
exports.BootstrapCardSubTitle = BootstrapCardSubTitle;
//# sourceMappingURL=abt-card-subtitle.js.map
});
___scope___.file("components/bootstrap/card/abt-card-text.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var BootstrapCardText = (function () {
    function BootstrapCardText() {
    }
    BootstrapCardText = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-card-text')
    ], BootstrapCardText);
    return BootstrapCardText;
}());
exports.BootstrapCardText = BootstrapCardText;
//# sourceMappingURL=abt-card-text.js.map
});
___scope___.file("components/bootstrap/card/abt-card-title.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_binding_1 = require("aurelia-binding");
var BootstrapCardTitle = (function () {
    function BootstrapCardTitle() {
    }
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardTitle.prototype, "style", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCardTitle.prototype, "class", void 0);
    BootstrapCardTitle = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-card-title')
    ], BootstrapCardTitle);
    return BootstrapCardTitle;
}());
exports.BootstrapCardTitle = BootstrapCardTitle;
//# sourceMappingURL=abt-card-title.js.map
});
___scope___.file("components/bootstrap/card/abt-card.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_binding_1 = require("aurelia-binding");
var BootstrapCard = (function () {
    function BootstrapCard() {
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCard.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCard.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCard.prototype, "width", void 0);
    BootstrapCard = __decorate([
        aurelia_framework_1.customElement('abt-card'),
        aurelia_framework_1.containerless()
    ], BootstrapCard);
    return BootstrapCard;
}());
exports.BootstrapCard = BootstrapCard;
//# sourceMappingURL=abt-card.js.map
});
___scope___.file("components/bootstrap/card/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-card-body"));
__export(require("./abt-card-columns"));
__export(require("./abt-card-deck"));
__export(require("./abt-card-footer"));
__export(require("./abt-card-group"));
__export(require("./abt-card-header"));
__export(require("./abt-card-image-overlay"));
__export(require("./abt-card-image"));
__export(require("./abt-card-subtitle"));
__export(require("./abt-card-text"));
__export(require("./abt-card-title"));
__export(require("./abt-card"));
__export(require("./abt-card-link"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-card-body'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-card-columns'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-card-deck'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-card-footer'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-card-group'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-card-header'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-card-image-overlay'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-card-image'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-card-subtitle'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-card-text'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-card-title'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-card'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-card-link')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/carousel/abt-carousel-item.js", function(exports, require, module, __filename, __dirname){

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
var sharedIndex_1 = require("./../../../utilities/vanilla/sharedIndex");
var aurelia_framework_1 = require("aurelia-framework");
var CarouselItemCustomElement = (function () {
    function CarouselItemCustomElement(element, sharedController) {
        this.element = element;
        this.sharedController = sharedController;
        this.active = false;
        this.isActive = false;
        this.times = 0;
    }
    CarouselItemCustomElement.prototype.createIndicatorHtml = function (id, index, beActive) {
        return "<li style=\"cursor:pointer\" data-target=\"#" + id + "\" data-slide-to=\"" + index + "\" class=\"" + (beActive ? 'active' : '') + "\" ></li>";
    };
    CarouselItemCustomElement.prototype.attached = function () {
        var carousel = this.carouselItem.parentElement.parentElement;
        this.times = this.sharedController.getAndIncrement(carousel.id);
        var isActive = (this.active === '' && this.carouselItemTemplate.hasAttribute('active')) || this.active.toString() === 'true';
        var carouselOl = carousel.children[0];
        var isOl = carouselOl.nodeName.toLowerCase() === 'ol';
        if (isOl) {
            carouselOl.innerHTML += this.createIndicatorHtml(carousel.id, this.times, isActive);
        }
        if (isActive) {
            this.carouselItem.classList.add('active');
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], CarouselItemCustomElement.prototype, "active", void 0);
    CarouselItemCustomElement = __decorate([
        aurelia_framework_1.inject(Element, sharedIndex_1.SharedIndex),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-carousel-item'),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof sharedIndex_1.SharedIndex !== "undefined" && sharedIndex_1.SharedIndex) === "function" && _a || Object])
    ], CarouselItemCustomElement);
    return CarouselItemCustomElement;
    var _a;
}());
exports.CarouselItemCustomElement = CarouselItemCustomElement;
//# sourceMappingURL=abt-carousel-item.js.map
});
___scope___.file("utilities/vanilla/sharedIndex.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var SharedIndex = (function () {
    function SharedIndex() {
        this.dictionary = [];
    }
    SharedIndex.prototype.getAndIncrement = function (id) {
        id = this.getId(id);
        if (this.dictionary[id] === undefined) {
            this.dictionary[id] = 0;
        }
        else {
            this.dictionary[id] += 1;
        }
        return this.dictionary[id];
    };
    SharedIndex.prototype.getValue = function (id) {
        id = this.getId(id);
        return this.dictionary[id];
    };
    SharedIndex.prototype.reset = function (id) {
        id = this.getId(id);
        this.dictionary[id] = 0;
    };
    SharedIndex.prototype.resetAll = function () {
        this.dictionary = [];
    };
    SharedIndex.prototype.getId = function (id) {
        return 'a' + id.replace(new RegExp('-', 'g'), '');
    };
    SharedIndex = __decorate([
        aurelia_framework_1.singleton()
    ], SharedIndex);
    return SharedIndex;
}());
exports.SharedIndex = SharedIndex;
//# sourceMappingURL=sharedIndex.js.map
});
___scope___.file("components/bootstrap/carousel/abt-carousel.js", function(exports, require, module, __filename, __dirname){

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
var $ = require("jquery");
var CarouselCustomElement = (function () {
    function CarouselCustomElement() {
        this.prevTitle = 'Previous';
        this.nextTitle = 'Next';
        this.prevIcon = 'carousel-control-prev-icon';
        this.nextIcon = 'carousel-control-next-icon';
        this.navigator = false;
        this.indicator = false;
        this.interval = 5000;
        this.keyboard = true;
        this.pause = true;
        this.ride = false;
        this.wrap = true;
        this.showNavigator = false;
        this.showIndicator = false;
    }
    CarouselCustomElement.prototype.attached = function () {
        var _this = this;
        this.interval = Number(this.interval);
        this.showNavigator = (this.navigator === '' && this.carouselTemplate.hasAttribute('navigator')) || this.navigator.toString() === 'true';
        this.showIndicator = (this.indicator === '' && this.carouselTemplate.hasAttribute('indicator')) || this.navigator.toString() === 'true';
        this.keyboard = (this.keyboard === '' && this.carouselTemplate.hasAttribute('keyboard')) || this.keyboard.toString() === 'true';
        this.pause = (this.pause === '' && this.carouselTemplate.hasAttribute('pause')) || this.pause.toString() === 'true';
        this.ride = (this.ride === '' && this.carouselTemplate.hasAttribute('ride')) || this.ride.toString() === 'true';
        this.wrap = (this.wrap === '' && this.carouselTemplate.hasAttribute('wrap')) || this.wrap.toString() === 'true';
        $(this.carousel).carousel({
            interval: this.interval,
            keyboard: this.keyboard,
            pause: this.pause,
            ride: this.ride,
            wrap: this.wrap
        });
        if (this.bsSlide) {
            $(this.carousel).on('slide.bs.carousel', function () {
                if (_this.bsSlide) {
                    _this.bsSlide();
                }
            });
        }
        if (this.bsSlid) {
            $(this.carousel).on('slid.bs.carousel', function () {
                if (_this.bsSlid) {
                    _this.bsSlid();
                }
            });
        }
    };
    CarouselCustomElement.prototype.detached = function () {
        $(this.carousel).carousel('dispose');
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], CarouselCustomElement.prototype, "prevTitle", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], CarouselCustomElement.prototype, "nextTitle", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], CarouselCustomElement.prototype, "prevIcon", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], CarouselCustomElement.prototype, "nextIcon", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], CarouselCustomElement.prototype, "navigator", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], CarouselCustomElement.prototype, "indicator", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], CarouselCustomElement.prototype, "interval", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], CarouselCustomElement.prototype, "keyboard", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], CarouselCustomElement.prototype, "pause", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], CarouselCustomElement.prototype, "ride", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], CarouselCustomElement.prototype, "wrap", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], CarouselCustomElement.prototype, "bsSlide", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], CarouselCustomElement.prototype, "bsSlid", void 0);
    CarouselCustomElement = __decorate([
        aurelia_framework_1.customElement('abt-carousel')
    ], CarouselCustomElement);
    return CarouselCustomElement;
}());
exports.CarouselCustomElement = CarouselCustomElement;
//# sourceMappingURL=abt-carousel.js.map
});
___scope___.file("components/bootstrap/carousel/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-carousel"));
__export(require("./abt-carousel-item"));
function configure(config) {
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-carousel')]);
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-carousel-item')]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/collapse/abt-accordion-item.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapAccordionItem = (function () {
    function BootstrapAccordionItem(element) {
        this.element = element;
        this.class = '';
        this.style = '';
        this.title = '';
        this.active = false;
    }
    BootstrapAccordionItem.prototype.onAnchorClick = function (event) {
        event.preventDefault();
        return false;
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapAccordionItem.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapAccordionItem.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapAccordionItem.prototype, "title", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], BootstrapAccordionItem.prototype, "active", void 0);
    BootstrapAccordionItem = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-accordion-item'),
        __metadata("design:paramtypes", [Object])
    ], BootstrapAccordionItem);
    return BootstrapAccordionItem;
}());
exports.BootstrapAccordionItem = BootstrapAccordionItem;
//# sourceMappingURL=abt-accordion-item.js.map
});
___scope___.file("components/bootstrap/collapse/abt-accordion.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapAccordion = (function () {
    function BootstrapAccordion() {
        this.class = '';
        this.style = '';
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapAccordion.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapAccordion.prototype, "style", void 0);
    BootstrapAccordion = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-accordion')
    ], BootstrapAccordion);
    return BootstrapAccordion;
}());
exports.BootstrapAccordion = BootstrapAccordion;
//# sourceMappingURL=abt-accordion.js.map
});
___scope___.file("components/bootstrap/collapse/abt-collapse.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapCollapse = (function () {
    function BootstrapCollapse(element) {
        this.element = element;
        this.class = '';
        this.style = '';
    }
    BootstrapCollapse.prototype.setControllerProperties = function (ctrl) {
        var isString = typeof ctrl === 'string';
        var controller;
        if (isString) {
            controller = document.getElementById(ctrl);
        }
        else {
            controller = ctrl;
        }
        var id = this.collapse.id;
        controller.setAttribute('data-toggle', 'collapse');
        controller.setAttribute('aria-expanded', 'false');
        var prevAriaControls = (controller.getAttribute('aria-controls') || '').trim();
        if (controller.nodeName.toUpperCase() === 'A') {
            controller.onclick = function (event) {
                event.preventDefault();
                return false;
            };
            controller.setAttribute('href', "#" + id);
            controller.setAttribute('role', "button");
        }
        controller.setAttribute('data-target', prevAriaControls ? '.abt-collapse-multiple' : "#" + id);
        if (prevAriaControls) {
            if (prevAriaControls.trim().split(' ').length === 1) {
                document.getElementById("" + prevAriaControls).classList.add('abt-collapse-multiple');
            }
            this.collapse.classList.add('abt-collapse-multiple');
        }
        controller.setAttribute('aria-controls', id + " " + prevAriaControls);
    };
    BootstrapCollapse.prototype.setEvents = function () {
        var _this = this;
        if (this.bsShow) {
            $(this.collapse).on('show.bs.collapse', function () {
                if (_this.bsShow) {
                    _this.bsShow();
                }
            });
        }
        if (this.bsShown) {
            $(this.collapse).on('shown.bs.collapse', function () {
                if (_this.bsShown) {
                    _this.bsShown();
                }
            });
        }
        if (this.bsHide) {
            $(this.collapse).on('hide.bs.collapse', function () {
                if (_this.bsHide) {
                    _this.bsHide();
                }
            });
        }
        if (this.bsHidden) {
            $(this.collapse).on('hidden.bs.collapse', function () {
                if (_this.bsHidden) {
                    _this.bsHidden();
                }
            });
        }
    };
    BootstrapCollapse.prototype.attached = function () {
        this.setEvents();
        if (this.collapse.parentElement.parentElement.classList.contains('abt-accordion')) {
            this.collapse.setAttribute('data-parent', "#" + this.collapse.parentElement.parentElement.id);
        }
        if (this.controlledBy && !Array.isArray(this.controlledBy)) {
            this.setControllerProperties(this.controlledBy);
            return true;
        }
        else if (this.controlledBy && Array.isArray(this.controlledBy)) {
            var counter = this.controlledBy.length;
            while (counter--) {
                var controller = this.controlledBy[counter];
                this.setControllerProperties(controller);
            }
        }
        return true;
    };
    BootstrapCollapse.prototype.detached = function () {
        $(this.collapse).off('show.bs.collapse');
        $(this.collapse).off('shown.bs.collapse');
        $(this.collapse).off('hide.bs.collapse');
        $(this.collapse).off('hidden.bs.collapse');
        $(this.collapse).collapse('dispose');
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapCollapse.prototype, "controlledBy", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCollapse.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapCollapse.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapCollapse.prototype, "bsShow", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapCollapse.prototype, "bsShown", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapCollapse.prototype, "bsHide", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapCollapse.prototype, "bsHidden", void 0);
    BootstrapCollapse = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-collapse'),
        __metadata("design:paramtypes", [Object])
    ], BootstrapCollapse);
    return BootstrapCollapse;
}());
exports.BootstrapCollapse = BootstrapCollapse;
//# sourceMappingURL=abt-collapse.js.map
});
___scope___.file("components/bootstrap/collapse/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-collapse"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-collapse'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-accordion'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-accordion-item')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/common.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=common.js.map
});
___scope___.file("components/bootstrap/dropdown/abt-dropdown-item.js", function(exports, require, module, __filename, __dirname){

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
var abt_dropdown_selected_item_changed_1 = require("./abt-dropdown-selected-item-changed");
var BootstrapDropdownItem = (function () {
    function BootstrapDropdownItem(ea, element) {
        this.ea = ea;
        this.element = element;
        this.class = '';
        this.style = '';
        this.disabled = null;
    }
    BootstrapDropdownItem.prototype.attached = function () {
        this.dropdownId = this.item.parentElement.parentElement.getAttribute('data-id');
        this.disabled = this.disabled === '' || this.disabled;
        if (this.model !== undefined || this.value !== undefined) {
            var selectedValue = this.model !== undefined
                ? this.model
                : this.value !== undefined
                    ? this.value
                    : undefined;
            this.ea.publish(new abt_dropdown_selected_item_changed_1.BootstrapDropdownSelectedItemChanged(this.dropdownId, selectedValue, this.item.innerText, false));
        }
    };
    BootstrapDropdownItem.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        if (this.model !== undefined || this.value !== undefined) {
            var selectedValue = this.model !== undefined
                ? this.model
                : this.value !== undefined
                    ? this.value
                    : undefined;
            this.ea.publish(new abt_dropdown_selected_item_changed_1.BootstrapDropdownSelectedItemChanged(this.dropdownId, selectedValue, this.item.innerText));
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapDropdownItem.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapDropdownItem.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapDropdownItem.prototype, "disabled", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapDropdownItem.prototype, "value", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapDropdownItem.prototype, "model", void 0);
    BootstrapDropdownItem = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, Element),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-dropdown-item'),
        __metadata("design:paramtypes", [typeof (_a = typeof aurelia_event_aggregator_1.EventAggregator !== "undefined" && aurelia_event_aggregator_1.EventAggregator) === "function" && _a || Object, Object])
    ], BootstrapDropdownItem);
    return BootstrapDropdownItem;
    var _a;
}());
exports.BootstrapDropdownItem = BootstrapDropdownItem;
//# sourceMappingURL=abt-dropdown-item.js.map
});
___scope___.file("components/bootstrap/dropdown/abt-dropdown-selected-item-changed.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapDropdownSelectedItemChanged = (function () {
    function BootstrapDropdownSelectedItemChanged(parentId, selectedItem, selectedText, isValueChanged) {
        if (isValueChanged === void 0) { isValueChanged = true; }
        this.parentId = parentId;
        this.selectedItem = selectedItem;
        this.selectedText = selectedText;
        this.isValueChanged = isValueChanged;
    }
    return BootstrapDropdownSelectedItemChanged;
}());
exports.BootstrapDropdownSelectedItemChanged = BootstrapDropdownSelectedItemChanged;
//# sourceMappingURL=abt-dropdown-selected-item-changed.js.map
});
___scope___.file("components/bootstrap/dropdown/abt-dropdown.js", function(exports, require, module, __filename, __dirname){

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
var abt_dropdown_selected_item_changed_1 = require("./abt-dropdown-selected-item-changed");
var $ = require("jquery");
var uuid_1 = require("../../../utilities/vanilla/uuid");
var BootstrapDropDown = (function () {
    function BootstrapDropDown(element, ea, uuid, taskQueue) {
        this.element = element;
        this.ea = ea;
        this.taskQueue = taskQueue;
        this.alignRight = false;
        this.boundary = 'scrollParent';
        this.type = 'primary';
        this.offset = 0;
        this.flip = true;
        this.size = 'md';
        this.placement = '';
        this.split = false;
        this.style = '';
        this.class = '';
        this.disabled = false;
        this.menuClass = '';
        this.menuStyle = '';
        this.title = '';
        this.isBusy = false;
        this.placementClass = '';
        this.itemsValuesOrModels = [];
        this.task = null;
        this.subscription = null;
        this.id = uuid.Uuidv4ForId();
    }
    BootstrapDropDown.prototype.onClicked = function (event) {
        var _this = this;
        event.preventDefault();
        if (!this.click || this.disabled) {
            return;
        }
        if (this.task) {
            return;
        }
        this.isBusy = true;
        this.task = Promise.resolve(this.click({ event: event, target: this.element }))
            .then(function () { return _this.clickCompleted(); }, function () { return _this.clickCompleted(); });
    };
    BootstrapDropDown.prototype.clickCompleted = function () {
        this.task = null;
        this.isBusy = false;
    };
    BootstrapDropDown.prototype.disposeSubscription = function () {
        if (this.subscription !== null) {
            this.subscription.dispose();
            this.subscription = null;
        }
    };
    BootstrapDropDown.prototype.attached = function () {
        var _this = this;
        this.split = (this.split === '' && this.element.hasAttribute('split')) || this.split.toString() === 'true';
        this.alignRight = (this.alignRight === '' && this.element.hasAttribute('align-right')) || this.alignRight.toString() === 'true';
        this.element.children.item(0).setAttribute('data-id', this.id);
        switch (this.placement) {
            case 'top':
                this.placementClass = 'dropup';
                break;
            case 'right':
                this.placementClass = 'dropright';
                break;
            case 'left':
                this.placementClass = 'dropleft';
                break;
            default:
                this.placementClass = '';
                break;
        }
        this.taskQueue.queueTask(function () { return _this.afterAttached(); });
    };
    BootstrapDropDown.prototype.bind = function () {
        var _this = this;
        this.ea.subscribe(abt_dropdown_selected_item_changed_1.BootstrapDropdownSelectedItemChanged, function (changed) {
            if (changed.parentId !== _this.id) {
                return;
            }
            if (!changed.isValueChanged) {
                _this.itemsValuesOrModels.push({ value: changed.selectedItem, text: changed.selectedText });
                return;
            }
            _this.value = changed.selectedItem;
        });
    };
    BootstrapDropDown.prototype.afterAttached = function () {
        var _this = this;
        $(this.dropdown).dropdown();
        if (this.bsShow) {
            $(this.dropdown).on('show.bs.dropdown', function () {
                if (_this.bsShow) {
                    _this.bsShow();
                }
            });
        }
        if (this.bsShown) {
            $(this.dropdown).on('shown.bs.dropdown', function () {
                if (_this.bsShown) {
                    _this.bsShown();
                }
            });
        }
        if (this.bsHide) {
            $(this.dropdown).on('hide.bs.dropdown', function () {
                if (_this.bsHide) {
                    _this.bsHide();
                }
            });
        }
        if (this.bsHidden) {
            $(this.dropdown).on('hidden.bs.dropdown', function () {
                if (_this.bsHidden) {
                    _this.bsHidden();
                }
            });
        }
        if (this.value !== undefined) {
            this.valueChanged(this.value);
        }
    };
    BootstrapDropDown.prototype.valueChanged = function (newValue) {
        var _this = this;
        var hasMatcher = (this.matcher !== undefined && this.matcher !== null);
        var found = hasMatcher
            ? this.itemsValuesOrModels.find(function (x) {
                if (x.value === null || newValue === null) {
                    return x.value === newValue;
                }
                return _this.matcher(x.value, newValue);
            })
            : this.itemsValuesOrModels.find(function (x) { return x.value === newValue; });
        if (!found) {
            return;
        }
        this.title = found.text;
        if (this.changed) {
            this.changed({ selected: newValue });
        }
    };
    BootstrapDropDown.prototype.detached = function () {
        this.task = null;
        $(this.dropdown).off('show.bs.tab');
        $(this.dropdown).off('shown.bs.tab');
        $(this.dropdown).off('hide.bs.tab');
        $(this.dropdown).off('hidden.bs.tab');
        $(this.dropdown).dropdown('dispose');
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapDropDown.prototype, "alignRight", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapDropDown.prototype, "boundary", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapDropDown.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapDropDown.prototype, "offset", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], BootstrapDropDown.prototype, "flip", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapDropDown.prototype, "size", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapDropDown.prototype, "placement", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapDropDown.prototype, "split", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapDropDown.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapDropDown.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapDropDown.prototype, "disabled", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapDropDown.prototype, "menuClass", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapDropDown.prototype, "menuStyle", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapDropDown.prototype, "title", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapDropDown.prototype, "value", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapDropDown.prototype, "matcher", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapDropDown.prototype, "click", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapDropDown.prototype, "changed", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapDropDown.prototype, "bsShow", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapDropDown.prototype, "bsShown", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapDropDown.prototype, "bsHide", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapDropDown.prototype, "bsHidden", void 0);
    BootstrapDropDown = __decorate([
        aurelia_framework_1.inject(Element, aurelia_event_aggregator_1.EventAggregator, uuid_1.Uuid, aurelia_framework_1.TaskQueue),
        aurelia_framework_1.customElement('abt-dropdown'),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof aurelia_event_aggregator_1.EventAggregator !== "undefined" && aurelia_event_aggregator_1.EventAggregator) === "function" && _a || Object, typeof (_b = typeof uuid_1.Uuid !== "undefined" && uuid_1.Uuid) === "function" && _b || Object, typeof (_c = typeof aurelia_framework_1.TaskQueue !== "undefined" && aurelia_framework_1.TaskQueue) === "function" && _c || Object])
    ], BootstrapDropDown);
    return BootstrapDropDown;
    var _a, _b, _c;
}());
exports.BootstrapDropDown = BootstrapDropDown;
//# sourceMappingURL=abt-dropdown.js.map
});
___scope___.file("utilities/vanilla/uuid.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var Uuid = (function () {
    function Uuid() {
    }
    Uuid.prototype.uuidv4 = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    Uuid.prototype.Uuidv4ForId = function () {
        return 'aut_uuid_' + this.uuidv4().replace(new RegExp('-', 'g'), '');
    };
    Uuid = __decorate([
        aurelia_framework_1.singleton()
    ], Uuid);
    return Uuid;
}());
exports.Uuid = Uuid;
//# sourceMappingURL=uuid.js.map
});
___scope___.file("components/bootstrap/dropdown/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-dropdown"));
__export(require("./abt-dropdown-item"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-dropdown'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-dropdown-item'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-dropdown-divider.html'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-dropdown-header.html')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/float-input/abt-float-input.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapFloatInput = (function () {
    function BootstrapFloatInput() {
        this.placeholder = null;
        this.placeholderFontSize = null;
        this.labelFontSize = null;
        this.placeholderOpacity = null;
        this.placeholderTop = null;
        this.size = 'md';
        this.type = 'text';
        this.labelColor = null;
        this.placeholderColor = null;
    }
    BootstrapFloatInput.prototype.attached = function () {
        var id = this.floatInputLabel.id;
        var fontSize = '';
        var top = '';
        if (!this.floatInput.classList.contains('form-control')) {
            this.floatInput.classList.add('form-control');
        }
        if (this.floatInput.classList.contains('form-control-sm')) {
            this.size = 'sm';
        }
        if (this.floatInput.classList.contains('form-control-lg')) {
            this.size = 'lg';
        }
        if (this.size === 'sm') {
            this.floatInput.classList.add('form-control-sm');
            fontSize = '90%';
            top = '.5em';
        }
        else if (this.size === 'lg' || this.floatInput.classList.contains('form-control-lg')) {
            this.floatInput.classList.add('form-control-lg');
            fontSize = '120%';
            top = '.7em';
        }
        else {
            this.floatInput.classList.remove('form-control-sm');
            this.floatInput.classList.remove('form-control-lg');
            fontSize = '100%';
            top = '.7em';
        }
        if (this.floatInput.classList.contains('form-control')) {
            this.floatInputLabel.classList.add('has-float-label');
            var style = "\n                  #" + id + ".has-float-label .form-control:placeholder-shown:not(:focus) + * {\n                    color : " + (this.placeholderColor || 'black') + " !important;\n                    font-size: " + (this.placeholderFontSize || fontSize) + " !important;\n                    opacity: " + (this.placeholderOpacity || '.5') + " !important;\n                    top: " + (this.placeholderTop || top) + " !important;\n                  }\n                  #" + id + ".has-float-label label, #" + id + ".has-float-label > span\n                  {\n                    color : " + (this.labelColor || 'black') + " !important;\n                    font-size: " + (this.labelFontSize || '75%') + " !important;\n                  }";
            aurelia_framework_1.DOM.injectStyles(style, null, null, 's' + id);
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapFloatInput.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapFloatInput.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapFloatInput.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapFloatInput.prototype, "placeholder", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapFloatInput.prototype, "placeholderFontSize", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapFloatInput.prototype, "labelFontSize", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapFloatInput.prototype, "placeholderOpacity", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapFloatInput.prototype, "placeholderTop", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapFloatInput.prototype, "size", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapFloatInput.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapFloatInput.prototype, "labelColor", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapFloatInput.prototype, "placeholderColor", void 0);
    BootstrapFloatInput = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-float-input')
    ], BootstrapFloatInput);
    return BootstrapFloatInput;
}());
exports.BootstrapFloatInput = BootstrapFloatInput;
//# sourceMappingURL=abt-float-input.js.map
});
___scope___.file("components/bootstrap/float-input/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-float-input"));
function configure(config) {
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-float-input')]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/alert/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/badge/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/breadcrumb/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/button/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/card/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/collapse/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/dropdown/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/inputgroup/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/modal/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/navbar/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/navs/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/password/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/pagination/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/progressbar/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/scrollspy/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/star-rate/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/toggle/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/float-input/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/jumbotron/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/tokenize/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/tooltip/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/popover/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/carousel/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/listgroup/index'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/inputgroup/abt-inputgroup-append.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapInputGroupAppendCustomElement = (function () {
    function BootstrapInputGroupAppendCustomElement() {
        this.class = '';
        this.style = '';
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapInputGroupAppendCustomElement.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapInputGroupAppendCustomElement.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapInputGroupAppendCustomElement.prototype, "id", void 0);
    BootstrapInputGroupAppendCustomElement = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-inputgroup-append')
    ], BootstrapInputGroupAppendCustomElement);
    return BootstrapInputGroupAppendCustomElement;
}());
exports.BootstrapInputGroupAppendCustomElement = BootstrapInputGroupAppendCustomElement;
//# sourceMappingURL=abt-inputgroup-append.js.map
});
___scope___.file("components/bootstrap/inputgroup/abt-inputgroup-prepend.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapInputGroupPrependCustomElement = (function () {
    function BootstrapInputGroupPrependCustomElement() {
        this.class = '';
        this.style = '';
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapInputGroupPrependCustomElement.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapInputGroupPrependCustomElement.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapInputGroupPrependCustomElement.prototype, "id", void 0);
    BootstrapInputGroupPrependCustomElement = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-inputgroup-prepend')
    ], BootstrapInputGroupPrependCustomElement);
    return BootstrapInputGroupPrependCustomElement;
}());
exports.BootstrapInputGroupPrependCustomElement = BootstrapInputGroupPrependCustomElement;
//# sourceMappingURL=abt-inputgroup-prepend.js.map
});
___scope___.file("components/bootstrap/inputgroup/abt-inputgroup-text.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapInputGroupTextCustomElement = (function () {
    function BootstrapInputGroupTextCustomElement() {
        this.class = '';
        this.style = '';
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapInputGroupTextCustomElement.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapInputGroupTextCustomElement.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapInputGroupTextCustomElement.prototype, "id", void 0);
    BootstrapInputGroupTextCustomElement = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-inputgroup-text')
    ], BootstrapInputGroupTextCustomElement);
    return BootstrapInputGroupTextCustomElement;
}());
exports.BootstrapInputGroupTextCustomElement = BootstrapInputGroupTextCustomElement;
//# sourceMappingURL=abt-inputgroup-text.js.map
});
___scope___.file("components/bootstrap/inputgroup/abt-inputgroup.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapInputGroupCustomElement = (function () {
    function BootstrapInputGroupCustomElement() {
        this.class = '';
        this.style = '';
        this.size = 'md';
    }
    BootstrapInputGroupCustomElement.prototype.attached = function () {
        if (this.size === 'sm') {
            this.inputGroup.classList.add('input-group-sm');
        }
        else if (this.size === 'lg') {
            this.inputGroup.classList.add('input-group-lg');
        }
        else {
            this.inputGroup.classList.remove('input-group-sm');
            this.inputGroup.classList.remove('input-group-lg');
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapInputGroupCustomElement.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapInputGroupCustomElement.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapInputGroupCustomElement.prototype, "size", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapInputGroupCustomElement.prototype, "id", void 0);
    BootstrapInputGroupCustomElement = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-inputgroup')
    ], BootstrapInputGroupCustomElement);
    return BootstrapInputGroupCustomElement;
}());
exports.BootstrapInputGroupCustomElement = BootstrapInputGroupCustomElement;
//# sourceMappingURL=abt-inputgroup.js.map
});
___scope___.file("components/bootstrap/inputgroup/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-inputgroup"));
__export(require("./abt-inputgroup-append"));
__export(require("./abt-inputgroup-prepend"));
__export(require("./abt-inputgroup-text"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-inputgroup'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-inputgroup-append'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-inputgroup-prepend'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-inputgroup-text')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/jumbotron/abt-jumbotron.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_binding_1 = require("aurelia-binding");
var BootstrapJumbotron = (function () {
    function BootstrapJumbotron(element) {
        this.element = element;
        this.style = '';
        this.class = '';
        this.fluid = false;
    }
    BootstrapJumbotron.prototype.attached = function () {
        var onlyDismissibleAttribute = (this.fluid === '' && this.element.hasAttribute('fluid'));
        this.fluid = onlyDismissibleAttribute || this.fluid.toString() === 'true';
    };
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapJumbotron.prototype, "style", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapJumbotron.prototype, "class", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapJumbotron.prototype, "fluid", void 0);
    BootstrapJumbotron = __decorate([
        aurelia_dependency_injection_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-jumbotron'),
        __metadata("design:paramtypes", [Object])
    ], BootstrapJumbotron);
    return BootstrapJumbotron;
}());
exports.BootstrapJumbotron = BootstrapJumbotron;
//# sourceMappingURL=abt-jumbotron.js.map
});
___scope___.file("components/bootstrap/jumbotron/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-jumbotron"));
function configure(config) {
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./abt-jumbotron'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/listgroup/abt-listgroup-item.js", function(exports, require, module, __filename, __dirname){

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
var $ = require("jquery");
var ListGroupItemCustomElement = (function () {
    function ListGroupItemCustomElement() {
        this.active = false;
        this.disabled = false;
    }
    ListGroupItemCustomElement.prototype.attached = function () {
        var isActive = (this.active === '' && this.listGroupItemTemplate.hasAttribute('active')) || this.active.toString() === 'true';
        var isDisabled = (this.disabled === '' && this.listGroupItemTemplate.hasAttribute('disabled')) || this.disabled.toString() === 'true';
        if (isActive) {
            this.listGroupItem.classList.add('active');
        }
        if (isDisabled) {
            this.listGroupItem.classList.add('disabled');
        }
        if ((this.href || this.click) && !this.listGroupItem.classList.contains('disabled')) {
            $(this.listGroupItem).removeClass('abt-listgroup-item-disabled');
        }
        else {
            $(this.listGroupItem).addClass('abt-listgroup-item-disabled');
        }
        if (this.type) {
            this.listGroupItem.classList.add("list-group-item-" + this.type);
        }
    };
    ListGroupItemCustomElement.prototype.onClick = function (event) {
        if (this.click) {
            this.click({ event: event });
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], ListGroupItemCustomElement.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], ListGroupItemCustomElement.prototype, "href", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], ListGroupItemCustomElement.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], ListGroupItemCustomElement.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], ListGroupItemCustomElement.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], ListGroupItemCustomElement.prototype, "click", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], ListGroupItemCustomElement.prototype, "active", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], ListGroupItemCustomElement.prototype, "disabled", void 0);
    ListGroupItemCustomElement = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-listgroup-item')
    ], ListGroupItemCustomElement);
    return ListGroupItemCustomElement;
}());
exports.ListGroupItemCustomElement = ListGroupItemCustomElement;
//# sourceMappingURL=abt-listgroup-item.js.map
});
___scope___.file("components/bootstrap/listgroup/abt-listgroup.js", function(exports, require, module, __filename, __dirname){

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
var ListGroupCustomElement = (function () {
    function ListGroupCustomElement() {
        this.flush = false;
    }
    ListGroupCustomElement.prototype.attached = function () {
        var isFlush = (this.flush === '' && this.listGroupTemplate.hasAttribute('active')) || this.flush.toString() === 'true';
        if (isFlush) {
            this.listGroup.classList.add('list-group-flush');
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], ListGroupCustomElement.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], ListGroupCustomElement.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], ListGroupCustomElement.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], ListGroupCustomElement.prototype, "flush", void 0);
    ListGroupCustomElement = __decorate([
        aurelia_framework_1.customElement('abt-listgroup')
    ], ListGroupCustomElement);
    return ListGroupCustomElement;
}());
exports.ListGroupCustomElement = ListGroupCustomElement;
//# sourceMappingURL=abt-listgroup.js.map
});
___scope___.file("components/bootstrap/listgroup/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-listgroup"));
__export(require("./abt-listgroup-item"));
function configure(config) {
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-listgroup')]);
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-listgroup-item')]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/modal/abt-modal-body.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapModalBody = (function () {
    function BootstrapModalBody() {
        this.style = '';
        this.class = '';
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapModalBody.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapModalBody.prototype, "class", void 0);
    BootstrapModalBody = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-modal-body')
    ], BootstrapModalBody);
    return BootstrapModalBody;
}());
exports.BootstrapModalBody = BootstrapModalBody;
//# sourceMappingURL=abt-modal-body.js.map
});
___scope___.file("components/bootstrap/modal/abt-modal-footer.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapModalFooter = (function () {
    function BootstrapModalFooter() {
        this.style = '';
        this.class = '';
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapModalFooter.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapModalFooter.prototype, "class", void 0);
    BootstrapModalFooter = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-modal-footer')
    ], BootstrapModalFooter);
    return BootstrapModalFooter;
}());
exports.BootstrapModalFooter = BootstrapModalFooter;
//# sourceMappingURL=abt-modal-footer.js.map
});
___scope___.file("components/bootstrap/modal/abt-modal-header.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapModalHeader = (function () {
    function BootstrapModalHeader() {
        this.dismissible = false;
        this.style = '';
        this.class = '';
    }
    BootstrapModalHeader.prototype.attached = function () {
        var x = this.header.parentElement.parentElement.parentElement.getAttribute('data-abt-dismissible');
        this.dismissible = x === 'true';
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapModalHeader.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapModalHeader.prototype, "class", void 0);
    BootstrapModalHeader = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-modal-header')
    ], BootstrapModalHeader);
    return BootstrapModalHeader;
}());
exports.BootstrapModalHeader = BootstrapModalHeader;
//# sourceMappingURL=abt-modal-header.js.map
});
___scope___.file("components/bootstrap/modal/abt-modal-title.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapModalTitle = (function () {
    function BootstrapModalTitle() {
        this.style = '';
        this.class = '';
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapModalTitle.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapModalTitle.prototype, "class", void 0);
    BootstrapModalTitle = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-modal-title')
    ], BootstrapModalTitle);
    return BootstrapModalTitle;
}());
exports.BootstrapModalTitle = BootstrapModalTitle;
//# sourceMappingURL=abt-modal-title.js.map
});
___scope___.file("components/bootstrap/modal/abt-modal.js", function(exports, require, module, __filename, __dirname){

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
var $ = require("jquery");
var BootstrapModal = (function () {
    function BootstrapModal(element) {
        this.element = element;
        this.class = '';
        this.style = '';
        this.size = 'md';
        this.animate = true;
        this.dismissible = true;
        this.centered = false;
        this.backdrop = true;
        this.keyboard = true;
        this.focus = true;
        this.visible = false;
    }
    BootstrapModal.prototype.setOpenerProperties = function (open) {
        var isString = typeof open === 'string';
        var opener;
        if (isString) {
            opener = document.getElementById(open);
        }
        else {
            opener = open;
        }
        var id = this.modal.id;
        opener.setAttribute('data-toggle', 'modal');
        opener.setAttribute('data-target', "#" + id);
    };
    BootstrapModal.prototype.setEvents = function () {
        var _this = this;
        if (this.bsShow) {
            $(this.modal).on('show.bs.modal', function (e) {
                if (_this.bsShow) {
                    _this.bsShow({ relatedTarget: e.relatedTarget });
                }
            });
        }
        if (this.bsShown) {
            $(this.modal).on('shown.bs.modal', function (e) {
                if (_this.bsShown) {
                    _this.bsShown({ relatedTarget: e.relatedTarget });
                }
            });
        }
        if (this.bsHide) {
            $(this.modal).on('hide.bs.modal', function () {
                if (_this.bsHide) {
                    _this.bsHide();
                }
            });
        }
        if (this.bsHidden) {
            $(this.modal).on('hidden.bs.modal', function () {
                if (_this.bsHidden) {
                    _this.bsHidden();
                }
            });
        }
    };
    BootstrapModal.prototype.visibleChanged = function (newValue) {
        var nv = Boolean(newValue);
        if (nv) {
            $(this.modal).modal('show');
            return;
        }
        $(this.modal).modal('hide');
    };
    BootstrapModal.prototype.attached = function () {
        var _this = this;
        this.animate = this.animate === true || this.animate === 'true';
        this.centered = this.centered === true || this.centered === 'true';
        this.dismissible = this.dismissible === true || this.dismissible === 'true';
        this.backdrop = this.backdrop === true || this.backdrop === 'true';
        this.keyboard = this.keyboard === true || this.keyboard === 'true';
        this.focus = this.focus === true || this.focus === 'true';
        this.setEvents();
        if (this.openBy) {
            this.setOpenerProperties(this.openBy);
        }
        else if (this.visible !== undefined) {
            this.visibleChanged(this.visible);
            $(this.modal).on('hide.bs.modal', function () {
                _this.visible = false;
            });
        }
        else {
            throw Error("The 'abt-modal' should have either 'open-by' or 'visible' attribute");
        }
        $(this.modal).modal({
            backdrop: this.backdrop,
            keyboard: this.keyboard,
            focus: this.focus,
            show: false
        });
    };
    BootstrapModal.prototype.detached = function () {
        $(this.modal).off('show.bs.modal');
        $(this.modal).off('shown.bs.modal');
        $(this.modal).off('hide.bs.modal');
        $(this.modal).off('hidden.bs.modal');
        $(this.modal).modal('hide');
        $(this.modal).modal('dispose');
        $(this.modal).remove();
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapModal.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapModal.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapModal.prototype, "size", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapModal.prototype, "animate", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapModal.prototype, "dismissible", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapModal.prototype, "centered", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapModal.prototype, "backdrop", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapModal.prototype, "keyboard", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapModal.prototype, "focus", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapModal.prototype, "openBy", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapModal.prototype, "visible", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapModal.prototype, "bsShow", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapModal.prototype, "bsShown", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapModal.prototype, "bsHide", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapModal.prototype, "bsHidden", void 0);
    BootstrapModal = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('abt-modal'),
        __metadata("design:paramtypes", [Object])
    ], BootstrapModal);
    return BootstrapModal;
}());
exports.BootstrapModal = BootstrapModal;
//# sourceMappingURL=abt-modal.js.map
});
___scope___.file("components/bootstrap/modal/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-modal"));
__export(require("./abt-modal-title"));
__export(require("./abt-modal-header"));
__export(require("./abt-modal-body"));
__export(require("./abt-modal-footer"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-modal'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-modal-header'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-modal-title'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-modal-body'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-modal-footer')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/navbar/abt-navbar-brand.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var BootstrapNavBarBrand = (function () {
    function BootstrapNavBarBrand() {
        this.heading = false;
    }
    BootstrapNavBarBrand.prototype.onClick = function (event) {
        if (this.click) {
            this.click({ event: event });
        }
        return true;
    };
    BootstrapNavBarBrand.prototype.attached = function () {
        var isHeading = Boolean(this.heading) || this.navbarBrandTemplate.hasAttribute('heading');
        if (isHeading) {
            this.navbarBrand.classList.add('abt-navbar-brand-heading');
        }
        else {
            this.navbarBrand.classList.remove('abt-navbar-brand-heading');
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarBrand.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarBrand.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapNavBarBrand.prototype, "click", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapNavBarBrand.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarBrand.prototype, "href", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapNavBarBrand.prototype, "heading", void 0);
    BootstrapNavBarBrand = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_templating_1.customElement('abt-navbar-brand')
    ], BootstrapNavBarBrand);
    return BootstrapNavBarBrand;
}());
exports.BootstrapNavBarBrand = BootstrapNavBarBrand;
//# sourceMappingURL=abt-navbar-brand.js.map
});
___scope___.file("components/bootstrap/navbar/abt-navbar-collapser.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var BootstrapNavBarCollapser = (function () {
    function BootstrapNavBarCollapser() {
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarCollapser.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarCollapser.prototype, "style", void 0);
    BootstrapNavBarCollapser = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_templating_1.customElement('abt-navbar-collapser')
    ], BootstrapNavBarCollapser);
    return BootstrapNavBarCollapser;
}());
exports.BootstrapNavBarCollapser = BootstrapNavBarCollapser;
//# sourceMappingURL=abt-navbar-collapser.js.map
});
___scope___.file("components/bootstrap/navbar/abt-navbar-dropdown-divider.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var BootstrapNavBarDropDownDivider = (function () {
    function BootstrapNavBarDropDownDivider() {
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDownDivider.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDownDivider.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDownDivider.prototype, "id", void 0);
    BootstrapNavBarDropDownDivider = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_templating_1.customElement('abt-navbar-dropdown-divider')
    ], BootstrapNavBarDropDownDivider);
    return BootstrapNavBarDropDownDivider;
}());
exports.BootstrapNavBarDropDownDivider = BootstrapNavBarDropDownDivider;
//# sourceMappingURL=abt-navbar-dropdown-divider.js.map
});
___scope___.file("components/bootstrap/navbar/abt-navbar-dropdown-item.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var BootstrapNavBarDropDownItem = (function () {
    function BootstrapNavBarDropDownItem() {
    }
    BootstrapNavBarDropDownItem.prototype.onClick = function (event) {
        if (this.click) {
            this.click({ event: event });
        }
        return true;
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDownItem.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDownItem.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDownItem.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDownItem.prototype, "href", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapNavBarDropDownItem.prototype, "click", void 0);
    BootstrapNavBarDropDownItem = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_templating_1.customElement('abt-navbar-dropdown-item')
    ], BootstrapNavBarDropDownItem);
    return BootstrapNavBarDropDownItem;
}());
exports.BootstrapNavBarDropDownItem = BootstrapNavBarDropDownItem;
//# sourceMappingURL=abt-navbar-dropdown-item.js.map
});
___scope___.file("components/bootstrap/navbar/abt-navbar-dropdown-mega-item.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var BootstrapNavBarDropDownMegaItem = (function () {
    function BootstrapNavBarDropDownMegaItem() {
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDownMegaItem.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDownMegaItem.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDownMegaItem.prototype, "id", void 0);
    BootstrapNavBarDropDownMegaItem = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_templating_1.customElement('abt-navbar-dropdown-mega-item')
    ], BootstrapNavBarDropDownMegaItem);
    return BootstrapNavBarDropDownMegaItem;
}());
exports.BootstrapNavBarDropDownMegaItem = BootstrapNavBarDropDownMegaItem;
//# sourceMappingURL=abt-navbar-dropdown-mega-item.js.map
});
___scope___.file("components/bootstrap/navbar/abt-navbar-dropdown.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var BootstrapNavBarDropDown = (function () {
    function BootstrapNavBarDropDown() {
        this.fulWidth = false;
        this.placement = 'down';
    }
    BootstrapNavBarDropDown.prototype.attached = function () {
        var _this = this;
        switch (this.placement) {
            case 'up':
                this.navListDropDown.classList.add('dropup');
                break;
            case 'right':
                this.navListDropDown.classList.add('dropright');
                break;
            case 'left':
                this.navListDropDown.classList.add('dropleft');
                break;
            case 'down':
                this.navListDropDown.classList.add('dropdown');
                break;
        }
        $(this.navListDropDown).on('shown.bs.dropdown', function () {
            if (!_this.dropDownMenu.classList.contains('abt-dropdown-menu-position-calculated')) {
                var top = Number(window.getComputedStyle(_this.dropDownMenu, null).getPropertyValue('top').replace('px', ''));
                var bottom = Number(window.getComputedStyle(_this.dropDownMenu, null).getPropertyValue('bottom').replace('px', ''));
                switch (_this.placement) {
                    case 'up':
                        bottom -= 10;
                        top += 10;
                        $(_this.dropDownMenu).css('bottom', bottom + "px");
                        break;
                    case 'right':
                        break;
                    case 'left':
                        break;
                    case 'down':
                        top -= 10;
                        break;
                }
                $(_this.dropDownMenu).css('top', top + "px");
                _this.dropDownMenu.classList.add('abt-dropdown-menu-position-calculated');
            }
        });
        var isMegaMenuFullWidth = this.navDropDown.hasAttribute('full-width') || Boolean(this.fulWidth);
        if (isMegaMenuFullWidth) {
            this.navListDropDown.classList.add('navbar-megamenu-fullwidth');
        }
        else {
            this.navListDropDown.classList.remove('navbar-megamenu-fullwidth');
        }
    };
    BootstrapNavBarDropDown.prototype.onClick = function (event) {
        if (this.click) {
            this.click({ event: event });
        }
        return true;
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapNavBarDropDown.prototype, "fulWidth", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDown.prototype, "title", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapNavBarDropDown.prototype, "click", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDown.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDown.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDown.prototype, "linkClass", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDown.prototype, "linkStyle", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDown.prototype, "menuClass", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDown.prototype, "menuStyle", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarDropDown.prototype, "placement", void 0);
    BootstrapNavBarDropDown = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_templating_1.customElement('abt-navbar-dropdown')
    ], BootstrapNavBarDropDown);
    return BootstrapNavBarDropDown;
}());
exports.BootstrapNavBarDropDown = BootstrapNavBarDropDown;
//# sourceMappingURL=abt-navbar-dropdown.js.map
});
___scope___.file("components/bootstrap/navbar/abt-navbar-link.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var BootstrapNavBarLink = (function () {
    function BootstrapNavBarLink() {
        this.active = false;
        this.disabled = false;
    }
    BootstrapNavBarLink.prototype.attached = function () {
        var isActive = Boolean(this.active) || this.navItem.hasAttribute('active');
        var isDisabled = Boolean(this.disabled) || this.navItem.hasAttribute('disabled');
        if (isActive) {
            this.navItemLink.classList.add('active');
            this.navItemLink.classList.remove('disabled');
        }
        if (isDisabled) {
            this.navItemLink.classList.remove('active');
            this.navItemLink.classList.add('disabled');
        }
    };
    BootstrapNavBarLink.prototype.onClick = function (event) {
        if (this.click) {
            this.click({ event: event });
        }
        return true;
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarLink.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarLink.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapNavBarLink.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarLink.prototype, "href", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarLink.prototype, "linkClass", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarLink.prototype, "linkStyle", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapNavBarLink.prototype, "active", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapNavBarLink.prototype, "disabled", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapNavBarLink.prototype, "click", void 0);
    BootstrapNavBarLink = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_templating_1.customElement('abt-navbar-link')
    ], BootstrapNavBarLink);
    return BootstrapNavBarLink;
}());
exports.BootstrapNavBarLink = BootstrapNavBarLink;
//# sourceMappingURL=abt-navbar-link.js.map
});
___scope___.file("components/bootstrap/navbar/abt-navbar-nav.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var BootstrapNavBarNav = (function () {
    function BootstrapNavBarNav() {
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarNav.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarNav.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapNavBarNav.prototype, "id", void 0);
    BootstrapNavBarNav = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_templating_1.customElement('abt-navbar-nav')
    ], BootstrapNavBarNav);
    return BootstrapNavBarNav;
}());
exports.BootstrapNavBarNav = BootstrapNavBarNav;
//# sourceMappingURL=abt-navbar-nav.js.map
});
___scope___.file("components/bootstrap/navbar/abt-navbar-text.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var BootstrapNavBarText = (function () {
    function BootstrapNavBarText() {
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarText.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarText.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapNavBarText.prototype, "id", void 0);
    BootstrapNavBarText = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_templating_1.customElement('abt-navbar-text')
    ], BootstrapNavBarText);
    return BootstrapNavBarText;
}());
exports.BootstrapNavBarText = BootstrapNavBarText;
//# sourceMappingURL=abt-navbar-text.js.map
});
___scope___.file("components/bootstrap/navbar/abt-navbar-toggler.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var BootstrapNavBarToggler = (function () {
    function BootstrapNavBarToggler() {
        this.togglerIcon = 'navbar-toggler-icon';
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarToggler.prototype, "togglerIcon", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarToggler.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBarToggler.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapNavBarToggler.prototype, "id", void 0);
    BootstrapNavBarToggler = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_templating_1.customElement('abt-navbar-toggler')
    ], BootstrapNavBarToggler);
    return BootstrapNavBarToggler;
}());
exports.BootstrapNavBarToggler = BootstrapNavBarToggler;
//# sourceMappingURL=abt-navbar-toggler.js.map
});
___scope___.file("components/bootstrap/navbar/abt-navbar.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var BootstrapNavBar = (function () {
    function BootstrapNavBar() {
        this.navbarColorType = 'light';
        this.backgroundColorType = 'light';
        this.expandSize = 'lg';
        this.placement = '';
    }
    BootstrapNavBar.prototype.attached = function () {
        if (this.navbarColorType) {
            this.navbar.classList.add("navbar-" + this.navbarColorType);
        }
        if (this.backgroundColorType) {
            this.navbar.classList.add("bg-" + this.backgroundColorType);
        }
        if (this.expandSize) {
            this.navbar.classList.add("navbar-expand-" + this.expandSize);
        }
        else {
            this.navbar.classList.remove("navbar-expand-" + this.expandSize);
        }
        var navbarToggler = this.navbar.querySelector('.abt-navbar-toggler');
        var navbarCollapser = this.navbar.querySelector('.abt-navbar-collapser');
        if (navbarToggler && navbarCollapser) {
            navbarToggler.setAttribute('data-target', "#" + navbarCollapser.id);
            navbarToggler.setAttribute('aria-controls', "" + navbarCollapser.id);
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBar.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBar.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapNavBar.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBar.prototype, "navbarColorType", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBar.prototype, "backgroundColorType", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBar.prototype, "expandSize", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavBar.prototype, "placement", void 0);
    BootstrapNavBar = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_templating_1.customElement('abt-navbar'),
        aurelia_framework_1.containerless()
    ], BootstrapNavBar);
    return BootstrapNavBar;
}());
exports.BootstrapNavBar = BootstrapNavBar;
//# sourceMappingURL=abt-navbar.js.map
});
___scope___.file("components/bootstrap/navbar/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-navbar"));
__export(require("./abt-navbar-brand"));
__export(require("./abt-navbar-link"));
__export(require("./abt-navbar-dropdown"));
__export(require("./abt-navbar-dropdown-item"));
__export(require("./abt-navbar-dropdown-divider"));
__export(require("./abt-navbar-toggler"));
__export(require("./abt-navbar-text"));
__export(require("./abt-navbar-dropdown-mega-item"));
__export(require("./abt-navbar-collapser"));
__export(require("./abt-navbar-nav"));
function configure(config) {
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-navbar')]);
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-navbar-brand')]);
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-navbar-link')]);
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-navbar-dropdown')]);
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-navbar-dropdown-item')]);
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-navbar-dropdown-divider')]);
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-navbar-toggler')]);
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-navbar-text')]);
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-navbar-dropdown-mega-item')]);
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-navbar-collapser')]);
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-navbar-nav')]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/navs/abt-nav-item.js", function(exports, require, module, __filename, __dirname){

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
var uuid_1 = require("../../../utilities/vanilla/uuid");
var BootstrapNavItem = (function () {
    function BootstrapNavItem(element, uuid) {
        this.uuid = uuid;
        this.active = false;
        this.disabled = false;
        this.isFade = false;
        this.element = element;
    }
    BootstrapNavItem.prototype.attached = function () {
        var navComponent;
        var navs;
        var tab_content;
        navs = this.tab_header.parentElement;
        tab_content = navs.parentElement.parentElement.children.item(1).children.item(0);
        var onlyActiveAttribute = (this.active === '' && this.element.hasAttribute('active'));
        this.active = onlyActiveAttribute || this.active === 'true' || this.active === true;
        var onlyDisabledAttribute = (this.disabled === '' && this.element.hasAttribute('disabled'));
        this.disabled = onlyDisabledAttribute || this.disabled === 'true' || this.disabled === true;
        navs.removeChild(this.tab_body);
        var id = this.element.hasAttribute('id') ? this.element.getAttribute('id') : this.uuid.Uuidv4ForId();
        if (this.tab_body.textContent.length > 8) {
            navComponent = navs.parentElement.parentElement.parentElement;
            var tab_body_id = id + "-tab-body";
            this.isFade =
                navComponent.hasAttribute('fade') &&
                    (navComponent.getAttribute('fade') === ''
                        ||
                            navComponent.getAttribute('fade') === 'true');
            var isPill = navComponent.hasAttribute('pills') &&
                (navComponent.getAttribute('pills') === ''
                    ||
                        navComponent.getAttribute('pills') === 'true');
            var isTabs = navComponent.hasAttribute('tabs') &&
                (navComponent.getAttribute('tabs') === ''
                    ||
                        navComponent.getAttribute('tabs') === 'true');
            var data_toggle = isTabs
                ? 'tab'
                : isPill
                    ? 'pill'
                    : '';
            this.tab_header.setAttribute('data-toggle', data_toggle);
            this.tab_header.setAttribute('role', 'tab');
            this.tab_header.setAttribute('aria-controls', "" + tab_body_id);
            this.tab_header.setAttribute('aria-selected', "" + this.active);
            this.tab_header.setAttribute('href', "#" + tab_body_id);
            this.tab_body.setAttribute('id', "" + tab_body_id);
            this.tab_body.setAttribute('aria-labelledby', "" + id);
            tab_content.appendChild(this.tab_body);
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavItem.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavItem.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavItem.prototype, "href", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavItem.prototype, "title", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapNavItem.prototype, "active", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapNavItem.prototype, "disabled", void 0);
    BootstrapNavItem = __decorate([
        aurelia_framework_1.inject(Element, uuid_1.Uuid),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-nav-item'),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof uuid_1.Uuid !== "undefined" && uuid_1.Uuid) === "function" && _a || Object])
    ], BootstrapNavItem);
    return BootstrapNavItem;
    var _a;
}());
exports.BootstrapNavItem = BootstrapNavItem;
//# sourceMappingURL=abt-nav-item.js.map
});
___scope___.file("components/bootstrap/navs/abt-navs.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var $ = require("jquery");
var BootstrapNavs = (function () {
    function BootstrapNavs(element) {
        this.element = element;
        this.navsVerticalClass = 'col-sm-3';
        this.contentVerticalClass = 'col-sm-9';
        this.tabs = false;
        this.pills = false;
        this.vertical = false;
        this.justify = false;
        this.fill = false;
        this.beTab = true;
        this.bePills = false;
    }
    BootstrapNavs.prototype.attached = function () {
        var onlyPillsAttribute = (this.pills === '' && this.element.hasAttribute('pills'));
        this.pills = onlyPillsAttribute || this.pills.toString() === 'true';
        var onlyTabsAttribute = (this.tabs === '' && this.element.hasAttribute('tabs'));
        this.tabs = onlyTabsAttribute || this.tabs.toString() === 'true';
        var onlyVerticalAttribute = (this.vertical === '' && this.element.hasAttribute('vertical'));
        this.vertical = onlyVerticalAttribute || this.vertical.toString() === 'true';
        var onlyJustifiedAttribute = (this.justify === '' && this.element.hasAttribute('justify'));
        this.justify = onlyJustifiedAttribute || this.justify.toString() === 'true';
        var onlyFillAttribute = (this.fill === '' && this.element.hasAttribute('fill'));
        this.fill = onlyFillAttribute || this.fill.toString() === 'true';
        this.beTab = this.tabs;
        this.bePills = this.pills;
        if (this.justify && this.fill) {
            var error = new Error("The [abt-navs] should have either 'fill' or 'justify' attributes, and not both of them simultaneously.");
            throw error;
        }
        var children = this.element.children.item(0).children.item(0).getElementsByTagName('a');
        $(children).tab();
        this.handle_events();
    };
    BootstrapNavs.prototype.handle_events = function () {
        var _this = this;
        var children = this.element.children.item(0).children.item(0).getElementsByTagName('a');
        if (this.bsShow) {
            $(children).on('show.bs.tab', function (event) {
                if (_this.bsShow) {
                    _this.bsShow({ activeTab: event.target, prevTab: event.relatedTarget });
                }
            });
        }
        if (this.bsShown) {
            $(children).on('shown.bs.tab', function (event) {
                if (_this.bsShown) {
                    _this.bsShown({ activeTab: event.target, prevTab: event.relatedTarget });
                }
            });
        }
        if (this.bsHide) {
            $(children).on('hide.bs.tab', function (event) {
                if (_this.bsHide) {
                    _this.bsHide({ activeTab: event.target, prevTab: event.relatedTarget });
                }
            });
        }
        if (this.bsHidden) {
            $(children).on('hidden.bs.tab', function (event) {
                if (_this.bsHidden) {
                    _this.bsHidden({ activeTab: event.target, prevTab: event.relatedTarget });
                }
            });
        }
    };
    BootstrapNavs.prototype.detached = function () {
        var children = this.element.children.item(0).children.item(0).getElementsByTagName('a');
        $(children).off('show.bs.tab');
        $(children).off('shown.bs.tab');
        $(children).off('hide.bs.tab');
        $(children).off('hidden.bs.tab');
        $(children).tab('dispose');
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavs.prototype, "navsVerticalClass", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavs.prototype, "contentVerticalClass", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavs.prototype, "navsClass", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavs.prototype, "navsStyle", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavs.prototype, "contentClass", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapNavs.prototype, "contentStyle", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapNavs.prototype, "bsShow", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapNavs.prototype, "bsHide", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapNavs.prototype, "bsShown", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapNavs.prototype, "bsHidden", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapNavs.prototype, "tabs", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapNavs.prototype, "pills", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapNavs.prototype, "vertical", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapNavs.prototype, "justify", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapNavs.prototype, "fill", void 0);
    BootstrapNavs = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_templating_1.customElement('abt-navs'),
        __metadata("design:paramtypes", [Object])
    ], BootstrapNavs);
    return BootstrapNavs;
}());
exports.BootstrapNavs = BootstrapNavs;
//# sourceMappingURL=abt-navs.js.map
});
___scope___.file("components/bootstrap/navs/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-navs"));
__export(require("./abt-nav-item"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-navs'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-nav-item')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/pagination/abt-pagination.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapPaginationCustomElement = (function () {
    function BootstrapPaginationCustomElement() {
        this.totalPages = 1;
        this.selectedPage = 1;
        this.visiblePages = 1;
        this.hideOnlyOnePage = true;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.showGoto = false;
        this.template = '%s';
        this.size = 'md';
        this.firstText = 'First';
        this.lastText = 'Last';
        this.prevText = 'Previous';
        this.nextText = 'Next';
        this.loop = false;
        this.showNumbers = false;
        this.pages = [];
    }
    BootstrapPaginationCustomElement.prototype.createInput = function (value, min, max, height) {
        var input = document.createElement('input');
        input.id = 'abt-pagination-goto-item';
        input.type = 'number';
        input.classList.add('form-control');
        input.value = value.toString();
        input.min = min.toString();
        input.max = max.toString();
        input.style.height = height.toString() + 'px';
        return input;
    };
    BootstrapPaginationCustomElement.prototype.onClick = function (event, selectedPageNumber, prevPageNumber, nextPageNumber) {
        var _this = this;
        if (!Number(selectedPageNumber)) {
            if (!(selectedPageNumber === 'prev' || selectedPageNumber === 'next' || event === null)) {
                var currentElement = event.target;
                var parentElement = currentElement.parentElement;
                var elementHeight = Number(parentElement.offsetHeight);
                currentElement.remove();
                var inputElement_1 = this.createInput(Number(prevPageNumber) + 1, Number(prevPageNumber) + 1, Number(nextPageNumber) - 1, elementHeight);
                parentElement.appendChild(inputElement_1);
                $(inputElement_1).focus();
                $(inputElement_1).blur(function () {
                    if (inputElement_1) {
                        inputElement_1.remove();
                        _this.onClick(null, inputElement_1.value, Number(inputElement_1.value) - 1, Number(inputElement_1.value) + 1);
                    }
                });
                return false;
            }
        }
        if (selectedPageNumber === 'prev') {
            this.selectedPage = Number(this.selectedPage) - 1;
            if (this.selectedPage === 0) {
                this.selectedPage = this.totalPages;
            }
        }
        else if (selectedPageNumber === 'next') {
            this.selectedPage = Number(this.selectedPage) + 1;
            if (this.selectedPage > this.totalPages) {
                this.selectedPage = 1;
            }
        }
        else {
            this.selectedPage = Number(selectedPageNumber);
        }
        this.visiblePages = Number(this.visiblePages);
        this.selectedPage = Number(this.selectedPage);
        this.totalPages = Number(this.totalPages);
        this.createVisibleItems(this.visiblePages, this.selectedPage, this.totalPages);
        if (this.pageChanged) {
            this.pageChanged({ event: event, selectedPageNumber: this.selectedPage });
        }
        return false;
    };
    BootstrapPaginationCustomElement.prototype.createVisibleItems = function (visibleItem, selectedItem, totalPages) {
        selectedItem = selectedItem <= 0 ? 1 : selectedItem;
        var items = [];
        for (var index = 0; index < visibleItem; index++) {
            items[index] = '-1';
        }
        var leftSide = Math.ceil(visibleItem / 2);
        var rightSide = Math.floor(visibleItem / 2);
        if (selectedItem < leftSide) {
            items[selectedItem - 1] = selectedItem.toString();
        }
        else if (selectedItem > (totalPages - rightSide)) {
            items[(selectedItem - totalPages) + (items.length - 1)] = selectedItem.toString();
        }
        else {
            items[leftSide - 1] = selectedItem.toString();
        }
        var showLeftDots = this.showLeftDots(selectedItem) && this.visiblePages >= 7;
        var showRightDots = this.showRightDots(selectedItem, totalPages) && this.visiblePages >= 7;
        this.totalPages = Number(this.totalPages);
        if (showLeftDots && this.showGoto) {
            items[0] = '1';
            items[1] = '2';
            items[2] = '...';
        }
        if (showRightDots && this.showGoto) {
            items[items.length - 3] = '...';
            items[items.length - 2] = (this.totalPages - 1).toString();
            items[items.length - 1] = this.totalPages.toString();
        }
        var isBefore = true;
        var currentItem = selectedItem;
        for (var index = 0; index < items.length; index++) {
            if (items[index] === selectedItem.toString()) {
                isBefore = false;
            }
            if (items[index] === '-1' && !isBefore) {
                currentItem += 1;
                items[index] = currentItem.toString();
            }
        }
        var isAfter = true;
        var currentItemReverse = selectedItem;
        for (var index = items.length; index--;) {
            if (items[index] === selectedItem.toString()) {
                isAfter = false;
            }
            if (items[index] === '-1' && !isAfter) {
                currentItemReverse -= 1;
                items[index] = currentItemReverse.toString();
            }
        }
        this.pages = [];
        for (var index = 0; index < items.length; index++) {
            this.pages.push({
                page: items[index] === '...' ? '...' : this.template.replace('%s', items[index]),
                selected: items[index] === selectedItem.toString(),
                pageNumber: Number(items[index])
            });
        }
    };
    BootstrapPaginationCustomElement.prototype.showLeftDots = function (selectedItem) {
        return selectedItem > 5;
    };
    BootstrapPaginationCustomElement.prototype.showRightDots = function (selectedItem, totalPages) {
        return totalPages - 5 >= selectedItem;
    };
    BootstrapPaginationCustomElement.prototype.attached = function () {
        this.totalPages = Number(this.totalPages);
        this.selectedPage = Number(this.selectedPage);
        this.visiblePages = Number(this.visiblePages);
        if (this.visiblePages <= 0) {
            throw Error('The visible pages value should be greater than 0.');
        }
        if (this.visiblePages > this.totalPages) {
            throw Error('The visible pages should always be less than or equal to the total pages.');
        }
        var hideOnlyOnePage = (this.hideOnlyOnePage === '' && this.paginationTemplate.hasAttribute('hide-only-one-page'))
            || this.hideOnlyOnePage.toString() === 'true';
        var boundaryLinks = (this.boundaryLinks === '' && this.paginationTemplate.hasAttribute('boundary-links')) || this.boundaryLinks.toString() === 'true';
        var directionLinks = (this.directionLinks === '' && this.paginationTemplate.hasAttribute('direction-links')) || this.directionLinks.toString() === 'true';
        var showGoto = (this.showGoto === '' && this.paginationTemplate.hasAttribute('show-goto')) || this.showGoto.toString() === 'true';
        var loop = (this.loop === '' && this.paginationTemplate.hasAttribute('loop')) || this.loop.toString() === 'true';
        if (this.size === 'lg') {
            this.pagination.classList.add('pagination-lg');
        }
        else if (this.size === 'sm') {
            this.pagination.classList.add('pagination-sm');
        }
        else {
            this.pagination.classList.remove('pagination-sm');
            this.pagination.classList.remove('pagination-lg');
        }
        if (this.hideOnlyOnePage && (this.totalPages === 1)) {
            this.boundaryLinks = false;
            this.directionLinks = false;
        }
        this.createVisibleItems(this.visiblePages, this.selectedPage, this.totalPages);
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPaginationCustomElement.prototype, "totalPages", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPaginationCustomElement.prototype, "selectedPage", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPaginationCustomElement.prototype, "visiblePages", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPaginationCustomElement.prototype, "hideOnlyOnePage", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPaginationCustomElement.prototype, "boundaryLinks", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPaginationCustomElement.prototype, "directionLinks", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPaginationCustomElement.prototype, "showGoto", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapPaginationCustomElement.prototype, "template", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapPaginationCustomElement.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapPaginationCustomElement.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapPaginationCustomElement.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapPaginationCustomElement.prototype, "size", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapPaginationCustomElement.prototype, "firstText", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapPaginationCustomElement.prototype, "firstIcon", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapPaginationCustomElement.prototype, "lastText", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapPaginationCustomElement.prototype, "lastIcon", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapPaginationCustomElement.prototype, "prevText", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapPaginationCustomElement.prototype, "prevIcon", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapPaginationCustomElement.prototype, "nextText", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapPaginationCustomElement.prototype, "nextIcon", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPaginationCustomElement.prototype, "loop", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPaginationCustomElement.prototype, "pageChanged", void 0);
    BootstrapPaginationCustomElement = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('abt-pagination')
    ], BootstrapPaginationCustomElement);
    return BootstrapPaginationCustomElement;
}());
exports.BootstrapPaginationCustomElement = BootstrapPaginationCustomElement;
//# sourceMappingURL=abt-pagination.js.map
});
___scope___.file("components/bootstrap/pagination/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-pagination"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-pagination')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/password/abt-password.js", function(exports, require, module, __filename, __dirname){

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
var jsTools_1 = require("./../../../utilities/vanilla/jsTools");
var password_meter_1 = require("password-meter");
var aurelia_framework_1 = require("aurelia-framework");
var PasswordCustomElement = (function () {
    function PasswordCustomElement(jsTools) {
        this.jsTools = jsTools;
        this.buttonColorType = 'secondary';
        this.errorIcon = 'fa fa-times';
        this.showPasswordIcon = 'fa fa-eye';
        this.hidePasswordIcon = 'fa fa-eye-slash';
        this.progressBarHeight = '5px';
        this.errorDisplayType = 'none';
        this.showProgressBar = true;
        this.size = 'md';
        this.showPercent = false;
        this.passwordVisibility = true;
        this.scoreRange = null;
        this.requirements = null;
        this.isInvisible = true;
        this.progressBarValue = 0;
        this.percentValue = '';
        this.progressBarClass = null;
        this.progressBarColor = null;
    }
    PasswordCustomElement.prototype.attached = function () {
        this.showProgressBar = (this.showProgressBar === '' && this.passwordTemplate.hasAttribute('show-progress-bar')) || this.showProgressBar.toString() === 'true';
        this.showPercent = (this.showPercent === '' && this.passwordTemplate.hasAttribute('show-percent')) || this.showPercent.toString() === 'true';
        this.passwordVisibility = (this.passwordVisibility === '' && this.passwordTemplate.hasAttribute('password-visibility')) || this.passwordVisibility.toString() === 'true';
        var req = this.requirements;
        var range = this.getScoreRangeInfo(this.scoreRange);
        this.passwordMeter = new password_meter_1.PasswordMeter(req, range);
        if (this.text && this.text.length > 0) {
            this.textChanged(this.text);
        }
    };
    PasswordCustomElement.prototype.passwordVisibilityToggle = function () {
        if (this.isInvisible) {
            this.isInvisible = false;
            $(this.txtPassword).attr('type', 'text');
        }
        else {
            this.isInvisible = true;
            $(this.txtPassword).attr('type', 'password');
        }
    };
    PasswordCustomElement.prototype.generateErrorsAsHtml = function (errors) {
        var html = '';
        if (errors) {
            for (var index = 0; index < errors.length; index++) {
                var element = errors[index];
                html += "<div class=\"abt-password-error-item\"><i class=\"abt-password-error-icon " + this.errorIcon + "\" aria-hidden=\"true\"></i>" + element + "</div>";
            }
        }
        return html;
    };
    PasswordCustomElement.prototype.getScoreRangeInfo = function (scoreRange) {
        var option = {};
        var color = '';
        var isClass = false;
        var scores = Object.keys(scoreRange);
        for (var index = 0; index < scores.length; index++) {
            var key = scores[index];
            var message = scoreRange[key].message;
            option[key] = message;
        }
        return option;
    };
    PasswordCustomElement.prototype.getMinColorInfo = function (scoreRange) {
        var scores = Object.keys(scoreRange);
        var color = null;
        var isClass = false;
        var key = scores[0];
        var message = scoreRange[key].message;
        color = scoreRange[key].color;
        isClass = color.startsWith('.');
        return {
            color: color,
            isClass: isClass
        };
    };
    PasswordCustomElement.prototype.getColorInfo = function (scoreRange, status) {
        var scores = Object.keys(scoreRange);
        var color = null;
        var isClass = false;
        for (var index = 0; index < scores.length; index++) {
            var key = scores[index];
            var message = scoreRange[key].message;
            if (message === status) {
                color = scoreRange[key].color;
                isClass = color.startsWith('.');
                break;
            }
        }
        if (!color) {
            return null;
        }
        return {
            color: color,
            isClass: isClass
        };
    };
    PasswordCustomElement.prototype.textChanged = function (value) {
        if (!this.scoreRange) {
            throw Error("The 'score-range' property can not be null.");
        }
        if (!this.jsTools.isObject(this.scoreRange)) {
            throw Error("The 'score-range' property must be an object.");
        }
        var result = this.passwordMeter.getResult(value);
        var colorStatus = this.getColorInfo(this.scoreRange, result.status);
        if (colorStatus) {
            if (colorStatus.isClass) {
                this.progressBarClass = colorStatus.color.replace('.', '');
                this.progressBarColor = null;
            }
            else {
                this.progressBarClass = null;
                this.progressBarColor = colorStatus.color;
            }
        }
        if (result.score >= 0) {
            this.progressBarValue = result.percent;
            if (this.showPercent && result.score > 0) {
                this.percentValue = result.percent + '%';
            }
        }
        else {
            this.percentValue = '';
            this.progressBarValue = 100;
            colorStatus = this.getMinColorInfo(this.scoreRange);
            if (colorStatus.isClass) {
                this.progressBarClass = colorStatus.color.replace('.', '');
                this.progressBarColor = null;
            }
            else {
                this.progressBarClass = null;
                this.progressBarColor = colorStatus.color;
            }
        }
        if (result.score < 0) {
            this.percentValue = '';
            if (this.errorDisplayType === 'tooltip') {
                $(this.txtPassword).tooltip({
                    'title': this.generateErrorsAsHtml(result.errors),
                    'html': true,
                    'animation': true,
                    'placement': 'bottom',
                    'template': '<div class="tooltip" role="tooltip"><div class="arrow"></div><div style="max-width: 350px;" class="tooltip-inner text-left text-nowrap"></div></div>'
                });
                this.errorsList.innerHTML = '';
            }
            else if (this.errorDisplayType === 'list') {
                $(this.txtPassword).tooltip('dispose');
                this.errorsList.innerHTML = this.generateErrorsAsHtml(result.errors);
            }
            else {
                $(this.txtPassword).tooltip('dispose');
                this.errorsList.innerHTML = '';
            }
        }
        if (result.score === 0 || !result.errors) {
            $(this.txtPassword).tooltip('dispose');
            this.errorsList.innerHTML = '';
            if (result.score === 0) {
                this.percentValue = '';
            }
        }
        if (this.passwordChanged) {
            this.passwordChanged({
                result: result,
                colorStatus: colorStatus
            });
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], PasswordCustomElement.prototype, "inputClass", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], PasswordCustomElement.prototype, "inputStyle", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], PasswordCustomElement.prototype, "buttonClass", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], PasswordCustomElement.prototype, "buttonStyle", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], PasswordCustomElement.prototype, "buttonColorType", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], PasswordCustomElement.prototype, "errorIcon", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], PasswordCustomElement.prototype, "showPasswordIcon", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], PasswordCustomElement.prototype, "hidePasswordIcon", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], PasswordCustomElement.prototype, "progressBarHeight", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], PasswordCustomElement.prototype, "errorDisplayType", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], PasswordCustomElement.prototype, "showProgressBar", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], PasswordCustomElement.prototype, "size", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], PasswordCustomElement.prototype, "showPercent", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], PasswordCustomElement.prototype, "passwordVisibility", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", String)
    ], PasswordCustomElement.prototype, "text", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], PasswordCustomElement.prototype, "scoreRange", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], PasswordCustomElement.prototype, "requirements", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], PasswordCustomElement.prototype, "passwordChanged", void 0);
    PasswordCustomElement = __decorate([
        aurelia_framework_1.inject(jsTools_1.JsTools),
        aurelia_framework_1.customElement('abt-password'),
        __metadata("design:paramtypes", [typeof (_a = typeof jsTools_1.JsTools !== "undefined" && jsTools_1.JsTools) === "function" && _a || Object])
    ], PasswordCustomElement);
    return PasswordCustomElement;
    var _a;
}());
exports.PasswordCustomElement = PasswordCustomElement;
//# sourceMappingURL=abt-password.js.map
});
___scope___.file("utilities/vanilla/jsTools.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var JsTools = (function () {
    function JsTools() {
    }
    JsTools.prototype.isString = function (value) {
        return typeof value === 'string' || value instanceof String;
    };
    JsTools.prototype.isNumber = function (value) {
        return typeof value === 'number' && isFinite(value);
    };
    JsTools.prototype.isArray = function (value) {
        return value && typeof value === 'object' && value.constructor === Array;
    };
    JsTools.prototype.isFunction = function (value) {
        return typeof value === 'function';
    };
    JsTools.prototype.isObject = function (value) {
        return value && typeof value === 'object' && value.constructor === Object;
    };
    JsTools.prototype.isEmpty = function (value) {
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    };
    JsTools.prototype.isNull = function (value) {
        return value === null;
    };
    JsTools.prototype.isUndefined = function (value) {
        return typeof value === 'undefined';
    };
    JsTools.prototype.isBoolean = function (value) {
        return typeof value === 'boolean';
    };
    JsTools.prototype.isRegExp = function (value) {
        return value && typeof value === 'object' && value.constructor === RegExp;
    };
    JsTools.prototype.isError = function (value) {
        return value instanceof Error && typeof value.message !== 'undefined';
    };
    JsTools.prototype.isDate = function (value) {
        return value instanceof Date;
    };
    JsTools.prototype.isSymbol = function (value) {
        return typeof value === 'symbol';
    };
    JsTools.prototype.jsonFormatter = function (value) {
        return JSON.stringify(value, null, '\t');
    };
    JsTools.prototype.isUrl = function (value) {
        if (!this.isString(value)) {
            return false;
        }
        var pattern = new RegExp('^((https?:)?\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i');
        if (!pattern.test(value)) {
            return false;
        }
        else {
            return true;
        }
    };
    JsTools = __decorate([
        aurelia_framework_1.singleton()
    ], JsTools);
    return JsTools;
}());
exports.JsTools = JsTools;
//# sourceMappingURL=jsTools.js.map
});
___scope___.file("components/bootstrap/password/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-password"));
function configure(config) {
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./abt-password')]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/popover/abt-popover.js", function(exports, require, module, __filename, __dirname){

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
var $ = require("jquery");
var BootstrapPopoverCustomElement = (function () {
    function BootstrapPopoverCustomElement() {
        this.animation = true;
        this.container = false;
        this.delay = 0;
        this.html = false;
        this.placement = 'right';
        this.selector = false;
        this.title = '';
        this.trigger = 'click';
        this.offset = 0;
        this.fallbackPlacement = 'flip';
        this.boundary = 'scrollParent';
        this.template = '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>';
    }
    BootstrapPopoverCustomElement.prototype.attached = function () {
        var _this = this;
        this.parentElement = this.popover.parentElement;
        var slotContent = this.html ? this.popover.innerHTML : this.popover.textContent;
        this.offset = Number(this.offset);
        this.animation = (this.animation === '' && this.popoverTemplate.hasAttribute('animation')) || this.animation.toString() === 'true';
        this.container = (this.container === '' && this.popoverTemplate.hasAttribute('container')) || this.container.toString() === 'true';
        this.html = (this.html === '' && this.popoverTemplate.hasAttribute('html')) || this.html.toString() === 'true';
        this.selector = (this.selector === '' && this.popoverTemplate.hasAttribute('selector')) || this.selector.toString() === 'true';
        $(this.parentElement).popover({
            'content': slotContent,
            'title': this.title,
            'html': this.html,
            'template': this.template,
            'animation': this.animation,
            'placement': this.placement,
            'container': this.container,
            'delay': this.delay,
            'trigger': this.trigger,
            'offset': this.offset,
            'fallbackPlacement': this.fallbackPlacement,
            'boundary': this.boundary
        });
        this.popover.remove();
        if (this.bsShow) {
            $(this.parentElement).on('show.bs.popover', function () {
                if (_this.bsShow) {
                    _this.bsShow();
                }
            });
        }
        if (this.bsShown) {
            $(this.parentElement).on('shown.bs.popover', function () {
                if (_this.bsShown) {
                    _this.bsShown();
                }
            });
        }
        if (this.bsHide) {
            $(this.parentElement).on('hide.bs.popover', function () {
                if (_this.bsHide) {
                    _this.bsHide();
                }
            });
        }
        if (this.bsHidden) {
            $(this.parentElement).on('hidden.bs.popover', function () {
                if (_this.bsHidden) {
                    _this.bsHidden();
                }
            });
        }
        if (this.bsInserted) {
            $(this.parentElement).on('inserted.bs.popover', function () {
                if (_this.bsInserted) {
                    _this.bsInserted();
                }
            });
        }
    };
    BootstrapPopoverCustomElement.prototype.detached = function () {
        $(this.parentElement).popover('dispose');
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPopoverCustomElement.prototype, "animation", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPopoverCustomElement.prototype, "container", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPopoverCustomElement.prototype, "delay", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPopoverCustomElement.prototype, "html", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPopoverCustomElement.prototype, "placement", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPopoverCustomElement.prototype, "selector", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPopoverCustomElement.prototype, "title", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapPopoverCustomElement.prototype, "trigger", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPopoverCustomElement.prototype, "offset", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapPopoverCustomElement.prototype, "fallbackPlacement", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapPopoverCustomElement.prototype, "boundary", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapPopoverCustomElement.prototype, "template", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapPopoverCustomElement.prototype, "bsShow", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapPopoverCustomElement.prototype, "bsShown", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapPopoverCustomElement.prototype, "bsHide", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapPopoverCustomElement.prototype, "bsHidden", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapPopoverCustomElement.prototype, "bsInserted", void 0);
    BootstrapPopoverCustomElement = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-popover')
    ], BootstrapPopoverCustomElement);
    return BootstrapPopoverCustomElement;
}());
exports.BootstrapPopoverCustomElement = BootstrapPopoverCustomElement;
//# sourceMappingURL=abt-popover.js.map
});
___scope___.file("components/bootstrap/popover/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-popover"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-popover')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/progressbar/abt-progress-bar.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapProgressBar = (function () {
    function BootstrapProgressBar() {
        this.value = 0;
        this.min = 0;
        this.max = 100;
        this.animated = false;
        this.striped = false;
        this.isAnimated = false;
        this.isStriped = false;
    }
    BootstrapProgressBar.prototype.attached = function () {
        var animated = (this.animated === '' && this.progressbarTemplate.hasAttribute('animated')) || this.animated.toString() === 'true';
        var striped = (this.striped === '' && this.progressbarTemplate.hasAttribute('striped')) || this.striped.toString() === 'true';
        this.value = Number(this.value);
        this.min = Number(this.min);
        this.max = Number(this.max);
        if (this.color && this.gradientColor) {
            this.gradientColorChanged(this.gradientColor);
        }
    };
    BootstrapProgressBar.prototype.gradientColorChanged = function (newValue) {
        if (this.progressbar) {
            aurelia_framework_1.DOM.injectStyles("\n      #" + this.progressbar.id + "\n      {\n        background: -webkit-gradient(linear, left top, right top, from(" + this.color + "),to(" + newValue + ")) !important;\n        background: -webkit-linear-gradient(left, " + this.color + " 0%," + newValue + " 100%) !important;\n        background: -o-linear-gradient(left, " + this.color + " 0%," + newValue + " 100%) !important;\n        background: linear-gradient(left, " + this.color + " 0%," + newValue + " 100%) !important;\n      }\n      ");
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapProgressBar.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapProgressBar.prototype, "color", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapProgressBar.prototype, "gradientColor", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapProgressBar.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapProgressBar.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapProgressBar.prototype, "value", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapProgressBar.prototype, "min", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapProgressBar.prototype, "max", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapProgressBar.prototype, "animated", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapProgressBar.prototype, "striped", void 0);
    BootstrapProgressBar = __decorate([
        aurelia_framework_1.customElement('abt-progress-bar'),
        aurelia_framework_1.containerless()
    ], BootstrapProgressBar);
    return BootstrapProgressBar;
}());
exports.BootstrapProgressBar = BootstrapProgressBar;
//# sourceMappingURL=abt-progress-bar.js.map
});
___scope___.file("components/bootstrap/progressbar/abt-progress.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapProgress = (function () {
    function BootstrapProgress() {
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapProgress.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapProgress.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapProgress.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapProgress.prototype, "height", void 0);
    BootstrapProgress = __decorate([
        aurelia_framework_1.customElement('abt-progress')
    ], BootstrapProgress);
    return BootstrapProgress;
}());
exports.BootstrapProgress = BootstrapProgress;
//# sourceMappingURL=abt-progress.js.map
});
___scope___.file("components/bootstrap/progressbar/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-progress"));
__export(require("./abt-progress-bar"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-progress'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-progress-bar')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/scrollspy/abt-scrollspy-item.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapScrollspyItem = (function () {
    function BootstrapScrollspyItem() {
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapScrollspyItem.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapScrollspyItem.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapScrollspyItem.prototype, "id", void 0);
    BootstrapScrollspyItem = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-scrollspy-item')
    ], BootstrapScrollspyItem);
    return BootstrapScrollspyItem;
}());
exports.BootstrapScrollspyItem = BootstrapScrollspyItem;
//# sourceMappingURL=abt-scrollspy-item.js.map
});
___scope___.file("components/bootstrap/scrollspy/abt-scrollspy.js", function(exports, require, module, __filename, __dirname){

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
var $ = require("jquery");
var BootstrapScrollSpy = (function () {
    function BootstrapScrollSpy(element) {
        this.element = element;
        this.offset = 10;
        this.onBody = false;
    }
    BootstrapScrollSpy.prototype.attached = function () {
        var _this = this;
        this.onBody = Boolean(this.onBody);
        this.offset = Number(this.offset);
        if (!this.onBody) {
            $(this.spy).scrollspy({ target: this.target[0] === '#' ? this.target : "#" + this.target, offset: this.offset });
        }
        else {
            $('body').scrollspy({ target: this.target[0] === '#' ? this.target : "#" + this.target, offset: this.offset });
        }
        if (this.bsScrollspy) {
            $(this.spy).on('activate.bs.scrollspy', function () {
                if (_this.bsScrollspy) {
                    _this.bsScrollspy();
                }
            });
        }
    };
    BootstrapScrollSpy.prototype.detached = function () {
        $(this.spy).scrollspy('dispose');
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapScrollSpy.prototype, "target", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Number)
    ], BootstrapScrollSpy.prototype, "offset", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapScrollSpy.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapScrollSpy.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapScrollSpy.prototype, "bsScrollspy", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapScrollSpy.prototype, "onBody", void 0);
    BootstrapScrollSpy = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-scrollspy'),
        __metadata("design:paramtypes", [Object])
    ], BootstrapScrollSpy);
    return BootstrapScrollSpy;
}());
exports.BootstrapScrollSpy = BootstrapScrollSpy;
//# sourceMappingURL=abt-scrollspy.js.map
});
___scope___.file("components/bootstrap/scrollspy/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-scrollspy"));
__export(require("./abt-scrollspy-item"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-scrollspy'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-scrollspy-item')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/star-rate/abt-star-rate.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapStarRate = (function () {
    function BootstrapStarRate(element) {
        this.element = element;
        this.rtl = false;
        this.style = '';
        this.class = '';
        this.type = 'primary';
        this.color = null;
        this.maxRate = 5;
        this.disabled = false;
        this.fullStar = 'fa fa-star';
        this.emptyStar = 'fa fa-star-o';
        this.halfStar = false;
        this.rate = 0;
        this.mouseRate = -1;
        this.showHalfStar = false;
        this.halfStarClass = null;
    }
    BootstrapStarRate.prototype.bind = function () {
        var onlyDisabledAttribute = (this.disabled === '' && this.element.hasAttribute('read-only'));
        this.disabled = onlyDisabledAttribute || this.disabled.toString() === 'true';
        var onlyRTLAttribute = (this.rtl === '' && this.element.hasAttribute('rtl'));
        this.rtl = onlyRTLAttribute || this.rtl.toString() === 'true';
        var onlyHalfStarAttribute = (this.halfStar === '' && this.element.hasAttribute('half-star'));
        this.halfStar = onlyHalfStarAttribute || this.halfStar.toString() === 'true';
        this.maxRate = Number(this.maxRate);
        this.rate = Number(this.rate);
    };
    BootstrapStarRate.prototype.halfStarChanged = function (newValue) {
        this.halfStarClass = newValue ? 'fa fa-star-half-o' : null;
    };
    BootstrapStarRate.prototype.mouseMove = function (event, index) {
        if (this.disabled) {
            return;
        }
        if (this.halfStarClass) {
            var calculatedIndex = this.rtl ? this.maxRate - index - 1 : index;
            var controlLeft = this.rtl ? this.icons[calculatedIndex].getBoundingClientRect().right : this.icons[calculatedIndex].getBoundingClientRect().left;
            var currentMousePosition = this.rtl ? controlLeft - event.clientX : event.clientX - controlLeft;
            this.showHalfStar = currentMousePosition < (this.icons[calculatedIndex].clientWidth / 2);
        }
        this.mouseRate = index + 1 - (this.showHalfStar ? 0.5 : 0);
    };
    BootstrapStarRate.prototype.setRate = function (index) {
        if (this.disabled) {
            return;
        }
        var oldValue = this.rate;
        this.rate = index + 1 - (this.showHalfStar ? 0.5 : 0);
        if (oldValue !== this.rate && this.rateChanged) {
            this.rateChanged({ newRate: this.rate, oldRate: oldValue });
        }
    };
    BootstrapStarRate.prototype.mouseLeft = function () {
        if (this.disabled) {
            return;
        }
        this.showHalfStar = false;
        this.mouseRate = -1;
    };
    Object.defineProperty(BootstrapStarRate.prototype, "currentValue", {
        get: function () {
            var x = (this.mouseRate !== -1 ? this.mouseRate : this.rate);
            return x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapStarRate.prototype, "hasFloatingPoint", {
        get: function () {
            var mode = this.currentValue % 1;
            return mode > 0 && mode < 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapStarRate.prototype, "fixedPoint", {
        get: function () {
            return Math.floor(this.currentValue);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapStarRate.prototype, "rtl", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapStarRate.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapStarRate.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapStarRate.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapStarRate.prototype, "color", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Number)
    ], BootstrapStarRate.prototype, "maxRate", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapStarRate.prototype, "disabled", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapStarRate.prototype, "fullStar", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapStarRate.prototype, "emptyStar", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], BootstrapStarRate.prototype, "halfStar", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Number)
    ], BootstrapStarRate.prototype, "rate", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapStarRate.prototype, "rateChanged", void 0);
    __decorate([
        aurelia_framework_1.children('i'),
        __metadata("design:type", Object)
    ], BootstrapStarRate.prototype, "icons", void 0);
    __decorate([
        aurelia_framework_1.computedFrom('mouseRate', 'rate'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BootstrapStarRate.prototype, "currentValue", null);
    __decorate([
        aurelia_framework_1.computedFrom('currentValue'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BootstrapStarRate.prototype, "hasFloatingPoint", null);
    __decorate([
        aurelia_framework_1.computedFrom('currentValue'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BootstrapStarRate.prototype, "fixedPoint", null);
    BootstrapStarRate = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('abt-star-rate'),
        __metadata("design:paramtypes", [Object])
    ], BootstrapStarRate);
    return BootstrapStarRate;
}());
exports.BootstrapStarRate = BootstrapStarRate;
//# sourceMappingURL=abt-star-rate.js.map
});
___scope___.file("components/bootstrap/star-rate/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./abt-star-rate'));
}
exports.configure = configure;
__export(require("./abt-star-rate"));
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/toggle/abt-toggle.js", function(exports, require, module, __filename, __dirname){

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
var $ = require("jquery");
require("aureliatoolbelt-thirdparty/bootstrap-toggle/bootstrap-toggle.js");
var BootstrapToggleCustomElement = (function () {
    function BootstrapToggleCustomElement(element, bindingEngine) {
        this.element = element;
        this.bindingEngine = bindingEngine;
        this.on = 'On';
        this.off = 'Off';
        this.onType = 'primary';
        this.offType = 'secondary';
        this.css = '';
        this.size = 'normal';
        this.width = null;
        this.height = null;
        this.class = '';
        this.style = '';
        this.disabled = false;
        this.rtl = false;
        this.subscription = null;
    }
    BootstrapToggleCustomElement.prototype.disabledChanged = function (newValue) {
        if (newValue) {
            this.checkbox.setAttribute('disabled', 'disabled');
        }
        else {
            if (this.checkbox.hasAttribute('disabled')) {
                this.checkbox.removeAttribute('disabled');
            }
        }
    };
    BootstrapToggleCustomElement.prototype.onChanged = function () {
        if (this.disabled) {
            return;
        }
        var newValue = this.element.children.item(0).children.item(0).classList.contains('off');
        this.synchronizeModel(!newValue);
    };
    BootstrapToggleCustomElement.prototype.synchronizeModel = function (newState) {
        var _this = this;
        if (!Array.isArray(this.checked)) {
            this.checked = newState;
            return;
        }
        if (newState && ((this.matcher && this.checked.findIndex(function (x) { return _this.matcher(x, _this.value || _this.model); }) === -1)
            ||
                (this.checked.indexOf(this.value || this.model) === -1))) {
            this.checked.push(this.value || this.model);
        }
        else if (!newState) {
            var index = this.matcher
                ? this.checked.findIndex(function (x) { return _this.matcher(x, _this.value || _this.model); })
                : this.checked.indexOf(this.value || this.model);
            if (index !== -1) {
                this.checked.splice(index, 1);
            }
        }
    };
    BootstrapToggleCustomElement.prototype.checkedChanged = function (newValue) {
        var _this = this;
        this.disposeSubscription();
        if (Array.isArray(this.checked)) {
            this.subscription = this.bindingEngine.collectionObserver(this.checked)
                .subscribe(function () {
                _this.synchronizeView(newValue);
            });
        }
        this.synchronizeView(newValue);
    };
    BootstrapToggleCustomElement.prototype.synchronizeView = function (newValue) {
        var _this = this;
        var state = newValue;
        if (Array.isArray(this.checked)) {
            var index = this.matcher
                ? this.checked.findIndex(function (x) { return _this.matcher(x, _this.value || _this.model); })
                : this.checked.indexOf(this.value || this.model);
            state = index !== -1;
        }
        if (state) {
            $(this.checkbox).prop('checked', true).change();
        }
        else {
            $(this.checkbox).prop('checked', false).change();
        }
    };
    BootstrapToggleCustomElement.prototype.attached = function () {
        $(this.checkbox).bootstrapToggle({
            on: this.on,
            off: this.off,
            size: this.size,
            onstyle: this.onType,
            offstyle: this.offType,
            width: this.width,
            height: this.height
        });
    };
    BootstrapToggleCustomElement.prototype.bind = function () {
        this.disabled = (this.disabled === '' && this.element.hasAttribute('disabled')) || (this.disabled && this.disabled.toString() === 'true');
        if (!Array.isArray(this.checked)) {
            this.checked = (this.checked === '' && this.element.hasAttribute('checked')) || (this.checked && this.checked.toString() === 'true');
        }
        this.disabledChanged(this.disabled);
        this.synchronizeView(this.checked);
    };
    BootstrapToggleCustomElement.prototype.unbind = function () {
        this.disposeSubscription();
    };
    BootstrapToggleCustomElement.prototype.disposeSubscription = function () {
        if (this.subscription !== null) {
            this.subscription.dispose();
            this.subscription = null;
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapToggleCustomElement.prototype, "on", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapToggleCustomElement.prototype, "off", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapToggleCustomElement.prototype, "onType", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapToggleCustomElement.prototype, "offType", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapToggleCustomElement.prototype, "css", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapToggleCustomElement.prototype, "size", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Number)
    ], BootstrapToggleCustomElement.prototype, "width", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Number)
    ], BootstrapToggleCustomElement.prototype, "height", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapToggleCustomElement.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapToggleCustomElement.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapToggleCustomElement.prototype, "value", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapToggleCustomElement.prototype, "model", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapToggleCustomElement.prototype, "checked", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapToggleCustomElement.prototype, "matcher", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapToggleCustomElement.prototype, "disabled", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapToggleCustomElement.prototype, "rtl", void 0);
    BootstrapToggleCustomElement = __decorate([
        aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
        aurelia_framework_1.customElement('abt-toggle'),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof aurelia_framework_1.BindingEngine !== "undefined" && aurelia_framework_1.BindingEngine) === "function" && _a || Object])
    ], BootstrapToggleCustomElement);
    return BootstrapToggleCustomElement;
    var _a;
}());
exports.BootstrapToggleCustomElement = BootstrapToggleCustomElement;
//# sourceMappingURL=abt-toggle.js.map
});
___scope___.file("components/bootstrap/toggle/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-toggle"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-toggle')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/tokenize/abt-tokenize-item.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapTokenizeItemCustomElement = (function () {
    function BootstrapTokenizeItemCustomElement() {
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapTokenizeItemCustomElement.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapTokenizeItemCustomElement.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapTokenizeItemCustomElement.prototype, "value", void 0);
    BootstrapTokenizeItemCustomElement = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('abt-tokenize-item')
    ], BootstrapTokenizeItemCustomElement);
    return BootstrapTokenizeItemCustomElement;
}());
exports.BootstrapTokenizeItemCustomElement = BootstrapTokenizeItemCustomElement;
//# sourceMappingURL=abt-tokenize-item.js.map
});
___scope___.file("components/bootstrap/tokenize/abt-tokenize.js", function(exports, require, module, __filename, __dirname){

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
require("jquery");
require("aureliatoolbelt-thirdparty/bootstrap-tokenize2/tokenize2.js");
var jsTools_1 = require("../../../utilities/vanilla/jsTools");
var BootstrapTokenizeCustomElement = (function () {
    function BootstrapTokenizeCustomElement(element, jsTools, bindingEngine) {
        this.element = element;
        this.jsTools = jsTools;
        this.bindingEngine = bindingEngine;
        this.id = null;
        this.debounce = 0;
        this.delimiter = [','];
        this.placeholder = null;
        this.tokensMaxItems = 0;
        this.tokensAllowCustom = false;
        this.dropdownMaxItems = 10;
        this.searchMinLength = 0;
        this.searchFromStart = true;
        this.searchHighlight = true;
        this.showOnClick = false;
        this.displayNoResultsMessage = false;
        this.noResultsMessageText = 'No results matched "%s"';
        this.zIndexMargin = 500;
        this.tabIndex = 0;
    }
    BootstrapTokenizeCustomElement.prototype.bind = function () {
        var _this = this;
        if (this.selectedTokens) {
            this.subscription = this.bindingEngine.collectionObserver(this.selectedTokens)
                .subscribe(function (x) {
                var item = x[0];
                if (item) {
                    if (item.removed.length) {
                        var removed = item.removed;
                        for (var index = 0; index < removed.length; index++) {
                            $(_this.tokenize).trigger('tokenize:tokens:remove', removed[index].value);
                        }
                    }
                    else {
                        $(_this.tokenize).trigger('tokenize:tokens:add', [_this.selectedTokens[item.index].value,
                            _this.selectedTokens[item.index].text, _this.selectedTokens[item.index].force || true]);
                    }
                }
            });
        }
    };
    BootstrapTokenizeCustomElement.prototype.detached = function () {
        this.subscription = null;
    };
    BootstrapTokenizeCustomElement.prototype.attached = function () {
        var _this = this;
        if (this.id) {
            this.tokenizeTemplate.setAttribute('id', "abt-tokenize-" + this.id);
        }
        this.debounce = Number(this.debounce);
        this.tokensAllowCustom = (this.tokensAllowCustom === '' && this.tokenizeTemplate.hasAttribute('tokens-allow-custom'))
            || this.tokensAllowCustom.toString() === 'true';
        this.dropdownMaxItems = Number(this.dropdownMaxItems) <= 0 ? 0 : (Number(this.dropdownMaxItems) - 1);
        this.searchMinLength = Number(this.searchMinLength);
        this.searchFromStart = (this.searchFromStart === '' && this.tokenizeTemplate.hasAttribute('search-from-start'))
            || this.searchFromStart.toString() === 'true';
        this.searchHighlight = (this.searchHighlight === '' && this.tokenizeTemplate.hasAttribute('search-highlight'))
            || this.searchHighlight.toString() === 'true';
        this.showOnClick = (this.showOnClick === '' && this.tokenizeTemplate.hasAttribute('show-on-click'))
            || this.showOnClick.toString() === 'true';
        this.displayNoResultsMessage = (this.displayNoResultsMessage === '' && this.tokenizeTemplate.hasAttribute('display-no-results-message'))
            || this.displayNoResultsMessage.toString() === 'true';
        this.zIndexMargin = Number(this.zIndexMargin);
        this.tabIndex = Number(this.tabIndex);
        this.tokensMaxItems = Number(this.tokensMaxItems) || 0;
        $(this.tokenize).on('tokenize:load', function () {
            if (_this.load) {
                _this.load();
            }
        });
        $(this.tokenize).on('tokenize:clear', function () {
            if (_this.clear) {
                _this.clear();
            }
        });
        $(this.tokenize).on('tokenize:remap', function () {
            if (_this.remap) {
                _this.remap();
            }
        });
        $(this.tokenize).on('tokenize:select', function () {
            if (_this.select) {
                _this.select();
            }
        });
        $(this.tokenize).on('tokenize:deselect', function () {
            if (_this.deselect) {
                _this.deselect();
            }
        });
        $(this.tokenize).on('tokenize:search', function (e, value) {
            if (_this.search) {
                _this.search({ e: e, value: value });
            }
        });
        $(this.tokenize).on('tokenize:paste', function () {
            if (_this.paste) {
                _this.paste();
            }
        });
        $(this.tokenize).on('tokenize:dropdown:up', function () {
            if (_this.dropdownUp) {
                _this.dropdownUp();
            }
        });
        $(this.tokenize).on('tokenize:dropdown:down', function () {
            if (_this.dropdownDown) {
                _this.dropdownDown();
            }
        });
        $(this.tokenize).on('tokenize:dropdown:clear', function () {
            if (_this.dropdownClear) {
                _this.dropdownClear();
            }
        });
        $(this.tokenize).on('tokenize:dropdown:show', function () {
            if (_this.dropdownShow) {
                _this.dropdownShow();
            }
        });
        $(this.tokenize).on('tokenize:dropdown:hide', function () {
            if (_this.dropdownHide) {
                _this.dropdownHide();
            }
        });
        $(this.tokenize).on('tokenize:dropdown:fill', function (e, items) {
            if (_this.dropdownFill) {
                _this.dropdownFill({ e: e, items: items });
            }
        });
        $(this.tokenize).on('tokenize:dropdown:itemAdd', function (e, item) {
            if (_this.dropdownItemAdd) {
                _this.dropdownItemAdd({ e: e, item: item });
            }
        });
        $(this.tokenize).on('tokenize:keypress', function (e, routedEvent) {
            if (_this.keypress) {
                _this.keypress({ e: e, routedEvent: routedEvent });
            }
        });
        $(this.tokenize).on('tokenize:keydown', function (e, routedEvent) {
            if (_this.keydown) {
                _this.keydown({ e: e, routedEvent: routedEvent });
            }
        });
        $(this.tokenize).on('tokenize:keyup', function (e, routedEvent) {
            if (_this.keyup) {
                _this.keyup({ e: e, routedEvent: routedEvent });
            }
        });
        $(this.tokenize).on('tokenize:tokens:reorder', function () {
            if (_this.reorder) {
                _this.reorder();
            }
        });
        $(this.tokenize).on('tokenize:tokens:add', function (e, value, text, force) {
            if (_this.selectedTokens) {
                var found = _this.selectedTokens.findIndex(function (x) { return x.value === value; }) > -1;
                if (!found) {
                    _this.selectedTokens.push({ text: text, value: value });
                }
            }
            if (_this.add) {
                _this.add({ e: e, value: value, text: text, force: force });
            }
        });
        $(this.tokenize).on('tokenize:tokens:remove', function (e, value) {
            if (_this.selectedTokens) {
                var index = _this.selectedTokens.findIndex(function (x) { return x.value === value; });
                if (index > -1) {
                    _this.selectedTokens.splice(index, 1);
                }
            }
            if (_this.remove) {
                _this.remove({ e: e, value: value });
            }
        });
        var ds = null;
        if (this.options) {
            var index = this.options.length;
            while (index--) {
                this.options[index].innerHTML = this.options[index].innerHTML.trim();
                this.tokenize.appendChild(this.options[index]);
            }
            ds = 'select';
        }
        if (!this.options && this.jsTools.isString(this.dataSource)) {
            ds = this.dataSource;
        }
        if (this.jsTools.isFunction(this.dataSource)) {
            ds = null;
        }
        $(this.tokenize).tokenize2({
            dataSource: ds != null ? ds : function (term, object) {
                var items = [];
                var filterd = _this.dataSource({ term: term });
                $.each(filterd, function (_k, v) {
                    items.push(v);
                });
                var data = [items];
                object.trigger('tokenize:dropdown:fill', data);
            },
            debounce: this.debounce,
            delimiter: this.delimiter,
            placeholder: this.placeholder,
            tokensMaxItems: this.tokensMaxItems,
            tokensAllowCustom: this.tokensAllowCustom,
            dropdownMaxItems: this.dropdownMaxItems,
            searchMinLength: this.searchMinLength,
            searchFromStart: this.searchFromStart,
            searchHighlight: this.searchHighlight,
            displayNoResultsMessage: this.displayNoResultsMessage,
            noResultsMessageText: this.noResultsMessageText,
            zIndexMargin: this.zIndexMargin,
            tabIndex: this.tabIndex
        });
        if (this.showOnClick) {
            $(this.tokenize).on('tokenize:select', function (e, routedEvent) {
                $(_this.tokenize).trigger('tokenize:search', '');
            });
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], BootstrapTokenizeCustomElement.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapTokenizeCustomElement.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapTokenizeCustomElement.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "debounce", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Array)
    ], BootstrapTokenizeCustomElement.prototype, "delimiter", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapTokenizeCustomElement.prototype, "placeholder", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "tokensMaxItems", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "tokensAllowCustom", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "dropdownMaxItems", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "searchMinLength", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "searchFromStart", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "searchHighlight", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "showOnClick", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "displayNoResultsMessage", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapTokenizeCustomElement.prototype, "noResultsMessageText", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "zIndexMargin", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "tabIndex", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "dataSource", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "selectedTokens", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "load", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "clear", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "remap", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "select", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "deselect", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "search", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "paste", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "dropdownUp", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "dropdownDown", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "dropdownClear", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "dropdownShow", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "dropdownHide", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "dropdownFill", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "dropdownItemAdd", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "keypress", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "keydown", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "keyup", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "reorder", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "add", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "remove", void 0);
    __decorate([
        aurelia_framework_1.children('option'),
        __metadata("design:type", Object)
    ], BootstrapTokenizeCustomElement.prototype, "options", void 0);
    BootstrapTokenizeCustomElement = __decorate([
        aurelia_framework_1.inject(Element, jsTools_1.JsTools, aurelia_framework_1.BindingEngine),
        aurelia_framework_1.customElement('abt-tokenize'),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof jsTools_1.JsTools !== "undefined" && jsTools_1.JsTools) === "function" && _a || Object, typeof (_b = typeof aurelia_framework_1.BindingEngine !== "undefined" && aurelia_framework_1.BindingEngine) === "function" && _b || Object])
    ], BootstrapTokenizeCustomElement);
    return BootstrapTokenizeCustomElement;
    var _a, _b;
}());
exports.BootstrapTokenizeCustomElement = BootstrapTokenizeCustomElement;
//# sourceMappingURL=abt-tokenize.js.map
});
___scope___.file("components/bootstrap/tokenize/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-tokenize"));
__export(require("./abt-tokenize-item"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-tokenize'),
        aurelia_framework_1.PLATFORM.moduleName('./abt-tokenize-item')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/tooltip/abt-tooltip.js", function(exports, require, module, __filename, __dirname){

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
var $ = require("jquery");
var BootstrapTooltipCustomElement = (function () {
    function BootstrapTooltipCustomElement() {
        this.container = false;
        this.delay = 0;
        this.placement = 'top';
        this.selector = false;
        this.animation = true;
        this.html = false;
        this.trigger = 'hover focus';
        this.offset = 0;
        this.fallbackPlacement = 'flip';
        this.boundary = 'scrollParent';
        this.template = '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>';
    }
    BootstrapTooltipCustomElement.prototype.attached = function () {
        var _this = this;
        this.parentElement = this.tooltip.parentElement;
        var slotContent = this.html ? this.tooltip.innerHTML : this.tooltip.textContent;
        this.offset = Number(this.offset);
        this.animation = (this.animation === '' && this.tooltip.hasAttribute('animation')) || this.animation.toString() === 'true';
        this.container = (this.container === '' && this.tooltip.hasAttribute('container')) || this.container.toString() === 'true';
        this.html = (this.html === '' && this.tooltip.hasAttribute('html')) || this.html.toString() === 'true';
        this.selector = (this.selector === '' && this.tooltip.hasAttribute('selector')) || this.selector.toString() === 'true';
        $(this.parentElement).tooltip({
            'title': slotContent,
            'html': this.html,
            'template': this.template,
            'animation': this.animation,
            'placement': this.placement,
            'container': this.container,
            'delay': this.delay,
            'trigger': this.trigger,
            'offset': this.offset,
            'fallbackPlacement': this.fallbackPlacement,
            'boundary': this.boundary
        });
        this.tooltip.remove();
        if (this.bsShow) {
            $(this.parentElement).on('show.bs.tooltip', function () {
                if (_this.bsShow) {
                    _this.bsShow();
                }
            });
        }
        if (this.bsShown) {
            $(this.parentElement).on('shown.bs.tooltip', function () {
                if (_this.bsShown) {
                    _this.bsShown();
                }
            });
        }
        if (this.bsHide) {
            $(this.parentElement).on('hide.bs.tooltip', function () {
                if (_this.bsHide) {
                    _this.bsHide();
                }
            });
        }
        if (this.bsHidden) {
            $(this.parentElement).on('hidden.bs.tooltip', function () {
                if (_this.bsHidden) {
                    _this.bsHidden();
                }
            });
        }
        if (this.bsInserted) {
            $(this.parentElement).on('inserted.bs.tooltip', function () {
                if (_this.bsInserted) {
                    _this.bsInserted();
                }
            });
        }
    };
    BootstrapTooltipCustomElement.prototype.detached = function () {
        $(this.parentElement).tooltip('dispose');
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTooltipCustomElement.prototype, "container", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTooltipCustomElement.prototype, "delay", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTooltipCustomElement.prototype, "placement", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTooltipCustomElement.prototype, "selector", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTooltipCustomElement.prototype, "animation", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTooltipCustomElement.prototype, "html", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapTooltipCustomElement.prototype, "trigger", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTooltipCustomElement.prototype, "offset", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], BootstrapTooltipCustomElement.prototype, "fallbackPlacement", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapTooltipCustomElement.prototype, "boundary", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], BootstrapTooltipCustomElement.prototype, "template", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTooltipCustomElement.prototype, "bsShow", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTooltipCustomElement.prototype, "bsShown", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTooltipCustomElement.prototype, "bsHide", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTooltipCustomElement.prototype, "bsHidden", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], BootstrapTooltipCustomElement.prototype, "bsInserted", void 0);
    BootstrapTooltipCustomElement = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('abt-tooltip')
    ], BootstrapTooltipCustomElement);
    return BootstrapTooltipCustomElement;
}());
exports.BootstrapTooltipCustomElement = BootstrapTooltipCustomElement;
//# sourceMappingURL=abt-tooltip.js.map
});
___scope___.file("components/bootstrap/tooltip/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-tooltip"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-tooltip')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/bootstrap/touchspin/abt-touchspin.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
require("./scripts/jquery.bootstrap-touchspin");
var BootstrapTouchspinCustomElement = (function () {
    function BootstrapTouchspinCustomElement() {
    }
    BootstrapTouchspinCustomElement = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('abt-touchspin')
    ], BootstrapTouchspinCustomElement);
    return BootstrapTouchspinCustomElement;
}());
exports.BootstrapTouchspinCustomElement = BootstrapTouchspinCustomElement;
//# sourceMappingURL=abt-touchspin.js.map
});
___scope___.file("components/bootstrap/touchspin/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./abt-touchspin"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./abt-touchspin')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/bootstrap/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/jquery/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/vanilla/index'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/jquery/block-ui/aut-block-ui-option.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=aut-block-ui-option.js.map
});
___scope___.file("components/jquery/block-ui/aut-block-ui.js", function(exports, require, module, __filename, __dirname){

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
var sharedOptions_1 = require("./sharedOptions");
var jsTools_1 = require("./../../../utilities/vanilla/jsTools");
var aurelia_framework_1 = require("aurelia-framework");
var $ = require("jquery");
require("aureliatoolbelt-thirdparty/jquery.blockUI/jquery.blockUI.js");
var aut_block_ui_option_1 = require("./aut-block-ui-option");
var JQueryBlockUI = (function () {
    function JQueryBlockUI(element, option, jsTools, sharedOptions) {
        this.element = element;
        this.option = option;
        this.jsTools = jsTools;
        this.sharedOptions = sharedOptions;
        this.settings = null;
        this.block = false;
        this.blockPage = false;
        this.spinnerMessage = null;
        this.defaultOption = {};
        this.allOptions = {};
        this.id = '';
    }
    JQueryBlockUI.prototype.hasContent = function () {
        var slot = this.content.innerHTML.replace('<!--slot-->', '').trim();
        if (slot.length > 0) {
            return true;
        }
        return false;
    };
    JQueryBlockUI.prototype.attached = function () {
        this.id = this.content.id;
        this.elementId = "#" + this.id;
        if (this.blockPage && this.hasContent()) {
            throw Error('You can not use the [aut-block-ui] with [block-page] property, while you have defined a content inside it.');
        }
        this.setDefaultOption();
        this.defaultOption.blockMsgClass += " m" + this.id;
        this.sharedOptions.setOption(this.id, {
            id: this.id,
            settings: this.settings || {},
            option: this.option || {},
            default: this.defaultOption
        });
        this.blockChanged(this.block);
        this.blockPageChanged(this.blockPage);
    };
    JQueryBlockUI.prototype.setDefaultOption = function () {
        this.defaultOption.allowBodyStretch = true;
        this.defaultOption.css = {
            padding: '0',
            margin: '0',
            width: '30%',
            top: '45%',
            left: '35%',
            textAlign: 'center',
            color: '#000',
            border: '3px solid #aaa',
            backgroundColor: '#fff',
            cursor: 'wait'
        };
        this.defaultOption.overlayCss = {
            backgroundColor: '#000',
            opacity: 0.6,
            cursor: 'wait'
        };
        this.defaultOption.cursorReset = 'default';
        this.defaultOption.iframeSrc = (/^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank');
        this.defaultOption.forceIframe = false;
        this.defaultOption.baseZ = 1020;
        this.defaultOption.centerX = true;
        this.defaultOption.centerY = true;
        this.defaultOption.bindEvents = true;
        this.defaultOption.constrainTabKey = true;
        this.defaultOption.fadeIn = 200;
        this.defaultOption.fadeOut = 400;
        this.defaultOption.timeout = 0;
        this.defaultOption.showOverlay = true;
        this.defaultOption.focusInput = true;
        this.defaultOption.quirksmodeOffsetHack = 4;
        this.defaultOption.blockMsgClass = 'blockMsg';
        this.defaultOption.ignoreIfBlocked = false;
        this.defaultOption.message = '<h1>Please wait...</h1>';
        this.defaultOption.useSpinner = true;
    };
    JQueryBlockUI.prototype.setSpinnerStyle = function (id, option) {
        var unit = this.getSizeUnit(option.spinnerSize);
        var size = this.getSize(option.spinnerSize);
        var bsVariant = ['.primary', '.secondary', '.success', '.danger', '.warning', '.info', '.light', '.dark'];
        var isClass = false;
        var spinnerBgColor = '';
        if (option.spinnerColor) {
            isClass = option.spinnerColor.indexOf('.') > -1;
            if (isClass) {
                if (bsVariant.indexOf(option.spinnerColor) > -1) {
                    spinnerBgColor = 'bg-' + option.spinnerColor.replace('.', '');
                }
                else {
                    spinnerBgColor = option.spinnerColor.replace('.', '');
                }
            }
            else {
                spinnerBgColor = "background-color: " + (option.spinnerColor || '#92459B') + " !important";
            }
        }
        else {
            spinnerBgColor = 'bg-primary';
            isClass = true;
        }
        var style = "\n    .blockElement." + ('m' + id) + "{\n      z-index: " + option.baseZ + " !important;\n    }\n    .blockPage." + ('m' + id) + "{\n      z-index: " + option.baseZ + " !important;\n    }\n    ." + ('b' + id) + " {\n      width: " + size + unit + " !important;\n      height: " + size + unit + " !important;\n      " + (!isClass ? spinnerBgColor : '') + "\n    }";
        aurelia_framework_1.DOM.injectStyles(style, null, null, 's' + id);
        this.spinnerMessage = "<div class=\"bounce\"><div class=\"bounce1 " + (isClass ? spinnerBgColor : '') + " " + ('b' + id) + "\"></div><div class=\"bounce2 " + (isClass ? spinnerBgColor : '') + " " + ('b' + id) + "\"></div><div class=\"bounce3 " + (isClass ? spinnerBgColor : '') + " " + ('b' + id) + "\"></div></div>";
    };
    JQueryBlockUI.prototype.blockChanged = function (isBlocked) {
        var _this = this;
        var option;
        var merged = this.sharedOptions.getOption(this.id);
        if (merged) {
            option = Object.assign({}, merged.default, merged.option, merged.settings);
        }
        if (!this.jsTools.isEmpty(option) && option.useSpinner) {
            this.setSpinnerStyle(this.id, option);
            option.css = {
                border: 'none',
                backgroundColor: 'transparent'
            };
            option.message = this.spinnerMessage;
            option.overlayCSS = {
                backgroundColor: '#EEEEEE'
            };
        }
        if (isBlocked) {
            $(this.elementId).block(option);
            this.element.classList.add('aut-block-ui-content');
            $(window).resize(function () {
                if (_this.element.classList.contains('aut-block-ui-content')) {
                    $(_this.elementId).block(option);
                }
            });
        }
        else {
            $(this.elementId).unblock();
            this.element.classList.remove('aut-block-ui-content');
        }
    };
    JQueryBlockUI.prototype.blockPageChanged = function (isBlocked) {
        if (this.blockPage && this.hasContent()) {
            throw Error('You can not use the [aut-block-ui] with [block-page] property, while you have defined a content inside it.');
        }
        var option;
        var merged = this.sharedOptions.getOption(this.id);
        if (merged) {
            option = Object.assign({}, merged.default, merged.option, merged.settings);
        }
        if (!this.jsTools.isEmpty(option) && option.useSpinner) {
            this.setSpinnerStyle(this.id, option);
            option.css = {
                border: 'none',
                backgroundColor: 'transparent'
            };
            option.message = this.spinnerMessage;
            option.overlayCSS = {
                backgroundColor: '#EEEEEE'
            };
        }
        if (isBlocked) {
            $.blockUI(option);
        }
        else {
            $.unblockUI();
        }
    };
    JQueryBlockUI.prototype.getSizeUnit = function (text) {
        if (!text) {
            return 'px';
        }
        var unit = text.replace(/[0-9]/g, '').replace('.', '');
        if (unit === '') {
            unit = 'px';
        }
        return unit;
    };
    JQueryBlockUI.prototype.getSize = function (text) {
        if (!text) {
            return 12;
        }
        var unit = this.getSizeUnit(text);
        var size = Number(text.replace(unit, '').trim());
        return size;
    };
    JQueryBlockUI.prototype.detached = function () {
        $.unblockUI();
        $(this.content).unblock();
        this.sharedOptions.dispose();
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", typeof (_a = typeof aut_block_ui_option_1.IAutBlockUIOption !== "undefined" && aut_block_ui_option_1.IAutBlockUIOption) === "function" && _a || Object)
    ], JQueryBlockUI.prototype, "settings", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], JQueryBlockUI.prototype, "block", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], JQueryBlockUI.prototype, "blockPage", void 0);
    JQueryBlockUI = __decorate([
        aurelia_framework_1.customElement('aut-block-ui'),
        aurelia_framework_1.inject(Element, 'aut-block-ui-option', jsTools_1.JsTools, sharedOptions_1.SharedOptions),
        __metadata("design:paramtypes", [Object, typeof (_b = typeof aut_block_ui_option_1.IAutBlockUIOption !== "undefined" && aut_block_ui_option_1.IAutBlockUIOption) === "function" && _b || Object, typeof (_c = typeof jsTools_1.JsTools !== "undefined" && jsTools_1.JsTools) === "function" && _c || Object, typeof (_d = typeof sharedOptions_1.SharedOptions !== "undefined" && sharedOptions_1.SharedOptions) === "function" && _d || Object])
    ], JQueryBlockUI);
    return JQueryBlockUI;
    var _a, _b, _c, _d;
}());
exports.JQueryBlockUI = JQueryBlockUI;
//# sourceMappingURL=aut-block-ui.js.map
});
___scope___.file("components/jquery/block-ui/sharedOptions.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var SharedOptions = (function () {
    function SharedOptions() {
        this.allOptions = {};
    }
    SharedOptions.prototype.getOption = function (id) {
        return this.allOptions[id];
    };
    SharedOptions.prototype.setOption = function (id, obj) {
        this.allOptions[id] = {
            id: id,
            settings: obj.settings,
            option: obj.option,
            default: obj.default
        };
    };
    SharedOptions.prototype.dispose = function () {
        this.allOptions = {};
    };
    SharedOptions = __decorate([
        aurelia_dependency_injection_1.singleton()
    ], SharedOptions);
    return SharedOptions;
}());
exports.SharedOptions = SharedOptions;
//# sourceMappingURL=sharedOptions.js.map
});
___scope___.file("components/jquery/block-ui/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./aut-block-ui"));
function configure(config, option) {
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./aut-block-ui')]);
    config.container.registerInstance('aut-block-ui-option', option);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/jquery/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/jquery/block-ui/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/jquery/lazy-image/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/jquery/metis-menu/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/jquery/news-ticker/index'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/jquery/lazy-image/aut-lazy-image.js", function(exports, require, module, __filename, __dirname){

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
var $ = require("jquery");
require("jquery-lazy");
var JQueryLazyImage = (function () {
    function JQueryLazyImage(element) {
        this.element = element;
        this.backgroundMode = false;
        this.name = 'lazy';
        this.chainable = true;
        this.autoDestroy = true;
        this.bind = 'load';
        this.threshold = 500;
        this.visibleOnly = false;
        this.appendScroll = window;
        this.scrollDirection = 'both';
        this.imageBase = null;
        this.defaultImage = '';
        this.placeholder = null;
        this.delay = -1;
        this.combined = false;
        this.effect = 'show';
        this.effectTime = 0;
        this.enableThrottle = true;
        this.throttle = 250;
    }
    JQueryLazyImage.prototype.attached = function () {
        this.backgroundMode = this.backgroundMode === true || this.backgroundMode === 'true';
        if (this.customLoader !== undefined) {
            $(this.element.previousElementSibling).attr('data-loader', 'customLoader');
        }
        var config = {
            customLoader: this.customLoader,
            name: this.name,
            chainable: this.chainable,
            autoDestroy: this.autoDestroy,
            bind: this.bind,
            threshold: this.threshold,
            visibleOnly: this.visibleOnly,
            appendScroll: this.appendScroll,
            scrollDirection: this.scrollDirection,
            imageBase: this.imageBase,
            defaultImage: this.defaultImage,
            placeholder: this.placeholder,
            delay: this.delay,
            combined: this.combined,
            effect: this.effect,
            effectTime: this.effectTime,
            enableThrottle: this.enableThrottle,
            throttle: this.throttle,
            beforeLoad: this.beforeLoad,
            afterLoad: this.afterLoad,
            onError: this.error
        };
        $(this.element.previousElementSibling).lazy(config);
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], JQueryLazyImage.prototype, "backgroundMode", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], JQueryLazyImage.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], JQueryLazyImage.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], JQueryLazyImage.prototype, "url", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], JQueryLazyImage.prototype, "name", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Boolean)
    ], JQueryLazyImage.prototype, "chainable", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Boolean)
    ], JQueryLazyImage.prototype, "autoDestroy", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], JQueryLazyImage.prototype, "bind", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Number)
    ], JQueryLazyImage.prototype, "threshold", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Boolean)
    ], JQueryLazyImage.prototype, "visibleOnly", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], JQueryLazyImage.prototype, "appendScroll", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], JQueryLazyImage.prototype, "scrollDirection", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], JQueryLazyImage.prototype, "imageBase", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], JQueryLazyImage.prototype, "defaultImage", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], JQueryLazyImage.prototype, "placeholder", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Number)
    ], JQueryLazyImage.prototype, "delay", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Boolean)
    ], JQueryLazyImage.prototype, "combined", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], JQueryLazyImage.prototype, "effect", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Number)
    ], JQueryLazyImage.prototype, "effectTime", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Boolean)
    ], JQueryLazyImage.prototype, "enableThrottle", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Number)
    ], JQueryLazyImage.prototype, "throttle", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], JQueryLazyImage.prototype, "beforeLoad", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], JQueryLazyImage.prototype, "afterLoad", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], JQueryLazyImage.prototype, "error", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], JQueryLazyImage.prototype, "customLoader", void 0);
    JQueryLazyImage = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('aut-lazy-image'),
        __metadata("design:paramtypes", [Object])
    ], JQueryLazyImage);
    return JQueryLazyImage;
}());
exports.JQueryLazyImage = JQueryLazyImage;
//# sourceMappingURL=aut-lazy-image.js.map
});
___scope___.file("components/jquery/lazy-image/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./aut-lazy-image"));
function configure(config) {
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./aut-lazy-image')]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/jquery/metis-menu/aut-metis-menu-group.js", function(exports, require, module, __filename, __dirname){

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
var JQueryMetisGroup = (function () {
    function JQueryMetisGroup(element) {
        this.element = element;
        this.groupClass = '';
        this.iconClass = '';
        this.arrowClass = ' fa arrow';
        this.active = false;
        this.showArrow = true;
    }
    JQueryMetisGroup.prototype.attached = function () {
        this.active = this.active === true
            || this.active === 'true'
            || ((this.active === undefined || this.active == null) && this.element.hasAttribute('active'));
        this.showArrow = this.showArrow === true
            || this.showArrow === 'true'
            || ((this.showArrow === undefined || this.showArrow == null) && this.element.hasAttribute('showArrow'));
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], JQueryMetisGroup.prototype, "text", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], JQueryMetisGroup.prototype, "groupClass", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], JQueryMetisGroup.prototype, "iconClass", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], JQueryMetisGroup.prototype, "arrowClass", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], JQueryMetisGroup.prototype, "active", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], JQueryMetisGroup.prototype, "showArrow", void 0);
    JQueryMetisGroup = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('aut-metis-menu-group'),
        __metadata("design:paramtypes", [Object])
    ], JQueryMetisGroup);
    return JQueryMetisGroup;
}());
exports.JQueryMetisGroup = JQueryMetisGroup;
//# sourceMappingURL=aut-metis-menu-group.js.map
});
___scope___.file("components/jquery/metis-menu/aut-metis-menu-item.js", function(exports, require, module, __filename, __dirname){

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
var JQueryMetisItem = (function () {
    function JQueryMetisItem() {
        this.href = null;
    }
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], JQueryMetisItem.prototype, "href", void 0);
    JQueryMetisItem = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('aut-metis-menu-item')
    ], JQueryMetisItem);
    return JQueryMetisItem;
}());
exports.JQueryMetisItem = JQueryMetisItem;
//# sourceMappingURL=aut-metis-menu-item.js.map
});
___scope___.file("components/jquery/metis-menu/aut-metis-menu.js", function(exports, require, module, __filename, __dirname){

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
var $ = require("jquery");
require("metismenu");
var JQueryMetisMenu = (function () {
    function JQueryMetisMenu(element) {
        this.element = element;
        this.class = '';
        this.style = '';
    }
    JQueryMetisMenu.prototype.attached = function () {
        var _this = this;
        $(this.metismenu).metisMenu()
            .on('show.metismenu', function (event) {
            console.log("show menu: " + JSON.stringify(event));
            console.log(_this.showMenu);
            var localEvent = _this.showMenu;
            if (localEvent !== null || localEvent !== undefined) {
                Promise.resolve(function () {
                    localEvent(event);
                });
            }
        })
            .on('shown.metismenu', function (event) {
            console.log("shown menu: " + JSON.stringify(event));
            var localEvent = _this.shownMenu;
            if (localEvent !== null || localEvent !== undefined) {
                Promise.resolve(function () {
                    localEvent(event);
                });
            }
        })
            .on('hide.metismenu', function (event) {
            console.log("hide menu: " + JSON.stringify(event));
            var localEvent = _this.hideMenu;
            if (localEvent !== null || localEvent !== undefined) {
                Promise.resolve(function () {
                    localEvent(event);
                });
            }
        })
            .on('hidden.metismenu', function (event) {
            console.log("menu hidden: " + JSON.stringify(event));
            var localEvent = _this.hiddenMenu;
            if (localEvent !== null || localEvent !== undefined) {
                Promise.resolve(function () {
                    localEvent(event);
                });
            }
        });
    };
    JQueryMetisMenu.prototype.detached = function () {
        $(this.metismenu).metisMenu('dispose');
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], JQueryMetisMenu.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], JQueryMetisMenu.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], JQueryMetisMenu.prototype, "showMenu", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], JQueryMetisMenu.prototype, "shownMenu", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], JQueryMetisMenu.prototype, "hideMenu", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], JQueryMetisMenu.prototype, "hiddenMenu", void 0);
    JQueryMetisMenu = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('aut-metis-menu'),
        __metadata("design:paramtypes", [Object])
    ], JQueryMetisMenu);
    return JQueryMetisMenu;
}());
exports.JQueryMetisMenu = JQueryMetisMenu;
//# sourceMappingURL=aut-metis-menu.js.map
});
___scope___.file("components/jquery/metis-menu/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./aut-metis-menu"));
__export(require("./aut-metis-menu-group"));
__export(require("./aut-metis-menu-item"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./aut-metis-menu'),
        aurelia_framework_1.PLATFORM.moduleName('./aut-metis-menu-group'),
        aurelia_framework_1.PLATFORM.moduleName('./aut-metis-menu-item')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/jquery/news-ticker/aut-news-ticker.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var JQueryNewsTicker = (function () {
    function JQueryNewsTicker() {
    }
    JQueryNewsTicker = __decorate([
        aurelia_framework_1.customElement('aut-news-ticker')
    ], JQueryNewsTicker);
    return JQueryNewsTicker;
}());
exports.JQueryNewsTicker = JQueryNewsTicker;
//# sourceMappingURL=aut-news-ticker.js.map
});
___scope___.file("components/jquery/news-ticker/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./aut-news-ticker"));
function configure(config) {
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./aut-news-ticker')]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/vanilla/clock/aut-clock.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_templating_1 = require("aurelia-templating");
var ClockCustomElement = (function () {
    function ClockCustomElement() {
        this.text = 'Aurelia is awesome';
        this.color = '#753B85';
        this.shadowColor = '';
        this.fontSize = '40';
        this.locale = 'en';
        this.dateFormat = 'YYYY/MM/DD';
        this.be24Hours = true;
        this.showText = true;
        this.showDate = true;
        this.showTime = true;
    }
    ClockCustomElement.prototype.attached = function () {
        var _this = this;
        this.value = new Date();
        var self = this;
        return new Promise(function (resolve) {
            _this.timer = setInterval(function () {
                self.value = new Date();
            }, 1000);
            resolve();
        });
    };
    ClockCustomElement.prototype.detached = function () {
        clearTimeout(this.timer);
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], ClockCustomElement.prototype, "text", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], ClockCustomElement.prototype, "color", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], ClockCustomElement.prototype, "shadowColor", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], ClockCustomElement.prototype, "fontSize", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], ClockCustomElement.prototype, "locale", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], ClockCustomElement.prototype, "dateFormat", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], ClockCustomElement.prototype, "be24Hours", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], ClockCustomElement.prototype, "showText", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], ClockCustomElement.prototype, "showDate", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], ClockCustomElement.prototype, "showTime", void 0);
    ClockCustomElement = __decorate([
        aurelia_templating_1.containerless(),
        aurelia_framework_1.customElement('aut-clock')
    ], ClockCustomElement);
    return ClockCustomElement;
}());
exports.ClockCustomElement = ClockCustomElement;
//# sourceMappingURL=aut-clock.js.map
});
___scope___.file("components/vanilla/clock/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./aut-clock'));
}
exports.configure = configure;
__export(require("./aut-clock"));
//# sourceMappingURL=index.js.map
});
___scope___.file("components/vanilla/divider/aut-divider.js", function(exports, require, module, __filename, __dirname){

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
var sharedIndex_1 = require("./../../../utilities/vanilla/sharedIndex");
var aurelia_framework_1 = require("aurelia-framework");
var DividerCustomElement = (function () {
    function DividerCustomElement(element, sharedIndex) {
        this.element = element;
        this.sharedIndex = sharedIndex;
        this.vertical = false;
        this.color = '#b5b5b5';
        this.backgroundColor = '#fff';
        this.lineColor = '#dbdbdb';
    }
    DividerCustomElement.prototype.attached = function () {
        this.vertical = (this.vertical === '' && this.element.hasAttribute('vertical')) || this.vertical.toString() === 'true';
        var value = this.divider.innerText;
        this.divider.innerText = '';
        this.divider.setAttribute('data-content', value);
        var css = ".is-divider-vertical[data-content]::after,.is-divider[data-content]::after{\n      background:" + this.backgroundColor + "!important;color:" + this.color + "!important}\n      .is-divider{border-top:.1rem solid " + this.lineColor + "!important;}\n      .is-divider-vertical::before{border-left:.1rem solid " + this.lineColor + "!important;}\n      ";
        aurelia_framework_1.DOM.injectStyles(css, null, null, 'aut_divider_injected_style');
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], DividerCustomElement.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], DividerCustomElement.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], DividerCustomElement.prototype, "vertical", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], DividerCustomElement.prototype, "color", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], DividerCustomElement.prototype, "backgroundColor", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], DividerCustomElement.prototype, "lineColor", void 0);
    DividerCustomElement = __decorate([
        aurelia_framework_1.customElement('aut-divider'),
        aurelia_framework_1.inject(Element, sharedIndex_1.SharedIndex),
        aurelia_framework_1.containerless(),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof sharedIndex_1.SharedIndex !== "undefined" && sharedIndex_1.SharedIndex) === "function" && _a || Object])
    ], DividerCustomElement);
    return DividerCustomElement;
    var _a;
}());
exports.DividerCustomElement = DividerCustomElement;
//# sourceMappingURL=aut-divider.js.map
});
___scope___.file("components/vanilla/divider/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./aut-divider"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./aut-divider')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/vanilla/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/vanilla/clock/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/vanilla/mark-down/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/vanilla/nprogress/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/vanilla/pretty/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/vanilla/microlink/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/vanilla/scrollup/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/vanilla/raw-html/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/vanilla/divider/index'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/vanilla/mark-down/aut-mark-down.js", function(exports, require, module, __filename, __dirname){

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
var MarkDownItCustomElement = (function () {
    function MarkDownItCustomElement(http) {
        this.http = http;
        this.isLoading = false;
        this.myText = '';
        this.showToolBar = false;
        this.showPreview = true;
        this.showEditor = false;
        this.src = '';
    }
    MarkDownItCustomElement.prototype.afterAttached = function () {
        this.myText = this.slotContainer.innerHTML.replace('<!--slot-->', '').trim();
        this.srcChanged(this.src);
    };
    MarkDownItCustomElement.prototype.srcChanged = function (newValue) {
        var _this = this;
        this.isLoading = true;
        return this.http.get(newValue || this.src)
            .then(function (data) {
            _this.myText = data.response;
            _this.isLoading = false;
        });
    };
    MarkDownItCustomElement.prototype.addText = function (text, cursorPosition) {
        if (cursorPosition === void 0) { cursorPosition = 0; }
        if (!this.editor) {
            return;
        }
        var scrollPos = this.editor.scrollTop;
        var strPos = this.editor.selectionStart;
        var front = (this.myText).substring(0, strPos);
        var back = (this.myText).substring(strPos, this.editor.value.length);
        this.editor.value = front + text + back;
        strPos = cursorPosition === 0 ? strPos + text.length : strPos + cursorPosition;
        this.editor.focus();
        this.editor.selectionStart = strPos;
        this.editor.selectionEnd = strPos;
        this.editor.scrollTo({
            top: scrollPos
        });
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Boolean)
    ], MarkDownItCustomElement.prototype, "showToolBar", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Boolean)
    ], MarkDownItCustomElement.prototype, "showPreview", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Boolean)
    ], MarkDownItCustomElement.prototype, "showEditor", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], MarkDownItCustomElement.prototype, "src", void 0);
    MarkDownItCustomElement = __decorate([
        aurelia_framework_1.inject(aurelia_http_client_1.HttpClient),
        aurelia_framework_1.customElement('aut-mark-down'),
        __metadata("design:paramtypes", [typeof (_a = typeof aurelia_http_client_1.HttpClient !== "undefined" && aurelia_http_client_1.HttpClient) === "function" && _a || Object])
    ], MarkDownItCustomElement);
    return MarkDownItCustomElement;
    var _a;
}());
exports.MarkDownItCustomElement = MarkDownItCustomElement;
//# sourceMappingURL=aut-mark-down.js.map
});
___scope___.file("components/vanilla/mark-down/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./aut-mark-down"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./aut-mark-down')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/vanilla/microlink/aut-microlink.js", function(exports, require, module, __filename, __dirname){

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
var microlink = require('aureliatoolbelt-thirdparty/microlink/microlink.js');
var aurelia_framework_1 = require("aurelia-framework");
var MicrolinkCustomElement = (function () {
    function MicrolinkCustomElement() {
        this.class = '';
        this.round = true;
        this.url = null;
    }
    MicrolinkCustomElement.prototype.afterAttached = function () {
        microlink("#" + this.microlink.id, { round: this.round });
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], MicrolinkCustomElement.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Boolean)
    ], MicrolinkCustomElement.prototype, "round", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], MicrolinkCustomElement.prototype, "url", void 0);
    MicrolinkCustomElement = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('aut-micro-link')
    ], MicrolinkCustomElement);
    return MicrolinkCustomElement;
}());
exports.MicrolinkCustomElement = MicrolinkCustomElement;
//# sourceMappingURL=aut-microlink.js.map
});
___scope___.file("components/vanilla/microlink/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./aut-microlink"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./aut-microlink')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/vanilla/nprogress/aut-nprogress.js", function(exports, require, module, __filename, __dirname){

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
var nprogress = require("nprogress");
var aurelia_framework_1 = require("aurelia-framework");
require("nprogress/nprogress.css");
var NProgressLoadingIndicator = (function () {
    function NProgressLoadingIndicator() {
        this.loading = false;
        this.showSpinner = false;
        this.easing = 'ease';
        this.speed = 500;
        this.color = '#753B85';
        this.size = 4;
    }
    NProgressLoadingIndicator.prototype.attached = function () {
        this.showSpinner = this.showSpinner === true || this.showSpinner === 'true';
        nprogress.configure({ showSpinner: this.showSpinner, easing: this.easing, speed: this.speed });
        aurelia_framework_1.DOM.injectStyles("#nprogress .bar {\n      background: " + this.color + " !important;\n      height: " + this.size + "px !important;\n    }\n    #nprogress .peg {\n      box-shadow: 0 0 10px " + this.color + ", 0 0 5px " + this.color + " !important;\n    }\n    #nprogress .spinner-icon {\n      border-top-color: " + this.color + " !important;\n      border-left-color: " + this.color + " !important;\n    }", null, null, 'aut-injected-nprogress');
    };
    NProgressLoadingIndicator.prototype.loadingChanged = function (newValue) {
        if (newValue) {
            nprogress.start();
        }
        else {
            nprogress.done();
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], NProgressLoadingIndicator.prototype, "loading", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], NProgressLoadingIndicator.prototype, "showSpinner", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], NProgressLoadingIndicator.prototype, "easing", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Number)
    ], NProgressLoadingIndicator.prototype, "speed", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], NProgressLoadingIndicator.prototype, "color", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Number)
    ], NProgressLoadingIndicator.prototype, "size", void 0);
    NProgressLoadingIndicator = __decorate([
        aurelia_framework_1.noView(),
        aurelia_framework_1.customElement('aut-nprogress')
    ], NProgressLoadingIndicator);
    return NProgressLoadingIndicator;
}());
exports.NProgressLoadingIndicator = NProgressLoadingIndicator;
//# sourceMappingURL=aut-nprogress.js.map
});
___scope___.file("components/vanilla/nprogress/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./aut-nprogress'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/vanilla/pretty/aut-checkbox.js", function(exports, require, module, __filename, __dirname){

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
var PrettyCheckboxCustomElement = (function () {
    function PrettyCheckboxCustomElement(element, bindingEngine) {
        this.element = element;
        this.bindingEngine = bindingEngine;
        this.disabled = false;
        this.name = '';
        this.switch = false;
        this.outlined = false;
        this.offColor = '';
        this.offLabel = '';
        this.animation = '';
        this.subscription = null;
    }
    PrettyCheckboxCustomElement.prototype.changed = function () {
        if (this.disabled) {
            return;
        }
        this.state = !this.state;
        this.synchronizeModel(this.state);
    };
    PrettyCheckboxCustomElement.prototype.synchronizeModel = function (newState) {
        var _this = this;
        if (!Array.isArray(this.checked)) {
            this.checked = newState;
            return;
        }
        if (newState && ((this.matcher && this.checked.findIndex(function (x) { return _this.matcher(x, _this.value || _this.model); }) === -1)
            ||
                (this.checked.indexOf(this.value || this.model) === -1))) {
            this.checked.push(this.value || this.model);
        }
        else if (!newState) {
            var index = this.matcher
                ? this.checked.findIndex(function (x) { return _this.matcher(x, _this.value || _this.model); })
                : this.checked.indexOf(this.value || this.model);
            if (index !== -1) {
                this.checked.splice(index, 1);
            }
        }
    };
    PrettyCheckboxCustomElement.prototype.checkedChanged = function (newValue) {
        var _this = this;
        this.disposeSubscription();
        if (Array.isArray(this.checked)) {
            this.subscription = this.bindingEngine.collectionObserver(this.checked)
                .subscribe(function () {
                _this.synchronizeView(newValue);
            });
        }
        this.synchronizeView(newValue);
    };
    PrettyCheckboxCustomElement.prototype.synchronizeView = function (newValue) {
        var _this = this;
        if (Array.isArray(this.checked)) {
            var index = this.matcher
                ? this.checked.findIndex(function (x) { return _this.matcher(x, _this.value || _this.model); })
                : this.checked.indexOf(this.value || this.model);
            this.state = index !== -1;
        }
        else {
            this.state = newValue;
        }
    };
    PrettyCheckboxCustomElement.prototype.disposeSubscription = function () {
        if (this.subscription !== null) {
            this.subscription.dispose();
            this.subscription = null;
        }
    };
    PrettyCheckboxCustomElement.prototype.bind = function () {
        if (!this.element.hasAttribute) {
            console.warn(this.element);
        }
        this.switch = this.switch === true || this.switch === 'true' || this.element.hasAttribute('switch');
        this.outlined = this.outlined === true || this.outlined === 'true' || this.element.hasAttribute('outlined');
        this.disabled = this.disabled === true || this.disabled === 'true' || this.disabled === 'disabled';
        this.colorCss = "p-" + this.color;
        this.offColorCss = this.offColor !== '' ? "p-" + this.offColor : '';
        if (this.switch) {
            if (this.element.hasAttribute('slim')) {
                this.appearanceCSS = 'p-slim';
            }
            else if (this.element.hasAttribute('outlined')) {
                this.appearanceCSS = 'p-outline';
            }
            else {
                this.appearanceCSS = 'p-fill';
            }
        }
        else {
            if (this.element.hasAttribute('curve')) {
                this.appearanceCSS = 'p-curve';
            }
            else if (this.element.hasAttribute('round')) {
                this.appearanceCSS = 'p-round';
            }
            else {
                this.appearanceCSS = '';
            }
        }
        this.thickCss = this.element.hasAttribute('thick') ? 'p-thick' : '';
        this.thickCss = this.element.hasAttribute('plain') ? 'p-plain' : '';
        this.animationCss = this.animation !== '' ? "p-" + this.animation : '';
        this.isCheckBox = !this.element.hasAttribute('radio');
        this.synchronizeView(this.checked);
    };
    PrettyCheckboxCustomElement.prototype.unbind = function () {
        this.disposeSubscription();
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], PrettyCheckboxCustomElement.prototype, "value", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], PrettyCheckboxCustomElement.prototype, "model", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], PrettyCheckboxCustomElement.prototype, "checked", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], PrettyCheckboxCustomElement.prototype, "matcher", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], PrettyCheckboxCustomElement.prototype, "disabled", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", String)
    ], PrettyCheckboxCustomElement.prototype, "name", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], PrettyCheckboxCustomElement.prototype, "switch", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], PrettyCheckboxCustomElement.prototype, "outlined", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], PrettyCheckboxCustomElement.prototype, "color", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], PrettyCheckboxCustomElement.prototype, "offColor", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], PrettyCheckboxCustomElement.prototype, "offLabel", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], PrettyCheckboxCustomElement.prototype, "animation", void 0);
    PrettyCheckboxCustomElement = __decorate([
        aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
        aurelia_framework_1.customElement('aut-checkbox'),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof aurelia_framework_1.BindingEngine !== "undefined" && aurelia_framework_1.BindingEngine) === "function" && _a || Object])
    ], PrettyCheckboxCustomElement);
    return PrettyCheckboxCustomElement;
    var _a;
}());
exports.PrettyCheckboxCustomElement = PrettyCheckboxCustomElement;
//# sourceMappingURL=aut-checkbox.js.map
});
___scope___.file("components/vanilla/pretty/aut-radio.js", function(exports, require, module, __filename, __dirname){

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
var PrettyRadioButtonCustomElement = (function () {
    function PrettyRadioButtonCustomElement(element, bindingEngine) {
        this.element = element;
        this.bindingEngine = bindingEngine;
        this.disabled = false;
        this.name = '';
        this.switch = false;
        this.outlined = false;
        this.offColor = '';
        this.offLabel = '';
        this.animation = '';
    }
    PrettyRadioButtonCustomElement.prototype.changed = function () {
        if (this.disabled) {
            return;
        }
        this.synchronizeModel();
    };
    PrettyRadioButtonCustomElement.prototype.synchronizeModel = function () {
        this.checked = (this.model !== undefined)
            ? this.model
            : this.value;
    };
    PrettyRadioButtonCustomElement.prototype.checkedChanged = function () {
        this.synchronizeView();
    };
    PrettyRadioButtonCustomElement.prototype.synchronizeView = function () {
        if (this.model !== undefined) {
            this.radioButton.checked = this.matcher
                ? this.matcher(this.checked, this.model)
                : this.checked === this.model;
        }
        else if (this.value) {
            this.radioButton.checked = this.matcher
                ? this.matcher(this.checked, this.value)
                : this.checked === this.value;
        }
    };
    PrettyRadioButtonCustomElement.prototype.bind = function () {
        if (!this.element.hasAttribute) {
            console.warn(this.element);
        }
        this.switch = this.switch === true || this.switch === 'true' || this.element.hasAttribute('switch');
        this.outlined = this.outlined === true || this.outlined === 'true' || this.element.hasAttribute('outline');
        this.disabled = this.disabled === true || this.disabled === 'true' || this.disabled === 'disabled';
        this.colorCss = "p-" + this.color;
        this.offColorCss = this.offColor !== '' ? "p-" + this.offColor : '';
        if (this.switch) {
            if (this.element.hasAttribute('slim')) {
                this.appearanceCSS = 'p-slim';
            }
            else if (this.element.hasAttribute('outline')) {
                this.appearanceCSS = 'p-outline';
            }
            else {
                this.appearanceCSS = 'p-fill';
            }
        }
        else {
            if (this.element.hasAttribute('curve')) {
                this.appearanceCSS = 'p-curve';
            }
            else {
                this.appearanceCSS = 'p-round';
            }
        }
        this.thickCss = this.element.hasAttribute('thick') ? 'p-thick' : '';
        this.thickCss = this.element.hasAttribute('plain') ? 'p-plain' : '';
        this.animationCss = this.animation !== '' ? "p-" + this.animation : '';
        this.synchronizeView();
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], PrettyRadioButtonCustomElement.prototype, "value", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], PrettyRadioButtonCustomElement.prototype, "model", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], PrettyRadioButtonCustomElement.prototype, "checked", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], PrettyRadioButtonCustomElement.prototype, "matcher", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], PrettyRadioButtonCustomElement.prototype, "disabled", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], PrettyRadioButtonCustomElement.prototype, "name", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], PrettyRadioButtonCustomElement.prototype, "switch", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], PrettyRadioButtonCustomElement.prototype, "outlined", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], PrettyRadioButtonCustomElement.prototype, "color", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], PrettyRadioButtonCustomElement.prototype, "offColor", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], PrettyRadioButtonCustomElement.prototype, "offLabel", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], PrettyRadioButtonCustomElement.prototype, "animation", void 0);
    PrettyRadioButtonCustomElement = __decorate([
        aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
        aurelia_framework_1.customElement('aut-radio'),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof aurelia_framework_1.BindingEngine !== "undefined" && aurelia_framework_1.BindingEngine) === "function" && _a || Object])
    ], PrettyRadioButtonCustomElement);
    return PrettyRadioButtonCustomElement;
    var _a;
}());
exports.PrettyRadioButtonCustomElement = PrettyRadioButtonCustomElement;
//# sourceMappingURL=aut-radio.js.map
});
___scope___.file("components/vanilla/pretty/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./aut-checkbox"));
__export(require("./aut-radio"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./aut-checkbox'),
        aurelia_framework_1.PLATFORM.moduleName('./aut-radio')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/vanilla/raw-html/aut-raw-html.js", function(exports, require, module, __filename, __dirname){

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
var RawHtmlRenderer = (function () {
    function RawHtmlRenderer(element) {
        this.element = element;
    }
    RawHtmlRenderer.prototype.attached = function () {
        this.content = this.dummy.innerHTML.replace('<!--slot-->', '');
        this.dummy.remove();
    };
    RawHtmlRenderer = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('aut-raw-html'),
        __metadata("design:paramtypes", [Object])
    ], RawHtmlRenderer);
    return RawHtmlRenderer;
}());
exports.RawHtmlRenderer = RawHtmlRenderer;
//# sourceMappingURL=aut-raw-html.js.map
});
___scope___.file("components/vanilla/raw-html/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./aut-raw-html"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./aut-raw-html')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/vanilla/scrollup/aut-scrollup.js", function(exports, require, module, __filename, __dirname){

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
var ScrollUpCustomElement = (function () {
    function ScrollUpCustomElement() {
        this.threshold = 150;
    }
    ScrollUpCustomElement.prototype.checkScrollTop = function () {
        if (this.threshold <= 0) {
            this.threshold = 0;
        }
        if (document.body.scrollTop > this.threshold || document.documentElement.scrollTop > this.threshold) {
            this.scrollupButton.style.display = 'block';
            if (this.shownScrollUp) {
                this.shownScrollUp();
            }
        }
        else {
            this.scrollupButton.style.display = 'none';
            if (this.hideScrollUp) {
                this.hideScrollUp();
            }
        }
    };
    ScrollUpCustomElement.prototype.goToUp = function () {
        if (this.beforeScrollUp) {
            this.beforeScrollUp();
        }
        if (!document.body.scroll) {
            window.scrollTo(0, 0);
            if (this.afterScrollUp) {
                this.afterScrollUp();
            }
            return;
        }
        document.body.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        document.documentElement.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        if (this.afterScrollUp) {
            this.afterScrollUp();
        }
    };
    ScrollUpCustomElement.prototype.attached = function () {
        var _this = this;
        this.threshold = Number(this.threshold);
        window.onscroll = function () { return _this.checkScrollTop(); };
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], ScrollUpCustomElement.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], ScrollUpCustomElement.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], ScrollUpCustomElement.prototype, "threshold", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], ScrollUpCustomElement.prototype, "beforeScrollUp", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], ScrollUpCustomElement.prototype, "afterScrollUp", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], ScrollUpCustomElement.prototype, "shownScrollUp", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], ScrollUpCustomElement.prototype, "hideScrollUp", void 0);
    ScrollUpCustomElement = __decorate([
        aurelia_framework_1.customElement('aut-scrollup')
    ], ScrollUpCustomElement);
    return ScrollUpCustomElement;
}());
exports.ScrollUpCustomElement = ScrollUpCustomElement;
//# sourceMappingURL=aut-scrollup.js.map
});
___scope___.file("components/vanilla/scrollup/index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./aut-scrollup"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./aut-scrollup')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("custom-attributes/bootstrap/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
function configure(config) {
    console.log(config);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("custom-attributes/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/custom-attributes/bootstrap/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/custom-attributes/jquery/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/custom-attributes/vanilla/index'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("custom-attributes/jquery/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
function configure(config) {
    console.log(config);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("custom-attributes/vanilla/id/aut-id-group.js", function(exports, require, module, __filename, __dirname){

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
var uuid_1 = require("../../../utilities/vanilla/uuid");
var UuidCustomAttribute = (function () {
    function UuidCustomAttribute(element, idgeneratorV4) {
        this.element = element;
        this.idgeneratorV4 = idgeneratorV4;
    }
    UuidCustomAttribute.prototype.bind = function () {
        if (this.value) {
            this.element.setAttribute(this.value, 'data-aut-id-group');
        }
        else {
            this.element.setAttribute(this.idgeneratorV4.Uuidv4ForId(), 'data-aut-id-group');
        }
    };
    UuidCustomAttribute = __decorate([
        aurelia_framework_1.inject(Element, uuid_1.Uuid),
        aurelia_framework_1.customAttribute('aut-id-group'),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof uuid_1.Uuid !== "undefined" && uuid_1.Uuid) === "function" && _a || Object])
    ], UuidCustomAttribute);
    return UuidCustomAttribute;
    var _a;
}());
exports.UuidCustomAttribute = UuidCustomAttribute;
//# sourceMappingURL=aut-id-group.js.map
});
___scope___.file("custom-attributes/vanilla/id/aut-id.js", function(exports, require, module, __filename, __dirname){

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
var sharedIndex_1 = require("./../../../utilities/vanilla/sharedIndex");
var aurelia_framework_1 = require("aurelia-framework");
var uuid_1 = require("../../../utilities/vanilla/uuid");
var IdCustomAttribute = (function () {
    function IdCustomAttribute(element, sharedIndex, idgeneratorV4) {
        this.element = element;
        this.sharedIndex = sharedIndex;
        this.idgeneratorV4 = idgeneratorV4;
    }
    IdCustomAttribute.prototype.bind = function () {
        var uuid = this.idgeneratorV4.Uuidv4ForId();
        var group = this.element.getAttribute('data-aut-id-group');
        if (!group) {
            this.element.setAttribute(uuid, 'data-aut-id-group');
            group = uuid;
        }
        this.id = 'a' + this.sharedIndex.getAndIncrement(group);
        this.element.id = this.id;
    };
    IdCustomAttribute = __decorate([
        aurelia_framework_1.inject(Element, sharedIndex_1.SharedIndex, uuid_1.Uuid),
        aurelia_framework_1.customAttribute('aut-id'),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof sharedIndex_1.SharedIndex !== "undefined" && sharedIndex_1.SharedIndex) === "function" && _a || Object, typeof (_b = typeof uuid_1.Uuid !== "undefined" && uuid_1.Uuid) === "function" && _b || Object])
    ], IdCustomAttribute);
    return IdCustomAttribute;
    var _a, _b;
}());
exports.IdCustomAttribute = IdCustomAttribute;
//# sourceMappingURL=aut-id.js.map
});
___scope___.file("custom-attributes/vanilla/id/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./aut-id'),
        aurelia_framework_1.PLATFORM.moduleName('./aut-id-group')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("custom-attributes/vanilla/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/custom-attributes/vanilla/masked/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/custom-attributes/vanilla/uuid/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/custom-attributes/vanilla/id/index'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("custom-attributes/vanilla/masked/aut-masked.js", function(exports, require, module, __filename, __dirname){

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
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var InputMask = require('inputmask');
var MaskedInputCustomAttribute = (function () {
    function MaskedInputCustomAttribute(element) {
        this.element = element;
    }
    MaskedInputCustomAttribute.prototype.maskChanged = function (newMask) {
        var im = new InputMask(newMask);
        im.mask(this.element);
    };
    MaskedInputCustomAttribute.prototype.regexChanged = function (newRegex) {
        var im = new InputMask({ regex: newRegex });
        im.mask(this.element);
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay, primaryProperty: true }),
        __metadata("design:type", Object)
    ], MaskedInputCustomAttribute.prototype, "mask", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], MaskedInputCustomAttribute.prototype, "regex", void 0);
    MaskedInputCustomAttribute = __decorate([
        aurelia_dependency_injection_1.inject(Element),
        aurelia_framework_1.customAttribute('aut-masked'),
        __metadata("design:paramtypes", [Object])
    ], MaskedInputCustomAttribute);
    return MaskedInputCustomAttribute;
}());
exports.MaskedInputCustomAttribute = MaskedInputCustomAttribute;
//# sourceMappingURL=aut-masked.js.map
});
___scope___.file("custom-attributes/vanilla/masked/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./aut-masked')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("custom-attributes/vanilla/uuid/aut-uuid.js", function(exports, require, module, __filename, __dirname){

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
var uuid_1 = require("../../../utilities/vanilla/uuid");
var UuidCustomAttribute = (function () {
    function UuidCustomAttribute(element, idgeneratorV4) {
        this.element = element;
        this.idgeneratorV4 = idgeneratorV4;
    }
    UuidCustomAttribute.prototype.bind = function () {
        this.id = 'a' + this.idgeneratorV4.uuidv4().replace(new RegExp('-', 'g'), '');
        if (this.value) {
            this.element.setAttribute(this.value, this.id);
        }
        else {
            this.element.id = this.id;
        }
    };
    UuidCustomAttribute = __decorate([
        aurelia_framework_1.inject(Element, uuid_1.Uuid),
        aurelia_framework_1.customAttribute('aut-uuid'),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof uuid_1.Uuid !== "undefined" && uuid_1.Uuid) === "function" && _a || Object])
    ], UuidCustomAttribute);
    return UuidCustomAttribute;
    var _a;
}());
exports.UuidCustomAttribute = UuidCustomAttribute;
//# sourceMappingURL=aut-uuid.js.map
});
___scope___.file("custom-attributes/vanilla/uuid/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./aut-uuid')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("decorators/inject-css.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_loader_1 = require("aurelia-loader");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var aurelia_pal_1 = require("aurelia-pal");
function injectCss(address) {
    return function (target) {
        var container = aurelia_dependency_injection_1.Container.instance;
        var loader = container.get(aurelia_loader_1.Loader);
        var css_id = 'inject_css_' + target.name.toLowerCase();
        loader.loadText(address).then(function (css) {
            aurelia_pal_1.DOM.injectStyles(css, null, null, css_id);
        });
        target.prototype.injectedCssId = css_id;
        return target;
    };
}
exports.injectCss = injectCss;
//# sourceMappingURL=inject-css.js.map
});
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./services/bootstrap/bootstrap-typography-service"));
__export(require("./services/jquery/toastr/toastr-service-options"));
__export(require("./services/jquery/toastr/toastr-service"));
__export(require("./services/misc/common-css-service"));
function configure(config) {
    config
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/binding-behaviours/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/custom-attributes/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/services/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/utilities/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/value-converters/index'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("services/bootstrap/bootstrap-typography-service.js", function(exports, require, module, __filename, __dirname){

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
var BootstrapTypographyService = (function () {
    function BootstrapTypographyService() {
        this.update();
    }
    BootstrapTypographyService.prototype.update = function () {
        var bodyStyles = window.getComputedStyle(document.body);
        this.blue = bodyStyles.getPropertyValue('--blue');
        this.indigo = bodyStyles.getPropertyValue('--indigo');
        this.purple = bodyStyles.getPropertyValue('--purple');
        this.pink = bodyStyles.getPropertyValue('--pink');
        this.red = bodyStyles.getPropertyValue('--red');
        this.orange = bodyStyles.getPropertyValue('--orange');
        this.yellow = bodyStyles.getPropertyValue('--yellow');
        this.green = bodyStyles.getPropertyValue('--green');
        this.teal = bodyStyles.getPropertyValue('--teal');
        this.cyan = bodyStyles.getPropertyValue('--cyan');
        this.white = bodyStyles.getPropertyValue('--white');
        this.gray = bodyStyles.getPropertyValue('--gray');
        this.grayDark = bodyStyles.getPropertyValue('--gray-dark');
        this.primary = bodyStyles.getPropertyValue('--primary');
        this.secondary = bodyStyles.getPropertyValue('--secondary');
        this.success = bodyStyles.getPropertyValue('--success');
        this.info = bodyStyles.getPropertyValue('--info');
        this.warning = bodyStyles.getPropertyValue('--warning');
        this.danger = bodyStyles.getPropertyValue('--danger');
        this.light = bodyStyles.getPropertyValue('--light');
        this.dark = bodyStyles.getPropertyValue('--dark');
        this.muted = bodyStyles.getPropertyValue('--gray');
        this.breakpointXs = bodyStyles.getPropertyValue('--breakpoint-xs');
        this.breakpointSm = bodyStyles.getPropertyValue('--breakpoint-sm');
        this.breakpointMd = bodyStyles.getPropertyValue('--breakpoint-md');
        this.breakpointLg = bodyStyles.getPropertyValue('--breakpoint-lg');
        this.breakpointXl = bodyStyles.getPropertyValue('--breakpoint-xl');
        this.fontFamilySansSerif = bodyStyles.getPropertyValue('--font-family-sans-serif');
        this.fontFamilyMonospace = bodyStyles.getPropertyValue('--font-family-monospace');
    };
    BootstrapTypographyService = __decorate([
        aurelia_framework_1.singleton(),
        __metadata("design:paramtypes", [])
    ], BootstrapTypographyService);
    return BootstrapTypographyService;
}());
exports.BootstrapTypographyService = BootstrapTypographyService;
//# sourceMappingURL=bootstrap-typography-service.js.map
});
___scope___.file("services/jquery/toastr/toastr-service-options.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=toastr-service-options.js.map
});
___scope___.file("services/jquery/toastr/toastr-service.js", function(exports, require, module, __filename, __dirname){

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
require("jquery");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var inject_css_1 = require("../../../decorators/inject-css");
var ToastrService = (function () {
    function ToastrService(tr) {
        this.tr = tr;
    }
    ToastrService.prototype.success = function (message, title, overrides) {
        var settings = null;
        if (overrides) {
            settings = Object.assign(overrides);
        }
        this.tr.success(message, title, settings || overrides);
    };
    ToastrService.prototype.error = function (message, title, overrides) {
        var settings = null;
        if (overrides) {
            settings = Object.assign(overrides);
        }
        this.tr.error(message, title, settings || overrides);
    };
    ToastrService.prototype.info = function (message, title, overrides) {
        var settings = null;
        if (overrides) {
            settings = Object.assign(overrides);
        }
        this.tr.info(message, title, settings || overrides);
    };
    ToastrService.prototype.warning = function (message, title, overrides) {
        var settings = null;
        if (overrides) {
            settings = Object.assign(overrides);
        }
        this.tr.warning(message, title, settings || overrides);
    };
    ToastrService.prototype.clear = function (toast, clearOptions) {
        this.tr.clear(toast, clearOptions);
    };
    ToastrService.prototype.remove = function () {
        this.tr.remove();
    };
    ToastrService.prototype.subscribe = function (callback) {
        this.tr.subscribe(callback);
    };
    ToastrService = __decorate([
        aurelia_dependency_injection_1.singleton(),
        inject_css_1.injectCss('aurelia-toolbelt/external-resources/css/toastr.css'),
        __metadata("design:paramtypes", [Object])
    ], ToastrService);
    return ToastrService;
}());
exports.ToastrService = ToastrService;
//# sourceMappingURL=toastr-service.js.map
});
___scope___.file("services/misc/common-css-service.js", function(exports, require, module, __filename, __dirname){

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
var CommonCssService = (function () {
    function CommonCssService() {
        aurelia_framework_1.DOM.injectStyles("\n        .aut-center\n        {\n            margin: auto;\n            width: 50%;\n        }\n        .aut-disable-select\n        {\n            -webkit-touch-callout: none; /* iOS Safari */\n            -webkit-user-select: none; /* Safari */\n            -khtml-user-select: none; /* Konqueror HTML */\n            -moz-user-select: none; /* Firefox */\n            -ms-user-select: none; /* Internet Explorer/Edge */\n             user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */\n        }\n        ");
    }
    CommonCssService = __decorate([
        aurelia_framework_1.singleton(),
        __metadata("design:paramtypes", [])
    ], CommonCssService);
    return CommonCssService;
}());
exports.CommonCssService = CommonCssService;
//# sourceMappingURL=common-css-service.js.map
});
___scope___.file("services/bootstrap/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
function configure() {
    console.log('no service container set here[aurelia-toolbelt/services/bootstrap/index].');
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("services/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/services/bootstrap/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/services/jquery/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/services/misc/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/services/vanilla/index'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("services/jquery/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/services/jquery/toastr/index'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("services/jquery/toastr/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var toastr_service_1 = require("./toastr-service");
var toastr = require("toastr");
function configure(config, toastrOption) {
    var _trs = new toastr_service_1.ToastrService(toastr);
    if (toastrOption) {
        config.container.registerSingleton(toastr_service_1.ToastrService, function () {
            toastr.options.closeButton = true;
            toastr.options.progressBar = toastrOption.progressBar;
            toastr.options.preventDuplicates = toastrOption.preventDuplicates;
            toastr.options.positionClass = toastrOption.positionClass;
            return _trs;
        });
    }
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("services/misc/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
function configure() {
    console.log('no service container set here[aurelia-toolbelt/services/misc/index].');
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("services/vanilla/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
function configure(config) {
    console.log(config);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("services/vanilla/zenscroll/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var zenscroll_service_1 = require("./zenscroll-service");
var zenscroll = require("zenscroll");
function configure(config) {
    config.container.registerSingleton(zenscroll_service_1.ZenscrollService, function () {
        return zenscroll;
    });
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("services/vanilla/zenscroll/zenscroll-service.js", function(exports, require, module, __filename, __dirname){

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
var zenscroll = require("zenscroll");
var ZenscrollService = (function () {
    function ZenscrollService() {
        aurelia_framework_1.DOM.injectStyles("body, .smooth-container { scroll-behavior: smooth }");
    }
    ZenscrollService.prototype.to = function (element, duration, onDone) {
        var elem;
        if (typeof element === 'string') {
            elem = document.getElementById(element);
            zenscroll.to(elem, duration, onDone);
        }
        else {
            zenscroll.to(element, duration, onDone);
        }
    };
    ZenscrollService.prototype.toY = function (targetY, duration, onDone) {
        zenscroll.toY(targetY, duration, onDone);
    };
    ZenscrollService.prototype.intoView = function (element, duration, onDone) {
        var elem;
        if (typeof element === 'string') {
            elem = document.getElementById(element);
            zenscroll.intoView(elem, duration, onDone);
        }
        else {
            zenscroll.intoView(element, duration, onDone);
        }
    };
    ZenscrollService.prototype.center = function (element, duration, offset, onDone) {
        var elem;
        if (typeof element === 'string') {
            elem = document.getElementById(element);
            zenscroll.center(elem, duration, offset, onDone);
        }
        else {
            zenscroll.center(element, duration, offset, onDone);
        }
    };
    ZenscrollService.prototype.stop = function () {
        zenscroll.stop();
    };
    ZenscrollService.prototype.moving = function () {
        return zenscroll.moving();
    };
    ZenscrollService.prototype.getY = function () {
        return zenscroll.getY();
    };
    ZenscrollService.prototype.getTopOf = function (element) {
        var elem;
        if (typeof element === 'string') {
            elem = document.getElementById(element);
            return zenscroll.getTopOf(elem);
        }
        else {
            return zenscroll.getTopOf(element);
        }
    };
    ZenscrollService.prototype.createScroller = function (element, defaultDuration, edgeOffset) {
        var elem;
        if (typeof element === 'string') {
            elem = document.getElementById(element);
            return zenscroll.createScroller(elem, defaultDuration, edgeOffset);
        }
        else {
            return zenscroll.createScroller(element, defaultDuration, edgeOffset);
        }
    };
    ZenscrollService = __decorate([
        aurelia_framework_1.singleton(),
        __metadata("design:paramtypes", [])
    ], ZenscrollService);
    return ZenscrollService;
}());
exports.ZenscrollService = ZenscrollService;
//# sourceMappingURL=zenscroll-service.js.map
});
___scope___.file("utilities/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
require("./vanilla/fastSafeStringify");
function configure(config) {
    console.log(config);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("utilities/vanilla/fastSafeStringify.js", function(exports, require, module, __filename, __dirname){

var fastSafeStringify = require('fast-safe-stringify');
JSON.safeStringify = function (obj) { return fastSafeStringify(obj); };
//# sourceMappingURL=fastSafeStringify.js.map
});
___scope___.file("utilities/vanilla/cssMinifier.js", function(exports, require, module, __filename, __dirname){

//# sourceMappingURL=cssMinifier.js.map
});
___scope___.file("value-converters/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/value-converters/vanilla/index'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("value-converters/vanilla/array/filter-by.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var FilterByValueConverter = (function () {
    function FilterByValueConverter() {
    }
    FilterByValueConverter.prototype.toView = function (array, value) {
        var properties = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            properties[_i - 2] = arguments[_i];
        }
        value = (value || '').trim().toLowerCase();
        if (!value) {
            return array;
        }
        if (properties.length) {
            return array.filter(function (item) {
                return properties.some(function (property) { return (item[property] || '').toLowerCase().includes(value); });
            });
        }
        return array.filter(function (item) { return item.toLowerCase().includes(value); });
    };
    return FilterByValueConverter;
}());
exports.FilterByValueConverter = FilterByValueConverter;
//# sourceMappingURL=filter-by.js.map
});
___scope___.file("value-converters/vanilla/array/group-by.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var GroupByValueConverter = (function () {
    function GroupByValueConverter() {
    }
    GroupByValueConverter.prototype.toView = function (array, property) {
        var groups = new Map();
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var item = array_1[_i];
            var key = item[property];
            var group = groups.get(key);
            if (!group) {
                group = { key: key, items: [] };
                groups.set(key, group);
            }
            group.items.push(item);
        }
        return Array.from(groups.values());
    };
    return GroupByValueConverter;
}());
exports.GroupByValueConverter = GroupByValueConverter;
//# sourceMappingURL=group-by.js.map
});
___scope___.file("value-converters/vanilla/array/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./order-by'),
        aurelia_framework_1.PLATFORM.moduleName('./group-by'),
        aurelia_framework_1.PLATFORM.moduleName('./filter-by')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("value-converters/vanilla/array/order-by.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var OrderByValueConverter = (function () {
    function OrderByValueConverter() {
    }
    OrderByValueConverter.prototype.toView = function (array, property, direction) {
        if (direction === void 0) { direction = 'desc'; }
        var _array = array.slice(0);
        var directionFactor = direction === 'desc' ? -1 : 1;
        _array.sort(function (current, next) {
            var currentValue = current[property];
            var nextValue = next[property];
            if (currentValue > nextValue) {
                return directionFactor;
            }
            else if (currentValue < nextValue) {
                return -directionFactor;
            }
            return 0;
        });
        return _array;
    };
    return OrderByValueConverter;
}());
exports.OrderByValueConverter = OrderByValueConverter;
//# sourceMappingURL=order-by.js.map
});
___scope___.file("value-converters/vanilla/datetime/humanize-duration-vc.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_binding_1 = require("aurelia-binding");
var humanizeDuration = require('humanize-duration');
var HumanizeValueConverter = (function () {
    function HumanizeValueConverter() {
    }
    HumanizeValueConverter.prototype.toView = function (value, options) {
        return humanizeDuration(value, options);
    };
    HumanizeValueConverter = __decorate([
        aurelia_binding_1.valueConverter('humanize')
    ], HumanizeValueConverter);
    return HumanizeValueConverter;
}());
exports.HumanizeValueConverter = HumanizeValueConverter;
//# sourceMappingURL=humanize-duration-vc.js.map
});
___scope___.file("value-converters/vanilla/datetime/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./moment-vc'),
        aurelia_framework_1.PLATFORM.moduleName('./moment-timezone-vc'),
        aurelia_framework_1.PLATFORM.moduleName('./humanize-duration-vc')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("value-converters/vanilla/datetime/moment-timezone-vc.js", function(exports, require, module, __filename, __dirname){

//# sourceMappingURL=moment-timezone-vc.js.map
});
___scope___.file("value-converters/vanilla/datetime/moment-vc.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var moment = require('jalali-moment');
var RelativeValueConverter = (function () {
    function RelativeValueConverter() {
    }
    RelativeValueConverter.prototype.toView = function (value) {
        if (!value) {
            return null;
        }
        return moment(value).fromNow();
    };
    RelativeValueConverter = __decorate([
        aurelia_framework_1.valueConverter('relative')
    ], RelativeValueConverter);
    return RelativeValueConverter;
}());
exports.RelativeValueConverter = RelativeValueConverter;
var DateValueConverter = (function () {
    function DateValueConverter() {
    }
    DateValueConverter.prototype.toView = function (value, format, locale) {
        if (format === void 0) { format = 'YYYY/MM/DD'; }
        if (locale === void 0) { locale = 'en'; }
        if (!value) {
            return null;
        }
        var m2 = moment(value).locale(locale);
        return m2.format(format);
    };
    DateValueConverter = __decorate([
        aurelia_framework_1.valueConverter('date')
    ], DateValueConverter);
    return DateValueConverter;
}());
exports.DateValueConverter = DateValueConverter;
var TimeConverter = (function () {
    function TimeConverter() {
    }
    TimeConverter.prototype.toView = function (value, show24Hours, locale) {
        if (show24Hours === void 0) { show24Hours = true; }
        if (locale === void 0) { locale = 'en'; }
        if (!value) {
            return null;
        }
        var format = show24Hours === true || show24Hours === 'true' ? 'HH:mm:ss' : 'hh:mm:ss A';
        return moment(value).locale(locale).format(format);
    };
    TimeConverter = __decorate([
        aurelia_framework_1.valueConverter('time')
    ], TimeConverter);
    return TimeConverter;
}());
exports.TimeConverter = TimeConverter;
var AgeValueConverter = (function () {
    function AgeValueConverter() {
    }
    AgeValueConverter.prototype.toView = function (dob) {
        if (!dob) {
            return null;
        }
        return Math.floor(moment().diff(moment(dob), 'year', false));
    };
    AgeValueConverter = __decorate([
        aurelia_framework_1.valueConverter('age')
    ], AgeValueConverter);
    return AgeValueConverter;
}());
exports.AgeValueConverter = AgeValueConverter;
//# sourceMappingURL=moment-vc.js.map
});
___scope___.file("value-converters/vanilla/fusejs/deep.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
function deepGetByArray(obj, propsArray, defaultValue) {
    if (obj === undefined || obj === null) {
        return defaultValue;
    }
    if (propsArray.length === 0) {
        return obj;
    }
    var foundSoFar = obj[propsArray[0]];
    var remainingProps = propsArray.slice(1);
    return deepGetByArray(foundSoFar, remainingProps, defaultValue);
}
function deepGet(obj, props, defaultValue) {
    if (typeof props === 'string') {
        props = props.split('.');
    }
    return deepGetByArray(obj, props, defaultValue);
}
exports.deepGet = deepGet;
function deepSet(obj, path, value) {
    var keys = Array.isArray(path) ? path : path.split('.');
    var i = 0;
    for (; i < keys.length - 1; i++) {
        var key = keys[i];
        obj[key] = {};
        obj = obj[key];
    }
    obj[keys[i]] = value;
    return value;
}
exports.deepSet = deepSet;
//# sourceMappingURL=deep.js.map
});
___scope___.file("value-converters/vanilla/fusejs/fuse-highlight.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var deep_1 = require("./deep");
var FuseHighlightValueConverter = (function () {
    function FuseHighlightValueConverter() {
    }
    FuseHighlightValueConverter.prototype.toView = function (value, cssClass) {
        cssClass = cssClass || '';
        var counter = value.length;
        while (counter--) {
            value[counter].item.highlighted = {};
            var matchesCounter = value[counter].matches.length;
            while (matchesCounter--) {
                var result = [];
                var fieldName = value[counter].matches[matchesCounter].key;
                var text = deep_1.deepGet(value[counter].item, fieldName.split('.'), {});
                var matches = value[counter].matches[matchesCounter].indices;
                var pair = matches.shift();
                for (var i = 0; i < text.length; i++) {
                    var char = text.charAt(i);
                    if (pair && i === pair[0]) {
                        result.push("<span class='" + cssClass + "'>");
                    }
                    result.push(char);
                    if (pair && i === pair[1]) {
                        result.push('</span>');
                        pair = matches.shift();
                    }
                }
                var highlightedValue = result.join('');
                deep_1.deepSet(value[counter].item.highlighted, fieldName, highlightedValue);
            }
        }
        return value;
    };
    return FuseHighlightValueConverter;
}());
exports.FuseHighlightValueConverter = FuseHighlightValueConverter;
//# sourceMappingURL=fuse-highlight.js.map
});
___scope___.file("value-converters/vanilla/fusejs/fusejs.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var Fuse = require("fuse.js");
var FuseValueConverter = (function () {
    function FuseValueConverter() {
    }
    FuseValueConverter.prototype.toView = function (value, options, criteria) {
        if (options === null || options === undefined) {
            return value || [];
        }
        if (!criteria) {
            options.threshold = 1;
            return new Fuse(value, options).search(' ');
        }
        var fuse = new Fuse(value, options);
        var result = fuse.search(criteria);
        return result;
    };
    return FuseValueConverter;
}());
exports.FuseValueConverter = FuseValueConverter;
//# sourceMappingURL=fusejs.js.map
});
___scope___.file("value-converters/vanilla/fusejs/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./fusejs'),
        aurelia_framework_1.PLATFORM.moduleName('./fuse-highlight')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("value-converters/vanilla/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/value-converters/vanilla/array/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/value-converters/vanilla/datetime/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/value-converters/vanilla/fusejs/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/value-converters/vanilla/mark-down/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/value-converters/vanilla/string/index'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("value-converters/vanilla/mark-down/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./markdown-vc')]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("value-converters/vanilla/mark-down/markdown-vc.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var MarkdownIt = require('markdown-it');
var hljs = require('highlight.js');
var MarkDownValueConverter = (function () {
    function MarkDownValueConverter() {
    }
    MarkDownValueConverter.prototype.toView = function (value) {
        var md = new MarkdownIt({
            useBR: true,
            linkify: true,
            highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return '<pre class="hljs"><code>' +
                            hljs.highlight(lang, str, true).value +
                            '</code></pre>';
                    }
                    catch (__) {
                        console.warn(__);
                    }
                }
                return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
            }
        });
        var result = md.render(value);
        md = null;
        return result;
    };
    MarkDownValueConverter = __decorate([
        aurelia_framework_1.valueConverter('md')
    ], MarkDownValueConverter);
    return MarkDownValueConverter;
}());
exports.MarkDownValueConverter = MarkDownValueConverter;
//# sourceMappingURL=markdown-vc.js.map
});
___scope___.file("value-converters/vanilla/string/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/value-converters/vanilla/string/latin/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/value-converters/vanilla/string/persian/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/value-converters/vanilla/string/numeral/index'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("value-converters/vanilla/string/latin/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
function configure(config) {
    console.log(config);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("value-converters/vanilla/string/numeral/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./number'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("value-converters/vanilla/string/numeral/number.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var numeral = require("numeral");
var NumberValueConverter = (function () {
    function NumberValueConverter() {
    }
    NumberValueConverter.prototype.toView = function (value, format) {
        if (!value) {
            return null;
        }
        return numeral(value).format(format);
    };
    NumberValueConverter = __decorate([
        aurelia_framework_1.valueConverter('number')
    ], NumberValueConverter);
    return NumberValueConverter;
}());
exports.NumberValueConverter = NumberValueConverter;
//# sourceMappingURL=number.js.map
});
___scope___.file("value-converters/vanilla/string/persian/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./stringifyfa'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./stringifyrial'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./stringifytoman'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./rial'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./toman'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./persianchars'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./persiankeyboard'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./persianurl'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("value-converters/vanilla/string/persian/persianchars.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var persianjs = require('persianjs');
var PersianCharsValueConverter = (function () {
    function PersianCharsValueConverter() {
    }
    PersianCharsValueConverter.prototype.toView = function (text) {
        var len = text.toString().length;
        if (len === 0) {
            return '';
        }
        else {
            return persianjs(text).arabicChar().englishNumber().arabicNumber().toString();
        }
    };
    PersianCharsValueConverter = __decorate([
        aurelia_framework_1.valueConverter('persianchars')
    ], PersianCharsValueConverter);
    return PersianCharsValueConverter;
}());
exports.PersianCharsValueConverter = PersianCharsValueConverter;
//# sourceMappingURL=persianchars.js.map
});
___scope___.file("value-converters/vanilla/string/persian/persiankeyboard.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var persianjs = require('persianjs');
var PersianKeyboardValueConverter = (function () {
    function PersianKeyboardValueConverter() {
    }
    PersianKeyboardValueConverter.prototype.toView = function (text) {
        var len = text.toString().length;
        if (len === 0) {
            return '';
        }
        else {
            return persianjs(text).switchKey().toString();
        }
    };
    PersianKeyboardValueConverter = __decorate([
        aurelia_framework_1.valueConverter('persiankeyboard')
    ], PersianKeyboardValueConverter);
    return PersianKeyboardValueConverter;
}());
exports.PersianKeyboardValueConverter = PersianKeyboardValueConverter;
//# sourceMappingURL=persiankeyboard.js.map
});
___scope___.file("value-converters/vanilla/string/persian/persianurl.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var persianJs = require('persianjs');
var PersianUrlValueConverter = (function () {
    function PersianUrlValueConverter() {
    }
    PersianUrlValueConverter.prototype.toView = function (text) {
        var len = text.toString().length;
        if (len === 0) {
            return '';
        }
        else {
            return persianJs(text).fixURL().toString();
        }
    };
    PersianUrlValueConverter = __decorate([
        aurelia_framework_1.valueConverter('persianurl')
    ], PersianUrlValueConverter);
    return PersianUrlValueConverter;
}());
exports.PersianUrlValueConverter = PersianUrlValueConverter;
//# sourceMappingURL=persianurl.js.map
});
___scope___.file("value-converters/vanilla/string/persian/rial.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var r = require('./scripts/rial.js');
var RialValueConverter = (function () {
    function RialValueConverter() {
    }
    RialValueConverter.prototype.toView = function (number, config) {
        var len = number.toString().length;
        if (len === 0) {
            return '';
        }
        else {
            var rial = void 0;
            if (config === undefined || config == null) {
                rial = new r.Rial({
                    decimal: ',',
                    alphabet: 'fa',
                    currency: 'ریال'
                });
            }
            else {
                rial = new r.Rial(config);
            }
            return rial.get(number.toString());
        }
    };
    RialValueConverter = __decorate([
        aurelia_framework_1.valueConverter('rial')
    ], RialValueConverter);
    return RialValueConverter;
}());
exports.RialValueConverter = RialValueConverter;
//# sourceMappingURL=rial.js.map
});
___scope___.file("value-converters/vanilla/string/persian/scripts/rial.js", function(exports, require, module, __filename, __dirname){

/*!
 * Rial.js v0.0.2
 * Copyright 2015 Saeid Habibpour
 * a tiny JavaScript library for money and currency formatting
 *
 * examples and documentation:
 * http://github.com/habibpour/rial.js/
 */
String.prototype.replaceAll = function (token, newToken, ignoreCase) {
    var _token;
    var str = this + "";
    var i = -1;
    if (typeof token === "string") {
        if (ignoreCase) {
            _token = token.toLowerCase();
            while ((i = str.toLowerCase().indexOf(token, i >= 0 ? i + newToken.length : 0)) !== -1) {
                str = str.substring(0, i) +
                    newToken +
                    str.substring(i + token.length);
            }
        }
        else {
            return this.split(token).join(newToken);
        }
    }
    return str;
};
function Rial(obj) {
    if (!this.isEmpty(obj)) {
        this.Decimal(obj.decimal);
        this.Alphabet(obj.alphabet);
        this.Currency(obj.currency);
        this.Cut(obj.cut);
    }
}
Rial.prototype.Decimal = function (str) {
    if (!this.isEmpty(str))
        this.decimal = str;
    else
        this.decimal = "";
    return this;
};
Rial.prototype.Alphabet = function (str) {
    if (!this.isEmpty(str))
        this.alphabet = str;
    return this;
};
Rial.prototype.Currency = function (str) {
    if (!this.isEmpty(str))
        this.currency = str;
    return this;
};
Rial.prototype.Cut = function (str) {
    if (!this.isEmpty(str))
        this.cut = str;
    else
        this.cut = 0;
    return this;
};
Rial.prototype.persianAlphabet = function (str) {
    this.result = str
        .replaceAll('0', '۰')
        .replaceAll('1', '۱')
        .replaceAll('2', '۲')
        .replaceAll('3', '۳')
        .replaceAll('4', '۴')
        .replaceAll('5', '۵')
        .replaceAll('6', '۶')
        .replaceAll('7', '۷')
        .replaceAll('8', '۸')
        .replaceAll('9', '۹');
};
Rial.prototype.latinAlphabet = function (str) {
    this.result = str
        .replaceAll('۰', '0')
        .replaceAll('۱', '1')
        .replaceAll('۲', '2')
        .replaceAll('۳', '3')
        .replaceAll('۴', '4')
        .replaceAll('۵', '5')
        .replaceAll('۶', '6')
        .replaceAll('۷', '7')
        .replaceAll('۸', '8')
        .replaceAll('۹', '9');
};
Rial.prototype.isEmpty = function (element) {
    if (element === undefined || element == null || element == "")
        return true;
    return false;
};
Rial.prototype.clean = function (str) {
    var chars = "0۰";
    if (this.isEmpty(chars))
        chars = "\s";
    str = str.replace(new RegExp("^[" + chars + "]+"), "");
    this.result = str.toString().replace(/[^0-9+۰-۹]/g, '');
};
Rial.prototype.format = function (str) {
    if (!this.isEmpty(str)) {
        str = str.split("").reverse().join("");
        var n = str.match(/.{1,3}/g);
        for (var i = 0; i < n.length; i++)
            n[i] = n[i].split("").reverse().join("");
        str = n.reverse().join(this.decimal);
        this.result = str;
    }
    else
        this.result = "0";
};
Rial.prototype.slice = function (str) {
    this.result = str.substring(0, str.length - this.cut);
};
Rial.prototype.get = function (str) {
    this.result = str;
    this.clean(this.result);
    if (this.isEmpty(this.result))
        return 0;
    if (this.alphabet == "en")
        this.latinAlphabet(this.result);
    else
        this.persianAlphabet(this.result);
    this.slice(this.result);
    this.format(this.result);
    if (!this.isEmpty(this.currency))
        this.result += " " + this.currency;
    return this.result;
};
if (typeof module !== 'undefined' && module.exports) {
    module.exports.Rial = Rial;
}
//# sourceMappingURL=rial.js.map
});
___scope___.file("value-converters/vanilla/string/persian/scripts/wordifyfa.js", function(exports, require, module, __filename, __dirname){

var wordifyfa = function (num, level) {
    'use strict';
    if (num === null) {
        return "";
    }
    if (num < 0) {
        num = num * -1;
        return "منفی " + wordifyfa(num, level);
    }
    if (num === 0) {
        if (level === 0) {
            return "صفر";
        }
        else {
            return "";
        }
    }
    var result = "", yekan = [" یک ", " دو ", " سه ", " چهار ", " پنج ", " شش ", " هفت ", " هشت ", " نه "], dahgan = [" بیست ", " سی ", " چهل ", " پنجاه ", " شصت ", " هفتاد ", " هشتاد ", " نود "], sadgan = [" یکصد ", " دویست ", " سیصد ", " چهارصد ", " پانصد ", " ششصد ", " هفتصد ", " هشتصد ", " نهصد "], dah = [" ده ", " یازده ", " دوازده ", " سیزده ", " چهارده ", " پانزده ", " شانزده ", " هفده ", " هیجده ", " نوزده "];
    if (level > 0) {
        result += " و ";
        level -= 1;
    }
    if (num < 10) {
        result += yekan[num - 1];
    }
    else if (num < 20) {
        result += dah[num - 10];
    }
    else if (num < 100) {
        result += dahgan[parseInt((num / 10).toString(), 10) - 2] + wordifyfa(num % 10, level + 1);
    }
    else if (num < 1000) {
        result += sadgan[parseInt((num / 100).toString(), 10) - 1] + wordifyfa(num % 100, level + 1);
    }
    else if (num < 1000000) {
        result += wordifyfa(parseInt((num / 1000).toString(), 10), level) + " هزار " + wordifyfa(num % 1000, level + 1);
    }
    else if (num < 1000000000) {
        result += wordifyfa(parseInt((num / 1000000).toString(), 10), level) + " میلیون " + wordifyfa(num % 1000000, level + 1);
    }
    else if (num < 1000000000000) {
        result += wordifyfa(parseInt((num / 1000000000).toString(), 10), level) + " میلیارد " + wordifyfa(num % 1000000000, level + 1);
    }
    else if (num < 1000000000000000) {
        result += wordifyfa(parseInt((num / 1000000000000).toString(), 10), level) + " هزار میلیارد " + wordifyfa(num % 1000000000000, level + 1);
    }
    return result;
};
var wordifyRials = function (num) {
    'use strict';
    return wordifyfa(num, 0) + " ریال";
};
var wordifyRialsInTomans = function (num) {
    'use strict';
    if (num >= 10) {
        num = parseInt((num / 10).toString(), 10);
    }
    else if (num <= -10) {
        num = parseInt((num / 10).toString(), 10);
    }
    else {
        num = 0;
    }
    return wordifyfa(num, 0) + " تومان";
};
if (typeof module !== 'undefined' && module.exports) {
    module.exports.wordifyfa = wordifyfa;
    module.exports.wordifyRials = wordifyRials;
    module.exports.wordifyRialsInTomans = wordifyRialsInTomans;
}
//# sourceMappingURL=wordifyfa.js.map
});
___scope___.file("value-converters/vanilla/string/persian/stringifyfa.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var wfa = require('./scripts/wordifyfa.js');
var StringifyFaValueConverter = (function () {
    function StringifyFaValueConverter() {
    }
    StringifyFaValueConverter.prototype.toView = function (number) {
        var len = number.toString().length;
        if (len === 0) {
            return '';
        }
        else if (len <= 15) {
            return wfa.wordifyfa(number, 0);
        }
        else {
            return 'عدد بسیار بزرگ است و قابل تبدیل نیست';
        }
    };
    StringifyFaValueConverter = __decorate([
        aurelia_framework_1.valueConverter('stringifyfa')
    ], StringifyFaValueConverter);
    return StringifyFaValueConverter;
}());
exports.StringifyFaValueConverter = StringifyFaValueConverter;
//# sourceMappingURL=stringifyfa.js.map
});
___scope___.file("value-converters/vanilla/string/persian/stringifyrial.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var wfa = require('./scripts/wordifyfa.js');
var StringifyRialValueConverter = (function () {
    function StringifyRialValueConverter() {
    }
    StringifyRialValueConverter.prototype.toView = function (number) {
        var len = number.toString().length;
        if (len === 0) {
            return '';
        }
        else if (len <= 15) {
            return wfa.wordifyRials(number);
        }
        else {
            return 'عدد بسیار بزرگ است و قابل تبدیل نیست';
        }
    };
    StringifyRialValueConverter = __decorate([
        aurelia_framework_1.valueConverter('stringifyrial')
    ], StringifyRialValueConverter);
    return StringifyRialValueConverter;
}());
exports.StringifyRialValueConverter = StringifyRialValueConverter;
//# sourceMappingURL=stringifyrial.js.map
});
___scope___.file("value-converters/vanilla/string/persian/stringifytoman.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var wfa = require('./scripts/wordifyfa.js');
var StringifyTomanValueConverter = (function () {
    function StringifyTomanValueConverter() {
    }
    StringifyTomanValueConverter.prototype.toView = function (number) {
        var len = number.toString().length;
        if (len === 0) {
            return '';
        }
        else if (len <= 15) {
            return wfa.wordifyRialsInTomans(number);
        }
        else {
            return 'عدد بسیار بزرگ است و قابل تبدیل نیست';
        }
    };
    StringifyTomanValueConverter = __decorate([
        aurelia_framework_1.valueConverter('stringifytoman')
    ], StringifyTomanValueConverter);
    return StringifyTomanValueConverter;
}());
exports.StringifyTomanValueConverter = StringifyTomanValueConverter;
//# sourceMappingURL=stringifytoman.js.map
});
___scope___.file("value-converters/vanilla/string/persian/toman.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var r = require('./scripts/rial.js');
var TomanValueConverter = (function () {
    function TomanValueConverter() {
    }
    TomanValueConverter.prototype.toView = function (number, config) {
        var len = number.toString().length;
        if (len === 0) {
            return '';
        }
        else {
            var rial = void 0;
            if (config === undefined || config == null) {
                rial = new r.Rial({
                    decimal: ',',
                    alphabet: 'fa',
                    currency: 'تومان',
                    cut: 1
                });
            }
            else {
                rial = new r.Rial(config);
            }
            return rial.get(number.toString());
        }
    };
    TomanValueConverter = __decorate([
        aurelia_framework_1.valueConverter('toman')
    ], TomanValueConverter);
    return TomanValueConverter;
}());
exports.TomanValueConverter = TomanValueConverter;
//# sourceMappingURL=toman.js.map
});
___scope___.file("value-converters/vanilla/string/strman/append.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var AppendValueConverter = (function () {
    function AppendValueConverter() {
    }
    AppendValueConverter.prototype.toView = function () {
        var text = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            text[_i] = arguments[_i];
        }
        return strman_1.append.apply(void 0, text);
    };
    AppendValueConverter = __decorate([
        aurelia_framework_1.valueConverter('append')
    ], AppendValueConverter);
    return AppendValueConverter;
}());
exports.AppendValueConverter = AppendValueConverter;
//# sourceMappingURL=append.js.map
});
___scope___.file("value-converters/vanilla/string/strman/appendArray.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var AppendArrayValueConverter = (function () {
    function AppendArrayValueConverter() {
    }
    AppendArrayValueConverter.prototype.toView = function (value, append) {
        return strman_1.appendArray(value, append);
    };
    AppendArrayValueConverter = __decorate([
        aurelia_framework_1.valueConverter('appendarray')
    ], AppendArrayValueConverter);
    return AppendArrayValueConverter;
}());
exports.AppendArrayValueConverter = AppendArrayValueConverter;
//# sourceMappingURL=appendArray.js.map
});
___scope___.file("value-converters/vanilla/string/strman/at.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var AtValueConverter = (function () {
    function AtValueConverter() {
    }
    AtValueConverter.prototype.toView = function (value, index) {
        return strman_1.at(value, index);
    };
    AtValueConverter = __decorate([
        aurelia_framework_1.valueConverter('at ')
    ], AtValueConverter);
    return AtValueConverter;
}());
exports.AtValueConverter = AtValueConverter;
//# sourceMappingURL=at.js.map
});
___scope___.file("value-converters/vanilla/string/strman/base64decode.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var Base64DecodeValueConverter = (function () {
    function Base64DecodeValueConverter() {
    }
    Base64DecodeValueConverter.prototype.toView = function (value) {
        return strman_1.base64decode(value);
    };
    Base64DecodeValueConverter = __decorate([
        aurelia_framework_1.valueConverter('base64decode')
    ], Base64DecodeValueConverter);
    return Base64DecodeValueConverter;
}());
exports.Base64DecodeValueConverter = Base64DecodeValueConverter;
//# sourceMappingURL=base64decode.js.map
});
___scope___.file("value-converters/vanilla/string/strman/base64encode.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var Base64EncodeValueConverter = (function () {
    function Base64EncodeValueConverter() {
    }
    Base64EncodeValueConverter.prototype.toView = function (value) {
        return strman_1.base64encode(value);
    };
    Base64EncodeValueConverter = __decorate([
        aurelia_framework_1.valueConverter('base64encode')
    ], Base64EncodeValueConverter);
    return Base64EncodeValueConverter;
}());
exports.Base64EncodeValueConverter = Base64EncodeValueConverter;
//# sourceMappingURL=base64encode.js.map
});
___scope___.file("value-converters/vanilla/string/strman/between.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var BetweenValueConverter = (function () {
    function BetweenValueConverter() {
    }
    BetweenValueConverter.prototype.toView = function (value, start, end) {
        return strman_1.between(value, start, end);
    };
    BetweenValueConverter = __decorate([
        aurelia_framework_1.valueConverter('between')
    ], BetweenValueConverter);
    return BetweenValueConverter;
}());
exports.BetweenValueConverter = BetweenValueConverter;
//# sourceMappingURL=between.js.map
});
___scope___.file("value-converters/vanilla/string/strman/bindecode.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var BinDecodeValueConverter = (function () {
    function BinDecodeValueConverter() {
    }
    BinDecodeValueConverter.prototype.toView = function (value) {
        return strman_1.binDecode(value);
    };
    BinDecodeValueConverter = __decorate([
        aurelia_framework_1.valueConverter('bindecode')
    ], BinDecodeValueConverter);
    return BinDecodeValueConverter;
}());
exports.BinDecodeValueConverter = BinDecodeValueConverter;
//# sourceMappingURL=bindecode.js.map
});
___scope___.file("value-converters/vanilla/string/strman/binencode.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var BinEncodeValueConverter = (function () {
    function BinEncodeValueConverter() {
    }
    BinEncodeValueConverter.prototype.toView = function (value) {
        return strman_1.binEncode(value);
    };
    BinEncodeValueConverter = __decorate([
        aurelia_framework_1.valueConverter('binencode')
    ], BinEncodeValueConverter);
    return BinEncodeValueConverter;
}());
exports.BinEncodeValueConverter = BinEncodeValueConverter;
//# sourceMappingURL=binencode.js.map
});
___scope___.file("value-converters/vanilla/string/strman/chars.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var CharsValueConverter = (function () {
    function CharsValueConverter() {
    }
    CharsValueConverter.prototype.toView = function (value) {
        return strman_1.chars(value);
    };
    CharsValueConverter = __decorate([
        aurelia_framework_1.valueConverter('chars')
    ], CharsValueConverter);
    return CharsValueConverter;
}());
exports.CharsValueConverter = CharsValueConverter;
//# sourceMappingURL=chars.js.map
});
___scope___.file("value-converters/vanilla/string/strman/collapsewhitespace.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var CollapseWhitespaceValueConverter = (function () {
    function CollapseWhitespaceValueConverter() {
    }
    CollapseWhitespaceValueConverter.prototype.toView = function (value) {
        return strman_1.collapseWhitespace(value);
    };
    CollapseWhitespaceValueConverter = __decorate([
        aurelia_framework_1.valueConverter('collapsewhitespace')
    ], CollapseWhitespaceValueConverter);
    return CollapseWhitespaceValueConverter;
}());
exports.CollapseWhitespaceValueConverter = CollapseWhitespaceValueConverter;
//# sourceMappingURL=collapsewhitespace.js.map
});
___scope___.file("value-converters/vanilla/string/strman/compare.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var CompareValueConverter = (function () {
    function CompareValueConverter() {
    }
    CompareValueConverter.prototype.toView = function (valueA, valueB) {
        return strman_1.compare(valueA, valueB);
    };
    CompareValueConverter = __decorate([
        aurelia_framework_1.valueConverter('compare')
    ], CompareValueConverter);
    return CompareValueConverter;
}());
exports.CompareValueConverter = CompareValueConverter;
//# sourceMappingURL=compare.js.map
});
___scope___.file("value-converters/vanilla/string/strman/contains.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var ContainsValueConverter = (function () {
    function ContainsValueConverter() {
    }
    ContainsValueConverter.prototype.toView = function (value, needle, caseSensitive) {
        return strman_1.contains(value, needle, caseSensitive);
    };
    ContainsValueConverter = __decorate([
        aurelia_framework_1.valueConverter('contains')
    ], ContainsValueConverter);
    return ContainsValueConverter;
}());
exports.ContainsValueConverter = ContainsValueConverter;
//# sourceMappingURL=contains.js.map
});
___scope___.file("value-converters/vanilla/string/strman/containsall.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var ContainsAllValueConverter = (function () {
    function ContainsAllValueConverter() {
    }
    ContainsAllValueConverter.prototype.toView = function (value, needles, caseSensitive) {
        return strman_1.containsAll(value, needles, caseSensitive);
    };
    ContainsAllValueConverter = __decorate([
        aurelia_framework_1.valueConverter('containsall')
    ], ContainsAllValueConverter);
    return ContainsAllValueConverter;
}());
exports.ContainsAllValueConverter = ContainsAllValueConverter;
//# sourceMappingURL=containsall.js.map
});
___scope___.file("value-converters/vanilla/string/strman/containsany.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var ContainsAnyValueConverter = (function () {
    function ContainsAnyValueConverter() {
    }
    ContainsAnyValueConverter.prototype.toView = function (value, needles, caseSensitive) {
        return strman_1.containsAny(value, needles, caseSensitive);
    };
    ContainsAnyValueConverter = __decorate([
        aurelia_framework_1.valueConverter('containsany')
    ], ContainsAnyValueConverter);
    return ContainsAnyValueConverter;
}());
exports.ContainsAnyValueConverter = ContainsAnyValueConverter;
//# sourceMappingURL=containsany.js.map
});
___scope___.file("value-converters/vanilla/string/strman/countsubstr.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var CountSubstrValueConverter = (function () {
    function CountSubstrValueConverter() {
    }
    CountSubstrValueConverter.prototype.toView = function (value, substr, caseSensitive, allowOverlapping) {
        return strman_1.countSubstr(value, substr, caseSensitive, allowOverlapping);
    };
    CountSubstrValueConverter = __decorate([
        aurelia_framework_1.valueConverter('countsubstr')
    ], CountSubstrValueConverter);
    return CountSubstrValueConverter;
}());
exports.CountSubstrValueConverter = CountSubstrValueConverter;
//# sourceMappingURL=countsubstr.js.map
});
___scope___.file("value-converters/vanilla/string/strman/decdecode.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var DecDecodeValueConverter = (function () {
    function DecDecodeValueConverter() {
    }
    DecDecodeValueConverter.prototype.toView = function (value) {
        return strman_1.decDecode(value);
    };
    DecDecodeValueConverter = __decorate([
        aurelia_framework_1.valueConverter('decdecode')
    ], DecDecodeValueConverter);
    return DecDecodeValueConverter;
}());
exports.DecDecodeValueConverter = DecDecodeValueConverter;
//# sourceMappingURL=decdecode.js.map
});
___scope___.file("value-converters/vanilla/string/strman/decencode.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var DecEncodeValueConverter = (function () {
    function DecEncodeValueConverter() {
    }
    DecEncodeValueConverter.prototype.toView = function (value) {
        return strman_1.decEncode(value);
    };
    DecEncodeValueConverter = __decorate([
        aurelia_framework_1.valueConverter('decencode')
    ], DecEncodeValueConverter);
    return DecEncodeValueConverter;
}());
exports.DecEncodeValueConverter = DecEncodeValueConverter;
//# sourceMappingURL=decencode.js.map
});
___scope___.file("value-converters/vanilla/string/strman/endswith.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var EndsWithValueConverter = (function () {
    function EndsWithValueConverter() {
    }
    EndsWithValueConverter.prototype.toView = function (value, search, position, caseSensitive) {
        return strman_1.endsWith(value, search, position, caseSensitive);
    };
    EndsWithValueConverter = __decorate([
        aurelia_framework_1.valueConverter('endswith')
    ], EndsWithValueConverter);
    return EndsWithValueConverter;
}());
exports.EndsWithValueConverter = EndsWithValueConverter;
//# sourceMappingURL=endswith.js.map
});
___scope___.file("value-converters/vanilla/string/strman/ensureleft.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var EnsureLeftValueConverter = (function () {
    function EnsureLeftValueConverter() {
    }
    EnsureLeftValueConverter.prototype.toView = function (value, substr, caseSensitive) {
        return strman_1.ensureLeft(value, substr, caseSensitive);
    };
    EnsureLeftValueConverter = __decorate([
        aurelia_framework_1.valueConverter('ensureleft')
    ], EnsureLeftValueConverter);
    return EnsureLeftValueConverter;
}());
exports.EnsureLeftValueConverter = EnsureLeftValueConverter;
//# sourceMappingURL=ensureleft.js.map
});
___scope___.file("value-converters/vanilla/string/strman/ensureright.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var EnsureRightValueConverter = (function () {
    function EnsureRightValueConverter() {
    }
    EnsureRightValueConverter.prototype.toView = function (value, substr, caseSensitive) {
        return strman_1.ensureRight(value, substr, caseSensitive);
    };
    EnsureRightValueConverter = __decorate([
        aurelia_framework_1.valueConverter('ensurright')
    ], EnsureRightValueConverter);
    return EnsureRightValueConverter;
}());
exports.EnsureRightValueConverter = EnsureRightValueConverter;
//# sourceMappingURL=ensureright.js.map
});
___scope___.file("value-converters/vanilla/string/strman/equal.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var EqualValueConverter = (function () {
    function EqualValueConverter() {
    }
    EqualValueConverter.prototype.toView = function (stringA, stringB) {
        return strman_1.equal(stringA, stringB);
    };
    EqualValueConverter = __decorate([
        aurelia_framework_1.valueConverter('equal')
    ], EqualValueConverter);
    return EqualValueConverter;
}());
exports.EqualValueConverter = EqualValueConverter;
//# sourceMappingURL=equal.js.map
});
___scope___.file("value-converters/vanilla/string/strman/first.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var FirstValueConverter = (function () {
    function FirstValueConverter() {
    }
    FirstValueConverter.prototype.toView = function (value, n) {
        return strman_1.first(value, n);
    };
    FirstValueConverter = __decorate([
        aurelia_framework_1.valueConverter('first')
    ], FirstValueConverter);
    return FirstValueConverter;
}());
exports.FirstValueConverter = FirstValueConverter;
//# sourceMappingURL=first.js.map
});
___scope___.file("value-converters/vanilla/string/strman/format.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var FormatValueConverter = (function () {
    function FormatValueConverter() {
    }
    FormatValueConverter.prototype.toView = function (value) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return strman_1.format(value, params);
    };
    FormatValueConverter = __decorate([
        aurelia_framework_1.valueConverter('format')
    ], FormatValueConverter);
    return FormatValueConverter;
}());
exports.FormatValueConverter = FormatValueConverter;
//# sourceMappingURL=format.js.map
});
___scope___.file("value-converters/vanilla/string/strman/hexdecode.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var HexDecodeValueConverter = (function () {
    function HexDecodeValueConverter() {
    }
    HexDecodeValueConverter.prototype.toView = function (value) {
        return strman_1.hexDecode(value);
    };
    HexDecodeValueConverter = __decorate([
        aurelia_framework_1.valueConverter('hexdecode')
    ], HexDecodeValueConverter);
    return HexDecodeValueConverter;
}());
exports.HexDecodeValueConverter = HexDecodeValueConverter;
//# sourceMappingURL=hexdecode.js.map
});
___scope___.file("value-converters/vanilla/string/strman/hexencode.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var HexEncodeValueConverter = (function () {
    function HexEncodeValueConverter() {
    }
    HexEncodeValueConverter.prototype.toView = function (value) {
        return strman_1.hexEncode(value);
    };
    HexEncodeValueConverter = __decorate([
        aurelia_framework_1.valueConverter('hexencode')
    ], HexEncodeValueConverter);
    return HexEncodeValueConverter;
}());
exports.HexEncodeValueConverter = HexEncodeValueConverter;
//# sourceMappingURL=hexencode.js.map
});
___scope___.file("value-converters/vanilla/string/strman/htmldecode.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var HtmlDecodeValueConverter = (function () {
    function HtmlDecodeValueConverter() {
    }
    HtmlDecodeValueConverter.prototype.toView = function (value) {
        return strman_1.htmlDecode(value);
    };
    HtmlDecodeValueConverter = __decorate([
        aurelia_framework_1.valueConverter('htmldecode')
    ], HtmlDecodeValueConverter);
    return HtmlDecodeValueConverter;
}());
exports.HtmlDecodeValueConverter = HtmlDecodeValueConverter;
//# sourceMappingURL=htmldecode.js.map
});
___scope___.file("value-converters/vanilla/string/strman/htmlencode.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var HtmlEncodeValueConverter = (function () {
    function HtmlEncodeValueConverter() {
    }
    HtmlEncodeValueConverter.prototype.toView = function (value) {
        return strman_1.htmlEncode(value);
    };
    HtmlEncodeValueConverter = __decorate([
        aurelia_framework_1.valueConverter('htmlencode')
    ], HtmlEncodeValueConverter);
    return HtmlEncodeValueConverter;
}());
exports.HtmlEncodeValueConverter = HtmlEncodeValueConverter;
//# sourceMappingURL=htmlencode.js.map
});
___scope___.file("value-converters/vanilla/string/strman/index.js", function(exports, require, module, __filename, __dirname){

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./append'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./appendArray'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./at'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./base64decode'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./base64encode'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./between'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./bindecode'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./binencode'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./chars'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./collapsewhitespace'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./compare'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./contains'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./containsall'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./containsany'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./countsubstr'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./decdecode'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./decencode'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./endswith'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./ensureleft'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./ensureright'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./equal'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./first'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./format'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./hexdecode'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./hexencode'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./htmldecode'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./htmlencode'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./inequal'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./insert'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./islowercase'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./isstring'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./isuppercase'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./last'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./lastindexof'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./leftpad'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./lefttrim'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./prepend'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./prependarray'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./removeemptystrings'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./removeleft'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./removenonwords'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./removespaces'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./repeat'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./replace'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./reverse'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./rightpad'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./righttrim'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./safetruncate'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./shuffle'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./slice'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./split'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./startswith'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./substr'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./surround'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./tocamelcase'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./todecamelize'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./tokebabcase'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./tolowercase'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./tosnakecase'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./tosnakecase'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./touppercase'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./transliterate'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./trim'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./truncate'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./urlencode'));
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./urldecode'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
});
___scope___.file("value-converters/vanilla/string/strman/inequal.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var InequalValueConverter = (function () {
    function InequalValueConverter() {
    }
    InequalValueConverter.prototype.toView = function (stringA, stringB) {
        return strman_1.inequal(stringA, stringB);
    };
    InequalValueConverter = __decorate([
        aurelia_framework_1.valueConverter('inequal')
    ], InequalValueConverter);
    return InequalValueConverter;
}());
exports.InequalValueConverter = InequalValueConverter;
//# sourceMappingURL=inequal.js.map
});
___scope___.file("value-converters/vanilla/string/strman/insert.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var InsertValueConverter = (function () {
    function InsertValueConverter() {
    }
    InsertValueConverter.prototype.toView = function (value, substr, index) {
        return strman_1.insert(value, substr, index);
    };
    InsertValueConverter = __decorate([
        aurelia_framework_1.valueConverter('insert')
    ], InsertValueConverter);
    return InsertValueConverter;
}());
exports.InsertValueConverter = InsertValueConverter;
//# sourceMappingURL=insert.js.map
});
___scope___.file("value-converters/vanilla/string/strman/islowercase.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var IsLowerCaseValueConverter = (function () {
    function IsLowerCaseValueConverter() {
    }
    IsLowerCaseValueConverter.prototype.toView = function (value) {
        return strman_1.isLowerCase(value);
    };
    IsLowerCaseValueConverter = __decorate([
        aurelia_framework_1.valueConverter('islowercase')
    ], IsLowerCaseValueConverter);
    return IsLowerCaseValueConverter;
}());
exports.IsLowerCaseValueConverter = IsLowerCaseValueConverter;
//# sourceMappingURL=islowercase.js.map
});
___scope___.file("value-converters/vanilla/string/strman/isstring.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var IsStringValueConverter = (function () {
    function IsStringValueConverter() {
    }
    IsStringValueConverter.prototype.toView = function (value) {
        return strman_1.isString(value);
    };
    IsStringValueConverter = __decorate([
        aurelia_framework_1.valueConverter('isstring')
    ], IsStringValueConverter);
    return IsStringValueConverter;
}());
exports.IsStringValueConverter = IsStringValueConverter;
//# sourceMappingURL=isstring.js.map
});
___scope___.file("value-converters/vanilla/string/strman/isuppercase.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var IsUpperCaseValueConverter = (function () {
    function IsUpperCaseValueConverter() {
    }
    IsUpperCaseValueConverter.prototype.toView = function (value) {
        return strman_1.isUpperCase(value);
    };
    IsUpperCaseValueConverter = __decorate([
        aurelia_framework_1.valueConverter('isuppercase')
    ], IsUpperCaseValueConverter);
    return IsUpperCaseValueConverter;
}());
exports.IsUpperCaseValueConverter = IsUpperCaseValueConverter;
//# sourceMappingURL=isuppercase.js.map
});
___scope___.file("value-converters/vanilla/string/strman/last.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var LastValueConverter = (function () {
    function LastValueConverter() {
    }
    LastValueConverter.prototype.toView = function (value, n) {
        return strman_1.last(value, n);
    };
    LastValueConverter = __decorate([
        aurelia_framework_1.valueConverter('last')
    ], LastValueConverter);
    return LastValueConverter;
}());
exports.LastValueConverter = LastValueConverter;
//# sourceMappingURL=last.js.map
});
___scope___.file("value-converters/vanilla/string/strman/lastindexof.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var LastIndexOfValueConverter = (function () {
    function LastIndexOfValueConverter() {
    }
    LastIndexOfValueConverter.prototype.toView = function (value, needle, offset, caseSensitive) {
        return strman_1.lastIndexOf(value, needle, offset, caseSensitive);
    };
    LastIndexOfValueConverter = __decorate([
        aurelia_framework_1.valueConverter('lastindexof')
    ], LastIndexOfValueConverter);
    return LastIndexOfValueConverter;
}());
exports.LastIndexOfValueConverter = LastIndexOfValueConverter;
//# sourceMappingURL=lastindexof.js.map
});
___scope___.file("value-converters/vanilla/string/strman/leftpad.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var LeftPadValueConverter = (function () {
    function LeftPadValueConverter() {
    }
    LeftPadValueConverter.prototype.toView = function (value, length, char) {
        return strman_1.leftPad(value, length, char);
    };
    LeftPadValueConverter = __decorate([
        aurelia_framework_1.valueConverter('leftpad')
    ], LeftPadValueConverter);
    return LeftPadValueConverter;
}());
exports.LeftPadValueConverter = LeftPadValueConverter;
//# sourceMappingURL=leftpad.js.map
});
___scope___.file("value-converters/vanilla/string/strman/lefttrim.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var LeftTrimValueConverter = (function () {
    function LeftTrimValueConverter() {
    }
    LeftTrimValueConverter.prototype.toView = function (value, char) {
        return strman_1.leftTrim(value, char);
    };
    LeftTrimValueConverter = __decorate([
        aurelia_framework_1.valueConverter('lefttrim')
    ], LeftTrimValueConverter);
    return LeftTrimValueConverter;
}());
exports.LeftTrimValueConverter = LeftTrimValueConverter;
//# sourceMappingURL=lefttrim.js.map
});
___scope___.file("value-converters/vanilla/string/strman/prepend.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var PrependValueConverter = (function () {
    function PrependValueConverter() {
    }
    PrependValueConverter.prototype.toView = function (value, prepends) {
        return strman_1.prepend(value, prepends);
    };
    PrependValueConverter = __decorate([
        aurelia_framework_1.valueConverter('prepend')
    ], PrependValueConverter);
    return PrependValueConverter;
}());
exports.PrependValueConverter = PrependValueConverter;
//# sourceMappingURL=prepend.js.map
});
___scope___.file("value-converters/vanilla/string/strman/prependarray.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var PrependArrayValueConverter = (function () {
    function PrependArrayValueConverter() {
    }
    PrependArrayValueConverter.prototype.toView = function (value, prepends) {
        return strman_1.prependArray(value, prepends);
    };
    PrependArrayValueConverter = __decorate([
        aurelia_framework_1.valueConverter('prependarray')
    ], PrependArrayValueConverter);
    return PrependArrayValueConverter;
}());
exports.PrependArrayValueConverter = PrependArrayValueConverter;
//# sourceMappingURL=prependarray.js.map
});
___scope___.file("value-converters/vanilla/string/strman/removeemptystrings.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var RemoveEmptyStringsValueConverter = (function () {
    function RemoveEmptyStringsValueConverter() {
    }
    RemoveEmptyStringsValueConverter.prototype.toView = function (strings) {
        return strman_1.removeEmptyStrings(strings);
    };
    RemoveEmptyStringsValueConverter = __decorate([
        aurelia_framework_1.valueConverter('removeemptystrings')
    ], RemoveEmptyStringsValueConverter);
    return RemoveEmptyStringsValueConverter;
}());
exports.RemoveEmptyStringsValueConverter = RemoveEmptyStringsValueConverter;
//# sourceMappingURL=removeemptystrings.js.map
});
___scope___.file("value-converters/vanilla/string/strman/removeleft.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var RemoveLeftValueConverter = (function () {
    function RemoveLeftValueConverter() {
    }
    RemoveLeftValueConverter.prototype.toView = function (value, prefix, caseSensitive) {
        return strman_1.removeLeft(value, prefix, caseSensitive);
    };
    RemoveLeftValueConverter = __decorate([
        aurelia_framework_1.valueConverter('removeleft')
    ], RemoveLeftValueConverter);
    return RemoveLeftValueConverter;
}());
exports.RemoveLeftValueConverter = RemoveLeftValueConverter;
//# sourceMappingURL=removeleft.js.map
});
___scope___.file("value-converters/vanilla/string/strman/removenonwords.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var RemoveNonWordsValueConverter = (function () {
    function RemoveNonWordsValueConverter() {
    }
    RemoveNonWordsValueConverter.prototype.toView = function (value, replaced) {
        return strman_1.removeNonWords(value, replaced);
    };
    RemoveNonWordsValueConverter = __decorate([
        aurelia_framework_1.valueConverter('removenonwords')
    ], RemoveNonWordsValueConverter);
    return RemoveNonWordsValueConverter;
}());
exports.RemoveNonWordsValueConverter = RemoveNonWordsValueConverter;
//# sourceMappingURL=removenonwords.js.map
});
___scope___.file("value-converters/vanilla/string/strman/removespaces.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var RemoveSpacesValueConverter = (function () {
    function RemoveSpacesValueConverter() {
    }
    RemoveSpacesValueConverter.prototype.toView = function (value, replaced) {
        return strman_1.removeSpaces(value, replaced);
    };
    RemoveSpacesValueConverter = __decorate([
        aurelia_framework_1.valueConverter('removespaces')
    ], RemoveSpacesValueConverter);
    return RemoveSpacesValueConverter;
}());
exports.RemoveSpacesValueConverter = RemoveSpacesValueConverter;
//# sourceMappingURL=removespaces.js.map
});
___scope___.file("value-converters/vanilla/string/strman/repeat.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var RepeatValueConverter = (function () {
    function RepeatValueConverter() {
    }
    RepeatValueConverter.prototype.toView = function (value, multiplier) {
        return strman_1.repeat(value, multiplier);
    };
    RepeatValueConverter = __decorate([
        aurelia_framework_1.valueConverter('repeat')
    ], RepeatValueConverter);
    return RepeatValueConverter;
}());
exports.RepeatValueConverter = RepeatValueConverter;
//# sourceMappingURL=repeat.js.map
});
___scope___.file("value-converters/vanilla/string/strman/replace.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var ReplaceValueConverter = (function () {
    function ReplaceValueConverter() {
    }
    ReplaceValueConverter.prototype.toView = function (value, search, newvalue, caseSensitive, multiline) {
        return strman_1.replace(value, search, newvalue, caseSensitive, multiline);
    };
    ReplaceValueConverter = __decorate([
        aurelia_framework_1.valueConverter('replace')
    ], ReplaceValueConverter);
    return ReplaceValueConverter;
}());
exports.ReplaceValueConverter = ReplaceValueConverter;
//# sourceMappingURL=replace.js.map
});
___scope___.file("value-converters/vanilla/string/strman/reverse.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var ReverseValueConverter = (function () {
    function ReverseValueConverter() {
    }
    ReverseValueConverter.prototype.toView = function (value) {
        return strman_1.reverse(value);
    };
    ReverseValueConverter = __decorate([
        aurelia_framework_1.valueConverter('reverse')
    ], ReverseValueConverter);
    return ReverseValueConverter;
}());
exports.ReverseValueConverter = ReverseValueConverter;
//# sourceMappingURL=reverse.js.map
});
___scope___.file("value-converters/vanilla/string/strman/rightpad.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var RightPadValueConverter = (function () {
    function RightPadValueConverter() {
    }
    RightPadValueConverter.prototype.toView = function (value, length, char) {
        return strman_1.rightPad(value, length, char);
    };
    RightPadValueConverter = __decorate([
        aurelia_framework_1.valueConverter('rightpad')
    ], RightPadValueConverter);
    return RightPadValueConverter;
}());
exports.RightPadValueConverter = RightPadValueConverter;
//# sourceMappingURL=rightpad.js.map
});
___scope___.file("value-converters/vanilla/string/strman/righttrim.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var RightTrimValueConverter = (function () {
    function RightTrimValueConverter() {
    }
    RightTrimValueConverter.prototype.toView = function (value, char) {
        return strman_1.rightTrim(value, char);
    };
    RightTrimValueConverter = __decorate([
        aurelia_framework_1.valueConverter('righttrim')
    ], RightTrimValueConverter);
    return RightTrimValueConverter;
}());
exports.RightTrimValueConverter = RightTrimValueConverter;
//# sourceMappingURL=righttrim.js.map
});
___scope___.file("value-converters/vanilla/string/strman/safetruncate.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var SafeTruncateValueConverter = (function () {
    function SafeTruncateValueConverter() {
    }
    SafeTruncateValueConverter.prototype.toView = function (value, length, append) {
        return strman_1.safeTruncate(value, length, append);
    };
    SafeTruncateValueConverter = __decorate([
        aurelia_framework_1.valueConverter('safetruncate')
    ], SafeTruncateValueConverter);
    return SafeTruncateValueConverter;
}());
exports.SafeTruncateValueConverter = SafeTruncateValueConverter;
//# sourceMappingURL=safetruncate.js.map
});
___scope___.file("value-converters/vanilla/string/strman/shuffle.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var ShuffleValueConverter = (function () {
    function ShuffleValueConverter() {
    }
    ShuffleValueConverter.prototype.toView = function (value) {
        return strman_1.shuffle(value);
    };
    ShuffleValueConverter = __decorate([
        aurelia_framework_1.valueConverter('shuffle')
    ], ShuffleValueConverter);
    return ShuffleValueConverter;
}());
exports.ShuffleValueConverter = ShuffleValueConverter;
//# sourceMappingURL=shuffle.js.map
});
___scope___.file("value-converters/vanilla/string/strman/slice.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var SliceValueConverter = (function () {
    function SliceValueConverter() {
    }
    SliceValueConverter.prototype.toView = function (value, beginSlice, endSlice) {
        return strman_1.slice(value, beginSlice, endSlice);
    };
    SliceValueConverter = __decorate([
        aurelia_framework_1.valueConverter('slice')
    ], SliceValueConverter);
    return SliceValueConverter;
}());
exports.SliceValueConverter = SliceValueConverter;
//# sourceMappingURL=slice.js.map
});
___scope___.file("value-converters/vanilla/string/strman/split.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var SplitValueConverter = (function () {
    function SplitValueConverter() {
    }
    SplitValueConverter.prototype.toView = function (value, separator, limit) {
        return strman_1.split(value, separator, limit);
    };
    SplitValueConverter = __decorate([
        aurelia_framework_1.valueConverter('split')
    ], SplitValueConverter);
    return SplitValueConverter;
}());
exports.SplitValueConverter = SplitValueConverter;
//# sourceMappingURL=split.js.map
});
___scope___.file("value-converters/vanilla/string/strman/startswith.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var StartsWithValueConverter = (function () {
    function StartsWithValueConverter() {
    }
    StartsWithValueConverter.prototype.toView = function (value, search, position, caseSensitive) {
        return strman_1.startsWith(value, search, position, caseSensitive);
    };
    StartsWithValueConverter = __decorate([
        aurelia_framework_1.valueConverter('startswith')
    ], StartsWithValueConverter);
    return StartsWithValueConverter;
}());
exports.StartsWithValueConverter = StartsWithValueConverter;
//# sourceMappingURL=startswith.js.map
});
___scope___.file("value-converters/vanilla/string/strman/substr.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var SubstrValueConverter = (function () {
    function SubstrValueConverter() {
    }
    SubstrValueConverter.prototype.toView = function (value, start, length) {
        return strman_1.substr(value, start, length);
    };
    SubstrValueConverter = __decorate([
        aurelia_framework_1.valueConverter('substr')
    ], SubstrValueConverter);
    return SubstrValueConverter;
}());
exports.SubstrValueConverter = SubstrValueConverter;
//# sourceMappingURL=substr.js.map
});
___scope___.file("value-converters/vanilla/string/strman/surround.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var SurroundValueConverter = (function () {
    function SurroundValueConverter() {
    }
    SurroundValueConverter.prototype.toView = function (value, substr, substrRight) {
        return strman_1.surround(value, substr, substrRight);
    };
    SurroundValueConverter = __decorate([
        aurelia_framework_1.valueConverter('surround')
    ], SurroundValueConverter);
    return SurroundValueConverter;
}());
exports.SurroundValueConverter = SurroundValueConverter;
//# sourceMappingURL=surround.js.map
});
___scope___.file("value-converters/vanilla/string/strman/tocamelcase.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var ToCamelCaseValueConverter = (function () {
    function ToCamelCaseValueConverter() {
    }
    ToCamelCaseValueConverter.prototype.toView = function (value) {
        return strman_1.toCamelCase(value);
    };
    ToCamelCaseValueConverter = __decorate([
        aurelia_framework_1.valueConverter('tocamelcase')
    ], ToCamelCaseValueConverter);
    return ToCamelCaseValueConverter;
}());
exports.ToCamelCaseValueConverter = ToCamelCaseValueConverter;
//# sourceMappingURL=tocamelcase.js.map
});
___scope___.file("value-converters/vanilla/string/strman/todecamelize.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var ToDecamelizeValueConverter = (function () {
    function ToDecamelizeValueConverter() {
    }
    ToDecamelizeValueConverter.prototype.toView = function (value) {
        return strman_1.toDecamelize(value);
    };
    ToDecamelizeValueConverter = __decorate([
        aurelia_framework_1.valueConverter('todecamelize')
    ], ToDecamelizeValueConverter);
    return ToDecamelizeValueConverter;
}());
exports.ToDecamelizeValueConverter = ToDecamelizeValueConverter;
//# sourceMappingURL=todecamelize.js.map
});
___scope___.file("value-converters/vanilla/string/strman/tokebabcase.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var ToKebabCaseValueConverter = (function () {
    function ToKebabCaseValueConverter() {
    }
    ToKebabCaseValueConverter.prototype.toView = function (value) {
        return strman_1.toKebabCase(value);
    };
    ToKebabCaseValueConverter = __decorate([
        aurelia_framework_1.valueConverter('tokebabcase')
    ], ToKebabCaseValueConverter);
    return ToKebabCaseValueConverter;
}());
exports.ToKebabCaseValueConverter = ToKebabCaseValueConverter;
//# sourceMappingURL=tokebabcase.js.map
});
___scope___.file("value-converters/vanilla/string/strman/tolowercase.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var ToLowerCaseValueConverter = (function () {
    function ToLowerCaseValueConverter() {
    }
    ToLowerCaseValueConverter.prototype.toView = function (value) {
        return strman_1.toLowerCase(value);
    };
    ToLowerCaseValueConverter = __decorate([
        aurelia_framework_1.valueConverter('tolowercase')
    ], ToLowerCaseValueConverter);
    return ToLowerCaseValueConverter;
}());
exports.ToLowerCaseValueConverter = ToLowerCaseValueConverter;
//# sourceMappingURL=tolowercase.js.map
});
___scope___.file("value-converters/vanilla/string/strman/tosnakecase.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var ToSnakeCaseValueConverter = (function () {
    function ToSnakeCaseValueConverter() {
    }
    ToSnakeCaseValueConverter.prototype.toView = function (value) {
        return strman_1.toSnakeCase(value);
    };
    ToSnakeCaseValueConverter = __decorate([
        aurelia_framework_1.valueConverter('tosnakecase')
    ], ToSnakeCaseValueConverter);
    return ToSnakeCaseValueConverter;
}());
exports.ToSnakeCaseValueConverter = ToSnakeCaseValueConverter;
//# sourceMappingURL=tosnakecase.js.map
});
___scope___.file("value-converters/vanilla/string/strman/tostudlycaps.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var ToStudlyCapsValueConverter = (function () {
    function ToStudlyCapsValueConverter() {
    }
    ToStudlyCapsValueConverter.prototype.toView = function (value) {
        return strman_1.toStudlyCaps(value);
    };
    ToStudlyCapsValueConverter = __decorate([
        aurelia_framework_1.valueConverter('tostudlycaps')
    ], ToStudlyCapsValueConverter);
    return ToStudlyCapsValueConverter;
}());
exports.ToStudlyCapsValueConverter = ToStudlyCapsValueConverter;
//# sourceMappingURL=tostudlycaps.js.map
});
___scope___.file("value-converters/vanilla/string/strman/touppercase.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var ToUpperCaseValueConverter = (function () {
    function ToUpperCaseValueConverter() {
    }
    ToUpperCaseValueConverter.prototype.toView = function (value) {
        return strman_1.toUpperCase(value);
    };
    ToUpperCaseValueConverter = __decorate([
        aurelia_framework_1.valueConverter('touppercase')
    ], ToUpperCaseValueConverter);
    return ToUpperCaseValueConverter;
}());
exports.ToUpperCaseValueConverter = ToUpperCaseValueConverter;
//# sourceMappingURL=touppercase.js.map
});
___scope___.file("value-converters/vanilla/string/strman/transliterate.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var TransLiterateValueConverter = (function () {
    function TransLiterateValueConverter() {
    }
    TransLiterateValueConverter.prototype.toView = function (value) {
        return strman_1.transliterate(value);
    };
    TransLiterateValueConverter = __decorate([
        aurelia_framework_1.valueConverter('transliterate')
    ], TransLiterateValueConverter);
    return TransLiterateValueConverter;
}());
exports.TransLiterateValueConverter = TransLiterateValueConverter;
//# sourceMappingURL=transliterate.js.map
});
___scope___.file("value-converters/vanilla/string/strman/trim.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var TrimValueConverter = (function () {
    function TrimValueConverter() {
    }
    TrimValueConverter.prototype.toView = function (value, char) {
        return strman_1.trim(value, char);
    };
    TrimValueConverter = __decorate([
        aurelia_framework_1.valueConverter('trim')
    ], TrimValueConverter);
    return TrimValueConverter;
}());
exports.TrimValueConverter = TrimValueConverter;
//# sourceMappingURL=trim.js.map
});
___scope___.file("value-converters/vanilla/string/strman/truncate.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var TruncateValueConverter = (function () {
    function TruncateValueConverter() {
    }
    TruncateValueConverter.prototype.toView = function (value, length, append) {
        return strman_1.truncate(value, length, append);
    };
    TruncateValueConverter = __decorate([
        aurelia_framework_1.valueConverter('truncate')
    ], TruncateValueConverter);
    return TruncateValueConverter;
}());
exports.TruncateValueConverter = TruncateValueConverter;
//# sourceMappingURL=truncate.js.map
});
___scope___.file("value-converters/vanilla/string/strman/urldecode.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var UrlDecodeValueConverter = (function () {
    function UrlDecodeValueConverter() {
    }
    UrlDecodeValueConverter.prototype.toView = function (value) {
        return strman_1.urlDecode(value);
    };
    UrlDecodeValueConverter = __decorate([
        aurelia_framework_1.valueConverter('urldecode')
    ], UrlDecodeValueConverter);
    return UrlDecodeValueConverter;
}());
exports.UrlDecodeValueConverter = UrlDecodeValueConverter;
//# sourceMappingURL=urldecode.js.map
});
___scope___.file("value-converters/vanilla/string/strman/urlencode.js", function(exports, require, module, __filename, __dirname){

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var strman_1 = require("strman");
var UrlEncodeValueConverter = (function () {
    function UrlEncodeValueConverter() {
    }
    UrlEncodeValueConverter.prototype.toView = function (value) {
        return strman_1.urlEncode(value);
    };
    UrlEncodeValueConverter = __decorate([
        aurelia_framework_1.valueConverter('urlencode')
    ], UrlEncodeValueConverter);
    return UrlEncodeValueConverter;
}());
exports.UrlEncodeValueConverter = UrlEncodeValueConverter;
//# sourceMappingURL=urlencode.js.map
});
___scope___.file("components/bootstrap/button/abt-button.css", function(exports, require, module, __filename, __dirname){

module.exports = "abt-button>button {\n  cursor: pointer;\n}\n\n.abt-button {\n  cursor: pointer;\n}\n\n.abt-button[disabled] {\n  cursor: auto;\n}\n"
});
___scope___.file("components/bootstrap/card/abt-card-columns.css", function(exports, require, module, __filename, __dirname){

module.exports = ".card-columns {\n    display: inline-block !important;\n    column-break-inside: avoid !important;\n  }"
});
___scope___.file("components/bootstrap/dropdown/abt-dropdown-item.css", function(exports, require, module, __filename, __dirname){

module.exports = ".abt-dropdown-item {\n    cursor: pointer;\n    -webkit-touch-callout: none;\n    /* iOS Safari */\n    -webkit-user-select: none;\n    /* Safari */\n    -khtml-user-select: none;\n    /* Konqueror HTML */\n    -moz-user-select: none;\n    /* Firefox */\n    -ms-user-select: none;\n    /* Internet Explorer/Edge */\n    user-select: none;\n    /* Non-prefixed version, currently supported by Chrome and Opera */\n}\n\n.abt-dropdown-item .disabled {\n    cursor: auto;\n}\n"
});
___scope___.file("components/bootstrap/float-input/abt-float-input.css", function(exports, require, module, __filename, __dirname){

module.exports = ".has-float-label {\n  display: block;\n  position: relative;\n}\n.has-float-label label, .has-float-label > span {\n  position: absolute;\n  left: 0;\n  top: 0;\n  cursor: text;\n  font-size: 75%;\n  opacity: 1;\n  -webkit-transition: all .2s;\n          transition: all .2s;\n  top: -.5em;\n  left: 0.75rem;\n  z-index: 3;\n  line-height: 1;\n  padding: 0 1px;\n}\n.has-float-label label::after, .has-float-label > span::after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  background: white;\n  height: 2px;\n  top: 50%;\n  left: -.2em;\n  right: -.2em;\n  z-index: -1;\n}\n.has-float-label .form-control::-webkit-input-placeholder {\n  opacity: 1;\n  -webkit-transition: all .2s;\n          transition: all .2s;\n}\n.has-float-label .form-control::-moz-placeholder {\n  opacity: 1;\n  transition: all .2s;\n}\n.has-float-label .form-control:-ms-input-placeholder {\n  opacity: 1;\n  transition: all .2s;\n}\n.has-float-label .form-control::placeholder {\n  opacity: 1;\n  -webkit-transition: all .2s;\n          transition: all .2s;\n}\n.has-float-label .form-control:placeholder-shown:not(:focus)::-webkit-input-placeholder {\n  opacity: 0;\n}\n.has-float-label .form-control:placeholder-shown:not(:focus)::-moz-placeholder {\n  opacity: 0;\n}\n.has-float-label .form-control:placeholder-shown:not(:focus):-ms-input-placeholder {\n  opacity: 0;\n}\n.has-float-label .form-control:placeholder-shown:not(:focus)::placeholder {\n  opacity: 0;\n}\n.has-float-label .form-control:placeholder-shown:not(:focus) + * {\n  font-size: 150%;\n  opacity: .5;\n  top: .3em;\n}\n\n.input-group .has-float-label {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-bottom: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.input-group .has-float-label .form-control {\n  width: 100%;\n  border-radius: 0.25rem;\n}\n.input-group .has-float-label:not(:last-child), .input-group .has-float-label:not(:last-child) .form-control {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  border-right: 0;\n}\n.input-group .has-float-label:not(:first-child), .input-group .has-float-label:not(:first-child) .form-control {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n"
});
___scope___.file("components/bootstrap/listgroup/abt-listgroup-item.css", function(exports, require, module, __filename, __dirname){

module.exports = "a.abt-listgroup-item-disabled {\n    pointer-events: none !important;\n}"
});
___scope___.file("components/bootstrap/navbar/abt-navbar-brand.css", function(exports, require, module, __filename, __dirname){

module.exports = "a.abt-navbar-brand-heading {\n    pointer-events: none !important;\n}"
});
___scope___.file("components/bootstrap/navbar/abt-navbar-link.css", function(exports, require, module, __filename, __dirname){

module.exports = ".nav-link.disabled {\n    pointer-events: none !important;\n}"
});
___scope___.file("components/bootstrap/navbar/navbar-megamenu.css", function(exports, require, module, __filename, __dirname){

module.exports = ".navbar-megamenu .nav,\n.navbar-megamenu .collapse,\n.navbar-megamenu .dropup,\n.navbar-megamenu .dropdown {\n    position: static;\n}\n.navbar-megamenu .container {\n    position: relative;\n}\n.navbar-megamenu .dropdown-menu {\n    left: auto;\n}\n.navbar-megamenu .navbar-megamenu-content {\n    padding: 20px 30px;\n}\n.navbar-megamenu .dropdown.navbar-megamenu-fullwidth .dropdown-menu {\n    left: 0;\n    right: 0;\n}\n.navbar-megamenu .dropup.navbar-megamenu-fullwidth .dropdown-menu {\n  left: 0;\n  right: 0;\n}\n"
});
___scope___.file("components/bootstrap/pagination/abt-pagination.css", function(exports, require, module, __filename, __dirname){

module.exports = ".abt-pagination\n{\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */\n}\n"
});
___scope___.file("components/bootstrap/password/abt-password.css", function(exports, require, module, __filename, __dirname){

module.exports = ".abt-password-input {\n    border-color: none !important;\n    box-shadow: none !important;\n    -webkit-box-shadow: none !important;\n    outline: none !important;\n}\n\n.abt-password-button {\n    border-color: none !important;\n    box-shadow: none !important;\n    -webkit-box-shadow: none !important;\n    outline: none !important;\n    cursor: pointer;\n}\n\n.abt-password-error-icon {\n    color: red !important;\n    margin-right: 5px !important;\n}\n\n"
});
___scope___.file("components/bootstrap/star-rate/abt-star-rate.css", function(exports, require, module, __filename, __dirname){

module.exports = ".abt-star-rate {\n    display: inline-block;\n    position: relative;\n    width: 1.0em;\n}\n\n\n.abt-empty-star:before,\n.abt-empty-star~.abt-empty-star:before {\n    content: \"\\2606\";\n    /*full star : \\2605 = &#9733;  *******  empty star : \\2606 = &#9734;   ********  outlined star: \\272E = &#10030; */\n    position: absolute;\n    display: block;\n}\n\n.abt-full-star:before,\n.abt-full-star~.abt-full-star:before {\n    content: \"\\2605\";\n    /*full star : \\2605 = &#9733;  *******  empty star : \\2606 = &#9734;   ********  outlined star: \\272E = &#10030; */\n    position: absolute;\n    display: block;\n}\n\n.abt-star-rtl {\n    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\n    -webkit-transform: scale(-1, 1);\n    -ms-transform: scale(-1, 1);\n    transform: scale(-1, 1);\n}\n"
});
___scope___.file("components/bootstrap/toggle/abt-toggle.css", function(exports, require, module, __filename, __dirname){

module.exports = "/*! ========================================================================\n * Bootstrap Toggle: bootstrap-toggle.css v2.2.0\n * http://www.bootstraptoggle.com\n * ========================================================================\n * Copyright 2014 Min Hur, The New York Times Company\n * Licensed under MIT\n * ======================================================================== */\n\n.checkbox label .toggle, .checkbox-inline .toggle {\n    margin-left: 0px;\n    margin-right: 3px;\n}\n\n.toggle {\n    position: relative;\n    overflow: hidden;\n}\n\n.toggle input[type=\"checkbox\"] {\n    display: none;\n}\n\n.toggle-group {\n    position: absolute;\n    width: 200%;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    transition: left 0.35s;\n    -webkit-transition: left 0.35s;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n}\n\n.toggle.off .toggle-group {\n    left: -100%;\n}\n\n.toggle-on {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 50%;\n    margin: 0;\n    border: 0;\n    border-radius: 0;\n}\n\n.toggle-off {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    right: 0;\n    margin: 0;\n    border: 0;\n    border-radius: 0;\n}\n\n.toggle-handle {\n    position: relative;\n    margin: 0 auto;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    height: 100%;\n    width: 0px;\n    border-width: 0 1px;\n}\n\n.toggle.btn {\n    min-width: 59px;\n    min-height: 34px;\n}\n\n.toggle-on.btn {\n    padding-right: 24px;\n}\n\n.toggle-off.btn {\n    padding-left: 24px;\n}\n\n.toggle.btn-lg {\n    min-width: 79px;\n    min-height: 45px;\n}\n\n.toggle-on.btn-lg {\n    padding-right: 31px;\n}\n\n.toggle-off.btn-lg {\n    padding-left: 31px;\n}\n\n.toggle-handle.btn-lg {\n    width: 40px;\n}\n\n.toggle.btn-sm {\n    min-width: 50px;\n    min-height: 30px;\n}\n\n.toggle-on.btn-sm {\n    padding-right: 20px;\n}\n\n.toggle-off.btn-sm {\n    padding-left: 20px;\n}\n\n.toggle.btn-xs {\n    min-width: 35px;\n    min-height: 22px;\n}\n\n.toggle-on.btn-xs {\n    padding-right: 12px;\n}\n\n.toggle-off.btn-xs {\n    padding-left: 12px;\n}\n\n/* Toolbelt Styles */\n\n.toggle-on, .toggle-off, .checkbox-inline, .checkbox label .toggle, .checkbox-inline .toggle {\n    cursor: pointer\n}\n\n/*  **************************************************  */"
});
___scope___.file("components/jquery/block-ui/aut-block-ui.css", function(exports, require, module, __filename, __dirname){

module.exports = "/* http://tobiasahlin.com/spinkit/ */\n\n.bounce {\n    text-align: center;    \n}\n\n.bounce>div {\n    width: 18px;\n    height: 18px;\n    background-color: #333;\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n    animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n.bounce .bounce1 {\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n}\n\n.bounce .bounce2 {\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n    0%,\n    80%,\n    100% {\n        -webkit-transform: scale(0)\n    }\n    40% {\n        -webkit-transform: scale(1.0)\n    }\n}\n\n@keyframes sk-bouncedelay {\n    0%,\n    80%,\n    100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    40% {\n        -webkit-transform: scale(1.0);\n        transform: scale(1.0);\n    }\n}\n\n"
});
___scope___.file("components/vanilla/clock/aut-clock.css", function(exports, require, module, __filename, __dirname){

module.exports = "/* @font-face {\n  font-family: 'Digital-7';\n  src: url('./digital-7/Digital-7.eot');\n  src: url('./digital-7/Digital-7.eot?#iefix') format('embedded-opentype'), url('./digital-7/Digital-7.woff2') format('woff2'), url('./digital-7/Digital-7.woff') format('woff'), url('./digital-7/Digital-7.ttf') format('truetype'), url('./digital-7/Digital-7.svg#Digital-7') format('svg');\n  font-weight: normal;\n  font-style: normal;\n} */\n\n.clock {\n  font-family: Tahoma, monospace;\n  text-align: center;\n  /* -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%); */\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  -khtml-user-select: none;\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently */\n}\n\n.clock>p {\n  margin: 0;\n  padding: 0;\n}\n\n.clock .time {\n  letter-spacing: 0.05em;\n}\n\n.clock .date {\n  letter-spacing: 0.1em;\n  padding-bottom: 3px;\n}\n\n.clock .text {\n  letter-spacing: 0.1em;\n  padding: 5px 0 0;\n}\n"
});
___scope___.file("components/vanilla/divider/aut-divider.css", function(exports, require, module, __filename, __dirname){

module.exports = "@-webkit-keyframes spinAround{\n    from{\n        -webkit-transform:rotate(0);\n        transform:rotate(0);\n    }\n    to{\n        -webkit-transform:rotate(359deg);\n        transform:rotate(359deg);\n    }\n}\n@keyframes spinAround{\n    from{\n        -webkit-transform:rotate(0);\n        transform:rotate(0);\n    }\n    to{\n        -webkit-transform:rotate(359deg);\n        transform:rotate(359deg);\n    }\n}\n.is-divider,.is-divider-vertical{\n    display:block;\n    position:relative;\n}\n.is-divider-vertical[data-content]::after,.is-divider[data-content]::after{\n    background:#fff;\n    color:#b5b5b5;\n    content:attr(data-content);\n    display:inline-block;\n    font-size:.75rem;\n    padding:.5rem .8rem;\n    -webkit-transform:translateY(-1.1rem);\n    transform:translateY(-1.1rem);\n    text-align:center;\n}\n.is-divider{\n    border-top:.1rem solid #dbdbdb;\n    height:.1rem;\n    margin:2rem 0;\n    text-align:center;\n}\n.is-divider-vertical{\n    display:block;\n    padding:2rem;\n    position:relative;\n}\n\n.is-divider-vertical::before{\n    border-left:.1rem solid #dbdbdb;\n    bottom:1rem;\n    content:\"\";\n    display:block;\n    left:50%;\n    position:absolute;\n    top:1rem;\n    -webkit-transform:translateX(-50%);\n    transform:translateX(-50%);\n\n}\n.is-divider-vertical[data-content]::after{\n    left:50%;\n    padding:.4rem 0;\n    position:relative;\n    top:50%;\n    -webkit-transform:translate(-50%,-50%);\n    transform:translate(-50%,-50%);\n}\n"
});
___scope___.file("components/vanilla/scrollup/aut-scrollup.css", function(exports, require, module, __filename, __dirname){

module.exports = ".aut-scrollup {\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  width:50px;\n  height:50px;\n  z-index: 9999999;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 0px;\n  border-radius: 50%;\n}\n.aut-scrollup-noselect {\n  -webkit-touch-callout: none !important;\n  -webkit-user-select: none !important;\n  -khtml-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n.aut-scrollup-noselect:focus,\n.aut-scrollup-noselect:active {\n  outline: none !important;\n  box-shadow: none !important;\n}\n"
});
___scope___.file("external-resources/css/toastr.css", function(exports, require, module, __filename, __dirname){

module.exports = ".toast-title {\n  font-weight: bold;\n}\n.toast-message {\n  -ms-word-wrap: break-word;\n  word-wrap: break-word;\n}\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  -webkit-text-shadow: 0 1px 0 #ffffff;\n  text-shadow: 0 1px 0 #ffffff;\n  opacity: 0.8;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\n  filter: alpha(opacity=80);\n  line-height: 1;\n}\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);\n  filter: alpha(opacity=40);\n}\n.rtl .toast-close-button {\n  left: -0.3em;\n  float: left;\n  right: 0.3em;\n}\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n#toast-container {\n  position: fixed;\n  z-index: 999999;\n  pointer-events: none;\n  /*overrides*/\n}\n#toast-container * {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n#toast-container > div {\n  position: relative;\n  pointer-events: auto;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  -moz-border-radius: 3px 3px 3px 3px;\n  -webkit-border-radius: 3px 3px 3px 3px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  -moz-box-shadow: 0 0 12px #999999;\n  -webkit-box-shadow: 0 0 12px #999999;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n  opacity: 0.8;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\n  filter: alpha(opacity=80);\n}\n#toast-container > div.rtl {\n  direction: rtl;\n  padding: 15px 50px 15px 15px;\n  background-position: right 15px center;\n}\n#toast-container > div:hover {\n  -moz-box-shadow: 0 0 12px #000000;\n  -webkit-box-shadow: 0 0 12px #000000;\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  filter: alpha(opacity=100);\n  cursor: pointer;\n}\n#toast-container > .toast-info {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=\") !important;\n}\n#toast-container > .toast-error {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=\") !important;\n}\n#toast-container > .toast-success {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==\") !important;\n}\n#toast-container > .toast-warning {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=\") !important;\n}\n#toast-container.toast-top-center > div,\n#toast-container.toast-bottom-center > div {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n#toast-container.toast-top-full-width > div,\n#toast-container.toast-bottom-full-width > div {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.toast {\n  background-color: #030303;\n}\n.toast-success {\n  background-color: #51A351;\n}\n.toast-error {\n  background-color: #BD362F;\n}\n.toast-info {\n  background-color: #2F96B4;\n}\n.toast-warning {\n  background-color: #F89406;\n}\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);\n  filter: alpha(opacity=40);\n}\n/*Responsive Design*/\n@media all and (max-width: 240px) {\n  #toast-container > div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  #toast-container > div.rtl {\n    padding: 8px 50px 8px 8px;\n  }\n  #toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n  #toast-container .rtl .toast-close-button {\n    left: -0.2em;\n    right: 0.2em;\n  }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n  #toast-container > div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  #toast-container > div.rtl {\n    padding: 8px 50px 8px 8px;\n  }\n  #toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n  #toast-container .rtl .toast-close-button {\n    left: -0.2em;\n    right: 0.2em;\n  }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n  #toast-container > div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n  #toast-container > div.rtl {\n    padding: 15px 50px 15px 15px;\n  }\n}\n"
});
return ___scope___.entry = "index.js";
});
FuseBox.target = "universal"
FuseBox.defaultPackageName = "aurelia-toolbelt";
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((p||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(p){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!p&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=g[a];if(!s){if(p&&"electron"!==x.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),d=i(c),v=s.f[d];return!v&&d.indexOf("*")>-1&&(l=d),v||l||(d=t(c,"/","index.js"),v=s.f[d],v||"."!==c||(d=s.s&&s.s.entry||"index.js",v=s.f[d]),v||(d=c+".js",v=s.f[d]),v||(v=s.f[c+".jsx"]),v||(d=c+"/index.jsx",v=s.f[d])),{file:v,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:d}}function s(e,r,n){if(void 0===n&&(n={}),!p)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);x.dynamic(a,o),r(x.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=h[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=g[t.pkgName];if(u){var d={};for(var m in u.f)a.test(m)&&(d[m]=c(t.pkgName+"/"+m));return d}}if(!i){var h="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return h?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var y=i.locals={},w=n(t.validPath);y.exports={},y.module={exports:y.exports},y.require=function(e,r){return c(e,{pkg:_,path:w,v:t.versions})},p||!v.require.main?y.require.main={filename:"./",paths:[]}:y.require.main=v.require.main;var j=[y.module.exports,y.require,y.module,t.validPath,w,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),y.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof WorkerGlobalScope,p="undefined"!=typeof window&&window.navigator||d,v=p?d?{}:window:global;p&&(v.global=d?{}:window),e=p&&"undefined"==typeof __fbx__dnm__?e:module.exports;var m=p?d?{}:window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};p||(v.require=require);var g=m.p=m.p||{},h=m.e=m.e||{},x=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){h[e]=h[e]||[],h[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=g[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=g.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(g[e])return n(g[e].s);var t=g[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=g,r.isBrowser=p,r.isServer=!p,r.plugins=[],r}();return p||(v.FuseBox=x),e.FuseBox=x}(this))
//# sourceMappingURL=aurelia-toolbelt.js.map