(function() {
    'use strict';
    var MyNewFunComponent = new Class({
        Extends: Rpm.WebComponent,
        componentName: 'MyNewFunComponent',
        buildComponentContent: function() {
            this.el = {
                link4: this.buildButton('One'),
                info : this.buildInfo(),
            };
            return [
                this.el.link4,
                this.el.info
            ];
        },
        buildButton: function() {
            return new Element('button', { text: "click here to change old button color to purple", 
                                             id: "change-color-btn",
                                      className: "unhide" });
        },
        buildInfo: function() {
            return new Element('p', { text: "hmmmm, only button one was clicked in old container",
                                        id: "new-p",
                                        className: "unhide"});
        },
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
        buttonClicked: function()  {
            var mainDiv = document.getElementById("content");
            var oldBtns = document.querySelector("button");
            document.id("change-color-btn").addEvent('click', function() {
                oldBtns.addClass("changes");
                mainDiv.appendChild(oldBtns);
            });

        },
        newBtnClicked: function()  {
            var mainDiv = document.getElementById("content");
            var oldBtns = document.querySelector("button");
            document.id("change-color-btn").addEvent('click', function() {
                oldBtns.addClass("changes");
                mainDiv.appendChild(oldBtns);
            });

        }
        // setText: function(text) {
        //     this.el.info.set('text', text);
        // }
    });

    window.addEvent('load', function() {
        var funNewComponent = new MyNewFunComponent({
            instanceID: 'GlobalFunComponent'
        });
        funNewComponent.renderInside($('new'));
    });
    
})();