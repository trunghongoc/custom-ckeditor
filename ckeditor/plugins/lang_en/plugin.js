CKEDITOR.plugins.add( 'lang_en', {
  icons: 'lang_en',
  init: function( editor ) {
      editor.addCommand( 'lang_en', new CKEDITOR.dialogCommand( 'langENDialog' ) );
      editor.ui.addButton( 'lang_en', {
          label: 'Chỉ định là tiếng Anh',
          command: 'lang_en',
          toolbar: 'insert'
      });

      CKEDITOR.dialog.add( 'langENDialog', this.path + 'dialogs/lang_en.js' );
  }
});