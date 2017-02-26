## Simditor-Upload-File

这是  `Simditor` 的一个小插件，支持文件上传

## 使用

只需要在 simditor.js 后引入这个文件即可

```js
<script type="text/javascript" src="[script path]/simditor.js"></script>
<!- .... ->
<script type="text/javascript" src="[script path]/simditor-upload-file.js"></script>
...
<script>
   var bindAttachUpload = function(uploadInput, callback){
     ...
   }
   this.editor = new Simditor({
      attach: {
        bindUpload: bindAttachUpload,
      },
      toolbar: [
        'uploadfile',
      ],
   }
</script>
```

