//typescript is javascript with extra syntax. Strongly typed.

//defining what makes up this object Post
interface Post {
	postId: number, postBody:string, postTitle: string
}
//another
interface BetterPost {
	postId: number, postBody:string, postTitle: string, postDate: string
}


//create the object, decalring state variables
const post : Post = {postId:1, postBody: "I hope this works", postTitle: "I really hope this works"};


//another, this will fail because violating the typescript we required
// const betterPost : BetterPost = {postId:1, postBody: "I hope this works", postTitle: "I really hope this works"};

//this one should work. The date is miliseconds since the begining of time, this can be
const betterPost : BetterPost = {postId:1, postBody: "I hope this works", postTitle: "I really hope this works", postDate: "1551715639409"};

//function with argument newPost that must have the type of post. Void specifies what the term type is, what it returns. This function returns noting (it's void)
function checkPostBody(newPost : Post) : void {
	let postBodyCheck : boolean = newPost.postBody === "I hope this breaks";
	console.log(postBodyCheck);
}

checkPostBody(post);

// line 28 purposely causes a type error. Declares an array
// badPost: badPost = {postId:1, postBody: "I hope this works", postTitle: "I really hope this works"};

const posts : Post[] = [post, betterPost];

//
const anyValue : any  = "whatever you want it to be";

//
class Foo {
	constructor(bar: string, bax: number) {
		this.setBar(bar);
		this.setBaz(baz);
	}
}