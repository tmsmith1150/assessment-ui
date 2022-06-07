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
            return new Element('button', { text: "change button color to red in the old container", 
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
            // el.link2.addEvent('click', this.buttonClicked.bind());
            // el.link3.addEvent('click', this.buttonClicked.bind());
        },
        // buttonClicked: function(event)  {
        //     event.stop();
        //     var text =  event.target.get('text');
        //     this.setText(text);
        //     this.fireEvent('ButtonClicked', text);
        // },
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