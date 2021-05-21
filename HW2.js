posts = [{ title: 'Post1', detail: 'PostDetail1' }, { title: 'Post2', detail: 'PostDetail2' }];

const listPosts = () => {
    posts.map((post) => {
        console.log(post.title);
    });
};

const addPost = (newPost) => {
    const promiseResult = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        //reject('BIR HATA OLUSTU');
    });

    return promiseResult;
};

async function showPostList() {
    try {
        await addPost({ title: "Post3", detail: "PostDetail3" });
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

//async
//showPostList();

//promise
const myPromise = new Promise((resolve, reject) => {
    let result = addPost({ title: "Post3", detail: "PostDetail3" });
    if (result) {
        listPosts();
        return resolve("SUCCESS");
    }
    else {
        return reject("ERROR");
    }
});

myPromise.then((res) => {
    console.log("Success", res);
}).catch((error) => {
    console.log("Error", error);
});