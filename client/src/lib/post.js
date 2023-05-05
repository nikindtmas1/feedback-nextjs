
export async function getSortedPostsData() {
    
    const responce = await fetch("http://localhost:5000/goshofeedbacks");
    const jsonData = await responce.json();
    return jsonData;
};