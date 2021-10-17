import React from 'react';
import { useEffect, useState } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import Editor from 'froala-editor';

import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/languages/tr.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/themes/gray.min.css";

export default function App() {
  const [model, setModel] = useState(`<h2>HTML Edit&ouml;r Kullanımı</h2>
    <ul>
      <li>Metni <strong>istediğiniz </strong><em>gibi</em> <span style="background-color: #f1c40f;">formatlayabilirsiniz.</span></li>
      <li><a href="https://kuveytturk.com.tr/" target="_blank" rel="noopener">Link </a>verebilirsiniz.</li>
      <li>Resim ekleyebilir, boyutlarını değiştirebilirsiniz.</li>
    </ul >
      <p><img src="https://www.google.se/images/google_80wht.gif" alt="logo" width="150" height="70" /></p>
      <ul>
      <li>Tablo ekleyip d&uuml;zenleyebilirsiniz.</li>
      </ul>
      <table style="border-collapse: collapse; width: 59.6567%; height: 44px;" border="1">
      <tbody>
      <tr style="height: 22px;">
      <td style="width: 33.3333%; height: 22px;">Kolon-1</td>
      <td style="width: 33.3333%; height: 22px;">Kolon-2</td>
      <td style="width: 33.3333%;">Kolon-3</td>
      </tr>
      <tr style="height: 22px;">
      <td style="width: 33.3333%; height: 22px;">1</td>
      <td style="width: 33.3333%; height: 22px;">2</td>
      <td style="width: 33.3333%; height: 22px;">3</td>
      </tr>
      <tr>
      <td style="width: 33.3333%;">a</td>
      <td style="width: 33.3333%;">b</td>
      <td style="width: 33.3333%;">c</td>
      </tr>
      </tbody>
      </table>`);

  // http://svgicons.sparkk.fr/ 
  Editor.DefineIcon('saveIcon', { PATH: 'M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688' });
  //Editor.DefineIcon('downloadIcon', { PATH: 'M15.608,6.262h-2.338v0.935h2.338c0.516,0,0.934,0.418,0.934,0.935v8.879c0,0.517-0.418,0.935-0.934,0.935H4.392c-0.516,0-0.935-0.418-0.935-0.935V8.131c0-0.516,0.419-0.935,0.935-0.935h2.336V6.262H4.392c-1.032,0-1.869,0.837-1.869,1.869v8.879c0,1.031,0.837,1.869,1.869,1.869h11.216c1.031,0,1.869-0.838,1.869-1.869V8.131C17.478,7.099,16.64,6.262,15.608,6.262z M9.513,11.973c0.017,0.082,0.047,0.162,0.109,0.226c0.104,0.106,0.243,0.143,0.378,0.126c0.135,0.017,0.274-0.02,0.377-0.126c0.064-0.065,0.097-0.147,0.115-0.231l1.708-1.751c0.178-0.183,0.178-0.479,0-0.662c-0.178-0.182-0.467-0.182-0.645,0l-1.101,1.129V1.588c0-0.258-0.204-0.467-0.456-0.467c-0.252,0-0.456,0.209-0.456,0.467v9.094L8.443,9.553c-0.178-0.182-0.467-0.182-0.645,0c-0.178,0.184-0.178,0.479,0,0.662L9.513,11.973z' });
  Editor.DefineIcon('wordIcon', { PATH: ' M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495-0.293C7.48,12.784,7.35,12.562,7.131,12.507M18.159,3.677v10.701c0,0.186-0.126,0.348-0.306,0.393l-7.755,1.948c-0.07,0.016-0.134,0.016-0.204,0l-7.748-1.948c-0.179-0.045-0.306-0.207-0.306-0.393V3.677c0-0.267,0.249-0.461,0.509-0.396l7.646,1.921l7.654-1.921C17.91,3.216,18.159,3.41,18.159,3.677 M9.589,5.939L2.656,4.203v9.857l6.933,1.737V5.939z M17.344,4.203l-6.939,1.736v9.859l6.939-1.737V4.203z M16.168,6.645c-0.058-0.218-0.279-0.351-0.498-0.294l-4.011,1.037c-0.218,0.057-0.351,0.28-0.293,0.498c0.128,0.503,0.755,0.216,0.498,0.292l4.009-1.034C16.092,7.085,16.225,6.863,16.168,6.645 M16.168,9.38c-0.058-0.218-0.279-0.349-0.498-0.294l-4.011,1.036c-0.218,0.057-0.351,0.279-0.293,0.498c0.124,0.486,0.759,0.232,0.498,0.294l4.009-1.037C16.092,9.82,16.225,9.598,16.168,9.38 M14.963,12.385c-0.055-0.219-0.276-0.35-0.495-0.294l-2.809,0.726c-0.218,0.056-0.351,0.279-0.293,0.496c0.127,0.506,0.755,0.218,0.498,0.293l2.807-0.723C14.89,12.825,15.021,12.603,14.963,12.385' });

  Editor.RegisterCommand('downloadHtml', {
    title: 'Html Kaydet',
    icon: 'saveIcon',
    focus: false,
    undo: true,
    refreshAfterCallback: true,
    callback: function () {
      downloadHtml('download.html', this.html.get());
    }
  });
  Editor.RegisterCommand('downloadWord', {
    title: 'Word Kaydet',
    icon: 'wordIcon',
    focus: false,
    undo: true,
    refreshAfterCallback: true,
    callback: function () {
      downloadDoc('download.doc', this.html.get());
    }
  });
  Editor.RegisterCommand('downloadPdf', {
    title: 'PDF Kaydet',
    icon: 'getPDF',
    focus: false,
    undo: true,
    refreshAfterCallback: true,
    callback: function () {
      downloadPdf('download.pdf', this.html.get());
    }
  });

  let plugins = ['align', 'charCounter', 'codeBeautifier', 'codeView', 'colors', 'draggable',
    'embedly', 'emoticons', 'entities', 'file', 'fontAwesome', 'fontFamily', 'fontSize', 'fullscreen',
    'help', 'image', 'imageTUI', 'inlineClass', 'inlineStyle', 'lineHeight', 'link', 'lists',
    'paragraphFormat', 'paragraphStyle', 'print', 'quickInsert', 'quote', 'save', 'specialCharacters', 'spellChecker',
    'table', 'url', 'video', 'wordPaste',];

  let defaultConfig = {
    theme: 'gray', // royal, gray, dark 
    language: "tr",
    charCounterCount: false,
    toolbarVisibleWithoutSelection: false,
    placeholderText: "First Content",
    width: 900,
    height: 500,
    // heightMin: this.props.heightMin,
    // heightMax: this.props.heightMax,
    pluginsEnabled: plugins,
    quickInsertEnabled: false,
    imageUploadRemoteUrls: false, // link ile ekleyince base64 engelliyor
    //imageManagerLoadURL: 'https://rcptest.herokuapp.com',
    attribution: false, // Remove the Powered By Froala message.
    key: "K...",
    events: {
      'initialized': function () {
        console.log("initialized", this);
      },
      'click': function (clickEvent) {
        // console.log('click', this);
      },
      'edit.on': function () {
        // if (this.state.disabled) {
        //   // console.log("editor on", this); 
        //   this.edit.off();
        // }
      },
      "image.beforeUpload": function (files) {
        var editor = this;
        if (files.length) {
          var reader = new FileReader();
          reader.onload = function (e) {
            var result = e.target.result;
            editor.image.insert(result, null, null, editor.image.get());
          };
          reader.readAsDataURL(files[0]); // Read image as base64.
        }
        editor.popups.hideAll();
        return false;
      }
    },
    toolbarButtons: {
      moreMisc: {
        align: "left",
        buttonsVisible: 2,
        buttons: [
          "undo",
          "redo",
          "print",
          //"getPDF",
          "downloadHtml",
          "downloadWord",
          "downloadPdf",
          "fullscreen",
          "html",
          "spellChecker",
          "selectAll",
          "help",
        ]
      },
      moreText: {
        buttonsVisible: 2,
        buttons: [
          "bold",
          "italic",
          "underline",
          "fontFamily",
          "fontSize",
          "textColor",
          "backgroundColor",
          "inlineClass",
          "inlineStyle",
          "strikeThrough",
          "subscript",
          "superscript",
          "clearFormatting",
        ]
      },
      moreParagraph: {
        buttonsVisible: 2,
        buttons: [
          "align",
          // "alignLeft",
          // "alignCenter",
          // "alignRight",
          // "alignJustify", 
          "formatUL",
          // "formatOLSimple",
          // "formatOL",
          "paragraphFormat",
          "paragraphStyle",
          "outdent",
          "indent",
          "lineHeight",
          "insertHR",
          "specialCharacters",
          "quote"
        ]
      },
      moreRich: {
        buttonsVisible: 2,
        buttons: [
          "insertImage",
          "insertTable",
          "insertVideo",
          "insertLink",
          "insertFile",
          "emoticons",
          "embedly"
        ]
      },
    },
  };

  return (
    <div>
      <h1>React Html Editör (Froala)</h1>
      <FroalaEditor
        model={model}
        onModelChange={setModel} // fonksiyon uygulamalarında kullanılır
        //model={this.state.value}
        //onModelChange={onChange.bind(this)} // class uygulamalarında kullanılır
        config={defaultConfig}
      />
    </div>
  );
}

