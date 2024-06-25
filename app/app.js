
/**                           READ THE COMMENTS BELOW BEFORE REVIEWING THE CODE  */

//====================================BUILD KRATU,BUILD THE WORLD================================================ 

//===============================Copyright 2020, KRATU Community,All rights reserved==============================

//====================================================This is to Notify============================================

/**
 * ###################################  NOTE FOR COMMUNITY TEAM FROM CEO  ###################################### 
 * Note 1:This uses codemirror tools for editting and managing the codes                                       #
 * Note 2:CTO(Arghya) needs to go through line 3279 and make the paste the link of the desired documentation           # 
 * ############################### HOPE YOU SHALL LIKE IT#######################################################
 * 
 * 
 * 
 * ###################### NOTE FOR THE DEVELOPERS USING THIS SOFTWARE #########################################
 * NOTE 1:IF YOU WANNA GO NEED SOME DOCUMENTATION FOR YOURSELF LOOK OUT AT https://kratu-docs.web.app/        #
 * NOTE 2:AS PER THE SOFTWARE IS OPEN SOURCE YOU ARE FREE TO EDIT BUT DON'T DISTRIBUTE WITHOUT OUR PERMISSION # 
 * NOTE 3:FOR ANY QUERIES CONTACT THIS NUMBER 6295551550                                                      #
 * ############################################################################################################ 
 */

const fs = require('fs');
const tty = require('tty');
const Dialogs = require('dialogs');
const dialogs = Dialogs();
const userid = document.getElementById("name").value


