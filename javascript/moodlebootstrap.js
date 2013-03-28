YUI().use('gallery-bootstrap');

YUI.add('gallery-bootstrap', function(Y) {

var NS = Y.namespace('Bootstrap');

NS.initializer = function(e) {
    //NS.dropdown_delegation();   DISABLED UNTIL COLLAPSE DROPDOWN IS FIXED
    //NS.expandable_delegation(); DISABLED UNTIL COLLAPSE DROPDOWN IS FIXED
};

NS.expandable_delegation = function() {
    Y.delegate('click', function(e) {
        e.preventDefault();

        var target = e.currentTarget;
        if ( ! target.collapse ) {
            target.plug( Y.Bootstrap.Collapse );
        }
        target.collapse.toggle();
    }, document.body, '*[data-toggle="collapse"]' );
};

Y.on('domready', NS.initializer);

}, '@VERSION@' ,{requires:[ 'gallery-bootstrap-dropdown', 'gallery-bootstrap-collapse', 'gallery-bootstrap-engine']});
;