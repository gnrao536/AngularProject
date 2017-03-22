(
    function () {
        function readData() {
            //getting the data from the controls
            var ctrls = getControls();
            var book = {};
            book.author = ctrls.author.value;
            book.price = ctrls.price.value;
            book.name = ctrls.bookName.value;
            books.add(book);
            buildTable();

        }
        function getControls() {
            //get the reference of the controls
            var controls = {};
            controls.btnAdd = document.getElementById("btnAdd");
            controls.author = document.getElementById("txtAuthor");
            controls.bookName = document.getElementById("txtBookName");
            controls.price = document.getElementById("txtPrice");

            return controls;
        }

        function bindEvents() {
            //place where to attach the events
            var ctrls = getControls();
            ctrls.btnAdd.addEventListener("click", readData);
        }

        function buildTable() {
            var tbl = document.getElementById("tblBooks");
            tbl.innerHTML="";
            var bookList= books.get();
            for (var i = 0; i < bookList.length; i++) {
                //in the first iterataion.
                var row = buildTableRow(bookList[i]);
                //  row = addAlternateColorsToRow(row,i);
                tbl.appendChild(row);
            }
        }


        function buildTableRow(book) {
            var row = document.createElement("tr");
            var author = buildColumn(book.author);
            //Extending the requriements
            var price = buildColumn(book.price);
            var bookName = buildColumn(book.name);
            //append three columns to row
            row.appendChild(author);
            row.appendChild(bookName);
            row.appendChild(price);
            return row;
        }

        function buildColumn(data) {
            var column = document.createElement("td");
            column.innerText = data;
            return column;
        }

        buildTable();

        bindEvents();
    }
)();