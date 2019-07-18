// function show(){

//     for ( x=3;x<5;x++){
//         console.log("val=>"+x);
//     }
//     console.log("x=>"+x);

// }
// show();

// /// 2. for in loop

// var x=function() {
// var names=[{id:1,"name":"abc"},{id:2,"name":"ab"},{id:3,"name":"ac"}]
// for(var key in names){
//     console.log("name=>"+JSON.stringify(key));  //shows indexes
//   console.log("name=>"+JSON.stringify(names[key])); //shows obj values

   
// }
// }();


// /// 3. for of loop

// var x=function() {
//     var names=[{id:1,"name":"abc"},{id:2,"name":"ab"},{id:3,"name":"ac"}]
//     for(var key of names){
//         console.log("name=>"+JSON.stringify(key));  //shows obj values
//       console.log("name=>"+JSON.stringify(names[key])); //undef
    
       
//     }
//     }();
    
//     //4)...rest parameters
// var lnm=["a","b","c"]
//     var restPara=function(a,b,...names){    //default paras will not work with rest paras
//         console.log("a=>"+a)
//         console.log("b=>"+b)
//         console.log("name=>"+names);

//     }(1,0,lnm);
 
// //5.string methods: slice()

// var show=function(){
// var str="qqqqabdbdbdbdooo";
// var result=str.slice(0,-2);
// console.log("result=>"+result); //result=>qqqqabdbdbdbdo
// }();

//6.string methods: split()

// var show=function(){
//     var str="qqqqabdbdbdbdooo sdfrf werfewrf wrwr rwrwr wrwqr";
//     var l=str.length;
//     console.log("length=>"+l)
//     var result=str.split(" ",l);
//     console.log("result=>"+JSON.stringify(result));
//     //length=>48
//     //result=>["qqqqabdbdbdbdooo","sdfrf","werfewrf","wrwr","rwrwr","wrwqr"]
//     }();

// //7.filter
// var names=["abc","abcd","abcd","aa","bb","absdf","sss"];
// var show=function(val,query){
// //console.log("values=>"+val);
//      return val.filter(function(el){
//         // console.log("el=>"+el);
//          //console.log("query=>"+query);
//        // var output=el.indexOf(query.toLowerCase())!==-1;
//        //console.log("result=>"+(output));      //return type is boolean

//          return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;   //return values
         
//      });

//     }
// //}(names,"ab");    //not work
// console.log("show=>"+show(names,"ab"));

// console.log("show 2=>"+show(names,"s"));

// var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// /**
//  * Filter array items based on search criteria (query)
//  */
// var filterItems=function (arr, query) {
//   return arr.filter(function(el) {
//       return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//   })
// };

// console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
// console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']


// //8.foreach()

// var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
// var num=[1,2,3,1];
// var show=function(val){
//     console.log("type=>"+typeof(val));
//     return val.forEach(element => {
//         console.log("result=>"+(element+10));
//     });

// }(num);
// /*
// type=>object
// result=>11
// result=>12
// result=>13
// result=>11
// */

//9. map()
var num=[1,2,3,1];
var show=function(val){
    //console.log("val=>"+val);
    // val.forEach(function(val){
    //     if(val === Number){console.l}
    // })
    return val.map(function(value){
        return value+100;
    })

}(num);
console.log("values==>"+show);