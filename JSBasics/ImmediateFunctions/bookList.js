(
    function (data) {
        data.books = {};
        var bookList = [
            {author:"Author",name:"Book Name",price:"Price"},
            {author:"Kiran",name:"Cutejs",price:"500"}]
        data.books.add = function (book) {
            bookList.push(book);
        };
        data.books.update = function () {

        };
        data.books.get =function(){
            return bookList;
        };
        data.books.delete =function(){

        };

    }
)(window);

//   booksarry<==>data <==> window