function onChange(v) {
  //this.setState({ value: v });
}

function downloadHtml(fileName, htmlContent) {
  var universalBOM = "\uFEFF";
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(universalBOM + htmlContent));
  element.setAttribute('download', fileName);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function downloadDoc(fileName, htmlContent) {
  var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
    "xmlns:w='urn:schemas-microsoft-com:office:word' " +
    "xmlns='http://www.w3.org/TR/REC-html40'>" +
    "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
  var footer = "</body></html>";
  var sourceHTML = header + htmlContent + footer;
  var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
  var fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = fileName;
  fileDownload.click();
  document.body.removeChild(fileDownload);

  //this.exportHtmlContent(fileName, htmlContent, "OpenXml", 'docx');
};

function downloadPdf(fileName, htmlContent) {

  var optTest = {
    margin: [0, 50, 0, 50], // [vMargin, hMargin], or [top, left, bottom, right]
    filename: fileName,
    image: { type: 'jpeg', quality: 0.98 },
    enableLinks: true,
    html2canvas: { scale: 2, letterRendering: true, useCORS: true },
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'p' },
    //jsPDF: { unit: 'pt', format: 'letter', orientation: 'portrait' },
  };

  var opt = {
    margin: [25, 25, 25, 25], // [vMargin, hMargin], or [top, left, bottom, right]
    filename: fileName,
    image: { type: 'jpeg', quality: 0.95 },
    enableLinks: true,
    html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  //var exporter = new Html2Pdf(htmlContent, opt); 
  Html2Pdf().set(opt).from(htmlContent).save();

  //this.exportHtmlContent(fileName, htmlContent, 'Pdf', 'pdf');
};