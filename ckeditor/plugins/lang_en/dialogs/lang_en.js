CKEDITOR.dialog.add( 'langENDialog', function( editor ) {
  return {
      title: 'Lựa chọn loại ngôn ngữ',
      minWidth: 400,
      minHeight: 200,
      contents: [
          {
              id: 'type_choosen',
              label: 'Chọn loại',
              elements: [
                  {
                      type: 'radio',
                      id: 'type_lang',
                      label: '',
                      items: [ [ 'Tiếng Nhật', 'lang_jp' ], [ 'Tiếng Anh', 'lang_en' ], [ 'Bỏ qua', 'no_lang' ] ],
                      default: 'lang_en',
                      style: 'background: #1abc9c',
                      // onChange: function( api ) {
                      //   // this = CKEDITOR.ui.dialog.select
                      //   alert( 'Current value: ' + this.getValue() );
                      // }
                  }
              ]
          }
      ],
      onOk: function() {
          var dialog = this;
          var type = dialog.getValueOf( 'type_choosen', 'type_lang' );
          var text = editor.getSelection().getSelectedText(); // Get Text
          console.log("Text cũ: " + text)
          var newElement = new CKEDITOR.dom.element(type);
          newElement.setText(text);
          editor.insertElement(newElement);
          // var select = editor.document.createElement( 'select' );
          // select.setAttribute( 'title', dialog.getValueOf( 'tab-basic', 'title' ) );
          // select.setText( dialog.getValueOf( 'tab-basic', 'abbr' ) );

          // var IDselect = dialog.getValueOf( 'tab-adv', 'IDselect' );
          // if ( IDselect )
          //     abbr.setAttribute( 'id', id );

          // editor.insertElement( IDselect );

      },
      exec : function( editor ) {
        var selected_text = editor.getSelection().getSelectedText(); // Get Text
        var newElement = new CKEDITOR.dom.element("p");              // Make Paragraff
        newElement.setAttributes({style: 'myclass'})                 // Set Attributes
        newElement.setText(selected_text);                           // Set text to element
        editor.insertElement(newElement);                            // Add Element
      }
  };
});