document.cookie = "name:gruvbox-dark;expires=Wednesday, 25-Dec-2030 09:00:00 UTC";
function setupKratu() {


    function completeIfInTag(cm) {
        return completeAfter(cm, function () {
            var tok = cm.getTokenAt(cm.getCursor());
            if (tok.type == "string" && (!/['"]/.test(tok.string.charAt(tok.string.length - 1)) || tok.string.length == 1)) return false;
            var inner = CodeMirror.innerMode(cm.getMode(), tok.state).state;
            return inner.tagName;
        });
    }

    function completeAfter(cm, pred) {
        var cur = cm.getCursor();
        if (!pred || pred()) setTimeout(function () {
            if (!cm.state.completionActive)
                cm.showHint({ completeSingle: false });
        }, 100);
        return CodeMirror.Pass;
    }
    //this is the initialized center if our editor 
    window.editor = CodeMirror.fromTextArea(document.getElementById("varia"), {
        lineNumbers: true,
        mode: { name: "htmlmixed", javascript: true, css: true, json: true },
        theme: "gruvbox-dark",
        autoCloseBrackets: true,
        autoCloseTags: true,
        lineWrapping: true,
        extraKeys: {
            "'<'": completeAfter,
            "' '": completeIfInTag,
            "'='": completeIfInTag,
            "'.'": completeAfter,
            "Ctrl-Space": "autocomplete",
            "Ctrl-Q": function (cm) {
                cm.foldCode(cm.getCursor());
            }
        },
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        smartIndent: true,
        autofocus: true,
        matchTags: { bothTags: true },
        matchBrackets: true,
        showTrailingSpace: true
    });
    //this is the live compilation area
    var code = document.getElementById("preview-window").contentWindow.document;

    document.body.onkeyup = function () {
        document.getElementById("varia").innerHTML = editor.getValue();
        code.open();
        code.write(document.getElementById("varia").value);
        document.getElementById("secret").innerHTML = editor.getValue();
        document.getElementById("first-text").innerHTML = editor.getValue();
        code.close();
    };

    //below one is the json files reading for file managing
    document.getElementById("firstlbl").onclick = () => {
        var filename = document.getElementById("firstlbl").innerHTML;
        var arr = filename.split(".");
        if (arr[arr.length - 1] == "html") {
            editor.setOption("mode", "htmlmixed");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='html_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HTML";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = false;
            editor.setValue("");

        }
        //thsi section for the css
        if (arr[arr.length - 1] == "css") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");


            editor.setOption("mode", "css");

            document.getElementById("icon_scope").innerHTML = "<img src='css_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSS"
            iframe.style.display = "none";
            codem.style.width = "84em";

            document.getElementById("cssaria").style.display = "none";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this us the js section

        if (arr[arr.length - 1] == "js") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");


            editor.setOption("mode", "javascript");
            document.getElementById("icon_scope").innerHTML = "<img src='javascript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JS";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this is the python section
        if (arr[arr.length - 1] == "py") {

            editor.setOption("mode", "python");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='python_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PYTHON";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");

        }
        //thid is the sql section 
        if (arr[arr.length - 1] == "sql") {

            editor.setOption("mode", "sql");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='sql_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SQL";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");

        }
        //this is the clojure scetion
        /**if (arr[arr.length - 1] == "clj" || arr[arr.length - 1] == "cljs" || arr[arr.length - 1] == "edn") {
            editor.setValue(reader.result);
            editor.setOption("mode", "clojure");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").style.display = "none";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }
         */
        //this is the ruby section
        if (arr[arr.length - 1] == "rb") {

            editor.setOption("mode", "ruby");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='ruby_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> RUBY";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the dart scetion
        if (arr[arr.length - 1] == "dart") {

            editor.setOption("mode", "application/dart");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='dart_con.jpg' height='30px' width='30px' style='border-radius: 50%;'/> DART";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the typescript section 
        if (arr[arr.length - 1] == "ts") {

            editor.setOption("mode", "text/typescript");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='typescript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> TYPESCRIPT";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the json scetion
        if (arr[arr.length - 1] == "json") {

            editor.setOption("mode", "javascript");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='json_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JSON";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the xml section
        if (arr[arr.length - 1] == "xml") {

            editor.setOption("mode", "xml");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='xml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> XML";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this is the shell scetion 
        if (arr[arr.length - 1] == "sh" || arr[arr.length - 1] == "bat") {

            editor.setOption("mode", "shell");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='shell_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SHELLCODES";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //text section 
        if (arr[arr.length - 1] == "txt" || arr[arr.length - 1] == "md" || arr[arr.length - 1] == "file" || arr[arr.length - 1] == "properties" || arr[arr.length - 1] == "log") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");

            //editor.setValue(reader.result);
            editor.setOption("mode", "properties");
            document.getElementById("icon_scope").innerHTML = "<img src='txt_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> FILE-UNTITLED";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this dection for java

        if (arr[arr.length - 1] == "java") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-java");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='java_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JAVA";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for c

        if (arr[arr.length - 1] == "c") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csrc");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='c_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for c++

        if (arr[arr.length - 1] == "cpp") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-c++src");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='cpp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C++";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for the c# 
        if (arr[arr.length - 1] == "cs") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csharp");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='csharp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C#";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the csv section 
        if (arr[arr.length - 1] == "csv") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-spreadsheet");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='csv_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSV";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is c/c++ header section
        if (arr[arr.length - 1] == "h") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csrc");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='header_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HEADER FILE";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //tis is the yaml section 

        if (arr[arr.length - 1] == "yml") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "yaml");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='yaml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> YAmL";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the php section 
        if (arr[arr.length - 1] == "php") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "php");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='php_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PHP";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        editor.setValue(document.getElementById("first-text").innerText);
        var code = document.getElementById("preview-window").contentWindow.document;

   
        document.body.onkeyup = function () {
            code.open();
            code.write(editor.getValue());
            document.getElementById("secret").innerHTML = editor.getValue();
            document.getElementById("first-text").innerHTML = editor.getValue();
            code.close();
        };


    }
    document.getElementById("secondlbl").onclick = () => {
        var filename = document.getElementById("secondlbl").innerHTML;
        var arr = filename.split(".");
        if (arr[arr.length - 1] == "html") {
            editor.setOption("mode", "htmlmixed");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='html_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HTML";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = false;
            editor.setValue("");

        }
        //thsi section for the css
        if (arr[arr.length - 1] == "css") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");


            editor.setOption("mode", "css");

            document.getElementById("icon_scope").innerHTML = "<img src='css_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSS"
            iframe.style.display = "none";
            codem.style.width = "84em";

            document.getElementById("cssaria").style.display = "none";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this us the js section

        if (arr[arr.length - 1] == "js") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");


            editor.setOption("mode", "javascript");
            document.getElementById("icon_scope").innerHTML = "<img src='javascript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JS";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this is the python section
        if (arr[arr.length - 1] == "py") {

            editor.setOption("mode", "python");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='python_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PYTHON";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");

        }
        //thid is the sql section 
        if (arr[arr.length - 1] == "sql") {

            editor.setOption("mode", "sql");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='sql_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SQL";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");

        }
        //this is the clojure scetion
        /**if (arr[arr.length - 1] == "clj" || arr[arr.length - 1] == "cljs" || arr[arr.length - 1] == "edn") {
            editor.setValue(reader.result);
            editor.setOption("mode", "clojure");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").style.display = "none";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }
         */
        //this is the ruby section
        if (arr[arr.length - 1] == "rb") {

            editor.setOption("mode", "ruby");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='ruby_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> RUBY";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the dart scetion
        if (arr[arr.length - 1] == "dart") {

            editor.setOption("mode", "application/dart");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='dart_con.jpg' height='30px' width='30px' style='border-radius: 50%;'/> DART";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the typescript section 
        if (arr[arr.length - 1] == "ts") {

            editor.setOption("mode", "text/typescript");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='typescript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> TYPESCRIPT";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the json scetion
        if (arr[arr.length - 1] == "json") {

            editor.setOption("mode", "javascript");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='json_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JSON";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the xml section
        if (arr[arr.length - 1] == "xml") {

            editor.setOption("mode", "xml");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='xml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> XML";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this is the shell scetion 
        if (arr[arr.length - 1] == "sh" || arr[arr.length - 1] == "bat") {

            editor.setOption("mode", "shell");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='shell_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SHELLCODES";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //text section 
        if (arr[arr.length - 1] == "txt" || arr[arr.length - 1] == "md" || arr[arr.length - 1] == "file" || arr[arr.length - 1] == "properties" || arr[arr.length - 1] == "log") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");

            //editor.setValue(reader.result);
            editor.setOption("mode", "properties");
            document.getElementById("icon_scope").innerHTML = "<img src='txt_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> FILE-UNTITLED";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this dection for java

        if (arr[arr.length - 1] == "java") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-java");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='java_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JAVA";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for c

        if (arr[arr.length - 1] == "c") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csrc");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='c_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for c++

        if (arr[arr.length - 1] == "cpp") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-c++src");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='cpp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C++";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for the c# 
        if (arr[arr.length - 1] == "cs") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csharp");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='csharp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C#";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the csv section 
        if (arr[arr.length - 1] == "csv") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-spreadsheet");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='csv_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSV";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is c/c++ header section
        if (arr[arr.length - 1] == "h") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csrc");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='header_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HEADER FILE";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //tis is the yaml section 

        if (arr[arr.length - 1] == "yml") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "yaml");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='yaml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> YAmL";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the php section 
        if (arr[arr.length - 1] == "php") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "php");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='php_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PHP";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        var code = document.getElementById("preview-window").contentWindow.document;

    
        document.body.onkeyup = function () {
            code.open();
            code.write(editor.getValue());
            document.getElementById("secret").innerHTML = editor.getValue();
            document.getElementById("second-text").innerHTML = editor.getValue();
            code.close();
        };


        editor.setValue(document.getElementById("second-text").innerText);

    }
    document.getElementById("thirdlbl").onclick = () => {
        var filename = document.getElementById("thirdlbl").innerHTML;
        var arr = filename.split(".");
        if (arr[arr.length - 1] == "html") {
            editor.setOption("mode", "htmlmixed");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='html_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HTML";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = false;
            editor.setValue("");

        }
        //thsi section for the css
        if (arr[arr.length - 1] == "css") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");


            editor.setOption("mode", "css");

            document.getElementById("icon_scope").innerHTML = "<img src='css_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSS"
            iframe.style.display = "none";
            codem.style.width = "84em";

            document.getElementById("cssaria").style.display = "none";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this us the js section

        if (arr[arr.length - 1] == "js") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");


            editor.setOption("mode", "javascript");
            document.getElementById("icon_scope").innerHTML = "<img src='javascript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JS";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this is the python section
        if (arr[arr.length - 1] == "py") {

            editor.setOption("mode", "python");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='python_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PYTHON";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");

        }
        //thid is the sql section 
        if (arr[arr.length - 1] == "sql") {

            editor.setOption("mode", "sql");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='sql_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SQL";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");

        }
        //this is the clojure scetion
        /**if (arr[arr.length - 1] == "clj" || arr[arr.length - 1] == "cljs" || arr[arr.length - 1] == "edn") {
            editor.setValue(reader.result);
            editor.setOption("mode", "clojure");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").style.display = "none";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }
         */
        //this is the ruby section
        if (arr[arr.length - 1] == "rb") {

            editor.setOption("mode", "ruby");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='ruby_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> RUBY";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the dart scetion
        if (arr[arr.length - 1] == "dart") {

            editor.setOption("mode", "application/dart");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='dart_con.jpg' height='30px' width='30px' style='border-radius: 50%;'/> DART";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the typescript section 
        if (arr[arr.length - 1] == "ts") {

            editor.setOption("mode", "text/typescript");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='typescript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> TYPESCRIPT";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the json scetion
        if (arr[arr.length - 1] == "json") {

            editor.setOption("mode", "javascript");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='json_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JSON";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the xml section
        if (arr[arr.length - 1] == "xml") {

            editor.setOption("mode", "xml");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='xml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> XML";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this is the shell scetion 
        if (arr[arr.length - 1] == "sh" || arr[arr.length - 1] == "bat") {

            editor.setOption("mode", "shell");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='shell_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SHELLCODES";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //text section 
        if (arr[arr.length - 1] == "txt" || arr[arr.length - 1] == "md" || arr[arr.length - 1] == "file" || arr[arr.length - 1] == "properties" || arr[arr.length - 1] == "log") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");

            //editor.setValue(reader.result);
            editor.setOption("mode", "properties");
            document.getElementById("icon_scope").innerHTML = "<img src='txt_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> FILE-UNTITLED";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this dection for java

        if (arr[arr.length - 1] == "java") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-java");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='java_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JAVA";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for c

        if (arr[arr.length - 1] == "c") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csrc");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='c_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for c++

        if (arr[arr.length - 1] == "cpp") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-c++src");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='cpp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C++";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for the c# 
        if (arr[arr.length - 1] == "cs") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csharp");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='csharp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C#";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the csv section 
        if (arr[arr.length - 1] == "csv") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-spreadsheet");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='csv_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSV";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is c/c++ header section
        if (arr[arr.length - 1] == "h") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csrc");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='header_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HEADER FILE";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //tis is the yaml section 

        if (arr[arr.length - 1] == "yml") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "yaml");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='yaml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> YAmL";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the php section 
        if (arr[arr.length - 1] == "php") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "php");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='php_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PHP";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        var code = document.getElementById("preview-window").contentWindow.document;

    
        document.body.onkeyup = function () {
            code.open();
            code.write(editor.getValue());
            document.getElementById("secret").innerHTML = editor.getValue();
            document.getElementById("third-text").innerHTML = editor.getValue();
            code.close();
        };


        editor.setValue(document.getElementById("third-text").innerText);

    }
    document.getElementById("fourthlbl").onclick = () => {
        var filename = document.getElementById("fourthlbl").innerHTML;
        var arr = filename.split(".");
        if (arr[arr.length - 1] == "html") {
            editor.setOption("mode", "htmlmixed");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='html_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HTML";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = false;
            editor.setValue("");

        }
        //thsi section for the css
        if (arr[arr.length - 1] == "css") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");


            editor.setOption("mode", "css");

            document.getElementById("icon_scope").innerHTML = "<img src='css_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSS"
            iframe.style.display = "none";
            codem.style.width = "84em";

            document.getElementById("cssaria").style.display = "none";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this us the js section

        if (arr[arr.length - 1] == "js") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");


            editor.setOption("mode", "javascript");
            document.getElementById("icon_scope").innerHTML = "<img src='javascript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JS";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this is the python section
        if (arr[arr.length - 1] == "py") {

            editor.setOption("mode", "python");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='python_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PYTHON";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");

        }
        //thid is the sql section 
        if (arr[arr.length - 1] == "sql") {

            editor.setOption("mode", "sql");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='sql_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SQL";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");

        }
        //this is the clojure scetion
        /**if (arr[arr.length - 1] == "clj" || arr[arr.length - 1] == "cljs" || arr[arr.length - 1] == "edn") {
            editor.setValue(reader.result);
            editor.setOption("mode", "clojure");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").style.display = "none";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }
         */
        //this is the ruby section
        if (arr[arr.length - 1] == "rb") {

            editor.setOption("mode", "ruby");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='ruby_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> RUBY";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the dart scetion
        if (arr[arr.length - 1] == "dart") {

            editor.setOption("mode", "application/dart");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='dart_con.jpg' height='30px' width='30px' style='border-radius: 50%;'/> DART";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the typescript section 
        if (arr[arr.length - 1] == "ts") {

            editor.setOption("mode", "text/typescript");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='typescript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> TYPESCRIPT";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the json scetion
        if (arr[arr.length - 1] == "json") {

            editor.setOption("mode", "javascript");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='json_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JSON";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the xml section
        if (arr[arr.length - 1] == "xml") {

            editor.setOption("mode", "xml");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='xml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> XML";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this is the shell scetion 
        if (arr[arr.length - 1] == "sh" || arr[arr.length - 1] == "bat") {

            editor.setOption("mode", "shell");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='shell_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SHELLCODES";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //text section 
        if (arr[arr.length - 1] == "txt" || arr[arr.length - 1] == "md" || arr[arr.length - 1] == "file" || arr[arr.length - 1] == "properties" || arr[arr.length - 1] == "log") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");

            //editor.setValue(reader.result);
            editor.setOption("mode", "properties");
            document.getElementById("icon_scope").innerHTML = "<img src='txt_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> FILE-UNTITLED";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this dection for java

        if (arr[arr.length - 1] == "java") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-java");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='java_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JAVA";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for c

        if (arr[arr.length - 1] == "c") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csrc");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='c_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for c++

        if (arr[arr.length - 1] == "cpp") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-c++src");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='cpp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C++";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for the c# 
        if (arr[arr.length - 1] == "cs") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csharp");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='csharp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C#";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the csv section 
        if (arr[arr.length - 1] == "csv") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-spreadsheet");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='csv_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSV";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is c/c++ header section
        if (arr[arr.length - 1] == "h") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csrc");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='header_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HEADER FILE";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //tis is the yaml section 

        if (arr[arr.length - 1] == "yml") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "yaml");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='yaml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> YAmL";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the php section 
        if (arr[arr.length - 1] == "php") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "php");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='php_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PHP";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        var code = document.getElementById("preview-window").contentWindow.document;

    
        document.body.onkeyup = function () {
            code.open();
            code.write(editor.getValue());
            document.getElementById("secret").innerHTML = editor.getValue();
            document.getElementById("fourth-text").innerHTML = editor.getValue();
            code.close();
        };


        editor.setValue(document.getElementById("fourth-text").innerText);

    }
    document.getElementById("fifthlbl").onclick = () => {
        var filename = document.getElementById("fifthlbl").innerHTML;
        var arr = filename.split(".");
        if (arr[arr.length - 1] == "html") {
            editor.setOption("mode", "htmlmixed");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='html_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HTML";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = false;
            editor.setValue("");

        }
        //thsi section for the css
        if (arr[arr.length - 1] == "css") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");


            editor.setOption("mode", "css");

            document.getElementById("icon_scope").innerHTML = "<img src='css_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSS"
            iframe.style.display = "none";
            codem.style.width = "84em";

            document.getElementById("cssaria").style.display = "none";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this us the js section

        if (arr[arr.length - 1] == "js") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");


            editor.setOption("mode", "javascript");
            document.getElementById("icon_scope").innerHTML = "<img src='javascript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JS";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this is the python section
        if (arr[arr.length - 1] == "py") {

            editor.setOption("mode", "python");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='python_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PYTHON";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");

        }
        //thid is the sql section 
        if (arr[arr.length - 1] == "sql") {

            editor.setOption("mode", "sql");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='sql_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SQL";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");

        }
        //this is the clojure scetion
        /**if (arr[arr.length - 1] == "clj" || arr[arr.length - 1] == "cljs" || arr[arr.length - 1] == "edn") {
            editor.setValue(reader.result);
            editor.setOption("mode", "clojure");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").style.display = "none";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }
         */
        //this is the ruby section
        if (arr[arr.length - 1] == "rb") {

            editor.setOption("mode", "ruby");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='ruby_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> RUBY";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the dart scetion
        if (arr[arr.length - 1] == "dart") {

            editor.setOption("mode", "application/dart");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='dart_con.jpg' height='30px' width='30px' style='border-radius: 50%;'/> DART";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the typescript section 
        if (arr[arr.length - 1] == "ts") {

            editor.setOption("mode", "text/typescript");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='typescript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> TYPESCRIPT";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the json scetion
        if (arr[arr.length - 1] == "json") {

            editor.setOption("mode", "javascript");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='json_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JSON";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the xml section
        if (arr[arr.length - 1] == "xml") {

            editor.setOption("mode", "xml");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='xml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> XML";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this is the shell scetion 
        if (arr[arr.length - 1] == "sh" || arr[arr.length - 1] == "bat") {

            editor.setOption("mode", "shell");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='shell_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SHELLCODES";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //text section 
        if (arr[arr.length - 1] == "txt" || arr[arr.length - 1] == "md" || arr[arr.length - 1] == "file" || arr[arr.length - 1] == "properties" || arr[arr.length - 1] == "log") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");

            //editor.setValue(reader.result);
            editor.setOption("mode", "properties");
            document.getElementById("icon_scope").innerHTML = "<img src='txt_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> FILE-UNTITLED";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this dection for java

        if (arr[arr.length - 1] == "java") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-java");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='java_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JAVA";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for c

        if (arr[arr.length - 1] == "c") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csrc");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='c_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for c++

        if (arr[arr.length - 1] == "cpp") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-c++src");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='cpp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C++";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for the c# 
        if (arr[arr.length - 1] == "cs") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csharp");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='csharp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C#";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the csv section 
        if (arr[arr.length - 1] == "csv") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-spreadsheet");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='csv_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSV";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is c/c++ header section
        if (arr[arr.length - 1] == "h") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csrc");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='header_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HEADER FILE";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //tis is the yaml section 

        if (arr[arr.length - 1] == "yml") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "yaml");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='yaml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> YAmL";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the php section 
        if (arr[arr.length - 1] == "php") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "php");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='php_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PHP";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        var code = document.getElementById("preview-window").contentWindow.document;

    
        document.body.onkeyup = function () {
            code.open();
            code.write(editor.getValue());
            document.getElementById("secret").innerHTML = editor.getValue();
            document.getElementById("fifth-text").innerHTML = editor.getValue();
            code.close();
        };


        editor.setValue(document.getElementById("fifth-text").innerText);

    }
    document.getElementById("sixthlbl").onclick = () => {
        var filename = document.getElementById("sixthlbl").innerHTML;
        var arr = filename.split(".");
        if (arr[arr.length - 1] == "html") {
            editor.setOption("mode", "htmlmixed");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='html_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HTML";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = false;
            editor.setValue("");

        }
        //thsi section for the css
        if (arr[arr.length - 1] == "css") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");


            editor.setOption("mode", "css");

            document.getElementById("icon_scope").innerHTML = "<img src='css_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSS"
            iframe.style.display = "none";
            codem.style.width = "84em";

            document.getElementById("cssaria").style.display = "none";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this us the js section

        if (arr[arr.length - 1] == "js") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");


            editor.setOption("mode", "javascript");
            document.getElementById("icon_scope").innerHTML = "<img src='javascript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JS";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this is the python section
        if (arr[arr.length - 1] == "py") {

            editor.setOption("mode", "python");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='python_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PYTHON";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");

        }
        //thid is the sql section 
        if (arr[arr.length - 1] == "sql") {

            editor.setOption("mode", "sql");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='sql_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SQL";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");

        }
        //this is the clojure scetion
        /**if (arr[arr.length - 1] == "clj" || arr[arr.length - 1] == "cljs" || arr[arr.length - 1] == "edn") {
            editor.setValue(reader.result);
            editor.setOption("mode", "clojure");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").style.display = "none";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }
         */
        //this is the ruby section
        if (arr[arr.length - 1] == "rb") {

            editor.setOption("mode", "ruby");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='ruby_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> RUBY";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the dart scetion
        if (arr[arr.length - 1] == "dart") {

            editor.setOption("mode", "application/dart");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='dart_con.jpg' height='30px' width='30px' style='border-radius: 50%;'/> DART";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the typescript section 
        if (arr[arr.length - 1] == "ts") {

            editor.setOption("mode", "text/typescript");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='typescript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> TYPESCRIPT";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the json scetion
        if (arr[arr.length - 1] == "json") {

            editor.setOption("mode", "javascript");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='json_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JSON";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the xml section
        if (arr[arr.length - 1] == "xml") {

            editor.setOption("mode", "xml");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='xml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> XML";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this is the shell scetion 
        if (arr[arr.length - 1] == "sh" || arr[arr.length - 1] == "bat") {

            editor.setOption("mode", "shell");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='shell_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SHELLCODES";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //text section 
        if (arr[arr.length - 1] == "txt" || arr[arr.length - 1] == "md" || arr[arr.length - 1] == "file" || arr[arr.length - 1] == "properties" || arr[arr.length - 1] == "log") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");

            //editor.setValue(reader.result);
            editor.setOption("mode", "properties");
            document.getElementById("icon_scope").innerHTML = "<img src='txt_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> FILE-UNTITLED";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this dection for java

        if (arr[arr.length - 1] == "java") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-java");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='java_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JAVA";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for c

        if (arr[arr.length - 1] == "c") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csrc");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='c_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for c++

        if (arr[arr.length - 1] == "cpp") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-c++src");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='cpp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C++";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for the c# 
        if (arr[arr.length - 1] == "cs") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csharp");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='csharp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C#";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the csv section 
        if (arr[arr.length - 1] == "csv") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-spreadsheet");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='csv_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSV";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is c/c++ header section
        if (arr[arr.length - 1] == "h") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csrc");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='header_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HEADER FILE";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //tis is the yaml section 

        if (arr[arr.length - 1] == "yml") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "yaml");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='yaml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> YAmL";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the php section 
        if (arr[arr.length - 1] == "php") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "php");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='php_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PHP";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        var code = document.getElementById("preview-window").contentWindow.document;

    

        document.body.onkeyup = function () {
            code.open();
            code.write(editor.getValue());
            document.getElementById("secret").innerHTML = editor.getValue();
            document.getElementById("sixth-text").innerHTML = editor.getValue();
            code.close();
        };


        editor.setValue(document.getElementById("sixth-text").innerText);

    }
    document.getElementById("seventhlbl").onclick = () => {
        var filename = document.getElementById("seventhlbl").innerHTML;
        var arr = filename.split(".");
        if (arr[arr.length - 1] == "html") {
            editor.setOption("mode", "htmlmixed");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='html_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HTML";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = false;
            editor.setValue("");

        }
        //thsi section for the css
        if (arr[arr.length - 1] == "css") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");


            editor.setOption("mode", "css");

            document.getElementById("icon_scope").innerHTML = "<img src='css_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSS"
            iframe.style.display = "none";
            codem.style.width = "84em";

            document.getElementById("cssaria").style.display = "none";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this us the js section

        if (arr[arr.length - 1] == "js") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");


            editor.setOption("mode", "javascript");
            document.getElementById("icon_scope").innerHTML = "<img src='javascript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JS";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this is the python section
        if (arr[arr.length - 1] == "py") {

            editor.setOption("mode", "python");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='python_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PYTHON";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");

        }
        //thid is the sql section 
        if (arr[arr.length - 1] == "sql") {

            editor.setOption("mode", "sql");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='sql_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SQL";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");

        }
        //this is the clojure scetion
        /**if (arr[arr.length - 1] == "clj" || arr[arr.length - 1] == "cljs" || arr[arr.length - 1] == "edn") {
            editor.setValue(reader.result);
            editor.setOption("mode", "clojure");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").style.display = "none";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }
         */
        //this is the ruby section
        if (arr[arr.length - 1] == "rb") {

            editor.setOption("mode", "ruby");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='ruby_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> RUBY";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the dart scetion
        if (arr[arr.length - 1] == "dart") {

            editor.setOption("mode", "application/dart");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='dart_con.jpg' height='30px' width='30px' style='border-radius: 50%;'/> DART";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the typescript section 
        if (arr[arr.length - 1] == "ts") {

            editor.setOption("mode", "text/typescript");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='typescript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> TYPESCRIPT";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the json scetion
        if (arr[arr.length - 1] == "json") {

            editor.setOption("mode", "javascript");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='json_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JSON";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the xml section
        if (arr[arr.length - 1] == "xml") {

            editor.setOption("mode", "xml");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='xml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> XML";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this is the shell scetion 
        if (arr[arr.length - 1] == "sh" || arr[arr.length - 1] == "bat") {

            editor.setOption("mode", "shell");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='shell_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SHELLCODES";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //text section 
        if (arr[arr.length - 1] == "txt" || arr[arr.length - 1] == "md" || arr[arr.length - 1] == "file" || arr[arr.length - 1] == "properties" || arr[arr.length - 1] == "log") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");

            //editor.setValue(reader.result);
            editor.setOption("mode", "properties");
            document.getElementById("icon_scope").innerHTML = "<img src='txt_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> FILE-UNTITLED";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this dection for java

        if (arr[arr.length - 1] == "java") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-java");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='java_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JAVA";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for c

        if (arr[arr.length - 1] == "c") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csrc");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='c_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for c++

        if (arr[arr.length - 1] == "cpp") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-c++src");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='cpp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C++";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }

        //this section for the c# 
        if (arr[arr.length - 1] == "cs") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csharp");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='csharp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C#";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the csv section 
        if (arr[arr.length - 1] == "csv") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-spreadsheet");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='csv_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSV";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is c/c++ header section
        if (arr[arr.length - 1] == "h") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csrc");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='header_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HEADER FILE";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //tis is the yaml section 

        if (arr[arr.length - 1] == "yml") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "yaml");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='yaml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> YAmL";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        //this is the php section 
        if (arr[arr.length - 1] == "php") {
            //editor.setValue(reader.result);
            editor.setOption("mode", "php");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='php_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PHP";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
            editor.setValue("");
        }
        var code = document.getElementById("preview-window").contentWindow.document;
        document.body.onkeyup = function () {
            code.open();
            code.write(editor.getValue());
            document.getElementById("secret").innerHTML = editor.getValue();
            document.getElementById("seventh-text").innerHTML = editor.getValue();
            code.close();
        };

        editor.setValue(document.getElementById("seventh-text").innerText);

    }



    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            console.log(data.files_open);

            window.filearray = data.files_open;
            if (!filearray.length == 0) {
                document.getElementById("firstlbl").innerHTML = filearray[0];
                document.getElementById("secondlbl").innerHTML = filearray[1];
                document.getElementById("thirdlbl").innerHTML = filearray[2];
                document.getElementById("fourthlbl").innerHTML = filearray[3];
                document.getElementById("fifthlbl").innerHTML = filearray[4];
                document.getElementById("sixthlbl").innerHTML = filearray[5];
                document.getElementById("seventhlbl").innerHTML = filearray[6];


            }
            console.log(filearray);
        });
    document.getElementById("icon_scope").innerHTML = "<img src='html_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HTML";
}
function openFile(inputs) {

    let file = inputs.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    var filename = file.name;

    //alert(filename);
    var arr = filename.split(".");


    reader.onload = () => {
        filearray[6] = filearray[5]
        filearray[5] = filearray[4]
        filearray[4] = filearray[3]
        filearray[3] = filearray[2]
        filearray[2] = filearray[1]
        filearray[1] = filearray[0]
        filearray[0] = filename;

        document.getElementById("seventh-text").innerHTML = document.getElementById("sixth-text").innerHTML;
        document.getElementById("sixth-text").innerHTML = document.getElementById("fifth-text").innerHTML;
        document.getElementById("fifth-text").innerHTML = document.getElementById("fourth-text").innerHTML;
        document.getElementById("fourth-text").innerHTML = document.getElementById("third-text").innerHTML;
        document.getElementById("third-text").innerHTML = document.getElementById("second-text").innerHTML;
        document.getElementById("second-text").innerHTML = document.getElementById("first-text").innerHTML;
        document.getElementById("first-text").innerHTML = reader.result;

        console.log(filearray);

        const json_array = {
            files_open: filearray
        }
        const jsonstring = JSON.stringify(json_array);
        console.log(jsonstring);

        if (filearray[0] != null) {
            document.getElementById("firstlbl").innerHTML = filearray[0];
        }
        if (filearray[1] != null) {
            document.getElementById("secondlbl").innerHTML = filearray[1];
        }
        if (filearray[2] != null) {
            document.getElementById("thirdlbl").innerHTML = filearray[2];
        }
        if (filearray[3] != null) {
            document.getElementById("fourthlbl").innerHTML = filearray[3];
        }
        if (filearray[4] != null) {
            document.getElementById("fifthlbl").innerHTML = filearray[4];
        }
        if (filearray[5] != null) {
            document.getElementById("sixthlbl").innerHTML = filearray[5];
        }
        if (filearray[6] != null) {
            document.getElementById("seventhlbl").innerHTML = filearray[6];
        }

        document.getElementById("firstlbl").disabled = true;

        /**=========this is the language configuration section===================== */

        //this section for opening the html file 
        if (arr[arr.length - 1] == "html") {
            editor.setValue(reader.result);
            document.getElementById("icon_scope").innerHTML = "<img src='html_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HTML"
            document.getElementById("varia").style.display = "none";
            editor.setOption("mode", "htmlmixed");
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = false;
        }
        //thsi section for the css
        if (arr[arr.length - 1] == "css") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");

            editor.setValue(reader.result);
            editor.setOption("mode", "css");

            document.getElementById("icon_scope").innerHTML = "<img src='css_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSS"
            iframe.style.display = "none";
            codem.style.width = "84em";

            document.getElementById("cssaria").style.display = "none";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }

        //this us the js section

        if (arr[arr.length - 1] == "js") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");

            editor.setValue(reader.result);
            editor.setOption("mode", "javascript");
            document.getElementById("icon_scope").innerHTML = "<img src='javascript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JS";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }

        //this is the python section
        if (arr[arr.length - 1] == "py") {
            editor.setValue(reader.result);
            editor.setOption("mode", "python");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='python_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PYTHON";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;

        }
        //thid is the sql section 
        if (arr[arr.length - 1] == "sql") {
            editor.setValue(reader.result);
            editor.setOption("mode", "sql");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='sql_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SQL";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;

        }
        //this is the clojure scetion
        /**if (arr[arr.length - 1] == "clj" || arr[arr.length - 1] == "cljs" || arr[arr.length - 1] == "edn") {
            editor.setValue(reader.result);
            editor.setOption("mode", "clojure");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").style.display = "none";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }
         */
        //this is the ruby section
        if (arr[arr.length - 1] == "rb") {
            editor.setValue(reader.result);
            editor.setOption("mode", "ruby");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='ruby_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> RUBY";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }
        //this is the dart scetion
        if (arr[arr.length - 1] == "dart") {
            editor.setValue(reader.result);
            editor.setOption("mode", "application/dart");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='dart_con.jpg' height='30px' width='30px' style='border-radius: 50%;'/> DART";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }
        //this is the typescript section 
        if (arr[arr.length - 1] == "ts") {
            editor.setValue(reader.result);
            editor.setOption("mode", "text/typescript");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='typescript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> TYPESCRIPT";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }
        //this is the json scetion
        if (arr[arr.length - 1] == "json") {
            editor.setValue(reader.result);
            editor.setOption("mode", "javascript");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='json_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JSON";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }
        //this is the xml section
        if (arr[arr.length - 1] == "xml") {
            editor.setValue(reader.result);
            editor.setOption("mode", "xml");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='xml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> XML";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }

        //this is the shell scetion 
        if (arr[arr.length - 1] == "sh" || arr[arr.length - 1] == "bat") {
            editor.setValue(reader.result);
            editor.setOption("mode", "shell");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='shell_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SHELLCODES";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }

        //text section 
        if (arr[arr.length - 1] == "txt" || arr[arr.length - 1] == "md" || arr[arr.length - 1] == "file" || arr[arr.length - 1] == "properties" || arr[arr.length - 1] == "log") {
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");

            editor.setValue(reader.result);
            editor.setOption("mode", "properties");
            document.getElementById("icon_scope").innerHTML = "<img src='txt_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> FILE-UNTITLED";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("jsaria").style.display = "none";
            document.getElementById("cssaria").style.display = "none";
            document.getElementById("varia").style.display = "none";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }

        //this dection for java

        if (arr[arr.length - 1] == "java") {
            editor.setValue(reader.result);
            editor.setOption("mode", "text/x-java");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='java_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JAVA";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }

        //this section for c

        if (arr[arr.length - 1] == "c") {
            editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csrc");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='c_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }

        //this section for c++

        if (arr[arr.length - 1] == "cpp") {
            editor.setValue(reader.result);
            editor.setOption("mode", "text/x-c++src");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='cpp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C++";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }

        //this section for the c# 
        if (arr[arr.length - 1] == "cs") {
            editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csharp");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='csharp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C#";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }
        //this is the csv section 
        if (arr[arr.length - 1] == "csv") {
            editor.setValue(reader.result);
            editor.setOption("mode", "text/x-spreadsheet");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='csv_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSV";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }
        //this is c/c++ header section
        if (arr[arr.length - 1] == "h") {
            editor.setValue(reader.result);
            editor.setOption("mode", "text/x-csrc");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='header_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HEADER FILE";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }
        //tis is the yaml section 

        if (arr[arr.length - 1] == "yml") {
            editor.setValue(reader.result);
            editor.setOption("mode", "yaml");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='yaml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> YAmL";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }
        //this is the php section 
        if (arr[arr.length - 1] == "php") {
            editor.setValue(reader.result);
            editor.setOption("mode", "php");
            var iframe = document.getElementById("preview-window");
            var codem = document.querySelector(".CodeMirror");
            document.getElementById("icon_scope").innerHTML = "<img src='php_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PHP";
            iframe.style.display = "none";
            codem.style.width = "84em";
            document.getElementById("image").className = "fas fa-compress";
            document.getElementById("html").disabled = true;
        }

        var code = document.getElementById("preview-window").contentWindow.document;

        document.body.onkeyup = function () {
            code.open();
            code.write(editor.getValue());
            document.getElementById("secret").innerHTML = editor.getValue();
            document.getElementById("first-text").innerHTML = editor.getValue();
            code.close();
        };
        fs.writeFile("data.json", jsonstring, (err) => {
            if (err) { alert("error"); } else { console.log("success"); }
        });
    };

}


function createFile() {

    var codemirror = document.querySelector(".CodeMirror");
    var iframe = document.getElementById("preview-window");
    var filecreator = document.getElementById("filecreation");
    var linking = document.getElementById("linking");

    if (filecreator.style.display == "none") {
        codemirror.style.width = "64em";
        iframe.style.display = "none";
        linking.style.display = "none";
        filecreator.style.display = "block";
        filecreator.value = "";
        document.getElementById("input").value = "";
    } else {
        codemirror.style.width = "84em";
        iframe.style.display = "none";
        linking.style.display = "none";
        filecreator.style.display = "none";
    }
}

function setLanguage() {

    var arr = document.getElementById("input").value.split(".");
    console.log(arr[arr.length - 1]);
    //this section for the filearray taht is to be temporarily stored 
    filearray[6] = filearray[5]
    filearray[5] = filearray[4]
    filearray[4] = filearray[3]
    filearray[3] = filearray[2]
    filearray[2] = filearray[1]
    filearray[1] = filearray[0]
    filearray[0] = document.getElementById("input").value;

    document.getElementById("seventh-text").innerHTML = document.getElementById("sixth-text").innerHTML;
    document.getElementById("sixth-text").innerHTML = document.getElementById("fifth-text").innerHTML;
    document.getElementById("fifth-text").innerHTML = document.getElementById("fourth-text").innerHTML;
    document.getElementById("fourth-text").innerHTML = document.getElementById("third-text").innerHTML;
    document.getElementById("third-text").innerHTML = document.getElementById("second-text").innerHTML;
    document.getElementById("second-text").innerHTML = document.getElementById("first-text").innerHTML;
    


    console.log(filearray);

    const json_array = {
        files_open: filearray
    }
    const jsonstring = JSON.stringify(json_array);
    console.log(jsonstring);

    if (filearray[0] != null) {
        document.getElementById("firstlbl").innerHTML = filearray[0];
    }
    if (filearray[1] != null) {
        document.getElementById("secondlbl").innerHTML = filearray[1];
    }
    if (filearray[2] != null) {
        document.getElementById("thirdlbl").innerHTML = filearray[2];
    }
    if (filearray[3] != null) {
        document.getElementById("fourthlbl").innerHTML = filearray[3];
    }
    if (filearray[4] != null) {
        document.getElementById("fifthlbl").innerHTML = filearray[4];
    }
    if (filearray[5] != null) {
        document.getElementById("sixthlbl").innerHTML = filearray[5];
    }
    if (filearray[6] != null) {
        document.getElementById("seventhlbl").innerHTML = filearray[6];
    }
    //here comes the main file creating code
    if (arr[arr.length - 1] == "html") {
        editor.setOption("mode", "htmlmixed");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='html_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HTML";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = false;
        editor.setValue("");

    }
    //thsi section for the css
    if (arr[arr.length - 1] == "css") {
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");


        editor.setOption("mode", "css");

        document.getElementById("icon_scope").innerHTML = "<img src='css_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSS"
        iframe.style.display = "none";
        codem.style.width = "84em";

        document.getElementById("cssaria").style.display = "none";
        document.getElementById("jsaria").style.display = "none";
        document.getElementById("varia").style.display = "none";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }

    //this us the js section

    if (arr[arr.length - 1] == "js") {
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");


        editor.setOption("mode", "javascript");
        document.getElementById("icon_scope").innerHTML = "<img src='javascript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JS";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("jsaria").style.display = "none";
        document.getElementById("cssaria").style.display = "none";
        document.getElementById("varia").style.display = "none";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }

    //this is the python section
    if (arr[arr.length - 1] == "py") {

        editor.setOption("mode", "python");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='python_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PYTHON";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");

    }
    //thid is the sql section 
    if (arr[arr.length - 1] == "sql") {

        editor.setOption("mode", "sql");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='sql_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SQL";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");

    }
    //this is the clojure scetion
    /**if (arr[arr.length - 1] == "clj" || arr[arr.length - 1] == "cljs" || arr[arr.length - 1] == "edn") {
        editor.setValue(reader.result);
        editor.setOption("mode", "clojure");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").style.display = "none";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
    }
     */
    //this is the ruby section
    if (arr[arr.length - 1] == "rb") {

        editor.setOption("mode", "ruby");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='ruby_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> RUBY";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }
    //this is the dart scetion
    if (arr[arr.length - 1] == "dart") {

        editor.setOption("mode", "application/dart");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='dart_con.jpg' height='30px' width='30px' style='border-radius: 50%;'/> DART";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }
    //this is the typescript section 
    if (arr[arr.length - 1] == "ts") {

        editor.setOption("mode", "text/typescript");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='typescript_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> TYPESCRIPT";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }
    //this is the json scetion
    if (arr[arr.length - 1] == "json") {

        editor.setOption("mode", "javascript");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='json_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JSON";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }
    //this is the xml section
    if (arr[arr.length - 1] == "xml") {

        editor.setOption("mode", "xml");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='xml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> XML";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }

    //this is the shell scetion 
    if (arr[arr.length - 1] == "sh" || arr[arr.length - 1] == "bat") {

        editor.setOption("mode", "shell");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='shell_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> SHELLCODES";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }

    //text section 
    if (arr[arr.length - 1] == "txt" || arr[arr.length - 1] == "md" || arr[arr.length - 1] == "file" || arr[arr.length - 1] == "properties" || arr[arr.length - 1] == "log") {
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");

        //editor.setValue(reader.result);
        editor.setOption("mode", "properties");
        document.getElementById("icon_scope").innerHTML = "<img src='txt_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> FILE-UNTITLED";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("jsaria").style.display = "none";
        document.getElementById("cssaria").style.display = "none";
        document.getElementById("varia").style.display = "none";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }

    //this dection for java

    if (arr[arr.length - 1] == "java") {
        //editor.setValue(reader.result);
        editor.setOption("mode", "text/x-java");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='java_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> JAVA";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }

    //this section for c

    if (arr[arr.length - 1] == "c") {
        //editor.setValue(reader.result);
        editor.setOption("mode", "text/x-csrc");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='c_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }

    //this section for c++

    if (arr[arr.length - 1] == "cpp") {
        //editor.setValue(reader.result);
        editor.setOption("mode", "text/x-c++src");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='cpp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C++";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }

    //this section for the c# 
    if (arr[arr.length - 1] == "cs") {
        //editor.setValue(reader.result);
        editor.setOption("mode", "text/x-csharp");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='csharp_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> C#";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }
    //this is the csv section 
    if (arr[arr.length - 1] == "csv") {
        //editor.setValue(reader.result);
        editor.setOption("mode", "text/x-spreadsheet");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='csv_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> CSV";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }
    //this is c/c++ header section
    if (arr[arr.length - 1] == "h") {
        //editor.setValue(reader.result);
        editor.setOption("mode", "text/x-csrc");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='header_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> HEADER FILE";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }
    //tis is the yaml section 

    if (arr[arr.length - 1] == "yml") {
        //editor.setValue(reader.result);
        editor.setOption("mode", "yaml");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='yaml_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> YAmL";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }
    //this is the php section 
    if (arr[arr.length - 1] == "php") {
        //editor.setValue(reader.result);
        editor.setOption("mode", "php");
        var iframe = document.getElementById("preview-window");
        var codem = document.querySelector(".CodeMirror");
        document.getElementById("icon_scope").innerHTML = "<img src='php_icon.jpg' height='30px' width='30px' style='border-radius: 50%;'/> PHP";
        iframe.style.display = "none";
        codem.style.width = "84em";
        document.getElementById("image").className = "fas fa-compress";
        document.getElementById("html").disabled = true;
        editor.setValue("");
    }

    var code = document.getElementById("preview-window").contentWindow.document;
    document.getElementById("first-text").innerHTML="";


    document.body.onkeyup = function () {
        code.open();
        code.write(editor.getValue());
        document.getElementById("first-text").innerHTML = editor.getValue();
        document.getElementById("secret").innerHTML = editor.getValue();
        code.close();
    };
    document.getElementById("filecreation").style.display = "none";
    /**======================THE LABEL DISABELING SECTION =======================*/
    //document.getElementById("seventhlbl").disabled = false;
    //document.getElementById("sixthlbl").disabled = false;
   // document.getElementById("fifththlbl").disabled = false;
    //document.getElementById("fourthlbl").disabled = false;
    //document.getElementById("thirdlbl").disabled = false;
   // document.getElementById("secondlbl").disabled = false;
   // document.getElementById("firstlbl").disabled = true;
    //document.getElementById("sixthlbl").disabled=false; 
    /**==================THE END SECTION===================== */


}

function linkFile() {
    var codemirror = document.querySelector(".CodeMirror");
    var iframe = document.getElementById("preview-window");
    var filecreator = document.getElementById("filecreation");
    var linking = document.getElementById("linking");

    if (linking.style.display == "none") {
        codemirror.style.width = "64em";
        iframe.style.display = "none";
        filecreator.style.display = "none";
        linking.style.display = "block";
    } else {
        codemirror.style.width = "84em";
        linking.style.display = "none";
        iframe.style.display = "none";
        filecreator.style.display = "none";

    }
}

function Link() {
    var htmlfile = document.getElementById("htmlfile");
    var cssfile = document.getElementById("cssfile");
    var jsfile = document.getElementById("jsfile");
    var codemirror = document.querySelector(".CodeMirror");
    var iframe = document.getElementById("preview-window");
    var filecreator = document.getElementById("filecreation");
    var linking = document.getElementById("linking");
    var code = iframe.contentWindow.document;


    if (document.getElementById("firstlbl").innerHTML == htmlfile.value) {
        document.getElementById("htmlaria").innerHTML = document.getElementById("first-text").innerText;

    }
    if (document.getElementById("secondlbl").innerHTML == htmlfile.value) {
        document.getElementById("htmlaria").innerHTML = document.getElementById("second-text").innerText;

    }
    if (document.getElementById("thirdlbl").innerHTML == htmlfile.value) {
        document.getElementById("htmlaria").innerHTML = document.getElementById("third-text").innerText;

    }
    if (document.getElementById("fourthlbl").innerHTML == htmlfile.value) {
        document.getElementById("htmlaria").innerHTML = document.getElementById("fourth-text").innerText;

    }
    if (document.getElementById("fifthlbl").innerHTML == htmlfile.value) {
        document.getElementById("htmlaria").innerHTML = document.getElementById("fifth-text").innerText;

    }
    if (document.getElementById("sixthlbl").innerHTML == htmlfile.value) {
        document.getElementById("htmlaria").innerHTML = document.getElementById("sixth-text").innerText;

    }
    if (document.getElementById("seventhlbl").innerHTML == htmlfile.value) {
        document.getElementById("htmlaria").innerHTML = document.getElementById("seventh-text").innerText;

    }
    if (document.getElementById("firstlbl").innerHTML == cssfile.value) {
        document.getElementById("cssaria").innerHTML = document.getElementById("first-text").innerText;

    }
    if (document.getElementById("secondlbl").innerHTML == cssfile.value) {
        document.getElementById("cssaria").innerHTML = document.getElementById("second-text").innerText;

    }
    if (document.getElementById("thirdlbl").innerHTML == cssfile.value) {
        document.getElementById("cssaria").innerHTML = document.getElementById("third-text").innerText;

    }
    if (document.getElementById("fourthlbl").innerHTML == cssfile.value) {
        document.getElementById("cssaria").innerHTML = document.getElementById("fourth-text").innerText;

    }
    if (document.getElementById("fifthlbl").innerHTML == cssfile.value) {
        document.getElementById("cssaria").innerHTML = document.getElementById("fifth-text").innerText;

    }
    if (document.getElementById("sixthlbl").innerHTML == cssfile.value) {
        document.getElementById("cssaria").innerHTML = document.getElementById("sixth-text").innerText;

    }
    if (document.getElementById("seventhlbl").innerHTML == cssfile.value) {
        document.getElementById("cssaria").innerHTML = document.getElementById("seventh-text").innerText;

    }
    if (document.getElementById("firstlbl").innerHTML == jsfile.value) {
        document.getElementById("jsaria").innerHTML = document.getElementById("first-text").innerText;

    }
    if (document.getElementById("secondlbl").innerHTML == jsfile.value) {
        document.getElementById("jsaria").innerHTML = document.getElementById("second-text").innerText;

    }
    if (document.getElementById("thirdlbl").innerHTML == jsfile.value) {
        document.getElementById("jsaria").innerHTML = document.getElementById("third-text").innerText;

    }
    if (document.getElementById("fourthlbl").innerHTML == jsfile.value) {
        document.getElementById("jsaria").innerHTML = document.getElementById("fourth-text").innerText;

    }
    if (document.getElementById("fifthlbl").innerHTML == jsfile.value) {
        document.getElementById("jsaria").innerHTML = document.getElementById("fifth-text").innerText;

    }
    if (document.getElementById("sixthlbl").innerHTML == jsfile.value) {
        document.getElementById("jsaria").innerHTML = document.getElementById("sixth-text").innerText;

    }
    if (document.getElementById("seventhlbl").innerHTML == jsfile.value) {
        document.getElementById("jsaria").innerHTML = document.getElementById("seventh-text").innerText;

    }

    code.open();
    code.write(document.getElementById("htmlaria").value + "<style>" + document.getElementById("cssaria").value + "</style>\n" + "<script>" + document.getElementById("jsaria").value + "</script>");
    code.close();

    codemirror.style.width = "44em";
    linking.style.display = "none";
    iframe.style.display = "block";
    filecreator.style.display = "none";


}

const tags = {
    "!top": [
        "align-content",
        "all",
        "align-items",
        "align-self	",
        "animation-delay",
        "animation-direction",
        "animation-duration",
        "animation-fill-mode",
        "animation-iteration-count",
        "animation-name",
        "animation-play-state",
        "animation-timing-function",
        "backface-visibility",
        "background-attachment",
        "background-blend-mode",
        "background-clip",
        "background-color	",
        "background-image",
        "background-origin",
        "background-position",
        "background-repeat",
        "background-size", "border-style", "border-color",
        "border-bottom", "border-bottom-width", "border-bottom-style",
        "border-bottom-color",
        "border-bottom-left-radius",
        "border-bottom-right-radiu",
        "bottom-right",
        "border-bottom-style",
        "border-bottom-width",
        "border-collapse",
        "border-color",
        "border-image	",
        "border-image-outset",
        "border-image-repeat",
        "border-image-slice",
        "border-image-source",
        "border",
        "border-image-width",
        "border-left",
        "border-left-color",
        "border-left-style	",
        "border-left-width",
        "border-radius	",
        "border-right",
        "border-right-color	",
        "border-right-style",
        "border-right-width",
        "border-spacing",
        "border-style",
        "border-top", "border-top-width", "border-top-style",
        "border-top-color",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-top-style	",
        "border-top-width",
        "border-width",
        "box-decoration-break",
        "box-shadow",
        "box-sizing",
        "break-after",
        "break-before",
        "break-inside",
        "columns",
        "caption-side",
        "caret-color	",
        "@charset",
        "clear	",
        "column-count",
        "column-fill",
        "column-gap",
        "column-rule",
        "column-rule-color",
        "column-rule-style",
        "column-rule-width",
        "column-span", "column-width", "column-count",
        "counter-increment",
        "counter-reset",
        "cursor",

        "empty-cells",
        "flex-grow",
        "flex-shrink",
        "flex-basis",
        "flex-flow",
        "flex-direction",
        "flex-wrap properties",
        "flex-grow",
        "flex-shrink",
        "flex-wrap	",
        "font-style",
        "font-variant",
        "font-weight", "font-size",
        "font-family properties",
        "font-face",
        "font-family",
        "font-feature-settings",
        "font-feature-values", "font-variant-alternate",
        "font-kerning",
        "font-language-override", "language-specific",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-synthesis",
        "font-variant	",
        "small-caps font",
        "font-variant-alternates", "font-feature-values",
        "font-variant-caps",
        "font-variant-east-asian	",
        "font-variant-ligatures	",
        "font-variant-numeric",
        "font-variant-position",
        "font-weight",
        "grid-template-rows", "grid-template-columns", "grid-template-area",
        "grid-area",
        "grid-row-end",
        "grid-auto-columns	",
        "grid-auto-flow",
        "grid-auto-rows",
        "grid-column-end",
        "grid-column-start",
        "grid-row-gap", "grid-column-gap", "grid-row-start", "grid-row-end properties",
        "grid-row-end	",
        "grid-row-gap	",
        "grid-row-start",
        "grid-template-areas",
        "grid-template-columns",
        "grid-template-rows",
        "hanging-punctuation",

        "image-rendering",
        "justify-content",
        "letter-spacing",
        "line-break",
        "line-height",
        "list-style-image",
        "list-style-position",
        "list-style-type	",
        "margin-bottom	",
        "margin-left",
        "margin-right",
        "margin-top",
        "mask-type",
        "max-height",
        "max-width",
        "min-height	",
        "min-width	",
        "mix-blend-mode",
        "object-fit",
        "object-position	",
        "outline-width", "outline-style",
        "outline-color",
        "outline-offset",
        "outline-style",
        "outline-width",
        "overflow-x",
        "overflow-y",
        "padding-bottom",
        "padding-left",
        "padding-right	",
        "perspective-origin",
        "pointer-events",

        "scroll-behavior",
        "tab-size",
        "table-layout",
        "text-align",
        "text-align-last",
        "text-combine-upright	",
        "text-decoration-color	", "text-decoration",
        "text-decoration-line",
        "text-decoration-style",
        "text-indent	",
        "text-justify",
        "text-align",
        "text-orientation",
        "text-overflow",
        "text-shadow",
        "text-transform",
        "transform-origin",
        "transform-style",
        "transition-delay",
        "transition-duration",
        "transition-property",
        "unicode-bidi",
        "user-select",
        "vertical-align",
        "white-space",
        "word-break",
        "word-spacing",
        "word-wrap",
        "writing-mode",
        "z-index"
    ]
};

