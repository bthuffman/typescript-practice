interface Post {
	postId: number, postBody: string,  postTitle: string
}

interface badPost {
	postId: number, postBody: string,  postTitle: string, postDate: string
}

class Foo {
	constructor(bar: string, baz: number, post : Post){
		this.setBar(bar);
		this.setBaz(baz);
	}

	function setBar(bar : string) {
		this.bar = bar;
	}

	function setBaz(baz : number) {
		if(baz === 42) {
			this.bar = "42 is the answer to life";
		}
		this.baz = baz;
	}
}

const post : Post = { postId:1, postBody: "I hope this works", postTitle: "I really hope this works"};

const fooObject : Foo = new Foo("I am a string", 42, post);

const betterPost : Post = {postId:2, postBody: "I hope this works", postTitle: "I really hope this works"};

function checkPostBody(newPost : Post) : void {
	let postBodyCheck : boolean = newPost.postBody === "I hope this breaks";
	console.log(postBodyCheck);
}

checkPostBody(post);

// line 23 purposely causes a type error
// badPost: badPost = {postId:1, postBody: "I hope this works", postTitle: "I really hope this works"};

const posts : Post[] = [post, betterPost];

const anyValue : any = "whatever you want it to be";