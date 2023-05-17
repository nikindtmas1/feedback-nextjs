
export async function getGoshoData() {
    
    const responce = await fetch("http://localhost:5000/goshofeedbacks");
    const jsonData = await responce.json();
    return jsonData;
};

export function getAllDataIds(params) {
    
}