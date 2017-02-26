(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define('simditor-upload-file', ["jquery", "simditor"], function (a0, b1) {
      return (root['UploadFile'] = factory(a0, b1));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"), require("Simditor"));
  } else {
    root['SimditorUploadFile'] = factory(root["jQuery"], root["Simditor"]);
  }
}(this, function ($, Simditor) {

  var UploadFile,
    __hasProp = {}.hasOwnProperty,
    __extends = function (child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  UploadFile = (function (_super) {
    __extends(UploadFile, _super);

    UploadFile.i18n = {
      'zh-CN': {
        uploadfile: '上传文件'
      },
      'en-US': {
        uploadfile: 'upload file'
      }
    };

    UploadFile.prototype.name = 'uploadfile';

    UploadFile.prototype.icon = 'upload';

    function UploadFile() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      UploadFile.__super__.constructor.apply(this, args);
      this._initUpload();
    }

    UploadFile.prototype._initUpload = function () {
      var attach = this.editor.opts.attach;
      if (!attach && !attach.bindUpload) {
        throw new Error('upload attach must config attach.')
      }
      this.input = $('<input />', {
        type: 'file',
        style: 'position:absolute;top:0;right:0;height:100%;width:100%;opacity:0;filter:alpha(opacity=0);cursor:pointer;'
      }).prependTo(this.el)
      var _this = this;
      this.el.on('click mousedown', 'input[type=file]', function (e) {
        _this.$rootNodes = _this.editor.selection.blockNodes();
        _this.editor.selection.save();
        return e.stopPropagation();
      });
      attach.bindUpload(this.input, function (data) {
        if (!_.isEmpty(data)) {
          var attachName, attachUrl;
          for (attachName in data) {
            attachUrl = data[attachName];
          }
          var $link = $('<a target="_blank" className="simditor-attach-link" href="' + attachUrl + '">' + attachName + '</a>');
          _this.editor.selection.restore();
          _this.editor.selection.insertNode($link);
        }
        _this.editor.trigger('valuechanged');
        _this.editor.trigger('selectionchanged');
      })
    }

    return UploadFile;

  })(Simditor.Button);

  Simditor.Toolbar.addButton(UploadFile);

  return UploadFile;

}));