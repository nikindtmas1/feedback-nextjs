
export async function getSortedPostsData() {
    
    const responce = await fetch("http://example.com/movies.json");
    const jsonData = await responce.json();
    console.log(jsonData);
    //return res.json();
};