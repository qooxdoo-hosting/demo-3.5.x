/** qooxdoo v3.5 | (c) 2013 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
(function(){
if (!window.qx) window.qx = qxWeb.$$qx;
var qx = window.qx;

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"json":true,"qx.application":"library.Application","qx.debug":false,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.debug.io":false,"qx.debug.ui.queue":false,"qx.globalErrorHandling":false,"qx.optimization.variants":true,"qx.revision":"","qx.theme":"qx.theme.Modern","qx.version":"3.5"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

qx.$$packageData = {};

/** qooxdoo v3.5 | (c) 2013 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
qx.$$packageData['0']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2012 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)

************************************************************************ */
/**
 * HTML templating module. This is a wrapper for mustache.js which is a
 * "framework-agnostic way to render logic-free views".
 *
 * Here is a basic example how to use it:
 * <pre class="javascript">
 * var template = "Hi, my name is {{name}}!";
 * var view = {name: "qooxdoo"};
 * q.template.render(template, view);
 *   // return "Hi, my name is qooxdoo!"
 * </pre>
 *
 * For further details, please visit the mustache.js documentation here:
 *   https://github.com/janl/mustache.js/blob/master/README.md
 */
qx.Bootstrap.define("qx.module.Template", {
  statics : {
    /**
     * Helper method which provides direct access to templates stored as HTML in
     * the DOM. The DOM node with the given ID will be treated as a template,
     * parsed and a new DOM element will be returned containing the parsed data.
     * Keep in mind that templates can only have one root element.
     * Additionally, you should not put the template into a regular, hidden
     * DOM element because the template may not be valid HTML due to the containing
     * mustache tags. We suggest to put it into a script tag with the type
     * <code>text/template</code>.
     *
     * @attachStatic{qxWeb, template.get}
     * @param id {String} The id of the HTML template in the DOM.
     * @param view {Object} The object holding the data to render.
     * @param partials {Object} Object holding parts of a template.
     * @return {qxWeb} Collection containing a single DOM element with the parsed
     * template data.
     */
    get : function(id, view, partials){

      var el = qx.bom.Template.get(id, view, partials);
      el = qx.module.Template.__wrap(el);
      return qxWeb.$init([el], qxWeb);
    },
    /**
     * Original and only template method of mustache.js. For further
     * documentation, please visit <a href="https://github.com/janl/mustache.js">mustache.js</a>.
     *
     * @attachStatic{qxWeb, template.render}
     * @param template {String} The String containing the template.
     * @param view {Object} The object holding the data to render.
     * @param partials {Object} Object holding parts of a template.
     * @return {String} The parsed template.
     */
    render : function(template, view, partials){

      return qx.bom.Template.render(template, view, partials);
    },
    /**
     * Combines {@link #render} and {@link #get}. Input is equal to {@link #render}
     * and output is equal to {@link #get}. The advantage over {@link #get}
     * is that you don't need a HTML template but can use a template
     * string and still get a collection. Keep in mind that templates
     * can only have one root element.
     *
     * @attachStatic{qxWeb, template.renderToNode}
     * @param template {String} The String containing the template.
     * @param view {Object} The object holding the data to render.
     * @param partials {Object} Object holding parts of a template.
     * @return {qxWeb} Collection containing a single DOM element with the parsed
     * template data.
     */
    renderToNode : function(template, view, partials){

      var el = qx.bom.Template.renderToNode(template, view, partials);
      el = qx.module.Template.__wrap(el);
      return qxWeb.$init([el], qxWeb);
    },
    /**
     * If the given node is a DOM text node, wrap it in a span element and return
     * the wrapper.
     * @param el {Node} a DOM node
     * @return {Element} Original element or wrapper
     */
    __wrap : function(el){

      if(qxWeb.isTextNode(el)){

        var wrapper = document.createElement("span");
        wrapper.appendChild(el);
        el = wrapper;
      };
      return el;
    }
  },
  defer : function(statics){

    qxWeb.$attachStatic({
      "template" : {
        get : statics.get,
        render : statics.render,
        renderToNode : statics.renderToNode
      }
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2012 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

   ======================================================================

   This class contains code based on the following work:

   * Mustache.js version 0.7.3

     Code:
       https://github.com/janl/mustache.js

     Copyright:
       (c) 2009 Chris Wanstrath (Ruby)
       (c) 2010 Jan Lehnardt (JavaScript)

     License:
       MIT: http://www.opensource.org/licenses/mit-license.php

   ----------------------------------------------------------------------

   Copyright (c) 2009 Chris Wanstrath (Ruby)
   Copyright (c) 2010 Jan Lehnardt (JavaScript)

   Permission is hereby granted, free of charge, to any person obtaining
   a copy of this software and associated documentation files (the
   "Software"), to deal in the Software without restriction, including
   without limitation the rights to use, copy, modify, merge, publish,
   distribute, sublicense, and/or sell copies of the Software, and to
   permit persons to whom the Software is furnished to do so, subject to
   the following conditions:

   The above copyright notice and this permission notice shall be
   included in all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

************************************************************************ */
/**
 * The is a template class which can be used for HTML templating. In fact,
 * this is a wrapper for mustache.js which is a "framework-agnostic way to
 * render logic-free views".
 *
 * Here is a basic example how to use it:
 * Template:
 * <pre class="javascript">
 * var template = "Hi, my name is {{name}}!";
 * var view = {name: "qooxdoo"};
 * qx.bom.Template.render(template, view);
 * // return "Hi, my name is qooxdoo!"
 * </pre>
 *
 * For further details, please visit the mustache.js documentation here:
 *   https://github.com/janl/mustache.js/blob/master/README.md
 *
 * @ignore(module)
 */
qx.Bootstrap.define("qx.bom.Template", {
  statics : {
    /** Contains the mustache.js version. */
    version : null,
    /**
     * Original and only template method of mustache.js. For further
     * documentation, please visit https://github.com/janl/mustache.js
     *
     * @signature function(template, view, partials)
     * @param template {String} The String containing the template.
     * @param view {Object} The object holding the data to render.
     * @param partials {Object} Object holding parts of a template.
     * @return {String} The parsed template.
     */
    render : null,
    /**
     * Combines {@link #render} and {@link #get}. Input is equal to {@link #render}
     * and output is equal to {@link #get}. The advantage over {@link #get}
     * is that you don't need a HTML template but can use a template
     * string and still get a DOM element. Keep in mind that templates
     * can only have one root element.
     *
     * @param template {String} The String containing the template.
     * @param view {Object} The object holding the data to render.
     * @param partials {Object} Object holding parts of a template.
     * @return {Element} A DOM element holding the parsed template data.
     */
    renderToNode : function(template, view, partials){

      var renderedTmpl = this.render(template, view, partials);
      return this._createNodeFromTemplate(renderedTmpl);
    },
    /**
     * Helper method which provides you with a direct access to templates
     * stored as HTML in the DOM. The DOM node with the given ID will be used
     * as a template, parsed and a new DOM node will be returned containing the
     * parsed data. Keep in mind to have only one root DOM element in the the
     * template.
     * Additionally, you should not put the template into a regular, hidden
     * DOM element because the template may not be valid HTML due to the containing
     * mustache tags. We suggest to put it into a script tag with the type
     * <code>text/template</code>.
     *
     * @param id {String} The id of the HTML template in the DOM.
     * @param view {Object} The object holding the data to render.
     * @param partials {Object} Object holding parts of a template.
     * @return {Element} A DOM element holding the parsed template data.
     */
    get : function(id, view, partials){

      // get the content stored in the DOM
      var template = document.getElementById(id);
      return this.renderToNode(template.innerHTML, view, partials);
    },
    /**
     * Accepts a parsed template and returns a (potentially nested) node.
     *
     * @param template {String} The String containing the template.
     * @return {Element} A DOM element holding the parsed template data.
     */
    _createNodeFromTemplate : function(template){

      // template is text only (no html elems) so use text node
      if(template.search(/<|>/) === -1){

        return document.createTextNode(template);
      };
      // template has html elems so convert string into DOM nodes
      var helper = qx.dom.Element.create("div");
      helper.innerHTML = template;
      return helper.children[0];
    }
  }
});
(function(){

  /**
   * Below is the original mustache.js code. Snapshot date is mentioned in
   * the head of this file.
   * @ignore(exports)
   * @ignore(define.*)
   * @ignore(module.*)
   * @lint ignoreNoLoopBlock()
   */
  /*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */
  /*global define: false*/
  (function(root, factory){

    if(typeof exports === "object" && exports){

      factory(exports);
    } else {

      var mustache = {
      };
      factory(mustache);
      if(typeof define === "function" && define.amd){

        define(mustache);
      } else {

        root.Mustache = mustache;
      };
    };
  }(this, function(mustache){

    var whiteRe = /\s*/;
    var spaceRe = /\s+/;
    var nonSpaceRe = /\S/;
    var eqRe = /\s*=/;
    var curlyRe = /\s*\}/;
    var tagRe = /#|\^|\/|>|\{|&|=|!/;
    // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
    // See https://github.com/janl/mustache.js/issues/189
    var RegExp_test = RegExp.prototype.test;
    function testRegExp(re, string){

      return RegExp_test.call(re, string);
    };
    function isWhitespace(string){

      return !testRegExp(nonSpaceRe, string);
    };
    var Object_toString = Object.prototype.toString;
    var isArray = Array.isArray || function(object){

      return Object_toString.call(object) === '[object Array]';
    };
    function isFunction(object){

      return typeof object === 'function';
    };
    function escapeRegExp(string){

      return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    };
    var entityMap = {
      "&" : "&amp;",
      "<" : "&lt;",
      ">" : "&gt;",
      '"' : '&quot;',
      "'" : '&#39;',
      "/" : '&#x2F;'
    };
    function escapeHtml(string){

      return String(string).replace(/[&<>"'\/]/g, function(s){

        return entityMap[s];
      });
    };
    function Scanner(string){

      this.string = string;
      this.tail = string;
      this.pos = 0;
    };
    /**
     * Returns `true` if the tail is empty (end of string).
     */
    Scanner.prototype.eos = function(){

      return this.tail === "";
    };
    /**
     * Tries to match the given regular expression at the current position.
     * Returns the matched text if it can match, the empty string otherwise.
     */
    Scanner.prototype.scan = function(re){

      var match = this.tail.match(re);
      if(match && match.index === 0){

        var string = match[0];
        this.tail = this.tail.substring(string.length);
        this.pos += string.length;
        return string;
      };
      return "";
    };
    /**
     * Skips all text until the given regular expression can be matched. Returns
     * the skipped string, which is the entire tail if no match can be made.
     */
    Scanner.prototype.scanUntil = function(re){

      var index = this.tail.search(re),match;
      switch(index){case -1:
      match = this.tail;
      this.tail = "";
      break;case 0:
      match = "";
      break;default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);};
      this.pos += match.length;
      return match;
    };
    function Context(view, parent){

      this.view = view == null ? {
      } : view;
      this.parent = parent;
      this._cache = {
        '.' : this.view
      };
    };
    Context.make = function(view){

      return (view instanceof Context) ? view : new Context(view);
    };
    Context.prototype.push = function(view){

      return new Context(view, this);
    };
    Context.prototype.lookup = function(name){

      var value;
      if(name in this._cache){

        value = this._cache[name];
      } else {

        var context = this;
        while(context){

          if(name.indexOf('.') > 0){

            value = context.view;
            var names = name.split('.'),i = 0;
            while(value != null && i < names.length){

              value = value[names[i++]];
            };
          } else {

            value = context.view[name];
          };
          if(value != null)break;
          context = context.parent;
        };
        this._cache[name] = value;
      };
      if(isFunction(value)){

        value = value.call(this.view);
      };
      return value;
    };
    function Writer(){

      this.clearCache();
    };
    Writer.prototype.clearCache = function(){

      this._cache = {
      };
      this._partialCache = {
      };
    };
    Writer.prototype.compile = function(template, tags){

      var fn = this._cache[template];
      if(!fn){

        var tokens = mustache.parse(template, tags);
        fn = this._cache[template] = this.compileTokens(tokens, template);
      };
      return fn;
    };
    Writer.prototype.compilePartial = function(name, template, tags){

      var fn = this.compile(template, tags);
      this._partialCache[name] = fn;
      return fn;
    };
    Writer.prototype.getPartial = function(name){

      if(!(name in this._partialCache) && this._loadPartial){

        this.compilePartial(name, this._loadPartial(name));
      };
      return this._partialCache[name];
    };
    Writer.prototype.compileTokens = function(tokens, template){

      var self = this;
      return function(view, partials){

        if(partials){

          if(isFunction(partials)){

            self._loadPartial = partials;
          } else {

            for(var name in partials){

              self.compilePartial(name, partials[name]);
            };
          };
        };
        return renderTokens(tokens, self, Context.make(view), template);
      };
    };
    Writer.prototype.render = function(template, view, partials){

      return this.compile(template)(view, partials);
    };
    /**
     * Low-level function that renders the given `tokens` using the given `writer`
     * and `context`. The `template` string is only needed for templates that use
     * higher-order sections to extract the portion of the original template that
     * was contained in that section.
     */
    function renderTokens(tokens, writer, context, template){

      var buffer = '';
      // This function is used to render an artbitrary template
      // in the current context by higher-order functions.
      function subRender(template){

        return writer.render(template, context);
      };
      var token,tokenValue,value;
      for(var i = 0,len = tokens.length;i < len;++i){

        token = tokens[i];
        tokenValue = token[1];
        switch(token[0]){case '#':
        value = context.lookup(tokenValue);
        if(typeof value === 'object' || typeof value === 'string'){

          if(isArray(value)){

            for(var j = 0,jlen = value.length;j < jlen;++j){

              buffer += renderTokens(token[4], writer, context.push(value[j]), template);
            };
          } else if(value){

            buffer += renderTokens(token[4], writer, context.push(value), template);
          };
        } else if(isFunction(value)){

          var text = template == null ? null : template.slice(token[3], token[5]);
          value = value.call(context.view, text, subRender);
          if(value != null)buffer += value;
        } else if(value){

          buffer += renderTokens(token[4], writer, context, template);
        };;
        break;case '^':
        value = context.lookup(tokenValue);
        // Use JavaScript's definition of falsy. Include empty arrays.
        // See https://github.com/janl/mustache.js/issues/186
        if(!value || (isArray(value) && value.length === 0)){

          buffer += renderTokens(token[4], writer, context, template);
        };
        break;case '>':
        value = writer.getPartial(tokenValue);
        if(isFunction(value))buffer += value(context);
        break;case '&':
        value = context.lookup(tokenValue);
        if(value != null)buffer += value;
        break;case 'name':
        value = context.lookup(tokenValue);
        if(value != null)buffer += mustache.escape(value);
        break;case 'text':
        buffer += tokenValue;
        break;};
      };
      return buffer;
    };
    /**
     * Forms the given array of `tokens` into a nested tree structure where
     * tokens that represent a section have two additional items: 1) an array of
     * all tokens that appear in that section and 2) the index in the original
     * template that represents the end of that section.
     */
    function nestTokens(tokens){

      var tree = [];
      var collector = tree;
      var sections = [];
      var token;
      for(var i = 0,len = tokens.length;i < len;++i){

        token = tokens[i];
        switch(token[0]){case '#':case '^':
        sections.push(token);
        collector.push(token);
        collector = token[4] = [];
        break;case '/':
        var section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : tree;
        break;default:
        collector.push(token);};
      };
      return tree;
    };
    /**
     * Combines the values of consecutive text tokens in the given `tokens` array
     * to a single token.
     */
    function squashTokens(tokens){

      var squashedTokens = [];
      var token,lastToken;
      for(var i = 0,len = tokens.length;i < len;++i){

        token = tokens[i];
        if(token){

          if(token[0] === 'text' && lastToken && lastToken[0] === 'text'){

            lastToken[1] += token[1];
            lastToken[3] = token[3];
          } else {

            lastToken = token;
            squashedTokens.push(token);
          };
        };
      };
      return squashedTokens;
    };
    function escapeTags(tags){

      return [new RegExp(escapeRegExp(tags[0]) + "\\s*"), new RegExp("\\s*" + escapeRegExp(tags[1]))];
    };
    /**
     * Breaks up the given `template` string into a tree of token objects. If
     * `tags` is given here it must be an array with two string values: the
     * opening and closing tags used in the template (e.g. ["<%", "%>"]). Of
     * course, the default is to use mustaches (i.e. Mustache.tags).
     */
    function parseTemplate(template, tags){

      template = template || '';
      tags = tags || mustache.tags;
      if(typeof tags === 'string')tags = tags.split(spaceRe);
      if(tags.length !== 2)throw new Error('Invalid tags: ' + tags.join(', '));
      var tagRes = escapeTags(tags);
      var scanner = new Scanner(template);
      var sections = [];
      // Stack to hold section tokens
      var tokens = [];
      // Buffer to hold the tokens
      var spaces = [];
      // Indices of whitespace tokens on the current line
      var hasTag = false;
      // Is there a {{tag}} on the current line?
      var nonSpace = false;
      // Is there a non-space char on the current line?
      // Strips all whitespace tokens array for the current line
      // if there was a {{#tag}} on it and otherwise only space.
      function stripSpace(){

        if(hasTag && !nonSpace){

          while(spaces.length){

            delete tokens[spaces.pop()];
          };
        } else {

          spaces = [];
        };
        hasTag = false;
        nonSpace = false;
      };
      var start,type,value,chr,token,openSection;
      while(!scanner.eos()){

        start = scanner.pos;
        // Match any text between tags.
        value = scanner.scanUntil(tagRes[0]);
        if(value){

          for(var i = 0,len = value.length;i < len;++i){

            chr = value.charAt(i);
            if(isWhitespace(chr)){

              spaces.push(tokens.length);
            } else {

              nonSpace = true;
            };
            tokens.push(['text', chr, start, start + 1]);
            start += 1;
            // Check for whitespace on the current line.
            if(chr == '\n')stripSpace();
          };
        };
        // Match the opening tag.
        if(!scanner.scan(tagRes[0]))break;
        hasTag = true;
        // Get the tag type.
        type = scanner.scan(tagRe) || 'name';
        scanner.scan(whiteRe);
        // Get the tag value.
        if(type === '='){

          value = scanner.scanUntil(eqRe);
          scanner.scan(eqRe);
          scanner.scanUntil(tagRes[1]);
        } else if(type === '{'){

          value = scanner.scanUntil(new RegExp('\\s*' + escapeRegExp('}' + tags[1])));
          scanner.scan(curlyRe);
          scanner.scanUntil(tagRes[1]);
          type = '&';
        } else {

          value = scanner.scanUntil(tagRes[1]);
        };
        // Match the closing tag.
        if(!scanner.scan(tagRes[1]))throw new Error('Unclosed tag at ' + scanner.pos);
        token = [type, value, start, scanner.pos];
        tokens.push(token);
        if(type === '#' || type === '^'){

          sections.push(token);
        } else if(type === '/'){

          // Check section nesting.
          openSection = sections.pop();
          if(!openSection){

            throw new Error('Unopened section "' + value + '" at ' + start);
          };
          if(openSection[1] !== value){

            throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
          };
        } else if(type === 'name' || type === '{' || type === '&'){

          nonSpace = true;
        } else if(type === '='){

          // Set the tags for the next time around.
          tags = value.split(spaceRe);
          if(tags.length !== 2){

            throw new Error('Invalid tags at ' + start + ': ' + tags.join(', '));
          };
          tagRes = escapeTags(tags);
        };;;
      };
      // Make sure there are no open sections when we're done.
      openSection = sections.pop();
      if(openSection){

        throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
      };
      return nestTokens(squashTokens(tokens));
    };
    mustache.name = "mustache.js";
    mustache.version = "0.7.3";
    mustache.tags = ["{{", "}}"];
    mustache.Scanner = Scanner;
    mustache.Context = Context;
    mustache.Writer = Writer;
    mustache.parse = parseTemplate;
    // Export the escaping function so that the user may override it.
    // See https://github.com/janl/mustache.js/issues/244
    mustache.escape = escapeHtml;
    // All Mustache.* functions use this writer.
    var defaultWriter = new Writer();
    /**
     * Clears all cached templates and partials in the default writer.
     */
    mustache.clearCache = function(){

      return defaultWriter.clearCache();
    };
    /**
     * Compiles the given `template` to a reusable function using the default
     * writer.
     */
    mustache.compile = function(template, tags){

      return defaultWriter.compile(template, tags);
    };
    /**
     * Compiles the partial with the given `name` and `template` to a reusable
     * function using the default writer.
     */
    mustache.compilePartial = function(name, template, tags){

      return defaultWriter.compilePartial(name, template, tags);
    };
    /**
     * Compiles the given array of tokens (the output of a parse) to a reusable
     * function using the default writer.
     */
    mustache.compileTokens = function(tokens, template){

      return defaultWriter.compileTokens(tokens, template);
    };
    /**
     * Renders the `template` with the given `view` and `partials` using the
     * default writer.
     */
    mustache.render = function(template, view, partials){

      return defaultWriter.render(template, view, partials);
    };
    // This is here for backwards compatibility with 0.4.x.
    mustache.to_html = function(template, view, partials, send){

      var result = mustache.render(template, view, partials);
      if(isFunction(send)){

        send(result);
      } else {

        return result;
      };
    };
  }));
  /**
   * Above is the original mustache code.
   */
  // EXPOSE qooxdoo variant
  qx.bom.Template.version = this.Mustache.version;
  qx.bom.Template.render = this.Mustache.render;
}).call({
});


var exp = envinfo["qx.export"];
if (exp) {
  for (var name in exp) {
    var c = exp[name].split(".");
    var root = window;
    for (var i=0; i < c.length; i++) {
      root = root[c[i]];
    };
    window[name] = root;
  }
}

window["qx"] = undefined;
try {
  delete window.qx;
} catch(e) {}

})();