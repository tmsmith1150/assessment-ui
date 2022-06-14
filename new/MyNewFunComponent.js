(function() {
    'use strict';
    // function to create new component
    var MyNewFunComponent = new Class({
        Extends: Rpm.WebComponent,
        componentName: 'MyNewFunComponent',
        buildComponentContent: function() {
            this.el = {
                link4: this.buildButton(),
                info : this.buildInfo(),
            };
            return [
                this.el.link4,
                this.el.info
            ];
        },
        // create new button to change color of buttons in old container
        buildButton: function() {
            return new Element('button', {  text: "click to change old buttons to purple",
                                             id: "change-color-btn",
                                      className: "unhide" });
        },
        // create paragraph to alert that a button in old container was clicked
        buildInfo: function() {
            return new Element('p', { text: "Button one was clicked in old container!",
                                        id: "new-p",
                                        className: "unhide"});
        },
        // Append new paragraph and new button to parent div
        connectComponentUI: function(){
            var mainDiv = document.getElementById("content");
            var newEl = document.querySelector("p");
            var newBtn = document.querySelector("button");
            document.id("btn").addEvent('click', function(){
                newEl.addClass('unhide');
                newBtn.addClass('unhide');
                mainDiv.appendChild(newEl);
                mainDiv.appendChild(newBtn);
            });
        
        },
        // Adding event listener to dynamically created new button
        newBtnClicked: function()  {
            var mainDiv = document.getElementById("content");
            var oldBtns = document.querySelector("button");
            document.id("change-color-btn").addEvent('click', function() {
                oldBtns.addClass("changes");
                mainDiv.appendChild(oldBtns);
            });

        }
        
    });

    window.addEvent('load', function() {
        var funNewComponent = new MyNewFunComponent({
            instanceID: 'GlobalFunComponent'
        });
        funNewComponent.renderInside($('new'));
    });
    
})();