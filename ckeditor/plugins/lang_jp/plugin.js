CKEDITOR.plugins.add( 'lang_jp', {
  icons: 'lang_jp',
  init: function( editor ) {
      editor.addCommand( 'lang_jp', new CKEDITOR.dialogCommand( 'langJPDialog' ) );
      editor.ui.addButton( 'Lang_jp', {
          label: 'Chỉ định là tiếng Nhật',
          command: 'lang_jp',
          toolbar: 'insert'
      });

      CKEDITOR.dialog.add( 'langJPDialog', this.path + 'dialogs/lang_jp.js' );
  }
});