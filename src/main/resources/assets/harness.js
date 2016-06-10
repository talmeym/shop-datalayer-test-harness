$(document).ready(function() {

    $("#pageLoad").on('click', function() {

        var dataLayerVars = {
            initParams: {
                journeyId: $("#pageload_journeyId").val(),
                basketId: $("#pageload_basketId").val(),
                backend: $("#pageload_backEnd").val(),
                skySSO: $("#pageload_skySSO").val(),
                pageID: $("#pageload_pageId").val(),
                pageName: $("#pageload_pageName").val(),
                geoRegion: $("#pageload_geoRegion").val(),
                variant: $("#pageload_variant").val(),
                contentType: $("#pageload_contentType").val(),
                primaryCategory: $("#pageload_primaryCategory").val()
            },
            config : {
                callbacks: {
                    loadSuccess: function () {
                    },
                    updateSuccess: function () {
                    },
                    error: function (errorObj) {
                    }
                },
                debug: false
            }
        };

        sky.dataLayer.init(dataLayerVars);

        $("#pushEvent").removeAttr('disabled');
        $("#linkClick").removeAttr('disabled');
        $(".siteCatCall").removeAttr('disabled');
    });

    $("#pushEvent").on('click', (function() {

        var eventObj = {
            eventName: $("#event_eventName").val(),
            eventAction: $("#event_eventAction").val(),
            type: $("#event_type").val(),
            name: $("#event_name").val(),
            primaryCategory: $("#event_primaryCategory").val()
        };

        sky.dataLayer.pushEventObject(eventObj);
        $(".siteCatCall").removeAttr('disabled');
    }));

    $("#linkClick").on('click', function() {
        $(".siteCatCall").removeAttr('disabled');
    });

    $(".siteCatCall").on('click', function() {
        window.location = "/result";
    });

    function setVariableOrRemove(variable, value) {
        if(typeof(value) == undefined && value != '') {
            $("#linkClickContainer").removeAttr(variable);
        } else {
            $("#linkClickContainer").attr(variable, value);
        }
    }

    $("#linkClickSetVariables").on('click', function() {
        setVariableOrRemove('data-tracking-module', $("#linkclick_module").val());
        setVariableOrRemove('data-tracking-pod', $("#linkclick_pod").val());
        setVariableOrRemove('data-tracking-context', $("#linkclick_context").val());
        setVariableOrRemove('data-tracking-other', $("#linkclick_other").val());
        setVariableOrRemove('data-tracking-label', $("#linkclick_label").val());
    });
});
