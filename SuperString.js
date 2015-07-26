
module.exports = {
    invert: function(text){
        if(typeof(text) != 'string') {return "must be a string!";}
        else{
            var output="";

            for(var i=text.length-1;i>=0;i--){
                output +=text.charAt(i);
            }
            return output;
        }

    },
    camelcase: function(text){
        if(typeof(text) != 'string') {return "must be a string!";}
        else{
            var output = text.charAt(0).toUpperCase();

            for(var i = 1;i<text.length;i++){
                if(text.charAt(i-1)==" ") {
                    output+= text.charAt(i).toUpperCase();
                }
                else
                    output+= text.charAt(i);
            }
            return output;
        }

    },
    longestword: function(text){
        if(typeof(text) != 'string') {return "must be a string!";}
        else {
            var temp = text.split(" ");
            var longest = temp[0];
            for(var i =1;i<temp.length;i++){
                if(temp[i].length>longest.length){
                    longest = temp[i];
                }
            }

            return longest;
        }
    },
    uncamelize: function(text) {
        if (typeof(text) != 'string') {
            return "must be a string!";
        }
        else {
            var output = text.charAt(0).toLowerCase();

            for (var i = 1; i < text.length; i++) {
                if (text.charAt(i - 1) == " ") {
                    output += text.charAt(i).toLowerCase();
                }
                else
                    output += text.charAt(i);
            }
            return output;
        }
    },

    shortestword: function(text){
            if(typeof(text) != 'string') {return "must be a string!";}
            else {
                var temp = text.split(" ");
                var shortest = temp[0];
                for(var i =0;i<temp.length;i++){
                    if(temp[i].length<shortest.length && temp[i].length!=0){
                        shortest = temp[i];
                    }
                }

                return shortest;
            }
    }


};
