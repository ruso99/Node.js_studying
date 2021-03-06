// 모듈에 대해 알아보기

////____ 예제 1번, exports 객체 속성으로 추가 ____//

// exports 객체속성으로 함수 추가
// exports.getUser = function() {
//     return {id:'test01', name:'소녀시대'}; 
// }

// // exports 객체속성으로 객체 추가
// exports.group = {id:'group01', name:'친구'};



////____ 예제 2번, module.exports 에 객체 할당하기 ____//
// user1.js의 코드는 exports에 객체를 할당하는 것과 같으나, exports에는 속성만 추가할 수 있고 객체를 할당할 수는 없음
// Reason : exports는 속성으로, exports에 속성을 추가하면 모듈에서 접근하지만,
//          exports에 객체를 할당하면 자바스크립트에서 새로운 변수로 처리함
// exports = {
// 	getUser: function() {
// 		return {id:'test01', name:'소녀시대'};
// 	},
// 	group: {id:'group01', name:'친구'}
// }
///잘못된 함수///
///올바른 함수///
var user = {
    getUser: function() {
        return {id:'test01', name:'양이'};
    },
    group:{id:'group01', name:'고양이'}
}
module.exports = user;