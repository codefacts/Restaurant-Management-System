"use strict";
var React = require('react');

var ViewSell;
module.exports = ViewSell = React.createClass({
    getDefaultProps: function () {
        return {
            id: null
        };
    },
    render: function () {
        var $this = this;

        return (

            <div className="row">
                <div className="col-md-12">

                    ViewSell: {$this.props.params.id}

                </div>
            </div>
        );
    }
});