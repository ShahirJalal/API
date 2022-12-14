const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     }, 3000);
// }

// function getPost(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${posts.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'Post three', body: 'This is post three'});
// getPost();

// ////////////////////

// function createPost(post){
// 	setTimeout(function(){
// 		posts.push(post);
// 	}, 3000);
// }

// function getPost() {
// 	setTimeout(function() {
// 		let output = "";
// 		posts.forEach(function(post){
// 			output += `
// 			<li>${post.title}</li>`
// 		});
// 		document.body.innerHTML=output;
// 	}, 1000);
// }

// createPost({title:"Post Three", body:"This is post three"});
// getPost();



function createPost(post, callback) {
	setTimeout(function(){
		posts.push(post);
		callback();
	}, 3000)
}


function getPosts() {
	setTimeout(function() {
		let output = '';
		posts.forEach(function(post){
			output += `
			<li>${post.title}</li>`
		});
		document.body.innerHTML=output;
	}, 1000);
}

createPost({title:"Post Three", body:"This is post three"}, getPosts);